const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
//plugins/steps/jquery.steps.css
require("../../../../assets/js/plugins/steps/jquery.steps.css");
require("../../../../assets/js/plugins/steps/jquery.steps.min.js");
require("../../../../assets/js/plugins/validate/jquery.validate.min.js");
import { ShowFormErrors } from "../../ManagementErrors/index.js";
import * as Ladda from "ladda";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import { deleteCab } from "../../functions/delete.js";
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
        return "aucun résultat trouvé";
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
      console.log(data);
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
    console.log($(this));

    window.element = $(this);

    //alert()
    $(".ttp").remove();
    $(" .select2-search--hide").after(
      '<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>'
    );
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function (valuennn, e) {
        console.log(e);
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

  window.element.on("select2:select", function (e) {
    //alert()
    var data = e.params.data;
    $(".prixunitaire").val(data.prixAchat);
    $(".tva").val(data.tva);
    $(".remise").val(data.remise);

    
    $(".select2_unite").val(data.unite).trigger("change");
  });

  $("body").on("click", ".select2-container", function () {
    $(".tt").trigger("focus");
  });
}
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
    url: Routing.generate("erp_client_list") + location.search, // json datasource
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
    { orderable: true, width: "10%" },
    { orderable: true, width: "10%" },
    { orderable: true, width: "15%" },
    { orderable: true, width: "20%" },
    { orderable: true, width: "20%" },
    { orderable: true, width: "10%" },
   
    { orderable: true, width: "10%" },
    { orderable: true, width: "10%" },
    { orderable: true, width: "10%" },
    { orderable: true, width: "10%" },
    { orderable: true, width: "10%" },
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
  fixedHeader: true,
});




$(".wizard-big")
  .steps({
    bodyTag: "fieldset",
    onStepChanging: function (event, currentIndex, newIndex) {
      // Always allow going backward even if the current step contains invalid fields!
      if (currentIndex > newIndex) {
        return true;
      }

      // Forbid suppressing "Warning" step if the user is to young
      if (newIndex === 3 && Number($("#age").val()) < 18) {
        return false;
      }

      var form = $(this);

      // Clean up if user went backward before
      if (currentIndex < newIndex) {
        // To remove error styles
        $(".body:eq(" + newIndex + ") label.error", form).remove();
        $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
      }

      // Disable validation on fields that are disabled or hidden.
      form.validate().settings.ignore = ":disabled,:hidden";

      // Start validation; Prevent going forward if false
      return form.valid();
    },
    onStepChanged: function (event, currentIndex, priorIndex) {
      // Suppress (skip) "Warning" step if the user is old enough.
      if (currentIndex === 2 && Number($("#age").val()) >= 18) {
        $(this).steps("next");
      }

      // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
      if (currentIndex === 2 && priorIndex === 3) {
        $(this).steps("previous");
      }
    },
    onFinishing: function (event, currentIndex) {
      var form = $(this);

      // Disable validation on fields that are disabled.
      // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
      form.validate().settings.ignore = ":disabled";

      // Start validation; Prevent form submission if false
      return form.valid();
    },
    onFinished: function (event, currentIndex) {
      var form = $(this);

      // Submit form input
      form.submit();
    },
  })
  .validate({
    errorPlacement: function (error, element) {
      element.before(error);
    },
    rules: {
      confirm: {
        equalTo: "#password",
      },
    },
  });
var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
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
    $(api.column(1).footer()).html(
      "Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2)
    );
  },
});

//var tableShow3 = $("#datatable-show3").DataTable({ paging: false });

var tableShow3 = $(".datatable-show3").DataTable({
  lengthMenu: [
    [10, 15, 25, 50, 100, 200, 20000000],
    [10, 15, 25, 50, 100, 200, "All"],
  ],
  deferRender: true,
  pageLength: 15,
  scrollX: true,
  columns: [
    { width: "5%", orderable: true, searchable: true, targets: [0] },
    { width: "5%", orderable: true },
    { width: "10%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true /*, visible: true*/ },
  ],
  paging: false,

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [
    "columnsToggle",
    {
      text: "Restaurer",
      className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
      action: function (e, dt, node, config) {
        table2.state.clear();
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

var tableShow4 = $(".datatable-show4").DataTable({ paging: false });

var tableShow = $("#datatable-show9").DataTable({
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
      .column(5)
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Total over this page
    pageTotal = api
      .column(5, { page: "current" })
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
  $(".det_for")
    .hide()
    .after(
      '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
    );
  create_custom_dropdowns($(".articles"), "");
});

("use strict");
var KTDatatablesSearchOptionsAdvancedSearch = (function () {
  $.fn.dataTable.Api.register("column().title()", function () {
    return $(this.header()).text().trim();
  });
  return {
    init: function () {
      var t;
      (t = $("#kt_table_1").DataTable({
        aLengthMenu: [
          [25, 50, 100, 200, -1],
          [25, 50, 100, 200, "All"],
        ],
        iDisplayLength: 25,
        dom: 'f<"html5buttons btn-group"B>lTgtip',
        columns: [
          { orderable: true, width: "5%", searchable: true, targets: [0] },
          { orderable: true, width: "10%" },
          { orderable: true, width: "85%" },
          { orderable: true, width: "85%" },
        ],
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
        bInfo: false,
      })),
        t.on("init.dt", function (e, settings) {
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

          CustomSearchDatatable.CustomSearchText(api, [0, 1, 3], []);
          CustomSearchDatatable.CustomSearchSelect(api, [2], []);
        });
    },
  };
})();
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
  sNext: '<i class="fa fa-chevron-right" ></i>',
  sPrevious: '<i class="fa fa-chevron-left" ></i>',
});

$(".modalActivate").click(function () {
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: Routing.generate("t_achatdemandeinternecab_find_article"),
    processData: false,
    contentType: false,
    success: function (result, textStatus, errorThrown) {
      $(".bod").html(result).hide();
      KTDatatablesSearchOptionsAdvancedSearch.init();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    },
  });
});

$("body").on("click", ".cd_op", function () {
  if (
    window.element.find(
      "option[value='" + $(this).parent().parent().attr("id") + "']"
    ).length
  ) {
    window.element.val($(this).parent().parent().attr("id")).trigger("change");
    $(".prixunitaire").val($(this).parent().parent().attr("pu"));
    $(".tva").val($(this).parent().parent().attr("tva"));
    $("#exampleModalPreview").modal("hide");
  } else {
    // Create a DOM Option and pre-select by default
    var newOption = new Option(
      $(this).parent().parent().attr("text"),
      $(this).parent().parent().attr("id"),
      true,
      true
    );
    // Append it to the select
    window.element.append(newOption).trigger("change");
    $(".prixunitaire").val($(this).parent().parent().attr("pu"));
    $(".tva").val($(this).parent().parent().attr("tva"));
    $("#exampleModalPreview").modal("hide");
  }
});

function getSubSelect(myclass, myboolean, mycontent) {
  //console.log(mycontent)
  if (myboolean) {
    $(myclass).prop("disabled", false);
  } else {
    $(myclass).prop("disabled", true);
    $(myclass)
      .parent()
      .find(".select2 .select2-selection__arrow")
      .html('<i class="i-load fa fa-refresh"></i>');
  }
  if (mycontent) {
    var array = myclass.split(",");
    for (var i = 0, l = array.length; i < l; i++) {
      //console.log($(mycontent).find(array[i]));
      $(array[i]).replaceWith($(mycontent).find(array[i]));
    }
  }
}

$(".type_commande").on("change", function (e) {
  if ($(this).attr("data-type") == "PRJ" || $(this).val() == 5) {
    $(".pr").toggleClass("none");
  } else {
    $(".pr").addClass("none");
  }
});

$(".form").on("change", ".type_commande", function (e) {
  var type = $("option:selected", this).attr("data-type");

  console.log(type);

  $(".bloc_choix").css("display", "none");

  if (type == "CMD") {
    $(".bloc_reference_devis_client").css("display", "block");
  } else if (type == "MR") {
    $(".bloc_marche").css("display", "block");
  }
  else if (type == "PRJ") {
    $(".bloc_projet").css("display", "block");
  }
});

$(".new , .edit").on("change", ".marches", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousmarche", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      //console.log(html);
      getSubSelect(".sousmarche", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    },
  });
  e.preventDefault();
});


$(".new , .edit").on("change", ".projet", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousprojet", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      //console.log(html);
      getSubSelect(".sousprojet", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    },
  });
  e.preventDefault();
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

  CustomSearchDatatable.CustomSearchText(api, [1,2, 3, 4,5], []);
  //CustomSearchDatatable.CustomSearchDate(api, [2], []);
  CustomSearchDatatable.CustomSearchSelect(api, [6], []);
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

$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});

$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});
var array_detail = [];
$(document).ready(function(e) {

 

  //array_detail
  var details = $("#test").data("details");
  var person =[];
  
  $.each(details, function (i, value) {

   

   /* person ['code']=value.code;
    person ['id']=value.id;
    person ['montantRemise']=value.montantRemise;
    person ['observation']=value.observation;
    person ['prixttc']=value.prixttc;
    person ['prixunitaire']=value.prixunitaire;
    person ['quantite']=value.quantite;
    person ['remise']=value.remise;
    person ['titre']=value.titre;
    person ['tva']=value.tva;
    person ['unite']=value.unite;
    person ['unite_id']=value.unite_id;*/
//alert(value.id);

array_detail.push({'code':value.code,'id':value.id,'montantRemise':value.montantRemise,'observation':value.observation,
'prixttc':value.prixttc,'prixunitaire':value.prixunitaire,'quantite':value.quantite,'remise':value.remise,'titre':value.titre ,'tva':value.tva , 'unite':value.unite , 'unite_id':value.unite_id});
  });
  $("#uv_deviscab_detail").val(JSON.stringify(array_detail));

  //console.log(array_detail)
  

  


 
  
 
  //console.log(array_detail);
  //alert();
 // $('table tr td ').each()


});


$(".new").on("submit", ".detail_form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(".det_for");

  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($("#uv_devisdet_article").val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_detail"),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.data) {
          l.stop();
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          $(".article").focus();
                      //    console.log(result);
          let lineNo = 1;
          console.log(array_detail);
          
          array_detail.push(result.data);

        //  console.log(array_detail);

          $(".new .table-detail > tbody").empty();
          $.each(array_detail, function (i, value) {
            var tva = value.tva + " %";
            var observation = value.observation;
            var remise = value.remise + " %";
            if (value.tva == null) {
              tva = "-";
            }
            if (value.observation == null) {
              observation = "-";
            }
            var my_row =
              " <tr><td>" +
              (i + 1) +
              "</td><td>" +
              value.code +
              " - " +
              value.titre +
              "</td><td>" +
              value.unite +
              "</td><td>" +
              value.quantite +
              "</td> <td>" +
              value.prixunitaire +
              "</td><td>" +
              tva +
              "</td><td>" +
              remise +
              "</td><td>" +
              value.montantRemise +
              "</td><td>" +
              value.prixttc +
              "</td><td><a class='delete_element' id=" +
              i +
              "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            lineNo++;
          });
          $(".select2_unite").val(null).trigger("change");
        //  console.log(JSON.stringify(array_detail));
          $("#uv_deviscab_detail").val(JSON.stringify(array_detail));
         // console.log(array_detail);
           //   console.log($("#uv_deviscab_detail").val());
          $(".article").val(null).trigger("change");
        }
      },
    });
  } else {
    toastr.warning("Cet article existe déjà ", "warning ", { timeOut: 4000 });
    l.stop();
  }
  e.preventDefault();
});

$(".new").on("click", ".delete_element", function (e) {
 // alert();
  console.log(array_detail);
  array_detail.splice($(this).attr("id"), 1);
  console.log(array_detail);
  let lineNo = 1;
  $(".new .table-detail > tbody tr").remove();
  
  $.each(array_detail, function (i, value) {
    var tva = value.tva + " %";
    var observation = value.observation;
    var remise = value.remise + " %";
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation == null) {
      observation = "-";
    }
    var my_row =
      " <tr><td>" +
      (i + 1) +
      "</td><td>" +
      value.code +
      " - " +
      value.titre +
      "</td><td>" +
      value.unite +
      "</td><td>" +
      value.quantite +
      "</td> <td>" +
      value.prixunitaire.toFixed(2) +
      "</td><td>" +
      tva +
      "</td><td>" +
      remise +
      "</td><td>" +
      value.montantRemise.toFixed(2) +
      "</td><td>" +
      value.prixttc.toFixed(2) +
      "</td><td><a class='delete_element' id=" +
      i +
      "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
});

$(".new-article-btn").click(function (e) {
  $(".edit-new-article").show();
  $(this).hide();
  e.preventDefault();
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = Routing.generate("erp_client_new_devis", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});

$(".new").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var id = dta.get("_id");
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
//alert();
  $.ajax({
    type: "POST",
    url: Routing.generate("erp_client_insert_devis", { id: id }),
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
        var url = Routing.generate("erp_client");
        window.location.href = url;
        //location.reload();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});
