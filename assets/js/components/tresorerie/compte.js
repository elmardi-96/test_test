
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";

Routing.setRoutingData(routes);


global.$ = $;

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

// test
// alert('test');

// $(".test").click(function (e) {
//     // alert('test');
//     console.log('est');
    
    
//     $.ajax({
//         type: 'get',
//         url: Routing.generate('tr_compte_list_index'),
//         processData: false,
//         contentType: false,
//         success: function (result) {
//             alert('test');
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             toastr.error("Erreur", errorThrown, {timeOut: 4000})
//         }
//     });
// });

// $.ajax({
//     type: 'get',
//     url: Routing.generate('tr_compte_list_index'),
//     data: dta,
//     processData: false,
//     contentType: false,
//     success: function (result) {
//         alert('test');
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//         toastr.error("Erreur", errorThrown, {timeOut: 4000})
//     }
// });



var tr_compte_list_index = $('#tt_compte_table').DataTable({
    ajax: {
        url: Routing.generate('tr_compte_list_index'), // json datasource
        type: "get",
    },
    "serverSide": true,
    "scrollX": true, 
    "deferRender": true,
    "stateSave": false,
    "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "columns": [
        {"searchable": true, "width": "3%", "targets": [0]},
        { "width": "30%"},
        { "width": "12%"},
        { "width": "30%"},
        {"width" : "12%"},
        {"width" : "12%"},
      
    ],

    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function (e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },

        },
    ],
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    },
    fixedHeader: true,

});

tr_compte_list_index.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
    CustomSearchDatatable.CustomSearchDate(api, [4], []);
    CustomSearchDatatable.CustomSearchSelect(api, [2], []);
  });


