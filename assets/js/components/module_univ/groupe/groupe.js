const routes = require("../../../../../public/js/fos_js_routes.json");
import Routing from "../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";

//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../../ManagementErrors/index.js";
import * as CustomSearchDatatable from "../../../ManagementSearchDatatable/customSearch.js";
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

jQuery.each($(".toastr-msg"), function (i, val) {
  console.log($(this).attr("data-toastr"));
  console.log($(this).text());
  if ($(this).attr("data-toastr") == "success") {
    toastr.success("Succées", $(this).text(), { timeOut: 4000 });
  } else if ($(this).attr("data-toastr") == "warning") {
    toastr.warning("Warning", $(this).text(), { timeOut: 4000 });
  } else if ($(this).attr("data-toastr") == "error") {
    toastr.error("erreur", $(this).text(), { timeOut: 4000 });
  }
});
jQuery.each($(".form-errors li"), function (i, val) {
  console.log($(this).text());
});
/*check the form errors*/
console.log($(".form-errors").text());
if ($(".form-errors").text() != "") {
  toastr.error("erreur", $(".form-errors").text(), { timeOut: 4000 });
}

var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("univ_divisiongroupe_list"), // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200, -1],
    [10, 15, 25, 50, 100, 200, "All"],
  ],
  pageLength: 15,
  order: [[1, "asc"]],
  columns: [
    { orderable: true, width: "3%", searchable: true, targets: [0] },
    { orderable: true, width: "15%" },
    { orderable: true },
    { orderable: true, width: "5%" },
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

var table = $("#grid-detail").DataTable({
  ajax: {
    url: Routing.generate("univ_divisiongroupe_detail_list"), // json datasource
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
    { orderable: true, width: "15%" },
    { orderable: true, width: "20%" },
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

  //console.log(st);
  //if (st != null) {
  //    $.each(st.columns, function (key, value) {
  //        if (value.search.search != "") {
  //            $('.remove-filter').show();
  //            return false;
  //        }
  //    });
  //}

  CustomSearchDatatable.CustomSearchText(api, [1, 2, 3], []);
  //CustomSearchDatatable.CustomSearchDate(api, [2], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});
//module_univ_divisionGroupe_detail_show
$("#grid tbody").on("click", ".cd_op", function () {
  //alert()
  var url = Routing.generate("module_univ_divisionGroupe_show", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});

$("#grid-detail tbody").on("click", ".cd_op_detail", function () {
  //alert()
  var url = Routing.generate("module_univ_divisionGroupe_detail_show", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});

$(".select2").select2();
/*
$('body').on('submit', '.groupe', function (e) {
    //alert();
   var form_name = $(this).attr('name');
   var dta = new FormData(this);
   var selector = $(this);
   //var id = dta.get('_id');
   var l = Ladda.create(document.querySelector('.my-button'));
   //alert(id);
   // Start loading
   l.start();
   $.ajax({
       type: 'POST',
       url: Routing.generate('divisiongroupe_new'),
       data: dta,
       processData: false,
       contentType: false,
       success: function (result) {
           if (result.errors) {
               console.log(selector);
               l.stop();
               ShowFormErrors(selector, form_name, result.errors);
           }
           if (result.code == 200) {
               //alert();
               l.stop();
               toastr.success(result.message.text, result.message.title, {timeOut: 4000})
               location.reload();
           } else if (result.code == 403) {
               l.stop();
               toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

           }
       },
       error: function (jqXHR, textStatus, errorThrown) {
           //alert();
           l.stop();
           toastr.error("Erreur", errorThrown, {timeOut: 4000})
       }
   });
   e.preventDefault();
});*/

$(".etablissement").change(function (e) {
  //alert()
  if ($.isNumeric($(this).val())) {
    $.ajax({
      url: Routing.generate("get_formation", { id: $(this).val() }),
      success: function (result) {
        var infos = jQuery.parseJSON(result);
        $(".formation").html(infos.data);
        $("select.select2").select2();
      },
    });
  } else {
  }
  e.preventDefault();
});

$(".formation").change(function (e) {
  if ($.isNumeric($(this).val())) {
    $.ajax({
      url: Routing.generate("get_promotion", { id: $(this).val() }),
      success: function (result) {
        var infos = jQuery.parseJSON(result);
        $(".promotion").html(infos.data);
        $("select.select2").select2();
      },
    });
  }
  e.preventDefault();
});

$("body").on("click", "#dividion_groupe", function (e) {
  //  alert($('.groupe_detail').val());
  if ($.isNumeric($(".promotion option:selected").val())) {
    $(".widget-main-html").html(
      "<i class='ace-icon fa fa-spinner fa-spin blue bigger-150 my_loading'></i>"
    );
    $.ajax({
      url: Routing.generate("get_etudiant_groupe", {
        promotion: $(".promotion option:selected").val(),
        groupe: $("#id").val(),
      }),
      success: function (result) {
        //var infos = jQuery.parseJSON(result);
        $(".widget-main-html").html(result);

        $.ajax({
          url: Routing.generate("module_univ_divisionGroupe_affecter_table", {
            id: $("#id").val(),
          }),
          success: function (result) {
            //var infos = jQuery.parseJSON(result);
            // console.log(infos);
            $(".tabes").html(result);
            //$('select.select2').select2();
          },
        });

        e.preventDefault();
      },
    });
  } else {
    //bootbox.alert("Veuillez Renseigner une promotion et un Groupe Pour continuer cette opération");
    toastr.warning(
      "Veuillez Renseigner une promotion et un Groupe Pour continuer cette opération",
      "Warning !",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("body").on("click", "#dividion_groupe_etudiants", function (e) {
  //  alert($('.groupe_detail').val());
  if ($.isNumeric($(".promotion option:selected").val())) {
    $(".widget-main-html").html(
      "<i class='ace-icon fa fa-spinner fa-spin blue bigger-150 my_loading'></i>"
    );
    $.ajax({
      url: Routing.generate("get_etudiant_recherche_groupe", {
        promotion: $(".promotion option:selected").val(),
        groupe: $("#id").val(),
      }),
      success: function (result) {
        //var infos = jQuery.parseJSON(result);
        $(".widget-main-html").html(result);

        e.preventDefault();
      },
    });
  } else {
    //bootbox.alert("Veuillez Renseigner une promotion et un Groupe Pour continuer cette opération");
    toastr.warning(
      "Veuillez Renseigner une promotion et un Groupe Pour continuer cette opération",
      "Warning !",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
});

var tableShow3 = $(".datatable-show3").DataTable({
  paging: true,
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
});

$("#using_json")
  .jstree({
    core: {
      data: {
        url: Routing.generate("module_univ_groupe_elements"),
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
    window.pr = $("#" + data.node.id);
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
  })
  .on("close_node.jstree", function (e, data) {
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
  })
  .on("select_node.jstree", function (e, data) {
    var str = data.node.id;
    window.pr = $("#" + data.node.id);

    if (str.indexOf("groupe_link") >= 0) {
      $(".modal-title").text("Ajouter Groupe");
      $(".show-promotion").empty();

      $.ajax({
        url: Routing.generate("module_univ_groupe_promotion", {
          promotion: $("#" + data.node.id).attr("data-promotion"),
        }),
        contentType: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function (data) {
          $(".spr").hide();
          $(".show-promotion").html(data);
          import("../../../plugins/select2/select2.full.min.js").then(() => {
            $(".sel2").select2();
          });
          //require('./mdb.min.js');
          import("../../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("show");
          });
          var width = 100;
          var animation_speed = 700;
          var time_val = 3000;
          var current_slide = 1;

          var $slider = $("#slider");
          var $slide_container = $(".slides");
          var $slides = $(".slide");

          var interval;

          $slides.each(function (index) {
            $(this).css("left", index * 100 + "%");
          });

          function startSlider() {
            interval = setInterval(function () {
              $slide_container.animate(
                { left: "-=" + (width + "%") },
                animation_speed,
                function () {
                  if (++current_slide === $slides.length) {
                    current_slide = 1;
                    $slide_container.css("left", 0);
                  }
                }
              );
            }, time_val);
          }

          startSlider();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $(".spr").hide();
          l.stop();
          console.log(jqXHR.responseText);
          //$('#resultats_import').html(jqXHR.responseText)
          toastr.warning(
            "Impossible de traiter un fichier n'est pas organiser",
            "Error",
            { timeOut: 4000 }
          );
        },
      });
    }
  });

$(".panel-left").resizable({
  handleSelector: ".splitter",
  resizeHeight: false,
});

$(".full-height-scroll").slimscroll({
  height: "800px",
});

$("body").on("submit", "._promotion", function (e) {
  //alert();
  e.preventDefault();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = Ladda.create(document.querySelector(".my-button"));
  //alert(id);
  // Start loadingwindow.pr = $("#" + data.node.id)
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("module_univ_groupe_promotion", {
      promotion: window.pr.attr("data-promotion"),
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        ShowFormErrors(selector, form_name, result.errors, "divisionGroupe");
      }
      if (result.code == 200) {
        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        //window.refresh = 0;
        // $('#using_json').jstree(true).refresh();
        $("#grid2").DataTable().ajax.reload();
        //window.refresh = 1;
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //alert();
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
});

$("body").on("click", ".cd_op_detail", function () {
  //alert()
  //alert()
  //console.log($(this).closest("tr"))
  var url = Routing.generate("module_univ_groupe_detail_show", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});

var tableShow = $("#datatable-show-2").DataTable({
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
});

var tablegr2 = $("#grid2").DataTable({
  ajax: {
    url: Routing.generate("module_univ_groupe_detail_list"), // json datasource
    type: "get",
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200, -1],
    [10, 15, 25, 50, 100, 200, "All"],
  ],
  pageLength: 15,
  order: [[1, "asc"]],
  columns: [
    { orderable: true, width: "3%", searchable: true, targets: [0] },
    { orderable: true, width: "15%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
    { orderable: true, width: "5%" },
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

tablegr2.on("init.dt", function (e, settings) {
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
  CustomSearchDatatable.CustomSearchSelect(api, [1, 2, 3, 4, 5, 6], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});
