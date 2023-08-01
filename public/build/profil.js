(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil"],{

/***/ "./assets/js/components/user/profil.js":
/*!*********************************************!*\
  !*** ./assets/js/components/user/profil.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);

var blueimp = __webpack_require__(/*! ./../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min */ "./assets/js/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js");

/*js tree*/
__webpack_require__(/*! ./../../../css/plugins/jsTree/style.min.css */ "./assets/css/plugins/jsTree/style.min.css");
__webpack_require__(/*! ./../../../js/plugins/jsTree/jstree.min.js */ "./assets/js/plugins/jsTree/jstree.min.js");

/*initial object js tree*/

$('#container').jstree();
// document.getElementById("container").style.display = "block";

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
$(document).ready(function () {
  blueimp.Gallery(document.getElementById('links').getElementsByTagName('a'), {
    container: '#blueimp-gallery',
    carousel: true,
    onslide: function onslide(index, slide) {
      var unique_id = this.list[index].getAttribute('data-unique-id');
      console.log(unique_id);
    }
  });
});
$('body').on('submit', '.profil', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('user_profil_index'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      }
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
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('body').on('submit', '#user_theme', function (e) {
  var dta = new FormData(this);
  var theme = dta.get('theme');
  if (theme) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment changer votre thème ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-pencil'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> No!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('user_profil_theme_update', {
            'theme': theme
          }),
          success: function success(result) {
            console.log(result);
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
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }

  /* $(".image-radio").removeClass('image-radio-checked');
   $(this).addClass('image-radio-checked');
   var $radio = $(this).find('input[type="radio"]');
   var $chek = $(this).find('.glyphicon');
   $radio.prop("checked",!$radio.prop("checked"));
   $chek.prop("checked",!$radio.prop("checked")); */
  //        $.ajax({
  //            type: 'POST',
  //            url: Routing.generate('theme_save', {theme: $(this).attr('theme')}),
  //            success: function (result) {
  //                location.reload();
  //                toastr.success(result.message.text, result.message.title, {timeOut: 200});
  //            }
  //        });

  e.preventDefault();
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
  // console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
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
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_index', {
          'id': result.data.id
        });
        window.location.href = url;
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
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_edit', {
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
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('.errors-list').remove();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_delete', {
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
$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_update_prix_vente', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      }
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
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('body').on('submit', '.stock_produit_fichiers', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_fichiers', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      }
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_fichiers_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
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
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '.stock_produit_add_stock', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_add_stock', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      }
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
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('#_show').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('u_article_show', {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('stock_produit_archiver', {
            'id': id
          }),
          success: function success(result) {
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
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.password_new').on('change', function () {
  if ($(this).val() != $('.password_confirmation').val()) {
    // toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    $(".password_save").prop("disabled", true);
  } else {
    $(".password_save").prop("disabled", false);
  }
});
$('.password_confirmation').on('change', function () {
  if ($(this).val() != $('.password_new').val()) {
    toastr.warning("Les mots de passe ne sont pas identique", "warning", {
      timeOut: 4000
    });
    $(".password_save").prop("disabled", true);
  } else {
    $(".password_save").prop("disabled", false);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/user/profil.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4",2,17,"vendors~profil",7,16,19,"profil~test~uarticle~ucategoriearticle"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91c2VyL3Byb2ZpbC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiYmx1ZWltcCIsIiQiLCJqc3RyZWUiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImRvY3VtZW50IiwicmVhZHkiLCJHYWxsZXJ5IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRhaW5lciIsImNhcm91c2VsIiwib25zbGlkZSIsImluZGV4Iiwic2xpZGUiLCJ1bmlxdWVfaWQiLCJsaXN0IiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZSIsImZvcm1fbmFtZSIsImF0dHIiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwic3BsaXQiLCJpZCIsImdldCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2VuZXJhdGUiLCJkYXRhIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJlcnJvcnMiLCJTaG93Rm9ybUVycm9ycyIsImNvZGUiLCJ0b2FzdHIiLCJtZXNzYWdlIiwidGV4dCIsInRpdGxlIiwidGltZU91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwid2FybmluZyIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJwcmV2ZW50RGVmYXVsdCIsInRoZW1lIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInZhbHVlIiwicmVzcG9uc2VKU09OIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRhYmxlIiwiYWRkQ2xhc3MiLCJlbXB0eSIsIndpbmRvdyIsImhyZWYiLCJjbGljayIsInJvdyIsInJlbW92ZSIsInZhbCIsInByb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFDbUM7QUFHakUsSUFBTUksT0FBTyxHQUFHSCxtQkFBTyxDQUFDLDJJQUErRCxDQUFDOztBQUV4RjtBQUNBQSxtQkFBTyxDQUFDLDhGQUE2QyxDQUFDO0FBQ3REQSxtQkFBTyxDQUFDLDRGQUE0QyxDQUFDOztBQUdyRDs7QUFFQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxNQUFNLEVBQUU7QUFDeEI7O0FBR0EsSUFBTUMsSUFBSSxHQUFHTixtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU8sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUtGUixDQUFDLENBQUNTLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUMxQlgsT0FBTyxDQUFDWSxPQUFPLENBQ1BGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFDMUQ7SUFDSUMsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsT0FBTyxFQUFFLGlCQUFVQyxLQUFLLEVBQUVDLEtBQUssRUFBRTtNQUM3QixJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDSSxZ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QU8sQ0FBQyx5Q0FBeUMsRUFBRSxTQUFTLEVBQUU7TUFBQ0gsT0FBTyxFQUFFO0lBQUksQ0FBQyxDQUFDO0lBQ3JGbEQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNrRixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztFQUM5QyxDQUFDLE1BQU07SUFDSGxGLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7RUFDL0M7QUFFSixDQUFDLENBQUMsQyIsImZpbGUiOiJwcm9maWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcblxyXG5cclxuY29uc3QgYmx1ZWltcCA9IHJlcXVpcmUoJy4vLi4vLi4vcGx1Z2lucy9ibHVlaW1wLWdhbGxlcnkvanMvanF1ZXJ5LmJsdWVpbXAtZ2FsbGVyeS5taW4nKTtcclxuXHJcbi8qanMgdHJlZSovXHJcbnJlcXVpcmUoJy4vLi4vLi4vLi4vY3NzL3BsdWdpbnMvanNUcmVlL3N0eWxlLm1pbi5jc3MnKTtcclxucmVxdWlyZSgnLi8uLi8uLi8uLi9qcy9wbHVnaW5zL2pzVHJlZS9qc3RyZWUubWluLmpzJyk7ICBcclxuXHJcblxyXG4vKmluaXRpYWwgb2JqZWN0IGpzIHRyZWUqL1xyXG5cclxuJCgnI2NvbnRhaW5lcicpLmpzdHJlZSgpO1xyXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGJsdWVpbXAuR2FsbGVyeShcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnI2JsdWVpbXAtZ2FsbGVyeScsXHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uc2xpZGU6IGZ1bmN0aW9uIChpbmRleCwgc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdW5pcXVlX2lkID0gdGhpcy5saXN0W2luZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdW5pcXVlLWlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnByb2ZpbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX3Byb2ZpbF9pbmRleCcpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjdXNlcl90aGVtZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgIFxyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxudmFyIHRoZW1lID0gZHRhLmdldCgndGhlbWUnKTtcclxuICBcclxuICAgIGlmICh0aGVtZSkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGNoYW5nZXIgdm90cmUgdGjDqG1lID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXBlbmNpbCc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsX3RoZW1lX3VwZGF0ZScsIHsndGhlbWUnOiB0aGVtZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogJChcIi5pbWFnZS1yYWRpb1wiKS5yZW1vdmVDbGFzcygnaW1hZ2UtcmFkaW8tY2hlY2tlZCcpO1xyXG4gICAgICQodGhpcykuYWRkQ2xhc3MoJ2ltYWdlLXJhZGlvLWNoZWNrZWQnKTtcclxuICAgICB2YXIgJHJhZGlvID0gJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICB2YXIgJGNoZWsgPSAkKHRoaXMpLmZpbmQoJy5nbHlwaGljb24nKTtcclxuICAgICAkcmFkaW8ucHJvcChcImNoZWNrZWRcIiwhJHJhZGlvLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAgICAkY2hlay5wcm9wKFwiY2hlY2tlZFwiLCEkcmFkaW8ucHJvcChcImNoZWNrZWRcIikpOyAqL1xyXG4vLyAgICAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0aGVtZV9zYXZlJywge3RoZW1lOiAkKHRoaXMpLmF0dHIoJ3RoZW1lJyl9KSxcclxuLy8gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDIwMH0pO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS4kKCd0ci5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfaW5zZXJ0JyksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9pbmRleCcsIHsnaWQnOiByZXN1bHQuZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnI19lZGl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X2VkaXQnLCB7J2lkJzogaWR9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfdXBkYXRlJywge2lkOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoJyNfZGVsZXRlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9kZWxldGUnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnN0b2NrX3Byb2R1aXRfdXBkYXRlX3ByaXhfdmVudGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gIGFsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF91cGRhdGVfcHJpeF92ZW50ZScsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnN0b2NrX3Byb2R1aXRfZmljaGllcnMnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gIGFsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9maWNoaWVycycsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCcuX2RlbGV0ZV9maWNoaWVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9maWNoaWVyc19kZWxldGUnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19wcm9kdWl0X2FkZF9zdG9jaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X2FkZF9zdG9jaycsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyNfc2hvdycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VfYXJ0aWNsZV9zaG93JywgeydpZCc6IGlkfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoJyNfYXJjaGl2ZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgQXJjaGl2ZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBBcmNoaXZlciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9hcmNoaXZlcicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJy5wYXNzd29yZF9uZXcnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIGlmKCQodGhpcykudmFsKCkgIT0gJCgnLnBhc3N3b3JkX2NvbmZpcm1hdGlvbicpLnZhbCgpKSB7XHJcbiAgICAgICAgLy8gdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgJChcIi5wYXNzd29yZF9zYXZlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZF9zYXZlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59KVxyXG4kKCcucGFzc3dvcmRfY29uZmlybWF0aW9uJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBpZigkKHRoaXMpLnZhbCgpICE9ICQoJy5wYXNzd29yZF9uZXcnKS52YWwoKSkge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiTGVzIG1vdHMgZGUgcGFzc2UgbmUgc29udCBwYXMgaWRlbnRpcXVlXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgJChcIi5wYXNzd29yZF9zYXZlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZF9zYXZlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9