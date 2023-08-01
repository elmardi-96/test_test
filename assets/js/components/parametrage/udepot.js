const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';
const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

var tableShow3 = $('#datatable-show3').DataTable({ "paging": false });
var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('stock_depot_list'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "5%", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%" },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "orderable": true, "width": "25%", visible: false },
        { "width": "5%", "orderable": true, visible: false },
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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



$('body').on('change', '#Suive', function() {
    console.log('selectedId');
    let selectedId = $(this).val();
    table6.clear().draw();



    var table6 = $('#grid6').DataTable({
        ajax: {
            url: Routing.generate('list_antenne') + '?id=' + selectedId,
            type: "get",
        },
        "deferRender": true,
        "stateSave": true,
        "lengthMenu": [
            [10, 15, 25, 50, 100, 200, -1],
            [10, 15, 25, 50, 100, 200, "All"]
        ],
        "pageLength": 15,
        "columns": [
            { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" },
            { "orderable": true, "width": "100px" }
        ],
        dom: 'f<"html5buttons btn-group"B>lTgtip',
        buttons: [
            'columnsToggle',
            {
                text: 'Restaurer',
                className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
                action: function(e, dt, node, config) {
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

    // $.ajax({
    //     type: "get",
    //     url: Routing.generate('list_antenne') + '?id=' + selectedId,

    //     success: function(data) {
    //         //   alert(data);
    //         table6.clear().draw();
    //         // table6.append(data);
    //         // table6.DataTable().clear().draw();
    //         // table6.DataTable().rows.add // Add new data
    //         // table6.DataTable().columns.adjust().draw();

    //     }
    // })

});

$(".sel2").select2();



var table4 = $('#grid4').DataTable({
    ajax: {
        url: Routing.generate('mouvement_stock_list_normal2') + location.search,
        type: "get",
    },
    serverSide: true,
    deferRender: true,

    order: [
        [0, "desc"]
    ],
    lengthMenu: [
        [10, 15, 25, 50, 100, 200, 20000000],
        [10, 15, 25, 50, 100, 200, "All"],
    ],
    pageLength: 15,
    columns: [
        { orderable: true, name: 'mv.id' },

        {

            className: "mnt-format",
            name: 'mv.source'
        },
        {

            className: "mnt-format",
            name: 'mv.source_code'
        }

        ,
        {

            className: "mnt-format",
            name: 'dep.titre'
        }

        ,
        {

            className: "mnt-format",
            name: 'ar.titre'
        }
        /*  ,
          {

            className: "mnt-format",
            name: 'ar.code'
          }*/

        ,
        {

            className: "mnt-format",
            name: 'mv.quantite'
        },
        {

            className: "mnt-format",
            name: 'mv.prixunitaire'
        },
        {

            className: "mnt-format",
            name: 'mv.tva'
        },
        {

            className: "mnt-format",
            name: 'mv.remise'
        }

        ,
        {

            className: "mnt-format",
            name: 'mv.prixttc'
        },

        //  {"orderable": true, "width": "200px"},



    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },
        },
    ],
    language: {
        url: Routing.generate('datatables_langue'),
        processing: true
    },
    fixedHeader: true,
});


table4.on("init.dt", function(e, settings) {
    let api = new $.fn.dataTable.Api(settings);
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

    // CustomSearchDatatable.CustomSearchSelect(api, [], []);
    // CustomSearchDatatable.CustomSearchDate(api, [], []);
    //  CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5,6,7,8,9,10], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function() {
    var url = Routing.generate('u_depot_show', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});







var grid2 = $('#grid2').DataTable({
    ajax: {
        url: Routing.generate('mouvement_stock_encours_list_vente') + location.search,
        type: "get",
    },
    serverSide: true,
    deferRender: true,

    order: [
        [0, "desc"]
    ],
    lengthMenu: [
        [10, 15, 25, 50, 100, 200, 20000000],
        [10, 15, 25, 50, 100, 200, "All"],
    ],
    pageLength: 15,
    columns: [
        { orderable: true, name: 'det.id' },

        {

            className: "mnt-format",
            name: 'mv.cab.dateDocAsso'
        },
        {

            className: "mnt-format",
            name: 'clt.nom'
        }

        ,
        {

            className: "mnt-format",
            name: 'dv.code'
        }

        ,
        {

            className: "mnt-format",
            name: 'cab.code'
        }
        /*  ,
          {

            className: "mnt-format",
            name: 'ar.code'
          }*/

        ,
        {

            className: "mnt-format",
            name: 'dep.code'
        },
        {

            className: "mnt-format",
            name: 'ar.code'
        },
        {

            className: "mnt-format",
            name: 'det.quantite'
        },
        {

            className: "mnt-format",
            name: 'det.prixunitaire'
        }

        ,
        {

            className: "mnt-format",
            name: 'det.tva'
        },
        {

            className: "mnt-format",
            name: 'det.tva'
        },
        {

            className: "mnt-format",
            name: 'det.remise'
        },
        {

            className: "mnt-format",
            name: 'det.prixTtc'
        },

        //  {"orderable": true, "width": "200px"},



    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },
        },
    ],
    language: {
        url: Routing.generate('datatables_langue'),
        processing: true
    },
    fixedHeader: true,
});


var table3 = $('#grid3').DataTable({
    ajax: {
        url: Routing.generate('mouvement_stock_encours_list_achat'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },

    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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
var table6 = $('#grid6').DataTable({
    ajax: {
        url: Routing.generate('list_antenne'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" }
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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
var table9 = $('#grid9').DataTable({
    ajax: {
        url: Routing.generate('list_antenne'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" }
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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
var table10 = $('#grid10').DataTable({
    ajax: {
        url: Routing.generate('list_antenne'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" }
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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
var table11 = $('#grid11').DataTable({
    ajax: {
        url: Routing.generate('list_antenne'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" }
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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
var table8 = $('#grid8').DataTable({
    ajax: {
        url: Routing.generate('list_antenne_mouvement_cab'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },

    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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
var table7 = $('#grid7').DataTable({
    ajax: {
        url: Routing.generate('list_antenne_depot'),
        type: "get",
    },
    deferRender: true,
    serverSide: true,
    lengthMenu: [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    pageLength: 15,
    columns: [
        { orderable: true, name: 'ann.code', width: "5%" },
        { orderable: true, name: 'ann.designation' },
        { orderable: true, name: "ann.defaut" },
        { orderable: true, name: 'article' },
        { orderable: true, name: 'quantite' },
        { orderable: true, name: 'ar.prix_achat' },
        { orderable: true, name: 'depot.titre' },
    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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



var table5 = $('#grid5').DataTable({
    ajax: {
        url: Routing.generate('mouvement_stock_encours_list_transformation'),
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [
        [10, 15, 25, 50, 100, 200, -1],
        [10, 15, 25, 50, 100, 200, "All"]
    ],
    "pageLength": 15,
    "columns": [
        { "orderable": false, "width": "10px", "searchable": true, "targets": [0] },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "100px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },
        { "orderable": true, "width": "10px" },



    ],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
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


$('#grid tbody').on('click', 'tr', function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('#grid2 tbody').on('click', 'tr', function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table2.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('#grid3 tbody').on('click', 'tr', function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table3.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('#grid5 tbody').on('click', 'tr', function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table5.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});


$("#valid").change(function(e) {
    //  alert($(this).val());
    //$("form").submit();
    if ($(this).val() == 1) {

        var form_name = $('#action_test').attr('name');
        var dta = new FormData(action_test);
        //var dta = $('#action_test').serialize()
        var t = dta.get("_action[]");
        //alert( t);
        var selector = $(this).attr('class').split(' ')[0];
        // console.log(e.type);
        // var t=1;
        if (t) {
            swalWithBootstrapButtons.fire({
                showClass: {
                    popup: 'animatedSwal flipInX faster'
                },
                position: 'top',
                title: "Confirmation ?",
                text: "Voulez vous vraiment Valider cet enregistrement ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        type: 'POST',
                        url: Routing.generate('depot_mouvement_stock_valider_vente_multiple'),
                        data: dta,
                        processData: false,
                        contentType: false,
                        success: function(result) {
                            //console.log(result);
                            if (result.code == 200) {
                                table2.ajax.reload();
                                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                                $("#valid").css("display", "none");
                                $(".action").prop("checked", false);
                                $("#allactions").prop("checked", false);
                            } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                        }
                    });
                }
            });
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
        }

    }



    e.preventDefault();


});



$("#valid3").change(function(e) {
    //  alert($(this).val());
    //$("form").submit();
    if ($(this).val() == 1) {

        var form_name = $('#action_test').attr('name');
        var dta = new FormData(action_test);
        //var dta = $('#action_test').serialize()
        var t = dta.get("_action[]");
        //alert( t);
        var selector = $(this).attr('class').split(' ')[0];
        // console.log(e.type);
        // var t=1;
        if (t) {
            swalWithBootstrapButtons.fire({
                showClass: {
                    popup: 'animatedSwal flipInX faster'
                },
                position: 'top',
                title: "Confirmation ?",
                text: "Voulez vous vraiment Valider cet enregistrement ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        type: 'POST',
                        url: Routing.generate('depot_mouvement_stock_valider_transformation_multiple'),
                        data: dta,
                        processData: false,
                        contentType: false,
                        success: function(result) {
                            //console.log(result);
                            if (result.code == 200) {
                                table2.ajax.reload();
                                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                                $("#valid3").css("display", "none");
                                $(".action").prop("checked", false);
                                $("#allactions").prop("checked", false);
                            } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                        }
                    });
                }
            });
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
        }

    }



    e.preventDefault();


});



$("#valid2").change(function(e) {
    //  alert($(this).val());
    //$("form").submit();
    if ($(this).val() == 1) {

        var form_name = $('#action_test2').attr('name');
        var dta = new FormData(action_test2);
        var t = dta.get("_action2[]");
        //  alert(t);
        var selector = $(this).attr('class').split(' ')[0];
        // console.log(e.type);

        if (t) {
            swalWithBootstrapButtons.fire({
                showClass: {
                    popup: 'animatedSwal flipInX faster'
                },
                position: 'top',
                title: "Confirmation ?",
                text: "Voulez vous vraiment Validé cet enregistrement ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider!",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        type: 'POST',
                        url: Routing.generate('depot_mouvement_stock_valider_achat_multiple'),
                        data: dta,
                        processData: false,
                        contentType: false,
                        success: function(result) {
                            //console.log(result);
                            if (result.code == 200) {
                                table3.ajax.reload();
                                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                                $("#valid2").css("display", "none");
                                $("#allactions2").prop("checked", false);
                            } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                        }
                    });
                }
            });
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
        }

    }



    e.preventDefault();


});



$('.test').on('submit', '.action_test', function(e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var t = dta.get("_action[]");
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);

    if (t) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Validé cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('depot_mouvement_stock_valider_vente_multiple'),
                    data: dta,
                    processData: false,
                    contentType: false,
                    success: function(result) {
                        //console.log(result);
                        if (result.code == 200) {
                            table2.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }

    e.preventDefault();
});


$('.test2').on('submit', '.action_test2', function(e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var t = dta.get("_action2[]");
    //  alert(t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);

    if (t) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Validé cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('depot_mouvement_stock_valider_achat_multiple'),
                    data: dta,
                    processData: false,
                    contentType: false,
                    success: function(result) {
                        //console.log(result);
                        if (result.code == 200) {
                            table3.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }

    e.preventDefault();
});




$("#allactions").change(function(e) {
    //$('#allactions').click(function (e) {
    if (this.checked) {
        $(".action").prop("checked", true);
        $("#valid").css("display", "block");
    } else {
        $(".action").prop("checked", false);
        $("#valid").css("display", "none");
    }

    e.preventDefault();
});
$("#allactions2").change(function(e) {
    //$('#allactions').click(function (e) {
    if (this.checked) {
        $(".action2").prop("checked", true);
        $("#valid2").css("display", "block");
    } else {
        $(".action2").prop("checked", false);
        $("#valid2").css("display", "none");
    }

    e.preventDefault();
});

$("#allactions3").change(function(e) {
    //$('#allactions').click(function (e) {
    if (this.checked) {
        $(".action").prop("checked", true);
        $("#valid3").css("display", "block");
    } else {
        $(".action").prop("checked", false);
        $("#valid3").css("display", "none");
    }

    e.preventDefault();
});

$('body').on('change', '.action', function() {
    //  alert();
    $("#valid").css("display", "block");
    //    $(".btn_val").css("display", "block");
    //  console.log($('.action').val());
});
$('body').on('change', '.action', function() {
    //  alert();
    $("#valid3").css("display", "block");
    //    $(".btn_val").css("display", "block");
    //  console.log($('.action').val());
});

$('body').on('change', '.action2', function() {
    //  alert();
    $("#valid2").css("display", "block");
    //   $(".btn_val2").css("display", "block");
    //  console.log($('.action').val());
});


$('.new').on('submit', '.form', function(e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // console.log(e.type);
    var l = Ladda.create(document.activeElement);

    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_depot_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            if (result.errors) {
                l.stop();
                // console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                var url = Routing.generate('u_depot_show', { 'id': result.data.id });
                window.location.href = url;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});



$('#_edit').click(function(e) {
    var id = table.row('.selected').id();
    if (id) {
        var url = Routing.generate('stock_depot_edit', { 'id': id });
        window.location.href = url;
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});







$('.grid').on('click', '.valider', function(e) {
    //$('.valider').on('click',function (e) {

    var id = $(this).attr('id'); //alert(id);
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Validé cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('depot_mouvement_stock_valider_vente', { 'id': id }),
                    success: function(result) {
                        //console.log(result);
                        if (result.code == 200) {
                            table2.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});


$('.grid3').on('click', '.valider', function(e) {
    //$('.valider').on('click',function (e) {

    var id = $(this).attr('id'); //alert(id);
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Validé cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('depot_mouvement_stock_valider_achat', { 'id': id }),
                    success: function(result) {
                        //console.log(result);
                        if (result.code == 200) {
                            table3.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});

$('.edit').on('submit', '.form', function(e) {
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    //alert( id );
    var l = Ladda.create(document.activeElement);

    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_depot_update', { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {

            $('.errors-list').remove();
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
            }
        }
    });
    e.preventDefault();
});


$('#_show').click(function(e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('u_depot_show', { 'id': id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});

$('#_delete').click(function(e) {
    //  var id = table.row('.selected').id();

    var id = $('#test').data("depotId");
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
                    url: Routing.generate('stock_depot_delete', { 'id': id }),
                    success: function(result) {
                        console.log(result);
                        if (result.code == 200) {
                            // table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            var url = Routing.generate('stock_depot_index');
                            window.location.href = url;
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});








//
//
//$('._delete_fichier').click(function (e) {
//    var id = $(this).attr('id');
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_fichiers_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                            location.reload(); 
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//$('body').on('submit', '.stock_produit_add_stock', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_add_stock', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//             
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});


$('#_archiver').click(function(e) {
    //var id = table.row('.selected').id();

    var id = $('#test').data("depotId");
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
                    url: Routing.generate('stock_depot_archiver', { 'id': id }),
                    success: function(result) {
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});




$('body').on('submit', '.stock_depot_trensfert', function(e) {
    //alert();
    var l = Ladda.create(document.activeElement);

    // Start loading
    l.start();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_depot_trensfert', { 'id': id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                var url = Routing.generate("stock_depot_mouvementstock");
                window.location.href = url;
                //  location.reload(); 
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })

            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});

$('.antenne_source').on('change', () => {
    var data = $(".antenne_source :selected").val();
    $('.santenneyerror').hide();

    console.log(data);
    // let antenne = $(this).val();
    if (data != "") {
        $.ajax({
            type: 'GET',
            url: Routing.generate('get_antenne_article', { 'id': data }),
            processData: false,
            contentType: false,
            success: function(result) {
                var data = JSON.parse(result);
                $(".article_disponible").html(data);
                $(".article_disponible select").select2();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
    }
});


$('.Site_Rc').on('change', () => {
    var data = $(".Site_Rc :selected").val();
    $('.santenneyerror').hide();

    console.log(data);
    // let antenne = $(this).val();
    if (data != "") {
        $.ajax({
            type: 'GET',
            url: Routing.generate('get_demand_article', { 'id': data }),
            processData: false,
            contentType: false,
            success: function(result) {
                var data = JSON.parse(result);
                $(".article_disponible_Rc").html(data);
                $(".article_disponible_Rc select").select2();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
    }
});


// $(".type_mouvement").on('change', () => {
//     const typeMouvement = $(".type_mouvement :selected").val();
//     $('.type_mouvementerror').hide();
//     if(typeMouvement != '') {
//         $.ajax({
//             type: 'GET',
//             url: Routing.generate('get_antennes', {'val': typeMouvement}),
//             processData: false,
//             contentType: false,
//             success: function (result) {
//                 var data = JSON.parse(result);
//                 console.log(data);
//                 $(".antenne_destination").html(data.htmlDesination);
//                 $(".antenne_source").html(data.htmlSource);
//                 $(".antenne_destination").select2();
//                 $(".antenne_source").select2();
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 toastr.error("Erreur", errorThrown, {timeOut: 4000})
//             }
//         });
//     }
// })

let quanttityDisponible;

// $('.article_disponible').on('change', () => {
//     $('.articleyerror').hide();
//     quanttityDisponible = $(".article_disponible :selected").attr('data');

//     $('.quantitty').val('');
// });

// $('.quantitty').on('keyup', () => {
//     $('.quantityerror').hide();
//     const quantity = $('.quantitty').val();
//     if(quantity > quanttityDisponible) {
//         $('.quantitty').val(quanttityDisponible)
//     } else if (quantity < 0) {
//         $('.quantitty').val(1)
//     }
// });
$(".antenne_destination").on('change', () => {
        $('.dantenneyerror').hide();
    })
    // $("#mouvestock").on('submit', (e) => {
    //     e.preventDefault();
    //     var l = Ladda.create(document.activeElement);
    //     l.start();
    //     let active = true;
    //     // console.log(data);
    //     if($(".type_mouvement :selected").val() == ""){
    //         $('.type_mouvementerror').show();
    //         active = false;
    //     }
    //     if($(".antenne_source :selected").val() == ""){
    //         $('.santenneyerror').show();
    //         active = false;
    //     }
    //     if($(".antenne_destination :selected").val() == ""){
    //         $('.dantenneyerror').show();
    //         active = false;
    //     }
    //     if($(".article_disponible :selected").val() == ""){
    //         $('.articleyerror').show();
    //         active = false;
    //     }
    //     if($('.quantitty').val().trim() == ""){
    //         $('.quantityerror').show();
    //         active = false;
    //     }
    //     let data = new FormData();
    //     data.append('antenne_source', $(".antenne_source :selected").val());
    //     data.append('antenne_destination', $(".antenne_destination :selected").val());
    //     data.append('article', $(".article_disponible :selected").val());
    //     data.append('quantitie', $(".quantitty").val());
    //     data.append('type_mouvement', $(".type_mouvement :selected").val());
    //     if(active) {
    //         $.ajax({
    //             type: 'POST',
    //             url: Routing.generate('transfer_stock'),
    //             data: data,
    //             processData: false,
    //             contentType:false,
    //             success: function (result) {
    //                 toastr.success('Mouvement de stock a été bien effectué .', 'Succées', {timeOut: 4000})
    //                 $(".antenne_source option:first").prop('selected','selected');
    //                 $(".antenne_destination option:first").prop('selected','selected');
    //                 $(".quantitty").val("");
    //                 $(".type_mouvement option:first").prop('selected','selected');
    //             },
    //             error: function (jqXHR, textStatus, errorThrown) {
    //                 toastr.error("Erreur", errorThrown, {timeOut: 4000})
    //             }
    //         });
    //     }
    //     l.stop();

// });

$('body').on('change', '.select2_demo_antenne', () => {
    if ($(".select2_demo_antenne :selected").val() != "null") {
        console.log($(".select2_demo_antenne :selected").val());
        table7.columns(0).search($(".select2_demo_antenne :selected").val()).draw();
    } else {
        table7.columns(0).search('').draw();
    }
})
let ArraysOfArticle = [];
$('body').on('click', '.add_article_stock_active', () => {

    var allElements = $('.add_article_stock_active').closest(".parrentArticle");
    // console.log(allElements);   
    var articleId = allElements.find('.article_disponible :selected').val();
    var articleName = allElements.find('.article_disponible :selected').attr('data-name');
    var quantityDisponible = allElements.find('.article_disponible :selected').attr('data-q');
    var quantitty = allElements.find('.quantitty').val();
    console.log(quantityDisponible, quantitty)
    if (+quantityDisponible < +quantitty || +quantitty < 1) {
        toastr.error('Priere d\'entre une valeur moin ou egale ' + quantityDisponible, "Erreur",  { timeOut: 4000 })

        // alert('Priere d\'entre une valeur moin ou egale ' + );
    } else {
        // $(`.article_disponible #${articleId}`).hide();
        // $('.article_disponible').select2();

        let passe = true
        ArraysOfArticle.map((article) => {
            if (article.id == articleId) {
                passe = false
                toastr.error("Erreur", 'Article déja exist', { timeOut: 4000 })

                // alert('Article déja exist');
            }
        })
        if (passe) {
            // alert('test passe');
            ArraysOfArticle.push({
                'id': articleId,
                'name': articleName,
                'quantityDisponible': quantityDisponible,
                'quantitty': quantitty,
            });
            $(".appendElement").remove();
            let html;
            ArraysOfArticle.forEach((article, i) => {
                html += `<tr class="appendElement">
                
                <td> ${i+1}</td>
                <td> ${article.name} </td>
                <td class="quantity_input">
                    ${article.quantitty}
                </td>
                <td> 
                    <a style="padding: 7px ;" data-id="${article.id}" class="editArticle btn-icon-detail btn btn-white btn-warning btn-outline  btn-xs my-button2 upper waves-effect waves-light"> 
                        <i class=" fa  fa-edit" aria-hidden="true"></i>
                     </a> 
                    <a style="padding: 7px ;" data-id="${article.id}" class="deleteArticle btn-icon-detail btn btn-white btn-danger btn-outline  btn-xs my-button2 upper waves-effect waves-light"> 
                        <i class=" fa  fa-trash" aria-hidden="true"></i>
                     </a> 
                </td>
                <tr>`
            })

            $(".article_disponible_Rc").prepend(html);
            $(".article_disponible").prepend(html);
        }
    }

})
$('body').on('click', '.deleteArticle', function() {
    var element = $(this).parent().parent();
    console.log(element);
    var id = $(this).attr("data-id");
    let NewArray = ArraysOfArticle.filter((article) => {
        return article.id != id
    });
    ArraysOfArticle = NewArray;
    element.remove();
    console.log(ArraysOfArticle);
})
$('body').on('click', '.editArticle', function() {
    var id = $(this).attr('data-id');
    var element = $(this).parent().parent().find(".quantity_input")
    var article = ArraysOfArticle.find((article) => article.id == id);
    element.html(`<input type="number" data-id="${article.id}" value="${article.quantitty}" class=" quantity_update form-control form-control-sm">`)
    console.log(ArraysOfArticle)
})
$('body').on('keyup', '.quantity_update', function(e) {
    var id = $(this).attr('data-id');
    var quantitty = $(this).val();
    if (e.which == 13) {
        var article = ArraysOfArticle.findIndex(article => article.id == id);
        if (ArraysOfArticle[article].quantityDisponible >= +quantitty && +quantitty > 1) {
            ArraysOfArticle[article].quantitty = quantitty
            $(this).parent().html(quantitty)
        } else {
            $("body .alreadyQuantity").show();
            // alert('Priere d\'entre une valeur moin ou egale ' + ArraysOfArticle[article].quantityDisponible);
            toastr.error('Priere d\'entre une valeur moin ou egale ' + ArraysOfArticle[article].quantityDisponible, "Erreur",  { timeOut: 4000 })

        }
    }

})



$("#mouve_stock").on('click', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        return false;
    }
    e.preventDefault();
    var l = Ladda.create(document.activeElement);
    l.start();
    let data = new FormData();
    data.append('antenne_source', $(".antenne_source :selected").val());
    data.append('antenne_destination', $(".antenne_destination :selected").val());
    data.append('type_mouvement', $(".type_mouvement :selected").val());
    data.append('articles', JSON.stringify(ArraysOfArticle));
    $.ajax({
        type: 'POST',
        url: Routing.generate('transfer_stock'),
        data: data,
        processData: false,
        contentType: false,
        success: function(result) {
            var id = JSON.parse(result);
            console.log(id);
            toastr.success('Mouvement de stock a été bien effectué .', 'Succées', { timeOut: 4000 })
            l.stop();
            window.open('/stock/umouvementcab/show/' + id, "_self")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            l.stop();
        }
    });

})
$("#anuller_stock").on('click', function(e) {
    var l = Ladda.create(document.activeElement);
    l.start();
    var id = $(this).attr('data-id');
    let data = new FormData();
    data.append('id', id);
    $.ajax({
        type: 'POST',
        url: Routing.generate('anuller_stock'),
        data: data,
        processData: false,
        contentType: false,
        success: function(result) {
            toastr.success('Mouvement de stock a été bien anuller .', 'Succées', { timeOut: 4000 })
            $("#anuller_stock").remove();
            $("#valider_stock").remove();
            l.stop();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            l.stop();
        }
    });

})
    $("#valider_stock").on('click', function(e) {
    var l = Ladda.create(document.activeElement);
    l.start();
    var id = $(this).attr('data-id');
    let data = new FormData();
    data.append('id', id);
    $.ajax({
        type: 'POST',
        url: Routing.generate('valider_stock'),
        data: data,
        processData: false,
        contentType: false,
        success: function(result) {
            toastr.success('Mouvement de stock a été bien enregistre .', 'Succées', { timeOut: 4000 })
            $("#anuller_stock").remove();
            $("#valider_stock").remove();
            l.stop();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            l.stop();
        }
    });
})


// let antenneId = null;
// $(".header_antenne").on('click', function(){
//     antenneId = $(this).attr('id');
// })
$("._detail").on("click", function(e) {
    e.preventDefault();
    let antenne = $(this).attr('id');
    
    $.ajax({
        type: 'GET',
        url: Routing.generate('get_antenne_mouvement_stock', {antenne}),
        processData: false,
        contentType: false,
        success: function(result) {
            // toastr.success('Mouvement de stock a été bien enregistre .', 'Succées', { timeOut: 4000 })
            $("#detail_modal .modal-body").html(result);
            $("#detail_modal .modal-body table").dataTable({
                language: {
                    url: Routing.generate('datatables_langue'),
                    processing: true
                }
            });
            $("#detail_modal").modal("show")

            // $("#anuller_stock").remove();
            // $("#valider_stock").remove();
            // l.stop();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            // l.stop();
        }
    });
})
$('body').on('click','#exp_sortie', function() {
    // e.preventDefault();
    let antene = $('#exp_date').attr('data-id');
    let date = $('#exp_date').val();
    // console.log(antene ,date )
    window.open('/stock/lextraction_Sortie/'+antene+'/'+date, '_blank');

});
$('body').on('click','#exp_entrer', function() {
    // e.preventDefault();
    let antene = $('#exp_date').attr('data-id');
    let date = $('#exp_date').val();
    // console.log(antene ,date )
    window.open('/stock/lextraction_Entree/'+antene+'/'+date, '_blank');

});