
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

/*historique show more */
$('body').on('click', '.show_more_historique_btn', function (e) {
    $('.show_more_historique').show();
    e.preventDefault();
});

$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('.action_head').click(function () {
    console.log($('.action').filter(':checked').length);
    $(".action ,.action_head").prop('checked', $(this).prop("checked"));
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);

});
$('body').on('click', '.action', function () {
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});

//$('body').on('change', '._multiple_actions', function () {
//    var _array_ids = [];
//     
//    $.each($("input[name=_action]:checked"), function () {
//        _array_ids.push($(this).val());
//    });
//
//    // $("body > ._multiple_actions option[value='']").attr('selected', 'selected'); 
//
//
//    console.log($(this).val());
//
//    if ($(this).val() == '_ajouter') {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment Affecter ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-archive'></i> Oui, Affecter!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'POST',
//                    url: Routing.generate('module_grs_affectation_conge_new'),
//                    data: {_array_ids},
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            table.ajax.reload();
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//                $('._ajouter').val('');
//            }
//        });
//    }
//
//});




$('body').on('submit', '.affecter_conge', function (e) {
  

    var dta = new FormData(this);
   
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();
    // console.log(e.type);
    $.ajax({
        type: 'POST', 
        url: Routing.generate('module_grs_affectation_conge_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.errors) {
                // console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
               var x = result.users ;
               console.log(x); 
               $('.users_list  > tr').each(function(key , val ) {
                   
                   console.log($(this).attr('data-user')); 
                   
                   console.log($.inArray( $(this).attr('data-user'), x)); 
                   if ($.inArray( $(this).attr('data-user'), x) != -1) {
                       $(this).hide(); 
                   }
               });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});













$('.new').on('submit', '.form', function (e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();
    // console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_grs_affectation_conge_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.errors) {
                // console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('module_grs_affectation_conge_index');
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});


$('#_edit').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        var url = Routing.generate('module_grs_affectation_conge_show', {'id': id});
        window.location.href = url;
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});

$('body').on('click', '.rsearch', function (e) {
    //alert();
    //$("#form_annee").val(1).trigger('change.select2');
    //$('#form_annee option:eq(0)').prop('selected',true);
    $('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');
    $('#form_poste').val("").trigger('change');
    $('#form_type').val("").trigger('change');
    $.ajax({
        type: 'POST',
        url: Routing.generate('mesures_type', {type: $(this).attr('type')}),
        data: {annee: $("#form_annee").val(),fournisseur:$("#form_poste").val(),statut:$("#form_type").val()},
        success: function (result) {
            //alert();
            getAllTotalStatistique();
            console.log(result);
            var r = $.parseJSON(result);
            massPopChart.data.labels = r.labels;
            massPopChart.data.datasets[0].data = r.expression_besoin.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
            massPopChart.update();


            massPopChart2.data.labels = r.labels;
            massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart2.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
            massPopChart2.update();



            massPopChart3.data.labels = r.labels;
            massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart3.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
            massPopChart3.update();



            massPopChart4.data.labels = r.labels;
            massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart4.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
            massPopChart4.update();


            massPopChart5.data.labels = r.labels;
            massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart5.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart5.data.datasets[0].backgroundColor = r.reglement_fournisseur.backgroundColor;
            massPopChart5.update();
        }
    });
    //$("#form_type").val(1);
});
//$(document).ready(function(){
//    $('select').formSelect();
//});

$('body').on('click', '.search', function (e) {
    $.ajax({
        type: 'POST',
        url: Routing.generate('mesures_type', {type: $(this).attr('type')}),
        data: {annee: $("#form_annee").val(),fournisseur:$("#form_poste").val(),statut:$("#form_type").val()},
        success: function (result) {
            //alert();
            getAllTotalStatistique();
            console.log(result);
            var r = $.parseJSON(result);
            massPopChart.data.labels = r.labels;
            massPopChart.data.datasets[0].data = r.expression_besoin.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
            massPopChart.update();



            massPopChart2.data.labels = r.labels;
            massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart2.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
            massPopChart2.update();




            massPopChart3.data.labels = r.labels;
            massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart3.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
            massPopChart3.update();




            massPopChart4.data.labels = r.labels;
            massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart4.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
            massPopChart4.update();



            massPopChart5.data.labels = r.labels;
            massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart5.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart5.data.datasets[0].backgroundColor = r.reglement_fournisseur.backgroundColor;
            massPopChart5.update();
        }
    });

    e.preventDefault();
});

$('body').on('submit', '#module_grs_demande_conge_apply_transitions', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    var title = dta.get('title');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état '" + title + "' pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui !",
            cancelButtonText: "<i class='fa fa-times'></i> Non !",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('module_grs_demande_conge_apply_transitions', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


$('body').on('submit', '#module_grs_demande_conge_apply_annuler', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état \"Annulé\" pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui !",
            cancelButtonText: "<i class='fa fa-times'></i> Non !",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('module_grs_demande_conge_apply_annuler', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});

$('body').on('submit', '#module_grs_demande_conge_apply_encours', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');

    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état \"en cours\" pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-refresh'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> Non!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('module_grs_demande_conge_apply_encours', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



$('body').on('submit', '#module_grs_demande_conge_apply_archiver', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état \"Archivé\" pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-archive'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> Non!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('module_grs_demande_conge_apply_archiver', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});




$('body').on('submit', '#module_grs_demande_conge_apply_creer', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état \"Crée\" pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-plus'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> Non!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('module_grs_demande_conge_apply_creer', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



$('body').on('submit', '#module_grs_demande_conge_apply_valider', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état \"Validé\" pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> Non!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('module_grs_demande_conge_apply_valider', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});




$('body').on('submit', '#module_grs_demande_conge_apply_generer', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_grs_demande_conge_apply_generer', {'id': id}),
            success: function (result) {
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


/*update commande fournisseur */

$('.edit').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_grs_demande_conge_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            $('.errors-list').remove();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});

$('._delete_fichier').click(function (e) {
    var id = $(this).attr('id');

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
                    url: Routing.generate('module_achat_commandefrs_fichiers_delete', {'id': id}),
                    success: function (result) {
                        // console.log(result);
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
    } else {
        toastr.warning("Impossible d'effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


/*supprimer un artcile commande détail */
$('.edit').on('submit', '.detail_form_delete', function (e) {
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var token = dta.get('_token');
    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment supprimer cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {

            $.ajax({
                type: 'DELETE',
                url: Routing.generate('module_grs_demande_conge_delete', {'id': id, 'token': token}),
                data: dta,
                processData: false,
                contentType: false,
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        location.reload();
                    } else if (result.data == 403) {
                        toastr.error(result.message.text, result.message.title, {timeOut: 4000})
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


/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

$('.edit').on('submit', '.detail_edit', function (e) {
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    var row_index = $(this).closest(".table-detail > tbody  > tr").index();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_grs_demande_congedet_edit_detail', {'id': id}),
        success: function (result) {
            $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>" + result + "</td>");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
        }
    });

    e.preventDefault();
});


/*
 * 
 * Enregistrer  la formulaire de modification  d'article 
 * 
 */

$('.edit').on('submit', '.detail_form', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = dta.get('_id');
    var selector = $(this).attr('class').split(' ')[0];
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_grs_demande_congedet_edit_detail', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
        }
    });
    e.preventDefault();
});







$('.new-article-btn').click(function (e) {
    $('.edit-new-article').show();
    $(this).hide();
    e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$('.edit').on('submit', '.detail_form_add_article', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = dta.get('_id_cab');
    var selector = $(this).attr('class').split(' ')[0];
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_grs_demande_congedet_insert', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
        }
    });

    e.preventDefault();


});


//$('.actions').on('submit', '.form_generer', function (e) {
//    var dta = new FormData(this);
//    var form_name = $(this).attr('name');
//    var id = table.row('.selected').id();
//    if (id) {
//        $.ajax({
//            type: 'POST',
//            url: Routing.generate('uv_deviscab_generer', {'id': id}),
//            data: dta,
//            processData: false,
//            contentType: false,
//            success: function (result, textStatus, errorThrown) {
//                if (result.errors) {
//                    $(".errors_list").html("");
//                    jQuery.each(result.errors.violations, function (i, val) {
//                        var x = val.propertyPath;
//                        var separators = ['\\]', '\\['];
//                        var arr = x.split(new RegExp(separators.join('|')));
//                        var columnName = arr[1];
//                        $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
//                    });
//                } else if (result.code == 200) {
//                    table.ajax.reload();
//                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                    $(".actions").empty().removeClass('sidebar-open');
//                }
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                toastr.error("Erreur", errorThrown, {timeOut: 4000})
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000});
//    }
//    e.preventDefault();
//})



//$('#_delete').click(function (e) {
//    var id = table.row('.selected').id();
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
//                    url: Routing.generate('stock_produit_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            table.ajax.reload();
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
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
//
//
//
//
//$('body').on('submit', '.stock_produit_update_prix_achat', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_update_prix_achat', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                // console.log(result.errors);
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
//
//
//
//$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_update_prix_vente', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                // console.log(result.errors);
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
//
//
//$('body').on('submit', '.stock_produit_fichiers', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_fichiers', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//               console.log(result.errors);
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
//
//
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
//
//$('#_show').click(function (e) {
//    var id = table.row('.selected').id();
//
//    if (id) {
//        var url = Routing.generate('u_article_show', {'id': id});
//        window.location.href = url;
//        // console.log(url)
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
