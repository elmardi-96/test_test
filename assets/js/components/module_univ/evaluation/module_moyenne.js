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

$('body').on('click', '.univ_ex_controle_module_apply_transitions', function (e) {
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
                    url: Routing.generate('univ_ex_controle_module_apply_transitions', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})

                            if (result.message.route) {
                                //console.log(result.route);
                                window.location.href = result.message.route;
                            } else {
                                location.reload();
                            }
                        }else{
                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000});

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

//module_univ_evaluation_affilier_etudiant_list



//alert($('.save_etudiants').attr('module-id'))
//var table_epreuve = $("#grid_epreuve_liste").DataTable({
//    ajax: {
//        url:
//                Routing.generate("module_univ_evaluation_affilier_etudiant_list", {"module": $('#save_etudiants').attr('module-id')})
//                //+ location.search, // json datasource,
//        ,
//        type: "get",
//    },
//    deferRender: true,
//    stateSave: true,
//    lengthMenu: [
//        [10, 15, 25, 50, 100, 200, -1],
//        [10, 15, 25, 50, 100, 200, "All"],
//    ],
//    pageLength: 15,
//    order: [[0, "desc"]],
//    columns: [
//        {orderable: false, width: "3%", searchable: true, targets: [0]},
//        {orderable: true},
//        {orderable: true},
//        {orderable: true},
//    ],
//
//    language: {
//        url: Routing.generate("datatables_langue"),
//        processing: true,
//    }
//});



var tableShow = $("#datatable-show-module").DataTable({

    ajax: {
        url:
                Routing.generate("module_univ_evaluation_moyenne_module_list", {
                    id: $("#datatable-show-module").attr('data-controle-module'),
                    moycalculer: $("#datatable-show-module").attr('data-moycalculer'),
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
    },
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
    },
});



//$("body").on("click", "._save_module", function (e) {
//    //alert();
//    e.preventDefault();
//    //var form_name = $(this).attr("name");
//    //var dta = new FormData(this);
//    swalWithBootstrapButtons
//            .fire({
//                showClass: {
//                    popup: "animatedSwal flipInX faster",
//                },
//                position: "top",
//                title: "Confirmation ?",
//                text: "Vous Voulez vraiment effectuer cette opération ?",
//                type: "warning",
//                showCancelButton: true,
//                showCloseButton: true,
//                confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
//                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//            })
//            .then(function (result) {
//                if (result.value) {
//                    var selector = $(this);
//                    //var id = dta.get("_id");
//                    var l = Ladda.create(document.querySelector(".my-button"));
//                    //alert($(".my-button").attr("data-id"));
//                    // Start loading
//                    l.start();
//                    $.ajax({
//                        type: "POST",
//                        url: Routing.generate(
//                                "module_univ_evaluation_affilier_module_save",
//                                {
//                                    id: $("#save_etudiants").attr("module-id"),
//                                }
//                        ),
//                        success: function (result) {
//                            console.log(result);
//                            if (result.errors) {
//                                //console.log(result.errors);
//                                l.stop();
//                                ShowFormErrors(selector, form_name, result.errors);
//                            }
//                            if (result.code == 200) {
//                                //window.selectedData = result.message.data;
//
//                                l.stop();
//                                toastr.success(result.message.text, result.message.title, {
//                                    timeOut: 2000,
//                                });
//                                location.reload();
//                                //window.refresh = 0;
//
//                                //$("#using_json").jstree(true).refresh();
//                                //$("#grid").DataTable().ajax.reload();
//
//                                //window.refresh = 1;
//                            } else if (result.code == 403) {
//                                l.stop();
//                                toastr.warning(result.message.text, result.message.title, {
//                                    timeOut: 2000,
//                                });
//                            }
//                        },
//                        error: function (jqXHR, textStatus, errorThrown) {
//                            //alert();
//                            l.stop();
//                            toastr.error("Erreur", errorThrown, {timeOut: 2000});
//                        },
//                    });
//                }
//            });
//});





$("body").on("click", "._save_module", function (e) {
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
                        url: Routing.generate("module_univ_evaluation_moyenne_module_save", {
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
                            toastr.error("Erreur", errorThrown, {timeOut: 2000});
                        },
                    });
                }
            });
    //alert();
    e.preventDefault();
});




var table_element_notes = $("#table_element_notes").DataTable({
    ajax: {
        url:
                Routing.generate("module_univ_evaluation_module_rachat_list", {
                    module: $('#table_element_notes').attr('data-id')}) + location.search, // json datasource
        type: "get",
    },
    createdRow: function (row, data, dataIndex) {
        //console.log(row);
        $(row).find("td:eq(4)").attr("contenteditable", true);
        $(row).find("td:eq(4)").attr("class", "note center");
        $(row).find("td:eq(4)").attr("data-enote", $(row).attr("id"));
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
        {orderable: false, width: "3%", searchable: true, targets: [0]},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
    ],
    paging: false,
    pageLength: 25,
    scrollY: "400px",
    scrollCollapse: true,
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
    },
    //fixedHeader: true,
});




$("body").on("click", ".note", function (e) {
    //alert()
    if (!$.isNumeric($(this).text())) {
        $(this).text("");
    }
    e.preventDefault();
});




$("body").on("keydown", ".note", function (e) {
  //alert()
  if (!$.isNumeric($(this).text())) {
    $(this).text("");
  }
  if (e.keyCode == 13) {
    //alert()
    $(this).blur();
    $(this).addClass("unselectable");
    window.elm = $(this);
    $(".unselectable").prop("contenteditable", false);
    $.ajax({
      type: "POST",
      url: Routing.generate("module_univ_evaluation_rachat_module_note_add", {
        id: $(this).attr("data-enote"),
      }),
      data: { note: $(this).text() },
      success: function (result) {
        console.log(result);
        if (result.errors) {
          //console.log(result.errors);
          l.stop();
          ShowFormErrors(selector, form_name, result.errors, "groupe");
        }
        if (result.code == 200) {
          //alert();
          //l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 2000,
          });
          $(".unselectable").parent().next().find(".note").focus();
          if ($(".unselectable").parent().next().find(".note").text() == 0) {
            $(".unselectable").parent().next().find(".note").text("");
          }
          $(".unselectable")
            .removeClass("unselectable")
            .prop("contenteditable", true);
          $("body").find(".unselectable").removeClass(".unselectable");
          if(window.elm.is(':empty')){
            window.elm.text("-");
          }
          //window.refresh = 0;
          //$('#using_json').jstree(true).refresh();
          //$('#datatable-show-2').DataTable().ajax.reload();
          //window.refresh = 1;
          //location.reload();
        } else if (result.code == 403) {
          //l.stop();

          $(".unselectable")
            .removeClass("unselectable")
            .prop("contenteditable", true);
          $("body").find(".unselectable").removeClass(".unselectable");
          window.elm.focus();
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
    e.preventDefault();
  }
});

$('.dynamique_document').click(function (e) {

    // console.log( $(this).attr('data-id')); 
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_module_document_dynamique', {id: $(this).attr('data-id')}),
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
        url: Routing.generate('module_univ_module_document_dynamique_ratrappage', {id: $(this).attr('data-id')}),
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


$(document).on('click', 'button.promotion', function (e) {

    //alert()
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

