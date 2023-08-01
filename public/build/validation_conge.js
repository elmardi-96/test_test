(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validation_conge"],{

/***/ "./assets/js/ManagementErrors/index.js":
/*!*********************************************!*\
  !*** ./assets/js/ManagementErrors/index.js ***!
  \*********************************************/
/*! exports provided: ShowFormErrors, ShowFormErrorsWithParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrors", function() { return ShowFormErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrorsWithParam", function() { return ShowFormErrorsWithParam; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__);








var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function ShowFormErrors(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  jQuery.each(errors.violations, function (i, val) {
    var columnName = "";
    var x = val.propertyPath;
    if (isGroupe == true) {
      columnName = x;
    } else {
      if (x.search('\\[') != -1 && x.search('\\]') != -1) {
        var separators = ['\\]', '\\['];
        var arr = x.split(new RegExp(separators.join('|')));
        var columnName = arr[1];
      }
      if (x.search('data.') != -1) {
        var arr = x.split('.');
        var columnName = arr[1];
      }
    }
    //console.log(x)

    /*vérifier s'il s'agit d'une formulaire avec un champ type file */
    if (!jQuery("#" + form_name + "_" + columnName).length > 0) {
      columnName = columnName + '_file';
    }
    if (id) {
      columnName = id;
    }
    console.log(columnName);
    if (columnName != "") {
      console.log("#" + form_name + "_" + columnName);
      selector.find("#" + form_name + "_" + columnName).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
    }
  });
}
function ShowFormErrorsWithParam(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  $("#" + selector).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors + "</span></span></span>");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/components/module_ressource_humaine/validation_conge.js":
/*!***************************************************************************!*\
  !*** ./assets/js/components/module_ressource_humaine/validation_conge.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);


var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate("module_grs_validation_conge_show", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
/*historique show more */
$('body').on('click', '.show_more_historique_btn', function (e) {
  $('.show_more_historique').show();
  e.preventDefault();
});
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_validation_conge_list'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
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
    "width": "10%"
  }, {
    "orderable": true,
    "width": "10%"
  }, {
    "orderable": true,
    "width": "10%"
  }, {
    "orderable": true,
    "width": "10%"
  }, {
    "orderable": true,
    "width": "25%" /*className: "colonne-gras"*/
  }],

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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('datatables_langue'),
    "processing": true
  }
});
$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('.new').on('submit', '.form', function (e) {
  //alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_2__["create"](document.querySelector('.my-button'));
  l.start();
  // console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_validation_conge_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_validation_conge_index');
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
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_validation_conge_show', {
      'id': id
    });
    window.location.href = url;
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_transitions', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  var title = dta.get('title');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
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
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_transitions', {
            'id': id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_annuler', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Annulé\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_annuler', {
            'id': id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_encours', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"en cours\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-refresh'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_encours', {
            'id': id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_archiver', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Archivé\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_archiver', {
            'id': id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_creer', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Crée\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-plus'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_creer', {
            'id': id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_valider', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Validé\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_valider', {
            'id': id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_generer', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_apply_generer', {
        'id': id
      }),
      success: function success(result) {
        $('.actions').html(result);
        $(".actions").toggleClass('sidebar-open');
      }
    });
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});

/*update commande fournisseur */

$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var l = ladda__WEBPACK_IMPORTED_MODULE_2__["create"](document.querySelector('.my-button'));
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      $('.errors-list').remove();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
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
$('._delete_fichier').click(function (e) {
  var id = $(this).attr('id');
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_achat_commandefrs_fichiers_delete', {
            'id': id
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
    toastr.warning("Impossible d'effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});

/*supprimer un artcile commande détail */
$('.edit').on('submit', '.detail_form_delete', function (e) {
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  var token = dta.get('_token');
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_conge_delete', {
          'id': id,
          'token': token
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            location.reload();
          } else if (result.data == 403) {
            toastr.error(result.message.text, result.message.title, {
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

/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

$('.edit').on('submit', '.detail_edit', function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_congedet_edit_detail', {
      'id': id
    }),
    success: function success(result) {
      $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>" + result + "</td>");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
        timeOut: 4000
      });
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
  var selector = $(this).attr('class').split(' ')[0];
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_congedet_edit_detail', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
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
  e.preventDefault();
});
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
  var selector = $(this).attr('class').split(' ')[0];
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_grs_demande_congedet_insert', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
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
  e.preventDefault();
});

//$('.actions').on('submit', '.form_generer', function (e) {
//    var dta = new FormData(this);
//    var form_name = $(this).attr('name');
//    var id = table.row('.selected').id();
//    if (id) {
//        $.ajax({
//            type: 'POST',
//            url: Routing.generate('uv_deviscab_generer', {'id': id}),
//            data: dta,
//            processData: false,
//            contentType: false,
//            success: function (result, textStatus, errorThrown) {
//                if (result.errors) {
//                    $(".errors_list").html("");
//                    jQuery.each(result.errors.violations, function (i, val) {
//                        var x = val.propertyPath;
//                        var separators = ['\\]', '\\['];
//                        var arr = x.split(new RegExp(separators.join('|')));
//                        var columnName = arr[1];
//                        $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
//                    });
//                } else if (result.code == 200) {
//                    table.ajax.reload();
//                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                    $(".actions").empty().removeClass('sidebar-open');
//                }
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                toastr.error("Erreur", errorThrown, {timeOut: 4000})
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000});
//    }
//    e.preventDefault();
//})

//$('#_delete').click(function (e) {
//    var id = table.row('.selected').id();
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            table.ajax.reload();
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//
//
//
//
//$('body').on('submit', '.stock_produit_update_prix_achat', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_update_prix_achat', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                // console.log(result.errors);
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//
//
//$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_update_prix_vente', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                // console.log(result.errors);
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//
//$('body').on('submit', '.stock_produit_fichiers', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_fichiers', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//               console.log(result.errors);
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//
//
//
//$('._delete_fichier').click(function (e) {
//    var id = $(this).attr('id');
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_fichiers_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                            location.reload(); 
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//$('body').on('submit', '.stock_produit_add_stock', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_add_stock', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//             
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//$('#_show').click(function (e) {
//    var id = table.row('.selected').id();
//
//    if (id) {
//        var url = Routing.generate('u_article_show', {'id': id});
//        window.location.href = url;
//        // console.log(url)
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/module_ressource_humaine/validation_conge.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfcmVzc291cmNlX2h1bWFpbmUvdmFsaWRhdGlvbl9jb25nZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJTaG93Rm9ybUVycm9ycyIsInNlbGVjdG9yIiwiZm9ybV9uYW1lIiwiZXJyb3JzIiwiaWQiLCJpc0dyb3VwZSIsIiQiLCJyZW1vdmUiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJ2YWwiLCJjb2x1bW5OYW1lIiwieCIsInByb3BlcnR5UGF0aCIsInNlYXJjaCIsInNlcGFyYXRvcnMiLCJhcnIiLCJzcGxpdCIsIlJlZ0V4cCIsImpvaW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInBhcmVudCIsImFwcGVuZCIsInRpdGxlIiwiU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0iLCJvbiIsInVybCIsImdlbmVyYXRlIiwiY2xvc2VzdCIsImF0dHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlIiwic2hvdyIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidHlwZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImR0YSIsIkZvcm1EYXRhIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnQiLCJkYXRhIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzdG9wIiwiZW1wdHkiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwibWVzc2FnZSIsInRpbWVPdXQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY2xpY2siLCJyb3ciLCJnZXQiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwidmFsdWUiLCJjb2RlIiwicmVzcG9uc2VKU09OIiwiaHRtbCIsInRvZ2dsZUNsYXNzIiwidG9rZW4iLCJyb3dfaW5kZXgiLCJpbmRleCIsImVxIiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZFQUF1QyxDQUFDO0FBQzJDO0FBQzFHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUM5QixJQUFNSSxJQUFJLEdBQUdILG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNSSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUEyQjtFQUFBLElBQTFCQyxFQUFFLHVFQUFDLElBQUk7RUFBQSxJQUFDQyxRQUFRLHVFQUFHLEtBQUs7RUFDaEZDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsTUFBTSxFQUFFO0VBQzFCQyxNQUFN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLIiwiZmlsZSI6InZhbGlkYXRpb25fY29uZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5LmVhY2goZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgIGlmKGlzR3JvdXBlID09IHRydWUpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0geDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoeC5zZWFyY2goJ1xcXFxbJykgIT0gLTEgJiYgeC5zZWFyY2goJ1xcXFxdJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnZGF0YS4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4KVxyXG5cclxuLyp2w6lyaWZpZXIgcydpbCBzJ2FnaXQgZCd1bmUgZm9ybXVsYWlyZSBhdmVjIHVuIGNoYW1wIHR5cGUgZmlsZSAqL1xyXG4gICAgICAgIGlmICghalF1ZXJ5KFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBjb2x1bW5OYW1lICsgJ19maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpXHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmZpbmQoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIrc2VsZWN0b3IpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9ycyArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNkX29wXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwibW9kdWxlX2dyc192YWxpZGF0aW9uX2NvbmdlX3Nob3dcIiwge1xyXG4gICAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpLFxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICB9KTtcclxuLypoaXN0b3JpcXVlIHNob3cgbW9yZSAqL1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5zaG93X21vcmVfaGlzdG9yaXF1ZV9idG4nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnLnNob3dfbW9yZV9oaXN0b3JpcXVlJykuc2hvdygpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfdmFsaWRhdGlvbl9jb25nZV9saXN0JyksXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAtMV0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuICAgIFwicGFnZUxlbmd0aFwiOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMyVcIiwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwidGFyZ2V0c1wiOiBbMF19LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIgLypjbGFzc05hbWU6IFwiY29sb25uZS1ncmFzXCIqL30sXHJcbiAgICBdLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUuJCgndHIuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc192YWxpZGF0aW9uX2NvbmdlX25ldycpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX3ZhbGlkYXRpb25fY29uZ2VfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNfZWRpdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc192YWxpZGF0aW9uX2NvbmdlX3Nob3cnLCB7J2lkJzogaWR9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJyNtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfdHJhbnNpdGlvbnMnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIHRpdGxlID0gZHRhLmdldCgndGl0bGUnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0ICdcIiArIHRpdGxlICsgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X3RyYW5zaXRpb25zJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDb21tYW5kZSBub24gcmVuc2VpZ27DqSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnI21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV9hbm51bGVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0IFxcXCJBbm51bMOpXFxcIiBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24gIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV9hbm51bGVyJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDb21tYW5kZSBub24gcmVuc2VpZ27DqSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2VuY291cnMnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0IFxcXCJlbiBjb3Vyc1xcXCIgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtcmVmcmVzaCc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfZW5jb3VycycsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2FyY2hpdmVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0IFxcXCJBcmNoaXbDqVxcXCIgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfYXJjaGl2ZXInLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkNvbW1hbmRlIG5vbiByZW5zZWlnbsOpIFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJyNtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfY3JlZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgcGFzc2VyIMOgIGwnw6l0YXQgXFxcIkNyw6llXFxcIiBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1wbHVzJz48L2k+IE91aSFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV9jcmVlcicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X3ZhbGlkZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgcGFzc2VyIMOgIGwnw6l0YXQgXFxcIlZhbGlkw6lcXFwiIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV92YWxpZGVyJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDb21tYW5kZSBub24gcmVuc2VpZ27DqSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2dlbmVyZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfZ2VuZXJlcicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWN0aW9ucycpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcygnc2lkZWJhci1vcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDb21tYW5kZSBub24gcmVuc2VpZ27DqSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuLyp1cGRhdGUgY29tbWFuZGUgZm91cm5pc3NldXIgKi9cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX3VwZGF0ZScsIHtpZDogaWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnLl9kZWxldGVfZmljaGllcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfYWNoYXRfY29tbWFuZGVmcnNfZmljaGllcnNfZGVsZXRlJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiSW1wb3NzaWJsZSBkJ2VmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qc3VwcHJpbWVyIHVuIGFydGNpbGUgY29tbWFuZGUgZMOpdGFpbCAqL1xyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtX2RlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIHRva2VuID0gZHRhLmdldCgnX3Rva2VuJyk7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2RlbGV0ZScsIHsnaWQnOiBpZCwgJ3Rva2VuJzogdG9rZW59KSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4gKiBcclxuICogYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQndW4gbm91dmVhdSBhcnRpY2xlIFxyXG4gKiBcclxuICovXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9lZGl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICB2YXIgcm93X2luZGV4ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmluZGV4KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZWRldF9lZGl0X2RldGFpbCcsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyJykuZXEocm93X2luZGV4KS5hZGRDbGFzcygndGFibGUtdHItc3R5bGUnKS5odG1sKFwiPHRkIGNvbHNwYW49JzknPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4gKiBcclxuICogRW5yZWdpc3RyZXIgIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ2FydGljbGUgXHJcbiAqIFxyXG4gKi9cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZGV0YWlsX2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZWRldF9lZGl0X2RldGFpbCcsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJy5uZXctYXJ0aWNsZS1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnLmVkaXQtbmV3LWFydGljbGUnKS5zaG93KCk7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vKkFqb3V0ZXIgdW4gbm91dmVhdSBhcnRpY2xlIGRhbnMgbGEgcGFnZSBkZSBtb2RpZmljYXRpb24gKi9cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZGV0YWlsX2Zvcm1fYWRkX2FydGljbGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZF9jYWInKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VkZXRfaW5zZXJ0JywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuLy8kKCcuYWN0aW9ucycpLm9uKCdzdWJtaXQnLCAnLmZvcm1fZ2VuZXJlcicsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbi8vICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuLy8gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4vLyAgICBpZiAoaWQpIHtcclxuLy8gICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4vLyAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXZfZGV2aXNjYWJfZ2VuZXJlcicsIHsnaWQnOiBpZH0pLFxyXG4vLyAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuLy8gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbi8vICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAkKFwiLmVycm9yc19saXN0XCIpLmh0bWwoXCJcIik7XHJcbi8vICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzX2xpc3RcIikuYXBwZW5kKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPlwiICsgY29sdW1uTmFtZSArIFwiPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz4gXCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfSBlbHNlIHtcclxuLy8gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuLy8gICAgfVxyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSlcclxuXHJcblxyXG5cclxuLy8kKCcjX2RlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuLy8gICAgaWYgKGlkKSB7XHJcbi8vICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbi8vICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbi8vICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4vLyAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbi8vICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuLy8gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuLy8gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4vLyAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbi8vICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbi8vICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbi8vICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuLy8gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9kZWxldGUnLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgIH1cclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19wcm9kdWl0X3VwZGF0ZV9wcml4X2FjaGF0JywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgLy8gIGFsZXJ0KCk7XHJcbi8vICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuLy8gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuLy8gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbi8vICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4vLyAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4vLyAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X3VwZGF0ZV9wcml4X2FjaGF0JywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICBkYXRhOiBkdGEsXHJcbi8vICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbi8vICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuLy8gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbi8vICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSxcclxuLy8gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnN0b2NrX3Byb2R1aXRfdXBkYXRlX3ByaXhfdmVudGUnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAvLyAgYWxlcnQoKTtcclxuLy8gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4vLyAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4vLyAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuLy8gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbi8vICAgICQuYWpheCh7XHJcbi8vICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfdXBkYXRlX3ByaXhfdmVudGUnLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgIGRhdGE6IGR0YSxcclxuLy8gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuLy8gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4vLyAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuLy8gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyBcclxuLy8gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9LFxyXG4vLyAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgIH1cclxuLy8gICAgfSk7XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuLy9cclxuLy9cclxuLy8kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcuc3RvY2tfcHJvZHVpdF9maWNoaWVycycsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIC8vICBhbGVydCgpO1xyXG4vLyAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbi8vICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbi8vICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4vLyAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuLy8gICAgJC5hamF4KHtcclxuLy8gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9maWNoaWVycycsIHsnaWQnOiBpZH0pLFxyXG4vLyAgICAgICAgZGF0YTogZHRhLFxyXG4vLyAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4vLyAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4vLyAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbi8vICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSxcclxuLy8gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vJCgnLl9kZWxldGVfZmljaGllcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuLy8gICAgaWYgKGlkKSB7XHJcbi8vICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbi8vICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbi8vICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4vLyAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbi8vICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuLy8gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuLy8gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4vLyAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbi8vICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbi8vICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbi8vICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuLy8gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9maWNoaWVyc19kZWxldGUnLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgIH1cclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pO1xyXG4vL1xyXG4vLyQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19wcm9kdWl0X2FkZF9zdG9jaycsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIC8vICBhbGVydCgpO1xyXG4vLyAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbi8vICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbi8vICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4vLyAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuLy8gICAgJC5hamF4KHtcclxuLy8gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9hZGRfc3RvY2snLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgIGRhdGE6IGR0YSxcclxuLy8gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuLy8gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4vLyAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyBcclxuLy8gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9LFxyXG4vLyAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgIH1cclxuLy8gICAgfSk7XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuLy9cclxuLy8kKCcjX3Nob3cnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbi8vXHJcbi8vICAgIGlmIChpZCkge1xyXG4vLyAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VfYXJ0aWNsZV9zaG93JywgeydpZCc6IGlkfSk7XHJcbi8vICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuLy8gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuLy8gICAgfSBlbHNlIHtcclxuLy8gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICB9XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==