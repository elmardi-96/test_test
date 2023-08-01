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
        url: Routing.generate('us_module_list') + location.search, // json datasource
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
        {"width": "8%", "orderable": true },
    ],
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

 var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix dossiers",
    allowClear: true
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

$('.new-article-btn').click(function (e) {
    $('.edit-new-article').show();
    $(this).hide();
    e.preventDefault();
});
$('.show-me').click(function (e) {
    $(".actions").toggleClass('sidebar-open')
    e.preventDefault();
})

$('.actions').on('click', '.close-me', function (e) {
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

$('#_affecter').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {

        var url = Routing.generate('us_module_affecter', { 'id': id });
        window.location.href = url;
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }

    e.preventDefault();
});