const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';



Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';

import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';

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


$('.scroll_content').slimscroll({
            height: '600px'
        })


jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), {timeOut: 4000})
    }
});
jQuery.each($('.form-errors li'), function (i, val) {
 
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text()); 
if ($('.form-errors').text()!=''){
   toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000}) 
}


$('#_imprimer').click(function (e) {
    var id = $('#test').data("etudiantId");
    if (id) {
        var url = Routing.generate('univ_vpdf_show', {'id': id});
        window.open(url, '_blank');
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_facturation_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "20%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        
        
 
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

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();


    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3, 4,  7, 8, 9, 10  ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [5, 6 , 7], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
   // CustomSearchDatatable.CustomSearchSupOrEqual(api, [6], table);




});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('module_univ_facturation_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});




$('.new').on('submit', '.form', function (e) {
    // var d =Routing.generate('uv_facturecab_insert', { 'id': id });
    //alert(d);

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = $('#test').data("operationId");
  
// Create a new instance of ladda for the specified button
var l = Ladda.create(document.querySelector('.my-button2'));

// Start loading
 l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_facturation_reglement', { 'id': id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
            if (result.errors) {
                //  console.log(result.errors);
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    l.stop();
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });
            } else if (result.empty) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                l.stop();
                $(".form")[0].reset();
                $(".new .table-detail tbody").hide();
                $('.new-article-btn').show();
                $(".new .table-detail > tbody tr").not(":last").remove();
                location.reload();
                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});

$('.paiement').change(function(){
   if ($(this).val()==2){
       $('.bloc_cheque').show(); 
   }else {
       $('#univ_t_reglement_dateEcheance').val(null); 
        $('#univ_t_reglement_reference').val(null); 
       $('.bloc_cheque').hide(); 
   }
   if ($(this).val()==1 || $(this).val()==4 ){
       $('.bloc_banque').hide(); 
   }else {
       $('.bloc_banque').show(); 
   }
   
   
   
    console.log($(this).val()); 
});


