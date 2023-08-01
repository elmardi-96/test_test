
const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../../functions/delete.js';
require('../../../plugins/validate/jquery.validate.min.js');

//plugins/steps/jquery.steps.css
require('../../../../../assets/js/plugins/steps/jquery.steps.css');
require('../../../plugins/steps/jquery.steps.min.js');


import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';

import { ShowFormErrors } from '../../../ManagementErrors/index.js';

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

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('t_r_comptes_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        
    ],
    "order": [[ 0, "desc" ]],
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




/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('t_r_comptes_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});






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


/*$('.new , .edit').on('submit', 'form', function (e) {
    var l = Ladda.create(document.activeElement);
    l.start();
});*/

$('.new').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('t_r_comptes_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('t_r_comptes_edit', {id: result.data.id});
                window.location.href = url;
                //location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});




$('.edit').on('submit', '.form', function (e) {
   
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    var id = dta.get('_id');
// Start loading
    l.start();
   
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('t_r_comptes_edit', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
         //alert((result);
            l.stop();
          //  alert(result.data);
         
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
              
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
               
                
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
              
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});




$('#_delete').click(function (e) {

    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');

    var obj = {
        "route": "t_r_comptes_delete",
        "redirection": "t_r_comptes_index",
        "token" :token,
        "id" :id,
      };
     // alert();
    deleteCab(obj);



    e.preventDefault();
});
