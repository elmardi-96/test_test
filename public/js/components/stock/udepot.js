const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';

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
        url: Routing.generate('stock_depot_list'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "5%", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "width": "5%", "orderable": true, visible: false },
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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



$('#grid tbody').on('click', 'tr', function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});





$('.new').on('submit', '.form', function(e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_depot_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            if (result.errors) {
                // console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                var url = Routing.generate('stock_depot_index');
                window.location.href = url;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});



$('#_edit').click(function(e) {
    var id = table.row('.selected').id();
    if (id) {
        var url = Routing.generate('stock_depot_edit', { 'id': id });
        window.location.href = url;
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});

$('.edit').on('submit', '.form', function(e) {
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_depot_update', { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            $('.errors-list').remove();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
            }
        }
    });
    e.preventDefault();
});


$('#_show').click(function(e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('u_depot_show', { 'id': id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});

$('#_delete').click(function(e) {
    var id = table.row('.selected').id();
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
                    url: Routing.generate('stock_depot_delete', { 'id': id }),
                    success: function(result) {
                        console.log(result);
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
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








//
//
//$('._delete_fichier').click(function (e) {
//    var id = $(this).attr('id');
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_fichiers_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                            location.reload(); 
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//$('body').on('submit', '.stock_produit_add_stock', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_add_stock', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//             
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});


$('#_archiver').click(function(e) {
    var id = table.row('.selected').id();
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Archiver cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('stock_depot_archiver', { 'id': id }),
                    success: function(result) {
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
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




$('body').on('submit', '.stock_depot_trensfert', function(e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_depot_trensfert', { 'id': id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {

                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                    //  location.reload(); 
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })

            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});