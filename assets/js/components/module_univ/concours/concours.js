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

$(document).ready(function() {
var tableShow3 = $('.datatable-default').DataTable({
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        { extend: 'excel', exportOptions: { modifier: { page: 'all', search: 'none' } } },
        { extend: 'pdf',   exportOptions: { modifier: { page: 'all', search: 'none' } } }
    ],
    "paging": true,
    "ordering": false,
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true,

    }
});
} );





$('body').on('click', '.scolumn_0', function () {

    $(".action ,.scolumn_0").prop('checked', $(this).prop("checked"));
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);

});
$('body').on('click', '.action', function () {
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});



$('.body').on('submit', '._document', function (e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();
    // console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('univ_documents_concours_pdf', {'id': id}),
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
                var url = Routing.generate('univ_documents_concours_pdf', {'id': id});
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




$('body').on('change', '._multiple_actions', function () {
    var _array_ids = [];


    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });

    if ($(this).val() == '_genener_admission') {


        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment générer des admissions pour la liste selectionné ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_concours_sc_generer_admission'),
                    data: {_array_ids},
                    success: function (result) {

                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
                $('._multiple_actions').val('');
            }
        });

    } else if ($(this).val() == '_mentionner_admissible') {

        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment mentionner cette liste comme admissible ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_concours_sc_mentionner_admission'),
                    data: {_array_ids},
                    success: function (result) {

                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
                $('._multiple_actions').val('');
            }
        });

    } else if ($(this).val() == '_ac_inserer_pr_concours') {

        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment valider cette liste pour passer le concours ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_concours_ac_inserer_prconcours', {id: $('.concours_id').val()}),
                    data: {_array_ids},
                    success: function (result) {

                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
                $('._multiple_actions').val('');
            }
        });

    }
    /* else if ($(this).val() == '_ac_mentionner_admissible') {
     
     swalWithBootstrapButtons.fire({
     showClass: {
     popup: 'animatedSwal flipInX faster'
     },
     position: 'top',
     title: "Confirmation ?",
     text: "Voulez vous vraiment mentionner cette liste comme admissible ?",
     type: "warning",
     showCancelButton: true,
     showCloseButton: true,
     confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
     cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
     }).then((result) => {
     if (result.value) {
     $.ajax({
     type: 'POST',
     url: Routing.generate('module_univ_concours_ac_mentionner_admission'),
     data: {_array_ids},
     success: function (result) {
     
     if (result.code == 200) {
     toastr.success(result.message.text, result.message.title, {timeOut: 4000});
     location.reload();
     }
     },
     error: function (jqXHR, textStatus, errorThrown) {
     toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
     }
     });
     $('._multiple_actions').val('');
     }
     });
     
     } */
    else if ($(this).val() == '_ac_genener_admission') {


        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment générer des admissions pour la liste selectionné ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_concours_ac_generer_admission'),
                    data: {_array_ids},
                    success: function (result) {

                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
                $('._multiple_actions').val('');
            }
        });

    } else if ($(this).val() == '_ac_affecter_salle' && _array_ids) {


        //  alert();

        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_concours_ac_affectation_salle', {id: $('.concours_id').val()}),
            data: {_array_ids},
            success: function (result) {
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
        });




    }
});



var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_concours_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,

    
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
    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3, 5, 6,7,8], []);
    
    CustomSearchDatatable.CustomSearchSelect(api, [8], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [4], []);
});



$('#formations_concours_json')
        .jstree({
            core: {
                data:
                        {
                            "url": Routing.generate('module_univ_concours_formations', {id: $('.concours_id').val()}),
                            "dataType": "json"
                        }
            },
            types: {
                "root": {
                    "icon": "glyphicon glyphicon-folder-close"
                },
                "child": {
                    "icon": "glyphicon glyphicon-folder-open"
                },
                "default": {
                }
            },
            plugins: ["search", "themes", "types"]
        }).on('open_node.jstree', function (e, data) {
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
}).on('close_node.jstree', function (e, data) {
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
});



var ac_grid_condidats_note_classement = $('.ac_grid_condidats_note_classement').DataTable({
    "lengthMenu": [[15, 25, 50, 100, 200, -1], [15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
//    "scrollY": 200,
//    "scrollX": true,
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
    }
});

ac_grid_condidats_note_classement.on('init.dt', function (e, settings) {
    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchText(api, [2, 3, 4], []);
    CustomSearchDatatable.CustomSearchSelect(api, [6, 7, 9, 10], []);
});


var ac_grid_condidats_note_classement2 = $('.ac_grid_condidats_note_classement2').DataTable({
    "lengthMenu": [[15, 25, 50, 100, 200, -1], [15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
//    "scrollY": 200,
    "scrollX": true,
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
    }
});

ac_grid_condidats_note_classement2.on('init.dt', function (e, settings) {
    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1,2, 3, 4], []);
    CustomSearchDatatable.CustomSearchSelect(api, [6, 7, 9], []);
});


var ac_grid_condidats_convoque = $('.ac_grid_condidats_convoque').DataTable({
    "lengthMenu": [[15, 25, 50, 100, 200, -1], [15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
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
    }
});

ac_grid_condidats_convoque.on('init.dt', function (e, settings) {
    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3, 7], []);
    CustomSearchDatatable.CustomSearchSelect(api, [4, 5, 6], []);
});





var tableShow = $('#datatable-show').DataTable({
    "scrollY": "200px",
    "scrollCollapse": true,
    "paging": false,
    "autoWidth": false,
    "columns": [
        {"width": "5%"},
        {"width": "10%"},
        {"width": "35%"},
        {"width": "20%"},
        {"width": "5%"},
        {"width": "5%"},
        {"width": "5%"},
        {"width": "5%"}
    ],
    "footerCallback": function (row, data, start, end, display) {
        var api = this.api(), data;
        var total, pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
        };

        // Total over all pages
        total = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Total over this page
        pageTotal = api
                .column(7, {page: 'current'})
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Update footer
        $(api.column(1).footer()).html(
                'Total : ' + (Math.round(pageTotal * 100) / 100).toFixed(2)
                );
    }
});



$('#grid tbody').on('click', '.cd_op', function () {
  var url = Routing.generate('module_univ_concours_ac_show', {'id': $(this).closest('tr').attr('id')});
        window.location.href = url;
//    if ($(this).attr('type') == '') {
//        //alert($(this).attr('type'))
//      
//    } else {
//
//        var url = Routing.generate('module_univ_concours_ac_show', {'id': $(this).closest('tr').attr('id')});
//        window.location.href = url;
//
//    }

});


//$('.i-checks').iCheck({
//    checkboxClass: 'icheckbox_square-green',
//    radioClass: 'iradio_square-green',
//});
//
//
//
//$('.admissible').click(function (e) {
//    //alert();
//    //console.log($('#using_json').jstree(true).get_selected())
//    //console.log($('.admissibleInput').val())
//    var dta = new FormData();
//    var checkedVals = $('.admissibleInput:checkbox:checked').map(function () {
//        return this.value;
//    }).get();
//    var notcheckedVals = $('.admissibleInput:checkbox:not(:checked)').map(function () {
//        return this.value;
//    }).get();
//    var id = $('#_id').val();
//    //alert(notcheckedVals.join(","));
//    dta.append('admissible', checkedVals.join(","));
//    dta.append('radmissible', notcheckedVals.join(","));
//    var l = Ladda.create(document.querySelector('.my-button'));
//    l.start();
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('module_univ_concours_show_sansconcours_admissible', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            console.log(result)
//            if (result.errors) {
//                console.log(result.errors);
//                //alert()
//                l.stop();
//                toastr.warning(result.errors.detail, "warning", {timeOut: 4000})
//                //location.reload();
//            }
//            if (result.code == 200) {
//                l.stop();
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                location.reload();
//            } else if (result.code == 403) {
//                l.stop();
//                //alert()
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                //location.reload();
//
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            l.stop();
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});





$('body').on('click', '.mentionner_non_admissible', function (e) {
    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment mentionner cette pré-inscription comme non admissible ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: 'POST',
                url: Routing.generate('module_univ_concours_sc_mentionner_non_admission', {id: $(this).attr('data-preinscription')}),

                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        location.reload();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                }
            });

        }
    });

});



$('body').on('click', '.calcule_note', function (e) {

    var _array_note_matiere = [];
    var pr_concours_id = $(this).attr('data-pr-concours');
    var errors = 0;
    jQuery.each($('.note-matiere-' + $(this).attr('data-pr-concours')), function (i, val) {
        if ($(this).val() < 0 || $(this).val() > 20) {
            errors++;
            toastr.warning('La note ' + $(this).val() + ' doit être compris entre 0 et 20 ', 'warning', {timeOut: 4000});
        }
        _array_note_matiere.push({'matiere': $(this).attr('name'), 'note': $(this).val()});
    });

    var data = {'note_matiere': _array_note_matiere, 'prConcoursId': pr_concours_id, 'operation': $(this).attr('data-operation')};

    if (errors == 0) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_concours_ac_calcule_note', {id: pr_concours_id}),
            data: {data},
            success: function (result) {
                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                    $('.moyenne-' + pr_concours_id).text(result.moyenne);
                    $('.change-icon-' + pr_concours_id).removeClass('fa-plus').addClass('fa-refresh');

                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
        });
    } else {
        toastr.warning('Le formulaire est non valide ', 'warning', {timeOut: 4000});

    }
    e.preventDefault();
});


$('body').on('submit', '#generer_classement', function (e) {


    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();


    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment génerer le classement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {
            $.ajax({
                data: new FormData(this),
                processData: false,
                contentType: false,
                type: 'POST',
                url: Routing.generate('module_univ_concours_ac_generer_classement', {id: $('.concours_id').val()}),

                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        location.reload();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                }
            });



        }
    });

    l.stop();
    e.preventDefault();
});



$('body').on('submit', '#generer_num_convocation', function (e) {


    var l = Ladda.create(document.querySelector('.my-button-num-convocation'));
    l.start();


    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment génerer des numéros pour les convocations ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {
            $.ajax({
                data: new FormData(this),
                processData: false,
                contentType: false,
                type: 'POST',
                url: Routing.generate('module_univ_concours_ac_generer_num_convocation', {id: $('.concours_id').val()}),

                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        location.reload();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                }
            });



        }
    });

    l.stop();
    e.preventDefault();
});



$('.form_imprimer_concours_by_formation').submit(function (e) {

    //console.log('fonction  ici'); 

    $.ajax({
        data: new FormData(this),
        processData: false,
        contentType: false,
        type: 'POST',
        url: Routing.generate('module_univ_concours_documents', {id: $('.concours_id').val()}),

        success: function (result) {
            if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
        }
    });
    e.preventDefault();
});


$('.actions').on('submit', '.form_ac_affecter_salle', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');

    var selector = $(this).attr('class').split(' ')[0];
    var l = Ladda.create(document.querySelector('.my-button2'));
    // Start loading
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_concours_ac_affectation_salle', {id: $('.concours_id').val()}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result, textStatus, errorThrown) {
            if (result.errors) {
                l.stop();
                // ShowFormErrors(selector, form_name, result.errors);

            } else if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();


            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
        }
    });



    e.preventDefault();
})

//$('._imprimer_convocation').click(function () {
//    var url = Routing.generate('univ_ac_convocation_pdf', {'id': $(this).attr('data-id')});
//    window.location.href = url;
//})






$('.form_classement').submit(function (e) {

    var l = Ladda.create(document.querySelector('.my-button2'));
    // Start loading
   
   
    // Start loading
   

    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment génerer le Classement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
       
        if (result.value) {
            l.start();
            $.ajax({
                data: new FormData(this),
                processData: false,
                contentType: false,
                type: 'POST',
                url: Routing.generate('module_univ_concours_classement_preinscription', {id: $('.concours_id').val()}),
        
                success: function (result) {
                    if (result.code == 200) {
                        l.stop();
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        location.reload();
                    }
                  
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    l.stop();
                    toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                   
                }
               
            });



            }
    });
    e.preventDefault();

 //   l.stop();


});
$('.form_classement_principale').submit(function (e) {

  


    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment génerer le Classement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {
            $.ajax({
                data: new FormData(this),
                processData: false,
                contentType: false,
                type: 'POST',
                url: Routing.generate('module_univ_concours_classement_pricipale_preinscription', {id: $('.concours_id').val()}),
        
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        location.reload();
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