const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../ManagementErrors/index.js";
import { deleteCab } from "../../functions/delete.js";

import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import * as Ladda from "ladda";
import * as listActions from "../../functions/autoFunctionAjax.js";

const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});

var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("ua_t_livraisonfrscab_list") + location.search, // json datasource
    type: "get",
    beforeSend: function() {
      if (table.hasOwnProperty('settings')) {
          var settings = table.settings();
          if (settings[0].jqXHR) {
              settings[0].jqXHR.abort();
          }
      }
  }
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [
    { orderable: true,className:"pd-liv", width: "3%", name: "tab.id" },
    { orderable: true, visible: true, name: "tab.code" ,className: "td-codeliv pd-liv" },
    { orderable: true,className:"pd-liv", name: "tab.dateDocAsso" },
    { orderable: true,className:"pd-liv", name: "tab.refDocAsso" },
    { orderable: true,className:"pd-liv", name: "tab.description" },
    { orderable: true,className:"pd-liv", name: "tab.societe" },
    { orderable: true,className: "td-number pd-liv", name: "tab.ht" },
    { orderable: true,className: "td-number pd-liv", name: "tab.tva" },
    { orderable: true,className: "td-number pd-liv", name: "tab.ttc" },
    { orderable: true,className:"pd-liv", name: "tab.code_commande" },
    { orderable: true,className:"pd-liv", name: "tab.code_facture" },
    { orderable: false, className: "fac pd-liv", visible: false, searchable: false },
    { orderable: false, className: "rg pd-liv", visible: false, searchable: false },
    { orderable: true,className:"pd-liv" , searchable: false},
    { orderable: true,className:"pd-liv", name: "tab.position_actuel" },
    { orderable: true, searchable: false, width: "5%" },
    //        {"orderable": true, className: "bec"},
    //        {"width": "5%", "orderable": true, className: "rg"},
  ],
  columnDefs: [
    {
      searchable: false,
      targets: 15,
      render: function (t, a, l, s) {
        var data = "";

        t.forEach((element) => {
          let link = "";
          if (element._route_link) {
            link = "href='" + element._route_link + "'";
          }
          data =
            data +
            "<li><a " +
            link +
            "  data-transition='" +
            element.name +
            "'data-id='" +
            element.id +
            "' data-title='" + element.titre + "' class='dropdown-item " +
            element.class +
            " " +
            element.idCs +
            "' ><i class='fa " +
            element.icon +
            "' ></i> " +
            element.titre +
            "</a></li>";
        });

        return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';

      },
    },
  ],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: '<"html5buttons btn-group"f>lTgtip',
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
  // fixedHeader: true,
  // scrollX: true,
 
});

table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  //console.log(st);
  //if (st != null) {
  //    $.each(st.columns, function (key, value) {
  //        if (value.search.search != "") {
  //            $('.remove-filter').show();
  //            return false;
  //        }
  //    });
  //}

  CustomSearchDatatable.CustomSearchText(
    api,
    [],
    []
  );
  CustomSearchDatatable.CustomSearchDate(api, [], []);
  CustomSearchDatatable.CustomSearchSelect(api, [], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/*column 1 de datatble search*/
$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});

$(".action_head").click(function () {
  console.log($(".action").filter(":checked").length);
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true,
});

/*
 *
 * Edit operations
 *
 */
$(".edit").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_livraisonfrscab_update", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.errors) {
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
  });
  e.preventDefault();
});

$(".edit").on("submit", ".detail_form_delete", function (e) {
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var token = dta.get("_token");
  //    var id = $("input[name=_id]").val();
  //    var token = $("input[name=_token]").val();
  swalWithBootstrapButtons
    .fire({
      showClass: {
        popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    })
    .then((result) => {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: Routing.generate("ua_t_livraisonfrscab_delete", {
            id: id,
            token: token,
          }),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            //   console.log(result);
            if (result.data == "deleted") {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              // selector.parent().parent().hide();
              // swal(result.message.title, result.message.text, result.message.success);
              location.reload();
            } else if ((result.data = "error")) {
              toastr.error(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              //swal(result.message.title, result.message.text, result.message.error);
            }
          },
        });
      }
    });

  e.preventDefault();
});

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */

$(".edit").on("submit", ".detail_edit", function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");

  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  console.log(row_index);
  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_livraisonfrscab_edit_detail", { id: id }),
    success: function (result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      $(".table-detail > tbody  > tr")
        .eq(row_index)
        .addClass("table-tr-style")
        .html("<td colspan='9'>" + result + "</td>");
      //    alert(row_index);
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    },
  });

  e.preventDefault();
});

/*
 *
 * Enregistrer  la formulaire de modification  d'article
 *
 */

$(".edit").on("submit", ".detail_form", function (e) {
  var dta = new FormData(this);

  console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this).attr("class").split(" ")[0];
  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_livraisonfrscab_update_detail", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result.errors) {
        ShowFormErrors(selector, form_name, result.errors);
        /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
      }
    },
  });
  e.preventDefault();
});

$(".new-article-btn").click(function (e) {
  $(".edit-new-article").show();
  $(this).hide();
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = dta.get("_id_cab");
  var selector = $(this).attr("class").split(" ")[0];
  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_livraisonfrscab_insert", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result.errors) {
        ShowFormErrors(selector, form_name, result.errors);
        /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
      }
    },
  });

  e.preventDefault();
});

$(".show-me").click(function (e) {
  $(".actions").toggleClass("sidebar-open");
  e.preventDefault();
});

$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */

var mem = $("#data_1 .input-group.date").datepicker({
  todayBtn: "linked",
  keyboardNavigation: false,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true,
});

var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);

$("#selector").datepicker("setDate", yearsAgo);

$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  var selector = $(this).attr("class").split(" ")[0];
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("ua_t_livraisonfrscab_statut", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          ShowFormErrors(selector, form_name, result.errors);
          /* $('.errors-list').remove();
                     jQuery.each(result.errors.violations, function (i, val) {
                     var column = val.propertyPath;
                     var columnName = column.split('.');
                     // console.log(columnName[1]);
                     $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                     });*/
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = Routing.generate("ua_t_livraisonfrscab_show", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$("#_show").click(function (e) {
  var id = table.row(".selected").id();

  if (id) {
    var url = Routing.generate("ua_t_livraisonfrscab_consulte", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$("#_imprimer").click(function (e) {
  // var id = table.row('.selected').id();
  var id = $("#test").data("livraisonId");
  //alert(id);
  if (id) {
    var url = Routing.generate("pdf_show_livraisonfrscab", { id: id });
    // window.location.href = url;
    window.open(url, "_blank");
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$("#_statut").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("ua_t_livraisonfrscab_statut", { id: id }),
      success: function (result, textStatus, errorThrown) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#_delete").click(function (e) {
  //alert();
  var id = table.row(".selected").id();
  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment supprimer cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: "DELETE",
            url: Routing.generate("ua_t_livraisonfrscab_delete2", { id: id }),
            success: function (result) {
              console.log(result);
              if (result.code == 200) {
                table.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$("body").on("change", "._multiple_actions", function () {
 // alert();
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  if ($(this).val() == "_imprimer") {
    $.ajax({
      type: "GET",
      url: Routing.generate("t_achatdemandeinternedet_multiple_pdfShow"),
      data: { _array_ids },
      success: function (result) {},
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.warning(
          jqXHR.responseJSON.message.text,
          jqXHR.responseJSON.message.title,
          { timeOut: 4000 }
        );
      },
    });
    $("._multiple_actions").val("");
  }




  if ($(this).val() == "_delete_livraison") {
 
    swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment supprimer cette liste ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
                if (result.value) {
                    $.ajax({
                        type: "DELETE",
                        url: Routing.generate("t_UaTLivraisonfrscab_delete_livraison"),
                        data: {_array_ids},
                        success: function (result) {
                            // console.log(result);
                            if (result.code == 200) {
                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                    jqXHR.responseJSON.message.text,
                                    jqXHR.responseJSON.message.title,
                                    {timeOut: 4000}
                            );
                        },
                    });
                    $("._multiple_actions").val("");
                }
            });
}
if ($(this).val() == "_desactiver_livraison") {

  swalWithBootstrapButtons
          .fire({
              showClass: {
                  popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment desactiver cette liste 11 ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
          })
          .then((result) => {
              if (result.value) {
                  $.ajax({
                      type: "POST",
                      url: Routing.generate("t_UaTLivraisonfrscab_desactiver"),
                      data: {_array_ids},
                      success: function (result) {
                          // console.log(result);
                          if (result.code == 200) {
                              table.ajax.reload();
                              toastr.success(result.message.text, result.message.title, {
                                  timeOut: 4000,
                              });
                          }
                      },
                      error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                                  jqXHR.responseJSON.message.text,
                                  jqXHR.responseJSON.message.title,
                                  {timeOut: 4000}
                          );
                      },
                  });
                  $("._multiple_actions").val("");
              }
          });
}

  if ($(this).val() == "_archiver") {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment Archiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: Routing.generate("t_achatdemandeinternedet_multiple_archiver"),
            data: { _array_ids },
            success: function (result) {
              console.log(result);
              if (result.code == 200) {
                table.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
          $("._multiple_actions").val("");
        }
      });
  }
});
//genener_factures
$("body").on("click", ".genener_factures", function (e) {
    var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
    $.ajax({
        type: "GET",
        url: Routing.generate("ua_t_livraisonfrscab_generer_facture", { id: id }),
        success: function (result) {
          $("#facturePopUp .bod").html(result);
          $(".sel2").select2();
          $("#facturePopUp").modal("show");
          generer();
        },
      });
})
$("body").on("click", ".ua_t_livraisonfrscab_apply_transitions", function (e) {
  //$('body').on('submit', '#ua_t_livraisonfrscab_apply_transitions', function (e) {

  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
  //alert(transition)
  //alert(id)
  //alert(title)

    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
    if(transition == 'apres_valider_generer'){
      $.ajax({
        type: "GET",
        url: Routing.generate("ua_t_livraisonfrscab_generer_facture", { id: id }),
        success: function (result) {
          $("#facturePopUp .bod").html(result);
          $(".sel2").select2();
          $("#facturePopUp").modal("show");
          generer(dta);
          
        },
      });
    }

    else if (id) {
      swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: "animatedSwal flipInX faster",
          },
          position: "top",
          title: "Confirmation ?",
          text:
            "Voulez vous vraiment passer a l'etat '" +
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
              url: Routing.generate("ua_t_livraisonfrscab_apply_transitions", {
                id: id,
              }),
              success: function (result) {
                if (result.code == 200) {
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  location.reload();
                }
                if (result.code == 201) {
                  // alert(result.valider);
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  window.location.reload();
                }

                if (result.code == 403) {
                  toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                }
                else if (result.code == 404) {
                  toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                  });
              }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(
                  jqXHR.responseJSON.message.text,
                  jqXHR.responseJSON.message.title,
                  { timeOut: 4000 }
                );
              },
            });
          }
        });
    } else {
      toastr.warning("Commande non renseigne ", "warning", { timeOut: 4000 });
    }
  
  e.preventDefault();
});

var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  columns: [
    { width: "5%" },
    { width: "10%" },
    { width: "35%" },
    { width: "20%" },
    { width: "5%" },
    { width: "5%" },
    { width: "5%" },
    { width: "5%" },
    { width: "5%" },
  ],
  footerCallback: function (row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function (i) {
      return typeof i === "string"
        ? i.replace(/[\$,]/g, "") * 1
        : typeof i === "number"
        ? i
        : 0;
    };

    // Total over all pages
    total = api
      .column(7)
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Total over this page
    pageTotal = api
      .column(7, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Update footer
    /*$(api.column(1).footer()).html(
         'Total : ' + pageTotal
         );*/
  },
});

///////////////////// miltiple factures

$("body").on("click", ".scolumn_0", function () {
  $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
  $("._multiple_actions").toggle($(".action").filter(":checked").length >= 1);
});

$("body").on("click", ".action", function () {
  $("._multiple_actions").toggle($(".action").filter(":checked").length >= 1);
});

$("body").on("change", "._multiple_actions", function () {
  var _array_ids = [];

  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });

  if ($(this).val() == "_genener_factures" && _array_ids != null) {
    $.ajax({
      type: "POST",
      url: Routing.generate("ua_t_livraisonfrscab_generer_facture", { id: 0 }),
      data: { _array_ids },
      success: function (result) {
        if (result.code == 403) {
          $("#MyModal").modal("hide");
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        } else {
          $(".bod").html(result).hide();
          $("#MyModal").modal("show");
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        }
      },
    });
  }
});

$(".actions").on("submit", ".form_facture", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");

  //var selector = $(this).attr('class').split(' ')[0];

  var selector = "form_factures";
  var l = Ladda.create(document.querySelector(".my-button"));
  // Start loading
  l.start();

  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_livraisonfrscab_generer_facture", { id: 0 }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result, textStatus, errorThrown) {
      l.stop();
      if (result.errors) {
        l.stop();
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        if(result.message.codeComptableIntrouvable == 1) {
          toastr.warning("Veuillez contacter l'administrateur!", "Code Comptable introuvable!", {
            timeOut: 4000,
          });
        }
        location.reload();
      } else if (result.code == 403) {
        l.stop();
        $("#MyModal").modal("hide");

        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  $("._multiple_actions").val("");

  e.preventDefault();
});

$(".actions").on("submit", ".form_generer", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = $("input[name=_id]").val();
  var selector = $(this);
  var l = Ladda.create(document.querySelector(".my-button"));
  //alert($("input[name=acompte]:checked" ).length)

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_livraisonfrscab_generer_facture", {
      id: $("input[name=acompte]:checked").length === 1 ? -1 : 0,
    }),
    data: dta,

    processData: false,
    contentType: false,
    success: function (result, textStatus, errorThrown) {
      if (result.errors) {
        l.stop();
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
      }
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        l.stop();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });

  e.preventDefault();
});
function generer(data){
    $("body").on("submit", ".form_generer", function (e) {
        var dta = new FormData(this);
        var form_name = $(this).attr("name");
        var id = $("input[name=_id]").val();
        var selector = $(this);
        var l = Ladda.create(document.querySelector(".my-button2"));
        //alert($("input[name=acompte]:checked" ).length)
      
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("ua_t_livraisonfrscab_generer_facture", {
            id: $("input[name=acompte]:checked").length === 1 ? -1 : 0,
          }),
          data: dta,
      
          processData: false,
          contentType: false,
          success: function (result, textStatus, errorThrown) {
            if (result.errors) {
              l.stop();
              ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 200) {
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              location.reload();
              /*$.ajax({
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                url: Routing.generate("ua_t_livraisonfrscab_apply_transitions", {
                  id: id,
                }),
                success: function (result) {
                  if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                    location.reload();
                  }
                  if (result.code == 201) {
                    // alert(result.valider);
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                    window.location.reload();
                  }
    
                  if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                  }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                    jqXHR.responseJSON.message.text,
                    jqXHR.responseJSON.message.title,
                    { timeOut: 4000 }
                  );
                },
              });*/
            }
            if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              l.stop();
            }
             if (result.code == 404) {
              l.stop();
              toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
              });
          }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
          },
        });
      
        e.preventDefault();
      });
}


$("#_delete_livraison").click(function (e) {

 // alert();

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));

if(_array_ids){


  swalWithBootstrapButtons
  .fire({
      showClass: {
          popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
  })
  .then((result) => {
      if (result.value) {
          $.ajax({
              type: "DELETE",
              url: Routing.generate("t_UaTLivraisonfrscab_delete_livraison"),
              data: {_array_ids},
              success: function (result) {
                  // console.log(result);
                  if (result.code == 200) {
                   
                      $('#grid').DataTable().ajax.reload();
                      toastr.success(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                      var url=Routing.generate("ua_t_livraisonfrscab_index");
                      window.location.href = url;
                     
                  }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                          jqXHR.responseJSON.message.text,
                          jqXHR.responseJSON.message.title,
                          {timeOut: 4000}
                  );
              },
          });
         
      }
  });

}

     

  e.preventDefault();
});
$("#_annuler").click(function (e) {
  var id = $(this).attr("data-id");
  swalWithBootstrapButtons
  .fire({
      showClass: {
          popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment annuler cette livraison ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> No !",
  })
  .then((result) => {
      if (result.value) {
          $.ajax({
              type: "POST",
              url: Routing.generate("ua_t_livraisonfrscab_annuler", {
                  id
              }),
              success: function (result) {
                  // console.log(result);
                  if (result.code == 200) {

                      toastr.success(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                      var url = Routing.generate('ua_t_livraisonfrscab_index'); 
                      window.location.href = url;


                  }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                          jqXHR.responseJSON.message.text,
                          jqXHR.responseJSON.message.title,
                          {timeOut: 4000}
                  );
              },
          });
  

      }
  });
  e.preventDefault();
});


$("body").on("click", "._delete_livraison", function (e) {


 

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));
  //alert(_array_ids);
  if (_array_ids) {


      swalWithBootstrapButtons
              .fire({
                  showClass: {
                      popup: "animatedSwal flipInX faster",
                  },
                  position: "top",
                  title: "Confirmation ?",
                  text: "Voulez vous vraiment supprimer cette liste ?",
                  type: "warning",
                  showCancelButton: true,
                  showCloseButton: true,
                  confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
                  cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
              })
              .then((result) => {
                  if (result.value) {
                      $.ajax({
                          type: "DELETE",
                          url: Routing.generate("t_UaTLivraisonfrscab_delete_livraison"),
                          data: {_array_ids},
                          success: function (result) {
                              // console.log(result);
                              if (result.code == 200) {

                                  $('#grid').DataTable().ajax.reload();
                                  toastr.success(result.message.text, result.message.title, {
                                      timeOut: 4000,
                                  });


                              }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                              toastr.warning(
                                      jqXHR.responseJSON.message.text,
                                      jqXHR.responseJSON.message.title,
                                      {timeOut: 4000}
                              );
                          },
                      });

                  }
              });

  }





});

var obj2 = new Object();
obj2["dossier_path"] = "change_dossier_livraison_popup";
listActions.listActions(obj2);


$("body").on("click", "._desactiver_livraison", function (e) {


  //alert();

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));

  if (_array_ids) {


      swalWithBootstrapButtons
              .fire({
                  showClass: {
                      popup: "animatedSwal flipInX faster",
                  },
                  position: "top",
                  title: "Confirmation ?",
                  text: "Voulez vous vraiment desactiver cette liste 2?",
                  type: "warning",
                  showCancelButton: true,
                  showCloseButton: true,
                  confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
                  cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
              })
              .then((result) => {
                  if (result.value) {
                      $.ajax({
                          type: "POST",
                          url: Routing.generate("t_UaTLivraisonfrscab_desactiver"),
                          data: {_array_ids},
                          success: function (result) {
                              // console.log(result);
                              if (result.code == 200) {

                                  table.ajax.reload();
                                  toastr.success(result.message.text, result.message.title, {
                                      timeOut: 4000,
                                  });


                              }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                              toastr.warning(
                                      jqXHR.responseJSON.message.text,
                                      jqXHR.responseJSON.message.title,
                                      {timeOut: 4000}
                              );
                          },
                      });

                  }
              });

  }





});


$("#_desactiver_livraison").click(function (e) {

 

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));




if(_array_ids){


  swalWithBootstrapButtons
  .fire({
      showClass: {
          popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette demande  3?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
  })
  .then((result) => {
      if (result.value) {
          $.ajax({
              type: "POST",
              url: Routing.generate("t_UaTLivraisonfrscab_desactiver"),
              data: {_array_ids},
              success: function (result) {
                  // console.log(result);
                  if (result.code == 200) {
                   
                      table.ajax.reload();
                      toastr.success(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                      
                     
                  }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                          jqXHR.responseJSON.message.text,
                          jqXHR.responseJSON.message.title,
                          {timeOut: 4000}
                  );
              },
          });
         
      }
  });

}


     

  e.preventDefault();
});


$('body').on('click','.pdf_by_code',function(e){
  window.open(Routing.generate("ua_t_livraison_document_old_sys", {
      id: $(this).attr('data-id')
  }), '_blank');
})

$('body').on('click', '.imprime_document', function(e) {
  e.preventDefault();
  if($(this).attr("data-valide") == 0)  {
      toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {timeOut: 4000})
      return
  }
  window.open($(this).attr('href'), '_blank');
});


$('body').on('click', '#ACHAT_PAR_SUBVENTION', function(e) {
  var checkbox = $("#ACHAT_PAR_SUBVENTION");
  var dropdown = $("#partner-dropdown");
  checkbox.change(function() {
      if(this.checked) {
          dropdown.show();
          $("#partner-select").select2({
            placeholder: "SEARCH PARTENAIRE SUBVENTION...",
            minimumInputLength: 0
          });
      } else {
          dropdown.hide();
      }
  });
});



$(document).ready(function() {
  $('#code_commande_frs').keypress(function(e) {
    if (e.which == 13) { // Check if "Enter" key was pressed

      var codeCommande = $('#code_commande_frs').val().trim(); // Get the value of the input field and remove any spaces
      e.preventDefault();
      $.ajax({
        url: Routing.generate("find_commandeFrs_faf"),
        type: 'POST',
        dataType: 'json',
        data: {code_commande_frs: codeCommande},
        success: function(response) {
          var livraisons = response.livraisons;
          console.log(livraisons);

          $('.bodycommand').empty(); // Remove existing rows from the table body

          var totalSum = 0; // Variable to hold the sum of livraison.total values

          // Loop through the livraisons array and add each item to the table
          for (var i = 0; i < livraisons.length; i++) {
            var livraison = livraisons[i];
            totalSum += livraison.total; // Add livraison.total to the total sum
            $('.bodycommand').prepend(`
              <tr>
                <td style="text-align: center;">${livraison.id}</td>
                <td style="text-align: center;">${livraison.code}</td>
                <td style="text-align: center;">${livraison.total}
                </td>
              </tr>
            `);
          }

          // Add a row at the end to display the total sum
          $('.bodycommand').append(`
            <tr>
              <td style="text-align: center;" colspan="2">
                <span>
                <strong>Montant total à facturer :</strong>
                </span>
              </td>
              <td style="text-align: center;">
                <span class="badge badge-light rounded-pill badge-sm">${totalSum}</span>
              </td>
            </tr>
          `);
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
      });
    }
  });
});



$(document).ready(function() {
  $('#Enregistrer_faf').click(function(e) {
      // Empêcher l'envoi du formulaire
      e.preventDefault();
      
      // Disable the button
    $(this).prop('disabled', true);

      // Vérifier si les champs de formulaire ne sont pas vides
      var error = false;
      if ($('#code_commande_frs').val() == '') {
          $('#code_commande_frs').addClass('is-invalid');
          error = true;
      }
      if ($('input[name="dateFacture"]').val() == '') {
          $('input[name="dateFacture"]').addClass('is-invalid');
          error = true;
      }
      if ($('input[name="Observation"]').val() == '') {
          $('input[name="Observation"]').addClass('is-invalid');
          error = true;
      }
      if ($('input[name="refDocAsso"]').val() == '') {
          $('input[name="refDocAsso"]').addClass('is-invalid');
          error = true;
      }
      if ($('input[name="dateDocAsso"]').val() == '') {
          $('input[name="dateDocAsso"]').addClass('is-invalid');
          error = true;
      }

      if (error) {
          // Afficher une alerte si un champ est vide
          toastr.warning('Veuillez remplir tous les champs obligatoires', 'warning', {
            timeOut: 4000,
        });
        $('#Enregistrer_faf').prop('disabled', false);

      } else {
          // Soumettre le formulaire avec AJAX
          var codeCommande = $('#code_commande_frs').val().trim();
          var dateFacture = $('#dateFacture').val();
          var Observation = $('#Observation').val();
          var refDocAsso = $('#refDocAsso').val();
          var dateDocAsso = $('#dateDocAsso').val();
          $.ajax({
              type: 'POST',
              url: Routing.generate("handle_form_faf_globale"),
              data: {
                code_commande_frs: codeCommande,
                dateFacture:dateFacture,
                Observation: Observation,
                refDocAsso:refDocAsso,
                dateDocAsso:dateDocAsso
              },

              success: function(result) {
                 // Enable the button
                 $('#Enregistrer_faf').prop('disabled', false);
                if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                  })
                  // Recharger la page
                  location.reload();
                }else if(result.code == 500){
                  toastr.error(result.message.text, result.message.title, {
                    timeOut: 4000,
                    })

                }else if(result.code == 501){
                  toastr.error(result.message.text, result.message.title, {
                    timeOut: 4000,
                    })
                }
                
         
                
                // }
              },
              error: function() {
                  // Faire quelque chose en cas d'erreur
                  toastr.error('Erreur lors de la soumission du formulaire', 'error', {
                    timeOut: 4000,
                });
                
            // Enable the button
            $('#Enregistrer_faf').prop('disabled', false);
              }
          });
      }
  });
});
