const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';


Routing.setRoutingData(routes);


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
        url: Routing.generate('p_comptemasse_list') + location.search, // json datasource
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
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "20%" /*className: "colonne-gras"*/},
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

    //    "fnInitComplete": function (oSettings, json) {
    //        // alert('DataTables has finished its initialisation.');
    //        // $('#grid thead tr').clone(true).appendTo('#grid thead');
    //        //console.log(table.column().data().unique().sort());
    //        $('#grid thead tr:eq(0) th').each(function (i) {
    //
    //
    //
    //
    //
    //            var title = $(this).text();
    ////                console.log(title); 
    //            if (title == 'Date' || title == 'Description' || title == 'Service demandeur' || title == 'Compte' || title == 'Type') {
    //                //   alert(i);
    ////                var title = $(this).text();
    ////                console.log(title); 
    //                $(this).html('<input class="form-control" type="text" style="" placeholder="' + title + '" />');
    //
    //                $('input', this).on('keyup change', function () {
    //                    if (table.column(i).search() !== this.value) {
    //                        table.column(i).search(this.value).draw();
    //                    }
    //                });
    //            } else if (title == 'Pour Compte') {
    //                
    //              //  console.log(this); 
    //                var select = $('<select class="form-control"><option  value="">'+title+'</option></select>')
    //                        .appendTo($(this).empty())
    //                        .on('change', function () {
    //                            table.column(i).search($(this).val()).draw();
    //                        });
    //                table.column(i).data().unique().sort().each(function (d, j) {
    //                    select.append('<option  value="' + d + '">' + d + '</option>')
    //                    // alert();
    //                });
    //            }
    //        });
    //    },



    // "fnInitComplete": function (oSettings, json) {
    //        // alert('DataTables has finished its initialisation.');
    //        // $('#grid thead tr').clone(true).appendTo('#grid thead');
    //        //console.log(table.column().data().unique().sort());
    //        
    //       // console.log( table.columns()); 
    //        //console.log( $(this)); 
    //        $('#grid thead tr:eq(0) th').each(function (i,j) {
    //            //console.log(i); 
    //            //console.log(j); 
    //            console.log($(this).attr('aria-label')); 
    //            
    //           // var title = $(this).text();
    //            var title = $(this).attr('aria-label');
    //            console.log(table.column(i).search()); 
    //            
    //              
    //            if (title == 'date_demande' || title == 'description' || title == 'service'  || title == 'Type') {
    //
    //                //   alert(i);
    //                var title = $(this).text();
    //                $(this).html('<input class="form-control" type="text" style="" placeholder="' + title + '" />');
    //
    //                $('input', this).on('keyup change', function () {
    //                    if (table.column(i).search() !== this.value) {
    //                        table.column(i).search(this.value).draw();
    //                    }
    //                });
    //            } else if ( title == 'compte') {
    //                
    //                
    //                var select = $('<select class="form-control"><option  value="">choisissez ...</option></select>')
    //                        .appendTo($(this).empty())
    //                        .on('change', function () {
    //                            table.column(i).search($(this).val()).draw();
    //                        });
    //                table.column(i).data().unique().sort().each(function (d, j) {
    //                    select.append('<option  value="' + d + '">' + d + '</option>')
    //                    // alert();
    //                });
    //            }
    //        });
    //    },


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
        $(".search_column3 option[value='" + st.columns[3].search.search + "']").attr("selected", "selected");
        $(".search_column4").val(st.columns[4].search.search);
        $(".search_column5").val(st.columns[5].search.search);
        $(".search_column6").val(st.columns[6].search.search);
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

var search_column1 = $('.search_column1').datepicker({
    todayBtn: "linked",
    keyboardNavigation: true,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    language: 'fr',

});
search_column1.on('changeDate', function (e) {
    table.columns(1).search(this.value).draw();
});
$('.search_column1_clear').click(function () {
    $('.search_column1').datepicker('setDate', null).datepicker('fill');
});



$('.search_column2').on('keyup', function () {
    table.columns(2).search(this.value).draw();
});

$('.search_column3').on('change', function () {
    table.columns(3).search(this.value).draw();
});

$('.search_column4').on('keyup', function () {
    table.columns(4).search(this.value).draw();
});
$('.search_column5').on('keyup', function () {
    table.columns(5).search(this.value).draw();
});
$('.search_column6').on('keyup', function () {
    table.columns(6).search(this.value).draw();
});

/* $('.search_column6').on('change', function () {
 table.columns(6).search(this.value).draw();
 }); */


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

$('.list_actions').change(function (e) {

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



/* $('.new').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];

    console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('u_p_partenaire_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            } else if (result.data) {
                
               
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                var url = Routing.generate('u_p_partenaire_show', {'id': result.data.id});
                window.location.href = url;
//                $(".form")[0].reset();
//                $(".new .table-detail tbody").hide();
//                $('.new-article-btn').show();
//                $(".new .table-detail > tbody tr").not(":last").remove();
                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});

 */


var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    console.log(selector);
    // alert()
    var exsit = 0;
    $.each(array_detail, function (i, value) {
        if ($('#t_achatdemandeinternedet_article').val() == value.article.id) {
            exsit = 1;
        }
    });
    if (exsit == 0) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('u_p_partenaire_new'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {

                if (result.errors) {
                    $('.errors-list').remove();
                    jQuery.each(result.errors.violations, function (i, val) {

                        var column = val.propertyPath;
                        var columnName = column.split('.');

                        console.log(".edit-new-article #" + form_name + "_" + columnName[1]);

                        $(".edit-new-article #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                    });
                } else if (result.data) {
                    $(".detail_form")[0].reset();
                    $(".errors-list").remove();
                    $('.article').focus();
                    //                console.log(result);
                    let lineNo = 1;
                    array_detail.push(result.data);
                    $(".new .table-detail > tbody").empty();
                    $.each(array_detail, function (i, value) {
                        var tva = value.tva + ' %';
                        var observation = value.observation;
                        if (value.tva == null) {
                            tva = '-';
                        }
                        if (value.observation == null) {
                            observation = '-';
                        }
                        var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article.titre + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + tva + "</td><td>" + value.prixttc + "</td><td>" + observation + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
                        $(".new .table-detail > tbody").append(my_row);
                        lineNo++;
                    });
                    $("#t_achatdemandeinternecab_detail").val(JSON.stringify(array_detail));
                }
            }
        });
    } else {
        toastr.warning("Ce produit exsite déjà ", "Error! ", {timeOut: 4000})
    }
    e.preventDefault();
});


$('.new').on('click', '.delete_element', function (e) {
    console.log($(this).attr('id'));
    array_detail.splice($(this).attr('id'), 1);
    console.log(array_detail);
    $(".new .table-detail > tbody tr").remove();
    $.each(array_detail, function (i, value) {
        var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td>" + value.prixttc + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
        $(".new .table-detail >tbody").append(my_row);
    });
});










$('.edit').on('submit', '.detail_form_delete', function (e) {

    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var token = dta.get('_token');
    //    var id = $("input[name=_id]").val();
    //    var token = $("input[name=_token]").val();
    
    console.log(id);
    swal({
        title: "Confirmation ?",
        text: "Voulez vous vraiment supprimer cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui, supprimer!",
        cancelButtonText: "No, Annuler!",
        closeOnConfirm: true,
        closeOnCancel: true
    },
            function (isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        type: 'DELETE',
                        url: Routing.generate('t_achatdemandeinternedet_delete', {'id': id, 'token': token}),
                        data: dta,
                        processData: false,
                        contentType: false,
                        success: function (result) {
                            //   console.log(result);
                            if (result.data == "deleted") {
                                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                                selector.parent().parent().hide();
                                // swal(result.message.title, result.message.text, result.message.success);
                                //location.reload();
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

    $.ajax({
        type: 'POST',
        url: Routing.generate('t_achatdemandeinternecab_edit_detail', {'id': id}),
        success: function (result) {
            var slh = selector.parent().parent().empty().append("<td colspan='7'>" + result + "</td>");
            // slh.append(result)
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
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_achatdemandeinternecab_update_detail', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName[1]);
                    $(".detail_form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });

            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        }
    });
    e.preventDefault();
});



/*afficher la formulaire d'ajout d'un nouveau article */

//$('.edit-new-article-btn').click(function (e) {
//    $('.edit-new-article').show();
//    $(this).hide();
//    e.preventDefault();
//});



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
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_achatdemandeinternedet_insert', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName[1]);
                    $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });

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
})

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



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
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('p_comptemasse_statut', {'id': id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                //            console.log(result);
                //            console.log(textStatus);
                //            console.log(errorThrown);
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
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000});
    }


    e.preventDefault();
})






$(document).on('click', '._t_affaire_quick', function (e) {



    $.ajax({
        type: 'POST',
        url: Routing.generate('t_affaire_new_quick'),
        success: function (result) {
            $('.actions').html(result);
            $(".actions").toggleClass('sidebar-open');
        }
    });
    e.preventDefault();
});

$(document).on('submit', '.form_t_affaire_quick', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var selector = $(this).attr('class').split(' ')[0];
    $.ajax({
        type: 'POST',
        data: dta,
        processData: false,
        contentType: false,
        url: Routing.generate('t_affaire_new_quick_insert'),
        success: function (result) {
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                $(".actions").empty().removeClass('sidebar-open');

                var data = {};

                $.ajax({
                    url: Routing.generate('t_achatdemandeinternecab_new'),
                    type: "POST",
                    data: data,
                    success: function (html) {
                        ($('.affaire').replaceWith($(html).find('.affaire')));
                    }
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});



$('#_edit').click(function (e) {
    var id = table.row('.selected').id();
   // alert(id);
    if (id) {

        var url = Routing.generate('p_comptemasse_edit', { 'id': id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }

    e.preventDefault();
});






$('#_show').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('p_comptemasse_show', {'id': id});
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
        var url = Routing.generate('pdf_show', {'id': id});
        window.location.href = url;
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
            url: Routing.generate('p_comptemasse_statut', {'id': id}),
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


$('#_archiver').click(function (e) {
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
                    url: Routing.generate('t_achatdemandeinternecab_archive', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            $(".actions").empty().removeClass('sidebar-open');

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


$('#_delete').click(function (e) {
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
                    url: Routing.generate('p_comptemasse_delete', {'id': id}),
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



    console.log($(this).val());
    if ($(this).val() == '_imprimer') {


        $.ajax({
            type: 'GET',
            url: Routing.generate('t_achatdemandeinternedet_multiple_pdfShow'),
            data: { _array_ids },
            success: function (result) {

              //  window.open(result, '_blank');
                console.log(result);
               /*  if (result.code == 200) {

                    table.ajax.reload();
                    toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                } */
            },
            error: function (jqXHR, textStatus, errorThrown) {

                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
            }
        });
    
  
                
                 
                 // console.log(url)
                $('._multiple_actions').val('');
        
    }


    // $("body > ._multiple_actions option[value='']").attr('selected', 'selected'); 


    console.log($(this).val());
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