const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';

import * as Ladda from 'ladda';
global.$ = $;







var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('ua_t_facturefrscab_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "asc"]],
    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "100px", "targets": 0 },
        { "orderable": false, "width": "100px", "targets": [1, 2,9] },

        { "orderable": false, "width": "200px", "targets": [3] },
        { "orderable": false, "width": "100px", "targets": [4, 5] },
        { "orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7, 8] },
        
      

        { "orderable": false,"width": "100px", className: "mnt-format", "targets": [6, 7] },
        { "orderable": false,"width": "100px", className: "mnt-format", "targets": [6, 7] },
        { "orderable": false,"width": "100px", className: "mnt-format", "targets": [9] },
        { "orderable": false,"width": "100px", className: "rg", "targets": [3, 4, 6]
     },
        
        
      
        
        
      


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
        $(".search_column3").val(st.columns[3].search.search);
        $(".search_column4 option[value='" + st.columns[4].search.search + "']").attr("selected", "selected");
       
        $(".search_column5").val(st.columns[5].search.search);
        $(".search_column6").val(st.columns[6].search.search);
        $(".search_column7").val(st.columns[7].search.search);
        $(".search_column8 option[value='" + st.columns[8].search.search + "']").attr("selected", "selected");
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

$('.search_column3').on('keyup', function () {
    table.columns(3).search(this.value).draw();
});

$('.search_column4').on('change', function () {
    //alert(this.value);
    table.columns(4).search(this.value).draw();
});
$('.search_column5').on('keyup', function () {
    table.columns(5).search(this.value).draw();
});
$('.search_column6').on('keyup', function () {
    table.columns(6).search(this.value).draw();
});
$('.search_column7').on('keyup', function () {
    table.columns(7).search(this.value).draw();
});
$('.search_column8').on('change', function () {
    table.columns(8).search(this.value).draw();
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
    $('#grid tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

   
$(document).ready(function () {
//alert(1)
  /*  document.addEventListener("DOMContentLoaded", function (event) {

        $('#grid').show(500);
    });*/
   // console.log('Hello Webpack Encore! Edit me in assets/js/app.js!!!');
   $('#_statut').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_facture_statut', {'id': id}),
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

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
});
$('.actions').on('submit', '.form_statut', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_facture_statut', {'id': id}),
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
    $('#_demande').click(function (e) {
        var id = table.row('.selected').id();
        if (id) {
            var url = Routing.generate('ua_t_facturefrscab_Paiement', { 'id': id });
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
            var url = Routing.generate('ua_t_facturefrscab_consulte', { 'id': id });
            window.location.href = url;
            // console.log(url)
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
        }
        e.preventDefault();
    });


    $('#_imprimer').click(function (e) {
        var id = table.row('.selected').id();
    
        if (id) {
            var url = Routing.generate('pdf_show_facture', {'id': id});
           // window.location.href = url;
            window.open(url, '_blank');
            // console.log(url)
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
        }
        e.preventDefault();
    });

    $('.new').on('submit', '.form', function (e) {
       
       
        var form_name = $(this).attr('name');
        var dta = new FormData(this);
        var selector = $(this).attr('class').split(' ')[0];
        var id = $('#test').data("factureId");
   // console.log(test);
        //console.log(e.type);
       // alert(id);
        $.ajax({
            type: 'POST',
            url: Routing.generate('ua_t_facture_insert', { 'id': id }),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
                //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
                if (result.errors) {
                  //  console.log(result.errors);
                    $('.errors-list').remove();
                    jQuery.each(result.errors.violations, function (i, val) {
                        var column = val.propertyPath;
                        var columnName = column.split('.');
                        $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                    });
                } else if (result.empty) {
                    toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                    // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
                } else if (result.data) {
                    toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                    $(".form")[0].reset();
                    $(".new .table-detail tbody").hide();
                    $('.new-article-btn').show();
                    $(".new .table-detail > tbody tr").not(":last").remove();
                    location.reload();
                    //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
        e.preventDefault();
    });
});