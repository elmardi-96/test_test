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

var table_epreuve = $("#grid_epreuve_liste").DataTable({
  ajax: {
    url:
      Routing.generate("module_univ_evaluation_epreuves_listdata") +
      location.search, // json datasource
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
        table_epreuve.state.clear();
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

table_epreuve.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  CustomSearchDatatable.CustomSearchText(
    api,
    [1, 2, 3, 5, 6, 7, 8, 11, 12, 13],
    []
  );
  CustomSearchDatatable.CustomSearchSelect(api, [4, 9, 10], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

var $TABLE = $("#dtBasicExample-1");
var $BTN = $("#export-btn");
var $EXPORT = $("#export");

$(".table-add").click(function () {
  var $clone = $TABLE
    .find("tr.hide")
    .clone(true)
    .removeClass("hide table-line");
  $TABLE.find("table").append($clone);
});

$(".table-remove").click(function () {
  $(this).parents("tr").detach();
});

$(".table-up").click(function () {
  var $row = $(this).parents("tr");
  if ($row.index() === 1) return; // Don't go above the header
  $row.prev().before($row.get(0));
});

$(".table-down").click(function () {
  var $row = $(this).parents("tr");
  $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
//jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function () {
  var $rows = $TABLE.find("tr:not(:hidden)");
  var headers = [];
  var data = [];

  // Get the headers (add special header logic here)
  $($rows.shift())
    .find("th:not(:empty)")
    .each(function () {
      headers.push($(this).text().toLowerCase());
    });

  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find("td");
    var h = {};

    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();
    });

    data.push(h);
  });

  // Output the result
  $EXPORT.text(JSON.stringify(data));
});
$(".navbar-static-side").closest("body").addClass("fixed-nav");
$(".navbar-static-side").closest("body").addClass("fixed-nav-basic");
var waves = require("node-waves");
window.Waves = waves;
window.refresh = 1;

jQuery.each($(".toastr-msg"), function (i, val) {
  console.log($(this).attr("data-toastr"));
  console.log($(this).text());
  if ($(this).attr("data-toastr") == "success") {
    toastr.success("Succées", $(this).text(), { timeOut: 2000 });
  } else if ($(this).attr("data-toastr") == "warning") {
    toastr.warning("Warning", $(this).text(), { timeOut: 2000 });
  } else if ($(this).attr("data-toastr") == "error") {
    toastr.error("erreur", $(this).text(), { timeOut: 2000 });
  }
});
jQuery.each($(".form-errors li"), function (i, val) {
  console.log($(this).text());
});
/*check the form errors*/
if ($(".form-errors").text() != "") {
  toastr.error("erreur", $(".form-errors").text(), { timeOut: 2000 });
}
$(".new , .edit").on("submit", "form", function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
});
$(function () {
  // you could start a loading animation here
  //  $("body").on("click", ".cd_op", function () {
  //    var url = Routing.generate("module_univ_evaluation_epreuves_show", {
  //      id: $(this).closest("tr").attr("id"),
  //    });
  //    //window.location.href = url;
  //    window.open(url,'_blank');
  //  });

  // use import() as a function - it returns a Promise
  import("../../../plugins/ui/jquery-ui.js").then(() => {
    $(".panel-left").resizable({
      handleSelector: ".splitter",
      resizeHeight: false,
    });
  });
  import("../../../jquery.slimscroll.min.js").then(() => {
    (function ($) {
      $(".full-height-scroll").slimscroll({
        height: "800px",
      });
    })(jQuery);
  });
  import("../../../plugins/jsTree/jstree.min.js")
    .then(() => {
      function customMenu(node) {
        // The default set of all items
        var str = node.id;
        //alert(str)
        if (str.indexOf("frm_") >= 0 || str.indexOf("etab_") >= 0) {
          return false;
        }
        //if( ){ return false; }
        var items = {
          renameItem: {
            // The "rename" menu item
            label: "Modifier",
            action: function () {
              //alert();
              var str = node.id;
              window.pr = $("#" + node.id);
              //console.log(str)
              if (str.indexOf("prm_") >= 0) {
                $(".modal-title").text("Update Promotion");
                $(".show-promotion").empty();

                $.ajax({
                  url: Routing.generate(
                    "module_univ_evaluation_update_promotion",
                    {
                      formation: $("#" + node.id).attr("data-formation"),
                      controlepromotion: $("#" + node.id).attr("data-id"),
                    }
                  ),
                  contentType: false, // To unable request pages to be cached
                  processData: false, // To send DOMDocument or non processed data file it is set to false
                  success: function (data) {
                    $(".spr").hide();
                    $(".show-promotion").html(data);
                    import("../../../plugins/select2/select2.full.min.js").then(
                      () => {
                        var select = $(".sel2").select2();
                        $(".sel2").on("select2:select", function (e) {
                          //console.log(e.params.data.text)
                          $("#form_description").val(
                            e.params.data.text + " " + $(".annee").text()
                          );
                        });
                      }
                    );
                    //require('./mdb.min.js');
                    import("../../../mdb.min.js").then(() => {
                      $("#exampleModalPreview").modal("show");
                    });
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    $(".spr").hide();
                    l.stop();
                    console.log(jqXHR.responseText);
                    //$('#resultats_import').html(jqXHR.responseText)
                    toastr.warning(
                      "Impossible de traiter un fichier n'est pas organiser",
                      "Error",
                      { timeOut: 2000 }
                    );
                  },
                });
              }
              if (str.indexOf("semestre_") >= 0) {
                $(".modal-title").text("Update Semestre");
                $(".show-promotion").empty();

                $.ajax({
                  url: Routing.generate(
                    "module_univ_evaluation_update_semestres",
                    {
                      promotion: $("#" + node.id).attr("data-promotion"),
                      controlesemestre: $("#" + node.id).attr("data-semestre"),
                    }
                  ),
                  contentType: false, // To unable request pages to be cached
                  processData: false, // To send DOMDocument or non processed data file it is set to false
                  success: function (data) {
                    $(".spr").hide();
                    $(".show-promotion").html(data);
                    import("../../../plugins/select2/select2.full.min.js").then(
                      () => {
                        var select = $(".sel2").select2();
                        $(".sel2").on("select2:select", function (e) {
                          //console.log(e.params.data.text)
                          $("#form_description").val(
                            e.params.data.text + " " + $(".annee").text()
                          );
                        });
                      }
                    );
                    //require('./mdb.min.js');
                    import("../../../mdb.min.js").then(() => {
                      $("#exampleModalPreview").modal("show");
                    });
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    $(".spr").hide();
                    l.stop();
                    console.log(jqXHR.responseText);
                    //$('#resultats_import').html(jqXHR.responseText)
                    toastr.warning(
                      "Impossible de traiter un fichier n'est pas organiser",
                      "Error",
                      { timeOut: 2000 }
                    );
                  },
                });
              }
              if (str.indexOf("mdl_") >= 0) {
                //alert()
                $(".modal-title").text("Update Module");
                $(".show-promotion").empty();

                $.ajax({
                  url: Routing.generate(
                    "module_univ_evaluation_update_module",
                    {
                      semestre: $("#" + node.id).attr("data-semestre"),
                      controlemodule: $("#" + node.id).attr("data-module"),
                    }
                  ),
                  contentType: false, // To unable request pages to be cached
                  processData: false, // To send DOMDocument or non processed data file it is set to false
                  success: function (data) {
                    $(".spr").hide();
                    $(".show-promotion").html(data);
                    import("../../../plugins/select2/select2.full.min.js").then(
                      () => {
                        var select = $(".sel2").select2();
                        $(".sel2").on("select2:select", function (e) {
                          //console.log(e.params.data.text)
                          $("#form_description").val(
                            e.params.data.text + " " + $(".annee").text()
                          );
                        });
                      }
                    );
                    //require('./mdb.min.js');
                    import("../../../mdb.min.js").then(() => {
                      $("#exampleModalPreview").modal("show");
                    });
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    $(".spr").hide();
                    l.stop();
                    console.log(jqXHR.responseText);
                    //$('#resultats_import').html(jqXHR.responseText)
                    toastr.warning(
                      "Impossible de traiter un fichier n'est pas organiser",
                      "Error",
                      { timeOut: 2000 }
                    );
                  },
                });
              }
              if (str.indexOf("elem_") >= 0) {
                //alert()
                $(".modal-title").text("Update Elément");
                $(".show-promotion").empty();

                $.ajax({
                  url: Routing.generate(
                    "module_univ_evaluation_update_element",
                    {
                      module: $("#" + node.id).attr("data-module"),
                      controleelement: $("#" + node.id).attr("data-element"),
                    }
                  ),
                  contentType: false, // To unable request pages to be cached
                  processData: false, // To send DOMDocument or non processed data file it is set to false
                  success: function (data) {
                    $(".spr").hide();
                    $(".show-promotion").html(data);
                    import("../../../plugins/select2/select2.full.min.js").then(
                      () => {
                        var select = $(".sel2").select2();
                        $(".sel2").on("select2:select", function (e) {
                          //console.log(e.params.data.text)
                          $("#form_description").val(
                            e.params.data.text + " " + $(".annee").text()
                          );
                        });
                      }
                    );
                    //require('./mdb.min.js');
                    import("../../../mdb.min.js").then(() => {
                      $("#exampleModalPreview").modal("show");
                    });
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    $(".spr").hide();
                    l.stop();
                    console.log(jqXHR.responseText);
                    //$('#resultats_import').html(jqXHR.responseText)
                    toastr.warning(
                      "Impossible de traiter un fichier n'est pas organiser",
                      "Error",
                      { timeOut: 2000 }
                    );
                  },
                });
              }
              if (str.indexOf("coneprv_") >= 0) {
                //alert()
                $(".modal-title").text("Update Nature d'épreuve ");
                $(".show-promotion").empty();

                $.ajax({
                  url: Routing.generate(
                    "module_univ_evaluation_update_nature_epreuve",
                    {
                      element: $("#" + node.id).attr("data-element"),
                      natureEpreuve: $("#" + node.id).attr(
                        "data-nature-epreuve"
                      ),
                    }
                  ),
                  contentType: false, // To unable request pages to be cached
                  processData: false, // To send DOMDocument or non processed data file it is set to false
                  success: function (data) {
                    $(".spr").hide();
                    $(".show-promotion").html(data);
                    import("../../../plugins/select2/select2.full.min.js").then(
                      () => {
                        var select = $(".sel2").select2();
                        $(".sel2").on("select2:select", function (e) {
                          //console.log(e.params.data.text)
                          $("#form_description").val(
                            e.params.data.text + " " + $(".annee").text()
                          );
                        });
                      }
                    );
                    //require('./mdb.min.js');
                    import("../../../mdb.min.js").then(() => {
                      $("#exampleModalPreview").modal("show");
                    });
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    $(".spr").hide();
                    l.stop();
                    console.log(jqXHR.responseText);
                    //$('#resultats_import').html(jqXHR.responseText)
                    toastr.warning(
                      "Impossible de traiter un fichier n'est pas organiser",
                      "Error",
                      { timeOut: 2000 }
                    );
                  },
                });
              }
              //return false;
            },
          },
          deleteItem: {
            label: "Supprimer",
            action: function () {
              var str = node.id;
              window.pr = $("#" + node.id);

              if (str.indexOf("prm_") >= 0) {
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
                    confirmButtonText:
                      "<i class='fa fa-trash'></i> Oui, Supprimer!",
                    cancelButtonText:
                      "<i class='fa fa-times'></i> No, Annuler!",
                  })
                  .then((result) => {
                    if (result.value) {
                      $.ajax({
                        type: "DELETE",
                        url: Routing.generate(
                          "module_univ_evaluation_promotion_delete",
                          { promotion: $("#" + node.id).attr("data-id") }
                        ),
                        success: function (result) {
                          if (result.code == 200) {
                            toastr.success(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                            //location.reload();
                            $("#using_json").jstree(true).refresh();
                          } else if (result.code == 403) {
                            toastr.warning(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                          }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                            jqXHR.responseJSON.message.text,
                            jqXHR.responseJSON.message.title,
                            { timeOut: 2000 }
                          );
                        },
                      });
                    }
                  });

                e.preventDefault();
              }

              if (str.indexOf("semestre_") >= 0) {
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
                    confirmButtonText:
                      "<i class='fa fa-trash'></i> Oui, Supprimer!",
                    cancelButtonText:
                      "<i class='fa fa-times'></i> No, Annuler!",
                  })
                  .then((result) => {
                    if (result.value) {
                      $.ajax({
                        type: "DELETE",
                        url: Routing.generate(
                          "module_univ_evaluation_semestre_delete",
                          { semestre: $("#" + node.id).attr("data-semestre") }
                        ),
                        success: function (result) {
                          if (result.code == 200) {
                            toastr.success(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                            //location.reload();
                            $("#using_json").jstree(true).refresh();
                          } else if (result.code == 403) {
                            toastr.warning(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                          }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                            jqXHR.responseJSON.message.text,
                            jqXHR.responseJSON.message.title,
                            { timeOut: 2000 }
                          );
                        },
                      });
                    }
                  });

                e.preventDefault();
              }

              if (str.indexOf("mdl_") >= 0) {
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
                    confirmButtonText:
                      "<i class='fa fa-trash'></i> Oui, Supprimer!",
                    cancelButtonText:
                      "<i class='fa fa-times'></i> No, Annuler!",
                  })
                  .then((result) => {
                    if (result.value) {
                      $.ajax({
                        type: "DELETE",
                        url: Routing.generate(
                          "module_univ_evaluation_module_delete",
                          { module: $("#" + node.id).attr("data-module") }
                        ),
                        success: function (result) {
                          if (result.code == 200) {
                            toastr.success(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                            //location.reload();
                            $("#using_json").jstree(true).refresh();
                          } else if (result.code == 403) {
                            toastr.warning(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                          }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                            jqXHR.responseJSON.message.text,
                            jqXHR.responseJSON.message.title,
                            { timeOut: 2000 }
                          );
                        },
                      });
                    }
                  });

                e.preventDefault();
              }

              if (str.indexOf("elem_") >= 0) {
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
                    confirmButtonText:
                      "<i class='fa fa-trash'></i> Oui, Supprimer!",
                    cancelButtonText:
                      "<i class='fa fa-times'></i> No, Annuler!",
                  })
                  .then((result) => {
                    if (result.value) {
                      $.ajax({
                        type: "DELETE",
                        url: Routing.generate(
                          "module_univ_evaluation_element_delete",
                          { element: $("#" + node.id).attr("data-element") }
                        ),
                        success: function (result) {
                          if (result.code == 200) {
                            toastr.success(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                            //location.reload();
                            $("#using_json").jstree(true).refresh();
                          } else if (result.code == 403) {
                            toastr.warning(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                          }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                            jqXHR.responseJSON.message.text,
                            jqXHR.responseJSON.message.title,
                            { timeOut: 2000 }
                          );
                        },
                      });
                    }
                  });

                e.preventDefault();
              }

              if (str.indexOf("coneprv_") >= 0) {
                // alert();
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
                    confirmButtonText:
                      "<i class='fa fa-trash'></i> Oui, Supprimer!",
                    cancelButtonText:
                      "<i class='fa fa-times'></i> No, Annuler!",
                  })
                  .then((result) => {
                    if (result.value) {
                      $.ajax({
                        type: "DELETE",
                        url: Routing.generate(
                          "module_univ_evaluation_nature_epreuve_delete",
                          {
                            natureEpreuve: $("#" + node.id).attr(
                              "data-nature-epreuve"
                            ),
                          }
                        ),
                        success: function (result) {
                          if (result.code == 200) {
                            toastr.success(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                            //location.reload();
                            $("#using_json").jstree(true).refresh();
                          } else if (result.code == 403) {
                            toastr.warning(
                              result.message.text,
                              result.message.title,
                              {
                                timeOut: 2000,
                              }
                            );
                          }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                            jqXHR.responseJSON.message.text,
                            jqXHR.responseJSON.message.title,
                            { timeOut: 2000 }
                          );
                        },
                      });
                    }
                  });

                e.preventDefault();
              }

              return false;
            },
          },
        };

        if ($(node).hasClass("folder")) {
          // Delete the "delete" menu item
          delete items.deleteItem;
        }

        return items;
      }
      $("#using_json")
        .jstree({
          core: {
            data: {
              url: Routing.generate("module_univ_evaluation_element"),
              dataType: "json",
            },
          },
          contextmenu: { items: customMenu },
          types: {
            root: {
              icon: "glyphicon glyphicon-folder-close",
            },
            child: {
              icon: "glyphicon glyphicon-folder-open",
            },
            default: {},
          },
          plugins: ["search", "contextmenu", "themes", "types"],
        })
        .on("open_node.jstree", function (e, data) {
          var str = data.node.id;
          console.log(data.node);
          window.pr = $("#" + data.node.id);
          if (str.indexOf("elem_") >= 0) {
            $(".spr23").hide();
            window.pr2 = $("#" + data.node.id);

            //console.log(data.node.parent)
            if (typeof window.pr2.attr("data-element") != "undefined") {
              $(".spr2").fadeIn();
              $(".epreuve-load").empty();

              $.ajax({
                url: Routing.generate("module_univ_evaluation_epreuves", {
                  element: window.pr2.attr("data-element"),
                }),
                contentType: false, // To unable request pages to be cached
                processData: false, // To send DOMDocument or non processed data file it is set to false
                success: function (data) {
                  $(".spr").hide();
                  $(".epreuve-load").html(data).hide();

                  if (window.pr2) {
                    var table = $("#grid").DataTable({
                      ajax: {
                        url:
                          Routing.generate(
                            "module_univ_evaluation_epreuves_with_element_listdata",
                            { element: window.pr2.attr("data-element") }
                          ) + location.search, // json datasource
                        type: "get",
                      },
                      lengthMenu: [
                        [10, 15, 25, 50, 100, 200, -1],
                        [10, 15, 25, 50, 100, 200, "All"],
                      ],
                      pageLength: 15,
                      order: [[1, "desc"]],
                      columns: [
                        {
                          orderable: false,
                          width: "3%",
                          searchable: true,
                          targets: [0],
                        },
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
                        { orderable: true },
                        { orderable: true },
                      ],
                      // dom: 'lBfrtip',
                      //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
                      dom: 'f<"html5buttons btn-group"B>lTgtip',
                      buttons: [
                        "columnsToggle",
                        {
                          text: "Restaurer",
                          className:
                            "btn btn-flat btn-restaurer btn-xs btn-xs-table",
                          action: function (e, dt, node, config) {
                            table.state.clear();
                            //window.location.reload();
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

                      CustomSearchDatatable.CustomSearchText(
                        api,
                        [1, 2, 3, 5, 6, 7, 8, 11, 12, 13],
                        []
                      );
                      CustomSearchDatatable.CustomSearchSelect(
                        api,
                        [4, 9, 10],
                        []
                      );
                      CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
                    });
                  }

                  setTimeout(function () {
                    $(".spr2").hide();
                    $(".epreuve-load").fadeIn();
                  }, 600);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  $(".spr").hide();
                  l.stop();
                  console.log(jqXHR.responseText);
                  //$('#resultats_import').html(jqXHR.responseText)
                  toastr.warning(
                    "Impossible de traiter un fichier n'est pas organiser",
                    "Error",
                    { timeOut: 2000 }
                  );
                },
              });
            }
          }
          data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
        })
        .on("close_node.jstree", function (e, data) {
          data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
        })
        .on("select_node.jstree", function (e, data) {
          var str = data.node.id;

          //var str = data.node.id;
          window.pr = $("#" + data.node.id);
          //window.id = data.node.id
          console.log(data.node);
          //alert();

          if (str.indexOf("prm_Link_") >= 0) {
            $(".modal-title").text("Ajouter Promotion");
            $(".show-promotion").empty();

            $.ajax({
              url: Routing.generate("module_univ_evaluation_promotion", {
                formation: $("#" + data.node.id).attr("data-promotion"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr").hide();
                $(".show-promotion").html(data);
                import("../../../plugins/select2/select2.full.min.js").then(
                  () => {
                    var select = $(".sel2").select2();
                    $(".sel2").on("select2:select", function (e) {
                      //console.log(e.params.data.text)
                      $("#form_description").val(
                        e.params.data.text + " " + $(".annee").text()
                      );
                    });
                  }
                );
                //require('./mdb.min.js');
                import("../../../mdb.min.js").then(() => {
                  $("#exampleModalPreview").modal("show");
                });
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }

          if (str.indexOf("seme_Link_") >= 0) {
            $(".show-promotion").empty();
            $(".modal-title").text("Ajouter Semestre");
            $.ajax({
              url: Routing.generate("module_univ_evaluation_semestres", {
                promotion: $("#" + data.node.id).attr("data-semestre"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr").hide();
                $(".show-promotion").html(data);
                import("../../../plugins/select2/select2.full.min.js").then(
                  () => {
                    $(".sel2").select2();
                    $(".sel2").on("select2:select", function (e) {
                      //console.log(e.params.data.element.dataset);
                      $("#form_coefficient").val(
                        e.params.data.element.dataset.coefficient
                      );
                      $("#form_coefficientAss").val(
                        e.params.data.element.dataset.coefficientass
                      );
                      //console.log(e.params.data.text)
                      $("#form_description").val(
                        e.params.data.text + " " + $(".annee").text()
                      );
                    });
                  }
                );
                //require('./mdb.min.js');
                import("../../../mdb.min.js").then(() => {
                  $("#exampleModalPreview").modal("show");
                });
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }

          if (str.indexOf("mdl_Link_") >= 0) {
            $(".show-promotion").empty();
            $(".modal-title").text("Ajouter Module");
            $.ajax({
              url: Routing.generate("module_univ_evaluation_modules", {
                semestre: $("#" + data.node.id).attr("data-module"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr").hide();
                $(".show-promotion").html(data);
                import("../../../plugins/select2/select2.full.min.js").then(
                  () => {
                    $(".sel2").select2();
                    $(".sel2").on("select2:select", function (e) {
                      //console.log(e.params.data.text)
                      $("#form_coefficient").val(
                        e.params.data.element.dataset.coefficient
                      );
                      $("#form_type").val(e.params.data.element.dataset.type);
                      $("#form_description").val(
                        e.params.data.text + " " + $(".annee").text()
                      );
                    });
                  }
                );
                //require('./mdb.min.js');
                import("../../../mdb.min.js").then(() => {
                  $("#exampleModalPreview").modal("show");
                });
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }

          if (str.indexOf("element_Link_") >= 0) {
            $(".show-promotion").empty();
            $(".modal-title").text("Ajouter Element");
            $.ajax({
              url: Routing.generate("module_univ_evaluation_elements", {
                module: $("#" + data.node.id).attr("data-element"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr").hide();
                $(".show-promotion").html(data);
                import("../../../plugins/select2/select2.full.min.js").then(
                  () => {
                    $(".sel2").select2();
                    $(".typeElement").select2();
                    $(".sel2").on("select2:select", function (e) {
                      //alert($(this).val())
                      console.log(e.params.data.element.dataset);
                      $("#form_coefficient").val(
                        e.params.data.element.dataset.coefficient
                      );

                      if ($(this).val()) {
                        $(".re").remove();
                        $(".aft").after(
                          '<div class="hr-line-dashed paddi re"></div><div class="re row form-group"><label class="col-sm-4">CC</label><label class="col-sm-4">TP</label><label class="col-sm-4">EF</label><div class="col-sm-4"><input type="text" name="form1[cc]" placeholder="CC" value="' +
                            e.params.data.element.dataset.coefficientepreuveCc +
                            '" class="form-control  form-control-sm cc" /></div><div class="col-sm-4"><input type="text" name="form1[tp]" placeholder="TP" value="' +
                            e.params.data.element.dataset.coefficientepreuveTp +
                            '" class="form-control  form-control-sm tp" /></div><div class="col-sm-4"><input type="text" name="form1[ef]" placeholder="EF" value="' +
                            e.params.data.element.dataset.coefficientepreuveEf +
                            '" class="form-control  form-control-sm ef" /></div></div>'
                        );
                        // alert(e.params.data.element.dataset.type)
                        //console.log(e.params.data.element.dataset)
                        $(".typeElement")
                          .val(e.params.data.element.dataset.type)
                          .trigger("change");
                        //$('.typeElement').trigger('change.select2');
                      } else {
                        $(".cc,.tp,.ef").val(null);
                      }
                      $("#form_description").val(
                        e.params.data.text + " " + $(".annee").text()
                      );
                    });
                  }
                );
                //require('./mdb.min.js');
                import("../../../mdb.min.js").then(() => {
                  $("#exampleModalPreview").modal("show");
                });
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }

          if (str.indexOf("eprev_") >= 0) {
            window.parent = data.node.parent;
            //console.log(data.node.parent)
            if (window.ope == 0) {
              window.ope = 1;
            } else {
              import("../../../mdb.min.js").then(() => {
                $("#exampleModalPreview").modal("toggle");
              });
            }
            $(".spr").fadeIn();
            $(".modal-title").text("Ajouter Epreuve");
            $(".show-promotion").empty();

            $.ajax({
              url: Routing.generate("module_univ_evaluation_epreuves_new", {
                nature: $("#" + data.node.id).attr("data-nature"),
                epreuve: $("#" + data.node.id).attr("data-epreuve"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr").hide();
                $(".show-promotion").html(data);
                import("../../../plugins/select2/select2.full.min.js").then(
                  () => {
                    $(".sel2").select2();
                    $(".sel2").on("select2:select", function (e) {
                      //console.log(e.params.data.text)
                      $("#form_description").val(
                        e.params.data.text + " " + $(".annee").text()
                      );
                    });
                  }
                );

                $(".anonymat").on("change", function (e) {
                  // alert()
                  if ($(".anonymat").val() == 2) {
                    //alert()
                    $("#univ_ac_epreuve_natureAnonymat").val(1);
                  }
                  $(".none").toggle();
                });
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }

          if (str.indexOf("elem_") >= 0) {
            window.pr2 = $("#" + data.node.id);

            //console.log(data.node.parent)
            if (typeof window.pr2.attr("data-element") != "undefined") {
              $(".spr23").hide();
              $(".spr2").fadeIn();
              $(".epreuve-load").empty();

              $.ajax({
                url: Routing.generate("module_univ_evaluation_epreuves", {
                  element: window.pr2.attr("data-element"),
                }),
                contentType: false, // To unable request pages to be cached
                processData: false, // To send DOMDocument or non processed data file it is set to false
                success: function (data) {
                  $(".spr").hide();
                  $(".epreuve-load").html(data).hide();

                  if (window.pr2) {
                    var table = $("#grid").DataTable({
                      ajax: {
                        url: Routing.generate(
                          "module_univ_evaluation_epreuves_with_element_listdata",
                          { element: window.pr2.attr("data-element") }
                        ), // json datasource
                        type: "get",
                      },
                      lengthMenu: [
                        [10, 15, 25, 50, 100, 200, -1],
                        [10, 15, 25, 50, 100, 200, "All"],
                      ],
                      pageLength: 15,
                      order: [[1, "desc"]],
                      columns: [
                        {
                          orderable: false,
                          width: "3%",
                          searchable: true,
                          targets: [0],
                        },
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
                        { orderable: true },
                        { orderable: true },
                      ],
                      // dom: 'lBfrtip',
                      //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
                      dom: 'f<"html5buttons btn-group"B>lTgtip',
                      buttons: [
                        "columnsToggle",
                        {
                          text: "Restaurer",
                          className:
                            "btn btn-flat btn-restaurer btn-xs btn-xs-table",
                          action: function (e, dt, node, config) {
                            table.state.clear();
                            //window.location.reload();
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

                      CustomSearchDatatable.CustomSearchText(
                        api,
                        [1, 2, 3, 5, 6, 7, 8, 11, 12, 13],
                        []
                      );
                      CustomSearchDatatable.CustomSearchSelect(
                        api,
                        [4, 9, 10],
                        []
                      );
                      CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
                    });
                  }

                  setTimeout(function () {
                    $(".spr2").hide();
                    $(".epreuve-load").fadeIn();
                  }, 600);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  $(".spr").hide();
                  l.stop();
                  console.log(jqXHR.responseText);
                  //$('#resultats_import').html(jqXHR.responseText)
                  toastr.warning(
                    "Impossible de traiter un fichier n'est pas organiser",
                    "Error",
                    { timeOut: 2000 }
                  );
                },
              });
            }
          }

          if (str.indexOf("controle_epreuve_Link_") >= 0) {
            $(".show-promotion").empty();
            $(".modal-title").text("Ajouter Nature Epreuve");
            $.ajax({
              url: Routing.generate(
                "module_univ_evaluation_controle_epreuves",
                { element: $("#" + data.node.id).attr("data-element") }
              ),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr").hide();
                $(".show-promotion").html(data);
                import("../../../plugins/select2/select2.full.min.js").then(
                  () => {
                    $(".sel2").select2();
                    $(".sel2").on("select2:select", function (e) {
                      //console.log(e.params.data.text)
                      $("#form_description").val(
                        e.params.data.text + " " + $(".annee").text()
                      );
                    });
                  }
                );
                //require('./mdb.min.js');
                import("../../../mdb.min.js").then(() => {
                  $("#exampleModalPreview").modal("show");
                });
              },
              error: function (jqXHR, textStatus, errorThrown) {
                $(".spr").hide();
                l.stop();
                console.log(jqXHR.responseText);
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning(
                  "Impossible de traiter un fichier n'est pas organiser",
                  "Error",
                  { timeOut: 2000 }
                );
              },
            });
          }
        })
        .on("refresh.jstree", function (e, data) {
          //alert(window.selectedData);
          //$('.show-promotion').empty();
          if (window.selectedData) {
            var instance = $("#using_json").jstree(true);
            instance.deselect_all();
            instance.select_node(window.selectedData);

            setTimeout(function () {
              $(".show-promotion").fadeIn();
            }, 2000);
          }
          // invoked after jstree has loaded
          //$(this).jstree("open_node", $(nodes[i]));
        });

      $("body").on("submit", "._promotion", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();

        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");

        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_promotion", {
            formation: window.pr.attr("data-promotion"),
          }),
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
              /// alert(result.message.data)
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }

              //alert();
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();

              /*var instance = $('#using_json').jstree(true);
                        instance.deselect_all();
                        instance.select_node('seme_Link_8');*/
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
        e.preventDefault();
      });

      $("body").on("submit", "._update_promotion", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();

        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");

        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_update_promotion", {
            formation: window.pr.attr("data-formation"),
            controlepromotion: window.pr.attr("data-id"),
          }),
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
              /// alert(result.message.data)
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }

              //alert();
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();

              /*var instance = $('#using_json').jstree(true);
                        instance.deselect_all();
                        instance.select_node('seme_Link_8');*/
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
        e.preventDefault();
      });

      $("body").on("submit", "._semestres", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_semestres", {
            promotion: window.pr.attr("data-semestre"),
          }),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._update_semestres", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_update_semestres", {
            //promotion: window.pr.attr("data-semestre"),
            promotion: window.pr.attr("data-promotion"),
            controlesemestre: window.pr.attr("data-semestre"),
          }),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._update_module", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_update_module", {
            //promotion: window.pr.attr("data-semestre"),
            semestre: window.pr.attr("data-semestre"),
            controlemodule: window.pr.attr("data-module"),
          }),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._update_element", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_update_element", {
            //promotion: window.pr.attr("data-semestre"),
            module: window.pr.attr("data-module"),
            controleelement: window.pr.attr("data-element"),
          }),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      //_update_controle_epreuve

      $("body").on("submit", "._update_controle_epreuve", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate(
            "module_univ_evaluation_update_nature_epreuve",
            {
              //promotion: window.pr.attr("data-semestre"),
              element: window.pr.attr("data-element"),
              natureEpreuve: window.pr.attr("data-nature-epreuve"),
            }
          ),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._modules", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_modules", {
            semestre: window.pr.attr("data-module"),
          }),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._element", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        // var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_elements", {
            module: window.pr.attr("data-element"),
          }),
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
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._controle_epreuve", function (e) {
        //alert();
        if ($(document.activeElement).hasClass("my-button1")) {
          var l = Ladda.create(document.querySelector(".my-button1"));
          var goto = 1;
        } else {
          var l = Ladda.create(document.querySelector(".my-button"));
          var goto = 0;
        }
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        //var l = Ladda.create(document.querySelector('.my-button'));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_controle_epreuves", {
            element: window.pr.attr("data-element"),
          }),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            if (result.errors) {
              //console.log(result.errors);
              l.stop();
              ShowFormErrors(
                selector,
                form_name,
                result.errors,
                "natureEpreuve"
              );
            }
            if (result.code == 200) {
              window.ope = 0;
              if (goto == 1) {
                $(".show-promotion").hide();
                window.selectedData = result.message.data;
              } else {
                window.selectedData = null;
              }
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              $("#using_json").jstree(true).refresh();
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._epreuve", function (e) {
        //alert();
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        var l = Ladda.create(document.querySelector(".my-button"));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_epreuves_new", {
            nature: window.pr.attr("data-nature"),
            epreuve: window.pr.attr("data-epreuve"),
          }),
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
              //window.selectedData = result.message.data;
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              //window.refresh = 0;

              $("#using_json").jstree(true).refresh();
              $("#grid").DataTable().ajax.reload();

              //window.refresh = 1;
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      $("body").on("submit", "._groupe", function (e) {
        //alert();
        e.preventDefault();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var id = dta.get("_id");
        var l = Ladda.create(document.querySelector(".my-button"));
        //alert(id);
        // Start loading
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_epreuves_affiliation", {
            id: id,
          }),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            console.log(result);
            if (result.errors) {
              //console.log(result.errors);
              l.stop();
              ShowFormErrors(selector, form_name, result.errors, "groupe");
            }
            if (result.code == 200) {
              //alert();
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 2000,
              });
              //window.refresh = 0;
              //$('#using_json').jstree(true).refresh();
              //$('#datatable-show-2').DataTable().ajax.reload();
              //window.refresh = 1;
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });

      var tableShow = $("#datatable-show-4").DataTable({
        paging: false,
        pageLength: 25,
        scrollY: "400px",
        scrollCollapse: true,
        /* columns: [
                { orderable: false, width: "5%", targets: [0] },
                { orderable: true, width: "20%" },
                { orderable: true, width: "20%" },
                { orderable: true, width: "20%" },
                { orderable: true, width: "5%" },
                { orderable: true, width: "5%" },
                { orderable: true },
                
            ],*/
        language: {
          url: Routing.generate("datatables_langue"),
          processing: true,
        },
      });
      //alert()
      var tableShow = $("#datatable-show-2").DataTable({
        paging: false,
        pageLength: 25,
        scrollY: "400px",
        scrollCollapse: true,
        columns: [
          { orderable: false, width: "5%", targets: [0] },
          { orderable: true, width: "10%" },
          { orderable: true, width: "20%" },
          { orderable: true, width: "20%" },
          { orderable: true, width: "5%" },
          { orderable: true, width: "5%" },
          { orderable: true, width: "35%" },
        ],
        language: {
          url: Routing.generate("datatables_langue"),
          processing: true,
        },
        fixedHeader: true,
      });
      tableShow.on("init.dt", function (e, settings) {
        let api = new $.fn.dataTable.Api(settings);
        let st = api.state.loaded();
        let data = api.data();

        CustomSearchDatatable.CustomSearchText(api, [1, 2, 3, 5, 6], []);
        CustomSearchDatatable.CustomSearchSelect(api, [4], []);
        CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
      });
      var tableShow3 = $("#datatable-show-3").DataTable({
        paging: true,
        pageLength: 10,
        columns: [
          { orderable: false, width: "5%", targets: [0] },
          { orderable: true, width: "10%" },
          { orderable: true, width: "20%" },
          { orderable: true, width: "20%" },
          { orderable: true, width: "20%" },
          { orderable: true, width: "20%" },
        ],
        language: {
          url: Routing.generate("datatables_langue"),
          processing: true,
        },
      });

      $("#_delete").click(function (e) {
        var id = $(this).attr("data-id");
        var token = $(this).attr("data-token");
        console.log(id + " " + token);
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
                url: Routing.generate(
                  "module_univ_evaluation_epreuves_etudiant_delete",
                  { id: id, token: token }
                ),
                success: function (result) {
                  if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 2000,
                    });
                    location.reload();
                  } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 2000,
                    });
                  }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                    jqXHR.responseJSON.message.text,
                    jqXHR.responseJSON.message.title,
                    { timeOut: 2000 }
                  );
                },
              });
            }
          });

        e.preventDefault();
      });

      $(".note").on("click", function (e) {
        if (!$.isNumeric($(this).text())) {
          $(this).text("");
        }
        e.preventDefault();
      });
      $(".note").on("keydown", function (e) {
        if (!$.isNumeric($(this).text())) {
          $(this).text("");
        }

        if (e.keyCode == 13) {
          $(this).blur();
          $(this).addClass("unselectable");
          window.elm = $(this);
          $(".unselectable").prop("contenteditable", false);
          $.ajax({
            type: "POST",
            url: Routing.generate("module_univ_evaluation_epreuves_note_add", {
              id: $(this).attr("data-gnote"),
              token: $(this).attr("data-token"),
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
                $(".unselectable")
                  .removeClass("unselectable")
                  .prop("contenteditable", true);

                $("body").find(".unselectable").removeClass(".unselectable");
                if (window.elm.is(":empty")) {
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
                //window.elm.focus();
                window.elm.text("-");
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

      $(".abscence").on("click", function (e) {
        var checked;
        if ($(this).is(":checked")) {
          checked = 1;
          //alert()
          $(this).parent().parent().find(".note").text("-");
        } else {
          checked = 0;
        }

        $.ajax({
          type: "POST",
          url: Routing.generate("module_univ_evaluation_epreuves_note_add", {
            id: $(this).attr("data-gnote"),
            token: $(this).attr("data-token"),
          }),
          data: { absent: checked },
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
            toastr.error("Erreur", errorThrown, { timeOut: 2000 });
          },
        });
      });
      $(".observation").on("keydown", function (e) {
        //alert()
        console.log(e);
        if (e.keyCode == 13) {
          $(this).blur();
          $(this).addClass("unselectable2");
          $(".unselectable2").prop("contenteditable", false);
          $.ajax({
            type: "POST",
            url: Routing.generate("module_univ_evaluation_epreuves_note_add", {
              id: $(this).attr("data-gnote"),
              token: $(this).attr("data-token"),
            }),
            data: { observation: $(this).text() },
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
                $(".unselectable2")
                  .parent()
                  .next()
                  .find(".observation")
                  .focus();
                $(".unselectable2").removeClass().prop("contenteditable", true);

                $("body").find(".unselectable2").removeClass(".unselectable2");

                //window.refresh = 0;
                //$('#using_json').jstree(true).refresh();
                //$('#datatable-show-2').DataTable().ajax.reload();
                //window.refresh = 1;
                //location.reload();
              } else if (result.code == 403) {
                //l.stop();
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 2000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //alert();
              //l.stop();
              toastr.error("Erreur", errorThrown, { timeOut: 2000 });
            },
          });

          e.preventDefault();
        }
      });
      $(".anonymat").on("change", function (e) {
        // alert()
        if ($(".anonymat").val() == 2) {
          //alert()
          $("#univ_ac_epreuve_natureAnonymat").val(1);
        }
        $(".tog").toggleClass("none");
      });
    })
    .catch((error) => "An error occurred while loading the component");
});

$("#_import").on("submit", function (e) {
  //alert()
  var l = Ladda.create(document.querySelector(".my-button"));
  //    // Start loading
  var dta = new FormData(this);
  var id = dta.get("_id");
  //alert(id);
  l.start();
  $("#resultats_import").empty();
  $(".spr").fadeIn();
  e.preventDefault(); //form will not submitted
  $.ajax({
    url: Routing.generate("module_univ_evaluation_upload", { id: id }),
    method: "POST",
    data: dta,
    contentType: false, // The content type used when sending data to the server.
    cache: false, // To unable request pages to be cached
    processData: false, // To send DOMDocument or non processed data file it is set to false
    success: function (data) {
      console.log();
      if (data.code == 403) {
        $("#_import")[0].reset();
        $(".spr").hide();
        toastr.warning(data.message.text, data.message.title, {
          timeOut: 5000000,
        });
        l.stop();
      } else {
        $("#resultats_import").html(data).hide();
        var t;
        t = $(".kt_table_1").DataTable({
          lengthMenu: [
            [10, 15, 25, 50, 100, 200, -1],
            [10, 15, 25, 50, 100, 200, "All"],
          ],
          pageLength: 15,
          order: [[0, "asc"]],
          lengthMenu: [5, 10, 25, 50],
          pageLength: 5,
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
          bFilter: false,
          bInfo: false,
        });
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

          CustomSearchDatatable.CustomSearchText(api, [0, 1, 2, 3], []);
        });
        $("#_import")[0].reset();
        setTimeout(function () {
          $(".spr").hide();
          $("#resultats_import").fadeIn();
          l.stop();
        }, 600);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $(".spr").hide();
      l.stop();
      console.log(jqXHR.responseText);
      $("#resultats_import").html(jqXHR.responseText);
      toastr.warning(
        "Impossible de traiter un fichier n'est pas organiser",
        "Error",
        { timeOut: 2000 }
      );
    },
  });
});

$("#modalActivate1").on("click", function (e) {
  //alert()
  $("#_import")[0].reset();
  $("#resultats_import").empty();
});

//ajouter par salah
$("body").on(
  "click",
  ".module_univ_evaluaton_epreuve_apply_transitions",
  function (e) {
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
            "Voulez vous vraiment passer à l'état '" +
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
              url: Routing.generate(
                "module_univ_evaluaton_epreuve_apply_transitions",
                { id: id }
              ),
              success: function (result) {
                if (result.code == 200) {
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });

                  location.reload();
                }

                if (result.code == 203) {
                  // alert(result.valider);
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  var url = Routing.generate(
                    "module_univ_evaluation_epreuves_show",
                    { id: result.id }
                  );
                  window.location.href = url;
                }

                if (result.code == 202) {
                  // alert(result.valider);
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  var url = Routing.generate(
                    "module_univ_evaluation_epreuves_affiliation",
                    { id: result.id }
                  );
                  window.location.href = url;
                }
                if (result.code == 201) {
                  // alert(result.valider);
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  var url = Routing.generate(
                    "module_univ_evaluation_epreuves_note",
                    { id: result.id }
                  );
                  window.location.href = url;
                }

                if (result.code == 403) {
                  toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                }
                if (result.code == 405) {
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
      toastr.warning("Commande non renseigné ", "warning", { timeOut: 4000 });
    }
    e.preventDefault();
  }
);
/*
$("body").on(
  "submit",
  "#module_univ_evaluaton_epreuve_apply_transitions",
  function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var id = dta.get("_id");
    var title = dta.get("title");
    if (id) {
      swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: "animatedSwal flipInX faster",
          },
          position: "top",
          title: "Confirmation ?",
          text:
            "Voulez vous vraiment passer à l'état '" +
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
              url: Routing.generate(
                "module_univ_evaluaton_epreuve_apply_transitions",
                { id: id }
              ),
              success: function (result) {
                if (result.code == 200) {
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 2000,
                  });
                  location.reload();
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(
                  jqXHR.responseJSON.message.text,
                  jqXHR.responseJSON.message.title,
                  { timeOut: 2000 }
                );
              },
            });
          }
        });
    } else {
      toastr.warning("Commande non renseigné ", "warning", { timeOut: 2000 });
    }
    e.preventDefault();
  }
);
*/

$("body").on("click", ".scolumn_0", function () {
  $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
  $("._multiple_actions").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $("._multiple_actions").toggle($(".action").filter(":checked").length >= 1);
});

$.fn.attrs = function (fnc) {
  var obj = {};
  $.each(this[0].attributes, function () {
    if (this.name == "value") return; // Avoid someone (optional)
    if (this.specified) obj[this.name] = this.value;
  });
  return obj;
};
$("body").on("change", "._multiple_actions", function () {
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).attrs());
  });

  if ($(this).val() == "_supprimer_etudiant" && _array_ids) {
    //  alert();
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
          $.ajax({
            type: "DELETE",
            url: Routing.generate(
              "module_univ_evaluation_epreuves_etudiant_delete"
            ),
            data: {
              _array_ids: _array_ids,
            },
            success: function success(result) {
              if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 2000,
                });
                location.reload();
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 2000,
                });
              }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                {
                  timeOut: 4000,
                }
              );
            },
          });
        }
      });
  }
});

$("#myBtn").click(function (e) {
  var disp = $(".show_more_historique").css("display");
  if (disp == "none") {
    $(".se").css("display", "block");
  } else {
    $(".se").css("display", "none");
  }
  // $(".se").css("display", "block");
  // alert($('.show_more_historique').css( "display" ));
  e.preventDefault();
});

$(document).on("click", "button.promotion", function (e) {
  //alert()
  
  $("#ModalDocumentDynamique2").modal("show");
  $(".spr").hide();
  $(".bod").fadeIn();

  
  //e.preventDefault();
});
