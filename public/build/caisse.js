(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caisse"],{

/***/ "./assets/js/components/tresorerie/caisse.js":
/*!***************************************************!*\
  !*** ./assets/js/components/tresorerie/caisse.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



// this is the old file of caise the new one is in the module_gestion_commun / gestion_caisse.js

// const routes = require('../../../../public/js/fos_js_routes.json');
// import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
// import { deleteCab } from '../../functions/delete.js';
// require('../../plugins/validate/jquery.validate.min.js');
// import { ShowFormErrors } from '../../ManagementErrors/index.js';
// import * as Ladda from 'ladda';
// import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
// import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";

// Routing.setRoutingData(routes);

// global.$ = $;

// const Swal = require('sweetalert2')
// const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//         confirmButton: 'btn btn-white btn-xs sySweetStyle',
//         cancelButton: 'btn btn-warning btn-xs sySweetStyle'
//     },
//     buttonsStyling: false
// })

// var tr_alimentation_list_index = $('#grid_index_depot_retrait').DataTable({
//     ajax: {
//         url: Routing.generate('tr_caisse_list_index'), // json datasource
//         type: "get",
//     },
//     "deferRender": true,
//     "stateSave": false,
//     "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
//     pageLength: 15,
//     "columns": [
//         {"searchable": true, "width": "3%", "targets": [0]},
//         { "width": "20%"},
//         { "width": "20%"},
//         { "width": "20%"},
//         {"width" : "20%"},
//         {"width" : "20%"},
//     ],

//     dom: 'f<"html5buttons btn-group"B>lTgtip',
//     buttons: [
//         'columnsToggle',
//         {
//             text: 'Restaurer',
//             className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
//             action: function (e, dt, node, config) {
//                 table.state.clear();
//                 window.location.reload();
//             },

//         },
//     ],
//     "language": {
//         "url": Routing.generate('datatables_langue'),
//         "processing": true
//     },
//     fixedHeader: true,

// });

// tr_alimentation_list_index.on("init.dt", function (e, settings) {
//   // let api = new $.fn.dataTable.Api(settings);
//   let st = api.state.loaded();
//   let data = api.data();
//   CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
//   CustomSearchDatatable.CustomSearchDate(api, [4], []);
//   CustomSearchDatatable.CustomSearchSelect(api, [2], []);
// });

// $("#create_caisse").click(function (e) {
//     var form_name = $(".form").attr("name");

//     var formData = new FormData();
//     var params = $('.form').serializeArray();

//     $.each(params, function (i, val) {
//         formData.append(val.name, val.value);
//         //  console.log(val.name);

//     });

//     var selector = $(".form");
//     var l = Ladda.create(document.querySelector(".my-button"));
//     l.start();
//     $.ajax({
//         type: "POST",
//         url: Routing.generate("tr_caisse_new"),
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function (result) {
//             l.stop();
//             // alert(result.code);
//             if(result.code == 403){
//                 toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

//             }

//             else if (result.errors) {

//                 ShowFormErrors(selector, form_name, result.errors);
//             } else if (result.empty) {

//                 toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             } else if (result.code=200) {
//                // alert( result.message.data);
//                 toastr.success(result.message.text, result.message.title, {timeOut: 4000});
//                 var url = Routing.generate('tr_caisse_first_index');
//                 window.location.href = url;
//                 ///location.reload();
//             }
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             l.stop();
//             toastr.error("Erreur", errorThrown, {timeOut: 4000});
//         },
//     });
//     e.preventDefault();
// });

/***/ })

},[["./assets/js/components/tresorerie/caisse.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2NhaXNzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsImZpbGUiOiJjYWlzc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vLyB0aGlzIGlzIHRoZSBvbGQgZmlsZSBvZiBjYWlzZSB0aGUgbmV3IG9uZSBpcyBpbiB0aGUgbW9kdWxlX2dlc3Rpb25fY29tbXVuIC8gZ2VzdGlvbl9jYWlzc2UuanNcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG4vLyBpbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbi8vIGltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG4vLyByZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuLy8gaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuLy8gaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG4vLyBpbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG4vLyBpbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuLy8gUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbi8vIGdsb2JhbC4kID0gJDtcclxuXHJcbi8vIGNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbi8vIGNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4vLyAgICAgY3VzdG9tQ2xhc3M6IHtcclxuLy8gICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuLy8gICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuLy8gICAgIH0sXHJcbi8vICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxuLy8gfSlcclxuXHJcblxyXG5cclxuXHJcbi8vIHZhciB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleCA9ICQoJyNncmlkX2luZGV4X2RlcG90X3JldHJhaXQnKS5EYXRhVGFibGUoe1xyXG4vLyAgICAgYWpheDoge1xyXG4vLyAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY2Fpc3NlX2xpc3RfaW5kZXgnKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbi8vICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuLy8gICAgIH0sXHJcbi8vICAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbi8vICAgICBcInN0YXRlU2F2ZVwiOiBmYWxzZSxcclxuLy8gICAgIFwibGVuZ3RoTWVudVwiOiBbWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG4vLyAgICAgcGFnZUxlbmd0aDogMTUsXHJcbi8vICAgICBcImNvbHVtbnNcIjogW1xyXG4vLyAgICAgICAgIHtcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjMlXCIsIFwidGFyZ2V0c1wiOiBbMF19LFxyXG4vLyAgICAgICAgIHsgXCJ3aWR0aFwiOiBcIjIwJVwifSxcclxuLy8gICAgICAgICB7IFwid2lkdGhcIjogXCIyMCVcIn0sXHJcbi8vICAgICAgICAgeyBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4vLyAgICAgICAgIHtcIndpZHRoXCIgOiBcIjIwJVwifSxcclxuLy8gICAgICAgICB7XCJ3aWR0aFwiIDogXCIyMCVcIn0sXHJcbi8vICAgICBdLFxyXG5cclxuLy8gICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbi8vICAgICBidXR0b25zOiBbXHJcbi8vICAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbi8vICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuLy8gICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbi8vICAgICAgICAgICAgIH0sXHJcblxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgXCJsYW5ndWFnZVwiOiB7XHJcbi8vICAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuLy8gICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxuLy8gfSk7XHJcblxyXG4vLyB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbi8vICAgLy8gbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4vLyAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuLy8gICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbi8vICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMywgNSAsNl0sIFtdKTtcclxuLy8gICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFs0XSwgW10pO1xyXG4vLyAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMl0sIFtdKTtcclxuLy8gfSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyAkKFwiI2NyZWF0ZV9jYWlzc2VcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIHZhciBmb3JtX25hbWUgPSAkKFwiLmZvcm1cIikuYXR0cihcIm5hbWVcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgICAgdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbi8vICAgICAkLmVhY2gocGFyYW1zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbi8vICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbC5uYW1lLCB2YWwudmFsdWUpO1xyXG4vLyAgICAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwubmFtZSk7XHJcblxyXG4vLyAgICAgfSk7XHJcblxyXG5cclxuICBcclxuXHJcbi8vICAgICB2YXIgc2VsZWN0b3IgPSAkKFwiLmZvcm1cIik7XHJcbi8vICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbi8vICAgICBsLnN0YXJ0KCk7XHJcbi8vICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4vLyAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NhaXNzZV9uZXdcIiksXHJcbi8vICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbi8vICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4vLyAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4vLyAgICAgICAgICAgICAvLyBhbGVydChyZXN1bHQuY29kZSk7XHJcbi8vICAgICAgICAgICAgIGlmKHJlc3VsdC5jb2RlID09IDQwMyl7XHJcbi8vICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG5cclxuLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZT0yMDApIHtcclxuLy8gICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2Fpc3NlX2ZpcnN0X2luZGV4Jyk7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuLy8gICAgICAgICAgICAgICAgIC8vL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICBsLnN0b3AoKTtcclxuLy8gICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9KTtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==