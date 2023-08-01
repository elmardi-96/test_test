const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

import DataTable from 'datatables.net-bs4';


Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';

import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';

import * as Ladda from 'ladda';


if(window.pr2){
var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_evaluation_epreuves_list',{element:window.pr2.attr("data-element")}), // json datasource
        type: "get",
    },
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        
        
    ],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function (e, dt, node, config) {
                table.state.clear();
                //window.location.reload();
            },

        },
    ],
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    },
    fixedHeader: true,
});
}
