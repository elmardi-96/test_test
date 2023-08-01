
//const app = require('./../app.js');


const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})
global.$ = $;



var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('uv_reglementcab_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
    "order": [[0, "asc"]],
    "columns": [
        {"orderable": false, "searchable": true, "width": "10px", "targets": [0]},
        {"orderable": false, "width": "100px", "targets": 0},
        {"orderable": false, "width": "100px", "targets": [1, 2]},

        {"orderable": false, "width": "100px", "targets": [3]},
        {"orderable": false, "width": "100px", "targets": [4, 5]},
        {"orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7, 8]},
        {"orderable": false, "width": "200px", className: "colonne-gras", "targets": [9]},

        {"orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7]},
        {"orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7]},
        {"orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7]},
        {"orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7]},
        {"orderable": false, "width": "100px", className: "mnt-format", "targets": [6, 7]},
     
     


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
        $(".search_column11 option[value='" + st.columns[5].search.search + "']").attr("selected", "selected");
    }


     




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
var search_column11 = $('.search_column11').datepicker({
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
search_column11.on('changeDate', function (e) {
  //alert(5);
    table.columns(5).search(this.value).draw();
});
$('.search_column1_clear').click(function () {

    $('.search_column1').datepicker('setDate', null).datepicker('fill').formatDate( "yy-mm-dd");
});
$('.search_column11_clear').click(function () {

    $('.search_column11').datepicker('setDate', null).datepicker('fill').formatDate( "yy-mm-dd");
});



$('.search_column2').on('keyup', function () {
    table.columns(2).search(this.value).draw();
});

$('.search_column3').on('change', function () {
   // alert(this.value);
    table.columns(3).search(this.value).draw();
});
$('.search_column10').on('change', function () {
    // alert(this.value);
     table.columns(10).search(this.value).draw();
 });
 $('.search_column9').on('change', function () {
    // alert(this.value);
     table.columns(9).search(this.value).draw();
 });

$('.search_column4').on('keyup', function () {
    table.columns(4).search(this.value).draw();
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
$('.search_column12').on('keyup', function () {
    table.columns(11).search(this.value).draw();
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

$('#_imprimer').click(function (e) {
    var id = table.row('.selected').id();
    //alert(id);
    if (id) {
        var url = Routing.generate('pdf_show_reglement_vente', {'id': id});
        // window.location.href = url;
        window.open(url, '_blank');
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


$('#_show').click(function (e) {
    var id = table.row('.selected').id();
    //alert(id);
    if (id) {
        var url = Routing.generate('uv_reglementcab_consulte', { 'id': id });
      //  alert(url);
        window.location.href = url;
        window.open(url, '_blank');
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
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




console.log('ff');


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
                    url: Routing.generate('uv_reglementcab_delete', {'id': id}),
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








