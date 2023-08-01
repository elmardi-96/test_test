const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';

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

//alert(1)
/*  document.addEventListener("DOMContentLoaded", function (event) {
 
 $('#grid').show(500);
 });*/
// console.log('Hello Webpack Encore! Edit me in assets/js/app.js!!!');
/* var table = $('#grid').DataTable({
 
 "iDisplayLength": 15,
 //  "scrollX": true,
 //"autoWidth": false,
 "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
 "order": [[0, "asc"]],
 "columns": [
 { "orderable": false,"searchable": true, "width": "1px", "targets": [0] },
 { "orderable": false,"width": "10px", "targets": 0 },
 { "orderable": false, "width": "1px", "targets": [1, 2] },
 
 { "orderable": false, "width": "200px", "targets": [3] },
 { "orderable": false, "width": "1px", "targets": [4, 5] },
 { "orderable": false, "width": "1px", className: "mnt-format", "targets": [6, 7, 8] },
 { "orderable": false, "width": "1px", className: "colonne-gras", "targets": [9] },
 
 {"orderable": false, className: "mnt-format", "targets": [6, 7]},
 {"orderable": false, className: "colonne-gras", "targets": [3, 4, 6]},
 { "orderable": false, className: "cdc", "width": "1px", "targets": [10] },
 { "orderable": false, className: "cdv", "width": "1px", "targets": [11] },
 { "orderable": false, className: "br", "width": "1px", "targets": [12] },
 { "orderable": false, className: "bec", "width": "1px", "targets": [13] },
 { "orderable": false, className: "bev", "width": "1px", "targets": [14] },
 { "orderable": false, className: "rg", "width": "1px", "targets": [15] },
 { "orderable": false, className: "rg", "width": "1px", "targets": [16] }
 
 
 ],
 
 "language": {
 "url": "../../../assets/js/datatables.French.json",
 "processing": true
 },
 "ajax": {
 url: Routing.generate('commandefrscab_list'), // json datasource
 type: "get"
 
 },
 "fnInitComplete": function (oSettings, json) {
 // alert('DataTables has finished its initialisation.');
 $('#grid thead tr').clone(true).appendTo('#grid thead');
 //console.log(table.column().data().unique().sort());
 $('#grid thead tr:eq(0) th').each(function (i) {
 
 if( i==3 || i==5){
 //   alert(i);
 var title = $(this).text();
 $(this).html('<input type="text" style="width: 80px" placeholder="Search ' + title + '" />');
 
 $('input', this).on('keyup change', function () {
 if (table.column(i).search() !== this.value) {
 table
 .column(i)
 .search(this.value)
 .draw();
 }
 });
 
 }else if(i==1 ){
 
 var select = $('<select ><option style="width=10%; " value="">choisissez ...</option></select>')
 .appendTo( $(this).empty() )
 .on( 'change', function () {
 table.column(i)
 .search( $(this).val() )
 .draw();
 } );
 //alert( );
 
 table.column(i).data().unique().sort().each( function ( d, j ) {
 
 select.append( '<option  value="'+d+'">'+d+'</option>' )
 // alert();
 } );
 }
 });
 },
 
 //   "serverSide": false,
 
 //  orderCellsTop: true,
 
 }); */
var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('commandefrscab_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
    
    "columns": [
        {"orderable": false, "searchable": true, "width": "1px", "targets": [0]},
        {"orderable": false, "width": "10px", "targets": 0},
        {"orderable": false, "width": "1px", "targets": [1, 2]},

        {"orderable": false, "width": "200px", "targets": [3]},
        {"orderable": false, "width": "1px", "targets": [4, 5]},
        {"orderable": false, "width": "1px", className: "mnt-format", "targets": [6, 7, 8]},
        {"orderable": false, "width": "1px", className: "colonne-gras", "targets": [9]},

        {"orderable": false, className: "mnt-format", "targets": [6, 7]},
        {"orderable": false, className: "colonne-gras", "targets": [3, 4, 6]},
        {"orderable": false, className: "cdc", "width": "1px", "targets": [10]},
        {"orderable": false, className: "cdv", "width": "1px", "targets": [11]},
        {"orderable": false, className: "br", "width": "1px", "targets": [12]},
        {"orderable": false, className: "bec", "width": "1px", "targets": [13]},
        {"orderable": false, className: "bev", "width": "1px", "targets": [14]},
        {"orderable": false, className: "rg", "width": "1px", "targets": [15]},
        {"orderable": false, className: "rg", "width": "1px", "targets": [16]}


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
        $(".search_column3 option[value='" + st.columns[3].search.search + "']").attr("selected", "selected");
        $(".search_column4").val(st.columns[4].search.search);
        $(".search_column5").val(st.columns[5].search.search);
        $(".search_column6").val(st.columns[6].search.search);
    }
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


/*  $('#grid').on('click', '.statut_op', function (event) {
 var name = $(this).attr('name');
 var id = $(this).attr('rol'); */
//alert(name+""+id);
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



$('.new').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
// Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.my-button'));
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_commandefrscab_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            
            l.stop();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
 
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                
                
                  var url = Routing.generate('ua_t_commandefrscab_new');
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








var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    console.log(selector);
    // alert()
    var exsit = 0;
    $.each(array_detail, function (i, value) {
        if ($('#uat_commandefrsdet_article').val() == value.article.id) {
            exsit = 1;
        }
    });
    if (exsit == 0) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_commandefrsdet_new'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {

                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
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
                    $("#uat_commandefrscab_detail").val(JSON.stringify(array_detail));
                }
            }
        });
    } else {
        toastr.warning("Ce produit exsite déjà ", "Error! ", {timeOut: 4000})
    }
    e.preventDefault();
});



$('.new').on('click', '.delete_element', function (e) {

    array_detail.splice($(this).attr('id'), 1);

    $(".new .table-detail > tbody tr").remove();
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
        url: Routing.generate('ua_t_commandefrscab_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            $('.errors-list').remove();
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
                url: Routing.generate('ua_t_commandefrsdet_delete', {'id': id, 'token': token}),
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



///*
// * 
// * afficher la formulaire de modification  d'un nouveau article 
// * 
// */
//
//$('.edit').on('submit', '.detail_edit', function (e) {
//    var selector = $(this);
//    var dta = new FormData(this);
//    var id = dta.get('_id');
//
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('ua_t_commandefrsdet_edit_detail', {'id': id}),
//        success: function (result) {
//            var slh = selector.parent().parent().empty().append("<td colspan='9'>" + result + "</td>");
//            // slh.append(result)
//        }
//    });
//
//    e.preventDefault();
//});


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
    //var col_index = $(this).index();
    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_commandefrsdet_edit_detail', {'id': id}),
        success: function (result) {
            // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
            $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>" + result + "</td>");
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
        url: Routing.generate('ua_t_commandefrsdet_update_detail', {'id': id}),
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
    var selector = $(this).attr('class').split(' ')[0];
    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_commandefrsdet_insert', {'id': id}),
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
                 $(".edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
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
    console.log('here');
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
            url: Routing.generate('ua_t_commandefrscab_statut', {'id': id}),
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
$('.actions').on('submit', '.form_statut', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    var selector = $(this).attr('class').split(' ')[0];
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_commandefrscab_check', {'id': id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                //            console.log(result);
                //            console.log(textStatus);
                //            console.log(errorThrown);
                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                    /*  $('.errors-list').remove();
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
                ShowFormErrors(selector, form_name, result.errors);
                /*   $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
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
    if (id) {
        var url = Routing.generate('t_commandefrscab_edit', {'id': id});
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération2", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



$('#_show').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('t_commandefrscab_show', {'id': id});
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
        var url = Routing.generate('vpdf_show', {'id': id});
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
            url: Routing.generate('ua_t_commandefrscab_statut', {'id': id}),
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
$('#_check').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_commandefrscab_check', {'id': id}),
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


$('.actions').on('submit', '.form_check', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    var selector = $(this).attr('class').split(' ')[0];
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_commandefrscab_check', {'id': id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                    /*   $('.errors-list').remove();
                     jQuery.each(result.errors.violations, function (i, val) {
                     var column = val.propertyPath;
                     var columnName = column.split('.');
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
                    url: Routing.generate('t_commandefrscab_archive', {'id': id}),
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
/*$('#_imprimer').click(function (e) {
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
 var url = Routing.generate('vpdf_show', {'id': id});
 // window.location.href = url;
 window.open(url, '_blank');
 // console.log(url)
 }
 });
 } else {
 toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
 }
 e.preventDefault();
 });*/




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
                    url: Routing.generate('t_commandefrscab_delete', {'id': id}),
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


$('#_generer').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        var url = Routing.generate('ua_t_commandefrscab_generer', {'id': id});
        window.location.href = url;

    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }



    e.preventDefault();
});





$('._generer_form').submit(function (e) {
    var dta = new FormData(this);
    var id = $("input[name=_id]").val();



    $.ajax({
        type: 'POST',
        url: Routing.generate('ua_t_commandefrscab_generer_insert', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
            if (result.errors) {
                console.log(result.errors);

                $.each(result.errors, function (key, value) {

                    toastrWidtoutProgress.warning(value, "warning")
                });

            } else if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});



$('#_exporter').click(function (e) {

    $.ajax({
        type: 'POST',
        url: Routing.generate('phpofficeExporter'),
        success: function (result) {
            $('.actions').html(result);
            $(".actions").toggleClass('sidebar-open');
        }
    });
    e.preventDefault();
});








$('.actions').on('submit', '.form_exporter', function (e) {
    //alert();
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    //var id = table.row('.selected').id();
    e.preventDefault();
    var selector = $(this).attr('class').split(' ')[0];


        $.ajax({
            type: 'POST',
            url: Routing.generate('phpofficeExporter'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                //console.log(result);
                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                } else {
                    //alert();
                    e.currentTarget.submit();
                   // $(".form_exporter").unbind( "submit" ).submit();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000})

            }
        
    });
});