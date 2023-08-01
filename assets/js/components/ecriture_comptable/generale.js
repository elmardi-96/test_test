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



// alert('test');

$("select").select2()

var table = $("#grid").DataTable({
    ajax: {
      url: Routing.generate("ecriture_comptable_comptabilite_generale_list"), // json datasource
      type: "get",
    },
    deferRender: true,
    serverSide: true,
    order: [[0, "desc"]],
    columns: [
        {orderable: true,  name: 'piece.id' , width: "5%"},
        {orderable: true,  name: 'piece.code', width: "8%"},
        {orderable: true,  name: 'piece.partenaire', width: "8%"},
        {orderable: true,  name: 'piece.dossier', width: "17%"},
        {orderable: true,  name: 'piece.date', width: "8%"},
        {orderable: false,  name: 'piece.observation_operation',searchable:false, width: "17%"},
        {orderable: true,  name: 'piece.brd', width: "8%"},
        {orderable: true,  name: 'piece.montant', width: "8%" ,className: 'td-number pd-fac'},
        {orderable: false,  name: 'piece.precomptabliser',searchable:false,  width: "2%"},
        {orderable: false,  name: 'piece.valide',searchable:false, width: "2%"},
        {orderable: false,  name: 'piece.rejeter',searchable:false, width: "2%"},
        {orderable: true,  name: 'piece.motif', width: "15%"},
        {orderable: false, name: 'piece.id', visible: false, searchable:false},
      
    ],
    lengthMenu: [
      [10, 15, 25, 50, 100, 200],
      [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 15,
   
    language: {
      url: Routing.generate("datatables_langue"),
      processing: true,
    },
    // fixedHeader: true,
  });

$("#tpyePiece").on('change', function() {
    var val = $(this).val();
    if(val != "") {
        table.columns(12).search(val).draw();
    }
})
$("body").on('keypress', '#id_piece', function(e) {
    let idPiece = $(this).val();
   
    if(e.which == 13)  {
        // alert(typePiece, idPiece)
        if(idPiece == "") {
            toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
            return;
        }
        // var l = Ladda.create(document.activeElement);
        // Start loading
        $.ajax({
            type: "GET",
            url: Routing.generate("ecriture_comptable_operation_getecriturecomptable", {"idPiece": idPiece.trim(), "type" : "generale"}),
            processData: false,
            contentType: false,
            success: function (result) {
    
                $("#content").html(result);
    
                $("#content #grid_index").dataTable({
                    language: {
                        url: Routing.generate("datatables_langue"),
                        processing: true,
                    },
                });
                $("#content #grid_details").dataTable({
                    language: {
                        url: Routing.generate("datatables_langue"),
                        processing: true,
                    },
                });
    
                $("#ModalDocumentDynamiqueShow").modal('show')
                $("#send_adonix").addClass('disabled')
                
                
                
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            },
        });
    }
  
})
$("body").on('click', '#executer', function() {

    let idPiece = $("#id_piece").val();
    // alert(typePiece, idPiece)
    if(idPiece == "") {
        toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
        return;
    }
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: "GET",
        url: Routing.generate("ecriture_comptable_operation_getecriturecomptable", {"idPiece": idPiece.trim()}),
        processData: false,
        contentType: false,
        success: function (result) {

            $("#content").html(result);

            $("#content #grid_index").dataTable({
                language: {
                    url: Routing.generate("datatables_langue"),
                    processing: true,
                },
            });
            $("#content #grid_details").dataTable({
                language: {
                    url: Routing.generate("datatables_langue"),
                    processing: true,
                },
            });
            l.stop();

            // $("#send_adonix").removeClass('disabled')
            $("#send_adonix").addClass('disabled')
            
            
            
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            l.stop();
        },
    });
})
$("body").on('click', '.validation', function() {
    if($('.validation:checked').length == 3) {
        $("#send_adonix").removeClass('disabled')
    } else {
        $("#send_adonix").addClass('disabled')
    }
})
$("body").on('click', '#send_adonix', function() {
    let idPiece = $("#id_piece").val();
    // alert(typePiece, idPiece)
    if(idPiece == "") {
        toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
        return;
    }
    // var l = Ladda.create(document.activeElement);
    // Start loading
    // l.start();
    $.ajax({
        type: "GET",
        url: Routing.generate("ecriture_comptable_operation_getecriturecomptable_send", {"idPiece": idPiece.trim()}),
        processData: false,
        contentType: false,
        success: function (result) {
            // l.stop();
            toastr.success("Success", result, {timeOut: 4000});

            // removeFactureFromTable();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            // l.stop();
        },
    })
})
$("body").on('click', '#valider', function() {
    let idPiece = $("#id_piece").val();
    if(idPiece == "") {
        toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
        return;
    }
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: "GET",
        url: Routing.generate("ecriture_comptable_operation_getecriturecomptable_valider", {"idPiece": idPiece.trim()}),
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            toastr.success("Success", result, {timeOut: 4000});
            // removeFactureFromTable();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            l.stop();
        },
    })
})




// $("body").on('click', '#precomptabiliser', function() {

$( "#precomptabiliser" ).click(function() {
    let idPiece = $("#id_piece").val();
    if(idPiece == "") {
        toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
        return;
    }
   
    $.ajax({
        type: "GET",
        url: Routing.generate("ecriture_comptable_operation_getecriturecomptable_precomptabiliser", {"idPiece": idPiece.trim()}),
        processData: false,
        contentType: false,
        success: function (result) {
            // l.stop();
            toastr.success("Success", result, {timeOut: 4000});

        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            l.stop();
        },
    })
})




$("body").on('click', '#rejeter', function() {
    let idPiece = $("#id_piece").val();
    if(idPiece == "") {
        toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
        return;
    }
    $("#ModalDocumentDynamiqueValider").modal("show")
})
$("body").on('click', '#observation_rejeter_valider', function() {
    let idPiece = $("#id_piece").val();
    if(idPiece == "") {
        toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
        return;
    }
    var formData = new FormData();
    formData.append("observation_rejeter", $("#observation_rejeter").val());
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("ecriture_comptable_operation_getecriturecomptable_rejeter", {"idPiece": idPiece.trim()}),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            toastr.success("Success", result, {timeOut: 4000});

            $("#ModalDocumentDynamiqueValider").modal("hide")

            // removeFactureFromTable();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            l.stop();
        },
    })
})
