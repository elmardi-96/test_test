
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
});


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('grs_note_interne_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },



    ],
    "order": [[0, "desc"]],
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

table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3], []);
    CustomSearchDatatable.CustomSearchDate(api, [], []);
    CustomSearchDatatable.CustomSearchSelect(api, [4, 5], []);
    //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('grs_note_interne_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});






jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), { timeOut: 4000 })
    }
});
jQuery.each($('.form-errors li'), function (i, val) {
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), { timeOut: 4000 })
}
$('input[name="grs_note_interne[user]"]:radio').change(function () {
    $('#optionOneDiv').toggle(this.id == 'grs_note_interne_user_0');
    if (this.id == 'grs_note_interne_user_1') {
      $(".bloc_investissement").css("display", "block");
    }
});
$(".select2").select2();
$('body').on('change','.departement',function (e) {
   
    if ($(this).find('option:selected:last').val()!="") {
        var ids=[];
 ids=$(this).val();
 //alert(ids);
        $.ajax({
            url: Routing.generate('p_departement_get_employe', {id: ids }),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
            
                //   $(".employe").appendTo(infos.data); 
               // console.log(infos.data);
              
                $("#grs_note_interne_employes").html(infos.data);
                $('select.select2').select2();
                $('option[value=""],option:not([value])').remove();
                $('option[value="0"],option:not([value])').remove();
                $('#grs_note_interne_employes option').attr('selected', 'selected');
            
                
            }
        });
    } 
                
            else {
        $('.employe').html('<option value="">Choix employe</option>');
       
      
       
    }
    e.preventDefault();
});

/*if (localStorage.getItem('.employe')) {
    $(".employe option").eq(localStorage.getItem('.employe')).prop('selected', true);
}*/

/*$(".employe").on('change', function() {
    localStorage.setItem('.employe', $('option:selected', this).index());
});*/

$('.new').on('submit', '.form', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    $('select.select2').select2();
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('grs_note_interne_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            /* $('select.select2').select2(); */
            l.stop();

            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code = 200) {
                // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 });
                var url = Routing.generate('grs_note_interne_index');
                window.location.href = url;
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })


        }
    });
    e.preventDefault();
});



$('.error-class-tab').each(function (index) {
    //alert(arr.indexOf($(this).parents('.tab-pane').attr('id')))
    if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
        $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class="label badge-danger">Erreur!</span>');
    }
    arr = $(this).parents('.tab-pane').attr('id');
})
$('.edit').on('submit', '.form', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

    // Start loading
    l.start();

    $.ajax({
        type: 'POST',
        //  url: Routing.generate('grs_note_interne_edit'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            $('select.select2').select2();
            l.stop();

            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code = 200) {
                //  alert(result.data);
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                //var url = Routing.generate('grs_note_interne_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })


        }
    });
    e.preventDefault();
});



$("#_delete").click(function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
  
    var obj = {
      route: "grs_note_interne_delete",
      redirection: "grs_note_interne_index",
      token: token,
      id: id,
    };
    // alert();
    deleteCab(obj);
  
    e.preventDefault();
  });