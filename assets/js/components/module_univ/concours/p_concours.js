const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';


//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';

global.$ = $;

$('.new , .edit').on('submit', 'form', function (e) {
    var l = Ladda.create(document.activeElement);
    l.start();
});

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

$('.full-height-scroll').slimscroll({
    height: '800px'
})


var $datatableDefault = $('.datatable-default').DataTable({

    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true,

    }
});



$('body').on('submit', '.form', function (e) {
    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();
});


var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix Matiére",
    allowClear: true
});


jQuery.each($('.toastr-msg'), function (i, val) {
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), {timeOut: 4000})
    }
});



// add matiére
//$('body').on('submit', '._matiere', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    var l = Ladda.create(document.querySelector('.my-button'));
//    //alert(id);
//    // Start loading
//    l.start();
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('module_univ_concours_p_concourscab_matieres', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                //console.log(result.errors);
//                l.stop();
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                l.stop();
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                location.reload();
//            } else if (result.code == 403) {
//                l.stop();
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            alert();
//            l.stop();
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});

// add matiére
//$('body').on('submit', '._grille', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    var l = Ladda.create(document.querySelector('.my-button'));
//    //alert(id);
//    // Start loading
//    l.start();
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('module_univ_concours_p_concourscab_grille_insert', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                //console.log(result.errors);
//                l.stop();
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                l.stop();
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                location.reload();
//            } else if (result.code == 403) {
//                l.stop();
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            alert();
//            l.stop();
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});



//$('body').on('change','.etablissement',function (e) {
//    if ($.isNumeric($(this).val())) {
//
//        $.ajax({
//            url: Routing.generate('get_formation_concours', {id: $(this).val()}),
//            success: function (result) {
//                var infos = jQuery.parseJSON(result);
//               
//                $(".formation").html(infos.data);
//                $('select.select2').select2();
//            }
//        });
//    } else {
//        
//    }
//    e.preventDefault();
//});



$('body').on('change', '.etablissement', function (e) {
    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();

    //console.log(data);
    //alert($form.attr('action'));
    //   console.log($form.attr('method'));
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            // console.log(html); 
            ($('.formation').replaceWith($(html).find('.formation')));
        }
    });
    e.preventDefault();
});



$('._concours_formationdelete').click(function (e) {

    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');
    //console.log(id + ' ' + token);
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
                url: Routing.generate('module_univ_concours_formation_delete', {'id': id, 'token': token}),
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        location.reload();
                    } else if (result.code == 403) {
                        toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                }
            });
        }
    });
    e.preventDefault();
});


$('._concours_grilledelete').click(function (e) {
    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');
   // console.log(id + ' ' + token);
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
                url: Routing.generate('module_univ_concours_grille_delete', {'id': id, 'token': token}),
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        location.reload();
                    } else if (result.code == 403) {
                        toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                }
            });
        }
    });
    e.preventDefault();
});

$('._concours_classementdelete').click(function (e) {
    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');
   // console.log(id + ' ' + token);
    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment supprimer cet enregistrement 2?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {
            $.ajax({

                type: 'DELETE',
                url: Routing.generate('module_univ_concours_classement_delete', {'id': id, 'token': token}),
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        location.reload();
                    } else if (result.code == 403) {
                        toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                }
            });
        }
    });
    e.preventDefault();
});




