
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';

import * as Ladda from 'ladda';
global.$ = $;
const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})



var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_achat_reglement_list'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "5%", "searchable": true, "targets": [0]},

        {"orderable": true},
        {"orderable": true, "width": "25%"},
        {"orderable": true, "width": "25%"},
        {"orderable": true, "width": "25%"},
        {"orderable": true, "width": "25%"},

        
        {"orderable": true },
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
});

table.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();

    //console.log(st);
//if (st != null) {
//    $.each(st.columns, function (key, value) {
//        if (value.search.search != "") {
//            $('.remove-filter').show();
//            return false;
//        }
//    });
//}
//alert()
    CustomSearchDatatable.CustomSearchText(api, [1 , 3 , 4], []);
    CustomSearchDatatable.CustomSearchDate(api, [2 , 5], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [6], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);


});
/*column 1 de datatble search*/


$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});




