


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