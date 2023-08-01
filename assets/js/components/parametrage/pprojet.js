const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);

import * as Ladda from "ladda";
import { ShowFormErrors } from "../../ManagementErrors/index.js";
global.$ = $;
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";

import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";

const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("p_projet_list"), // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [15, 25, 50, 100, 200, 20000000],
    [15, 25, 50, 100, 200, "All"],
  ],

  columns: [
    { orderable: false, searchable: true, width: "1px", targets: [0] },
    { orderable: false, width: "10px", targets: 0 },
    { orderable: false, width: "10px", targets: 0 },
    { orderable: false, width: "1px", targets: 0 },
    { orderable: false, width: "10px", targets: 0 },
    { orderable: false, width: "10px", targets: 0 },
    { orderable: false, width: "10px", targets: 0 },
    { orderable: false, width: "10px", targets: 0 },
    { orderable: false, width: "1px", targets: 0 },
    { orderable: false, width: "1px", targets: 0 },
    { orderable: false, width: "1px", targets: 0 },
    { orderable: false, width: "1px", targets: 0 },
  ],
  order: [[0, "desc"]],
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
      sheetName: "Liste des projets ",
      filename: function () {
        return "U3S-LISTES-PROJETS";
      },
      //sheetName: "Output logiciel complet",
      title: "LISTE DES PROJETS",
      exportOptions: {
        modifier: { page: "all" },
        columns: ":visible",
        // rows: ":visible",
      },
    },
  ],
  initComplete: function () {
    var api = this.api();

    api.$("td").click(function () {
      var str = this.innerHTML.toLowerCase();
      var n = str.search("cd_op");
      //alert(n)
      if (n == -1) {
        api.search(this.innerHTML).draw();
      }
    });
  },
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
  fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  CustomSearchDatatable.CustomSearchText(api, [1, 2, 3], []);
  CustomSearchDatatable.CustomSearchSelect(api, [4,8,9,10,11], []);
  CustomSearchDatatable.CustomSearchDate(api, [5, 6,7], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: Routing.generate("p_projet_new"),
    success: function (result) {
      $(".bod").html(result).hide();
      $("select.select2").select2();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true,
      });
      $("#ModalDocumentDynamique").modal("show");
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
  if ($(document.activeElement).hasClass("button-save-add-projet")) {
    //alert()
    var l = Ladda.create(document.querySelector(".button-save-add-projet"));
    var goto = 1;
  } else {
    var l = Ladda.create(document.querySelector(".button-save-projet"));
    var goto = 0;
  }
  l.start();
  var id = $("#test").data("serviceId");
  var obj = new Object();
  obj["route"] = "p_projet_new";
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

$("#grid tbody").on("click", ".cd_op,.CD_OP", function () {
  $.ajax({
    type: "POST",
    url: Routing.generate("p_projet_edit", {
      id: $(this).closest("tr").attr("id"),
    }),
    success: function (result) {
      $(".bod").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true,
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
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

  var id = $("#test").data("projetId");
  var l = Ladda.create(document.querySelector(".button-edit-projet"));
  l.start();
  var obj = new Object();
  var parametre = { id: id };
  obj["route"] = "p_projet_edit";
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
    obj["route"] = "p_projet_delete";
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

$(".port").click(function (e) {
  $.ajax({
    type: "POST",
    url: Routing.generate("p_projet_port"),
    success: function (result) {
      $(".bod").html(result).hide();
      $("select.select2").select2();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true,
      });
      $("#ModalDocumentDynamique2").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    },
  });
  e.preventDefault();
});
