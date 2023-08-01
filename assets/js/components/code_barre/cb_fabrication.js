const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../ManagementErrors/index.js";

import * as Ladda from "ladda";
import moment from "moment";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});

$(".new").on("submit", ".form", function (e) {
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
    url: Routing.generate("code_barre_new"),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      // l.stop();
      $(".errors-list").remove();
      if (result.customErrors) {
        // console.log(result.customErrors);

        $.each(result.customErrors, function (i, value) {
          //console.log(i);
          // console.log(value);

          $(".form #" + i).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              value +
              "</span></span></span>"
          );
        });

        // $('#'+)
      } else if (result.errors) {
        //dump(result.errors);
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        var url = Routing.generate("code_barre_show", {
            id: result.data.id,
          });
        window.location.href = url;
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("code_barre_list") + location.search, // json datasource
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
    { orderable: false, width: "5%", searchable: true, targets: [0] },
    { orderable: true, width: "15%" },
    { orderable: true, width: "30%" },
    { orderable: true, width: "50%" },
    
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

table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [1, 2,3], []);
  CustomSearchDatatable.CustomSearchDate(api, [], []);
  CustomSearchDatatable.CustomSearchSelect(api, [], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



$(".dynamique_document").click(function (e) {
    // console.log( $(this).attr('data-id'));
    //href="{{ path('code_barre_document_pdf' , {id:cb_fabrication.id})}}" target="_blank"
    $.ajax({
      type: "POST",
      url: Routing.generate("code_barre_document_dynamique_form", {
        id: $(this).attr("data-id"),
      }),
      success: function (result) {
        $(".bod").html(result).hide();
        $("#ModalDocumentDynamique").modal("show");
        setTimeout(function () {
          $(".spr").hide();
          $(".bod").fadeIn();
        }, 600);
      },
    });
    e.preventDefault();
  });



  $(".edit").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get("_id");
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: Routing.generate("code_barre_edit", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        l.stop();
        if (result.errors) {
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.data) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
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
