
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';

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
    var api = new $.fn.dataTable.Api(settings);
    var st = api.state.loaded();

    var data = api.data();
    //  console.log(api.data())

    console.log(st);
    if (st != null) {
        $.each(st.columns, function (key, value) {
            if (value.search.search != "") {
                $('.remove-filter').show();
                return false;
            }

        });


        /* recupérer les valeurs déja saisie dans le filtre */

        $(".search_column1").val(st.columns[1].search.search);
        $(".search_column2").val(st.columns[2].search.search);
        // $(".search_column3 option[value='" + st.columns[3].search.search + "']").attr("selected", "selected");
        $(".search_column3").val(st.columns[3].search.search);
        $(".search_column4").val(st.columns[4].search.search);
        // $(".search_column5").val(st.columns[5].search.search);
        $(".search_column5").val(st.columns[5].search.search);
        $(".search_column6 option[value='" + st.columns[6].search.search + "']").attr("selected", "selected");

   
    }



});
/*column 1 de datatble search*/

var search_column1 = $('.search_column2').datepicker({
    todayBtn: "linked",
    keyboardNavigation: true,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    language: 'fr',

});
var search_column11 = $('.search_column11').datepicker({
    todayBtn: "linked",
    keyboardNavigation: true,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    language: 'fr',

});
search_column1.on('changeDate', function (e) {
    table.columns(2).search(this.value).draw();
});
search_column11.on('changeDate', function (e) {
    table.columns(5).search(this.value).draw();
});
$('.search_column1_clear').click(function () {
    $('.search_column2').datepicker('setDate', null).datepicker('fill');
});
$('.search_column11_clear').click(function () {
    $('.search_column11').datepicker('setDate', null).datepicker('fill');
});

$('.search_column1').on('keyup', function () {
    table.columns(1).search(this.value).draw();
});
$('.search_column3').on('keyup', function () {
    table.columns(3).search(this.value).draw();
});


$('.search_column4').on('keyup', function () {
    table.columns(4).search(this.value).draw();
});
$('.search_column5').on('keyup', function () {
    table.columns(5).search(this.value).draw();
});
$('.search_column6').on('change', function () {
    table.columns(6).search(this.value).draw();
});
/*$('.search_column6').on('keyup', function () {
 table.columns(6).search(this.value).draw();
 });*/


$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});




