const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';

import * as Ladda from 'ladda';


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
        url: Routing.generate('ua_t_livraisonfrscab_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, visible: false},
        {"orderable": true},
        {"orderable": true},
        {"orderable": true},
        {"orderable": true},
        {"orderable": true},
        {"orderable": true},
        {"orderable": true},
        {"orderable": true},
        
        {"orderable": true, className: "bec"},
        {"width": "5%", "orderable": true, className: "rg"},
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
    var api = new $.fn.dataTable.Api(settings);
    var st = api.state.loaded();

    var data = api.data();
    //  console.log(api.data())

    console.log(st);
    if (st != null) {
        $.each(st.columns, function (key, value) {
            if (value.search.search != "") {
                $('.remove-filter').show();
                return false;
            }

        });


        /* recupérer les valeurs déja saisie dans le filtre */

        $(".search_column1").val(st.columns[1].search.search);
        $(".search_column2").val(st.columns[2].search.search);
        $(".search_column3").val(st.columns[4].search.search);
        $(".search_column4 option[value='" + st.columns[4].search.search + "']").attr("selected", "selected");
       
        $(".search_column5").val(st.columns[5].search.search);
        $(".search_column6").val(st.columns[6].search.search);
        $(".search_column7").val(st.columns[7].search.search);
        $(".search_column8").val(st.columns[8].search.search);
//        $(".search_column9 option[value='" + st.columns[9].search.search + "']").attr("selected", "selected");


    }



    //    table.columns([3]).every(function (i) {
    //        var column = this;
    //        $('.search_column' + i).on('change', function () {
    //            var val = $.fn.dataTable.util.escapeRegex(
    //                    $(this).val()
    //                    );
    //            column.search(val ? '^' + val + '$' : '', true, false).draw();
    //        });
    //        var selected = "";
    //        var search_val = "";
    //        if (st != null) {
    //            var search_val = st.columns[i].search.search;
    //            search_val = search_val.substr(1).slice(0, -1);
    //        }
    //        $('.search_column' + i).append("<option '' value=''>choix</option>")
    //        column.data().unique().sort().each(function (d, j) {
    //          $('.search_column' + i).append('<option ' + selected + ' value="' + d + '">' + d + '</option>')
    //        });
    //        $(".search_column" + i + " option[value='" + search_val + "']").attr("selected", "selected");
    //    });
    //        




    // ... use `state` to restore information
});








/*column 1 de datatble search*/

var search_column2 = $('.search_column2').datepicker({
    todayBtn: "linked",
    keyboardNavigation: true,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    language: 'fr',
    

});
search_column2.on('changeDate', function (e) {
    table.columns(2).search(this.value).draw();
});
$('.search_column1_clear').click(function () {
    $('.search_column2').datepicker('setDate', null).datepicker('fill');
});


$('.search_column1').on('keyup', function () {
    table.columns(1).search(this.value).draw();
});
$('.search_column3').on('keyup', function () {
    table.columns(3).search(this.value).draw();
});

$('.search_column4').on('keyup', function () {
    table.columns(4).search(this.value).draw();
});

$('.search_column5').on('change', function () {
    table.columns(5).search(this.value).draw();
});
$('.search_column6').on('keyup', function () {
    table.columns(6).search(this.value).draw();
});
$('.search_column7').on('keyup', function () {
    table.columns(7).search(this.value).draw();
});
$('.search_column8').on('keyup', function () {
    table.columns(8).search(this.value).draw();
});
//$('.search_column9').on('keyup', function () {
//    table.columns(9).search(this.value).draw();
//});
$('.search_column10').on('change', function () {
    table.columns(10).search(this.value).draw();
});

$('.remove-filter').click(function (e) {
    table.state.clear();
    window.location.reload();
    e.preventDefault();
});



$('.action_head').click(function () {
    console.log($('.action').filter(':checked').length);
    $(".action ,.action_head").prop('checked', $(this).prop("checked"));
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);

});

$('body').on('click', '.action', function () {
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});





$(".select2_demo_3").select2({
    placeholder: "Action",
    allowClear: true
});



$('.new , .edit').on('change', '.compteMasse', function (e) {

    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();

    console.log(data);
    //alert($form.attr('action'));
    console.log($form.attr('method'));
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            // console.log(html); 
            ($('.compteRubrique').replaceWith($(html).find('.compteRubrique')));
        }
    });
    e.preventDefault();
});





$('.new , .edit').on('change', '.compteRubrique', function () {
    var $form = $(this).closest('form');
    var data = {};
    data[$(this).attr('name')] = $(this).val();
    data[$('.compteMasse').attr('name')] = $('.compteMasse').val();
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            console.log(html);
            ($('.comptePoste').replaceWith($(html).find('.comptePoste')));
        }
    });
});



$('.new , .edit').on('change', '.comptePoste', function () {
    var $form = $(this).closest('form');
    var data = {};
    data[$(this).attr('name')] = $(this).val();
    data[$('.compteMasse').attr('name')] = $('.compteMasse').val();
    data[$('.compteRubrique').attr('name')] = $('.compteRubrique').val();
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            console.log(html);
            ($('.compte').replaceWith($(html).find('.compte')));
        }
    });
});








/*
 * 
 * Edit operations 
 * 
 */

$('.edit').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_livraisonfrscab_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
           
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
               /* jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName[1]);
                    $(".form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });*/
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
            }
        }
    });
    e.preventDefault();
});






$('.edit').on('submit', '.detail_form_delete', function (e) {

    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var token = dta.get('_token');
    //    var id = $("input[name=_id]").val();
    //    var token = $("input[name=_token]").val();
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
                url: Routing.generate('ua_t_livraisonfrscab_delete', {'id': id, 'token': token}),
                data: dta,
                processData: false,
                contentType: false,
                success: function (result) {
                    //   console.log(result);
                    if (result.data == "deleted") {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                       // selector.parent().parent().hide();
                        // swal(result.message.title, result.message.text, result.message.success);
                        location.reload();
                    } else if (result.data = "error") {
                        toastr.error(result.message.text, result.message.title, {timeOut: 4000})
                        //swal(result.message.title, result.message.text, result.message.error);
                    }
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
   var col_index = $(this).index();
     console.log(row_index);
    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_livraisonfrscab_edit_detail', {'id': id}),
        success: function (result) {
           // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
            $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>"+result+"</td>");
        //    alert(row_index); 
//            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
//            console.log(result)
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
    
    console.log(dta);
    var form_name = $(this).attr('name');
    var id = dta.get('_id');
    var selector = $(this).attr('class').split(' ')[0];
    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_livraisonfrscab_update_detail', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              /*  $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName[1]);
                    $(".detail_form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });*/

            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
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
        url: Routing.generate('ua_t_livraisonfrscab_insert', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              /*  $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName[1]);
                    $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });*/

            } else if (result.data) {

                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        }
    });

    e.preventDefault();


});

$('.show-me').click(function (e) {
    $(".actions").toggleClass('sidebar-open')
    e.preventDefault();
});

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
});



/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */



$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});




var mem = $('#data_1 .input-group.date').datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true
});

var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);

$('#selector').datepicker('setDate', yearsAgo);






$('.actions').on('submit', '.form_statut', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    var selector = $(this).attr('class').split(' ')[0];
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_livraisonfrscab_statut', {'id': id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                //            console.log(result);
                //            console.log(textStatus);
                //            console.log(errorThrown);
                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                   /* $('.errors-list').remove();
                    jQuery.each(result.errors.violations, function (i, val) {
                        var column = val.propertyPath;
                        var columnName = column.split('.');
                        // console.log(columnName[1]);
                        $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                    });*/

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
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000});
    }


    e.preventDefault();
})








$('#_edit').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        var url = Routing.generate('ua_t_livraisonfrscab_edit', {'id': id});
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



$('#_show').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('ua_t_livraisonfrscab_consulte', {'id': id});
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



$('#_imprimer').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('pdf_show_livraisonfrscab', {'id': id});
       // window.location.href = url;
        window.open(url, '_blank');
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


$('#_statut').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_livraisonfrscab_statut', {'id': id}),
            success: function (result, textStatus, errorThrown) {
                
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
            ,
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }



    e.preventDefault();
});



$('#_delete').click(function (e) {
    //alert();
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
                    url: Routing.generate('ua_t_livraisonfrscab_delete2', {'id': id}),
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



$('body').on('change', '._multiple_actions', function () {
    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });

    if ($(this).val() == '_imprimer') {


        $.ajax({
            type: 'GET',
            url: Routing.generate('t_achatdemandeinternedet_multiple_pdfShow'),
            data: {_array_ids},
            success: function (result) {


            },
            error: function (jqXHR, textStatus, errorThrown) {

                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
        });
        $('._multiple_actions').val('');

    }

    if ($(this).val() == '_delete') {

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
                    url: Routing.generate('t_achatdemandeinternedet_multiple_delete'),
                    data: {_array_ids},
                    success: function (result) {
                        if (result.code == 200) {

                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
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



    if ($(this).val() == '_archiver') {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Archiver cette liste ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('t_achatdemandeinternedet_multiple_archiver'),
                    data: {_array_ids},
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
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



});





$('#_generer').click(function (e) {


    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_livraisonfrscab_generer', {'id': id}),
            success: function (result) {
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


$('.actions').on('submit', '.form_generer', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    var selector = $(this).attr('class').split(' ')[0];
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_livraisonfrscab_generer', {'id': id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {

                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                   /* $(".errors_list").html("");
                    jQuery.each(result.errors.violations, function (i, val) {
                        var x = val.propertyPath;
                        var separators = ['\\]', '\\['];
                        var arr = x.split(new RegExp(separators.join('|')));
                        var columnName = arr[1];
                        $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
                    });*/
                } else if (result.code == 200) {
                    table.ajax.reload();
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    $(".actions").empty().removeClass('sidebar-open');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000})
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000});
    }


    e.preventDefault();
})