const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

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

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('p_compterubrique_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
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
    var url = Routing.generate('p_compterubrique_edit', { 'id': $(this).closest('tr').attr('id') });
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


$('.new , .edit').on('submit', 'form', function (e) {
    var l = Ladda.create(document.activeElement);
    l.start();
});



$('#_delete').click(function (e) {
    var id = $('#test').data("etablissementId");
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment supprimer cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'DELETE',
                    url: Routing.generate('p_compterubrique_delete', { 'id': id }),
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            // table.ajax.reload();
                            //   alert();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            var url = Routing.generate('p_compterubrique_index');
                            window.location.href = url;
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});




function getSubSelect(myclass, myboolean, mycontent) {
    //console.log(mycontent)
    if (myboolean) {
        $(myclass).prop("disabled", false);
    } else {
        $(myclass).prop("disabled", true);
        $(myclass).parent().find('.select2 .select2-selection__arrow').html('<i class="i-load fa fa-refresh"></i>')
    }
    if (mycontent) {
        var array = myclass.split(',');
        for (var i = 0, l = array.length; i < l; i++) {
            //console.log($(mycontent).find(array[i]));
            $(array[i]).replaceWith($(mycontent).find(array[i]))
        }
    }


}



$('.new').on('change', '.dossier', function (e) {
    getSubSelect(".compteMasse", false, '');
    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();

    // console.log(data);
    //alert($form.attr('action'));
    //  console.log($form.attr('method'));
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            // console.log(html); 
            getSubSelect(".compteMasse", true, html);
            $('.sel2').select2();

            //$('.compteRubrique').parent().find('.select2').not(':first').remove();

            //$('.comptePoste').parent().find('.sel2').select('clear');
            //$('.compte').parent().find('.sel2').trigger('clear');

        }
    });
    e.preventDefault();
});