const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import { warning } from 'toastr';

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




var tr_alimentation_list_index = $('#grid_index_depot_retrait').DataTable({
    ajax: {
        url: Routing.generate('compte_caisse_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": false,
    "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
    pageLength: 15,
    "columns": [
        {"searchable": true, "width": "3%", "targets": [0]},
        { "width": "20%"},
        { "width": "20%"},
        { "width": "20%","className":"text-right"},
        {"width" : "20%"},
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

tr_alimentation_list_index.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
  CustomSearchDatatable.CustomSearchDate(api, [4], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2], []);
});


let montant_initial = null;
let montant_site_initial = null;
$("body").on('click' ,".new_operation_button", function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: "POST",
        url: Routing.generate("compte_caisse_new", {"dossier": id}),
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $("#new_operation .spr1").hide();
            $("#new_operation .bod1").html(result).show();

            // $("#new_operation #montant_site_caisse").val(result.compte.montantFinal)
            // $("#new_operation #montant_caisse_total").val(result.montant_caisse_total)
            // $("#new_operation #montant_caisse_virtuelle").val(result.compteDossierCourantVirtuelle.montantFinal)
            // $("#new_operation #montant_caisse_caisse").val(result.compteDossierCourantPhysique.montantFinal)
            // $("#new_operation #compteBanque").append(`<option value="${result.compte.id}">${result.compte.designation}</option>`)
            // $("#new_operation #site").append(`<option value="${result.dossier.id}">${result.dossier.description}</option>`)
            // $("#new_operation #ccp").append(`<option value="${result.compteDossierCourantPhysique.id}">${result.compteDossierCourantPhysique.designation}</option>`)


            $("#new_operation").modal("show")
            
            montant_initial = null;
            montant_site_initial = null;
           
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });

});


$("body").on("click", "#create_caisse", function (e) {
    var form_name = $(".form").attr("name");





    var formData = new FormData();
    var params = $('body #new_caisse_operation').serializeArray();

    $.each(params, function (i, val) {
        formData.append(val.name, val.value);
    });


  

    var selector = $("#new_caisse_operation");
    var l = Ladda.create(document.querySelector("body .my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("compte_caisse_store"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            // alert(result.code);
            if(result.code == 403){
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            }
            
            else if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
               // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                // var url = Routing.generate('compte_caisse_index');
                // window.location.href = url;
                $("#new_operation .spr1").show();
                $("#new_operation .bod1").empty().hide();
                $("#new_operation").modal("hide");
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});


$("body").on("keyup", "#u_general_operation_montant", function(){
    var montant = $(this);
    var montant_caisse_caisse = $('#montant_caisse_caisse');
    if(montant_initial == null) {
        montant_initial = montant_caisse_caisse.val()
    }
    if(montant_site_initial == null) {
        console.log(montant_site_initial);
        montant_site_initial = +$("#montant_site_caisse").val()
        console.log(montant_site_initial);
    }
    if((montant_initial - montant.val()) < 0) {
        montant.val(
            montant_initial
            )
        montant_caisse_caisse.val(0)
        toastr.warning("Vous passer le montant que vous aves dans la caisse !", "warning", {timeOut: 4000})

    } else {
        montant_caisse_caisse.val(montant_initial - montant.val());
    }    
    totalChange()
})

function totalChange() {
    
    var montant_caisse_caisse = $("#montant_caisse_caisse").val();
    var montant_caisse_virtuelle = $("#montant_caisse_virtuelle").val() 
    $("#montant_caisse_total").val(+montant_caisse_caisse + +montant_caisse_virtuelle)
    // $("#montant_caisse_total").val(+montant_caisse_caisse + +montant_caisse_virtuelle)
    $("#montant_site_caisse").val(montant_site_initial + +$("#u_general_operation_montant").val() )
}