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
    url: Routing.generate("p_article_niveau_1_list"), // json datasource
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
  ],
  initComplete: function () {
    var api = this.api();
    api.$("td").click(function () {
      var str = this.innerHTML;
      var n = str.search("cd_op");
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

  CustomSearchDatatable.CustomSearchText(api, [1], []);
  CustomSearchDatatable.CustomSearchSelect(api, [], []);
  CustomSearchDatatable.CustomSearchDate(api, [], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

$(function () {
  // you could start a loading animation here
  // use import() as a function - it returns a Promise
  import("../../plugins/ui/jquery-ui.js").then(() => {
    $(".panel-left").resizable({
      handleSelector: ".splitter",
      resizeHeight: false,
    });
  });
  import("../../plugins/jsTree/jstree.min.js")
    .then(() => {
      function customMenu(node) {
        // The default set of all items
        var str = node.id;
        //alert(str)
        if (str.indexOf("test") >= 0 || str.indexOf("niv_") >= 0) {
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
              if (str.indexOf("test") >= 0) {
                $(".modal-title").text("Update Niveau");
                $(".inform").hide();
                $(".cont").empty();
                $(".spr2").fadeIn();
                $('body .pt-6').addClass('pt-add-20');
                $('.w3-wide').hide();

                $.ajax({
                  url: Routing.generate(
                    "p_niveau_2_edit",
                    {
                      id: $("#" + node.id).attr("data-niveau2")
                    }
                  ),
                  contentType: false, // To unable request pages to be cached
                  processData: false, // To send DOMDocument or non processed data file it is set to false
                  success: function (result) {
                    $(".bod").html(result).hide();
                    $("#ModalDocumentDynamique").modal("show");
                    setTimeout(function () {
                      $(".spr").hide();
                      $(".bod").fadeIn();
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
              //return false;
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
              url: Routing.generate("p_niveau_new_test"),
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
            plus:{ 
              icon: "none",
            },
          },
          plugins: ["search", "themes", "types"],
        })
        .on("open_node.jstree", function (e, data) {
          var str = data.node.id;
          console.log(data.node);
          window.pr = $("#" + data.node.id);

          data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
        })
        .on("close_node.jstree", function (e, data) {
          data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
        })
        .on("select_node.jstree", function (e, data) {
          var str = data.node.id;
          window.pr = $("#" + data.node.id);
          
          //alert();
          if (str.indexOf("error-") >= 0) {
            
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();

            $.ajax({
              url: Routing.generate("module_univ_evaluation_error"),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (data) {
                $(".spr2").hide();
                $(".cont").html(data);
                $(".none").fadeIn(2000);
                
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
          if (str.indexOf("niveau_Link_") >= 0) {
            $(".modal-title").text("Ajouter Niveau 1");
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("p_niveau_1_new"),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (result) {
                $(".bod").html(result).hide();
                $("#ModalDocumentDynamique").modal("show");
                setTimeout(function () {
                  $(".spr").hide();
                  $(".bod").fadeIn();
                }, 600); 
              },
            });

          }
          if (str.indexOf("niveau2_Link_") >= 0) {
            $(".modal-title").text("Ajouter Niveau 2");
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("p_article_niveau_2_new", {
                niveau1: $("#" + data.node.id).attr("data-niveau"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (result) {
                $(".bod").html(result).hide();
                $("#ModalDocumentDynamique").modal("show");
                setTimeout(function () {
                  $(".spr").hide();
                  $(".bod").fadeIn();
                }, 600);
              },
            });
          }
          if (str.indexOf("niveau3_Link_") >= 0) {
            window.parent = data.node.parent;
            $(".modal-title").text("Ajouter Niveau 3");
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("p_article_niveau_3_new", {
                niveau1: $("#" + data.node.id).attr("data-niveau1"),
                niveau2: $("#" + data.node.id).attr("data-niveau2"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (result) {
                $(".bod").html(result).hide();
                $("#ModalDocumentDynamique").modal("show");
                setTimeout(function () {
                  $(".spr").hide();
                  $(".bod").fadeIn();
                }, 600);
              },
            });
          }
          if (str.indexOf("niveau4_Link_") >= 0) {
            window.parent = data.node.parent;
            $(".modal-title").text("Ajouter Niveau 4");
            $(".inform").hide();
            $(".cont").empty();
            $(".spr2").fadeIn();
            $('body .pt-6').addClass('pt-add-20');
            $('.w3-wide').hide();
            $.ajax({
              url: Routing.generate("p_article_niveau_4_new", {
                niveau1: $("#" + data.node.id).attr("data-niveau1"),
                niveau2: $("#" + data.node.id).attr("data-niveau2"),
                niveau3: $("#" + data.node.id).attr("data-niveau3"),
              }),
              contentType: false, // To unable request pages to be cached
              processData: false, // To send DOMDocument or non processed data file it is set to false
              success: function (result) {
                $(".bod").html(result).hide();
                $("#ModalDocumentDynamique").modal("show");
                setTimeout(function () {
                  $(".spr").hide();
                  $(".bod").fadeIn();
                }, 600);
              },
            });
          }


        });
    })
    .catch((error) => "An error occurred while loading the component");
});

$(".add").click(function (e) {
   alert();
  $.ajax({
    type: "POST",
    url: Routing.generate("p_niveau_1_new"),
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
$(".add_2").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: Routing.generate("p_article_niveau_2_new", {
      niveau1: window.pr.attr("data-niveau"),
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
$(".add_3").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: Routing.generate("p_article_niveau_3_new", {
      niveau2: window.pr.attr("data-niveau2"),
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
$(".add_4").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: Routing.generate("p_article_niveau_3_new", {
      niveau2: window.pr.attr("data-niveau2"),
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
$("body").on("submit", ".form4", function (e) {
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
    url: Routing.generate("p_article_niveau_4_new", {
      niveau1: window.pr.attr("data-niveau1"),
      niveau2: window.pr.attr("data-niveau2"),
      niveau3: window.pr.attr("data-niveau3"),
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
$("body").on("submit", ".form3", function (e) {
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
    url: Routing.generate("p_article_niveau_3_new", {
      niveau1: window.pr.attr("data-niveau1"),
      niveau2: window.pr.attr("data-niveau2"),
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
$(".bod").on("submit", ".form2", function (e) {
  //alert();
  e.preventDefault();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = Ladda.create(document.querySelector(".button-save-niveau2"));
  //alert(id);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("p_article_niveau_2_new", {
      niveau1: window.pr.attr("data-niveau"),
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
$(".bod").on("submit", ".form", function (e) {
 
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  if ($(document.activeElement).hasClass("button-save-add-nomen")) {
   // alert()
    var l = Ladda.create(document.querySelector(".button-save-add-nomen"));
    var goto = 1;
  } else {
    var l = Ladda.create(document.querySelector(".button-save-nomen"));
    var goto = 0;
  }
  l.start();
  
  var obj = new Object();
  obj["route"] = "p_niveau_1_new";
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
  
  $("#using_json").jstree(true).refresh();
  
  e.preventDefault();
 
 
});
$("#grid tbody").on("click", ".cd_op", function () {
  $.ajax({
    type: "POST",
    url: Routing.generate("p_article_niveau_1_edit", {
      id: $(this).closest("tr").attr("id"),
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
});
$(".bod").on("submit", ".form_edit", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);

  var id = $("#test").data("nomenId");
  var l = Ladda.create(document.querySelector(".button-edit-nomen"));
  l.start();
  var obj = new Object();
  var parametre = { id: id };
  obj["route"] = "p_article_niveau_1_edit";
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
    obj["route"] = "p_article_niveau_1_delete";
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
