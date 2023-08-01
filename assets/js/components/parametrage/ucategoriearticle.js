const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
const blueimp = require('../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min');
const Swal = require('sweetalert2')
import * as Ladda from 'ladda';
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

jQuery(document).ready(function () {
    jQuery('.add-another-collection-widget').click(function (e) {
        var list = jQuery(jQuery(this).attr('data-list-selector'));
        // Try to find the counter of the list or use the length of the list
        var counter = list.data('widget-counter') || list.children().length;

        // grab the prototype template
        var newWidget = list.attr('data-prototype');
        // replace the "__name__" used in the id and name of the prototype
        // with a number that's unique to your emails
        // end name attribute looks like name="contact[emails][2]"
        newWidget = newWidget.replace(/__name__/g, counter);
        // Increase the counter
        counter++;
        // And store it, the length cannot be used if deleting widgets is allowed
        list.data('widget-counter', counter);

        // create a new list element and add it to the list
        var newElem = jQuery(list.attr('data-widget-tags')).html(newWidget);
        newElem.appendTo(list);
    });
});
$('.new').on('submit', '.form', function (e) {
    //alert();
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_categorie_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                // console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('stock_category_edit', {'id': result.data});
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});



var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('stock_categorie_list'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "columns": [
        {"orderable": false, "width": "5%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "25%"},
        {"orderable": false, "width": "25%"}, 
        {"orderable": false, "width": "25%"},
        {"orderable": false, "width": "25%"}, 
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

$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('u_categorie_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});




$('.edit').on('submit', '.form', function (e) {
    var l = Ladda.create(document.querySelector('.my-button'));

    // Start loading
        l.start();
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_category_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            $('.errors-list').remove();
            l.stop();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
            }
        }
    });
    e.preventDefault();
});


$('#_delete_categorie').click(function (e) {
    /*var l = Ladda.create(document.querySelector('.my-button'));

    // Start loading
        l.start();*/
    //var id = table.row('.selected').id();
    var id = $(this).attr("data-id");
    //alert(id)
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
                    url: Routing.generate('stock_category_delete', {'id': id}),
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            //l.stop();
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            var url = Routing.generate('stock_categorie_index');
                            window.location.href = url;
                        } else if (result.code == 403) {
                            //l.stop();
                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        l.stop();
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});