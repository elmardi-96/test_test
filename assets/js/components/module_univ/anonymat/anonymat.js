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




var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix Matiére",
    allowClear: true
}); 

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
/*$('body').on('change','.etablissement',function (e) {
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('get_formation_impression', {id: $(this).val()}),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
               
                $(".formation").html(infos.data);
                $('select.select2').select2();
            }
        });
    } else {
        $('.formation').html('<option value="">Choix Formation</option>');
        $('.annee').html('<option value="">Choix Année</option>');
      
    }
    e.preventDefault();
});*/


/*$('body').on('change','.formation',function (e) {
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('get_annee_impression', {id: $(this).val()}),
            success: function (result) {
                var infos2 = jQuery.parseJSON(result);
               
                $(".annee").html(infos2.data);
                $('select.select2').select2();
            }
        });

     


        
    } else {
        $('.annee').html('<option value="">Choix Année</option>');
       
        
    }
    e.preventDefault();
});*/



/////////////////////////////////////////


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_anonymat_imprimer_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "scrollX": true,
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

    //console.log(st);
//if (st != null) {
//    $.each(st.columns, function (key, value) {
//        if (value.search.search != "") {
//            $('.remove-filter').show();
//            return false;
//        }
//    });
//}

    CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5 ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
  //  CustomSearchDatatable.CustomSearchSelect(api, [2,3,4], []);
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
/*$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('univ_t_preinscription_grille_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});*/



$('.etudiant_id').keydown(function (event) {
    if (event.which == 13) {
if($.isNumeric($('.etudiant_id').val())){
        var nombre_etiquettes = 1;
//alert();
        if ($('.nombre_etiquettes').val() > 1) {
            nombre_etiquettes = $('.nombre_etiquettes').val();
        }
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_anonymat_insert'),
            data: {nombre_etiquettes: nombre_etiquettes, id_etudiant: $('.etudiant_id').val()},
            success: function (result) {
                if (result.code == 200) {
                  //  var win = window.open("fpdf/print/ex.php?id_etudiant=" + $('.id_etudiant').val() + "&nombre_etiquettes=" + nombre_etiquettes, "_blank", "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=400");
                  toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                  table.ajax.reload();
                  var url =Routing.generate('module_univ_anonymat_pdf',{'id':$('.etudiant_id').val()})
                  var win = window.open(url, "_blank", "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=400");



                            win.onfocus = function () {
                                setTimeout(function () {
                                    win.close();
                                }, 2000);
                            }
                    $('.etudiant_id').val("");
//$('.nombre_etiquettes').val("");


                }else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                } 
            },error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
            
        });
    }
}
});


/////////////////////////////////////////////
// grid controle



var table2 = $('#grid_controle').DataTable({
    ajax: {
        url: Routing.generate('module_univ_anonymat_controle_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "scrollX": true,
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
table2.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();

    //console.log(st);
//if (st != null) {
//    $.each(st.columns, function (key, value) {
//        if (value.search.search != "") {
//            $('.remove-filter').show();
//            return false;
//        }
//    });
//}
CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5 ], []);
//CustomSearchDatatable.CustomSearchDate(api, [2], []); 
//  CustomSearchDatatable.CustomSearchSelect(api, [2,3,4], []);
CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
//CustomSearchDatatable.CustomSearchDate(api, [12], []);




});
$('#grid_controle tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});







$('.code_anonymat').keydown(function (event) {
    if (event.which == 13) {
if($.isNumeric($('.code_anonymat').val())&& $.isNumeric($('.id_etudiant').val()) ){
       
//alert();
 var id_etudiant=0;
        if ($('.id_etudiant').val() > 1) {
            id_etudiant = $('.id_etudiant').val();
        }
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_anonymat_controle_insert'),
            data: {code_anonymat: $('.code_anonymat').val(), id_etudiant: $('.id_etudiant').val()},
            success: function (result) {
                if (result.code == 200) {
                  //  var win = window.open("fpdf/print/ex.php?id_etudiant=" + $('.id_etudiant').val() + "&nombre_etiquettes=" + nombre_etiquettes, "_blank", "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=400");
                  toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                  table2.ajax.reload();
                    $('.id_etudiant').val("");
                    $('.code_anonymat').val("");
//$('.nombre_etiquettes').val("");


                }else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                } 
            },error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
            
        });
    }
}
});



// impression claire 


$('.etudiant_id2').keydown(function (event) {
    if (event.which == 13) {
if($.isNumeric($('.etudiant_id2').val())){
        var nombre_etiquettes = 1;
//alert();
        if ($('.nombre_etiquettes').val() > 1) {
            nombre_etiquettes = $('.nombre_etiquettes').val();
        }
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_anonymat_insert_claire'),
            data: {nombre_etiquettes: nombre_etiquettes, id_etudiant: $('.etudiant_id2').val()},
            success: function (result) {
                if (result.code == 200) {
                  //  var win = window.open("fpdf/print/ex.php?id_etudiant=" + $('.id_etudiant').val() + "&nombre_etiquettes=" + nombre_etiquettes, "_blank", "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=400");
                  toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                  table.ajax.reload();
                  var url =Routing.generate('module_univ_anonymat_pdf',{'id':$('.etudiant_id2').val()})
                  var win = window.open(url, "_blank", "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=400");



                            win.onfocus = function () {
                                setTimeout(function () {
                                    win.close();
                                }, 2000);
                            }
                    $('.etudiant_id2').val("");
//$('.nombre_etiquettes').val("");


                }else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                } 
            },error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
            
        });
    }
}
});
