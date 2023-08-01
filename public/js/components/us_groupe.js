const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

/*js tree*/
require('./../../css/plugins/jsTree/style.min.css');
require('./../../js/plugins/jsTree/jstree.min.js');  

require('./../../css/plugins/switchery/switchery.css');
require('./../../js/plugins/switchery/switchery.js');


/*message notification  swal*/

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

/*initial object js tree*/

$('#container').jstree();

/*select 2*/
var select2_users = $(".select2_users").select2({
    placeholder: "Utilisateurs Sans groupe",
    allowClear: true
});

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('us_groupe_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
//    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "5%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "25%"},
        {"orderable": true, "width": "25%"},
        {"orderable": true, "width": "54%"},
    ],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs",
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

/* $('.new').on('submit', '.form', function (e) {
 var form_name = $(this).attr('name');
 var dta = new FormData(this);
 var selector = $(this).attr('class').split(' ')[0];
 console.log(e.type);
 $.ajax({
 type: 'POST',
 url: Routing.generate('us_groupe_permission_insert'),
 data: dta,
 processData: false,
 contentType: false,
 success: function (result) {
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
 toastr.success(result.message.text, result.message.title, {timeOut: 4000})
 $(".form")[0].reset();
 //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
 }
 },
 error: function (jqXHR, textStatus, errorThrown) {
 toastr.error("Erreur", errorThrown, {timeOut: 4000})
 }
 });
 e.preventDefault();
 }); */


$('.new').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('usGroupe_insert'),
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
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                $(".form")[0].reset();
                $(".new .table-detail tbody").hide();
                $('.new-article-btn').show();
                $(".new .table-detail > tbody tr").not(":last").remove();
                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
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

$('.search_column6').on('change', function () {
    table.columns(6).search(this.value).draw();
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


$('body').on('change', '.list_actions', function () {
    var _action = [];
    $.each($("input[name=_action]:checked"), function () {
        _action.push($(this).val());
    });



    $.ajax({
        type: 'DELETE',
        url: Routing.generate('t_achatdemandeinternedet_delete_list'),
        data: {_action},
//        processData: false,
//        contentType: false,
        success: function (result) {



            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
//            if (result.errors) {
//                $('.errors-list').remove();
//                jQuery.each(result.errors.violations, function (i, val) {
//                    var column = val.propertyPath;
//                    var columnName = column.split('.');
//                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
//                });
//            } else if (result.empty) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
//            } else if (result.data) {
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                $(".form")[0].reset();
//                $(".new .table-detail tbody").hide();
//                $('.new-article-btn').show();
//                $(".new .table-detail > tbody tr").not(":last").remove();
//                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
//            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });


    //  alert("My favourite sports are: " + favorite.join(", "));
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








var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    console.log(selector);
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_achatdemandeinternedet_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
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
                    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td>" + value.prixttc + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
                    $(".new .table-detail > tbody").append(my_row);
                    lineNo++;
                });
                $("#t_achatdemandeinternecab_detail").val(JSON.stringify(array_detail));
            }
        }
    });
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
        url: Routing.generate('us_groupe_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            $('.errors-list').remove();
            if (result.errors) {

                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName[1]);
                    $(".form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });
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

    console.log(id);
    swal({
        title: "Confirmation ?",
        text: "Voulez vous vraiment supprimer cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui, supprimer!",
        cancelButtonText: "No, Annuler!",
        closeOnConfirm: true,
        closeOnCancel: true},
            function (isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        type: 'DELETE',
                        url: Routing.generate('us_groupe_delete', {'id': id, 'token': token}),
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





$('.statut_action').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('t_achatdemandeinternecab_statut', {'id': id}),
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



$('#show_action').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {

        var url = Routing.generate('t_achatdemandeinternecab_show', {'id': id});
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }



    e.preventDefault();
});


$('#edit_action').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {

        var url = Routing.generate('us_groupe_edit', {'id': id});
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }



    e.preventDefault();
});



$('.actions').on('submit', '.form_statut', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('t_achatdemandeinternecab_statut', {'id': id}),
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




$('._permission').click(function (e) {

    var groupe_id = table.row('.selected').id();
    if (groupe_id) {
        var url = Routing.generate('us_groupe_modules', {'groupe_id': groupe_id});
        window.location.href = url;

    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération ", "warning", {timeOut: 4000});
    }


    e.preventDefault();
})


$('._utilisateur').click(function (e) {

    var groupe_id = table.row('.selected').id();
    if (groupe_id) {
        var url = Routing.generate('us_groupe_utilisateurs', {'groupe_id': groupe_id});
        window.location.href = url;

    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération ", "warning", {timeOut: 4000});
    }


    e.preventDefault();
});




$('._users_groupe').submit(function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    console.log(selector);

    $.ajax({
        type: 'POST',
        url: Routing.generate('us_groupe_utilisateurs', {'groupe_id': dta.get('form[_groupe]')}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
            
                
                    $("." + selector + " #form_user").after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + result.message.text + "</span></span></span>"));
            
            } else if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        }
    });
    e.preventDefault();
});


$('._user_groupe_delete').click(function (e) {

    var id  = $(this).attr('id');
   console.log(id); 
 
        
        
        
        
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez-vous vraiment supprimer cet utilisateur de ce groupe ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'DELETE',
                    url: Routing.generate('us_groupe_delete_user_from_groupe', { 'id': id}),
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            location.reload(); 
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {

                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
              
            }
        });


    e.preventDefault();
});










var permissions = $(".permissions").select2({
    placeholder: "Permissions",
    allowClear: true
});



$('.Toogle').bootstrapToggle();



$(function () {



    $('.select_all_permissions').change(function () {
        console.log($(this).attr('id'));
        var sousModuleSelected = '.ToogleSousModuleSelect_' + $(this).attr('id');
//        $('.ToogleSousModule').removeClass('ToogleSousModule');
//        var module_id = $(this).attr('id');
        if ($(this).prop('checked')) {
//           $(".selected > option").prop("selected","selected");
//            $(".selected").trigger("change");

            var optionValues = [];

            $(sousModuleSelected + " option").each(function () {
                optionValues.push($(this).val());
            });

            $(sousModuleSelected).val(optionValues).trigger("change");




        } else {
            $(sousModuleSelected).val(null).trigger("change");

        }
    });



    $('.ToogleModule').change(function () {
        $('.ToogleSousModule').removeClass('ToogleSousModule');
        var module_id = $(this).attr('id');
        if ($(this).prop('checked')) {
//            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
//                $(val).bootstrapToggle('on');
//            });
        } else {
            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
                $(val).bootstrapToggle('off');
            });
        }
    });







    $('.ToogleSousModule').change(function () {
        var str = $(this).attr('id');
        var res = str.split("_");
        var module = res[0];
        var sousModule = res[1];

        console.log('ici');
        if ($(this).prop('checked') == true) {

            $('.ToogleSousModuleSelect_' + sousModule).prop("disabled", false);
        } else {

            $('.ToogleSousModuleSelect_' + sousModule).prop("disabled", true);


        }


    });


 });



    $('.form-permission').submit(function (e) {
//$('.new').on('submit', '.form', function (e) {
//    var form_name = $(this).attr('name');
        var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];

        $.ajax({
            type: 'POST',
            url: Routing.generate('us_groupe_permission_insert'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
                //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
                if (result.data) {

                    toastr.success(result.message.text, result.message.title, {timeOut: 4000});

                    setTimeout(function () {
                        location.reload();
                    }, 2000);

                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000})
            }
        });
        e.preventDefault();
    });





//    $('.add_user_to_groupe').click(function (e) {
//        var groupe_id = $('._groupe').val();
//        var user_id = $('.add_user_to_groupe_select').val();
//        console.log(groupe_id);
//        if (user_id && groupe_id) {
//            $.ajax({
//                type: 'POST',
//                url: Routing.generate('us_groupe_add_user_to_groupe', {user_id: user_id, groupe_id: groupe_id}),
//                success: function (result) {
//                    if (result.data) {
//                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
//                        setTimeout(function () {
//                            location.reload();
//                        }, 2000);
//                    }
//                },
//                error: function (jqXHR, textStatus, errorThrown) {
//                    toastr.error("Erreur", errorThrown, {timeOut: 4000})
//                }
//            });
//        } else {
//            toastr.warning("Veuillez renseigner un utilisateur pour effectuer cette opération !!", "Attention", {timeOut: 4000});
//        }
//        e.preventDefault();
//    });
