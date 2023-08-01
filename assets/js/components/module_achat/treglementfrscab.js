const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import { deleteCab } from '../../functions/delete.js';
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
        url: Routing.generate('reglementfrscab_list') + location.search, // json datasource
        type: "get",
        beforeSend: function() {
            if (table.hasOwnProperty('settings')) {
                var settings = table.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        }
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
    "order": [[0, "asc"]],
    "columns": [
        {"orderable": true, "width": "5%", "searchable": true, "targets": [0]},
        {"width": "25%"},
        {"width": "25%"},
        { "width": "25%"},
        {"width": "25%"},
        {"width": "25%"},
        {"width": "25%"},

        
        {"width": "25%" },
        {"width": "25%"},
     
     


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
table.on('init.dt', function (e, settings) {
    var api = new $.fn.dataTable.Api(settings);
    var st = api.state.loaded();

    var data = api.data();
    //  console.log(api.data())

    CustomSearchDatatable.CustomSearchText(api, [1 ,  4 , 5 , 6 , 7], []);
    CustomSearchDatatable.CustomSearchDate(api, [2 , 8], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [3], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
     




    // ... use `state` to restore information
});
/*column 1 de datatble search*/



$('#_condition').click(function (e) {
    var id = table.row('.selected').id();
    //alert(id);
    if (id) {
        var url = Routing.generate('ua_t_reglement_condition', { 'id': id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});


$('.action_head').click(function () {
    console.log($('.action').filter(':checked').length);
    $(".action ,.action_head").prop('checked', $(this).prop("checked"));
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);

});
$('body').on('click', '.action', function () {
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});


/*  $('#grid').on('click', '.statut_op', function (event) {
 var name = $(this).attr('name');
 var id = $(this).attr('rol'); */
//alert(name+""+id);
$(".select2_demo_3").select2({
    placeholder: "Action",
    allowClear: true
});

$('.list_actions').change(function (e) {

});






























$('.show-me').click(function (e) {
    $(".actions").toggleClass('sidebar-open')
    e.preventDefault();
})

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */




console.log('ff');


$('#grid tbody').on('click', 'tr', function () {
    console.log('here');
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});














var mem = $('#data_1 .input-group.date').datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true
});

var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);

$('#selector').datepicker('setDate', yearsAgo);















$('#_imprimer').click(function (e) {
  //  var id = table.row('.selected').id();
    var id = $('#test').data("reglementId");
    if (id) {
        var url = Routing.generate('pdf_show_reglement', {'id': id});
        // window.location.href = url;
        window.open(url, '_blank');
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});














$('.new').on('submit', '.form2', function (e) {
    // alert(1);
    var l = Ladda.create(document.activeElement);
     var form_name = $(this).attr('name');
     var dta = new FormData(this);
     var selector = $(this).attr('class').split(' ')[0];
     var id = $('#test').data("factureId");
     l.start();
     $.ajax({
         type: 'POST',
         url: Routing.generate('ua_t_reglement_condition_insert', { 'id': id }),
         data: dta,
         processData: false,
         contentType: false,
         success: function (result) {
            l.stop();
           
             if (result.errors) {
             
                 $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                     var column = val.propertyPath;
                     var columnName = column.split('.');
                     $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });
             } else if (result.empty) {
                 toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
             } else if (result.data) {
                 toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
           
            
                 var url = Routing.generate('ua_t_reglement_index');
                  window.location.href = url;
                
             }
         },
         error: function (jqXHR, textStatus, errorThrown) {
             toastr.error("Erreur", errorThrown, { timeOut: 4000 })
             l.stop();
         }
     });
     e.preventDefault();
 });









$('#_delete_reglement').click(function (e) {

    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');

    var obj = {
        "route": "t_reglementfrscab_delete_reglement",
        "redirection": "ua_t_reglement_index",
        "token" :token,
        "id" :id,
      };
     // alert();
    deleteCab(obj);



    e.preventDefault();
});