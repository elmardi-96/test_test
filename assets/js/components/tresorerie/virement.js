const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from '../../functions/autoFunctionAjax.js';

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

var table = $('#grid2').DataTable({
  ajax: {
    url: Routing.generate('list_ordre_virement'), // json datasource
    type: 'get',
    beforeSend: function () {
      if (table.hasOwnProperty('settings')) {
        var settings = table.settings();
        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, 'desc']],
  columns: [
    { orderable: false, name: 'tr.id', width: '5%' },
    { orderable: true, name: 'tr.code_bq' },
    { orderable: true, name: 'tr.date_bq' },
    { orderable: true, name: 'tr.observation_bq' },
    { orderable: true, name: 'mdp.designation' },
    { orderable: true, name: 'tr.montant' },
    
    { orderable: false, searchable: false },

    { orderable: false, name: 'tr.code_bq' },
  ],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [],
  language: {
    url: Routing.generate('datatables_langue'),
    processing: true,
  },
  // fixedHeader: true,
});

$('select').select2();

$('.CloseClose').on('click', function (e) {
  $('#motifeModal').modal('hide');
});

$('.executer').on('click', function (e) {
  var vir_selecteds = [];
  var inputRemise = $('#inputRemise').val();
  var annulation = $('#annulation').val();

  $('input:checkbox[name=TrTransaction_row_checkbox]:checked').each(
    function () {
      var checkboxId = $(this).attr('id');
      vir_selecteds.push(checkboxId);
    }
  );

  var data = new FormData();
  data.append('vir_selecteds', JSON.stringify(vir_selecteds));
  data.append('inputRemise', inputRemise);
  data.append('annulation', annulation);
  var l = Ladda.create(document.activeElement);
  l.start();
  $('.ladda-button').css('padding', '6px 50px');

  $.ajax({
    type: 'POST',
    url: Routing.generate('modifier_montant_final'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result == 'empty') {
        toastr.warning(
          'Veuillez selectionner au moins un ordre de virement',
          'Warning',
          { timeOut: 4000 }
        );
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'empty caisse') {
        toastr.error(
          "Vous n'avez pas ce montant dans votre caisse !",
          'Error',
          { timeOut: 4000 }
        );
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } 
      else if (result == 'empty carte') {
        toastr.error("Vous n'avez pas ce montant dans votre carte !", 'Error', {
          timeOut: 4000,
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'motife') {
        /// Get a reference to the modal element
        $('#motifeModal').modal('show');

        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'ok') {
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
        window.location.reload();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      l.stop();
      toastr.warning(jqXHR.responseText, 'warning', { timeOut: 4000 });
    },
  });
});

$(document).ready(function () {
  $('.executernew').on('click', function (e) {
    let totalMontant = 0;

    // Open the modal
    // var codebq_selecteds=  $("input:checkbox[name=id_transaction]:checked:first").val();

    var codebq_selecteds = [];
    $('input:checkbox[name=id_transaction]:checked').each(function () {
      codebq_selecteds.push($(this).val());
    });

    var data = new FormData();
    data.append('codebq_selecteds', JSON.stringify(codebq_selecteds));

    var l = Ladda.create(document.activeElement);
    l.start();
    $('.ladda-button').css('padding', '6px 50px');
    $.ajax({
      type: 'POST',
      url: Routing.generate('get_codebq_selected'),
      data: data,
      processData: false,
      contentType: false,
      success: function (response) {
        if (response == 'transactions_count') {
          toastr.warning('sélectionner une seule demande !', 'warnig', {
            timeOut: 6000,
          });
          $('#executernew').modal('hide');
          $('.ladda-button').css('padding', '6px 18px');
          l.stop();
        } else if (response.TrTransactionArray) {
          var TrTransactionArray = response.TrTransactionArray;

          $('.bodycodebq').empty();

          var totalSum = 0;

          for (var i = 0; i < TrTransactionArray.length; i++) {

            var TrTransaction = TrTransactionArray[i];
            // var checkbox = $(`#${TrTransaction.id}`);
            totalMontant += parseFloat(TrTransaction.montan);

          
            $('.bodycodebq').prepend(`
            <tr>
            <td style="text-align: center;"><input id="${TrTransaction.id}" type="checkbox" name="TrTransaction_row_checkbox" checked></td>
            <td style="text-align: center;">${TrTransaction.id}</td>
              <td style="text-align: center;">${TrTransaction.code}</td>
              <td style="text-align: center;">${TrTransaction.codebq}</td>
              <td style="text-align: center;" class="montant">${TrTransaction.montan}</td>
              </td>
            </tr>
            
          `);
          $('#totalMontant').val(totalMontant.toFixed(2));
console.log(totalMontant);
          }
          $('#executernew').modal('show');
          $('.ladda-button').css('padding', '6px 18px');
          l.stop();
          // Update the total montant in the modal
// Update the total montant in the modal
      }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        l.stop();
        toastr.warning(jqXHR.responseText, 'warning', { timeOut: 4000 });
      },
    });
  });
});


$(document).ready(function() {
  $('.executernew').on('click', function (e) {

  var totalMontant = 0;
  
  function calculateTotalMontant() {
    totalMontant = 0; // Reset the total montant
    
    // Iterate through checked checkboxes
    $('input:checkbox[name=TrTransaction_row_checkbox]:checked').each(function() {
      var montant = parseFloat($(this).closest('tr').find('.montant').text());
      if (!isNaN(montant)) {
        totalMontant += montant; // Add the montant to the totalMontant
      }
    });
    
    // Update the total montant in the input field
    $('#totalMontant').val(totalMontant.toFixed(2));
  }
  
  // Call the calculateTotalMontant function on document ready
  calculateTotalMontant();

  // Attach a change event listener to the checkboxes
  $(document).on('change', 'input:checkbox[name=TrTransaction_row_checkbox]', function() {
    calculateTotalMontant(); // Recalculate the total montant
  });
});});

$(document).ready(function () {
  $('#executer_datatble').DataTable({
    searching: false, // Enable search bar
    paging: false, // Disable pagination
    bInfo : false,
    ordering: false,
  });
});

$('.annuler').on('click', function (e) {
  var vir_selecteds = [];
  $('input:checkbox[name=id_transaction]:checked').each(function () {
    vir_selecteds.push($(this).val());
  });
  // if (vir_selecteds.length < 1) {
  //   toastr.warning(
  //     'Veuillez selectionner au moins un ordre de virement',
  //     'Warning',
  //     { timeOut: 4000 }
  //   );
  //   return;
  // }
  $('#virment_annuler').modal('show');
});
$('.save_annulation').on('submit', function (e) {
  e.preventDefault();
  var vir_selecteds = [];
  $('input:checkbox[name=id_transaction]:checked').each(function () {
    vir_selecteds.push($(this).val());
  });
  
   var   codeChq = $( "#ChequeImpaye" ).val().trim();
  var data = new FormData($(this)[0]);
  data.append('vir_selecteds', JSON.stringify(vir_selecteds));
  data.append('codeChq', JSON.stringify(codeChq));
  var l = Ladda.create(document.activeElement);
  l.start();
  // $('.ladda-button').css('padding','6px 50px');

  $.ajax({
    type: 'POST',
    url: Routing.generate('annulation_virement'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      // console.log('test reussi');
      if (result == 'ok') {
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
        window.location.reload();
      }else if (result == 'alreadyChequeImpaye') {
        toastr.error(
          "déjà Check Impaye !",
          'Error',
          { timeOut: 4000 }
        );
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'empty') {
        toastr.error(
          "Entre code or Select  !",
          'Error',
          { timeOut: 4000 }
        );
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'NotCheque') {
        toastr.error(
          "mode de paiement n'est pas Cheque  !",
          'Error',
          { timeOut: 4000 }
        );
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } 
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.warning(jqXHR.responseText, 'Warning', { timeOut: 4000 });
    },
  });
});

$('body').on('click', '.imprime_document', function (e) {
  e.preventDefault();
  if ($(this).attr('data-valide') == 0) {
    toastr.warning(
      "impossible d'imprimer le document, manque de signature!",
      'Erreur',
      { timeOut: 4000 }
    );
    return;
  }
  window.open($(this).attr('href'), '_blank');
});
var codeBq;
$('body').on('click', '.chequeModel', function (e) {
  e.preventDefault();
  if ($(this).attr('data-valide') == 0) {
    toastr.warning(
      "impossible d'imprimer le document, manque de signature!",
      'Erreur',
      { timeOut: 4000 }
    );
    return;
  }
  codeBq = $(this).attr('data-id');

  $('.cheque_normal').attr(
    'href',
    Routing.generate('pdfDownload', { code_bq: codeBq })
  );
  $('.cheque_physique').attr(
    'href',
    Routing.generate('pdfDownloadCheque', { code_bq: codeBq })
  );
  $('#modalTypeCheque').show();
  // $.ajax({
  //     type: 'POST',
  //     url: Routing.generate('virement_get_cheque_details'),
  //     data: data,
  //     processData: false,
  //     contentType: false,
  //     success: function(result) {
  //        // console.log('test reussi');

  //     },
  //     error: function(jqXHR, textStatus, errorThrown) {
  //         toastr.warning('', 'Warning', { timeOut: 4000 });
  //     }
  // });
});
$('body').on('click', '.cheque_normal', function (e) {
  $.ajax({
    type: 'POST',
    url: Routing.generate('check_cheque_impaye', { code_bq: codeBq }),
    processData: false,
    contentType: false,
    success: function (result) {
      if (result == 'ok') {
        window.open(Routing.generate('pdf_cheque_impaye', { code_bq: codeBq }));
      }
    },
  });
});

$('body').on('click', '.close', function (e) {
  $('#modalTypeCheque').hide();
});

$('.save_acquise').on('submit', function (e) {
  e.preventDefault();
  var data = new FormData($(this)[0]);
  var vir_selecteds = [];
  $('input:checkbox[name=id_transaction]:checked').each(function () {
    vir_selecteds.push($(this).val());
  });

  data.append('vir_selecteds', JSON.stringify(vir_selecteds));
  var l = Ladda.create(document.activeElement);
  l.start();

  $.ajax({
    type: 'POST',
    url: Routing.generate('tr_transaction_acquise'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      // console.log('test reussi');
      toastr.success('Bien enregistrer', 'Error', { timeOut: 4000 });
      l.stop();
      window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      l.stop();
      toastr.warning(jqXHR.responseText, 'warning', { timeOut: 4000 });
    },
  });

  console.log(vir_selecteds);
  // alert('ziko');
});

let gain_perte_code_bq;
$('body').on('click', '.gain_perte', function (e) {
  e.preventDefault();
  gain_perte_code_bq = $(this).attr('data-id');
  $('#gain_perte_modal').modal('show');
});

$('.save_gain_perte').on('submit', function (e) {
  e.preventDefault();
  var data = new FormData($(this)[0]);
  var l = Ladda.create(document.activeElement);
  l.start();

  $.ajax({
    type: 'POST',
    url: Routing.generate('tr_transaction_gain_perte', {
      codeBq: gain_perte_code_bq,
    }),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      // console.log('test reussi');
      toastr.success('Bien enregistrer', 'Error', { timeOut: 4000 });
      l.stop();
      window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      l.stop();
      toastr.warning(jqXHR.responseText, 'warning', { timeOut: 4000 });
    },
  });

  // console.log(vir_selecteds);
  // alert('ziko');
});
