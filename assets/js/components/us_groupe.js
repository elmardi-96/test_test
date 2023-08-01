const routes = require("../../../public/js/fos_js_routes.json");
import Routing from "../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);

import * as Ladda from "ladda";
/*js tree*/
require("./../../css/plugins/jsTree/style.min.css");
require("./../../js/plugins/jsTree/jstree.min.js");

require("./../../css/plugins/switchery/switchery.css");
require("./../../js/plugins/switchery/switchery.js");

$(".new , .edit").on("submit", "form", function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
});

/*message notification  swal*/

const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});

/*initial object js tree*/

$("#container").jstree();

/*select 2*/
var select2_users = $(".select2_users").select2({
  placeholder: "Utilisateurs Sans groupe",
  allowClear: true,
});
var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("us_groupe_list"), // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200, -1],
    [10, 15, 25, 50, 100, 200, "All"],
  ],
  pageLength: 15,
  //    "order": [[0, "desc"]],
  columns: [
    { orderable: false, width: "5%", searchable: true, targets: [0] },
    { orderable: true, width: "25%" },
    { orderable: true, width: "25%" },
    { orderable: true, width: "25%" },
    { orderable: true, width: "54%" },
  ],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
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
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = Routing.generate("us_groupe_edit", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});


jQuery.each($('.toastr-msg'), function (i, val) {
  console.log($(this).attr('data-toastr'));
  console.log($(this).text());
  if ($(this).attr('data-toastr') == "success") {
      toastr.success("Succées", $(this).text(), {timeOut: 4000})
  } else if ($(this).attr('data-toastr') == "warning") {
      toastr.warning("Warning", $(this).text(), {timeOut: 4000})
  } else if ($(this).attr('data-toastr') == "error") {
      toastr.error("erreur", $(this).text(), {timeOut: 4000})
  }
});


$(".new").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  console.log(e.type);
  $.ajax({
    type: "POST",
    url: Routing.generate("usGroupe_insert"),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          $("." + selector + " #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        $(".form")[0].reset();
        $(".new .table-detail tbody").hide();
        $(".new-article-btn").show();
        $(".new .table-detail > tbody tr").not(":last").remove();
        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();

  var data = api.data();
  //  console.log(api.data())

  console.log(st);
  if (st != null) {
    $.each(st.columns, function (key, value) {
      if (value.search.search != "") {
        $(".remove-filter").show();
        return false;
      }
    });

    /* recupérer les valeurs déja saisie dans le filtre */

    $(".search_column1").val(st.columns[1].search.search);
    $(".search_column2").val(st.columns[2].search.search);
    $(
      ".search_column3 option[value='" + st.columns[3].search.search + "']"
    ).attr("selected", "selected");
    $(".search_column6").val(st.columns[6].search.search);
  }
});

/*column 1 de datatble search*/

var search_column1 = $(".search_column1").datepicker({
  todayBtn: "linked",
  keyboardNavigation: true,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true,
  language: "fr",
});
search_column1.on("changeDate", function (e) {
  table.columns(1).search(this.value).draw();
});
$(".search_column1_clear").click(function () {
  $(".search_column1").datepicker("setDate", null).datepicker("fill");
});

$(".search_column2").on("keyup", function () {
  table.columns(2).search(this.value).draw();
});

$(".search_column3").on("change", function () {
  table.columns(3).search(this.value).draw();
});

$(".search_column6").on("change", function () {
  table.columns(6).search(this.value).draw();
});

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

$("body").on("change", ".list_actions", function () {
  var _action = [];
  $.each($("input[name=_action]:checked"), function () {
    _action.push($(this).val());
  });

  $.ajax({
    type: "DELETE",
    url: Routing.generate("t_achatdemandeinternedet_delete_list"),
    data: { _action },
    //        processData: false,
    //        contentType: false,
    success: function (result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      //            if (result.errors) {
      //                $('.errors-list').remove();
      //                jQuery.each(result.errors.violations, function (i, val) {
      //                    var column = val.propertyPath;
      //                    var columnName = column.split('.');
      //                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
      //                });
      //            } else if (result.empty) {
      //                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
      //                // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      //            } else if (result.data) {
      //                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
      //                $(".form")[0].reset();
      //                $(".new .table-detail tbody").hide();
      //                $('.new-article-btn').show();
      //                $(".new .table-detail > tbody tr").not(":last").remove();
      //                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      //            }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });

  //  alert("My favourite sports are: " + favorite.join(", "));
});

$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true,
});

$(".list_actions").change(function (e) {});

$(".new , .edit").on("change", ".compteMasse", function (e) {
  var $form = $(this).closest("form");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //console.log(data);

  //console.log($form.attr("method"));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      // console.log(html);
      $(".compteRubrique").replaceWith($(html).find(".compteRubrique"));
    },
  });
  e.preventDefault();
});

$(".new , .edit").on("change", ".compteRubrique", function () {
  var $form = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      console.log(html);
      $(".comptePoste").replaceWith($(html).find(".comptePoste"));
    },
  });
});

$(".new , .edit").on("change", ".comptePoste", function () {
  var $form = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
  data[$(".compteRubrique").attr("name")] = $(".compteRubrique").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      console.log(html);
      $(".compte").replaceWith($(html).find(".compte"));
    },
  });
});

var array_detail = [];
$(".new").on("submit", ".detail_form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  console.log(selector);
  $.ajax({
    type: "POST",
    url: Routing.generate("t_achatdemandeinternedet_new"),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          $("." + selector + " #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
      } else if (result.data) {
        $(".detail_form")[0].reset();
        $(".errors-list").remove();
        $(".article").focus();
        //                console.log(result);
        let lineNo = 1;
        array_detail.push(result.data);
        $(".new .table-detail > tbody").empty();
        $.each(array_detail, function (i, value) {
          var my_row =
            " <tr><td>" +
            (i + 1) +
            "</td><td>" +
            value.article +
            "</td><td>" +
            value.quantite +
            "</td><td>" +
            value.prixunitaire +
            "</td> <td>" +
            value.tva +
            "</td><td>" +
            value.prixttc +
            "</td><td><a class='delete_element' id=" +
            i +
            "><i class='fa fa-trash text-navy'></i></a></td></tr>";
          $(".new .table-detail > tbody").append(my_row);
          lineNo++;
        });
        $("#t_achatdemandeinternecab_detail").val(JSON.stringify(array_detail));
      }
    },
  });
  e.preventDefault();
});

$(".new").on("click", ".delete_element", function (e) {
  console.log($(this).attr("id"));
  array_detail.splice($(this).attr("id"), 1);
  console.log(array_detail);
  $(".new .table-detail > tbody tr").remove();
  $.each(array_detail, function (i, value) {
    var my_row =
      " <tr><td>" +
      (i + 1) +
      "</td><td>" +
      value.article +
      "</td><td>" +
      value.quantite +
      "</td><td>" +
      value.prixunitaire +
      "</td> <td>" +
      value.tva +
      "</td><td>" +
      value.prixttc +
      "</td><td><a class='delete_element' id=" +
      i +
      "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail >tbody").append(my_row);
  });
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
    url: Routing.generate("us_groupe_update", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      $(".errors-list").remove();
      if (result.errors) {
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".form #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
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

  console.log(id);
  swal(
    {
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "No, Annuler!",
      closeOnConfirm: true,
      closeOnCancel: true,
    },
    function (isConfirm) {
      if (isConfirm) {
        $.ajax({
          type: "DELETE",
          url: Routing.generate("us_groupe_delete", { id: id, token: token }),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            //   console.log(result);
            if (result.data == "deleted") {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              selector.parent().parent().hide();
              // swal(result.message.title, result.message.text, result.message.success);
              //location.reload();
            } else if ((result.data = "error")) {
              toastr.error(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              //swal(result.message.title, result.message.text, result.message.error);
            }
          },
        });
      }
    }
  );

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

  $.ajax({
    type: "POST",
    url: Routing.generate("t_achatdemandeinternecab_edit_detail", { id: id }),
    success: function (result) {
      var slh = selector
        .parent()
        .parent()
        .empty()
        .append("<td colspan='7'>" + result + "</td>");
      // slh.append(result)
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
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: Routing.generate("t_achatdemandeinternecab_update_detail", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".detail_form #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
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

/*afficher la formulaire d'ajout d'un nouveau article */

//$('.edit-new-article-btn').click(function (e) {
//    $('.edit-new-article').show();
//    $(this).hide();
//    e.preventDefault();
//});

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
  $.ajax({
    type: "POST",
    url: Routing.generate("t_achatdemandeinternedet_insert", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
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

$(".statut_action").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("t_achatdemandeinternecab_statut", { id: id }),
      success: function (result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette opération",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#show_action").click(function (e) {
  var id = table.row(".selected").id();

  if (id) {
    var url = Routing.generate("t_achatdemandeinternecab_show", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette opération",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#edit_action").click(function (e) {
  var id = table.row(".selected").id();

  if (id) {
    var url = Routing.generate("us_groupe_edit", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette opération",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("t_achatdemandeinternecab_statut", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split(".");
            // console.log(columnName[1]);
            $(".form_statut #" + form_name + "_" + columnName[1]).after(
              "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                val.title +
                "</span></span></span>"
            );
          });
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
      "Veuillez Renseigner une ligne pour effectuer cette opération",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$(document).on("click", "._t_affaire_quick", function (e) {
  $.ajax({
    type: "POST",
    url: Routing.generate("t_affaire_new_quick"),
    success: function (result) {
      $(".actions").html(result);
      $(".actions").toggleClass("sidebar-open");
    },
  });
  e.preventDefault();
});

$(document).on("submit", ".form_t_affaire_quick", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var selector = $(this).attr("class").split(" ")[0];
  $.ajax({
    type: "POST",
    data: dta,
    processData: false,
    contentType: false,
    url: Routing.generate("t_affaire_new_quick_insert"),
    success: function (result) {
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          $("." + selector + " #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        $(".actions").empty().removeClass("sidebar-open");

        var data = {};

        $.ajax({
          url: Routing.generate("t_achatdemandeinternecab_new"),
          type: "POST",
          data: data,
          success: function (html) {
            $(".affaire").replaceWith($(html).find(".affaire"));
          },
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

$("._permission").click(function (e) {
  var groupe_id = table.row(".selected").id();
  if (groupe_id) {
    var url = Routing.generate("us_groupe_modules", { groupe_id: groupe_id });
    window.location.href = url;
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette opération ",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("._utilisateur").click(function (e) {
  // var groupe_id = table.row('.selected').id();
  var groupe_id = $("#test").data("groupeId");
  //  alert(groupe_id);
  if (groupe_id) {
    var url = Routing.generate("us_groupe_utilisateurs", {
      groupe_id: groupe_id,
    });
    window.location.href = url;
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette opération ",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("._users_groupe").submit(function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var l = Ladda.create(document.querySelector(".my-button"));
  //    // Start loading
  l.start();
  var selector = $(this).attr("class").split(" ")[0];
  console.log(selector);

  $.ajax({
    type: "POST",
    url: Routing.generate("us_groupe_utilisateurs", {
      groupe_id: dta.get("form[_groupe]"),
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      // l.stop();
      if (result.errors) {
        $("." + selector + " #form_user").after(
          "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
            result.message.text +
            "</span></span></span>"
        );
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
      }
    },
  });
  e.preventDefault();
});

$("._user_groupe_delete").click(function (e) {
  var id = $(this).attr("id");
  console.log(id);

  swalWithBootstrapButtons
    .fire({
      showClass: {
        popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez-vous vraiment supprimer cet utilisateur de ce groupe ?",
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
          url: Routing.generate("us_groupe_delete_user_from_groupe", {
            id: id,
          }),
          success: function (result) {
            console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              location.reload();
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

  e.preventDefault();
});

var permissions = $(".permissions").select2({
  placeholder: "Permissions",
  allowClear: true,
});

$(".Toogle").bootstrapToggle();

$(function () {
  $(".select_all_permissions").change(function () {
    console.log($(this).attr("id"));
    var sousModuleSelected = ".ToogleSousModuleSelect_" + $(this).attr("id");
    //        $('.ToogleSousModule').removeClass('ToogleSousModule');
    //        var module_id = $(this).attr('id');
    if ($(this).prop("checked")) {
      //           $(".selected > option").prop("selected","selected");
      //            $(".selected").trigger("change");

      var optionValues = [];

      $(sousModuleSelected + " option").each(function () {
        optionValues.push($(this).val());
      });

      $(sousModuleSelected).val(optionValues).trigger("change");
    } else {
      $(sousModuleSelected).val(null).trigger("change");
    }
  });

  $(".ToogleModule").change(function () {
    $(".ToogleSousModule").removeClass("ToogleSousModule");
    var module_id = $(this).attr("id");
    if ($(this).prop("checked")) {
      //            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
      //                $(val).bootstrapToggle('on');
      //            });
    } else {
      $(".ToogleSousModule_" + module_id)
        .not($(this))
        .each(function (key, val) {
          $(val).bootstrapToggle("off");
        });
    }
  });

  $(".ToogleSousModule").change(function () {
    var str = $(this).attr("id");
    var res = str.split("_");
    var module = res[0];
    var sousModule = res[1];

    console.log("ici");
    if ($(this).prop("checked") == true) {
      $(".ToogleSousModuleSelect_" + sousModule).prop("disabled", false);
    } else {
      $(".ToogleSousModuleSelect_" + sousModule).prop("disabled", true);
    }
  });
});

$(".form-permission").submit(function (e) {
  //$('.new').on('submit', '.form', function (e) {
  //    var form_name = $(this).attr('name');
  var dta = new FormData(this);
  //    var selector = $(this).attr('class').split(' ')[0];

  $.ajax({
    type: "POST",
    url: Routing.generate("us_groupe_permission_insert"),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });

        setTimeout(function () {
          location.reload();
        }, 2000);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

$('.usgroupeselect2').on('select2:selecting', function(e) {
  console.log('Selecting: ' , e.params.args.data);
  $('#external-events').html('<div class="using_json m-l-15"></div>');
  if( e.params.args.data.id == ''){
    $('.message2').show();
  }
 else{
  $('.message2').hide();
  $(".using_json")
  .jstree({
    core: {
      data: {
        url: Routing.generate("us_groupe_permission_modules_groupe", {
          groupe: $("#_id").val(),
          dossier:e.params.args.data.id
        }),
        dataType: "json",
      },
      check_callback: true,
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
    checkbox: {
      keep_selected_style: true,
      whole_node: true, // to avoid checking the box just clicking the node
      tie_selection: false,
    },
    plugins: ["search", "themes", "types", "checkbox"],
  })
  .bind("loaded.jstree", function (event, data) {
    var arr = [];
    //console.log(data.instance.get_checked())
    //console.log(data)
    //console.log($("#using_json").jstree(true).get_selected())
    $.each($(".using_json").jstree("get_checked", true), function (i) {
      //arr[]
      //console.log(this)
      if (this.id.indexOf("ope_Link_") >= 0) {
        arr[i] = this.li_attr;
      }
    });

    window.all = arr;
    /* var result = $(this).jstree("get_selected", true);
    //console.log($("#using_json").jstree("get_selected").text())
    window.all = result
      .filter((node) => {
        return node.state.disabled == false;
      })
      .map((checked) => {
        if (checked.id.indexOf("ope_Link_") >= 0) {
          return checked.li_attr;
        }
      });*/
    console.log(arr);
  })
  .on("select_node.jstree", function (e, data) {
    console.log(data);
    //ope_Link_
    var str = data.node.id;
    console.log(data);

    if (data.node.id.indexOf("ope_Link_") >= 0) {
      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
    }
  });
 }

 

});

var arry = [];
var i = 0;


/* .on("uncheck_node.jstree", function (e, data) {
    /*alert(data.node.id + ' ' + data.node.text +
        (data.node.state.checked ? ' CHECKED': ' NOT CHECKED'))
    console.log(data.node);
    alert(
      data.node.id +
        " " +
        data.node.text +
        (data.node.state.checked ? " CHECKED" : " NOT CHECKED")
    );
    $.map(data.node.children_d, function (i) {
      console.log(i);
      if (i.indexOf("ope_Link_") == 0) {
      }
    });
    if (data.node.id.indexOf("ope_Link_") >= 0) {
      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
      alert(
        data.node.id +
          " " +
          data.node.text +
          (data.node.state.checked ? " CHECKED" : " NOT CHECKED")
      );
    }
  });*/

$("#new_groupe").on("click", function (e) {
  var l = Ladda.create(document.querySelector(".my-button"));
  var checkedNodes = [];
  $.each($(".using_json").jstree("get_checked", true), function (i) {
    if (this.id != "" || this.id != null) {
      if (this.id.indexOf("ope_Link_") >= 0) {
        checkedNodes[i] = this.li_attr;
      }
    }
  });

  swalWithBootstrapButtons
    .fire({
      showClass: {
        popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment ajouter ces permissions ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-plus'></i> Enregistrer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    })
    .then((result) => {
      if (result.value) {
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("us_groupe_permission_operations", {
            groupe: $("#_id").val(),
            token: $("#_id").attr("data-token"),
            dossier:$('.usgroupeselect2').val()
          }),
          data: { data: checkedNodes, all: window.all },
          success: function (result) {
            console.log(result);
            if (result.code == 200) {
              // table.ajax.reload();
              //   alert();
              window.all = checkedNodes;
              checkedNodes = null;
              // l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              var url = Routing.generate("us_groupe_permission_modules_list",{
                group: $("#_id").val()
              });
              window.location.href = url;
              //$(".using_json").jstree(true).refresh();
              //table2.ajax.reload();
            } else if (result.code == 403) {
              l.stop();
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000,
              });
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.warning(
              jqXHR.responseJSON.message.text,
              jqXHR.responseJSON.message.title,
              { timeOut: 4000 }
            );
          },
        });
      }
    });
  e.preventDefault();
});

var table2 = $("#grid2").DataTable({
  paging: true,
  "order": [],
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  }
});





$(".using_json2")
  .jstree({
    core: {
      data: {
        url: Routing.generate("us_groupe_permission_modules_groupe_operation", {
          groupe: $("#_id").val(),
        }),
        dataType: "json",
      },
      //check_callback: true,
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

/*
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000})
            }
        });
        e.preventDefault();
    });*/

    $('#_delete').click(function (e) {
      var id = $("#test").data("groupeId");
        if (id) {
            swalWithBootstrapButtons.fire({
                showClass: {
                    popup: 'animatedSwal flipInX faster'
                },
                position: 'top',
                title: "Confirmation ?",
                text: "Voulez vous vraiment supprimer cet enregistrement ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        type: 'DELETE',
                        url: Routing.generate('us_groupe_delete', { 'id': id }),
                        success: function (result) {
                            console.log(result);
                            if (result.code == 200) {
                                // table.ajax.reload();
                                //   alert();
                                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                                var url = Routing.generate('us_groupe_index');
                                window.location.href = url;
                            } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                        }
                    });
                }
            });
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
        }
        e.preventDefault();
    });





    
    $('#using_json')
    .jstree({
        core: {
            data:
            {
                "url": Routing.generate('us_groupe_permission_modules_groupe', {
                  groupe: $("#_id").val(),
                }),
                "dataType": "json"
            }
        },
        types: {
            "root": {
                "icon": "glyphicon glyphicon-folder-close"
            },
            "child": {
                "icon": "glyphicon glyphicon-folder-open"
            },
            "default": {
            }

        },
       /* "checkbox": {
            "keep_selected_style": true,
            whole_node: true, // to avoid checking the box just clicking the node 
            tie_selection: true
        },*/
        plugins: ["search", "themes", "types" ]
    }).on("select_node.jstree", function (e, data) {

       console.log(data)
       //ope_Link_
       if (data.node.id.indexOf("ope_Link_") >= 0) {
        var checkBoxes = $("#"+data.node.id).find('input');
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
       }


    });





    $('.using_json3')
    .jstree({
        core: {
            data:
            {
                "url": Routing.generate('us_groupe_permission_modules_groupe_list_with_group', {
                  groupe: $("#_id").val(),
                }),
                "dataType": "json"
            }
        },
        types: {
            "root": {
                "icon": "glyphicon glyphicon-folder-close"
            },
            "child": {
                "icon": "glyphicon glyphicon-folder-open"
            },
            "default": {
            }

        },
       /* "checkbox": {
            "keep_selected_style": true,
            whole_node: true, // to avoid checking the box just clicking the node 
            tie_selection: true
        },*/
        plugins: ["search", "themes", "types" ]
    }).on("select_node.jstree", function (e, data) {

       console.log(data)
       //ope_Link_
       if (data.node.id.indexOf("ope_Link_") >= 0) {
        var checkBoxes = $("#"+data.node.id).find('input');
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
       }


    });
