const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
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







 


 var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_inscription_list') + location.search, // json datasource
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
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "20%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "20%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
       
        
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

    CustomSearchDatatable.CustomSearchText(api, [1, 2 ,3 ,4, 5,6 ], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
   // CustomSearchDatatable.CustomSearchDate(api, [10], []);
    CustomSearchDatatable.CustomSearchSelect(api, [7,8,9,10,11], []);
   
 


});
$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), {timeOut: 4000})
    }
});

jQuery.each($('.form-errors li'), function (i, val) {
 
    console.log($(this).text());

});


/*check the form errors*/
console.log($('.form-errors').text()); 
if ($('.form-errors').text()!=''){
   toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000}) 
}




if ($.trim($('.form-error').html())) {
    
}

/*alert($('.error-class-tab').parents('.tab-pane').attr('id'));*/
var arr = [];
$('.error-class-tab').each(function( index ) {
    //alert(arr.indexOf($(this).parents('.tab-pane').attr('id')))
    if(arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1){
        $("a[href$='#"+ $(this).parents('.tab-pane').attr('id') +"']").append('<span class="label badge-danger">Erreur!</span>');
    }
    arr = $(this).parents('.tab-pane').attr('id');

//alert();
$('.error-class-tab').parent().parent().parent().parent().parent().after('ss');


})


//  toastr.error("Erreur", "ddd","dd", {timeOut: 4000})

// add suivi préinscription
$('body').on('submit', '._suivi', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_etudiant_suivis', {'id': id}),
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
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});

// delete Suivi préinscription

$('._delete_suivi').click(function (e) {
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
                    url: Routing.generate('module_univ_etudiant_suivis_delete', {'id': id}),
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


var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix Bource",
    allowClear: true
});  




// add appel etudiant module_univ_etudiant_releves_notes
$('body').on('submit', '._bource', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    //alert(id);
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_preinscription_bource', {'id': id}),
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
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert();
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('module_univ_inscription_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});



var tableShow3 = $('.datatable-show3').DataTable({"paging": true,
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    }
});



$('select.select2').select2();
// add appel etudiant 
$('body').on('submit', '._frais', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    //alert(id);
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_inscription_frais', {'id': id}),
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
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});
















// delete Suivi inscription

$('._delete_frais').click(function (e) {
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
                    url: Routing.generate('module_univ_inscription_frais_delete', {'id': id}),
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


$('.new').on('submit', '.form', function (e) {



    ///alert(1);
    
        var dta = new FormData(this);
        var form_name = $(this).attr('name');
        var id = dta.get('_id');
      //  var selector = $(this).attr('class').split(' ')[0];
      var selector = $(this);
        var l = Ladda.create(document.querySelector('.my-button'));
        // Start loading
        l.start();
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_inscription_frais2', {'id': id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                $('.errors-list').remove();
                if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                    l.stop();
                 
    
                } else if (result.code == 200) {
                    l.stop();
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    window.location.reload();
                }else if (result.empty) {
                    l.stop();
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                    }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                l.stop();
                toastr.error("Erreur", errorThrown, {timeOut: 4000})
            }
        });
    
    
    
        e.preventDefault();
    })


    $('.new').on('change', '.frais', function (e) {
      //  alert();
        var montant = $('option:selected', this).attr('data-montant');
        $('.montant').val(montant); 
        e.preventDefault();
    });
    var tableShow3 = $('#datatable-show3').DataTable({"paging":false});
    var tableShow4 = $('.datatable-show4').DataTable({"paging":false});
    var tableShow2 = $('#datatable-show2').DataTable({
        "scrollY":        "200px",
        "scrollCollapse": true,
        "paging":         false,
        "autoWidth": false
    });

    $('.new').on('click', '.delete_element', function (e) {
        console.log($(this).attr('id'));
        array_detail.splice($(this).attr('id'), 1);
        console.log(array_detail);
        $(".new .table-detail > tbody tr").remove();
        $.each(array_detail, function (i, value) {
    //        var tva = value.tva + ' %';
    //        var observation = value.observation;
    //        if (value.tva == null) {
    //            tva = '-';
    //        }
    //        if (value.observation == null) {
    //            observation = '-';
    //        }
            var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.frais + "</td><td>" + value.montant.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
        });
    });



    var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var exsit = 0;
  
    var id = $('#test').data("inscriptionId");
    $.each(array_detail, function (i, value) {
        if ($('#univ_t_operationdet_frais').val() == value.id) {
            exsit = 1;
        }
    });
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();

    if (exsit == 0) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_inscription_t_operationdet_new', {id: id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
                l.stop();
                if (result.errors) {


                    ShowFormErrors(selector, form_name, result.errors);

                } else if (result.data) {
                    $(".detail_form")[0].reset();
                    $(".errors-list").remove();
                    $('.article').focus();
                    let lineNo = 1;
                    array_detail.push(result.data);
                    $(".new .table-detail > tbody").empty();
                    $.each(array_detail, function (i, value) {

                        var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.frais + "</td><td>" + value.montant.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
                        $(".new .table-detail > tbody").append(my_row);
                        lineNo++;
                    });

                    $("#univ_t_operationcab_detail").val(JSON.stringify(array_detail));
                }
            }
        });
    } else {
        l.stop();
        toastr.warning("Frais  existe déjà dans la liste ", "warning ", {timeOut: 4000})
    }
    e.preventDefault();
});