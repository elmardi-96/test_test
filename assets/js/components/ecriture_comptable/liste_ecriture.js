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

$("select").select2()


var table = $("#grid").DataTable({
    
    ajax: {
      url: Routing.generate("ecriture_comptable_ecriture_list"), // json datasource
      type: "get",
    },
    deferRender: true,
    serverSide: true,
    lengthMenu: [
      [10, 15, 25, 50, 100, 200],
      [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 15,
    columns: [
        {orderable: true,  name: 'cab.id' , width: "5%"},
        {orderable: true,  name: 'cab.typ', width: "8%"},
        {orderable: true,  name: 'cab.num ', width: "8%"},
        {orderable: true,  name: 'dossier.titre', width: "17%"},
        {orderable: true,  name: 'cab.duddat', width: "8%"},
        {orderable: false,  name: 'cab.desvcr',searchable:false, width: "17%"},
        {orderable: true,  name: 'cab.jou', width: "8%"},
        {orderable: true,  name: 'cab.fcz_montant_initial', width: "8%" ,className: 'td-number pd-fac'},
        {orderable: false,  name: 'cab.fcz_id_doc1asso',searchable:false,  width: "2%"},
        {orderable: false,  name: 'cab.fcz_description_tier_piece',searchable:false, width: "2%"},
        {orderable: false,  name: 'cab.fcz_id_tier_piece',searchable:false, width: "2%"},
        {orderable: true,  name: '', width: "15%"},
        {orderable: false, name: 'id', visible: false, searchable:false},
      
    ],
    stateSave: false,
    bDestroy: true,
    language: {
      url: Routing.generate("datatables_langue"),
      processing: true,
    },
    
    // fixedHeader: true,
  });
// alert('test');

var selectedValue = $('input[name="inlineRadioOptions"]:checked').val();
$('input[name="options"][value="' + selectedValue + '"]').prop('checked', true);
$(".RadioOptions").on('change', function() {
     selectedValue = $(this).val();
    table.columns(12).search(selectedValue).draw();

})
$("#file").on('change', function() {
    var val = $(this).val();
    if(val){
        $("#enregitrer_ecriture").prop('disabled', false);
    }else{
        $("#enregitrer_ecriture").prop('disabled', true);
    }

})
$('body').on('click','.check',function(){

  
    if($(".check").is(":checked")){
        $("#valider_ecriture_comp").prop('disabled', false);
    }else{
        $("#valider_ecriture_comp").prop('disabled', true);
    }

})
$('body').on('click','#valider_ecriture_comp',function(){
    var ecri_selecteds = [];
    $('input:checkbox[name=check_ecriture]:checked').each(
      function () {
        var checkboxId = $(this).attr('id');
        ecri_selecteds.push(checkboxId);
      }
    );
    var data = new FormData();
    data.append('ecri_selecteds', JSON.stringify(ecri_selecteds));
    var l = Ladda.create(document.activeElement);
    l.start();
  
    $.ajax({
      type: 'POST',
      url: Routing.generate('valedation_ecriture_comptable'),
      data: data,
      processData: false,
      contentType: false,
      success: function (result) {
        console.log(result);
        if (result == 'empty') {
          toastr.warning(
            'Veuillez sélectionner au moins une ligne',
            'Warning',
            { timeOut: 4000 }
          );
          l.stop();
        } else {
            toastr.success("Success", result, {timeOut: 4000});
            table.columns(12).search(selectedValue).draw();
            ecri_selecteds.length = 0;
            l.stop();
            $("#enregitrer_ecriture").prop('disabled', true);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
        l.stop();
        toastr.warning(jqXHR.responseText, 'warning', { timeOut: 4000 });
      },
    });
 
})

$('#Ecriture_import_form').on('submit', function(event) {
    event.preventDefault();
    var l = Ladda.create(document.activeElement);
    l.start();
    $.ajax({
        url: Routing.generate("import_ecriture_comp"),
        method: "POST",
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        success: function(result) {
            toastr.success("Success", result, {timeOut: 4000});
            location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            l.stop();
        },

    });
});

