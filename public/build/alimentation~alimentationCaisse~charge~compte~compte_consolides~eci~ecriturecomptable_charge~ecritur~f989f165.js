(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"],{

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

/***/ "./assets/js/functions/autoFunctionAjax.js":
/*!*************************************************!*\
  !*** ./assets/js/functions/autoFunctionAjax.js ***!
  \*************************************************/
/*! exports provided: autoAjaxDelete, autoAjaxDelete3Param, autoAjaxRenderController, listActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAjaxDelete", function() { return autoAjaxDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAjaxDelete3Param", function() { return autoAjaxDelete3Param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAjaxRenderController", function() { return autoAjaxRenderController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listActions", function() { return listActions; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6__);






var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function autoAjaxDelete(obj) {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['reloadTable'] == true) {
              obj['table'].ajax.reload();
            }
            if (obj['modal'] == true && obj['hideModule'] == true) {
              $('#ModalDocumentDynamique').modal('hide');
            }
            if (obj['modal'] == true && obj['showModule'] == true) {
              $('#ModalDocumentDynamique').modal('show');
            }
            if (obj['redirection'] == 1) {
              window.location.reload();
            }
            if (obj['redirection'] == 2) {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj['redirection']);
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
function autoAjaxDelete3Param(obj) {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token'],
          'char': obj['char']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['reloadTable'] == true) {
              obj['table'].ajax.reload();
            }
            if (obj['modal'] == true && obj['hideModule'] == true) {
              $('#ModalDocumentDynamique').modal('hide');
            }
            if (obj['modal'] == true && obj['showModule'] == true) {
              $('#ModalDocumentDynamique').modal('show');
            }
            if (obj['redirection'] == 1) {
              window.location.reload();
            }
            if (obj['redirection'] == 2) {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj['redirection']);
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
function autoAjaxRenderController(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);
  obj['l'].start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj['route'], obj["parametre"]),
    data: obj['data'],
    processData: false,
    contentType: false,
    success: function success(result) {
      obj['l'].stop();
      if (obj['ladda']) {
        obj['ladda'].stopAll();
      }
      $(".errors-list").remove();
      if (result.errors) {
        //dump(result.errors);

        obj["ShowFormErrors"](obj["selector"], obj["form_name"], result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.code == 200) {
        // alert(result.data.id);

        //window.id = result.message.data;
        //window.description = result.message.description;

        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        if (obj['reloadTable'] == true) {
          obj['table'].ajax.reload();
        }
        if (obj['modal'] == true && obj['hideModule'] == true) {
          $('#ModalDocumentDynamique').modal('hide');
          if (obj["refreshSelect"] == true && result.message.description) {
            var data = {
              id: result.message.data,
              text: result.message.description
            };
            //window.thisElem.parent().find(".sel2")
            //window.thisElem.css('background','red')
            var newOption = new Option(data.text, data.id, false, false);
            obj['selectElement'].parent().find(".sel2").append(newOption).trigger('change.select2');
            obj['selectElement'].parent().find(".sel2").val(data.id).change();
          }
          //return result;
        }

        if (obj['modal'] == true && obj['showModule'] == true) {
          $('#ModalDocumentDynamique').modal('show');
          if (obj["refreshSelect"] == true && result.message.description) {
            var data = {
              id: result.message.data,
              text: result.message.description
            };
            //window.thisElem.parent().find(".sel2")
            //window.thisElem.css('background','red')
            var newOption = new Option(data.text, data.id, false, false);
            obj['selectElement'].parent().find(".sel2").append(newOption).trigger('change');
            obj['selectElement'].parent().find(".sel2").val(data.id).change();
          }
          //return result;
        }

        if (obj['redirection'] == 1) {
          window.location.reload();
        }
        if (obj['redirection'] == 2) {
          var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj['redirection']);
          window.location.href = url;
        }
        if (obj['autoTrigger'] == 1) {
          $("." + obj["triggerClass"]).trigger("click");
        }
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      obj['l'].stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
}
function listActions(obj) {
  $(".action_head").click(function () {
    console.log($(".action").filter(":checked").length);
    $(".action ,.action_head").prop("checked", $(this).prop("checked"));
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
  $("body").on("click", ".action", function () {
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
  $("body").on("click", ".scolumn_0", function () {
    $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
  $("body").on("change", ".list_actions", function () {
    //alert()

    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
      _array_ids.push($(this).val());
    });

    // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');

    // console.log($(this).val());
    if ($(this).val() == "_delete") {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_achatdemandeinternedet_multiple_delete"),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              console.log(result);
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
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_duppliquer") {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment duppliquer cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_achatdemandeinternedet_multiple_duppliquer"),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              //  console.log(result);
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
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_desactiver") {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-ban'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_precommande_demmande_desactiver"),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              console.log(result);
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
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_archiver") {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
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
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_achatdemandeinternedet_multiple_archiver"),
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
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_genener_factures" && _array_ids != null) {
      //alert()
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("ua_t_livraisonfrscab_generer_facture", {
          id: 0
        }),
        data: {
          _array_ids: _array_ids
        },
        success: function success(result) {
          if (result.code == 403) {
            $("#MyModal").modal("hide");
            toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000
            });
          } else {
            $(".bod").html(result).hide();
            $("#MyModal").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
          }
        }
      });
    }
    if ($(this).val() == "_change_dossier") {
      // alert();

      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj["dossier_path"]),
        data: {
          _array_ids: _array_ids
        },
        success: function success(result) {
          if (result.code == 403) {
            $("#MyModal").modal("hide");
            toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000
            });
          } else {
            $(".bod").html(result).hide();
            $('.sel2').select2();
            $("#MyModal").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
          }
        }
      });
    }
    if ($(this).val() == "_desactiver_commande") {
      // alert();
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('ua_t_commandefrscab_desactiver'),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
            }
          });
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_desactiver_livraison") {
      // alert();
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('t_UaTLivraisonfrscab_desactiver'),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
            }
          });
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_delete_livraison") {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_UaTLivraisonfrscab_delete_livraison"),
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
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_desactiver_facture") {
      // alert();
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('ua_t_facturefrscab_desactiver'),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
            }
          });
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_desactiver_facture_ac") {
      // alert();
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('ua_t_facturefrscab_desactiver'),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
            }
          });
          $("._multiple_actions").val("");
        }
      });
    }
    if ($(this).val() == "_desactiver_facture_av") {
      // alert();
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('ua_t_facturefrscab_desactiver'),
            data: {
              _array_ids: _array_ids
            },
            success: function success(result) {
              if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
            }
          });
          $("._multiple_actions").val("");
        }
      });
    }
  });
  $("body").on("submit", ".change_dossier", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
      _array_ids.push($(this).val());
    });
    dta.append('data', _array_ids);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    l.start();
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate(obj["dossier_path"]),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        l.stop();
        if (result.errors) {
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.code == 403) {
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
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiU2hvd0Zvcm1FcnJvcnMiLCJzZWxlY3RvciIsImZvcm1fbmFtZSIsImVycm9ycyIsImlkIiwiaXNHcm91cGUiLCIkIiwicmVtb3ZlIiwialF1ZXJ5IiwiZWFjaCIsInZpb2xhdGlvbnMiLCJpIiwidmFsIiwiY29sdW1uTmFtZSIsIngiLCJwcm9wZXJ0eVBhdGgiLCJzZWFyY2giLCJzZXBhcmF0b3JzIiwiYXJyIiwic3BsaXQiLCJSZWdFeHAiLCJqb2luIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCJ0aXRsZSIsIlNob3dGb3JtRXJyb3JzV2l0aFBhcmFtIiwiYXV0b0FqYXhEZWxldGUiLCJvYmoiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInRleHQiLCJ0eXBlIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJjb2RlIiwidG9hc3RyIiwibWVzc2FnZSIsInRpbWVPdXQiLCJyZWxvYWQiLCJtb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIndhcm5pbmciLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwiYXV0b0FqYXhEZWxldGUzUGFyYW0iLCJhdXRvQWpheFJlbmRlckNvbnRyb2xsZXIiLCJzdGFydCIsImRhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3RvcCIsInN0b3BBbGwiLCJlbXB0eSIsImRlc2NyaXB0aW9uIiwibmV3T3B0aW9uIiwiT3B0aW9uIiwidHJpZ2dlciIsImNoYW5nZSIsImxpc3RBY3Rpb25zIiwiY2xpY2siLCJmaWx0ZXIiLCJwcm9wIiwidG9nZ2xlIiwib24iLCJfYXJyYXlfaWRzIiwicHVzaCIsInRhYmxlIiwiaHRtbCIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwic2VsZWN0MiIsImUiLCJhdHRyIiwiZHRhIiwiRm9ybURhdGEiLCJsIiwiTGFkZGEiLCJjcmVhdGUiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZFQUF1QyxDQUFDO0FBQzJDO0FBQzFHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUM5QixJQUFNSSxJQUFJLEdBQUdILG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNSSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUEyQjtFQUFBLElBQTFCQyxFQUFFLHVFQUFDLElBQUk7RUFBQSxJQUFDQyxRQUFRLHVFQUFHLEtBQUs7RUFDaEZDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0Ms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akJILGNBQWMsQ0FBQ0MsUUFBUSxFQUFFQyxTQUFTLEVBQUV5QyxNQUFNLENBQUN4QyxNQUFNLENBQUM7UUFDcEQsQ0FBQyxNQUFNLElBQUl3QyxNQUFNLENBQUNNLElBQUksSUFBSSxHQUFHLEVBQUU7VUFDN0JDLE1BQU0sQ0FBQ1EsT0FBTyxDQUFDZixNQUFNLENBQUNRLE9BQU8sQ0FBQ2YsSUFBSSxFQUFFTyxNQUFNLENBQUNRLE9BQU8sQ0FBQ3ZCLEtBQUssRUFBRTtZQUN4RHdCLE9BQU8sRUFBRTtVQUNYLENBQUMsQ0FBQztRQUNKLENBQUMsTUFBTSxJQUFJVCxNQUFNLENBQUN3QixJQUFJLEVBQUU7VUFDdEJqQixNQUFNLENBQUNGLE9BQU8sQ0FBQ0wsTUFBTSxDQUFDUSxPQUFPLENBQUNmLElBQUksRUFBRU8sTUFBTSxDQUFDUSxPQUFPLENBQUN2QixLQUFLLEVBQUU7WUFDeER3QixPQUFPLEVBQUU7VUFDWCxDQUFDLENBQUM7VUFDRkksUUFBUSxDQUFDSCxNQUFNLEVBQUU7UUFDbkI7TUFDRixDQUFDO01BQ0RNLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQy9Da0MsQ0FBQyxDQUFDMUIsSUFBSSxFQUFFO1FBQ1JwQixNQUFNLENBQUNTLEtBQUssQ0FBQyxRQUFRLEVBQUVHLFdBQVcsRUFBRTtVQUFFVixPQUFPLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDeEQ7SUFDRixDQUFDLENBQUM7SUFDRndDLENBQUMsQ0FBQ1MsY0FBYyxFQUFFO0VBQ3BCLENBQUMsQ0FBQztBQVVQLEMiLCJmaWxlIjoiYWxpbWVudGF0aW9ufmFsaW1lbnRhdGlvbkNhaXNzZX5jaGFyZ2V+Y29tcHRlfmNvbXB0ZV9jb25zb2xpZGVzfmVjaX5lY3JpdHVyZWNvbXB0YWJsZV9jaGFyZ2V+ZWNyaXR1cn5mOTg5ZjE2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG4gICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICBqUXVlcnkuZWFjaChlcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gXCJcIjtcclxuICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgaWYoaXNHcm91cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB4O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnXFxcXFsnKSAhPSAtMSAmJiB4LnNlYXJjaCgnXFxcXF0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFsnXFxcXF0nLCAnXFxcXFsnXTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdkYXRhLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHgpXHJcblxyXG4vKnbDqXJpZmllciBzJ2lsIHMnYWdpdCBkJ3VuZSBmb3JtdWxhaXJlIGF2ZWMgdW4gY2hhbXAgdHlwZSBmaWxlICovXHJcbiAgICAgICAgaWYgKCFqUXVlcnkoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbk5hbWUgKyAnX2ZpbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSlcclxuICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNcIitzZWxlY3RvcikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBhdXRvQWpheERlbGV0ZShvYmopIHtcclxuXHJcbiAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgIC8vY29uc29sZS5sb2coaWQgKyAnICcgKyB0b2tlbik7XHJcbiAgICBcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWxvYWRUYWJsZSddPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsndGFibGUnXS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsnbW9kYWwnXSA9PSB0cnVlICYmIG9ialsnaGlkZU1vZHVsZSddID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI01vZGFsRG9jdW1lbnREeW5hbWlxdWUnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsnbW9kYWwnXSA9PSB0cnVlICYmIG9ialsnc2hvd01vZHVsZSddID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI01vZGFsRG9jdW1lbnREeW5hbWlxdWUnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXSA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9ialsncmVkaXJlY3Rpb24nXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBhdXRvQWpheERlbGV0ZTNQYXJhbShvYmopIHtcclxuXHJcbiAgICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgLy8gIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cignZGF0YS10b2tlbicpO1xyXG4gICAgIC8vY29uc29sZS5sb2coaWQgKyAnICcgKyB0b2tlbik7XHJcbiAgICAgXHJcbiAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICQuYWpheCh7XHJcbiBcclxuICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ10sICdjaGFyJzogb2JqWydjaGFyJ119KSxcclxuICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWxvYWRUYWJsZSddPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbJ3RhYmxlJ10uYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsnbW9kYWwnXSA9PSB0cnVlICYmIG9ialsnaGlkZU1vZHVsZSddID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNNb2RhbERvY3VtZW50RHluYW1pcXVlJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsnbW9kYWwnXSA9PSB0cnVlICYmIG9ialsnc2hvd01vZHVsZSddID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNNb2RhbERvY3VtZW50RHluYW1pcXVlJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXSA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgfSk7XHJcbiB9XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBhdXRvQWpheFJlbmRlckNvbnRyb2xsZXIob2JqKSB7XHJcblxyXG4gICAgLy8gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgIG9ialsnbCddLnN0YXJ0KCk7XHJcbiAgICAgXHJcbiAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCBvYmpbXCJwYXJhbWV0cmVcIl0pLFxyXG4gICAgICAgIGRhdGE6IG9ialsnZGF0YSddLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgb2JqWydsJ10uc3RvcCgpO1xyXG4gICAgICAgICAgaWYob2JqWydsYWRkYSddKXtcclxuICAgICAgICAgICAgb2JqWydsYWRkYSddLnN0b3BBbGwoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIC8vZHVtcChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdKG9ialtcInNlbGVjdG9yXCJdLCBvYmpbXCJmb3JtX25hbWVcIl0sIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0LmRhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgLy93aW5kb3cuaWQgPSByZXN1bHQubWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICAvL3dpbmRvdy5kZXNjcmlwdGlvbiA9IHJlc3VsdC5tZXNzYWdlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYob2JqWydyZWxvYWRUYWJsZSddPT10cnVlKXtcclxuICAgICAgICAgICAgICAgIG9ialsndGFibGUnXS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG9ialsnbW9kYWwnXSA9PSB0cnVlICYmIG9ialsnaGlkZU1vZHVsZSddID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgJCgnI01vZGFsRG9jdW1lbnREeW5hbWlxdWUnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqW1wicmVmcmVzaFNlbGVjdFwiXSA9PSB0cnVlICYmIHJlc3VsdC5tZXNzYWdlLmRlc2NyaXB0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5tZXNzYWdlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3VsdC5tZXNzYWdlLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy50aGlzRWxlbS5wYXJlbnQoKS5maW5kKFwiLnNlbDJcIilcclxuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy50aGlzRWxlbS5jc3MoJ2JhY2tncm91bmQnLCdyZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKGRhdGEudGV4dCwgZGF0YS5pZCwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbJ3NlbGVjdEVsZW1lbnQnXS5wYXJlbnQoKS5maW5kKFwiLnNlbDJcIikuYXBwZW5kKG5ld09wdGlvbikudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbJ3NlbGVjdEVsZW1lbnQnXS5wYXJlbnQoKS5maW5kKFwiLnNlbDJcIikudmFsKGRhdGEuaWQpLmNoYW5nZSgpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihvYmpbJ21vZGFsJ10gPT0gdHJ1ZSAmJiBvYmpbJ3Nob3dNb2R1bGUnXSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICQoJyNNb2RhbERvY3VtZW50RHluYW1pcXVlJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIGlmKG9ialtcInJlZnJlc2hTZWxlY3RcIl0gPT0gdHJ1ZSAmJiByZXN1bHQubWVzc2FnZS5kZXNjcmlwdGlvbiApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5tZXNzYWdlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzdWx0Lm1lc3NhZ2UuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy50aGlzRWxlbS5wYXJlbnQoKS5maW5kKFwiLnNlbDJcIilcclxuICAgICAgICAgICAgICAgIC8vd2luZG93LnRoaXNFbGVtLmNzcygnYmFja2dyb3VuZCcsJ3JlZCcpXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gbmV3IE9wdGlvbihkYXRhLnRleHQsIGRhdGEuaWQsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBvYmpbJ3NlbGVjdEVsZW1lbnQnXS5wYXJlbnQoKS5maW5kKFwiLnNlbDJcIikuYXBwZW5kKG5ld09wdGlvbikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICBvYmpbJ3NlbGVjdEVsZW1lbnQnXS5wYXJlbnQoKS5maW5kKFwiLnNlbDJcIikudmFsKGRhdGEuaWQpLmNoYW5nZSgpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09IDEpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9ialsncmVkaXJlY3Rpb24nXSk7IFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYob2JqWydhdXRvVHJpZ2dlciddID09IDEpe1xyXG4gICAgICAgICAgICAgICAgJChcIi5cIitvYmpbXCJ0cmlnZ2VyQ2xhc3NcIl0pLnRyaWdnZXIoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIG9ialsnbCddLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBsaXN0QWN0aW9ucyhvYmope1xyXG5cclxuICAgICQoXCIuYWN0aW9uX2hlYWRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgICAgICAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAgICAgICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFjdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG4gICAgICB9KTtcclxuICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zY29sdW1uXzBcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuYWN0aW9uICwuc2NvbHVtbl8wXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgICAgICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxuICAgICAgfSk7XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLCBcIi5saXN0X2FjdGlvbnNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcbiAgICAgICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPV9hY3Rpb25dOmNoZWNrZWRcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgLy8gJChcImJvZHkgPiAuX211bHRpcGxlX2FjdGlvbnMgb3B0aW9uW3ZhbHVlPScnXVwiKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICBcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IFwiX2RlbGV0ZVwiKSB7XHJcbiAgICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVkZXRfbXVsdGlwbGVfZGVsZXRlXCIpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJfZHVwcGxpcXVlclwiKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZHVwcGxpcXVlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNvcHknPjwvaT4gT3VpLCBEdXBwbGlxdWVyIVwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9kdXBwbGlxdWVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIuX211bHRpcGxlX2FjdGlvbnNcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IFwiX2Rlc2FjdGl2ZXJcIikge1xyXG4gICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGTDqXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYmFuJz48L2k+IE91aSwgRMOpc2FjdGl2ZXIhXCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9wcmVjb21tYW5kZV9kZW1tYW5kZV9kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJfYXJjaGl2ZXJcIikge1xyXG4gICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IEFyY2hpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIEFyY2hpdmVyIVwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9hcmNoaXZlclwiKSxcclxuICAgICAgICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIl9nZW5lbmVyX2ZhY3R1cmVzXCIgJiYgX2FycmF5X2lkcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9saXZyYWlzb25mcnNjYWJfZ2VuZXJlcl9mYWN0dXJlXCIsIHtpZDogMH0pLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjTXlNb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI015TW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIl9jaGFuZ2VfZG9zc2llclwiKSB7XHJcbiAgICAgICAgIC8vIGFsZXJ0KCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKG9ialtcImRvc3NpZXJfcGF0aFwiXSksXHJcbiAgICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNNeU1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICQoJy5zZWwyJykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNNeU1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICBcclxuXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PVwiX2Rlc2FjdGl2ZXJfY29tbWFuZGVcIikge1xyXG4gICAgIC8vIGFsZXJ0KCk7XHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkw6lzYWN0aXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBEw6lzYWN0aXZlciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VhX3RfY29tbWFuZGVmcnNjYWJfZGVzYWN0aXZlcicpLFxyXG4gICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuXHJcbiAgfVxyXG5cclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PVwiX2Rlc2FjdGl2ZXJfbGl2cmFpc29uXCIpIHtcclxuICAgIC8vIGFsZXJ0KCk7XHJcbiAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgLmZpcmUoe1xyXG4gICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgfSxcclxuICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZMOpc2FjdGl2ZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBEw6lzYWN0aXZlciFcIixcclxuICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgIH0pXHJcbiAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9VYVRMaXZyYWlzb25mcnNjYWJfZGVzYWN0aXZlcicpLFxyXG4gICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICB9KTtcclxuICAgICAgICAgJChcIi5fbXVsdGlwbGVfYWN0aW9uc1wiKS52YWwoXCJcIik7XHJcbiAgICAgICB9XHJcbiAgICAgfSk7XHJcbiAgICAgXHJcblxyXG4gfVxyXG5cclxuIGlmICgkKHRoaXMpLnZhbCgpID09IFwiX2RlbGV0ZV9saXZyYWlzb25cIikge1xyXG4gXHJcbiAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9VYVRMaXZyYWlzb25mcnNjYWJfZGVsZXRlX2xpdnJhaXNvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxufVxyXG5cclxuIGlmICgkKHRoaXMpLnZhbCgpID09XCJfZGVzYWN0aXZlcl9mYWN0dXJlXCIpIHtcclxuICAvLyBhbGVydCgpO1xyXG4gICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgLmZpcmUoe1xyXG4gICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgfSxcclxuICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZMOpc2FjdGl2ZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1hcmNoaXZlJz48L2k+IE91aSwgRMOpc2FjdGl2ZXIhXCIsXHJcbiAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgIH0pXHJcbiAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1YV90X2ZhY3R1cmVmcnNjYWJfZGVzYWN0aXZlcicpLFxyXG4gICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sXHJcbiAgICAgfSk7XHJcbiAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICBcclxuXHJcbn1cclxuaWYgKCQodGhpcykudmFsKCkgPT1cIl9kZXNhY3RpdmVyX2ZhY3R1cmVfYWNcIikge1xyXG4gIC8vIGFsZXJ0KCk7XHJcbiAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAuZmlyZSh7XHJcbiAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICB9LFxyXG4gICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkw6lzYWN0aXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBEw6lzYWN0aXZlciFcIixcclxuICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgfSlcclxuICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VhX3RfZmFjdHVyZWZyc2NhYl9kZXNhY3RpdmVyJyksXHJcbiAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSxcclxuICAgICB9KTtcclxuICAgICAgICQoXCIuX211bHRpcGxlX2FjdGlvbnNcIikudmFsKFwiXCIpO1xyXG4gICAgIH1cclxuICAgfSk7XHJcbiAgIFxyXG5cclxufVxyXG5pZiAoJCh0aGlzKS52YWwoKSA9PVwiX2Rlc2FjdGl2ZXJfZmFjdHVyZV9hdlwiKSB7XHJcbiAgLy8gYWxlcnQoKTtcclxuICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgIC5maXJlKHtcclxuICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgIH0sXHJcbiAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGTDqXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIETDqXNhY3RpdmVyIVwiLFxyXG4gICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICB9KVxyXG4gICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgJC5hamF4KHtcclxuICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndWFfdF9mYWN0dXJlZnJzY2FiX2Rlc2FjdGl2ZXInKSxcclxuICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9LFxyXG4gICAgIH0pO1xyXG4gICAgICAgJChcIi5fbXVsdGlwbGVfYWN0aW9uc1wiKS52YWwoXCJcIik7XHJcbiAgICAgfVxyXG4gICB9KTtcclxuICAgXHJcblxyXG59XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuY2hhbmdlX2Rvc3NpZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuICAgICAgICAkLmVhY2goJChcImlucHV0W25hbWU9X2FjdGlvbl06Y2hlY2tlZFwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGR0YS5hcHBlbmQoJ2RhdGEnLF9hcnJheV9pZHMpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKG9ialtcImRvc3NpZXJfcGF0aFwiXSksXHJcbiAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIH1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=