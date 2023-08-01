
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




var tr_alimentation_list_index = $('#grid_index_depot_retrait').DataTable({
    ajax: {
        url: Routing.generate('tr_alimentation_list_index'), // json datasource
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
        { "width": "12%"},
        {"width" : "12%"},
        {"width" : "12%"},
        {"width" : "12%"},
        {"width" : "12%"},
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
  // let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
  CustomSearchDatatable.CustomSearchDate(api, [4], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2], []);
});



var table_consolide = $('#grid_consolide').DataTable({
    ajax: {
        url: Routing.generate('tr_compte_consolides_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": false,
    "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
    pageLength: 15,
    // "columns": [
    //     // {"searchable": true, "width": "3%", "targets": [0]},
    //     { "width": "20%"},
    //     { "width": "20%"},
    //     { "width": "12%"},
    //     {"width" : "12%"},
    //     {"width" : "12%"},
    //     {"width" : "12%"},
    //     {"width" : "12%"},
    // ],

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

table_consolide.on("init.dt", function (e, settings) {
  // let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
  CustomSearchDatatable.CustomSearchDate(api, [4], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2], []);

});


// alert('ziko');
var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('tr_alimentation_list'), // json datasource
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
        { "width": "12%"},
        { "width": "12%"},
        { "width": "12%"},
        {"width" : "12%"},
        {"width" : "12%"}
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



// var row = ['', 'testing' , 'testing','testing','testing','testing','testing','testing'];
//     table.row.add(row).draw(false);
//     table.order([1, 'asc']).draw();
//     table.page('current').draw(false);

table.on("init.dt", function (e, settings) {
//   let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
  CustomSearchDatatable.CustomSearchDate(api, [4], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2], []);

});


/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('tr_alimentation_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});



/*

$('.new').on('submit', '.form', function (e) {
   /// alert('add');

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);


    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.button-save-add-alimentation'));
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('tr_alimentation_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();


            if (result.errors) {
                //dump(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            } else {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                var url = Routing.generate("tr_alimentation_index");
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});*/

function  apres_operation(){
    var Montant = $('.pa_montant').val();
    console.log(Montant);
    var piece = $('.piece').val();

    var formData = new FormData();
    formData.append('Montant', Montant);
    formData.append('piece', piece);

    $.ajax({
      type: 'POST',
      url: Routing.generate('consolide_apres_operation'),
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
          // console.log(result);
          $('.compte_conso_apres').val(result.sold_conso);
          $('.compte_placement_apres').val(result.mt_placement);
          $('.Manotant_valorise_apres').val(result.mt_placement);
          var total_conso =  result.sold_conso + result.mt_placement;
          $('.total_conso_apres').val(total_conso);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {timeOut: 4000})
      }
  });
}


$(".pa_montant").keyup(function(){
    
    apres_operation();

});
$(".piece").change(function(){
    
    apres_operation();

});


// alert('ziko');
// $(".sites").change(function (e) {

//       var idDossier = $('.sites').val();

//       var formData = new FormData();
//       formData.append('idDossier', idDossier);

//       $.ajax({
//         type: 'POST',
//         url: Routing.generate('get_compte_banque'),
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function (result) {
//             // console.log(result);
//             $('.compteBanque').html(result.select);
//             $('.compte_conso').val(result.sold_conso);
//             $('.compte_placement').val(result.mt_placement);
//             $('.montant_valorise').val(result.mt_placement);
//             var total_conso =  result.sold_conso + result.mt_placement;
//             $('.total_conso').val(total_conso);
//             $('.tresorerie_total').val(parseFloat(result.total_mt_final) + parseFloat(total_conso));
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             toastr.error("Erreur", errorThrown, {timeOut: 4000})
//         }
//     });

// });

// alert('ziko');


$(".compteBanque").change(function (e) {

    var idCompte = $('.compteBanque').val();

    var formData = new FormData();
    formData.append('idCompte', idCompte);

    $.ajax({
      type: 'POST',
      url: Routing.generate('get_infos_compte'),
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {

          $('.site_compte').val(result.compte);

          if(result.T_Depot != false){
            $('.depot_compte').val(result.T_Depot);
          }else{
            $('.depot_compte').val(0);
          }
          
          if(result.T_Retrait != false){
            $('.retrait_compte').val(result.T_Retrait);
          }else{
            $('.retrait_compte').val(0);
          }
          
          
          $('.solde').val(result.sold_conso);
          $('.solde_csb').val(result.montant_final);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {timeOut: 4000})
      }
    });


});


// create_placement_conso

$("#create_placement_conso").click(function (e) {

    var form_name = $(".form").attr("name");





    var formData = new FormData();
    var params = $('.form').serializeArray();

    $.each(params, function (i, val) {
        formData.append(val.name, val.value);
        //  console.log(val.name);

    });

    var selector = $(".form");
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_compte_consolides_new"),
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
                var url = Routing.generate('tr_compte_consolides_index');
                window.location.href = url;
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

// create_placement_conso





$("#create_alimentation").click(function (e) {
    var form_name = $(".form").attr("name");





    var formData = new FormData();
    var params = $('.form').serializeArray();

    $.each(params, function (i, val) {
        formData.append(val.name, val.value);
        //  console.log(val.name);

    });


  

    var selector = $(".form");
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_alimentation_new"),
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
                var url = Routing.generate('tr_alimentation_first_index');
                window.location.href = url;
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

$('.edit').on('submit', '.form', function (e) {
   /// alert('edit');
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);


    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.button-save-add-alimentation'));
    l.start();

    $.ajax({
        type: 'POST',
       // url: Routing.generate('tr_alimentation_edit'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();


            if (result.errors) {
                //dump(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            } else {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});

$(".pa_valeurAchatUnitaire").on('keyup', function() {
    let pa_valeurAchatUnitaire = $(this).val();
    let quantite = $(".pa_quantite").val();
    let valeur_achat_total = pa_valeurAchatUnitaire * quantite
    $(".valeur_achat_total").val((pa_valeurAchatUnitaire * quantite).toFixed(2));
    let valeur_vente_total = $(".valeur_vente_total").val()

    if(!isNaN(valeur_vente_total)) {
        $('.marge_operation_total').val(valeur_vente_total - valeur_achat_total)
        $('.marge_operation_unitaire').val(($(".pa_valeurVenteUnitaire").val() - pa_valeurAchatUnitaire).toFixed(2))
    }
})

$(".pa_valeurVenteUnitaire").on('keyup', function() {
    let pa_valeurVenteUnitaire = $(this).val();
    let quantite = $(".pa_quantite").val();
    let valeur_vente_total = pa_valeurVenteUnitaire * quantite
    $(".valeur_vente_total").val(valeur_vente_total.toFixed(2));
    let valeur_achat_total = $(".valeur_achat_total").val()

    if(!isNaN(valeur_achat_total)) {
        $('.marge_operation_total').val((valeur_vente_total - valeur_achat_total).toFixed(2))
        $('.marge_operation_unitaire').val((pa_valeurVenteUnitaire - $(".pa_valeurAchatUnitaire").val()).toFixed(2))
    }
})

let code_bq = null

$("body").on('click', '.gain_perte_valeur', function(e) {
    e.preventDefault();
    code_bq = $(this).attr('data-id');
    $("#gain_perte").modal('show');
})

$("#gain_perte_submit").on('submit', function(e){
    e.preventDefault();
    var l = Ladda.create(document.activeElement);
    l.start();
    var formData = new FormData($(this)[0]);
    formData.append('code_bq', code_bq);
    $.ajax({
        type: 'POST',
       url: Routing.generate('consolide_ajouter_valeur_marge'),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });

})

// $("#u_general_operation_typeCompte").change(function (){

//     // alert('ziko');

//     var type = $(this).val();
//     var idDossier = $('.sites').val();

//     var formData = new FormData();
//     formData.append('idDossier', idDossier);
//     formData.append('type',type);

//     $.ajax({
//         type: 'POST',
//         url: Routing.generate('getBnaque'),
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function (result) {

//             // console.log(result);
//             $('.compteBanque').html(result.select);

//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             toastr.error("Erreur", errorThrown, {timeOut: 4000})
//         }
//     });


// });


