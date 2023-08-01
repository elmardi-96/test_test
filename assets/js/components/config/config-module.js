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

$("#using_json")
  .jstree({
    core: {
      data: {
        url: Routing.generate("config_modules_tree"),
        dataType: "json",
      },
      check_callback: CheckOperation,
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
    contextmenu: { items: customMenu },
    /* crrm: {
      move: {
        check_move: function (m) {
          var p = this._get_parent(m.o);
          if (!p) return false;
          p = p == -1 ? this.get_container() : p;
          if (p === m.np) return true;
          if (p[0] && m.np[0] && p[0] === m.np[0]) return true;
          return false;
        },
      },
    },*/

    /*dnd: {
      drop_target: false,
      drag_target: false,
    },*/

    /*checkbox: {
      keep_selected_style: true,
      whole_node: true, // to avoid checking the box just clicking the node
      tie_selection: false,
    },*/
    plugins: [
      "search",
      "themes",
      "types",
      "html_data",
      ,
      "crrm",
      "dnd",
      "contextmenu",
    ],
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
    $(".hide-promotion").removeClass("content");
    console.log(data);
    //ope_Link_
    var str = data.node.id;
    //console.log(data);
    window.pr = $("#" + str);
    if (window.selectedData == 3) {
      return true;
    }
    if (data.node.id.indexOf("mod_link_") >= 0) {
      //alert();
      $(".modal-title").text("Ajouter Module");
      $(".show-promotion").empty();

      $.ajax({
        url: Routing.generate(
          "module_univ_config_module" /*, {
            formation: $("#" + data.node.id).attr("data-promotion"),
          }*/
        ),
        contentType: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function (data) {
          $(".spr").hide();
          $(".show-promotion").html(data);
          import("../../plugins/select2/select2.full.min.js").then(() => {
            var select = $(".sel2").select2();
            $(".sel2").on("select2:select", function (e) {
              //console.log(e.params.data.text)
              $("#form_description").val(
                e.params.data.text + " " + $(".annee").text()
              );
            });
          });
          //require('./mdb.min.js');
          import("../../mdb.min.js").then(() => {
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
      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
    }
    if (
      data.node.id.indexOf("dos_link_") >= 0 ||
      window.selectedData == 1 ||
      window.selectedData == 2
    ) {
      //alert(window.selectedData);
      if (window.selectedData == 1) {
        data.node.id = window.pr.attr("id");
        import("../../mdb.min.js").then(() => {
          $("#exampleModalPreview2").modal("hide");
        });
        import("../../mdb.min.js").then(() => {
          $("#exampleModalPreview").modal("hide");
        });
      } else {
        import("../../mdb.min.js").then(() => {
          $("#exampleModalPreview2").modal("hide");
        });
        import("../../mdb.min.js").then(() => {
          $("#exampleModalPreview").modal("hide");
        });
        //alert()
        /*import("../../mdb.min.js").then(() => {
          $("#exampleModalPreview").modal("hide");
        });*/
        data.node.id = window.pr.attr("id");
      }

      window.selectedData = null;
      $(".modal-title").text("Ajouter Dossier");
      $(".show-promotion").empty();

      $.ajax({
        url: Routing.generate("module_univ_config_dossier_module", {
          module: $("#" + data.node.id).attr("data-module"),
        }),
        contentType: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function (data) {
          $(".spr").hide();
          $(".hide-promotion").find(".modal-content").addClass("content");
          $(".show-promotion").html(data);
          if (window.type == 2) {
            //$(".show-promotion").hide();
            //alert()
            window.type = null;
            import("../../mdb.min.js").then(() => {
              $("#exampleModalPreview2").modal("hide");
            });
            import("../../mdb.min.js").then(() => {
              $("#exampleModalPreview").modal("hide");
            });
          } else if (window.type == 1) {
            //alert()
            import("../../mdb.min.js").then(() => {
              $("#exampleModalPreview").modal("show");
            });
            import("../../mdb.min.js").then(() => {
              $("#exampleModalPreview2").modal("show");
            });
          } else {
            import("../../mdb.min.js").then(() => {
              $("#exampleModalPreview").modal("show");
            });
          }
          import("../../plugins/select2/select2.full.min.js").then(() => {
            var select = $(".sel2").select2();
            var select2_dossiers = $(".select2_dossiers").select2({
              placeholder: "Choix dossiers",
              allowClear: true,
            });
            $(".sel2").on("select2:select", function (e) {
              //console.log(e.params.data.text)
              $("#form_description").val(
                e.params.data.text + " " + $(".annee").text()
              );
            });
          });
          //require('./mdb.min.js');
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

      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
    }
    if (data.node.id.indexOf("smdl_link_") >= 0) {
      //alert();
      $(".modal-title").text("Ajouter Sous Module");
      $(".show-promotion").empty();

      $.ajax({
        url: Routing.generate("module_univ_config_SousModule", {
          module: $("#" + data.node.id).attr("data-module"),
        }),
        contentType: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function (data) {
          $(".spr").hide();
          $(".show-promotion").html(data);
          import("../../plugins/select2/select2.full.min.js").then(() => {
            var select = $(".sel2").select2();
            $(".sel2").on("select2:select", function (e) {
              //console.log(e.params.data.text)
              $("#form_description").val(
                e.params.data.text + " " + $(".annee").text()
              );
            });
          });
          //require('./mdb.min.js');
          import("../../mdb.min.js").then(() => {
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
      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
    }

    if (data.node.id.indexOf("ope_link_") >= 0) {
      //alert();
      $(".modal-title").text("Ajouter Opération");
      $(".show-promotion").empty();

      $.ajax({
        url: Routing.generate("module_univ_config_operation", {
          sousModule: $("#" + data.node.id).attr("data-sousModule"),
        }),
        contentType: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function (data) {
          $(".spr").hide();
          $(".show-promotion").html(data);
          import("../../plugins/select2/select2.full.min.js").then(() => {
            var select = $(".sel2").select2();
            $(".sel2").on("select2:select", function (e) {
              //console.log(e.params.data.text)
              $("#form_description").val(
                e.params.data.text + " " + $(".annee").text()
              );
            });
          });
          //require('./mdb.min.js');
          import("../../mdb.min.js").then(() => {
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
      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
    }
  })

  .bind("move_node.jstree", function (e, data) {
    //alert("ddd");
    //console.log(data);
    //console.log(e);
    //console.log($(data.rslt.o));

    //alert();
    var tree = $("#using_json").jstree(true),
      parentNode = tree.get_node(data.parent);

    var aSiblings = getSiblings(data.node.id, data.parent);
    var aSiblings2 = getSiblings2(data.node.id, data.parent);
    var aSiblings3 = getSiblings3(data.node.id, data.parent);
    //console.log(aSiblings);
    //console.log(parentNode.children);
    //console.log($.inArray(node.id, parent.children));
    /* arr.each(function (index) {
      //console.log( index + ": " + $( this ).text() );
      list.push($("#" + index).attr("data-operation"));
    });*/
    //console.log(aSiblings);
    /*if ($(document.activeElement).hasClass("my-button1")) {
      var l = Ladda.create(document.querySelector(".my-button1"));
      var goto = 1;
    } else {
      var l = Ladda.create(document.querySelector(".my-button"));
      var goto = 0;
    }*/
    if (data.node.id.indexOf("ope_") >= 0) {
     // alert("dd")
      $.ajax({
        type: "POST",
        url: Routing.generate(
          "module_univ_config_order" /*, {
              formation: window.pr.attr("data-promotion"),
            }*/
        ),
        data: {
          child: aSiblings /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule")*/,
        },
        success: function (result) {
          //console.log(result.message.data);
          //    $("#using_json").jstree(true).refresh();

          if (result.errors) {
            //console.log(result.errors);
            //l.stop();
            ShowFormErrors(selector, form_name, result.errors);
          }
          if (result.code == 200) {
            /// alert(result.message.data)

            //alert();
            //l.stop();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 2000,
            });
            //$("#using_json").jstree(true).refresh();

            /*var instance = $('#using_json').jstree(true);
                      instance.deselect_all();
                      instance.select_node('seme_Link_8');*/
          } else if (result.code == 403) {
            //l.stop();
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
    } 


    if (data.node.id.indexOf("smdl_") >= 0) {
      //alert()
      console.log(aSiblings)
      $.ajax({
        type: "POST",
        url: Routing.generate(
          "module_univ_config_sous_module_order" /*, {
              formation: window.pr.attr("data-promotion"),
            }*/
        ),
        data: {
          child: aSiblings2 /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule")*/,
        },
        success: function (result) {
          //console.log(result.message.data);
          //    $("#using_json").jstree(true).refresh();

          if (result.errors) {
            //console.log(result.errors);
            //l.stop();
            ShowFormErrors(selector, form_name, result.errors);
          }
          if (result.code == 200) {
            /// alert(result.message.data)

            //alert();
            //l.stop();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 2000,
            });
            //$("#using_json").jstree(true).refresh();

            /*var instance = $('#using_json').jstree(true);
                      instance.deselect_all();
                      instance.select_node('seme_Link_8');*/
          } else if (result.code == 403) {
            //l.stop();
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
    } 



    if (data.node.id.indexOf("mod_") >= 0) {
      //alert()
      console.log(aSiblings3)
      $.ajax({
        type: "POST",
        url: Routing.generate(
          "module_univ_config_module_order" /*, {
              formation: window.pr.attr("data-promotion"),
            }*/
        ),
        data: {
          child: aSiblings3 /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule")*/,
        },
        success: function (result) {
          //console.log(result.message.data);
          //    $("#using_json").jstree(true).refresh();

          if (result.errors) {
            //console.log(result.errors);
            //l.stop();
            ShowFormErrors(selector, form_name, result.errors);
          }
          if (result.code == 200) {
            /// alert(result.message.data)

            //alert();
            //l.stop();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 2000,
            });
            //$("#using_json").jstree(true).refresh();

            /*var instance = $('#using_json').jstree(true);
                      instance.deselect_all();
                      instance.select_node('seme_Link_8');*/
          } else if (result.code == 403) {
            //l.stop();
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
    } 
    
    /*
    requires crrm plugin

    .o - the node being moved
    .r - the reference node in the move
    .ot - the origin tree instance
    .rt - the reference tree instance
    .p - the position to move to (may be a string - "last", "first", etc)
    .cp - the calculated position to move to (always a number)
    .np - the new parent
    .oc - the original node (if there was a copy)
    .cy - boolen indicating if the move was a copy
    .cr - same as np, but if a root node is created this is -1
    .op - the former parent
    .or - the node that was previously in the position of the moved node */
    //var nodeType = $(data.rslt.o).attr("rel");
    //var parentType = $(data.rslt.np).attr("id");
    //alert(parentType)
    /*if (data.parent.indexOf("ope_") >= 0) {
      // alert()
      return false;
    }
    if (data.node.id.indexOf("racine_") >= 0) {
      // alert()
      return false;
    }
    if (data.node.id.indexOf("mod_") >= 0) {
      // TODO!
      return false;
    }
    if (data.node.id.indexOf("dos_") >= 0) {
      // TODO!
      return false;
    }
    if (data.node.id.indexOf("smdl_") >= 0) {
      // TODO!
      return false;
    }*/
  });

function CheckOperation(operation, node, parent, position, more) {
  //console.log(operation);
  if (operation == "move_node") {
    //alert("fdf")
    //console.log(node);
    if (!more.dnd) {
      //alert();
      /* var tree = $("#using_json").jstree(true),
        parentNode = tree.get_node(parent);
      var list = [];
      //console.log($.jstree);
      //console.log($.inArray(node.id, parent.children));
      $("#" + parent.id + ">ul li").each(function (index) {
        //console.log( index + ": " + $( this ).text() );
        list.push($(this).attr("data-operation"));
      });
      $.ajax({
        type: "POST",
        url: Routing.generate(
          "module_univ_config_order" /*, {
              formation: window.pr.attr("data-promotion"),
            }
        ),
        data: {
          child: list /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule"),
        },
        success: function (result) {
          //console.log(result.message.data);
          //    $("#using_json").jstree(true).refresh();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //alert();
          l.stop();
          toastr.error("Erreur", errorThrown, { timeOut: 2000 });
        },
      });*/
    }
    // console.log(more);
    if (node.parent != parent.id) {
      return false;
    }
    if (
      parent.id.indexOf("mod_") >= 0 //||
      //parent.id.indexOf("racine_") >= 0 //||
      //parent.id.indexOf("dos_") >= 0
    ) {
      return false;
    }
    if (parent.id.indexOf("smdl_") >= 0) {
      //var aSiblings = getSiblings(node.id, parent);

      return true;
    }

    /*if (more.dnd == true) {
      if(more.ref.id.indexOf("ope_") && more.ref.parent.indexOf("smdl_")){
        return true;
      }
      if (
        more.ref.id.indexOf("mod_") ||
        more.ref.id.indexOf("racine_") ||
        more.ref.id.indexOf("dos_") ||
        more.ref.id.indexOf("smdl_")
      ) {
        return false;
      }
    }*/
    /*if (
      more &&
      more.dnd &&
      more.pos !== "a" &&
      more.pos === "i" &&
      more.pos !== "b"
      
    ) {
      // disallow re-ordering

      return false;
    } else {
      return true;
    }*/
  } else if (operation == "copy_node") {
    return false;
  }
  return true;
}

$("body").on("submit", "._module", function (e) {
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
    url: Routing.generate(
      "module_univ_config_module" /*, {
        formation: window.pr.attr("data-promotion"),
      }*/
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

$("body").on("submit", "._dossier", function (e) {
  //alert();
  window.type = $(document.activeElement).attr("data-type");
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = Ladda.create(document.querySelector(".my-button1"));
    var goto = 1;
  } else if (window.type == 2) {
    var l = Ladda.create(document.querySelector(".my-button2"));
    var goto = 0;
  } else if (window.type == 1) {
    var l = Ladda.create(document.querySelector(".my-button1"));
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
    url: Routing.generate("module_univ_config_dossier", {
      module: window.pr.attr("data-module"),
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

        if (window.type == 2) {
          //$(".show-promotion").hide();
          //alert()
          // window.type = null;
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview2").modal("hide");
          });
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("hide");
          });
        } else if (window.type == 1) {
          //alert()
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("show");
          });
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview2").modal("show");
          });
        } else {
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("show");
          });
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000,
        });
        window.selectedData = window.type;
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

$("body").on("submit", "._dossier_update", function (e) {
  //alert();
  window.type = $(document.activeElement).attr("data-type");
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = Ladda.create(document.querySelector(".my-button1"));
    var goto = 1;
  } else if (window.type == 2) {
    var l = Ladda.create(document.querySelector(".my-button2"));
    var goto = 0;
  } else if (window.type == 1) {
    var l = Ladda.create(document.querySelector(".my-button1"));
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
    url: Routing.generate("module_univ_config_dossier_edit", {
      dossier: window.pr.attr("data-dossier"),
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
        if (window.type == 2) {
          //$(".show-promotion").hide();
          //alert()
          // window.type = null;
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview2").modal("hide");
          });
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("hide");
          });
        } else if (window.type == 1) {
          //alert()
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("show");
          });
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview2").modal("show");
          });
        } else {
          import("../../mdb.min.js").then(() => {
            $("#exampleModalPreview").modal("show");
          });
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000,
        });
        window.selectedData = window.type;
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

$("body").on("submit", "._dossier_module", function (e) {
  //alert();
  window.selectedData = 2;
  window.type = $(document.activeElement).attr("data-type");
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
    url: Routing.generate("module_univ_config_dossier_module", {
      module: window.pr.attr("data-module"),
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
        window.selectedData = window.type;
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

$("body").on("submit", "._sous_module_edit", function (e) {
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
    url: Routing.generate("module_univ_config_SousModule_edit", {
      sousModule: window.pr.attr("data-sousmodule"),
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

$("body").on("submit", "._sous_module", function (e) {
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
    url: Routing.generate("module_univ_config_SousModule", {
      module: window.pr.attr("data-module"),
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

$("body").on("submit", "._operation", function (e) {
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
    url: Routing.generate("module_univ_config_operation", {
      sousModule: window.pr.attr("data-sousModule"),
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

$("body").on("submit", "._operation_edit", function (e) {
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
    url: Routing.generate("module_univ_config_operation_edit", {
      operation: window.pr.attr("data-operation"),
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

function getSiblings(nodeID, parent) {
  var tree = $("#using_json").jstree(true),
    parentNode = tree.get_node(parent),
    aChildren = parentNode.children,
    aSiblings = [];

  aChildren.forEach(function (c) {
    aSiblings.push($("#" + c).attr("data-operation"));
  });
  return aSiblings;
}
function getSiblings2(nodeID, parent) {
  var tree = $("#using_json").jstree(true),
    parentNode = tree.get_node(parent),
    aChildren = parentNode.children,
    aSiblings = [];

  aChildren.forEach(function (c) {
    aSiblings.push($("#" + c).attr("data-sousmodule"));
  });
  return aSiblings;
}


function getSiblings3(nodeID, parent) {
  var tree = $("#using_json").jstree(true),
    parentNode = tree.get_node(parent),
    aChildren = parentNode.children,
    aSiblings = [];

  aChildren.forEach(function (c) {
    aSiblings.push($("#" + c).attr("data-module"));
  });
  return aSiblings;
}

$("body").on("click", ".lien-dossier", function (e) {
  //alert()
  $(".modal-title").text("Ajouter Dossier");
  import("../../mdb.min.js").then(() => {
    $("#exampleModalPreview").modal("hide");
  });
  $(".show-promotion").empty();
  $(".show-promotion2").empty();
  $(".hide-promotion2 .modal-content").removeClass("content");
  window.pr = $(this);

  $.ajax({
    url: Routing.generate("module_univ_config_dossier", {
      module: $(this).attr("data-module"),
    }),
    contentType: false, // To unable request pages to be cached
    processData: false, // To send DOMDocument or non processed data file it is set to false
    success: function (data) {
      $(".spr").hide();

      $(".show-promotion2").html(data);
      import("../../plugins/select2/select2.full.min.js").then(() => {
        var select = $(".sel2").select2();
        var select2_dossiers = $(".select2_dossiers").select2({
          placeholder: "Choix dossiers",
          allowClear: true,
        });
        $(".sel2").on("select2:select", function (e) {
          //console.log(e.params.data.text)
          $("#form_description").val(
            e.params.data.text + " " + $(".annee").text()
          );
        });
      });
      //require('./mdb.min.js');
      import("../../mdb.min.js").then(() => {
        $("#exampleModalPreview2").modal("show");
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
});

$("body").on("submit", "._module_edit", function (e) {
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
    url: Routing.generate("module_univ_config_module_edit", {
      usModule: window.pr.attr("data-module"),
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

function customMenu(node) {
  // The default set of all items
  var items = {
    renameItem: {
      // The "rename" menu item
      label: "Modifier",
      action: function () {
        //alert()
        var str = node.id;
        window.pr = $("#" + node.id);
        //console.log(str)
        if (str.indexOf("mod_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();

          $.ajax({
            url: Routing.generate("module_univ_config_module_edit", {
              usModule: $("#" + str).attr("data-module"),
            }),
            contentType: false, // To unable request pages to be cached
            processData: false, // To send DOMDocument or non processed data file it is set to false
            success: function (data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              import("../../plugins/select2/select2.full.min.js").then(() => {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(
                    e.params.data.text + " " + $(".annee").text()
                  );
                });
              });
              //require('./mdb.min.js');
              import("../../mdb.min.js").then(() => {
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
        if (str.indexOf("dos_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();

          $.ajax({
            url: Routing.generate("module_univ_config_dossier_edit", {
              dossier: $("#" + str).attr("data-dossier"),
            }),
            contentType: false, // To unable request pages to be cached
            processData: false, // To send DOMDocument or non processed data file it is set to false
            success: function (data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              import("../../plugins/select2/select2.full.min.js").then(() => {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(
                    e.params.data.text + " " + $(".annee").text()
                  );
                });
              });
              //require('./mdb.min.js');
              import("../../mdb.min.js").then(() => {
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
        if (str.indexOf("smdl_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();

          $.ajax({
            url: Routing.generate("module_univ_config_SousModule_edit", {
              sousModule: $("#" + str).attr("data-sousmodule"),
            }),
            contentType: false, // To unable request pages to be cached
            processData: false, // To send DOMDocument or non processed data file it is set to false
            success: function (data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              import("../../plugins/select2/select2.full.min.js").then(() => {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(
                    e.params.data.text + " " + $(".annee").text()
                  );
                });
              });
              //require('./mdb.min.js');
              import("../../mdb.min.js").then(() => {
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
        if (str.indexOf("ope_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();

          $.ajax({
            url: Routing.generate("module_univ_config_operation_edit", {
              operation: $("#" + str).attr("data-operation"),
            }),
            contentType: false, // To unable request pages to be cached
            processData: false, // To send DOMDocument or non processed data file it is set to false
            success: function (data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              import("../../plugins/select2/select2.full.min.js").then(() => {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(
                    e.params.data.text + " " + $(".annee").text()
                  );
                });
              });
              //require('./mdb.min.js');
              import("../../mdb.min.js").then(() => {
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
      },
    },
    deleteItem: {
      // The "delete" menu item
      label: "Supprimer",
      action: function () {
        var str = node.id;
        window.pr = $("#" + node.id);
        //console.log(str)
        if (str.indexOf("mod_") >= 0) {
          //alert();
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
                  url: Routing.generate("module_univ_config_module_delete", {
                    module: $("#" + node.id).attr("data-module"),
                  }),
                  success: function (result) {
                    if (result.code == 200) {
                      $("#using_json").jstree(true).refresh();
                      toastr.success(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
                    } else if (result.code == 403) {
                      toastr.warning(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
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
        }
        if (str.indexOf("dos_") >= 0) {
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
                  url: Routing.generate("module_univ_config_dossier_delete", {
                    dossier: $("#" + node.id).attr("data-dossier"),
                  }),
                  success: function (result) {
                    if (result.code == 200) {
                      $("#using_json").jstree(true).refresh();
                      toastr.success(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
                    } else if (result.code == 403) {
                      toastr.warning(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
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
        }
        if (str.indexOf("smdl_") >= 0) {
          //alert();
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
                    "module_univ_config_sousModule_delete",
                    {
                      sousModule: $("#" + node.id).attr("data-sousmodule"),
                    }
                  ),
                  success: function (result) {
                    if (result.code == 200) {
                      $("#using_json").jstree(true).refresh();
                      toastr.success(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
                    } else if (result.code == 403) {
                      toastr.warning(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
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
        }
        if (str.indexOf("ope_") >= 0) {
          //alert();
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
                  url: Routing.generate("module_univ_config_operation_delete", {
                    operation: $("#" + node.id).attr("data-operation"),
                  }),
                  success: function (result) {
                    if (result.code == 200) {
                      $("#using_json").jstree(true).refresh();
                      toastr.success(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
                    } else if (result.code == 403) {
                      toastr.warning(
                        result.message.text,
                        result.message.title,
                        { timeOut: 4000 }
                      );
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

          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
      },
    },
  };

  if ($(node).hasClass("folder")) {
    // Delete the "delete" menu item
    delete items.deleteItem;
  }

  return items;
}
