(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdossier"],{

/***/ "./assets/js/components/parametrage/pdossier.js":
/*!******************************************************!*\
  !*** ./assets/js/components/parametrage/pdossier.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);

global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('p_dossier_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
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
    "width": "1px",
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
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
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
    "width": "1px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
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
  },
  fixedHeader: true
});
$('.scroll_content').slimscroll({
  height: '1000px'
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('p_dossier_edit', {
    'id': $(this).closest('tr').attr('id')
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
$('.new , .edit').on('submit', 'form', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_1__["create"](document.activeElement);
  l.start();
});
$('#_delete').click(function (e) {
  var id = $('#test').data("etablissementId");
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('p_dossier_delete', {
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
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('p_dossier_index');
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/parametrage/pdossier.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wZG9zc2llci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJzbGltc2Nyb2xsIiwiaGVpZ2h0Iiwib24iLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJqUXVlcnkiLCJlYWNoIiwiaSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdHIiLCJzdWNjZXNzIiwidGltZU91dCIsIndhcm5pbmciLCJlcnJvciIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiY2xpY2siLCJpZCIsImRhdGEiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImNvZGUiLCJtZXNzYWdlIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJyZXNwb25zZUpTT04iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFB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QixDQUFDLENBQUMsQyIsImZpbGUiOiJwZG9zc2llci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbi8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3BfZG9zc2llcl9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcuc2Nyb2xsX2NvbnRlbnQnKS5zbGltc2Nyb2xsKHtcclxuICAgIGhlaWdodDogJzEwMDBweCdcclxufSlcclxuXHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJy5jZF9vcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdwX2Rvc3NpZXJfZWRpdCcsIHsgJ2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmpRdWVyeS5lYWNoKCQoJy50b2FzdHItbXNnJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSk7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjw6llc1wiLCAkKHRoaXMpLnRleHQoKSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJ3YXJuaW5nXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwiZXJyb3JcIikge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKHRoaXMpLnRleHQoKSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxufSk7XHJcbi8qY2hlY2sgdGhlIGZvcm0gZXJyb3JzKi9cclxuY29uc29sZS5sb2coJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpKTsgXHJcbmlmICgkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCkhPScnKXtcclxuICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQoJy5mb3JtLWVycm9ycycpLnRleHQoKSwge3RpbWVPdXQ6IDQwMDB9KSBcclxufVxyXG5cclxuXHJcbiQoJy5uZXcgLCAuZWRpdCcpLm9uKCdzdWJtaXQnLCAnZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJyNfZGVsZXRlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImV0YWJsaXNzZW1lbnRJZFwiKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncF9kb3NzaWVyX2RlbGV0ZScsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbGVydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3BfZG9zc2llcl9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==