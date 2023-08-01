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

window.status = 0;
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

$("#using_json")
  .jstree({
    core: {
      data: {
        url: Routing.generate("module_univ_programmation_element"),
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
    if (str.indexOf("ele_") >= 0) {
    window.pr = $("#" + data.node.id)
    }

    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
  })
  .on("close_node.jstree", function (e, data) {
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
  });

var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("module_univ_programmation_list", {
      status: window.status,
    }), // json datasource
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

table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  CustomSearchDatatable.CustomSearchText(api, [1, 9], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2, 3, 4, 5, 6, 7, 8], []);
});

$("body").on("click", ".addElement", function (e) {
  if ($(this).attr("nbrAnnee") == 1) {
      window.element = $(this).attr("element");
      window.annee = $(this).attr("annee")
    $('.show-promotion').empty();
    $('.modal-title').text('Ajouter Epreuve')
    $.ajax({
      type: "POST",
      url: Routing.generate("module_univ_programmation_popup_epreuve", {
        element: $(this).attr("element"),
        annee: $(this).attr("annee"),
        
      }),
      /*data: {annee:$(this).attr('annee'),element:$(this).attr('element')},*/
      success: function (data) {
        $(".spr").hide();
        $(".show-promotion").html(data);
        
          $(".sel2").select2();
          $(".sel2").on("select2:select", function (e) {
            //console.log(e.params.data.text)
            $("#form_description").val(
              e.params.data.text + " " + $(".annee").text()
            );
          });
        
        
          $("#exampleModalPreview").modal("show");
        
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $(".spr").hide();
        l.stop();
        console.log(jqXHR.responseText);
        //$('#resultats_import').html(jqXHR.responseText)
        toastr.warning(
          "Impossible de traiter",
          "Error",
          { timeOut: 2000 }
        );
      },
    });
  } else {
    swalWithBootstrapButtons.fire(
      {
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Error ?",
        text:
          "Cette formation contient plusieurs année vous pouvez pas faire cette opération !",
        type: "warning",
        confirmButtonClass: "btn-danger",
        showCancelButton: false,
        showCloseButton: false,
        confirmButtonText: "<i class='fa fa-times'></i> Fermer !",
      },
      function () {
        $(".confirm").attr("disabled", "disabled");
      }
    );
  }
});


$('body').on('submit', '._epreuve', function (e) {
    //alert();
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    //alert(id);
    // Start loading
    //alert(window.element);
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_programmation_popup_epreuve', { element: window.element, annee: window.annee }),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                //console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                //alert();
                l.stop();
                //window.refresh = 0;
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                window.status = 1;
                table.ajax.url(Routing.generate('module_univ_programmation_list',{status:window.status})).load();
                //$('#using_json').jstree(true).refresh();
                //$('#grid').DataTable().ajax.reload();
                
                //window.refresh = 1;
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 2000 })

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //alert();
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 2000 })
        }
    });

    e.preventDefault();

});
$("#grid").on("click", ".cd_op", function () {
  ///alert()
  var url = Routing.generate("module_univ_programmation_show", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});

$(".edit").on("submit", ".form", function (e) {
  //  alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = Ladda.create(document.querySelector(".my-button"));
  // Start loading
  l.start();
});

$("body").on("submit", "._enseignant", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  var id = dta.get("_id");
  var l = Ladda.create(document.querySelector(".my-button"));
  //alert(id);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("module_univ_programmation_enseignant", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        ShowFormErrors(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
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
  e.preventDefault();
});

var select2_dossiers = $(".select2_dossiers").select2({
  placeholder: "Choix d'enseignant ...",
  allowClear: true,
});

var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
});

$(".seanceEns").click(function (e) {
  var id = $(this).attr("id");

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
          //alert()
          $.ajax({
            type: "DELETE",
            url: Routing.generate(
              "module_univ_programmation_enseignant_delete",
              { id: id }
            ),
            success: function (result) {
              // console.log(result);
              if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                location.reload();
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
    toastr.warning("Impossible d'effectuer cette opération", "warning", {
      timeOut: 4000,
    });
  }
  e.preventDefault();
});

$(".panel-left").resizable({
  handleSelector: ".splitter",
  resizeHeight: false,
});

$(".full-height-scroll").slimscroll({
  height: "800px",
});

var thHeight = $(".full-height-scroll").height();
