const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

import * as Ladda from 'ladda';
import { ShowFormErrors } from "../../ManagementErrors/index.js";
global.$ = $;
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('u_p_responsable_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[ 15, 25, 50, 100, 200, 20000000], [ 15, 25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
    ],
    "order": [[ 0, "desc" ]],
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
    "initComplete": function () {
            var api = this.api();
            api.$('td').click( function () {
              var str = this.innerHTML;
                var n = str.search("cd_op");                
              if(n==-1){
                api.search( this.innerHTML ).draw();
              }
            } );
        },
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

  CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5,6,8,9,10], []);
  CustomSearchDatatable.CustomSearchSelect(api, [11,12], []);
  CustomSearchDatatable.CustomSearchDate(api, [7], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



$(".add").click(function (e) {
    $.ajax({
      type: "POST",
      url: Routing.generate("u_p_responsable_new"),
      success: function (result) {
        $(".bod").html(result).hide();
        $("#ModalDocumentDynamique").modal("show");
        $('select.select2').select2();
        setTimeout(function () {
          $(".spr").hide();
          $(".bod").fadeIn();
        }, 600);
      },
    });
    e.preventDefault();
  });

  $(".bod").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    if ($(document.activeElement).hasClass("button-save-add-responsable")) {
        //alert()
      var l = Ladda.create(document.querySelector(".button-save-add-responsable"));
      var goto = 1;
    } else {
      var l = Ladda.create(document.querySelector(".button-save-responsable"));
      var goto = 0;
    }
    l.start();
    var id = $("#test").data("responsableId");
    var obj = new Object();
      obj["route"] = "u_p_responsable_new";
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
    e.preventDefault();
  });
  $("#grid tbody").on("click", ".cd_op", function () {
    $.ajax({
      type: "POST",
      url: Routing.generate("u_p_responsable_edit", {
        id: $(this).closest("tr").attr("id"),
      }),
      success: function (result) {
        $(".bod").html(result).hide();
        $("#ModalDocumentDynamique").modal("show");
        $('select.select2').select2();
        setTimeout(function () {
          $(".spr").hide();
          $(".bod").fadeIn();
        }, 600);
      },
    });
  });


  $(".bod").on("submit", ".form_edit", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
  
    var id = $("#test").data("responsableId");
    var l = Ladda.create(document.querySelector(".button-edit-responsable"));
    l.start();
    var obj = new Object();
    var parametre = { id: id };
    obj["route"] = "u_p_responsable_edit";
    obj["data"] = dta;
    obj["parametre"] = parametre;
    obj["l"] = l;
    obj["form_name"] = form_name;
    obj["selector"] = selector;
    obj["reloadTable"] = true;
    obj["modal"] = true;
    obj["hideModule"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    obj["ShowFormErrors"] = ShowFormErrors;
    autoFunctionAjax.autoAjaxRenderController(obj);
  
    e.preventDefault();
  });


  
$(".bod").on("click", "._delete", function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
  
    if (id) {
      var obj = new Object();
      obj["route"] = "u_p_responsable_delete";
      obj["id"] = id;
      obj["token"] = token;
      obj["reloadTable"] = true;
      obj["modal"] = true;
      obj["hideModule"] = true;
      obj["nomModal"] = "ModalDocumentDynamique";
      obj["table"] = table;
      autoFunctionAjax.autoAjaxDelete(obj);
    } else {
      toastr.warning(
        "Veuillez Renseigner une ligne pour effectuer cette opération",
        "warning",
        { timeOut: 4000 }
      );
    }
    e.preventDefault();
  
  });
  $('body').on('change', '.info_user', function () {
var id = $(this).val()
    if(id>0){

      $.ajax({
        type: 'GET',
        url: Routing.generate('u_p_responsable_info_user',{'id': id}),
       
        success: function (result) {
  
            //  window.open(result, '_blank');
              
              if (result.code == 200) {
             
                console.log(result.message.data);
                $('#up_responsable_nom').val(result.message.data.nom)
                $('#up_responsable_prenom').val(result.message.data.prenom)
                $('#up_responsable_email').val(result.message.data.email)
                
                $('#up_responsable_pays').val(result.message.data.pays)
                $('#up_responsable_signature').val(result.message.data.signature)
                $('#up_responsable_teleEntreprise').val(result.message.data.tele_entreprise)
                $('#up_responsable_telePersonnel').val(result.message.data.tele_personnel)
  
                $('#up_responsable_adresse').val(result.message.data.adresse)
  
                $('#up_responsable_ville').val(result.message.data.ville)
  
             } 
        },
        error: function (jqXHR, textStatus, errorThrown) {
  
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
        }
    });

    }else{

      $('#up_responsable_nom').val('')
      $('#up_responsable_prenom').val('')
      $('#up_responsable_email').val('')
      
      $('#up_responsable_pays').val('')
      $('#up_responsable_signature').val('')
      $('#up_responsable_teleEntreprise').val('')
      $('#up_responsable_telePersonnel').val('')

      $('#up_responsable_adresse').val('')

      $('#up_responsable_ville').val('')
    }
   
  });

 







