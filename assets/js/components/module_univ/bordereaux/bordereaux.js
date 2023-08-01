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




/////////////////////////////////////////


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_bordereaux_list') + location.search, // json datasource
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
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
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



    CustomSearchDatatable.CustomSearchText(api, [1,2,3 ], []);
   
    CustomSearchDatatable.CustomSearchSelect(api, [5,6,7], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [4], []);




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
    var url = Routing.generate('univ_t_bordereaux_show', {'id': $(this).closest('tr').attr('id')});
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
var brd = $('#test').data("bordereauxId");

var table2 = $('#grid2').DataTable({
    ajax: {
        url: Routing.generate('module_univ_bordereaux_list_reglement',{'id':brd}) + location.search, // json datasource
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
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
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


CustomSearchDatatable.CustomSearchText(api, [1,2, 3,4,6,7,9 ], []);
//CustomSearchDatatable.CustomSearchDate(api, [2], []); 
CustomSearchDatatable.CustomSearchSelect(api, [10,11], []);
CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
CustomSearchDatatable.CustomSearchDate(api, [5,8], []);





});
$('#grid2 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});



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


    if ($(this).val() == '_ajouter_reglement' && _array_ids) {


        //  alert();
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Ajouter Ces règlements ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
           
            if (result.value) {
             
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('univ_t_bordereaux_reglement_ajouter',{'id':brd}),
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
    
    
    
                }
        });
        
        

    }


    if ($(this).val() == '_supprimer_reglement' && _array_ids) {


        //  alert();
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Supprimmer Ces règlements ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
           
            if (result.value) {
             
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('univ_t_bordereaux_reglement_supprimer',{'id':brd}),
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
    
    
    
                }
        });
        
        

    }


});

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



////////////////////////////////////////////////////////////////




var table3 = $('#grid3').DataTable({
    ajax: {
        url: Routing.generate('module_univ_bordereaux_list_reglement_delete',{'id':brd}) + location.search, // json datasource
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
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
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

 

    CustomSearchDatatable.CustomSearchText(api, [1,2, 3,4,6,7,9 ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [10,11], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [5,8], []);




});
$('#grid3 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});






$('body').on('click', '.module_univ_bordereaux_apply_transitions', function (e) {
    var dta = new FormData();
    var id = $(this).attr('data-id');
    var title = $(this).attr('data-title');
    var transition = $(this).attr('data-transition');


    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);

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
                    url: Routing.generate('module_univ_bordereaux_apply_transitions', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})

                            location.reload();
                        }
                        
                        
                        if (result.code == 201) {
                            // alert(result.valider);
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            var url = Routing.generate('t_achatdemandeinternecab_apply_generer', {id: result.id});
                            window.location.href = url;
                        } 
                        
                        if (result.code == 403) {
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
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



var table4 = $('#grid4').DataTable({
  
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
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},

      
       
  
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

table4.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();


    CustomSearchDatatable.CustomSearchText(api, [1,2, 3,4,7 ], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [5], []);
    //CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [6], []);




});


/////////////////////////////////////////
$('#grid5 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table5.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

var table5 = $('#grid5').DataTable({
    ajax: {
        url: Routing.generate('module_univ_bordereaux_list_reglement_normal') + location.search, // json datasource
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
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
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
table5.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();



    CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,6,10 ], []);
   
    CustomSearchDatatable.CustomSearchSelect(api, [8,9], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [5,7], []);




});
$('#grid5 tbody').on('click', '.cd_op', function () {
   // alert();
    var url = Routing.generate('univ_t_bordereaux_show_reglement', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});
