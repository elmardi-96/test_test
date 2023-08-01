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
const Swal = require('sweetalert2');
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle',
  },
  buttonsStyling: false,
});

let dossier = "";
let radiosigner = $('.radiosigner:checked').val();

console.log("radiosigner");
$('body').on('change', '#usmodel',  function () {
  let id = $(this).val()
  $.ajax({
    type: 'GET',
    url: Routing.generate('getSousModuleByDossierAndModule', {'module': id, 'dossier': $('#dossier').val()}),
    processData: false,
    contentType: false,
    success: function (result) {
      $("#sous_model").html(result);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
    },
  });
});

var module_id ;
$('body').on('click', '.module',  function () {
    module_id = $(this).attr('id');
});

var sous_module_id;
var dossierMod;
function nombre_signer_nosigner(sous_module_id,dossierMod ){
   if(!dossierMod){
    dossierMod="tout"
   }
  $.ajax({
    type: 'GET',
    url: Routing.generate('nombre_signer_nosigner', {'sousModule': sous_module_id, 'dossier': dossierMod}),
    processData: false,
    contentType: false,
    success: function (result) {
        // alert(tr_alimentation_list_index.data().count())
        $(".radiosasigner_count").text(result.totalRecordsASigne)
        $(".radioseninstance_count").text(result.totalRecordsNoSigne)
        $(".modul"+sous_module_id).text(result.sideNoSigne)
        
      $(".extraction").attr('href', "/signature/export/"+sous_module_id)
      $(".extraction_detail").attr('href', "/signature/export/detail/"+sous_module_id)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
    },
  });
 
  return;

}
function doc_module_nosigner(sous_module_id){
   
  $.ajax({
    type: 'GET',
    url: Routing.generate('doc_module_nosigner', {'sousModule': sous_module_id}),
    processData: false,
    contentType: false,
    success: function (result) {
        // alert(tr_alimentation_list_index.data().count())
        $("#dossier").html(result)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
    },
  });
 
  return;

}

$('body').on('click', '.sous-module',  function () {
  
  // alert(  $(this).attr('id') );
  $(".msg_rubrique").css("display", "none");
  $(".table_rubrique").css("display", "block");
  // console.log('najim');
  sous_module_id =  $(this).attr('id') ;
  // dossierMod= $('#dossier').val();
  dossierMod= "tout";
  $(".sous-module").removeClass('active')
  $(this).addClass('active')

  if(sous_module_id != ""){
    // console.log(dossierMod);
    nombre_signer_nosigner(sous_module_id,dossierMod);
    doc_module_nosigner(sous_module_id);
    tr_alimentation_list_index.column(0).search(sous_module_id+"-"+dossierMod).draw();
    
  }
  // tr_alimentation_list_index.column(0).search("").draw();
    
    
    
   
});



$('body').on('change', '#dossier',  function () {
  let id = $(this).val()
  dossierMod= $('#dossier').val();
  if(sous_module_id != ""){
    tr_alimentation_list_index.column(0).search(sous_module_id+"-"+$('#dossier').val()).draw();
    nombre_signer_nosigner(sous_module_id,$('#dossier').val());
    return;
  }
  tr_alimentation_list_index.column(0).search("").draw();
  
  // $.ajax({
  //   type: 'GET',
  //   url: Routing.generate('getModuleByDossierAndUser', {'dossier': id}),
  //   processData: false,
  //   contentType: false,
  //   success: function (result) {
  //     $("#usmodel").html(result);
  //   },
  //   error: function (jqXHR, textStatus, errorThrown) {
  //     toastr.error('Erreur', errorThrown, { timeOut: 4000 });
  //   },
  // });
  
});



// $('#usmodel').on('change', function () {
//   var usmodel_id = $(this).val();
// //alert(usmodel_id);
//   $.ajax({
//       url: "/signature/usmodel",
//       method: 'POST',
//       data: {usmodel_id: usmodel_id},
//       success: function (result) {
//       $("#sous_model").empty().html(result)

//       }
//   });
// });
// $('#Filter').on('change', function () {
//   var usmodel_id = $(this).val();
// alert(usmodel_id);
//   $.ajax({
//       url: "/signature/Filter",
//       method: 'POST',
//       data: {usmodel_id: usmodel_id},
//       success: function (result) {
//       $("#sous_model").empty().html(result)

//       }
//   });
// });

// alert('test');

var tr_alimentation_list_index = $('#signature').DataTable({
  ajax: {
      url: Routing.generate('sigature_list'), // json datasource
      type: "get"
  },
  "serverSide": true,
  // "scrollX": true,  
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200], [15, 25, 50, 100, 200]],
  "pageLength": 15,
  "order": [
      [8, "desc"]
  ],
  
  'columnDefs': [{
    'targets': 0,
    'searchable': false,
    'orderable': false,
    'className': 'dt-body-center',
    'render': function (data, type, full, meta){
        return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
    }
 }],
//   'columnDefs': [
//     {  'orderable': false,
//        'className': 'select-checkbox',
//        'targets': 0,
//        'render': function(data, type, row, meta){
//           if(type === 'display'){
//              data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>';
//           }

//           return data;
//        },
//        'checkboxes': {
//           'selectRow': true,
//           'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'
//        }
//     }
//  ],
 'select': 'multi',
  "columns": [
    { searchable: true, width: '3%', targets: [0] , name:"cab.id"},
    { width: '5%', name:"cab.id" },
    { width: '5%' , name:"Dossier"},
    { width: '20%', name:"code"},
    { width: '5%', name:"date"},
    { width: '5%', name:"cab.position_actuel"},
    { width: '5%', name:"user.nom"},
    { width: '20%', name:"description"},
    { width: '20%', name:"pp.societe"},
    { width: '5%', name:"montant"},
    { orderable: false,width: '5%', name:"status"},
    { orderable: false, width: '5%' },
  ],
  // "initComplete": function(setting, json) {
  //   // alert(tr_alimentation_list_index.data().count())
  // },
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

  // "drawCallback": function( settings ) {
  //   if(radiosigner=="radiosasigner") {
  //     // alert(tr_alimentation_list_index.data().count())
  //     $(".radiosasigner_count").text(tr_alimentation_list_index.page.info().recordsTotal)
  //     $(".radioseninstance_count").text(0)
  //   } else {
  //     $(".radiosasigner_count").text(0)
  //     $(".radioseninstance_count").text(tr_alimentation_list_index.page.info().recordsTotal)
  //   }
  // },
  "language": {
      "url": Routing.generate('datatables_langue'),
      "processing": true
  },

});

 // Check if select All button is checked set checked class to all rows in table page
 $('body').on('click', '#select_all', function(){
  
  if($(this).prop('checked')){
    $('#signature > tbody > tr').each(function(index, tr) {
      var input = $(tr).find('td:eq(0) > input').not(':disabled')
        input.addClass('checked')
    })
  }
  else{
    $('#signature > tbody > tr').each(function(index, tr) {
      var input = $(tr).find('td:eq(0) > input').not(':disabled')
        input.removeClass('checked')
    })
  }

  // Get all rows with search applied
  var rows = tr_alimentation_list_index.rows({ 'search': 'applied' }).nodes();
  // Check/uncheck checkboxes for all rows in the table
  $('input[type="checkbox"]:not(:disabled)', rows).prop('checked', this.checked);
  
});

// Handle click on checkbox to set state of "Select all" control 
$('body #signature tbody').on('change', 'input[type="checkbox"]:not(:disabled)', function(){
  // If checkbox is not checked
  if(!this.checked){
     var el = $('#select_all').get(0);
     // If "Select all" control is checked and has 'indeterminate' property
     if(el && el.checked && ('indeterminate' in el)){
        // Set visual state of "Select all" control
        // as 'indeterminate'
        el.indeterminate = true;
     }
  }
});

//Handle checkbox in row if hasClass checked then remove is else add it
$('body').on('click', '.check', function(){
  if($(this).hasClass('checked')){
    $(this).removeClass('checked')
  }
  else{
    $(this).addClass('checked')
  }
})



tr_alimentation_list_index.on("init.dt", function (e, settings) {
let api = new $.fn.dataTable.Api(settings);
let st = api.state.loaded();
let data = api.data();
CustomSearchDatatable.CustomSearchText(api, [1, 3, 5 ,6], []);
CustomSearchDatatable.CustomSearchDate(api, [4], []);
CustomSearchDatatable.CustomSearchSelect(api, [2], []);
$(".radiosasigner_count").val(tr_alimentation_list_index.data().count())

});
$('body').on('change', '#sous_model',  function () {
  let id = $(this).val()
  if(id != ""){
    tr_alimentation_list_index.column(0).search(id+"-"+$('#dossier').val()).draw();
   
    return;
  }
  tr_alimentation_list_index.column(0).search("").draw();
});
$('body').on('change', '#filter',  function () {
  
  let id = $(this).val()
  if(id != ""){
    tr_alimentation_list_index.column(1).search(id).draw();
    return;
  }
  tr_alimentation_list_index.column(1).search("").draw();
});
let permission = false
$('body').on('click', '.radiosigner',  function () {
  radiosigner = $(this).val()
  // alert(radiosigner)
    // alert('cccc')
    // $(".radiosignerlabel").removeClass("font-weight-bold");
  if (radiosigner == "radiosasigner") {
    // alert('test')
    permission = false;
    $(".radioseninstancelabel").removeClass("font-weight-bold");
    $(".radiosasignerlabel").addClass("font-weight-bold");
    tr_alimentation_list_index.column(2).search(radiosigner).draw();
  }else{
    permission = true
    $(".radiosasignerlabel").removeClass("font-weight-bold");
    $(".radioseninstancelabel").addClass("font-weight-bold");
    // $("#radiosignerlabel").css("font-weight","lighter !important");
    // $("#radioseninstancelabel").css("font-weight","bold !important");
    tr_alimentation_list_index.column(2).search(radiosigner).draw();
  }
  if(radiosigner != ""){
    tr_alimentation_list_index.column(2).search(radiosigner).draw();
    return;
  }

  tr_alimentation_list_index.column(2).search("").draw();
});


$("body").on('click',".detail_button", function(e)  {
  // alert($('#dossier').val());
  e.preventDefault();
  let id = $(this).attr('data-id');
  $.ajax({
    type: 'GET',
    url: Routing.generate('signature_details', {'demande': id, 'sousModule': sous_module_id}),
    processData: false,
    contentType: false,
    success: function (result) {
      $(".bod1").html(result).show();
      $(".spr1").hide();
      $("#lettrage").modal("show")
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
    },
  });
  
})

let demandesachat = [];
// $('body').on('click', '.checked ', function () {
//   const input = $(this);
//   // console.log(input.attr('data-id'));
//   if (input.is(':checked')) {
//     demandesachat.push(input.attr('data-id'));
//   } else {
//     const index = demandesachat.indexOf(input.attr('data-id'));
//     demandesachat.splice(index, 1);
//   }
// });
$('.select2').select2()
$('body').on('click', '.signature', function (e) {
  
  
  const icon = $('.signature i')
   
  // if (permission) {
  //   alert('true')
  // }else{
  //   alert('false')
  // }
  // return
  demandesachat = [];
  
  $('#signature > tbody > tr').each(function(index, tr) {     
    var idRow = $(tr).attr('id') 
    var isChecked = $(tr).find('td:eq(0) > input').hasClass('checked')
     
    if(isChecked){
      demandesachat.push(idRow);
    }
    
  });
  
  if (demandesachat.length > 0 && $('#dossier').val() != '') {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Valider cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          icon.removeClass('fa-user-pen').addClass('fa-spinner fa-spin')
          $('.signature').addClass('disabled').attr('disabled', true)
          let dta = new FormData();
          dta.append('demandesachat', JSON.stringify(demandesachat));
          dta.append('module', sous_module_id);
          dta.append('permission', permission);
          $.ajax({
            type: 'POST',
            url: Routing.generate('check_signature'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
          


              if (result.code == 200) {
                nombre_signer_nosigner(sous_module_id,$('#dossier').val());
                demandesachat = [];
                tr_alimentation_list_index.ajax.reload(function(){
                  icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin')
                  $('.signature').removeClass('disabled').attr('disabled', false)
                });
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 5000,
                });
                $("."+result.modul).text(result.count)
                // icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin')
                // $('.signature').removeClass('disabled').attr('disabled', false)
              } else if (result.code == 500) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
              else if (result.code == 404) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin')
                  $('.signature').removeClass('disabled').attr('disabled', false)
              }
            },
            
            error: function (jqXHR, textStatus, errorThrown) {
              icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin')
              $('.signature').removeClass('disabled').attr('disabled', false)
              toastr.error('Erreur', errorThrown, { timeOut: 4000 });
            },
          });
        }
      });
  } else {
    toastr.warning(
      'Veuillez choisir au moins une ligne et un dossier!!',
      'warning',
      {
        timeOut: 4000,
      }
    );
  }
  e.preventDefault();
});



