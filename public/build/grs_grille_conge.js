(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grs_grille_conge"],{

/***/ "./assets/js/components/parametrage/grs_grille_conge.js":
/*!**************************************************************!*\
  !*** ./assets/js/components/parametrage/grs_grille_conge.js ***!
  \**************************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('grs_grille_conge_list'),
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
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('grs_grille_conge_edit', {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('grs_grille_conge_delete', {
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
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('grs_grille_conge_index');
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

},[["./assets/js/components/parametrage/grs_grille_conge.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9ncnNfZ3JpbGxlX2NvbmdlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwiY2xvc2VzdCIsImF0dHIiLCJocmVmIiwialF1ZXJ5IiwiZWFjaCIsImkiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidG9hc3RyIiwic3VjY2VzcyIsInRpbWVPdXQiLCJ3YXJuaW5nIiwiZXJyb3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsImNsaWNrIiwiaWQiLCJkYXRhIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJjb2RlIiwibWVzc2FnZSIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFB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M0J6QixNQUFNLENBQUNHLE9BQU8sQ0FBQ29CLE1BQU0sQ0FBQ0csT0FBTyxDQUFDakQsSUFBSSxFQUFFOEMsTUFBTSxDQUFDRyxPQUFPLENBQUNULEtBQUssRUFBRTtnQkFBRWYsT0FBTyxFQUFFO2NBQUssQ0FBQyxDQUFDO1lBQ2hGO1VBQ0osQ0FBQztVQUNERSxLQUFLLEVBQUUsZUFBVXVCLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDN0M3QixNQUFNLENBQUNHLE9BQU8sQ0FBQ3dCLEtBQUssQ0FBQ0csWUFBWSxDQUFDSixPQUFPLENBQUNqRCxJQUFJLEVBQUVrRCxLQUFLLENBQUNHLFlBQVksQ0FBQ0osT0FBTyxDQUFDVCxLQUFLLEVBQUU7Y0FBRWYsT0FBTyxFQUFFO1lBQUssQ0FBQyxDQUFDO1VBQ3hHO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSEYsTUFBTSxDQUFDRyxPQUFPLENBQUMsOERBQThELEVBQUUsU0FBUyxFQUFFO01BQUVELE9BQU8sRUFBRTtJQUFLLENBQUMsQ0FBQztFQUNoSDtFQUNBdEIsQ0FBQyxDQUFDbUQsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQyxDIiwiZmlsZSI6Imdyc19ncmlsbGVfY29uZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4vL3ZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfZ3JpbGxlX2NvbmdlX2xpc3QnKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX2dyaWxsZV9jb25nZV9lZGl0JywgeyAnaWQnOiAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxualF1ZXJ5LmVhY2goJCgnLnRvYXN0ci1tc2cnKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpKTtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2PDqWVzXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbn0pO1xyXG5qUXVlcnkuZWFjaCgkKCcuZm9ybS1lcnJvcnMgbGknKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG59KTtcclxuLypjaGVjayB0aGUgZm9ybSBlcnJvcnMqL1xyXG5jb25zb2xlLmxvZygkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCkpOyBcclxuaWYgKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSE9Jycpe1xyXG4gICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pIFxyXG59XHJcblxyXG5cclxuJCgnLm5ldyAsIC5lZGl0Jykub24oJ3N1Ym1pdCcsICdmb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnI19kZWxldGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKFwiZXRhYmxpc3NlbWVudElkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfZ3JpbGxlX2NvbmdlX2RlbGV0ZScsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbGVydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19ncmlsbGVfY29uZ2VfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=