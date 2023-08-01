const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);

import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
//ShowFormErrorsWithParam
import { ShowFormErrorsWithParam } from "../../ManagementErrors/index.js";

$("body").on("submit", ".tele-frs", function (e) {
  //alert($(".sele-frs").val())

  if ($(".sele-frs").val() != "") {
    window.location.href = Routing.generate("report_by_fournisseur_all", {
      frs: $(".sele-frs").val(),
    });
    $.ajax({
      type: "POST",
      url: Routing.generate("report_by_fournisseur_all", {
        frs: $(".sele-frs").val(),
      }),
      success: function (result) {},
    });
  } else {
    toastr.warning("Veuillez renseigner un fournisseur", "warning", {
      timeOut: 4000,
    });
  }

  e.preventDefault();
});

$(".select2_demo_9").select2({
  placeholder: "Choix marché",
  allowClear: false,
});

$(".select2_demo_3").select2({
  placeholder: "Choix projet",
  allowClear: true,
});
$(".select2_demo_4").select2({
  placeholder: "Choix dossier",
  allowClear: true,
});

$(".select2_demo_6").select2({
  placeholder: "Choix sous projet",
  allowClear: true,
});

$(".select2_demo_5").select2({
  placeholder: "Choix Type",
  allowClear: true,
});

$(".select2_demo_7").select2({
  placeholder: "Choix fournisseur",
  allowClear: true,
});
$(".select2_demo_8").select2({
  placeholder: "Choix Documents",
  allowClear: true,
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

$("body").on("change", "#form_type", function () {
  //alert($(this).val())
  if ($(this).val() == "projet") {
    $(".projet").fadeIn();
    $(".souMarche").hide();
    $(".marche").hide();
    $(".sel2").val("").trigger("change");
  }
  if ($(this).val() == "marche") {
    //alert()
    $(".select2_demo_3").val("").trigger("change");
    $(".projet").hide();
    $(".souMarche").fadeIn();
    $(".marche").fadeIn();
  }
  else{
    $(".select2_demo_3").val("").trigger("change");
    $(".select2_demo_4").val("").trigger("change");
    $(".select2_demo_5").val("").trigger("change");
    $(".souMarche").hide();
    $(".marche").hide();
    $(".projet").hide();
    $(".sel2").val("").trigger("change");
  }
});


$("body").on("change", "#form_type2", function () {
  //alert($(this).val())
  if ($(this).val() == "projet") {
    $(".projet").fadeIn();
    $(".souMarche").hide();
    $(".marche").hide();
    $(".sel2").val("").trigger("change");
  }
  if ($(this).val() == "marche") {
    //alert()
    $(".select2_demo_3").val("").trigger("change");
    $(".projet").hide();
    $(".souMarche").fadeIn();
    $(".marche").fadeIn();
  }
 if($(this).val() == ""){
  $(".sel2").val("").trigger("change");
  $(".souMarche").hide();
  $(".marche").hide();
  $(".projet").hide();
  
 }
});

$("body").on("click", ".search", function (e) {
  // alert()reporting_projet_data
  //alert($(".select2_demo_3").val());
  table.ajax
    .url(
      Routing.generate("reporting_projet_data", {
        id_projet: $(".select2_demo_3").val(),
        id_sous_projet: $(".select2_demo_6").val(),
        id_dossier: $(".select2_demo_4").val(),
        id_marche: $(".marches").val(),
        id_sousmarche: $(".sousmarche").val(),
      })
    )
    .load();
  e.preventDefault();
});

$("body").on("click", ".search3", function (e) {
  // alert()reporting_projet_data
  /*$.each($(this).find(":selected"), function (i, item) { 
    totAmt += $(item).data("price");
  });*/
  var frs = [];
  $.each($('.select2_demo_7').find(":selected"), function (i, item) { 
    //console.log(item)
    frs.push([$(item).attr('value'),$(item).attr('societe')]);
  });
  $.ajax({
    type: "POST",
    url: Routing.generate("reporting_achat",{
      document: $(".select2_demo_8").val(),
      fournisseur: frs,
      dossier: $(".select2_demo_4").val(),
      
        
      ajax:1
    }),
    success: function (result) {
      if (result.errors) {
        ShowFormErrorsWithParam("form_lien", null, result.errors);
    }else{
      window.open(Routing.generate("reporting_achat",{
        projet: $(".select2_demo_3").val(),
        sousProjet: $(".select2_demo_6").val(),
        dossier: $(".select2_demo_4").val(),
        marche: $(".marches").val(),
        sousMarche: $(".sousmarche").val(),
        fournisseur: frs,
        document: $(".select2_demo_8").val(),
        documentParent:$(".select2_demo_8 :selected").parent().attr('type'),
        dateDebut: $(".dateDebut").val(),
        dateFin: $(".dateFin").val(),
      }))
    }
    },
  });
  
  e.preventDefault();
});

$("body").on("click", ".search2", function (e) {
  // alert()reporting_projet_data

  table2.ajax
    .url(
      Routing.generate("reporting_reference_data", {
        id_projet: $(".select2_demo_3").val(),
        id_sous_projet: $(".select2_demo_6").val(),
        id_dossier: $(".select2_demo_4").val(),
        id_marche: $(".marches").val(),
        id_sousmarche: $(".sousmarche").val(),
      })
    )
    .load();
  e.preventDefault();
});

$("body").on("click", ".rsearch", function (e) {
  //alert();
  //$("#form_annee").val(1).trigger('change.select2');
  //$('#form_annee option:eq(0)').prop('selected',true);
  //$('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');

  $(".select2_demo_3").val("").trigger("change");
  $(".select2_demo_4").val("").trigger("change");
  $(".select2_demo_5").val("").trigger("change");
  $(".souMarche").hide();
  $(".marche").hide();
  $(".projet").hide();
  $(".sel2").val("").trigger("change");
  table.ajax.url(Routing.generate("reporting_projet_data")).load();
});

$("body").on("click", ".rsearch2", function (e) {
  //alert();
  //$("#form_annee").val(1).trigger('change.select2');
  //$('#form_annee option:eq(0)').prop('selected',true);
  //$('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');

  $(".select2_demo_3").val("").trigger("change");
  $(".select2_demo_4").val("").trigger("change");
  $(".select2_demo_5").val("").trigger("change");
  $(".souMarche").hide();
  $(".marche").hide();
  $(".projet").hide();
  $(".sel2").val("").trigger("change");
  table2.ajax.url(Routing.generate("reporting_reference_data")).load();
});

var table = $("#datatable-show").DataTable({
  ajax: {
    url: Routing.generate("reporting_projet_data") + location.search, // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [
    { orderable: false, width: "3%", searchable: true, targets: [0] },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true },

    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true, visible: false, targets: 12 },
    { orderable: true, visible: false, targets: 13 },
    { orderable: true, visible: false, targets: 14 },
    {
      width: "5%",
      orderable: true /*className: "colonne-gras"*/,
      visible: false,
      targets: 15,
    },
    {
      width: "5%",
      orderable: true /*className: "colonne-gras"*/,
      visible: false,
      targets: 16,
    },
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
    {
      extend: "excel",
      exportOptions: {
        columns: ":visible",
        rows: ":visible",
      },
    },
  ],
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
  fixedHeader: true,
  footerCallback: function (row, data, start, end, display) {
    $(".center-class").remove();
    var api = this.api(),
      data;

    // Remove the formatting to get integer data for summation
    var intVal = function (i) {
      return typeof i === "string"
        ? i.replace(/[\$,]/g, "") * 1
        : typeof i === "number"
        ? i
        : 0;
    };

    var total4 = api
      .column(6, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);
    $(api.column(6).footer()).append(
      '<center class="center-class">Total : ' + total4.toFixed(2) + "</center>"
    );

    var total5 = api
      .column(7, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);
    $(api.column(7).footer()).append(
      '<center class="center-class">Total : ' + total5.toFixed(2) + "</center>"
    );

    var total6 = api
      .column(8, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);
    $(api.column(8).footer()).append(
      '<center class="center-class">Total : ' + total6.toFixed(2) + "</center>"
    );

    var total7 = api
      .column(9, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);
    $(api.column(9).footer()).append(
      '<center class="center-class">Total : ' + total7.toFixed(2) + "</center>"
    );
  },
});

table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [0, 6, 7, 8, 9, 10, 11], []);
  CustomSearchDatatable.CustomSearchDate(api, [3, 5], []);
  CustomSearchDatatable.CustomSearchSelect(
    api,
    [12, 13, 14, 15, 16, 1, 2, 4],
    []
  );
  CustomSearchDatatable.CustomSearchCheckbox(api, [], []);

  var intVal = function (i) {
    return typeof i === "string"
      ? i.replace(/[\$,]/g, "") * 1
      : typeof i === "number"
      ? i
      : 0;
  };

  $(".center-class").remove();

  var total4 = api
    .column(6)
    .data()
    .reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
  $(api.column(6, { page: "current" }).footer()).append(
    '<center class="center-class">Total : ' + total4.toFixed(2) + "</center>"
  );

  var total5 = api
    .column(7, { page: "current" })
    .data()
    .reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
  $(api.column(7).footer()).append(
    '<center class="center-class">Total : ' + total5.toFixed(2) + "</center>"
  );

  var total6 = api
    .column(8, { page: "current" })
    .data()
    .reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
  $(api.column(8).footer()).append(
    '<center class="center-class">Total : ' + total6.toFixed(2) + "</center>"
  );

  var total7 = api
    .column(9, { page: "current" })
    .data()
    .reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
  $(api.column(9).footer()).append(
    '<center class="center-class">Total : ' + total7.toFixed(2) + "</center>"
  );
});

var table2 = $("#datatable-show2").DataTable({
  ajax: {
    url: Routing.generate("reporting_reference_data") + location.search, // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [
    { orderable: false, width: "3%", searchable: true, targets: [0] },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true },
    { orderable: true, visible: false, targets: 11 },
    { orderable: true, visible: false, targets: 12 },
    { orderable: true, visible: false, targets: 13 },
    { orderable: true, visible: false, targets: 14 },
    { orderable: true, visible: false, targets: 15 },
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
    {
      extend: "excel",
      exportOptions: {
        columns: ":visible",
        rows: ":visible",
      },
    },
  ],
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
  fixedHeader: true,
  footerCallback: function (row, data, start, end, display) {
    $(".center-class").remove();
    var api = this.api(),
      data;
  },
});



$(".type_commande").on("change", function (e) {
  if ($(this).attr("data-type") == "PRJ" || $(this).val() == 5) {
      $(".pr").toggleClass("none");
  } else {
      $(".pr").addClass("none");
  }
});

$(".type_commande").on("change", function (e) {
  var type = $("option:selected", this).attr("data-type");
  $(".bloc_choix").css("display", "none");
  if (type == "CMD") {
      $(".bloc_reference_devis_client").css("display", "block");
  } else if (type == "MR") {
      $(".bloc_marche").css("display", "block");
  } else if (type == "INV") {
      $(".bloc_investissement").css("display", "block");
  }
});


table2.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [0, 6, 7, 8, 9, 10], []);
  CustomSearchDatatable.CustomSearchDate(api, [3, 5], []);
  CustomSearchDatatable.CustomSearchSelect(
    api,
    [11, 12, 13, 14, 15, 1, 2, 4],
    []
  );
  CustomSearchDatatable.CustomSearchCheckbox(api, [], []);
});

$("body").on("change", ".marches", function (e) {
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

$("body").on("change", "#form_projet", function () {
  //alert($(this).val());
  getSubSelect("#form_sous_projet", false, "", "");
  var $this = $(this).closest("form");
  var data = {};

  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: Routing.generate("sous_projet_select", {
      id: $(this).val() == "" || $(this).val() === null ? -1 : $(this).val(),
      placeholder: "Choix sous projet",
    }),
    type: "POST",
    data: data,
    success: function (result) {
      //   console.log(html);
      $("#form_sous_projet").html(result.data);
      getSubSelect("#form_sous_projet", true, "", "");
      $(".select2_demo_6").select2();
    },
  });
});

$(".dynamique_document").click(function (e) {
  // console.log( $(this).attr('data-id'));
  $.ajax({
    type: "POST",
    url: Routing.generate("raport_document_dynamique_form"),
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

$("body").on("change", "#operation", function (e) {
  $(".all,.reception , .facture , .reglement").addClass("raport-hide");
  $("#example2").removeAttr("disabled");
  $("#example3").removeAttr("disabled");
  $(".onoffswitch-checkbox").prop("checked", true);

  if ($(this).val() == "cmd") {
    $(".all,.reception , .facture , .reglement").toggleClass("raport-hide");
  } else if ($(this).val() == "rec") {
    $(".all,.facture , .reglement").toggleClass("raport-hide");
  } else if ($(this).val() == "fac") {
    $(".all,.reglement").toggleClass("raport-hide");
  }
});

$("body").on("click", ".onoffswitch-checkbox", function (e) {
  //alert($("#example1").prop("checked"));
  $("#example2").removeAttr("disabled");
  $("#example3").removeAttr("disabled");

  if ($("#example1").prop("checked") == false) {
    $("#example2").attr("disabled", true);
    $("#example3").attr("disabled", true);
  }
  if ($("#example2").prop("checked") == false) {
    // $("#example2").attr("disabled",true);
    $("#example3").attr("disabled", true);
  }
});

$("body").on("submit", ".form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.querySelector(".my-button"));

  // Start loading
  l.start();

  $.ajax({
    type: "POST",
    url: Routing.generate("raport_get_all_by_filtre"),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      l.stop();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

$.fn.toggleCheck = function () {
  if (this.tagName === "INPUT") {
    $(this).prop("checked", !$(this).is(":checked"));
  }
};
