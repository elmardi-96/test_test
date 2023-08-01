const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

require('../../../../css/plugins/jsTree/style.min.css');
require('../../../../js/plugins/jsTree/jstree.min.js');  



//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';

global.$ = $;
const $ = require('jquery');
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




var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix Matiére",
    allowClear: true
}); 

$('body').on('change', '.etablissement', function (e) {
    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();

    
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




    $('#using_json')
    .jstree({
        core: {
            data:
            {
                "url": Routing.generate('univ_t_preinscription_grille_formation'),
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
    }).on("select_node.jstree", function (e, data) {
        var str = data.node.id;
        window.pr = $("#" + data.node.id)
        if (str.indexOf("prm_Link_") >= 0) {
            $('.modal-title').text('Ajouter Grille')
            $('.show-promotion').empty();

            $.ajax({
                url: Routing.generate('univ_t_preinscription_grille_note_grille', { formation: $("#" + data.node.id).attr("data-promotion") }),
                contentType: false,               // To unable request pages to be cached  
                processData: false,          // To send DOMDocument or non processed data file it is set to false  
                success: function (data) {
                    $('.spr').hide()
                    $('.show-promotion').html(data);
                    import('../../../plugins/select2/select2.full.min.js').then(() => {
                        var select = $('.sel2').select2();
                        $('.sel2').on('select2:select', function (e) {
                            //console.log(e.params.data.text)
                            $('#form_description').val(e.params.data.text + " " + $('.annee').text());
                        })
                    });
                  
                    //require('./mdb.min.js');
                    import('../../../mdb.min.js').then(() => {
                        $("#exampleModalPreview").modal("show");
                    });
                  
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $('.spr').hide()
                    l.stop();
                    console.log(jqXHR.responseText)
                    //$('#resultats_import').html(jqXHR.responseText)
                    toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", { timeOut: 2000 })
                }
            })
        }
 
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
$('.new').on('submit', '.form', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();

});

$('select.select2').select2();


/////////////////////////////////////////


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_preinscription_grille_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
  
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



    CustomSearchDatatable.CustomSearchText(api, [1,5 ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [2,3,4], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    //CustomSearchDatatable.CustomSearchDate(api, [12], []);




});
$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});





/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('univ_t_preinscription_grille_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});


$('#_delete').click(function (e) {

    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');
    console.log(id + ' ' + token);
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
                url: Routing.generate('univ_t_preinscription_grille_delete', {'id': id, 'token': token}),
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                      //  location.reload();
                        var url = Routing.generate('univ_t_preinscription_grille_index');
                        window.location.href = url;
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
/////////////////////////////////////////////////////////////////
// list etudiants valide

var table2 = $('#grid2').DataTable({
    ajax: {
        url: Routing.generate('univ_t_preinscription_grille_retenue') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "3%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
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

table2.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();



    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3,6, 7, 8, ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,7,9, 10, 11, 13,14], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [12], []);




});


$('#grid2 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////
// etudiant non valide



var table3 = $('#grid3').DataTable({
    ajax: {
        url: Routing.generate('univ_t_preinscription_grille_nonretenue') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "3%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
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

table3.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();


    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3,6, 7, 8, ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,7,9, 10, 11, 13,14], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [12], []);




});
$('#grid3 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////




$('body').on('click', '.scolumn_0', function () {

    $(".action ,.scolumn_0").prop('checked', $(this).prop("checked"));
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);

});

$('body').on('click', '.action', function () {
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});



$('body').on('change', '._multiple_actions', function () {
    var _array_ids = [];

    
    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });


    if ($(this).val() == '_genener_retenue' && _array_ids) {

        $('.bod').empty();
        $('.spr').fadeIn()
        //  alert();

        $.ajax({
            type: 'POST',
            url: Routing.generate('univ_t_preinscription_grille_retenue_preselection'),
            data: {_array_ids},
            success: function (result) {
                $('.bod').html(result).hide()
                $('#exampleModalPreview').modal('show');
                setTimeout(
                    function() 
                    {
                        $('.spr').hide()
                        $('.bod').fadeIn()
                    }, 600);
              //  $(".action ,.scolumn_0").prop('checked', false);
            }
        });




    }


});

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



$('.actions').on('submit', '.form_retenue', function (e) {




    var dta = new FormData(this);
    var form_name = $(this).attr('name');

    var selector = $(this).attr('class').split(' ')[0];
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('univ_t_preinscription_grille_retenue_preselection'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result, textStatus, errorThrown) {
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
              

            } else if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                $('#exampleModalPreview').modal('hide');
                // location.reload();
                $(".action ,.scolumn_0").prop('checked', false);
                table2.ajax.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    $('._multiple_actions').val('');


    e.preventDefault();
})
////////////////////////////////////////////////////////////////
$('.table').on('click', '._delete_grille', function (e) {

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
                    url: Routing.generate('module_univ_preinscription_grille_delete', {'id': id}),
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





$('body').on('submit', '._grille', function (e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    //alert(id);
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('univ_t_preinscription_grille_note_grille', { 'formation': window.pr.attr("data-promotion") }),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                //console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                //alert();
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 2000 })
                $('#using_json').jstree(true).refresh();
               // $('#show-exampleModalPreview').hide();
                table.ajax.reload();
                
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 2000 })

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //alert();
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 2000 })
        }
    });
    e.preventDefault();
});



