(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_article_niveau1"],{

/***/ "./assets/js/components/parametrage/p_article_niveau1.js":
/*!***************************************************************!*\
  !*** ./assets/js/components/parametrage/p_article_niveau1.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");









var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.setRoutingData(routes);


global.$ = $;


var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_1_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  columns: [{
    orderable: false,
    searchable: true,
    width: "1px",
    targets: [0]
  }, {
    orderable: false,
    width: "10px",
    targets: 0
  }],
  order: [[0, "desc"]],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  initComplete: function initComplete() {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__["CustomSearchText"](api, [1], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__["CustomSearchCheckbox"](api, [0], []);
});
$(function () {
  // you could start a loading animation here
  // use import() as a function - it returns a Promise
  __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! ../../plugins/ui/jquery-ui.js */ "./assets/js/plugins/ui/jquery-ui.js", 7)).then(function () {
    $(".panel-left").resizable({
      handleSelector: ".splitter",
      resizeHeight: false
    });
  });
  Promise.all(/*! import() */[__webpack_require__.e(17), __webpack_require__.e(19), __webpack_require__.e(20)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/jsTree/jstree.min.js */ "./assets/js/plugins/jsTree/jstree.min.js", 7)).then(function () {
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
          action: function action() {
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
                url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_niveau_2_edit", {
                  id: $("#" + node.id).attr("data-niveau2")
                }),
                contentType: false,
                // To unable request pages to be cached
                processData: false,
                // To send DOMDocument or non processed data file it is set to false
                success: function success(result) {
                  $(".bod").html(result).hide();
                  $("#ModalDocumentDynamique").modal("show");
                  setTimeout(function () {
                    $(".spr").hide();
                    $(".bod").fadeIn();
                  }, 600);
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  $(".spr").hide();
                  l.stop();
                  console.log(jqXHR.responseText);
                  //$('#resultats_import').html(jqXHR.responseText)
                  toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", {
                    timeOut: 2000
                  });
                }
              });
            }
            //return false;
          }
        }
      };

      if ($(node).hasClass("folder")) {
        // Delete the "delete" menu item
        delete items.deleteItem;
      }
      return items;
    }
    $("#using_json").jstree({
      core: {
        data: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_niveau_new_test"),
          dataType: "json"
        }
      },
      contextmenu: {
        items: customMenu
      },
      types: {
        root: {
          icon: "glyphicon glyphicon-folder-close"
        },
        child: {
          icon: "glyphicon glyphicon-folder-open"
        },
        "default": {},
        plus: {
          icon: "none"
        }
      },
      plugins: ["search", "themes", "types"]
    }).on("open_node.jstree", function (e, data) {
      var str = data.node.id;
      console.log(data.node);
      window.pr = $("#" + data.node.id);
      data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
    }).on("close_node.jstree", function (e, data) {
      data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
    }).on("select_node.jstree", function (e, data) {
      var str = data.node.id;
      window.pr = $("#" + data.node.id);

      //alert();
      if (str.indexOf("error-") >= 0) {
        $(".inform").hide();
        $(".cont").empty();
        $(".spr2").fadeIn();
        $.ajax({
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("module_univ_evaluation_error"),
          contentType: false,
          // To unable request pages to be cached
          processData: false,
          // To send DOMDocument or non processed data file it is set to false
          success: function success(data) {
            $(".spr2").hide();
            $(".cont").html(data);
            $(".none").fadeIn(2000);
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            $(".spr").hide();
            l.stop();
            console.log(jqXHR.responseText);
            //$('#resultats_import').html(jqXHR.responseText)
            toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", {
              timeOut: 2000
            });
          }
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_niveau_1_new"),
          contentType: false,
          // To unable request pages to be cached
          processData: false,
          // To send DOMDocument or non processed data file it is set to false
          success: function success(result) {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
          }
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_2_new", {
            niveau1: $("#" + data.node.id).attr("data-niveau")
          }),
          contentType: false,
          // To unable request pages to be cached
          processData: false,
          // To send DOMDocument or non processed data file it is set to false
          success: function success(result) {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
          }
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_3_new", {
            niveau1: $("#" + data.node.id).attr("data-niveau1"),
            niveau2: $("#" + data.node.id).attr("data-niveau2")
          }),
          contentType: false,
          // To unable request pages to be cached
          processData: false,
          // To send DOMDocument or non processed data file it is set to false
          success: function success(result) {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
          }
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_4_new", {
            niveau1: $("#" + data.node.id).attr("data-niveau1"),
            niveau2: $("#" + data.node.id).attr("data-niveau2"),
            niveau3: $("#" + data.node.id).attr("data-niveau3")
          }),
          contentType: false,
          // To unable request pages to be cached
          processData: false,
          // To send DOMDocument or non processed data file it is set to false
          success: function success(result) {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
          }
        });
      }
    });
  })["catch"](function (error) {
    return "An error occurred while loading the component";
  });
});
$(".add").click(function (e) {
  alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_niveau_1_new"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$(".add_2").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_2_new", {
      niveau1: window.pr.attr("data-niveau")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$(".add_3").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_3_new", {
      niveau2: window.pr.attr("data-niveau2")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$(".add_4").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_3_new", {
      niveau2: window.pr.attr("data-niveau2")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$("body").on("submit", ".form4", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button1"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button"));
    var _goto = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_4_new", {
      niveau1: window.pr.attr("data-niveau1"),
      niveau2: window.pr.attr("data-niveau2"),
      niveau3: window.pr.attr("data-niveau3")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors, "natureEpreuve");
      }
      if (result.code == 200) {
        window.ope = 0;
        if (_goto == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 2000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      //alert();
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 2000
      });
    }
  });
});
$("body").on("submit", ".form3", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button1"));
    var _goto2 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button"));
    var _goto2 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_3_new", {
      niveau1: window.pr.attr("data-niveau1"),
      niveau2: window.pr.attr("data-niveau2")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors, "natureEpreuve");
      }
      if (result.code == 200) {
        window.ope = 0;
        if (_goto2 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 2000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      //alert();
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 2000
      });
    }
  });
});
$(".bod").on("submit", ".form2", function (e) {
  //alert();
  e.preventDefault();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".button-save-niveau2"));
  //alert(id);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_2_new", {
      niveau1: window.pr.attr("data-niveau")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        //window.selectedData = result.message.data;
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        //window.refresh = 0;

        $("#using_json").jstree(true).refresh();
        $("#grid").DataTable().ajax.reload();

        //window.refresh = 1;
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 2000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      //alert();
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 2000
      });
    }
  });
});
$(".bod").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  if ($(document.activeElement).hasClass("button-save-add-nomen")) {
    // alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".button-save-add-nomen"));
    var _goto3 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".button-save-nomen"));
    var _goto3 = 0;
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
  obj["autoTrigger"] = _goto3;
  obj["triggerClass"] = "add";
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__["autoAjaxRenderController"](obj);
  $("#using_json").jstree(true).refresh();
  e.preventDefault();
});
$("#grid tbody").on("click", ".cd_op", function () {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("p_article_niveau_1_edit", {
      id: $(this).closest("tr").attr("id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
});
$(".bod").on("submit", ".form_edit", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#test").data("nomenId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".button-edit-nomen"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
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
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__["autoAjaxRenderController"](obj);
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
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__["autoAjaxDelete"](obj);
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-bun.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-bun.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global Bun -- Deno case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var ENGINE_IS_BUN = __webpack_require__(/*! ../internals/engine-is-bun */ "./node_modules/core-js/internals/engine-is-bun.js");
var USER_AGENT = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
  var version = global.Bun.version.split('.');
  return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setInterval = schedulersFix(global.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setTimeout = schedulersFix(global.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ })

},[["./assets/js/components/parametrage/p_article_niveau1.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~app~configue_module~ecriturecomptable_export~p_article_niveau1~test",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wX2FydGljbGVfbml2ZWF1MS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGVmZXJSZW5kZXIiLCJzdGF0ZVNhdmUiLCJsZW5ndGhNZW51IiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJ3aWR0aCIsInRhcmdldHMiLCJvcmRlciIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImluaXRDb21wbGV0ZSIsImFwaSIsImNsaWNrIiwic3RyIiwiaW5uZXJIVE1MIiwibiIsInNlYXJjaCIsImRyYXciLCJsYW5ndWFnZSIsInByb2Nlc3NpbmciLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsInRoZW4iLCJyZXNpemFibGUiLCJoYW5kbGVTZWxlY3RvciIsInJlc2l6ZUhlaWdodCIsImN1c3RvbU1lbnUiLCJpZCIsImluZGV4T2YiLCJpdGVtcyIsInJlbmFtZUl0ZW0iLCJsYWJlbCIsInByIiwiaGlkZSIsImVtcHR5IiwiZmFkZUluIiwiYWRkQ2xhc3MiLCJhdHRyIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwibW9kYWwiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImwiLCJzdG9wIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlVGV4dCIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwiaGFzQ2xhc3MiLCJkZWxldGVJdGVtIiwianN0cmVlIiwiY29yZSIsImRhdGFUeXBlIiwiY29udGV4dG1lbnUiLCJ0eXBlcyIsInJvb3QiLCJpY29uIiwiY2hpbGQiLCJwbHVzIiwicGx1Z2lucyIsImluc3RhbmNlIiwic2V0X2ljb24iLCJuaXZlYXUxIiwicGFyZW50Iiwibml2ZWF1MiIsIm5pdmVhdTMiLCJhbGVydCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiTGFkZGEiLCJxdWVyeVNlbGVjdG9yIiwiZ290byIsImZvcm1fbmFtZSIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJnZXQiLCJzdGFydCIsImVycm9ycyIsIlNob3dGb3JtRXJyb3JzIiwiY29kZSIsIm9wZSIsInNlbGVjdGVkRGF0YSIsIm1lc3NhZ2UiLCJ0aXRsZSIsInJlZnJlc2giLCJvYmoiLCJPYmplY3QiLCJhdXRvRnVuY3Rpb25BamF4IiwiY2xvc2VzdCIsInBhcmFtZXRyZSIsInRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFQztBQUNrQztBQUNqRUksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFDNEQ7QUFFaUI7QUFFekYsSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQzFDQyxXQUFXLEVBQUU7SUFDWEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2hCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ2xCLENBQUMsQ0FBQzs7QUFFRjs7QUFFQSxJQUFJQyxLQUFLLEdBQUdSLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ1MsU0FBUyxDQUFDO0VBQy9CQyxJQUFJLEVBQUU7SUFDSkMsR0FBRyxFQUFFZCxrSEFBTyxDQUFDZSxRQUFRLENBQUMseUJBQXlCLENBQUM7SUFBRTtJQUNsREMsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUNEQyxXQUFXLEVBQUUsSUFBSTtF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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkWTtBQUNiO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxtSEFBMkM7QUFDckUsZUFBZSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEJELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFFQUFxRTtBQUN4RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJmaWxlIjoicF9hcnRpY2xlX25pdmVhdTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcbmdsb2JhbC4kID0gJDtcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gIGN1c3RvbUNsYXNzOiB7XHJcbiAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9hcnRpY2xlX25pdmVhdV8xX2xpc3RcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogXCJnZXRcIixcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSxcclxuICAgIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl0sXHJcbiAgXSxcclxuXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiB0cnVlLCB3aWR0aDogXCIxcHhcIiwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIiwgdGFyZ2V0czogMCB9LFxyXG4gIF0sXHJcbiAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW5pdENvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXBpID0gdGhpcy5hcGkoKTtcclxuICAgIGFwaS4kKFwidGRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc3RyID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgIHZhciBuID0gc3RyLnNlYXJjaChcImNkX29wXCIpO1xyXG4gICAgICBpZiAobiA9PSAtMSkge1xyXG4gICAgICAgIGFwaS5zZWFyY2godGhpcy5pbm5lckhUTUwpLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgW10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAvLyB5b3UgY291bGQgc3RhcnQgYSBsb2FkaW5nIGFuaW1hdGlvbiBoZXJlXHJcbiAgLy8gdXNlIGltcG9ydCgpIGFzIGEgZnVuY3Rpb24gLSBpdCByZXR1cm5zIGEgUHJvbWlzZVxyXG4gIGltcG9ydChcIi4uLy4uL3BsdWdpbnMvdWkvanF1ZXJ5LXVpLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgJChcIi5wYW5lbC1sZWZ0XCIpLnJlc2l6YWJsZSh7XHJcbiAgICAgIGhhbmRsZVNlbGVjdG9yOiBcIi5zcGxpdHRlclwiLFxyXG4gICAgICByZXNpemVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgaW1wb3J0KFwiLi4vLi4vcGx1Z2lucy9qc1RyZWUvanN0cmVlLm1pbi5qc1wiKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBjdXN0b21NZW51KG5vZGUpIHtcclxuICAgICAgICAvLyBUaGUgZGVmYXVsdCBzZXQgb2YgYWxsIGl0ZW1zXHJcbiAgICAgICAgdmFyIHN0ciA9IG5vZGUuaWQ7XHJcbiAgICAgICAgLy9hbGVydChzdHIpXHJcbiAgICAgICAgaWYgKHN0ci5pbmRleE9mKFwidGVzdFwiKSA+PSAwIHx8IHN0ci5pbmRleE9mKFwibml2X1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYoICl7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgIHJlbmFtZUl0ZW06IHtcclxuICAgICAgICAgICAgLy8gVGhlIFwicmVuYW1lXCIgbWVudSBpdGVtXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk1vZGlmaWVyXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICAgICB2YXIgc3RyID0gbm9kZS5pZDtcclxuICAgICAgICAgICAgICB3aW5kb3cucHIgPSAkKFwiI1wiICsgbm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdHIpXHJcbiAgICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKFwidGVzdFwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJVcGRhdGUgTml2ZWF1XCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5pbmZvcm1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5jb250XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNwcjJcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5IC5wdC02JykuYWRkQ2xhc3MoJ3B0LWFkZC0yMCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnczLXdpZGUnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicF9uaXZlYXVfMl9lZGl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6ICQoXCIjXCIgKyBub2RlLmlkKS5hdHRyKFwiZGF0YS1uaXZlYXUyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZFxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsIC8vIFRvIHNlbmQgRE9NRG9jdW1lbnQgb3Igbm9uIHByb2Nlc3NlZCBkYXRhIGZpbGUgaXQgaXMgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDApOyBcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJyNyZXN1bHRhdHNfaW1wb3J0JykuaHRtbChqcVhIUi5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkltcG9zc2libGUgZGUgdHJhaXRlciB1biBmaWNoaWVyIG4nZXN0IHBhcyBvcmdhbmlzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiRXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogMjAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL3JldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCQobm9kZSkuaGFzQ2xhc3MoXCJmb2xkZXJcIikpIHtcclxuICAgICAgICAgIC8vIERlbGV0ZSB0aGUgXCJkZWxldGVcIiBtZW51IGl0ZW1cclxuICAgICAgICAgIGRlbGV0ZSBpdGVtcy5kZWxldGVJdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjdXNpbmdfanNvblwiKVxyXG4gICAgICAgIC5qc3RyZWUoe1xyXG4gICAgICAgICAgY29yZToge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9uaXZlYXVfbmV3X3Rlc3RcIiksXHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRleHRtZW51OiB7IGl0ZW1zOiBjdXN0b21NZW51IH0sXHJcbiAgICAgICAgICB0eXBlczoge1xyXG4gICAgICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgICAgaWNvbjogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1jbG9zZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGlsZDoge1xyXG4gICAgICAgICAgICAgIGljb246IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mb2xkZXItb3BlblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7fSxcclxuICAgICAgICAgICAgcGx1czp7IFxyXG4gICAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBsdWdpbnM6IFtcInNlYXJjaFwiLCBcInRoZW1lc1wiLCBcInR5cGVzXCJdLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwib3Blbl9ub2RlLmpzdHJlZVwiLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xyXG4gICAgICAgICAgdmFyIHN0ciA9IGRhdGEubm9kZS5pZDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubm9kZSk7XHJcbiAgICAgICAgICB3aW5kb3cucHIgPSAkKFwiI1wiICsgZGF0YS5ub2RlLmlkKTtcclxuXHJcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnNldF9pY29uKGRhdGEubm9kZSwgXCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiY2xvc2Vfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcclxuICAgICAgICAgIGRhdGEuaW5zdGFuY2Uuc2V0X2ljb24oZGF0YS5ub2RlLCBcImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLWNsb3NlXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwic2VsZWN0X25vZGUuanN0cmVlXCIsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XHJcbiAgICAgICAgICB2YXIgc3RyID0gZGF0YS5ub2RlLmlkO1xyXG4gICAgICAgICAgd2luZG93LnByID0gJChcIiNcIiArIGRhdGEubm9kZS5pZCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgIGlmIChzdHIuaW5kZXhPZihcImVycm9yLVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiLmluZm9ybVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29udFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiLnNwcjJcIikuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2V2YWx1YXRpb25fZXJyb3JcIiksXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLCAvLyBUbyB1bmFibGUgcmVxdWVzdCBwYWdlcyB0byBiZSBjYWNoZWRcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsIC8vIFRvIHNlbmQgRE9NRG9jdW1lbnQgb3Igbm9uIHByb2Nlc3NlZCBkYXRhIGZpbGUgaXQgaXMgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmNvbnRcIikuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICQoXCIubm9uZVwiKS5mYWRlSW4oMjAwMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyQoJyNyZXN1bHRhdHNfaW1wb3J0JykuaHRtbChqcVhIUi5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgXCJJbXBvc3NpYmxlIGRlIHRyYWl0ZXIgdW4gZmljaGllciBuJ2VzdCBwYXMgb3JnYW5pc2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiAyMDAwIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCJuaXZlYXVfTGlua19cIikgPj0gMCkge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJBam91dGVyIE5pdmVhdSAxXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmluZm9ybVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29udFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiLnNwcjJcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHkgLnB0LTYnKS5hZGRDbGFzcygncHQtYWRkLTIwJyk7XHJcbiAgICAgICAgICAgICQoJy53My13aWRlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfbml2ZWF1XzFfbmV3XCIpLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSwgLy8gVG8gdW5hYmxlIHJlcXVlc3QgcGFnZXMgdG8gYmUgY2FjaGVkXHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA2MDApOyBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCJuaXZlYXUyX0xpbmtfXCIpID49IDApIHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS50ZXh0KFwiQWpvdXRlciBOaXZlYXUgMlwiKTtcclxuICAgICAgICAgICAgJChcIi5pbmZvcm1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIi5zcHIyXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAkKCdib2R5IC5wdC02JykuYWRkQ2xhc3MoJ3B0LWFkZC0yMCcpO1xyXG4gICAgICAgICAgICAkKCcudzMtd2lkZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX2FydGljbGVfbml2ZWF1XzJfbmV3XCIsIHtcclxuICAgICAgICAgICAgICAgIG5pdmVhdTE6ICQoXCIjXCIgKyBkYXRhLm5vZGUuaWQpLmF0dHIoXCJkYXRhLW5pdmVhdVwiKSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSwgLy8gVG8gc2VuZCBET01Eb2N1bWVudCBvciBub24gcHJvY2Vzc2VkIGRhdGEgZmlsZSBpdCBpcyBzZXQgdG8gZmFsc2VcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzdHIuaW5kZXhPZihcIm5pdmVhdTNfTGlua19cIikgPj0gMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cucGFyZW50ID0gZGF0YS5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS50ZXh0KFwiQWpvdXRlciBOaXZlYXUgM1wiKTtcclxuICAgICAgICAgICAgJChcIi5pbmZvcm1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIi5zcHIyXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAkKCdib2R5IC5wdC02JykuYWRkQ2xhc3MoJ3B0LWFkZC0yMCcpO1xyXG4gICAgICAgICAgICAkKCcudzMtd2lkZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX2FydGljbGVfbml2ZWF1XzNfbmV3XCIsIHtcclxuICAgICAgICAgICAgICAgIG5pdmVhdTE6ICQoXCIjXCIgKyBkYXRhLm5vZGUuaWQpLmF0dHIoXCJkYXRhLW5pdmVhdTFcIiksXHJcbiAgICAgICAgICAgICAgICBuaXZlYXUyOiAkKFwiI1wiICsgZGF0YS5ub2RlLmlkKS5hdHRyKFwiZGF0YS1uaXZlYXUyXCIpLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSwgLy8gVG8gdW5hYmxlIHJlcXVlc3QgcGFnZXMgdG8gYmUgY2FjaGVkXHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHN0ci5pbmRleE9mKFwibml2ZWF1NF9MaW5rX1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQgPSBkYXRhLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJBam91dGVyIE5pdmVhdSA0XCIpO1xyXG4gICAgICAgICAgICAkKFwiLmluZm9ybVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29udFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiLnNwcjJcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHkgLnB0LTYnKS5hZGRDbGFzcygncHQtYWRkLTIwJyk7XHJcbiAgICAgICAgICAgICQoJy53My13aWRlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfNF9uZXdcIiwge1xyXG4gICAgICAgICAgICAgICAgbml2ZWF1MTogJChcIiNcIiArIGRhdGEubm9kZS5pZCkuYXR0cihcImRhdGEtbml2ZWF1MVwiKSxcclxuICAgICAgICAgICAgICAgIG5pdmVhdTI6ICQoXCIjXCIgKyBkYXRhLm5vZGUuaWQpLmF0dHIoXCJkYXRhLW5pdmVhdTJcIiksXHJcbiAgICAgICAgICAgICAgICBuaXZlYXUzOiAkKFwiI1wiICsgZGF0YS5ub2RlLmlkKS5hdHRyKFwiZGF0YS1uaXZlYXUzXCIpLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSwgLy8gVG8gdW5hYmxlIHJlcXVlc3QgcGFnZXMgdG8gYmUgY2FjaGVkXHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnRcIik7XHJcbn0pO1xyXG5cclxuJChcIi5hZGRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgYWxlcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX25pdmVhdV8xX25ld1wiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiLmFkZF8yXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gYWxlcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX2FydGljbGVfbml2ZWF1XzJfbmV3XCIsIHtcclxuICAgICAgbml2ZWF1MTogd2luZG93LnByLmF0dHIoXCJkYXRhLW5pdmVhdVwiKSxcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCIuYWRkXzNcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyBhbGVydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfM19uZXdcIiwge1xyXG4gICAgICBuaXZlYXUyOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbml2ZWF1MlwiKSxcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCIuYWRkXzRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyBhbGVydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfM19uZXdcIiwge1xyXG4gICAgICBuaXZlYXUyOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbml2ZWF1MlwiKSxcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm00XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwibXktYnV0dG9uMVwiKSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgdmFyIGdvdG8gPSAwO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG4gIC8vYWxlcnQoaWQpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9hcnRpY2xlX25pdmVhdV80X25ld1wiLCB7XHJcbiAgICAgIG5pdmVhdTE6IHdpbmRvdy5wci5hdHRyKFwiZGF0YS1uaXZlYXUxXCIpLFxyXG4gICAgICBuaXZlYXUyOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbml2ZWF1MlwiKSxcclxuICAgICAgbml2ZWF1Mzogd2luZG93LnByLmF0dHIoXCJkYXRhLW5pdmVhdTNcIiksXHJcbiAgICB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzKFxyXG4gICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICBmb3JtX25hbWUsXHJcbiAgICAgICAgICByZXN1bHQuZXJyb3JzLFxyXG4gICAgICAgICAgXCJuYXR1cmVFcHJldXZlXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB3aW5kb3cub3BlID0gMDtcclxuICAgICAgICBpZiAoZ290byA9PSAxKSB7XHJcbiAgICAgICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSByZXN1bHQubWVzc2FnZS5kYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cuc2VsZWN0ZWREYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtM1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhcIm15LWJ1dHRvbjFcIikpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMVwiKSk7XHJcbiAgICB2YXIgZ290byA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIHZhciBnb3RvID0gMDtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gIC8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuICAvL2FsZXJ0KGlkKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfM19uZXdcIiwge1xyXG4gICAgICBuaXZlYXUxOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbml2ZWF1MVwiKSxcclxuICAgICAgbml2ZWF1Mjogd2luZG93LnByLmF0dHIoXCJkYXRhLW5pdmVhdTJcIiksXHJcbiAgICB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzKFxyXG4gICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICBmb3JtX25hbWUsXHJcbiAgICAgICAgICByZXN1bHQuZXJyb3JzLFxyXG4gICAgICAgICAgXCJuYXR1cmVFcHJldXZlXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB3aW5kb3cub3BlID0gMDtcclxuICAgICAgICBpZiAoZ290byA9PSAxKSB7XHJcbiAgICAgICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSByZXN1bHQubWVzc2FnZS5kYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cuc2VsZWN0ZWREYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG4kKFwiLmJvZFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtMlwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1uaXZlYXUyXCIpKTtcclxuICAvL2FsZXJ0KGlkKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfMl9uZXdcIiwge1xyXG4gICAgICBuaXZlYXUxOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbml2ZWF1XCIpLFxyXG4gICAgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgLy93aW5kb3cuc2VsZWN0ZWREYXRhID0gcmVzdWx0Lm1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogMjAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL3dpbmRvdy5yZWZyZXNoID0gMDtcclxuXHJcbiAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgJChcIiNncmlkXCIpLkRhdGFUYWJsZSgpLmFqYXgucmVsb2FkKCk7XHJcblxyXG4gICAgICAgIC8vd2luZG93LnJlZnJlc2ggPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgLy9hbGVydCgpO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDIwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuJChcIi5ib2RcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gXHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwiYnV0dG9uLXNhdmUtYWRkLW5vbWVuXCIpKSB7XHJcbiAgIC8vIGFsZXJ0KClcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtYWRkLW5vbWVuXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1ub21lblwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfVxyXG4gIGwuc3RhcnQoKTtcclxuICBcclxuICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gIG9ialtcInJvdXRlXCJdID0gXCJwX25pdmVhdV8xX25ld1wiO1xyXG4gIG9ialtcImRhdGFcIl0gPSBkdGE7XHJcbiAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICBvYmpbXCJsXCJdID0gbDtcclxuICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICBvYmpbXCJhdXRvVHJpZ2dlclwiXSA9IGdvdG87XHJcbiAgb2JqW1widHJpZ2dlckNsYXNzXCJdID0gXCJhZGRcIjtcclxuICBvYmpbXCJTaG93Rm9ybUVycm9yc1wiXSA9IFNob3dGb3JtRXJyb3JzO1xyXG4gIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgXHJcbiAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHJcbiBcclxufSk7XHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNkX29wXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX2FydGljbGVfbml2ZWF1XzFfZWRpdFwiLCB7XHJcbiAgICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIiksXHJcbiAgICB9KSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcbiQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuXHJcbiAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJub21lbklkXCIpO1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWVkaXQtbm9tZW5cIikpO1xyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gIHZhciBwYXJhbWV0cmUgPSB7IGlkOiBpZCB9O1xyXG4gIG9ialtcInJvdXRlXCJdID0gXCJwX2FydGljbGVfbml2ZWF1XzFfZWRpdFwiO1xyXG4gIG9ialtcImRhdGFcIl0gPSBkdGE7XHJcbiAgb2JqW1wicGFyYW1ldHJlXCJdID0gcGFyYW1ldHJlO1xyXG4gIG9ialtcImxcIl0gPSBsO1xyXG4gIG9ialtcImZvcm1fbmFtZVwiXSA9IGZvcm1fbmFtZTtcclxuICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgYXV0b0Z1bmN0aW9uQWpheC5hdXRvQWpheFJlbmRlckNvbnRyb2xsZXIob2JqKTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYm9kXCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuXHJcbiAgaWYgKGlkKSB7XHJcbiAgICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gICAgb2JqW1wicm91dGVcIl0gPSBcInBfYXJ0aWNsZV9uaXZlYXVfMV9kZWxldGVcIjtcclxuICAgIG9ialtcImlkXCJdID0gaWQ7XHJcbiAgICBvYmpbXCJ0b2tlblwiXSA9IHRva2VuO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhEZWxldGUob2JqKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiLyogZ2xvYmFsIEJ1biAtLSBEZW5vIGNhc2UgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIEJ1biA9PSAnZnVuY3Rpb24nICYmIEJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09IDAgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT0gMyAmJiB2ZXJzaW9uWzJdID09IDApO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwidmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5kZXhvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSB1bmN1cnJ5VGhpcyhbXS5pbmRleE9mKTtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIG5hdGl2ZUluZGV4T2YoWzFdLCAxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHZhciBmcm9tSW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9