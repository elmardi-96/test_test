(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config"],{

/***/ "./assets/js/components/config.js":
/*!****************************************!*\
  !*** ./assets/js/components/config.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");





var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
global.$ = $;
__webpack_require__(/*! ./../../css/plugins/switchery/switchery.css */ "./assets/css/plugins/switchery/switchery.css");

//
//require('./../BsMultiSelect.min');

__webpack_require__(/*! ./../../js/plugins/switchery/switchery.js */ "./assets/js/plugins/switchery/switchery.js");
$(document).ready(function () {
  var i = 0;
  $(".search_keywords2").on("keyup", function () {
    //alert()
    var searchString = $(this).val();
    $(".not-found").hide();
    // alert(searchString)
    if ($(this).val() == "") {
      //alert("d")
      $(".metismenu").find('.nav-second-level').removeClass('in');
      $(".colp").removeAttr('style');
      $('.active').find('.nav-second-level').addClass('in');
      $(".colp").unmark().mark(searchString);
    }
    $(".colp").each(function (index, value) {
      var currentName = $(value).text();
      if (currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1 && searchString != "") {
        $(".colp").unmark().mark(searchString);
        if ($(value).parents('.nav-second-level').length) {
          $(value).parent().addClass('in');
          $('.active').find('.nav-second-level').addClass('in');
          $(value).css('background-color', 'rgb(255,' + (100 + parseInt($(this).text())) + ',0)');
          $(value).show();
        } else {
          $('.active').find('.nav-second-level').addClass('in');
          $(value).show();
        }
      } else if (searchString != "") {
        i++;
        /* if ($(value).parents('.nav-second-level').length) {
             $(value).parent().removeClass('in');
         }*/
        $('.active').find('.nav-second-level').addClass('in');
        $(value).hide();
      }
    });
    //alert($('.colp').length)
    //alert(i)
    if ($('.colp').length == i) {
      $(".metismenu").after("<div class='not-found'><i class='fa fa-check' ></i> Résultat n'est pas trouvé</div>");
    }
    i = 0;
  });
});

/*

var select2_users = $(".select2_users").select2({
    placeholder: "Utilisateurs Sans groupe",
    allowClear: true
});
var permissions = $(".permissions").select2({
    placeholder: "Permissions",
    allowClear: true
});

$('.Toogle').bootstrapToggle();
*/

$(function () {
  $('.select_all_permissions').change(function () {
    console.log($(this).attr('id'));
    var sousModuleSelected = '.ToogleSousModuleSelect_' + $(this).attr('id');
    //        $('.ToogleSousModule').removeClass('ToogleSousModule');
    //        var module_id = $(this).attr('id');
    if ($(this).prop('checked')) {
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
  $('.ToogleModule').change(function () {
    $('.ToogleSousModule').removeClass('ToogleSousModule');
    var module_id = $(this).attr('id');
    if ($(this).prop('checked')) {
      //            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
      //                $(val).bootstrapToggle('on');
      //            });
    } else {
      $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
        $(val).bootstrapToggle('off');
      });
    }
  });
  $('.ToogleSousModule').change(function () {
    var str = $(this).attr('id');
    var res = str.split("_");
    var module = res[0];
    var sousModule = res[1];
    console.log('ici');
    if ($(this).prop('checked') == true) {
      $('.ToogleSousModuleSelect_' + sousModule).prop("disabled", false);
    } else {
      $('.ToogleSousModuleSelect_' + sousModule).prop("disabled", true);
    }
  });
  $('.form-permission').submit(function (e) {
    //$('.new').on('submit', '.form', function (e) {
    //    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    //    var selector = $(this).attr('class').split(' ')[0];

    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('us_groupe_permission_insert'),
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
  $('.add_user_to_groupe').click(function (e) {
    var groupe_id = $('._groupe').val();
    var user_id = $('.add_user_to_groupe_select').val();
    console.log(groupe_id);
    if (user_id && groupe_id) {
      $.ajax({
        type: 'POST',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('us_groupe_add_user_to_groupe', {
          user_id: user_id,
          groupe_id: groupe_id
        }),
        success: function success(result) {
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
    } else {
      toastr.warning("Veuillez renseigner un utilisateur pour effectuer cette opération !!", "Attention", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });

  //    $('.delete_user_from_groupe').click(function (e) {
  //        var groupe_id = $('._groupe').val();
  //        var user_id = $(this).attr('id');
  //        console.log(user_id)
  //        if (user_id) {
  //            swal({
  //                title: "Confirmation ?",
  //                text: "Voulez vous vraiment supprimer cet utilisateur de ce groupe ?",
  //                type: "warning",
  //                showCancelButton: true,
  //                confirmButtonText: "Oui, supprimer!",
  //                cancelButtonText: "No, Annuler!",
  //                closeOnConfirm: true,
  //                closeOnCancel: true},
  //                    function (isConfirm) {
  //                        if (isConfirm) {
  //                            $.ajax({
  //                                type: 'DELETE',
  //                                url: Routing.generate('us_groupe_delete_user_from_groupe', {id: user_id}),
  //                                success: function (result) {
  //                                    if (result.data) {
  //                                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
  //                                        setTimeout(function () {
  //                                            location.reload();
  //                                        }, 2000);
  //                                    }
  //                                },
  //                                error: function (jqXHR, textStatus, errorThrown) {
  //                                    toastr.error("Erreur", errorThrown, {timeOut: 4000})
  //                                }
  //                            });
  //
  //
  //                        }
  //                    });
  //
  //        } else {
  //            toastr.warning("Veuillez renseigner un utilisateur pour effectuer cette opération !!", "Attention", {timeOut: 4000});
  //        }
  //        e.preventDefault();
  //    });
});

//var toggleButtons2 = function toggleButtons() {
//    $('.ToogleSousModule').off('change');
//    if ($(this).prop('checked')) {
//        $('.Toogle').not($(this)).each(function (key, val) {
//            $(val).bootstrapToggle('on');
//        });
//    } else {
////        $('.Toogle').not($(this)).each(function (key, val) {
////            $(val).bootstrapToggle('off');
////        });
//    }
//    $('.ToogleSousModule').on('change', toggleButtons2);
//}
//
//$(document).ready(function () {
//    $('.Toogle').on('change', toggleButtons);
//});

//$('#container').jstree({'core': {
//
//        'data': [
//            {"id": "ajson1", "parent": "#", "text": "Simple root node"},
//            {"id": "ajson2", "parent": "#", "text": "Root node 2"},
//            {"id": "ajson3", "parent": "ajson2", "text": "Child 1"},
//            {"id": "ajson4", "parent": "ajson2", "text": "Child 2"},
//        ]
//    },
//    "plugins": ["checkbox"],
//});

/*js tree*/

// $('#container').jstree();
//
//
//$(document).ready(function(){
//    window.$ = window.jQuery = require('../../js/plugins/jsTree/jstree.min');
// $('#container').jstree({
//            'core' : {
//            'data' : [
//                'Empty Folder',
//                {
//                    'text': 'Resources',
//                    'state': {
//                        'opened': true
//                    },
//                    'children': [
//                        {
//                            'text': 'css',
//                            'children': [
//                                {
//                                    'text': 'animate.css', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'bootstrap.css', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'main.css', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'style.css', 'icon': 'none'
//                                }
//                            ],
//                            'state': {
//                                'opened': true
//                            }
//                        },
//                        {
//                            'text': 'js',
//                            'children': [
//                                {
//                                    'text': 'bootstrap.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'inspinia.min.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'jquery.min.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'jsTree.min.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'custom.min.js', 'icon': 'none'
//                                }
//                            ],
//                            'state': {
//                                'opened': true
//                            }
//                        },
//                        {
//                            'text': 'html',
//                            'children': [
//                                {
//                                    'text': 'layout.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'navigation.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'navbar.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'footer.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'sidebar.html', 'icon': 'none'
//                                }
//                            ],
//                            'state': {
//                                'opened': true
//                            }
//                        }
//                    ]
//                },
//                'Fonts',
//                'Images',
//                'Scripts',
//                'Templates',
//            ]
//        } 
//    });
// });

var table = $('#grid-parametres').DataTable({
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "order": [[0, "asc"]],
  "scrollY": "400px",
  "scrollCollapse": true,
  "paging": false,
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/config.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",14,"vendors~config",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce",18]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jb25maWcuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZ2xvYmFsIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpIiwib24iLCJzZWFyY2hTdHJpbmciLCJ2YWwiLCJoaWRlIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsImFkZENsYXNzIiwidW5tYXJrIiwibWFyayIsImVhY2giLCJpbmRleCIsInZhbHVlIiwiY3VycmVudE5hbWUiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJpbmRleE9mIiwicGFyZW50cyIsImxlbmd0aCIsInBhcmVudCIsImNzcyIsInBhcnNlSW50Iiwic2hvdyIsImFmdGVyIiwiY2hhbmdlIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJzb3VzTW9kdWxlU2VsZWN0ZWQiLCJwcm9wIiwib3B0aW9uVmFsdWVzIiwicHVzaCIsInRyaWdnZXIiLCJtb2R1bGVfaWQiLCJub3QiLCJrZXkiLCJib290c3RyYXBUb2dnbGUiLCJzdHIiLCJyZXMiLCJzcGxpdCIsIm1vZHVsZSIsInNvdXNNb2R1bGUiLCJzdWJtaXQiLCJlIiwiZHRhIiwiRm9ybURhdGEiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwiZGF0YSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwidG9hc3RyIiwibWVzc2FnZSIsInRpdGxlIiwidGltZU91dCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwiZ3JvdXBlX2lkIiwidXNlcl9pZCIsIndhcm5pbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImZpeGVkSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw2RUFBdUMsQ0FBQztBQUMyQztBQUNwQjtBQUN0RkMsa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFDOUIsSUFBTUksSUFBSSxHQUFHSCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTUksd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUNGQyxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaWCxtQkFBTyxDQUFDLGlHQUE2QyxDQUFDOztBQUV0RDtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLDZGQUEyQyxDQUFDO0FBR3BEVyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVTtFQUN4QixJQUFJQyxDQUFDLEdBQUcsQ0FBQztFQUNYSCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0lBRTFDO0lBQ0EsSUFBSUMsWUFBWSxHQUFHTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLEdBQUcsRUFBRTtJQUNoQ04sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDTyxJQUFJLEVBQUU7SUFDdkI7SUFDQyxJQUFHUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLEdBQUcsRUFBRSxJQUFFLEVBQUUsRUFBQztNQUNqQjtNQUNBTixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNRLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxXQUFXLENB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QyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNyQixTQUFTLEVBQUUsT0FBTztFQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCLFFBQVEsRUFBRSxLQUFLO0VBQ2YsVUFBVSxFQUFFO0lBQ1IsS0FBSyxFQUFFdEYsa0hBQU8sQ0FBQytELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztJQUM1QyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEd0IsV0FBVyxFQUFFO0FBQ2pCLENBQUMsQ0FBQyxDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbnJlcXVpcmUoJy4vLi4vLi4vY3NzL3BsdWdpbnMvc3dpdGNoZXJ5L3N3aXRjaGVyeS5jc3MnKTtcclxuXHJcbi8vXHJcbi8vcmVxdWlyZSgnLi8uLi9Cc011bHRpU2VsZWN0Lm1pbicpO1xyXG5cclxucmVxdWlyZSgnLi8uLi8uLi9qcy9wbHVnaW5zL3N3aXRjaGVyeS9zd2l0Y2hlcnkuanMnKTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICQoXCIuc2VhcmNoX2tleXdvcmRzMlwiKS5vbihcImtleXVwXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgLy9hbGVydCgpXHJcbiAgICAgIHZhciBzZWFyY2hTdHJpbmcgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAkKFwiLm5vdC1mb3VuZFwiKS5oaWRlKCk7XHJcbiAgICAgLy8gYWxlcnQoc2VhcmNoU3RyaW5nKVxyXG4gICAgICBpZigkKHRoaXMpLnZhbCgpPT1cIlwiKXtcclxuICAgICAgICAgIC8vYWxlcnQoXCJkXCIpXHJcbiAgICAgICAgICAkKFwiLm1ldGlzbWVudVwiKS5maW5kKCcubmF2LXNlY29uZC1sZXZlbCcpLnJlbW92ZUNsYXNzKCdpbicpO1xyXG4gICAgICAgICAgJChcIi5jb2xwXCIpLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcclxuICAgICAgICAgICQoJy5hY3RpdmUnKS5maW5kKCcubmF2LXNlY29uZC1sZXZlbCcpLmFkZENsYXNzKCdpbicpXHJcbiAgICAgICAgICAkKFwiLmNvbHBcIikudW5tYXJrKCkubWFyayhzZWFyY2hTdHJpbmcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKFwiLmNvbHBcIikuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdmFyIGN1cnJlbnROYW1lID0gJCh2YWx1ZSkudGV4dCgpO1xyXG4gICAgICAgICAgaWYoIGN1cnJlbnROYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hTdHJpbmcudG9VcHBlckNhc2UoKSkgPiAtMSAmJiBzZWFyY2hTdHJpbmchPVwiXCIpIHtcclxuICAgICAgICAgICAgICAkKFwiLmNvbHBcIikudW5tYXJrKCkubWFyayhzZWFyY2hTdHJpbmcpO1xyXG4gICAgICAgICAgICAgIGlmICgkKHZhbHVlKS5wYXJlbnRzKCcubmF2LXNlY29uZC1sZXZlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKHZhbHVlKS5wYXJlbnQoKS5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmFjdGl2ZScpLmZpbmQoJy5uYXYtc2Vjb25kLWxldmVsJykuYWRkQ2xhc3MoJ2luJylcclxuICAgICAgICAgICAgICAgICAgJCh2YWx1ZSkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywncmdiKDI1NSwnICsgKDEwMCArIHBhcnNlSW50KCQodGhpcykudGV4dCgpKSApICsgJywwKScpO1xyXG4gICAgICAgICAgICAgICAgICAkKHZhbHVlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5hY3RpdmUnKS5maW5kKCcubmF2LXNlY29uZC1sZXZlbCcpLmFkZENsYXNzKCdpbicpXHJcbiAgICAgICAgICAgICAgICAgICQodmFsdWUpLnNob3coKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgIH0gZWxzZSBpZihzZWFyY2hTdHJpbmchPVwiXCIpIHtcclxuICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAvKiBpZiAoJCh2YWx1ZSkucGFyZW50cygnLm5hdi1zZWNvbmQtbGV2ZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCh2YWx1ZSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2luJyk7XHJcbiAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgJCgnLmFjdGl2ZScpLmZpbmQoJy5uYXYtc2Vjb25kLWxldmVsJykuYWRkQ2xhc3MoJ2luJylcclxuICAgICAgICAgICAgICAkKHZhbHVlKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2FsZXJ0KCQoJy5jb2xwJykubGVuZ3RoKVxyXG4gICAgICAvL2FsZXJ0KGkpXHJcbiAgICAgaWYoICQoJy5jb2xwJykubGVuZ3RoID09IChpKSl7XHJcbiAgICAgICAgICAkKFwiLm1ldGlzbWVudVwiKS5hZnRlcihcIjxkaXYgY2xhc3M9J25vdC1mb3VuZCc+PGkgY2xhc3M9J2ZhIGZhLWNoZWNrJyA+PC9pPiBSw6lzdWx0YXQgbidlc3QgcGFzIHRyb3V2w6k8L2Rpdj5cIilcclxuICAgICB9XHJcbiAgICAgaSA9IDA7XHJcblxyXG5cclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuLypcclxuXHJcbnZhciBzZWxlY3QyX3VzZXJzID0gJChcIi5zZWxlY3QyX3VzZXJzXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiVXRpbGlzYXRldXJzIFNhbnMgZ3JvdXBlXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlXHJcbn0pO1xyXG52YXIgcGVybWlzc2lvbnMgPSAkKFwiLnBlcm1pc3Npb25zXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiUGVybWlzc2lvbnNcIixcclxuICAgIGFsbG93Q2xlYXI6IHRydWVcclxufSk7XHJcblxyXG4kKCcuVG9vZ2xlJykuYm9vdHN0cmFwVG9nZ2xlKCk7XHJcbiovXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAkKCcuc2VsZWN0X2FsbF9wZXJtaXNzaW9ucycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICB2YXIgc291c01vZHVsZVNlbGVjdGVkID0gJy5Ub29nbGVTb3VzTW9kdWxlU2VsZWN0XycgKyAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbi8vICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZScpLnJlbW92ZUNsYXNzKCdUb29nbGVTb3VzTW9kdWxlJyk7XHJcbi8vICAgICAgICB2YXIgbW9kdWxlX2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4vLyAgICAgICAgICAgJChcIi5zZWxlY3RlZCA+IG9wdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4vLyAgICAgICAgICAgICQoXCIuc2VsZWN0ZWRcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoc291c01vZHVsZVNlbGVjdGVkICsgXCIgb3B0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChzb3VzTW9kdWxlU2VsZWN0ZWQpLnZhbChvcHRpb25WYWx1ZXMpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoc291c01vZHVsZVNlbGVjdGVkKS52YWwobnVsbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKCcuVG9vZ2xlTW9kdWxlJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZScpLnJlbW92ZUNsYXNzKCdUb29nbGVTb3VzTW9kdWxlJyk7XHJcbiAgICAgICAgdmFyIG1vZHVsZV9pZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuLy8gICAgICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZV8nICsgbW9kdWxlX2lkKS5ub3QoJCh0aGlzKSkuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWwpIHtcclxuLy8gICAgICAgICAgICAgICAgJCh2YWwpLmJvb3RzdHJhcFRvZ2dsZSgnb24nKTtcclxuLy8gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZV8nICsgbW9kdWxlX2lkKS5ub3QoJCh0aGlzKSkuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICQodmFsKS5ib290c3RyYXBUb2dnbGUoJ29mZicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAkKCcuVG9vZ2xlU291c01vZHVsZScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN0ciA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB2YXIgcmVzID0gc3RyLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICB2YXIgbW9kdWxlID0gcmVzWzBdO1xyXG4gICAgICAgIHZhciBzb3VzTW9kdWxlID0gcmVzWzFdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnaWNpJyk7XHJcbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5Ub29nbGVTb3VzTW9kdWxlU2VsZWN0XycgKyBzb3VzTW9kdWxlKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZVNlbGVjdF8nICsgc291c01vZHVsZSkucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICQoJy5mb3JtLXBlcm1pc3Npb24nKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuLy8kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4vLyAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzX2dyb3VwZV9wZXJtaXNzaW9uX2luc2VydCcpLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICQoJy5hZGRfdXNlcl90b19ncm91cGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBncm91cGVfaWQgPSAkKCcuX2dyb3VwZScpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1c2VyX2lkID0gJCgnLmFkZF91c2VyX3RvX2dyb3VwZV9zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhncm91cGVfaWQpO1xyXG4gICAgICAgIGlmICh1c2VyX2lkICYmIGdyb3VwZV9pZCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c19ncm91cGVfYWRkX3VzZXJfdG9fZ3JvdXBlJywge3VzZXJfaWQ6IHVzZXJfaWQsIGdyb3VwZV9pZDogZ3JvdXBlX2lkfSksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiByZW5zZWlnbmVyIHVuIHV0aWxpc2F0ZXVyIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb24gISFcIiwgXCJBdHRlbnRpb25cIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4vLyAgICAkKCcuZGVsZXRlX3VzZXJfZnJvbV9ncm91cGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICAgdmFyIGdyb3VwZV9pZCA9ICQoJy5fZ3JvdXBlJykudmFsKCk7XHJcbi8vICAgICAgICB2YXIgdXNlcl9pZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKHVzZXJfaWQpXHJcbi8vICAgICAgICBpZiAodXNlcl9pZCkge1xyXG4vLyAgICAgICAgICAgIHN3YWwoe1xyXG4vLyAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4vLyAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgdXRpbGlzYXRldXIgZGUgY2UgZ3JvdXBlID9cIixcclxuLy8gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbi8vICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk91aSwgc3VwcHJpbWVyIVwiLFxyXG4vLyAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCBBbm51bGVyIVwiLFxyXG4vLyAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgY2xvc2VPbkNhbmNlbDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXNDb25maXJtKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzX2dyb3VwZV9kZWxldGVfdXNlcl9mcm9tX2dyb3VwZScsIHtpZDogdXNlcl9pZH0pLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHJlbnNlaWduZXIgdW4gdXRpbGlzYXRldXIgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvbiAhIVwiLCBcIkF0dGVudGlvblwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy92YXIgdG9nZ2xlQnV0dG9uczIgPSBmdW5jdGlvbiB0b2dnbGVCdXR0b25zKCkge1xyXG4vLyAgICAkKCcuVG9vZ2xlU291c01vZHVsZScpLm9mZignY2hhbmdlJyk7XHJcbi8vICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4vLyAgICAgICAgJCgnLlRvb2dsZScpLm5vdCgkKHRoaXMpKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4vLyAgICAgICAgICAgICQodmFsKS5ib290c3RyYXBUb2dnbGUoJ29uJyk7XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfSBlbHNlIHtcclxuLy8vLyAgICAgICAgJCgnLlRvb2dsZScpLm5vdCgkKHRoaXMpKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4vLy8vICAgICAgICAgICAgJCh2YWwpLmJvb3RzdHJhcFRvZ2dsZSgnb2ZmJyk7XHJcbi8vLy8gICAgICAgIH0pO1xyXG4vLyAgICB9XHJcbi8vICAgICQoJy5Ub29nbGVTb3VzTW9kdWxlJykub24oJ2NoYW5nZScsIHRvZ2dsZUJ1dHRvbnMyKTtcclxuLy99XHJcbi8vXHJcbi8vJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAkKCcuVG9vZ2xlJykub24oJ2NoYW5nZScsIHRvZ2dsZUJ1dHRvbnMpO1xyXG4vL30pO1xyXG5cclxuXHJcblxyXG4vLyQoJyNjb250YWluZXInKS5qc3RyZWUoeydjb3JlJzoge1xyXG4vL1xyXG4vLyAgICAgICAgJ2RhdGEnOiBbXHJcbi8vICAgICAgICAgICAge1wiaWRcIjogXCJhanNvbjFcIiwgXCJwYXJlbnRcIjogXCIjXCIsIFwidGV4dFwiOiBcIlNpbXBsZSByb290IG5vZGVcIn0sXHJcbi8vICAgICAgICAgICAge1wiaWRcIjogXCJhanNvbjJcIiwgXCJwYXJlbnRcIjogXCIjXCIsIFwidGV4dFwiOiBcIlJvb3Qgbm9kZSAyXCJ9LFxyXG4vLyAgICAgICAgICAgIHtcImlkXCI6IFwiYWpzb24zXCIsIFwicGFyZW50XCI6IFwiYWpzb24yXCIsIFwidGV4dFwiOiBcIkNoaWxkIDFcIn0sXHJcbi8vICAgICAgICAgICAge1wiaWRcIjogXCJhanNvbjRcIiwgXCJwYXJlbnRcIjogXCJhanNvbjJcIiwgXCJ0ZXh0XCI6IFwiQ2hpbGQgMlwifSxcclxuLy8gICAgICAgIF1cclxuLy8gICAgfSxcclxuLy8gICAgXCJwbHVnaW5zXCI6IFtcImNoZWNrYm94XCJdLFxyXG4vL30pO1xyXG5cclxuLypqcyB0cmVlKi9cclxuXHJcbi8vICQoJyNjb250YWluZXInKS5qc3RyZWUoKTtcclxuLy9cclxuLy9cclxuLy8kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCcuLi8uLi9qcy9wbHVnaW5zL2pzVHJlZS9qc3RyZWUubWluJyk7XHJcbi8vICQoJyNjb250YWluZXInKS5qc3RyZWUoe1xyXG4vLyAgICAgICAgICAgICdjb3JlJyA6IHtcclxuLy8gICAgICAgICAgICAnZGF0YScgOiBbXHJcbi8vICAgICAgICAgICAgICAgICdFbXB0eSBGb2xkZXInLFxyXG4vLyAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdSZXNvdXJjZXMnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICdvcGVuZWQnOiB0cnVlXHJcbi8vICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnY3NzJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ2FuaW1hdGUuY3NzJywgJ2ljb24nOiAnbm9uZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnYm9vdHN0cmFwLmNzcycsICdpY29uJzogJ25vbmUnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ21haW4uY3NzJywgJ2ljb24nOiAnbm9uZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnc3R5bGUuY3NzJywgJ2ljb24nOiAnbm9uZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wZW5lZCc6IHRydWVcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdqcycsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdib290c3RyYXAuanMnLCAnaWNvbic6ICdub25lJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdpbnNwaW5pYS5taW4uanMnLCAnaWNvbic6ICdub25lJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdqcXVlcnkubWluLmpzJywgJ2ljb24nOiAnbm9uZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnanNUcmVlLm1pbi5qcycsICdpY29uJzogJ25vbmUnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ2N1c3RvbS5taW4uanMnLCAnaWNvbic6ICdub25lJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BlbmVkJzogdHJ1ZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ2h0bWwnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnbGF5b3V0Lmh0bWwnLCAnaWNvbic6ICdub25lJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICduYXZpZ2F0aW9uLmh0bWwnLCAnaWNvbic6ICdub25lJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICduYXZiYXIuaHRtbCcsICdpY29uJzogJ25vbmUnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ2Zvb3Rlci5odG1sJywgJ2ljb24nOiAnbm9uZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnc2lkZWJhci5odG1sJywgJ2ljb24nOiAnbm9uZSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wZW5lZCc6IHRydWVcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIF1cclxuLy8gICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgJ0ZvbnRzJyxcclxuLy8gICAgICAgICAgICAgICAgJ0ltYWdlcycsXHJcbi8vICAgICAgICAgICAgICAgICdTY3JpcHRzJyxcclxuLy8gICAgICAgICAgICAgICAgJ1RlbXBsYXRlcycsXHJcbi8vICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgfSBcclxuLy8gICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZC1wYXJhbWV0cmVzJykuRGF0YVRhYmxlKHtcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IDE1LFxyXG4gICAgXCJvcmRlclwiOiBbWzAsIFwiYXNjXCJdXSxcclxuICAgIFwic2Nyb2xsWVwiOiBcIjQwMHB4XCIsXHJcbiAgICBcInNjcm9sbENvbGxhcHNlXCI6IHRydWUsXHJcbiAgICBcInBhZ2luZ1wiOiBmYWxzZSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==