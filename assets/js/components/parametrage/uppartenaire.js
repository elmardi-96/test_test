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
        url: Routing.generate('u_p_partenaire_list'), // json datasource
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
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
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

  CustomSearchDatatable.CustomSearchText(api, [1,3,4,5,6,7,8,9,10,11,12,13], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2,14], []);
  CustomSearchDatatable.CustomSearchDate(api, [], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

$('.scroll_content').slimscroll({
    height: '1000px'
})








$(".add").click(function (e) {


    $.ajax({
      type: "POST",
      url: Routing.generate("u_p_partenaire_new"),
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
    if ($(document.activeElement).hasClass("button-save-add-partenaire")) {
        //alert()
      var l = Ladda.create(document.querySelector(".button-save-add-partenaire"));
      var goto = 1;
    } else {
      var l = Ladda.create(document.querySelector(".button-save-partenaire"));
      var goto = 0;
    }
    l.start();
    var id = $("#test").data("partenaireId");
    var obj = new Object();
      obj["route"] = "u_p_partenaire_new";
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
   



     

      if( $('#up_partenaire_categorie option:selected').text()=='interne' &&  $('#up_partenaire_dossier').val()==''){
        $("#up_partenaire_dossier").parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>CETTE VALEUR NE DOIT PAS ÊTRE VIDE.</span></span></span>"));
        l.stop();
      }else{
     //   alert($('#up_partenaire_categorie option:selected').text());
       // alert($('#up_partenaire_dossier').val());
        autoFunctionAjax.autoAjaxRenderController(obj);
      }
 
     
    
    e.preventDefault();
  });
  $("#grid tbody").on("click", ".cd_op", function () {
    $.ajax({
      type: "POST",
      url: Routing.generate("u_p_partenaire_edit", {
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
  
    var id = $("#test").data("partenaireId");
    var l = Ladda.create(document.querySelector(".button-edit-partenaire"));
    l.start();
    var obj = new Object();
    var parametre = { id: id };
    obj["route"] = "u_p_partenaire_edit";
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

    if( $('#up_partenaire_categorie option:selected').text()=='interne' &&  $('#up_partenaire_dossier').val()==''){
      $("#up_partenaire_dossier").parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>CETTE VALEUR NE DOIT PAS ÊTRE VIDE.</span></span></span>"));
      l.stop();
    }else{
   //   alert($('#up_partenaire_categorie option:selected').text());
     // alert($('#up_partenaire_dossier').val());
      autoFunctionAjax.autoAjaxRenderController(obj);
    }
  
    e.preventDefault();
  });
  
$(".taxable").on('change', function (e) {

    if ($(this).val()==true) {
        $('.bloc_choix').show();
    } else {
       $('.bloc_choix').hide();
    }
});



  $(".bod").on("change", ".categorie", function () {

    var type = $("option:selected", this).text();
   
    

 

  
 
 if (type=='interne') {

  $('.dossier').show();
} else {
  $('.dossier').hide();
}

});




$(".bod").on("click", "._delete", function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
  
    if (id) {
      var obj = new Object();
      obj["route"] = "u_p_partenaire_delete";
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