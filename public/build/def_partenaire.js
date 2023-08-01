(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["def_partenaire"],{

/***/ "./assets/js/components/parametrage/def_partenaire.js":
/*!************************************************************!*\
  !*** ./assets/js/components/parametrage/def_partenaire.js ***!
  \************************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('def_partenaire_list'),
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
    "width": "1px",
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
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
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
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('def_partenaire_edit', {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('def_partenaire_delete', {
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
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('def_partenaire_index');
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

},[["./assets/js/components/parametrage/def_partenaire.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9kZWZfcGFydGVuYWlyZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJzbGltc2Nyb2xsIiwiaGVpZ2h0Iiwib24iLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJqUXVlcnkiLCJlYWNoIiwiaSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdHIiLCJzdWNjZXNzIiwidGltZU91dCIsIndhcm5pbmciLCJlcnJvciIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiY2xpY2siLCJpZCIsImRhdGEiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImNvZGUiLCJtZXNzYWdlIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJyZXNwb25zZUpTT04iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUVDO0FBQy9CSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7O0FBRUY7O0FBRUEsSUFBSUMsS0FBSyxHQUFHUixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNTLFNBQVMsQ0FBQztFQUM3QkMsSUFBSSxFQUFFO0lBQ0ZDLEdBQUcsRUFBRWQsa0hBQU8sQ0FBQ2UsUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUU7SUFDOUNDLElBQUksRUFBRTtFQUNWLENBQUM7RUFDRCxhQUFhLEVBQUUsSUFBSTtFQUNuQixXQUFXLEVBQUUsSUFBSTtFQUNqQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFFdkYsU0FBUyxFQUFFLENBQ1A7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLFlBQVksRUFBRSxJQUFJO0lBQUUsT0FBTyxFQUFFLEtBQUs7SUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxFQUMxRTtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLE1BQU07SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVBQUUsTUFBTTtJQUFFLFNBQVMsRUFBRTtFQUFFLENBQUMsRUFDckQ7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxLQUFLO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUNwRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLEtBQUs7SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3BEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVBQUUsS0FBSztJQUFFLFNBQVMsRUFBRTtFQUFFLENBQUMsRUFDcEQ7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxLQUFLO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUNwRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLE1BQU07SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVBQUUsTUFBTTtJQUFFLFNBQVMsRUFBRTtFQUFFLENBQUMsRUFDckQ7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxLQUFLO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUNwRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLEtBQUs7SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3BEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVBQUUsS0FBSztJQUFFLFNBQVMsRUFBRTtFQUFFLENBQUMsRUFDcEQ7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxLQUFLO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUNwRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLEtBQUs7SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3BEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxP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Q0FBQ0csWUFBWSxDQUFDSixPQUFPLENBQUNuRCxJQUFJLEVBQUVvRCxLQUFLLENBQUNHLFlBQVksQ0FBQ0osT0FBTyxDQUFDVCxLQUFLLEVBQUU7Y0FBRWYsT0FBTyxFQUFFO1lBQUssQ0FBQyxDQUFDO1VBQ3hHO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSEYsTUFBTSxDQUFDRyxPQUFPLENBQUMsOERBQThELEVBQUUsU0FBUyxFQUFFO01BQUVELE9BQU8sRUFBRTtJQUFLLENBQUMsQ0FBQztFQUNoSDtFQUNBeEIsQ0FBQyxDQUFDcUQsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQyxDIiwiZmlsZSI6ImRlZl9wYXJ0ZW5haXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGVmX3BhcnRlbmFpcmVfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcuc2Nyb2xsX2NvbnRlbnQnKS5zbGltc2Nyb2xsKHtcclxuICAgIGhlaWdodDogJzEwMDBweCdcclxufSlcclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlZl9wYXJ0ZW5haXJlX2VkaXQnLCB7ICdpZCc6ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY8OpZXNcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwid2FybmluZ1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxufSk7XHJcbmpRdWVyeS5lYWNoKCQoJy5mb3JtLWVycm9ycyBsaScpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbn0pO1xyXG4vKmNoZWNrIHRoZSBmb3JtIGVycm9ycyovXHJcbmNvbnNvbGUubG9nKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSk7IFxyXG5pZiAoJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpIT0nJyl7XHJcbiAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSkgXHJcbn1cclxuXHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignc3VibWl0JywgJ2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcjX2RlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJldGFibGlzc2VtZW50SWRcIik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlZl9wYXJ0ZW5haXJlX2RlbGV0ZScsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbGVydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlZl9wYXJ0ZW5haXJlX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9