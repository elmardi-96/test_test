
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
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

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('grs_conge_list'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "25%" /*className: "colonne-gras"*/},
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



$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
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
        url: Routing.generate('module_grs_demande_conge_new'),
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
                var url = Routing.generate('module_grs_demande_conge_index');
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
        var url = Routing.generate('module_grs_demande_conge_show', {'id': id});
        window.location.href = url;
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
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

$('#_delete').click(function (e) {
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
                    url: Routing.generate('module_grs_demande_conge_delete', {'id': id}),
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
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
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
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
            } else if (result.code == 403) {
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


//$('#external-events div.external-event').each(function () {
//
//    // store data so the calendar knows to render an event upon drop
//    $(this).data('event', {
//        title: $.trim($(this).text()), // use the element's text as the event title
//        stick: true // maintain when user navigates (see docs on the renderEvent method)
//    });
//
//    // make the event draggable using jQuery UI
//    $(this).draggable({
//        zIndex: 1111999,
//        revert: true, // will cause the event to go back to its
//        revertDuration: 0  //  original position after the drag
//    });
//
//});



/*full callender*/
require('../../../packages/core/main.js');
require('../../../packages/list/main.js');

require('./../../../../node_modules/@fullcalendar/core/main.css');
require('./../../../../node_modules/@fullcalendar/daygrid/main.css');
require('./../../../../node_modules/@fullcalendar/timegrid/main.css');


var moment = require('moment');


import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();


    






document.addEventListener('DOMContentLoaded', function () {




    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');



//    new Draggable(containerEl, {
////        itemSelector: '.fc-event',
////        eventData: function (eventEl) {
////            return {
////                title: eventEl.innerText,
////                color: "#1ab394",
////                revert: true,
////                duration: '02:00',
//////                editable: false,
////
////            };
////        }
//    });

    var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        defaultView: 'timeGridWeek', //'dayGridMonth'
        locale: 'fr',
        minTime: "08:00:00",
        maxTime: "18:00:00",
        allDaySlot: false,
        editable: true,
        selectable: true,
        selectHelper: true,
        droppable: true,
        navLinks: true,
        eventLimit: true,
        weekNumbers: true,

        height: 530,

        events: Routing.generate('module_grs_validation_conge_calendar_list'),

// events: [
//       
//        {
//          title: 'Meeting',
//          start: '2020-01-29T11:00:00',
//          constraint: 'availableForMeeting', // defined below
//          color: '#257e4a'
//        }
//       
//      ], 

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,listWeek'
                    //  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        buttonText: {
            today: 'aujourd\'hui',
        },
        views: {

            listWeek: {buttonText: 'Semaine Liste'},
            timeGridWeek: {buttonText: 'Semaine Planning'},

        },

        drop: function (info) {
            console.log(info);
            var id = info.draggedEl.id;
            var start = moment(info.date).format("YYYY-MM-DD HH:mm:ss");
            var week = moment(info.date, "MMDDYYYY").isoWeek();
            var end = moment(info.date).add(2, 'hours').format("YYYY-MM-DD HH:mm:ss");
            $.ajax({
                type: 'POST',
                url: Routing.generate('delegue_medical_insert_visite', {id: id, start: start, end: end, week: week}),
                success: function (result) {
                    if (result.data) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        var even = calendar.getEventById("");
                        even.remove();
                        calendar.refetchEvents();
                    }

                }
            });
            // is the "remove after drop" checkbox checked?
            if (checkbox.checked) {
                // if so, remove the element from the "Draggable Events" list
                info.draggedEl.parentNode.removeChild(info.draggedEl);
            }


        },

        eventResize: function (eventResizeInfo)
        {
            var start = moment(eventResizeInfo.event.start).format("YYYY-MM-DD HH:mm:ss");
            var end = moment(eventResizeInfo.event.end).format("YYYY-MM-DD HH:mm:ss");
            var week = moment(eventResizeInfo.event.start, "MMDDYYYY").isoWeek();
            var id = eventResizeInfo.event.id;
            console.log(id);
            console.log(start);
            console.log(end);

            $.ajax({
                type: 'POST',
                url: Routing.generate('delegue_medical_resize_drop_event', {id: id, start: start, end: end, week: week}),
                success: function (result) {
                    if (result.data) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                    }
                }
            });

        },

//        eventDrop: function (eventDropInfo)
//        {
//
//            console.log('rr');
//            var start = moment(eventDropInfo.event.start).format("YYYY-MM-DD HH:mm:ss");
//            var end = moment(eventDropInfo.event.end).format("YYYY-MM-DD HH:mm:ss");
//            var week = moment(eventDropInfo.event.start, "MMDDYYYY").isoWeek();
//            var id = eventDropInfo.event.id;
//
//
//            $.ajax({
//                type: 'POST',
//                url: Routing.generate('delegue_medical_resize_drop_event', {id: id, start: start, end: end, week: week}),
//                success: function (result) {
//                    if (result.data) {
//                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
//                    }
//                }
//            });
//        },
        eventClick: function (info) {
            var eventObj = info.event;

            console.log(eventObj);

            if (eventObj.id) {
                
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_grs_validation_conge_statut', {'id': eventObj.id}),
                    success: function (result) {
                        $('.actions').html(result);
                        $(".actions").toggleClass('sidebar-open');
                    }
                });

           /*      $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_grs_validation_conge_statut', {'id': eventObj.id}),
                    data: dta,
                    processData: false,
                    contentType: false,
                    success: function (result, textStatus, errorThrown) {
                        if (result.errors) {
                            $('.errors-list').remove();
                            jQuery.each(result.errors.violations, function (i, val) {
                                var column = val.propertyPath;
                                var columnName = column.split('.');
                                // console.log(columnName[1]);
                                $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                            });
        
                        } else if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            $(".actions").empty().removeClass('sidebar-open');
                            // location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.error("Erreur", errorThrown, {timeOut: 4000})
                    }
                }); */
            } else {
                toastr.warning("Aucun Lien trouvé ", {timeOut: 4000});
            }
        },















//        select: function (start, end, allDay)
//        {
//            var title = prompt("Enter Event Title");
//            if (title)
//            {
//                var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
//                var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
//                $.ajax({
//                    url: "insert.php",
//                    type: "POST",
//                    data: {title: title, start: start, end: end},
//                    success: function ()
//                    {
//                        calendar.fullCalendar('refetchEvents');
//                        alert("Added Successfully");
//                    }
//                })
//            }
//        },





//        eventClick: function (event)
//        {
//            if (confirm("Are you sure you want to remove it?"))
//            {
//                var id = event.id;
//                $.ajax({
//                    url: "delete.php",
//                    type: "POST",
//                    data: {id: id},
//                    success: function ()
//                    {
//                        calendar.fullCalendar('refetchEvents');
//                        alert("Event Removed");
//                    }
//                })
//            }
//        },
    });

    calendar.render();

});
