
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";

Routing.setRoutingData(routes);


global.$ = $;

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

//var l = Ladda.create(document.querySelector('.my-button'));
var table2 = $('#grid2').DataTable({
    ajax: {
        url: Routing.generate('operation_client_list'), // json datasource
        type: "get",
        beforeSend: function() {
            if (table.hasOwnProperty('settings')) {
                var settings = table.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        }
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],

    "columns": [
        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },

        { "orderable": true, "width": "10px", "targets": 0 },

        { "orderable": true, "width": "10px", "targets": 0 },

        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },


    ],
    "order": [[0, "desc"]],
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

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('operation_fournisseur_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },

        { "orderable": false, "width": "10px", "targets": 0 },

        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },



    ],
    "order": [[0, "desc"]],
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

table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 2, 5,9], []);
    CustomSearchDatatable.CustomSearchDate(api, [4, 8,10], []);
    CustomSearchDatatable.CustomSearchSelect(api, [3, 6, 7,], []);
    //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});


$("#allactions").change(function (e) {
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

$('body').on('change', '.action', function () {

    $("#valid").css("display", "block");

});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('t_r_comptes_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});






jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succees", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), { timeOut: 4000 })
    }
});
jQuery.each($('.form-errors li'), function (i, val) {
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), { timeOut: 4000 })
}


$("#valid").change(function (e) {
    //  alert($(this).val());
    //$("form").submit();
    if ($(this).val() == 1) {

        var form_name = $('#action_test').attr('name');
        var dta = new FormData(action_test);
        //var dta = $('#action_test').serialize()
        var t = dta.get("_action[]");
        // alert(dta.get("_action[]"));
        var selector = $(this).attr('class').split(' ')[0];
        // console.log(e.type);
        // var t=1;
        if (t) {

            $.ajax({
                type: 'POST',
                url: Routing.generate('operation_fournisseur_valider_multiple'),
                data: dta,
                processData: false,
                contentType: false,
                success: function (result) {
                    //console.log(result);
                    if (result.code == 403) {
                        toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })

                    } else {
                        $(".bod").html(result).hide();
                        $("#ModalDocumentDynamique").modal("show");
                        setTimeout(function () {
                            $(".spr").hide();
                            $(".bod").fadeIn();
                        }, 600);
                        // table2.ajax.reload();
                        //toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        $("#valid").css("display", "none");
                       // $(".action").prop("checked", false);
                       // $("#allactions").prop("checked", false);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                }
            });

        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
        }

    }



    e.preventDefault();


});



$(".bod").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);

    var l = Ladda.create(document.querySelector(".button-save-charge"));
    var goto = 0;
    // alert();
    l.start();
    //  var id = $("#test").data("serviceId");
    var obj = new Object();
    obj["route"] = "operation_fournisseur_valider_multiple";
    obj["data"] = dta;
    obj["parametre"] = null;
    obj["l"] = l;
    obj["form_name"] = form_name;
    obj["selector"] = selector;
    obj["reloadTable"] = true;
    obj["modal"] = true;
    obj["hideModule"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    obj["autoTrigger"] = goto;
    obj["triggerClass"] = "add";
    obj["ShowFormErrors"] = ShowFormErrors;
    autoFunctionAjax.autoAjaxRenderController(obj);
    $("#valid").css("display", "none");
    e.preventDefault();
});





//$('body').on('change', '.paiement', function (e) {

$("#tr_charge_modepaiement").change(function (e) {
   // alert();

   
    e.preventDefault();


    //  console.log($(this).val());
})

$('body').on('change', '.paiement', function () {
    //alert($(this).val());
    if ($(this).val() == 2) {
        $('.bloc_cheque').show();
        
    } else {
        $('.bloc_cheque').hide();
    }
   // $("#valid").css("display", "block");

});