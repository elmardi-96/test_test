const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../ManagementErrors/index.js";

import { deleteCab } from "../../functions/delete.js";

import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import * as listActions from "../../functions/autoFunctionAjax.js";
import * as Ladda from "ladda";
global.$ = $;

const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});

function create_custom_dropdowns(element, att) {
  $.fn.select2.amd.define("select2/i18n/fr", [], function () {
    // Russian
    return {
      errorLoading: function () {
        return "test";
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;
        var message = "Пожалуйста, удалите " + overChars + " символ";
        if (overChars >= 2 && overChars <= 4) {
          message += "а";
        } else if (overChars >= 5) {
          message += "ов";
        }
        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;

        var message =
          "Tapez " +
          remainingChars +
          " caractère ou plus pour faire des recherches";

        return message;
      },
      loadingMore: function () {
        return "test";
      },
      maximumSelected: function (args) {
        var message = "Вы можете выбрать " + args.maximum + " элемент";

        if (args.maximum >= 2 && args.maximum <= 4) {
          message += "а";
        } else if (args.maximum >= 5) {
          message += "ов";
        }

        return message;
      },
      noResults: function () {
        return "aucun resultat trouve";
      },
      searching: function () {
        return "Rechercher…";
      },
    };
  });
  window.element = element;
  window.att = "current_select_" + att;
  if (window.element.attr("data-entity")) {
    $.ajax({
      type: "GET",
      url: Routing.generate("t_achatdemandeinternecab_find_article_term", {
        selected: att,
        entity: window.element.attr("data-entity"),
        column: window.element.attr("data-column"),
      }),
    }).then(function (data) {
      // console.log(data)
      window.element
        .prepend('<option selected=""></option>')
        .select2({
          //allowClear: true,
          language: "fr",
          data: data.results,
          minimumResultsForSearch: -1,
          dropdownCssClass: window.att,
        })
        .val(att)
        .trigger("change");
      $(".load-er").fadeOut(70).remove();
      $(".det_for").fadeIn(70);
    });
  } else {
    // toastr.warning('impossible de charger l\'entiter', 'Erreur', {timeOut: 4000})
  }
  //apply to select2
  window.element.on("select2:open", function (e) {
    // console.log($(this))

    window.element = $(this);
    $(".tt").val(window.search);

    //alert()
    $(".ttp").remove();
    $(".select2-search--hide").after(
      '<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>'
    );
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function (valuennn, e) {
        //console.log(e)
        $(".select2-results__option").hide();
        $(".select2-results").prepend(
          '<p class="select2-results__option">Rechercher…</p>'
        );

        window.search = valuennn;
        //alert((valuennn))
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: Routing.generate(
              "t_achatdemandeinternecab_find_article_term",
              {
                term: valuennn,
                selected: att,
                entity: window.element.attr("data-entity"),
                column: window.element.attr("data-column"),
              }
            ),
            success: function (result, textStatus, errorThrown) {
              if (valuennn == $(".tt").val()) {
                window.element
                  .empty()
                  .prepend('<option selected=""></option>')
                  .select2({
                    language: "fr",
                    //allowClear: true,
                    minimumResultsForSearch: -1,
                    data: result.results,
                  })
                  .val(att)
                  .trigger("change");
                window.element.select2("open");
                //alert(this.value)
                //alert(valuennn)
                $(".tt").focus();
                $(".tt").val(window.search);
              }
            },
          });
        } else {
          toastr.warning("impossible de charger l'entiter", "Erreur", {
            timeOut: 4000,
          });
        }
      },
    });
  });

  window.element.on("select2:close", function (e) {
    $(".tt").val(window.search);
  });
  window.element.on("select2:select", function (e) {
    //alert()
    var data = e.params.data;
    console.log(data);
    $(".prixunitaire").val(data.prixAchat);
    $(".tva").val(data.tva);
    $(".select2_unite").val(data.unite).trigger("change");
  });

  $("body").on("click", ".select2-container", function () {
    //$('.select2-search--hide').after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").trigger("focus");
  });
}

var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("ua_t_facturefrscab_list") + location.search, // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "asc"]],
  columns: [
    { orderable: true, width: "5%", searchable: true, targets: [0] },
    { orderable: true, visible: true },
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
    { orderable: true, visible: true },
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
  // fixedHeader: true,
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
    [1, 3, 4, 6, 7, 8, 9, 10, 11, 12],
    []
  );
  CustomSearchDatatable.CustomSearchDate(api, [2], []);
  CustomSearchDatatable.CustomSearchSelect(api, [5], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});
/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$(".action_head").click(function () {
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

/*  $('#grid').on('click', '.statut_op', function (event) {
 var name = $(this).attr('name');
 var id = $(this).attr('rol'); */
//alert(name+""+id);
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true,
});

$(".action_head").click(function () {
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

$(".list_actions").change(function (e) {});
$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});

$(document).ready(function () {
  //alert(1)
  /*  document.addEventListener("DOMContentLoaded", function (event) {
     
     $('#grid').show(500);
     });*/
  // console.log('Hello Webpack Encore! Edit me in assets/js/app.js!!!');
  $("#_statut").click(function (e) {
    var id = table.row(".selected").id();
    if (id) {
      $.ajax({
        type: "POST",
        url: Routing.generate("ua_t_facture_statut", { id: id }),
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

  $(".actions").on("click", ".close-me", function (e) {
    //$('.close-me').click(function (e){
    $(".actions").removeClass("sidebar-open");
    e.preventDefault();
  });
  $(".actions").on("submit", ".form_statut", function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = table.row(".selected").id();
    if (id) {
      $.ajax({
        type: "POST",
        url: Routing.generate("ua_t_facture_statut", { id: id }),
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
        "Veuillez Renseigner une ligne pour effectuer cette operation",
        "warning",
        { timeOut: 4000 }
      );
    }

    e.preventDefault();
  });
  $("#_demande").click(function (e) {
    var id = table.row(".selected").id();
    if (id) {
      var url = Routing.generate("ua_t_facturefrscab_Paiement", { id: id });
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
      var url = Routing.generate("ua_t_facturefrscab_consulte", { id: id });
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
    //  var id = table.row('.selected').id();

    var id = $("#test").data("factureId");
    // alert(id);
    if (id) {
      var url = Routing.generate("pdf_show_facture", { id: id });
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

  $(".edit").on("submit", ".form", function (e) {
    //alert('d')
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button

    var id = $("#_id").val();

    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector(".my-button"));

    // Start loading
    l.start();
    // console.log(test);
    //console.log(e.type);
    // alert(id);
    $.ajax({
      type: "POST",
      url: Routing.generate("t_UaTFacturefrscab_update_acompte", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        l.stop();
        if (result.errors) {
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.empty) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        } else if (result.data) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });

          location.reload();
        } 
        if (result.code == 403) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
    e.preventDefault();
  });

  ///////////////////////////////////////////////////

  $(document).ready(function () {
    $(".det_for")
      .hide()
      .after(
        '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
      );
    create_custom_dropdowns($(".articles"), "");
  });

  $(".new-article-btn").click(function (e) {
    //alert()
    $(".edit-new-article").show();
    $(this).hide();
    e.preventDefault();
  });

  $(".edit").on("submit", ".detail_form_add_article", function (e) {
    //alert();
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = $("#_id").val();
    var selector = $(this);

    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: Routing.generate("t_factureavoir_insert", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        //  console.log(result);
        if (result.errors) {
          l.stop();
          ShowFormErrors(selector, form_name, result.errors);
          /*  $('.errors-list').remove();
                   jQuery.each(result.errors.violations, function (i, val) {
                   var column = val.propertyPath;
                   var columnName = column.split('.');
                   console.log(columnName[1]);
                   $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                   });*/
        } else if (result.data) {
          l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          location.reload();
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        }
      },
    });

    e.preventDefault();
  });

  ///////////////////////////////////////////////////

  $("body").on("click", ".ua_t_facturefrscab_apply_transitions", function (e) {
    var dta = new FormData();
    var id = $(this).attr("data-id");
    var title = $(this).attr("data-title");
    var transition = $(this).attr("data-transition");

    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
    if (id) {
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
              url: Routing.generate("ua_t_facturefrscab_apply_transitions", {
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
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  /*var url = Routing.generate("ua_t_facturefrscab_Paiement", {
                    id: result.id,
                  });*/
                  //window.location.href = url;
                  location.reload();
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
            });
          }
        });
    } else {
      toastr.warning("Facture non renseigne ", "warning", { timeOut: 4000 });
    }
    e.preventDefault();
  });
});

var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
});

$("._generer_form").submit(function (e) {
  var dta = new FormData(this);
  var id = $("input[name=_id]").val();

  //alert();
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("ua_t_facturefrscab_avoir_insert", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        $.each(result.errors, function (key, value) {
          toastrWidtoutProgress.warning(value, "warning");
        });
        l.stop();
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        l.stop();
        location.reload();
      } else if (result.empty) {
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

var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
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
      .column(4)
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Total over this page
    pageTotal = api
      .column(4, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Update footer
    $(api.column(1).footer()).html(
      "Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2)
    );
  },
});
$(document).ready(function () {
  //$('body').on('change', '.paiement', function (e) {
  //$('.paiement').bind('load',function(){

  $(".paiement")
    .on("change rightnow", function () {
      if ($(this).val() == 2) {
        $(".bloc_cheque").show();
      } else {
        $("#univ_t_reglement_dateEcheance").val(null);
        $("#univ_t_reglement_reference").val(null);
        $(".bloc_cheque").hide();
      }
      if ($(this).val() == 1 || $(this).val() == 4) {
        $(".bloc_banque").hide();
      } else {
        $(".bloc_banque").show();
      }
      //  console.log($(this).val());
    })
    .triggerHandler("rightnow");
});

$("#_delete_facture").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "t_UaTFacturefrscab_delete_facture",
    redirection: "ua_t_facture_index",
    token: token,
    id: id,
  };
  deleteCab(obj);
  e.preventDefault();
});

var table2 = $("#grid2").DataTable({
  ajax: {
    url: Routing.generate("ua_t_facturefrscab_acompte_list") + location.search, // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "asc"]],
  columns: [
    { orderable: true, width: "5%", searchable: true, targets: [0] },
    { orderable: true, visible: true },
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
    { orderable: true, visible: true },
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
});
table2.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  CustomSearchDatatable.CustomSearchText(
    api,
    [],
    []
  );
  CustomSearchDatatable.CustomSearchDate(api, [], []);
  CustomSearchDatatable.CustomSearchSelect(api, [], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



$("body").on("click", "#_acompte", function (e) {
  //alert();
  $.ajax({
    type: "POST",
    url: Routing.generate("t_uatfacture_add_acompte_popup"),
    success: function (result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      $(".sel2").select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    },
  });
  e.preventDefault();
});

$("body").on("submit", ".save_form_acompte", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.querySelector(".my-button2"));

  // Start loading
  l.start();

  $.ajax({
    type: "POST",
    url: Routing.generate("t_uatfacture_add_acompte_popup"),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });

        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        //table2.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        //$("#ModalDocumentDynamique").modal("hide");
        //l.stop();

        var url = Routing.generate("t_UaTFacturefrscab_update_acompte", {
            id: result.data,
        });
        window.location.href = url;

        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      }
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

var obj2 = new Object();
listActions.listActions(obj2);




$(".parvenue").select2();
if($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1){
    $('.dateDoc,.refDoc').hide().removeClass('classShow'); 
}else{
    $('.dateDoc,.refDoc').show().addClass('classShow');  
}

$('.parvenue').on('select2:selecting', function(e) {
    //alert()
    if(e.params.args.data.text.indexOf('non parvenue') !== -1){
       $('.dateDoc,.refDoc').hide().removeClass('classShow'); 
    }else{
        $('.dateDoc,.refDoc').show().addClass('classShow');  
    }
});
