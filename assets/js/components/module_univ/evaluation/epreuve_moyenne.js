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
require("../../../inspinia");
require("../../../popper.min.js");
require("../../../bootstrap.js");
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
/*var table_epreuve = $("#grid_epreuve_liste").DataTable({
  ajax: {
    url:
      Routing.generate("module_univ_evaluation_epreuves_listdata") +
      location.search, // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200, -1],
    [10, 15, 25, 50, 100, 200, "All"],
  ],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [
    { orderable: false, width: "3%", searchable: true, targets: [0] },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
  ],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [
    "columnsToggle",
    {
      text: "Restaurer",
      className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
      action: function (e, dt, node, config) {
        table.state.clear();
        window.location.reload();
      },
    },
  ],
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
  fixedHeader: true,
});

table_epreuve.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  CustomSearchDatatable.CustomSearchText(
    api,
    [1, 2, 3, 5, 6, 7, 8, 11, 12, 13],
    []
  );
  CustomSearchDatatable.CustomSearchSelect(api, [4, 9, 10], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});*/

$(".navbar-static-side").closest("body").addClass("fixed-nav");
$(".navbar-static-side").closest("body").addClass("fixed-nav-basic");
var waves = require("node-waves");
window.Waves = waves;
window.refresh = 1;

jQuery.each($(".toastr-msg"), function (i, val) {
  console.log($(this).attr("data-toastr"));
  console.log($(this).text());
  if ($(this).attr("data-toastr") == "success") {
    toastr.success("Succées", $(this).text(), { timeOut: 2000 });
  } else if ($(this).attr("data-toastr") == "warning") {
    toastr.warning("Warning", $(this).text(), { timeOut: 2000 });
  } else if ($(this).attr("data-toastr") == "error") {
    toastr.error("erreur", $(this).text(), { timeOut: 2000 });
  }
});
jQuery.each($(".form-errors li"), function (i, val) {
  console.log($(this).text());
});
/*check the form errors*/
if ($(".form-errors").text() != "") {
  toastr.error("erreur", $(".form-errors").text(), { timeOut: 2000 });
}
$(".new , .edit").on("submit", "form", function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
});
$(function () {
  // you could start a loading animation here
  $("body").on("click", ".cd_op", function () {
    var url = Routing.generate("module_univ_evaluation_epreuves_show", {
      id: $(this).closest("tr").attr("id"),
    });
    window.location.href = url;
  });

  // use import() as a function - it returns a Promise
  import("../../../plugins/ui/jquery-ui.js").then(() => {
    $(".panel-left").resizable({
      handleSelector: ".splitter",
      resizeHeight: false,
    });
  });
  import("../../../jquery.slimscroll.min.js").then(() => {
    (function ($) {
      $(".full-height-scroll").slimscroll({
        height: "800px",
      });
    })(jQuery);
  });
  import("../../../plugins/jsTree/jstree.min.js")
    .then(() => {
      $("#using_json")
        .jstree({
          core: {
            data: {
              url: Routing.generate("module_univ_evaluation_moyenne_epreuves"),
              dataType: "json",
            },
          },
          types: {
            root: {
              icon: "glyphicon glyphicon-folder-close",
            },
            child: {
              icon: "glyphicon glyphicon-folder-open",
            },
            default: {},
          },
          plugins: ["search", "themes", "types"],
        })
        .on("open_node.jstree", function (e, data) {
          var str = data.node.id;
          console.log(data.node);
          window.pr = $("#" + data.node.id);

          data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
        })
        .on("close_node.jstree", function (e, data) {
          data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
        })
        .on("select_node.jstree", function (e, data) {
          var str = data.node.id;
          window.pr = $("#" + data.node.id);
          
          //alert();
          if (str.indexOf("error-") >= 0) {
            
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();

            $.ajax({
              url: Routing.generate("module_univ_evaluation_error"),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".none").fadeIn(2000);
                
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }
          if (str.indexOf("coneprv_") >= 0) {
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();

            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();

            $.ajax({
              url: Routing.generate("module_univ_evaluation_details_epreuve", {
                epreuve: $("#" + data.node.id).attr("data-epreuve"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".w3-black b").text($(".title-text").text());
                $('.w3-wide').css({'display':'flex','background':$(".title-text").attr('data-color')}).slideDown();
                $('body .pt-6').removeClass('pt-add-20');
                $(".none").fadeIn(2000);
              },
            });
          }

          if (str.indexOf("elem_") >= 0) {
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
          
            $.ajax({
              url: Routing.generate("module_univ_evaluation_details_element", {
                element: $("#" + data.node.id).attr("data-element"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".w3-black b").text($(".title-text").text());
                $('.w3-wide').css({'display':'flex','background':$(".title-text").attr('data-color')}).slideDown();
                $('body .pt-6').removeClass('pt-add-20');
                $(".none").fadeIn(2000);
              },
            });
          }


          if (str.indexOf("mdl_") >= 0) {
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("module_univ_evaluation_details_module", {
                module: $("#" + data.node.id).attr("data-module"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".w3-black b").text($(".title-text").text());
                $('.w3-wide').css({'display':'flex','background':$(".title-text").attr('data-color')}).slideDown();
                $('body .pt-6').removeClass('pt-add-20');
                $(".none").fadeIn(2000);
              },
            });
          }
          if (str.indexOf("semestre_") >= 0) {
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("module_univ_evaluation_details_semestre", {
                semestre: $("#" + data.node.id).attr("data-semestre"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".w3-black b").text($(".title-text").text());
                $('.w3-wide').css({'display':'flex','background':$(".title-text").attr('data-color')}).slideDown();
                $('body .pt-6').removeClass('pt-add-20');
                $(".none").fadeIn(2000);
              },
            });
          }

          if (str.indexOf("prm_") >= 0) {
            //alert()
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("module_univ_evaluation_details_annee", {
                promotion: $("#" + data.node.id).attr("data-promotion"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".w3-black b").text($(".title-text").text());
                $('.w3-wide').css({'display':'flex','background':$(".title-text").attr('data-color')}).slideDown();
                $('body .pt-6').removeClass('pt-add-20');
                $(".none").fadeIn(2000);
              },
            });
          }


        });
    })
    .catch((error) => "An error occurred while loading the component");
});
 
console.log($('#datatable-show-epreuve').attr('data-moycalculer'));
var tableShow = $("#datatable-show-epreuve").DataTable({
    
//    console.log($('this').attr('moycalculer')); 
  ajax: {
    url:
      Routing.generate("module_univ_evaluation_moyenne_epreuve_list", {
        id: $("._save_epreuve").attr("data-id"),
        moycalculer : $('#datatable-show-epreuve').attr('data-moycalculer')

      }), // json datasource
    type: "get",
  },
  paging: false,
  scrollY: "400px",
  scrollX: true,
  scrollCollapse: true,
  autoWidth: true,
  fixedColumns: {
    leftColumns: 2,
  },
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
});
//console.log(tableShow.attr('moycalculer'));
//var tableShow = $("#datatable-show-5").DataTable({
//  ajax: {
//    url:
//      Routing.generate("module_univ_evaluation_moyenne_epreuve_list", {
//        id: $("._save_epreuve").attr("data-id"),
//        calcule : 1
//      }), // json datasource
//    type: "get",
//  },
//  paging: false,
//  scrollY: "400px",
//  scrollCollapse: true,
//  pageLength: 25, 
//  language: {
//    url: Routing.generate("datatables_langue"),
//    processing: true,
//  },
//});

$("body").on("click", "._save_epreuve", function (e) {
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
          url: Routing.generate(
            "module_univ_evaluation_moyenne_epreuve_fun_save",
            {
              id: $(".my-button").attr("data-id"),
            }
          ),
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
              //window.refresh = 0;

              //$("#using_json").jstree(true).refresh();
              //$("#grid").DataTable().ajax.reload();

              //window.refresh = 1;
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
    
      e.preventDefault();
});

$("body").on(
  "submit",
  "#module_univ_evaluaton_epreuve_apply_transitions",
  function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var id = dta.get("_id");
    var title = dta.get("title");
    //alert(id)
    if (id) {
      swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: "animatedSwal flipInX faster",
          },
          position: "top",
          title: "Confirmation ?",
          text:
            "Voulez vous vraiment passer à l'état '" +
            title +
            "' pour cet enregistrement ?",
          type: "warning",
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: "<i class='fa fa-check'></i> Oui !",
          cancelButtonText: "<i class='fa fa-times'></i> Non !",
        })
        .then((result) => {
          if (result.value) {
            $.ajax({
              type: "POST",
              data: dta,
              processData: false,
              contentType: false,
              url: Routing.generate(
                "module_univ_evaluaton_enotes_apply_transitions",
                { id: id }
              ),
              success: function (result) {
                if (result.code == 200) {
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 2000,
                  });
                  location.reload();
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(
                  jqXHR.responseJSON.message.text,
                  jqXHR.responseJSON.message.title,
                  { timeOut: 2000 }
                );
              },
            });
          }
        });
    } else {
      toastr.warning("Commande non renseigné ", "warning", { timeOut: 2000 });
    }
    e.preventDefault();
  }
);

$(document).on('click', 'button.promotion', function (e) {

  //alert()
  $("[data-toggle=popover]").popover({html : true});
  $('#ModalDocumentDynamique2').modal('show');

  $('.spr').hide()
  $('.bod').fadeIn()
 /* $.ajax({
      type: 'POST',
      url: Routing.generate('module_univ_evaluation_annee', {id: $(this).attr('data-id')}),
      success: function (result) {
        $('.bod').html(result).hide();
        $('#ModalDocumentDynamique').modal('show');
        setTimeout(
                function ()
                {
                    
                }, 600);

    }
  });*/
  e.preventDefault();
});

$('body').on('click', '.module_univ_evaluaton_epreuve_apply_transitions', function (e) {
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
                  url: Routing.generate('module_univ_evaluaton_enotes_apply_transitions', {'id': id}),
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
      url: Routing.generate('module_univ_evaluation_epreuve_document_dynamique', {id: $(this).attr('data-id')}),
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

$('.dynamique_document_ratrappage').click(function (e) {

  // console.log( $(this).attr('data-id')); 
  $.ajax({
      type: 'POST',
      url: Routing.generate('module_univ_evaluation_epreuve_document_dynamique_ratrappage', {id: $(this).attr('data-id')}),
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



$('#myBtn').click(function (e) {
  var disp =$('.show_more_historique').css( "display" );
  if(disp=='none'){
      $(".se").css("display", "block");
  }else{
      $(".se").css("display", "none");
  }
     // $(".se").css("display", "block");
     // alert($('.show_more_historique').css( "display" ));
      e.preventDefault();
  });









 