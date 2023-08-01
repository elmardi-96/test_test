const routes = require("../../../../../public/js/fos_js_routes.json");
import Routing from "../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";

Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../../ManagementErrors/index.js";

import * as CustomSearchDatatable from "../../../ManagementSearchDatatable/customSearch.js";

import * as Ladda from "ladda";

import toastr from "toastr";
window.toastr = toastr;
global.$ = $;

const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});
const $ = require("jquery");
require("../../../jquery.metisMenu.js");
require("../../../bootstrap.js");
require("../../../popper.min.js");
require("../../../inspinia");
require('../../../pace.min.js');
/*inclus un fichier renseigner juste pour le module univ */
 require("../appuniv");

import DataTable from "datatables.net-bs4";
import DataTableB from "datatables.net-buttons";
import "../../../plugins/dataTables/datatables.net-buttons/buttons.html5";
require("datatables.net-buttons");
require("datatables.net-colreorder");
require("../../../buttons.colVis.min.js");
require("datatables.net-fixedheader");




require("../../../dataTables.fixedColumns.js");
$('body').on('click', '.univ_ex_controle_promotion_apply_transitions', function (e) {
  var dta = new FormData();
  var id = $(this).attr('data-id');
  var title = $(this).attr('data-title');
  var transition = $(this).attr('data-transition');


  dta.append("id", id);
  dta.append("title", title);
  dta.append("transition", transition);

  if (id) {
      swalWithBootstrapButtons.fire({
          showClass: {
              popup: 'animatedSwal flipInX faster'
          },
          position: 'top',
          title: "Confirmation ?",
          text: "Voulez vous vraiment passer à l'état '" + title + "' pour cet enregistrement ?",
          type: "warning",
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: "<i class='fa fa-check'></i> Oui !",
          cancelButtonText: "<i class='fa fa-times'></i> Non !",
      }).then((result) => {
          if (result.value) {
              $.ajax({
                  type: 'POST',
                  data: dta,
                  processData: false,
                  contentType: false,
                  url: Routing.generate('univ_ex_controle_promotion_apply_transitions', {'id': id}),
                  success: function (result) {
                      if (result.code == 200) {
                          toastr.success(result.message.text, result.message.title, {timeOut: 4000})

                          location.reload();
                      }else{
                        toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

                       
                    }
                      
                      
                      
                      
                     
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                      toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                  }
              });
          }
      });
  } else {
      toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
  }
  e.preventDefault();
});


$('.dynamique_document').click(function (e) {

  // console.log( $(this).attr('data-id')); 
  $.ajax({
      type: 'POST',
      url: Routing.generate('module_univ_annee_document_dynamique', {id: $(this).attr('data-id')}),
      success: function (result) {
          $('.bod').html(result).hide()
          $('#ModalDocumentDynamique').modal('show');
          setTimeout(
                  function ()
                  {
                      $('.spr').hide()
                      $('.bod').fadeIn()
                  }, 600);

      }
  });
  e.preventDefault();
});


var tableShow = $("#datatable-show-annee").DataTable({
  ajax: {
      url:
              Routing.generate("module_univ_evaluation_moyenne_annee_list", {
                  id: $("#datatable-show-annee").attr('data-controle-annee'),
                  moycalculer: $("#datatable-show-annee").attr('data-moycalculer'),
              }) + location.search, // json datasource
      type: "get",
  },
  paging: false,
    scrollY: "400px",
    scrollX: true,
    scrollCollapse: true,
    autoWidth: true,
    fixedColumns: {
      leftColumns: 2,
       rightColumns: 4,
    },
    columnDefs: [
    { "width": "90", "targets": [1] },
  ],
  language: {
      url: Routing.generate("datatables_langue"),
      processing: true,
  },
}); 
$(document).on('click', 'button.promotion', function (e) {
    $('#ModalDocumentDynamique2').modal('show');
    $('.spr').hide()
    $('.bod').fadeIn()
//if (str.indexOf("promotion_") >= 0) {
//    alert();
//    $(".inform").hide();
//    $(".cont").empty();
//    $(".spr2").fadeIn();
//    $.ajax({
//      url: Routing.generate("module_univ_evaluation_details_element", {
//        promotion: $("#" + data.node.id).attr("data-promotion"),
//      }),
//      contentType: false, // To unable request pages to be cached
//      processData: false, // To send DOMDocument or non processed data file it is set to false
//      success: function (data) {
//        $(".spr2").hide();
//        $(".cont").html(data);
//        $(".none").fadeIn(2000);
//      },
//    });
//  }



});


$("body").on("click", "._save_annee", function (e) {
    var dta = new FormData();
    var id = $(this).attr("data-id");
    var etudiants = $(this).attr("data-etudiants");
    dta.append("id", id);
    dta.append("etudiants", etudiants);
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Vous Voulez vraiment effectuer cette opération ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then(function (result) {
        if (result.value) {
          var selector = $(this);
          var l = Ladda.create(document.querySelector(".my-button"));
          l.start();
          $.ajax({
            type: "POST",
            data: dta,
            processData: false,
            contentType: false,
            url: Routing.generate("module_univ_evaluation_moyenne_annee_save", {
              id: id,
            }),
            success: function (result) {
              console.log(result);
              if (result.errors) {
                //console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
              }
              if (result.code == 200) {
                //window.selectedData = result.message.data;
  
                l.stop();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 2000,
                });
                location.reload();
              } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 2000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //alert();
              l.stop();
              toastr.error("Erreur", errorThrown, { timeOut: 2000 });
            },
          });
        }
      });
    //alert();
    e.preventDefault();
  });
//
//$(document).ready(function(){
//    
//  //$('body [data-toggle="popover"]').popover();
//  
//  
//  
//});



//$("body").on("popover", "button", function (e) {
//    $(this).popover(); 
//  e.preventDefault();
//  })


