(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usmodule"],{

/***/ "./assets/js/components/parametrage/usmodule.js":
/*!******************************************************!*\
  !*** ./assets/js/components/parametrage/usmodule.js ***!
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('us_module_list'),
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
    "width": "1px",
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
var table = $('#table').DataTable({
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
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
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

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('us_module_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
var select2_dossiers = $(".select2_dossiers").select2({
  placeholder: "Choix dossiers",
  allowClear: true
});
$('.new , .edit').on('submit', 'form', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_1__["create"](document.activeElement);
  l.start();
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
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('us_module_edit', {
      'id': id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération2", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#_delete').click(function (e) {
  //alert();
  //  var id = table.row('.selected').id();
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('us_module_delete', {
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
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('us_module_index');
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

},[["./assets/js/components/parametrage/usmodule.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS91c21vZHVsZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsImNsb3Nlc3QiLCJhdHRyIiwiaHJlZiIsInNlbGVjdDJfZG9zc2llcnMiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJqUXVlcnkiLCJlYWNoIiwiaSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdHIiLCJzdWNjZXNzIiwidGltZU91dCIsIndhcm5pbmciLCJlcnJvciIsImNsaWNrIiwiaWQiLCJyb3ciLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImNvZGUiLCJtZXNzYWdlIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJy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SixPQUFPLENBQUN2RCxJQUFJLEVBQUV3RCxLQUFLLENBQUNHLFlBQVksQ0FBQ0osT0FBTyxDQUFDVCxLQUFLLEVBQUU7Y0FBRVosT0FBTyxFQUFFO1lBQUssQ0FBQyxDQUFDO1VBQ3hHO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSEYsTUFBTSxDQUFDRyxPQUFPLENBQUMsOERBQThELEVBQUUsU0FBUyxFQUFFO01BQUVELE9BQU8sRUFBRTtJQUFLLENBQUMsQ0FBQztFQUNoSDtFQUNBL0IsQ0FBQyxDQUFDcUMsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQyxDIiwiZmlsZSI6InVzbW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNfbW9kdWxlX2xpc3QnKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnZhciB0YWJsZSA9ICQoJyN0YWJsZScpLkRhdGFUYWJsZSh7XHJcblxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzX21vZHVsZV9lZGl0JywgeyAnaWQnOiAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcblxyXG52YXIgc2VsZWN0Ml9kb3NzaWVycyA9ICQoXCIuc2VsZWN0Ml9kb3NzaWVyc1wiKS5zZWxlY3QyKHtcclxuICAgIHBsYWNlaG9sZGVyOiBcIkNob2l4IGRvc3NpZXJzXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlXHJcbn0pOyAgXHJcblxyXG5cclxuXHJcbiQoJy5uZXcgLCAuZWRpdCcpLm9uKCdzdWJtaXQnLCAnZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxualF1ZXJ5LmVhY2goJCgnLnRvYXN0ci1tc2cnKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpKTtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2PDqWVzXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbn0pO1xyXG5qUXVlcnkuZWFjaCgkKCcuZm9ybS1lcnJvcnMgbGknKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbn0pO1xyXG4vKmNoZWNrIHRoZSBmb3JtIGVycm9ycyovXHJcbmNvbnNvbGUubG9nKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSk7IFxyXG5pZiAoJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpIT0nJyl7XHJcbiAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSkgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnI19lZGl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1c19tb2R1bGVfZWRpdCcsIHsgJ2lkJzogaWQgfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb24yXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCcjX2RlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICAvLyAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKFwiZXRhYmxpc3NlbWVudElkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c19tb2R1bGVfZGVsZXRlJywgeyAnaWQnOiBpZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFsZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndXNfbW9kdWxlX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=