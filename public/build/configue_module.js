(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configue_module"],{

/***/ "./assets/js/ManagementErrors/index.js":
/*!*********************************************!*\
  !*** ./assets/js/ManagementErrors/index.js ***!
  \*********************************************/
/*! exports provided: ShowFormErrors, ShowFormErrorsWithParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrors", function() { return ShowFormErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrorsWithParam", function() { return ShowFormErrorsWithParam; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__);








var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function ShowFormErrors(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  jQuery.each(errors.violations, function (i, val) {
    var columnName = "";
    var x = val.propertyPath;
    if (isGroupe == true) {
      columnName = x;
    } else {
      if (x.search('\\[') != -1 && x.search('\\]') != -1) {
        var separators = ['\\]', '\\['];
        var arr = x.split(new RegExp(separators.join('|')));
        var columnName = arr[1];
      }
      if (x.search('data.') != -1) {
        var arr = x.split('.');
        var columnName = arr[1];
      }
    }
    //console.log(x)

    /*vérifier s'il s'agit d'une formulaire avec un champ type file */
    if (!jQuery("#" + form_name + "_" + columnName).length > 0) {
      columnName = columnName + '_file';
    }
    if (id) {
      columnName = id;
    }
    console.log(columnName);
    if (columnName != "") {
      console.log("#" + form_name + "_" + columnName);
      selector.find("#" + form_name + "_" + columnName).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
    }
  });
}
function ShowFormErrorsWithParam(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  $("#" + selector).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors + "</span></span></span>");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/components/config/config-module.js":
/*!******************************************************!*\
  !*** ./assets/js/components/config/config-module.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");










var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.setRoutingData(routes);




var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});
$("#using_json").jstree({
  core: {
    data: {
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("config_modules_tree"),
      dataType: "json"
    },
    check_callback: CheckOperation
  },
  types: {
    root: {
      icon: "glyphicon glyphicon-folder-close"
    },
    child: {
      icon: "glyphicon glyphicon-folder-open"
    },
    "default": {}
  },
  contextmenu: {
    items: customMenu
  },
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
  plugins: ["search", "themes", "types", "html_data",, "crrm", "dnd", "contextmenu"]
}).bind("loaded.jstree", function (event, data) {
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
}).on("select_node.jstree", function (e, data) {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_module" /*, {
                                                        formation: $("#" + data.node.id).attr("data-promotion"),
                                                        }*/),

      contentType: false,
      // To unable request pages to be cached
      processData: false,
      // To send DOMDocument or non processed data file it is set to false
      success: function success(data) {
        $(".spr").hide();
        $(".show-promotion").html(data);
        Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
          var select = $(".sel2").select2();
          $(".sel2").on("select2:select", function (e) {
            //console.log(e.params.data.text)
            $("#form_description").val(e.params.data.text + " " + $(".annee").text());
          });
        });
        //require('./mdb.min.js');
        Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
          $("#exampleModalPreview").modal("show");
        });
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
    //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
  }

  if (data.node.id.indexOf("dos_link_") >= 0 || window.selectedData == 1 || window.selectedData == 2) {
    //alert(window.selectedData);
    if (window.selectedData == 1) {
      data.node.id = window.pr.attr("id");
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
        $("#exampleModalPreview2").modal("hide");
      });
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
        $("#exampleModalPreview").modal("hide");
      });
    } else {
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
        $("#exampleModalPreview2").modal("hide");
      });
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier_module", {
        module: $("#" + data.node.id).attr("data-module")
      }),
      contentType: false,
      // To unable request pages to be cached
      processData: false,
      // To send DOMDocument or non processed data file it is set to false
      success: function success(data) {
        $(".spr").hide();
        $(".hide-promotion").find(".modal-content").addClass("content");
        $(".show-promotion").html(data);
        if (window.type == 2) {
          //$(".show-promotion").hide();
          //alert()
          window.type = null;
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview2").modal("hide");
          });
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("hide");
          });
        } else if (window.type == 1) {
          //alert()
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("show");
          });
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview2").modal("show");
          });
        } else {
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("show");
          });
        }
        Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
          var select = $(".sel2").select2();
          var select2_dossiers = $(".select2_dossiers").select2({
            placeholder: "Choix dossiers",
            allowClear: true
          });
          $(".sel2").on("select2:select", function (e) {
            //console.log(e.params.data.text)
            $("#form_description").val(e.params.data.text + " " + $(".annee").text());
          });
        });
        //require('./mdb.min.js');
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

    //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
  }

  if (data.node.id.indexOf("smdl_link_") >= 0) {
    //alert();
    $(".modal-title").text("Ajouter Sous Module");
    $(".show-promotion").empty();
    $.ajax({
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_SousModule", {
        module: $("#" + data.node.id).attr("data-module")
      }),
      contentType: false,
      // To unable request pages to be cached
      processData: false,
      // To send DOMDocument or non processed data file it is set to false
      success: function success(data) {
        $(".spr").hide();
        $(".show-promotion").html(data);
        Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
          var select = $(".sel2").select2();
          $(".sel2").on("select2:select", function (e) {
            //console.log(e.params.data.text)
            $("#form_description").val(e.params.data.text + " " + $(".annee").text());
          });
        });
        //require('./mdb.min.js');
        Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
          $("#exampleModalPreview").modal("show");
        });
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
    //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
  }

  if (data.node.id.indexOf("ope_link_") >= 0) {
    //alert();
    $(".modal-title").text("Ajouter Opération");
    $(".show-promotion").empty();
    $.ajax({
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_operation", {
        sousModule: $("#" + data.node.id).attr("data-sousModule")
      }),
      contentType: false,
      // To unable request pages to be cached
      processData: false,
      // To send DOMDocument or non processed data file it is set to false
      success: function success(data) {
        $(".spr").hide();
        $(".show-promotion").html(data);
        Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
          var select = $(".sel2").select2();
          $(".sel2").on("select2:select", function (e) {
            //console.log(e.params.data.text)
            $("#form_description").val(e.params.data.text + " " + $(".annee").text());
          });
        });
        //require('./mdb.min.js');
        Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
          $("#exampleModalPreview").modal("show");
        });
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
    //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
  }
}).bind("move_node.jstree", function (e, data) {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_order" /*, {
                                                       formation: window.pr.attr("data-promotion"),
                                                       }*/),

      data: {
        child: aSiblings /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule")*/
      },

      success: function success(result) {
        //console.log(result.message.data);
        //    $("#using_json").jstree(true).refresh();

        if (result.errors) {
          //console.log(result.errors);
          //l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
        }
        if (result.code == 200) {
          /// alert(result.message.data)

          //alert();
          //l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 2000
          });
          //$("#using_json").jstree(true).refresh();

          /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
        } else if (result.code == 403) {
          //l.stop();
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
  }
  if (data.node.id.indexOf("smdl_") >= 0) {
    //alert()
    console.log(aSiblings);
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_sous_module_order" /*, {
                                                                   formation: window.pr.attr("data-promotion"),
                                                                   }*/),

      data: {
        child: aSiblings2 /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule")*/
      },

      success: function success(result) {
        //console.log(result.message.data);
        //    $("#using_json").jstree(true).refresh();

        if (result.errors) {
          //console.log(result.errors);
          //l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
        }
        if (result.code == 200) {
          /// alert(result.message.data)

          //alert();
          //l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 2000
          });
          //$("#using_json").jstree(true).refresh();

          /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
        } else if (result.code == 403) {
          //l.stop();
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
  }
  if (data.node.id.indexOf("mod_") >= 0) {
    //alert()
    console.log(aSiblings3);
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_module_order" /*, {
                                                              formation: window.pr.attr("data-promotion"),
                                                              }*/),

      data: {
        child: aSiblings3 /*,"position" : position,"operation":$("#"+node.id).attr("data-operation"),"sousModule":$("#"+parent.id).attr("data-sousModule")*/
      },

      success: function success(result) {
        //console.log(result.message.data);
        //    $("#using_json").jstree(true).refresh();

        if (result.errors) {
          //console.log(result.errors);
          //l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
        }
        if (result.code == 200) {
          /// alert(result.message.data)

          //alert();
          //l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 2000
          });
          //$("#using_json").jstree(true).refresh();

          /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
        } else if (result.code == 403) {
          //l.stop();
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
    if (parent.id.indexOf("mod_") >= 0 //||
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
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_module" /*, {
                                                      formation: window.pr.attr("data-promotion"),
                                                      }*/),

    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._dossier", function (e) {
  //alert();
  window.type = $(document.activeElement).attr("data-type");
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto2 = 1;
  } else if (window.type == 2) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button2"));
    var _goto2 = 0;
  } else if (window.type == 1) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto2 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier", {
      module: window.pr.attr("data-module")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)

        if (window.type == 2) {
          //$(".show-promotion").hide();
          //alert()
          // window.type = null;
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview2").modal("hide");
          });
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("hide");
          });
        } else if (window.type == 1) {
          //alert()
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("show");
          });
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview2").modal("show");
          });
        } else {
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("show");
          });
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        window.selectedData = window.type;
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._dossier_update", function (e) {
  //alert();
  window.type = $(document.activeElement).attr("data-type");
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto3 = 1;
  } else if (window.type == 2) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button2"));
    var _goto3 = 0;
  } else if (window.type == 1) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto3 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier_edit", {
      dossier: window.pr.attr("data-dossier")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (window.type == 2) {
          //$(".show-promotion").hide();
          //alert()
          // window.type = null;
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview2").modal("hide");
          });
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("hide");
          });
        } else if (window.type == 1) {
          //alert()
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("show");
          });
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview2").modal("show");
          });
        } else {
          Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
            $("#exampleModalPreview").modal("show");
          });
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        window.selectedData = window.type;
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._dossier_module", function (e) {
  //alert();
  window.selectedData = 2;
  window.type = $(document.activeElement).attr("data-type");
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto4 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto4 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier_module", {
      module: window.pr.attr("data-module")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto4 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        window.selectedData = window.type;
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._sous_module_edit", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto5 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto5 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_SousModule_edit", {
      sousModule: window.pr.attr("data-sousmodule")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto5 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._sous_module", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto6 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto6 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_SousModule", {
      module: window.pr.attr("data-module")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto6 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._operation", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto7 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto7 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_operation", {
      sousModule: window.pr.attr("data-sousModule")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto7 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
$("body").on("submit", "._operation_edit", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto8 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto8 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_operation_edit", {
      operation: window.pr.attr("data-operation")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto8 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
    $("#exampleModalPreview").modal("hide");
  });
  $(".show-promotion").empty();
  $(".show-promotion2").empty();
  $(".hide-promotion2 .modal-content").removeClass("content");
  window.pr = $(this);
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier", {
      module: $(this).attr("data-module")
    }),
    contentType: false,
    // To unable request pages to be cached
    processData: false,
    // To send DOMDocument or non processed data file it is set to false
    success: function success(data) {
      $(".spr").hide();
      $(".show-promotion2").html(data);
      Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
        var select = $(".sel2").select2();
        var select2_dossiers = $(".select2_dossiers").select2({
          placeholder: "Choix dossiers",
          allowClear: true
        });
        $(".sel2").on("select2:select", function (e) {
          //console.log(e.params.data.text)
          $("#form_description").val(e.params.data.text + " " + $(".annee").text());
        });
      });
      //require('./mdb.min.js');
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
        $("#exampleModalPreview2").modal("show");
      });
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
});
$("body").on("submit", "._module_edit", function (e) {
  //alert();
  if ($(document.activeElement).hasClass("my-button1")) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button1"));
    var _goto9 = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_12__["create"](document.querySelector(".my-button"));
    var _goto9 = 0;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_module_edit", {
      usModule: window.pr.attr("data-module")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        /// alert(result.message.data)
        if (_goto9 == 1) {
          $(".show-promotion").hide();
          window.selectedData = result.message.data;
        } else {
          window.selectedData = null;
        }

        //alert();
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 2000
        });
        $("#using_json").jstree(true).refresh();

        /*var instance = $('#using_json').jstree(true);
                    instance.deselect_all();
                    instance.select_node('seme_Link_8');*/
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
  e.preventDefault();
});
function customMenu(node) {
  // The default set of all items
  var items = {
    renameItem: {
      // The "rename" menu item
      label: "Modifier",
      action: function action() {
        //alert()
        var str = node.id;
        window.pr = $("#" + node.id);
        //console.log(str)
        if (str.indexOf("mod_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();
          $.ajax({
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_module_edit", {
              usModule: $("#" + str).attr("data-module")
            }),
            contentType: false,
            // To unable request pages to be cached
            processData: false,
            // To send DOMDocument or non processed data file it is set to false
            success: function success(data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(e.params.data.text + " " + $(".annee").text());
                });
              });
              //require('./mdb.min.js');
              Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
                $("#exampleModalPreview").modal("show");
              });
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }

        if (str.indexOf("dos_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();
          $.ajax({
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier_edit", {
              dossier: $("#" + str).attr("data-dossier")
            }),
            contentType: false,
            // To unable request pages to be cached
            processData: false,
            // To send DOMDocument or non processed data file it is set to false
            success: function success(data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(e.params.data.text + " " + $(".annee").text());
                });
              });
              //require('./mdb.min.js');
              Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
                $("#exampleModalPreview").modal("show");
              });
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }

        if (str.indexOf("smdl_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();
          $.ajax({
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_SousModule_edit", {
              sousModule: $("#" + str).attr("data-sousmodule")
            }),
            contentType: false,
            // To unable request pages to be cached
            processData: false,
            // To send DOMDocument or non processed data file it is set to false
            success: function success(data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(e.params.data.text + " " + $(".annee").text());
                });
              });
              //require('./mdb.min.js');
              Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
                $("#exampleModalPreview").modal("show");
              });
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }

        if (str.indexOf("ope_") >= 0) {
          //alert();
          $(".modal-title").text("Modifier Module");
          $(".show-promotion").empty();
          $.ajax({
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_operation_edit", {
              operation: $("#" + str).attr("data-operation")
            }),
            contentType: false,
            // To unable request pages to be cached
            processData: false,
            // To send DOMDocument or non processed data file it is set to false
            success: function success(data) {
              $(".spr").hide();
              $(".show-promotion").html(data);
              Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, /*! ../../plugins/select2/select2.full.min.js */ "./assets/js/plugins/select2/select2.full.min.js", 7)).then(function () {
                var select = $(".sel2").select2();
                $(".sel2").on("select2:select", function (e) {
                  //console.log(e.params.data.text)
                  $("#form_description").val(e.params.data.text + " " + $(".annee").text());
                });
              });
              //require('./mdb.min.js');
              Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(13), __webpack_require__.e(3)]).then(__webpack_require__.t.bind(null, /*! ../../mdb.min.js */ "./assets/js/mdb.min.js", 7)).then(function () {
                $("#exampleModalPreview").modal("show");
              });
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
          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
      }
    },

    deleteItem: {
      // The "delete" menu item
      label: "Supprimer",
      action: function action() {
        var str = node.id;
        window.pr = $("#" + node.id);
        //console.log(str)
        if (str.indexOf("mod_") >= 0) {
          //alert();
          swalWithBootstrapButtons.fire({
            showClass: {
              popup: "animatedSwal flipInX faster"
            },
            position: "top",
            title: "Confirmation ?",
            text: "Voulez vous vraiment supprimer cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
          }).then(function (result) {
            if (result.value) {
              $.ajax({
                type: "DELETE",
                url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_module_delete", {
                  module: $("#" + node.id).attr("data-module")
                }),
                success: function success(result) {
                  if (result.code == 200) {
                    $("#using_json").jstree(true).refresh();
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
                    timeOut: 4000
                  });
                }
              });
            }
          });
        }
        if (str.indexOf("dos_") >= 0) {
          swalWithBootstrapButtons.fire({
            showClass: {
              popup: "animatedSwal flipInX faster"
            },
            position: "top",
            title: "Confirmation ?",
            text: "Voulez vous vraiment supprimer cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
          }).then(function (result) {
            if (result.value) {
              $.ajax({
                type: "DELETE",
                url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_dossier_delete", {
                  dossier: $("#" + node.id).attr("data-dossier")
                }),
                success: function success(result) {
                  if (result.code == 200) {
                    $("#using_json").jstree(true).refresh();
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
                    timeOut: 4000
                  });
                }
              });
            }
          });
        }
        if (str.indexOf("smdl_") >= 0) {
          //alert();
          swalWithBootstrapButtons.fire({
            showClass: {
              popup: "animatedSwal flipInX faster"
            },
            position: "top",
            title: "Confirmation ?",
            text: "Voulez vous vraiment supprimer cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
          }).then(function (result) {
            if (result.value) {
              $.ajax({
                type: "DELETE",
                url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_sousModule_delete", {
                  sousModule: $("#" + node.id).attr("data-sousmodule")
                }),
                success: function success(result) {
                  if (result.code == 200) {
                    $("#using_json").jstree(true).refresh();
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
                    timeOut: 4000
                  });
                }
              });
            }
          });
        }
        if (str.indexOf("ope_") >= 0) {
          //alert();
          swalWithBootstrapButtons.fire({
            showClass: {
              popup: "animatedSwal flipInX faster"
            },
            position: "top",
            title: "Confirmation ?",
            text: "Voulez vous vraiment supprimer cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
          }).then(function (result) {
            if (result.value) {
              $.ajax({
                type: "DELETE",
                url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("module_univ_config_operation_delete", {
                  operation: $("#" + node.id).attr("data-operation")
                }),
                success: function success(result) {
                  if (result.code == 200) {
                    $("#using_json").jstree(true).refresh();
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000
                    });
                  }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
                    timeOut: 4000
                  });
                }
              });
            }
          });

          //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
        }
      }
    }
  };

  if ($(node).hasClass("folder")) {
    // Delete the "delete" menu item
    delete items.deleteItem;
  }
  return items;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
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

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ })

},[["./assets/js/components/config/config-module.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~app~configue_module~ecriturecomptable_export~p_article_niveau1~test",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jb25maWcvY29uZmlnLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24uYmluZC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJTaG93Rm9ybUVycm9ycyIsInNlbGVjdG9yIiwiZm9ybV9uYW1lIiwiZXJyb3JzIiwiaWQiLCJpc0dyb3VwZSIsIiQiLCJyZW1vdmUiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJ2YWwiLCJjb2x1bW5OYW1lIiwieCIsInByb3BlcnR5UGF0aCIsInNlYXJjaCIsInNlcGFyYXRvcnMiLCJhcnIiLCJzcGxpdCIsIlJlZ0V4cCIsImpvaW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInBhcmVudCIsImFwcGVuZCIsInRpdGxlIiwiU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0iLCJqc3RyZWUiLCJjb3JlIiwiZGF0YSIsInVybCIsImdlbmVyYXRlIiwiZGF0YVR5cGUiLCJjaGVja19jYWxsYmFjayIsIkNoZWNrT3BlcmF0aW9uIiwidHlwZXMiLCJyb290IiwiaWNvbiIsImNoaWxkIiwiY29udGV4dG1lbnUiLCJpdGVtcyIsImN1c3RvbU1lbnUiLCJwbHVnaW5zIiwiYmluZCIsImV2ZW50IiwiaW5kZXhPZiIsImxpX2F0dHIiLCJ3aW5kb3ciLCJhbGwiLCJvbiIsImUiLCJyZW1vdmVDbGFzcyIsInN0ciIsIm5vZGUiLCJwciIsInNlbGVjdGVkRGF0YSIsInRleHQiLCJlbXB0eSIsImFqYXgiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsImhpZGUiLCJodG1sIiwidGhlbiIsInNlbGVjdCIsInNlbGVjdDIiLCJwYXJhbXMiLCJtb2RhbCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJsIiwic3RvcCIsInJlc3BvbnNlVGV4dCIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwiYXR0ciIsIm1vZHVsZSIsImFkZENsYXNzIiwidHlwZSIsInNlbGVjdDJfZG9zc2llcnMiLCJwbGFjZWhvbGRlciIsImFsbG93Q2xlYXIiLCJzb3VzTW9kdWxlIiwidHJlZSIsInBhcmVudE5vZGUiLCJnZXRfbm9kZSIsImFTaWJsaW5ncyIsImdldFNpYmxpbmdzIiwiYVNpYmxpbmdzMiIsImdldFNpYmxpbmdzMiIsImFTaWJsaW5nczMiLCJnZXRTaWJsaW5nczMiLCJyZXN1bHQiLCJjb2RlIiwibWVzc2FnZSIsIm9wZXJhdGlvbiIsInBvc2l0aW9uIiwibW9yZSIsImRuZCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImhhc0NsYXNzIiwiTGFkZGEiLCJxdWVyeVNlbGVjdG9yIiwiZ290byIsInByZXZlbnREZWZhdWx0IiwiZHRhIiwiRm9ybURhdGEiLCJnZXQiLCJzdGFydCIsInJlZnJlc2giLCJkb3NzaWVyIiwibm9kZUlEIiwiYUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiYyIsInB1c2giLCJ1c01vZHVsZSIsInJlbmFtZUl0ZW0iLCJsYWJlbCIsImFjdGlvbiIsImRlbGV0ZUl0ZW0iLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidmFsdWUiLCJyZXNwb25zZUpTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw2RUFBdUMsQ0FBQztBQUMyQztBQUMxR0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFDOUIsSUFBTUksSUFBSSxHQUFHSCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTUksd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUVNLFNBQVNDLGNBQWMsQ0FBQ0MsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBMkI7RUFBQSxJQUExQkMsRUFBRSx1RUFBQyxJQUFJO0VBQUEsSUFBQ0MsUUFBUSx1RUFBRyxLQUFLO0VBQ2hGQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNDLE1BQU0sRUFBRTtFQUMxQkMsTUFBTSxDQUFDQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ08sVUFBVSxFQUFFLFVBQVVDLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLElBQUlDLFVBQVUsR0FBRyxFQUFFO0lBQ25CLElBQUlDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxZQUFZO0lBQ3hCLElBQUdWLFFBQVEsSUFBSSxJQUFJLEVBQUM7TUFDaEJRLFVBQVUsR0FBR0MsQ0FBQztJQUNsQixDQUFDLE1BQUk7TUFDTCxJQUFJQSxDQUFDLENBQUNFLE1BQU0sQ0FBQyxL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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMYTtBQUNiO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxtSEFBMkM7QUFDckUsZUFBZSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMscUZBQTRCOztBQUUvQztBQUNBO0FBQ0EsR0FBRyxrRUFBa0U7QUFDckU7QUFDQSxDQUFDIiwiZmlsZSI6ImNvbmZpZ3VlX21vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG4gICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICBqUXVlcnkuZWFjaChlcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gXCJcIjtcclxuICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgaWYoaXNHcm91cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB4O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnXFxcXFsnKSAhPSAtMSAmJiB4LnNlYXJjaCgnXFxcXF0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFsnXFxcXF0nLCAnXFxcXFsnXTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdkYXRhLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHgpXHJcblxyXG4vKnbDqXJpZmllciBzJ2lsIHMnYWdpdCBkJ3VuZSBmb3JtdWxhaXJlIGF2ZWMgdW4gY2hhbXAgdHlwZSBmaWxlICovXHJcbiAgICAgICAgaWYgKCFqUXVlcnkoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbk5hbWUgKyAnX2ZpbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSlcclxuICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNcIitzZWxlY3RvcikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tIFwibGFkZGFcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTtcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgY3VzdG9tQ2xhc3M6IHtcclxuICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICB9LFxyXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG4kKFwiI3VzaW5nX2pzb25cIilcclxuICAuanN0cmVlKHtcclxuICAgIGNvcmU6IHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNvbmZpZ19tb2R1bGVzX3RyZWVcIiksXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjaGVja19jYWxsYmFjazogQ2hlY2tPcGVyYXRpb24sXHJcbiAgICB9LFxyXG4gICAgdHlwZXM6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGljb246IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mb2xkZXItY2xvc2VcIixcclxuICAgICAgfSxcclxuICAgICAgY2hpbGQ6IHtcclxuICAgICAgICBpY29uOiBcImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLW9wZW5cIixcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdDoge30sXHJcbiAgICB9LFxyXG4gICAgY29udGV4dG1lbnU6IHsgaXRlbXM6IGN1c3RvbU1lbnUgfSxcclxuICAgIC8qIGNycm06IHtcclxuICAgICAgbW92ZToge1xyXG4gICAgICAgIGNoZWNrX21vdmU6IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICB2YXIgcCA9IHRoaXMuX2dldF9wYXJlbnQobS5vKTtcclxuICAgICAgICAgIGlmICghcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgcCA9IHAgPT0gLTEgPyB0aGlzLmdldF9jb250YWluZXIoKSA6IHA7XHJcbiAgICAgICAgICBpZiAocCA9PT0gbS5ucCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICBpZiAocFswXSAmJiBtLm5wWzBdICYmIHBbMF0gPT09IG0ubnBbMF0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LCovXHJcblxyXG4gICAgLypkbmQ6IHtcclxuICAgICAgZHJvcF90YXJnZXQ6IGZhbHNlLFxyXG4gICAgICBkcmFnX3RhcmdldDogZmFsc2UsXHJcbiAgICB9LCovXHJcblxyXG4gICAgLypjaGVja2JveDoge1xyXG4gICAgICBrZWVwX3NlbGVjdGVkX3N0eWxlOiB0cnVlLFxyXG4gICAgICB3aG9sZV9ub2RlOiB0cnVlLCAvLyB0byBhdm9pZCBjaGVja2luZyB0aGUgYm94IGp1c3QgY2xpY2tpbmcgdGhlIG5vZGVcclxuICAgICAgdGllX3NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICB9LCovXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIFwic2VhcmNoXCIsXHJcbiAgICAgIFwidGhlbWVzXCIsXHJcbiAgICAgIFwidHlwZXNcIixcclxuICAgICAgXCJodG1sX2RhdGFcIixcclxuICAgICAgLFxyXG4gICAgICBcImNycm1cIixcclxuICAgICAgXCJkbmRcIixcclxuICAgICAgXCJjb250ZXh0bWVudVwiLFxyXG4gICAgXSxcclxuICB9KVxyXG4gIC5iaW5kKFwibG9hZGVkLmpzdHJlZVwiLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcclxuICAgIHZhciBhcnIgPSBbXTtcclxuICAgIC8vY29uc29sZS5sb2coZGF0YS5pbnN0YW5jZS5nZXRfY2hlY2tlZCgpKVxyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy9jb25zb2xlLmxvZygkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLmdldF9zZWxlY3RlZCgpKVxyXG4gICAgJC5lYWNoKCQoXCIudXNpbmdfanNvblwiKS5qc3RyZWUoXCJnZXRfY2hlY2tlZFwiLCB0cnVlKSwgZnVuY3Rpb24gKGkpIHtcclxuICAgICAgLy9hcnJbXVxyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgIGlmICh0aGlzLmlkLmluZGV4T2YoXCJvcGVfTGlua19cIikgPj0gMCkge1xyXG4gICAgICAgIGFycltpXSA9IHRoaXMubGlfYXR0cjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFsbCA9IGFycjtcclxuICAgIC8qIHZhciByZXN1bHQgPSAkKHRoaXMpLmpzdHJlZShcImdldF9zZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgIC8vY29uc29sZS5sb2coJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZShcImdldF9zZWxlY3RlZFwiKS50ZXh0KCkpXHJcbiAgICB3aW5kb3cuYWxsID0gcmVzdWx0XHJcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+IHtcclxuICAgICAgICByZXR1cm4gbm9kZS5zdGF0ZS5kaXNhYmxlZCA9PSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcCgoY2hlY2tlZCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2VkLmlkLmluZGV4T2YoXCJvcGVfTGlua19cIikgPj0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNoZWNrZWQubGlfYXR0cjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyovXHJcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xyXG4gIH0pXHJcbiAgLm9uKFwic2VsZWN0X25vZGUuanN0cmVlXCIsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XHJcbiAgICAkKFwiLmhpZGUtcHJvbW90aW9uXCIpLnJlbW92ZUNsYXNzKFwiY29udGVudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9vcGVfTGlua19cclxuICAgIHZhciBzdHIgPSBkYXRhLm5vZGUuaWQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgd2luZG93LnByID0gJChcIiNcIiArIHN0cik7XHJcbiAgICBpZiAod2luZG93LnNlbGVjdGVkRGF0YSA9PSAzKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEubm9kZS5pZC5pbmRleE9mKFwibW9kX2xpbmtfXCIpID49IDApIHtcclxuICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJBam91dGVyIE1vZHVsZVwiKTtcclxuICAgICAgJChcIi5zaG93LXByb21vdGlvblwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICBcIm1vZHVsZV91bml2X2NvbmZpZ19tb2R1bGVcIiAvKiwge1xyXG4gICAgICAgICAgICBmb3JtYXRpb246ICQoXCIjXCIgKyBkYXRhLm5vZGUuaWQpLmF0dHIoXCJkYXRhLXByb21vdGlvblwiKSxcclxuICAgICAgICAgIH0qL1xyXG4gICAgICAgICksXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLCAvLyBUbyB1bmFibGUgcmVxdWVzdCBwYWdlcyB0byBiZSBjYWNoZWRcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsIC8vIFRvIHNlbmQgRE9NRG9jdW1lbnQgb3Igbm9uIHByb2Nlc3NlZCBkYXRhIGZpbGUgaXQgaXMgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaHRtbChkYXRhKTtcclxuICAgICAgICAgIGltcG9ydChcIi4uLy4uL3BsdWdpbnMvc2VsZWN0Mi9zZWxlY3QyLmZ1bGwubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJChcIi5zZWwyXCIpLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUucGFyYW1zLmRhdGEudGV4dClcclxuICAgICAgICAgICAgICAkKFwiI2Zvcm1fZGVzY3JpcHRpb25cIikudmFsKFxyXG4gICAgICAgICAgICAgICAgZS5wYXJhbXMuZGF0YS50ZXh0ICsgXCIgXCIgKyAkKFwiLmFubmVlXCIpLnRleHQoKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL3JlcXVpcmUoJy4vbWRiLm1pbi5qcycpO1xyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIC8vJCgnI3Jlc3VsdGF0c19pbXBvcnQnKS5odG1sKGpxWEhSLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIkltcG9zc2libGUgZGUgdHJhaXRlciB1biBmaWNoaWVyIG4nZXN0IHBhcyBvcmdhbmlzZXJcIixcclxuICAgICAgICAgICAgXCJFcnJvclwiLFxyXG4gICAgICAgICAgICB7IHRpbWVPdXQ6IDIwMDAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgLy8nc291c01vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1zb3VzLW1vZHVsZScpLCdtb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtbW9kdWxlJyksJ29wZXJhdGlvbic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1vcGVyYXRpb24nKSwnZG9zc2llcic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1kb3NzaWVyJyksXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGRhdGEubm9kZS5pZC5pbmRleE9mKFwiZG9zX2xpbmtfXCIpID49IDAgfHxcclxuICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9PSAxIHx8XHJcbiAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPT0gMlxyXG4gICAgKSB7XHJcbiAgICAgIC8vYWxlcnQod2luZG93LnNlbGVjdGVkRGF0YSk7XHJcbiAgICAgIGlmICh3aW5kb3cuc2VsZWN0ZWREYXRhID09IDEpIHtcclxuICAgICAgICBkYXRhLm5vZGUuaWQgPSB3aW5kb3cucHIuYXR0cihcImlkXCIpO1xyXG4gICAgICAgIGltcG9ydChcIi4uLy4uL21kYi5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXcyXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3MlwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgLyppbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIGRhdGEubm9kZS5pZCA9IHdpbmRvdy5wci5hdHRyKFwiaWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSBudWxsO1xyXG4gICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJBam91dGVyIERvc3NpZXJcIik7XHJcbiAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwibW9kdWxlX3VuaXZfY29uZmlnX2Rvc3NpZXJfbW9kdWxlXCIsIHtcclxuICAgICAgICAgIG1vZHVsZTogJChcIiNcIiArIGRhdGEubm9kZS5pZCkuYXR0cihcImRhdGEtbW9kdWxlXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSwgLy8gVG8gdW5hYmxlIHJlcXVlc3QgcGFnZXMgdG8gYmUgY2FjaGVkXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmhpZGUtcHJvbW90aW9uXCIpLmZpbmQoXCIubW9kYWwtY29udGVudFwiKS5hZGRDbGFzcyhcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICBpZiAod2luZG93LnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAvLyQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgICAgICAgd2luZG93LnR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlldzJcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXcyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vcGx1Z2lucy9zZWxlY3QyL3NlbGVjdDIuZnVsbC5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0Ml9kb3NzaWVycyA9ICQoXCIuc2VsZWN0Ml9kb3NzaWVyc1wiKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBkb3NzaWVyc1wiLFxyXG4gICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5wYXJhbXMuZGF0YS50ZXh0KVxyXG4gICAgICAgICAgICAgICQoXCIjZm9ybV9kZXNjcmlwdGlvblwiKS52YWwoXHJcbiAgICAgICAgICAgICAgICBlLnBhcmFtcy5kYXRhLnRleHQgKyBcIiBcIiArICQoXCIuYW5uZWVcIikudGV4dCgpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vcmVxdWlyZSgnLi9tZGIubWluLmpzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgLy8kKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmh0bWwoanFYSFIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiSW1wb3NzaWJsZSBkZSB0cmFpdGVyIHVuIGZpY2hpZXIgbidlc3QgcGFzIG9yZ2FuaXNlclwiLFxyXG4gICAgICAgICAgICBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIHsgdGltZU91dDogMjAwMCB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8nc291c01vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1zb3VzLW1vZHVsZScpLCdtb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtbW9kdWxlJyksJ29wZXJhdGlvbic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1vcGVyYXRpb24nKSwnZG9zc2llcic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1kb3NzaWVyJyksXHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5ub2RlLmlkLmluZGV4T2YoXCJzbWRsX2xpbmtfXCIpID49IDApIHtcclxuICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJBam91dGVyIFNvdXMgTW9kdWxlXCIpO1xyXG4gICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19Tb3VzTW9kdWxlXCIsIHtcclxuICAgICAgICAgIG1vZHVsZTogJChcIiNcIiArIGRhdGEubm9kZS5pZCkuYXR0cihcImRhdGEtbW9kdWxlXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSwgLy8gVG8gdW5hYmxlIHJlcXVlc3QgcGFnZXMgdG8gYmUgY2FjaGVkXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9wbHVnaW5zL3NlbGVjdDIvc2VsZWN0Mi5mdWxsLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdCA9ICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnBhcmFtcy5kYXRhLnRleHQpXHJcbiAgICAgICAgICAgICAgJChcIiNmb3JtX2Rlc2NyaXB0aW9uXCIpLnZhbChcclxuICAgICAgICAgICAgICAgIGUucGFyYW1zLmRhdGEudGV4dCArIFwiIFwiICsgJChcIi5hbm5lZVwiKS50ZXh0KClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy9yZXF1aXJlKCcuL21kYi5taW4uanMnKTtcclxuICAgICAgICAgIGltcG9ydChcIi4uLy4uL21kYi5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAvLyQoJyNyZXN1bHRhdHNfaW1wb3J0JykuaHRtbChqcVhIUi5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJJbXBvc3NpYmxlIGRlIHRyYWl0ZXIgdW4gZmljaGllciBuJ2VzdCBwYXMgb3JnYW5pc2VyXCIsXHJcbiAgICAgICAgICAgIFwiRXJyb3JcIixcclxuICAgICAgICAgICAgeyB0aW1lT3V0OiAyMDAwIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vJ3NvdXNNb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtc291cy1tb2R1bGUnKSwnbW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW1vZHVsZScpLCdvcGVyYXRpb24nOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtb3BlcmF0aW9uJyksJ2Rvc3NpZXInOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtZG9zc2llcicpLFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLm5vZGUuaWQuaW5kZXhPZihcIm9wZV9saW5rX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS50ZXh0KFwiQWpvdXRlciBPcMOpcmF0aW9uXCIpO1xyXG4gICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19vcGVyYXRpb25cIiwge1xyXG4gICAgICAgICAgc291c01vZHVsZTogJChcIiNcIiArIGRhdGEubm9kZS5pZCkuYXR0cihcImRhdGEtc291c01vZHVsZVwiKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSwgLy8gVG8gc2VuZCBET01Eb2N1bWVudCBvciBub24gcHJvY2Vzc2VkIGRhdGEgZmlsZSBpdCBpcyBzZXQgdG8gZmFsc2VcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5zaG93LXByb21vdGlvblwiKS5odG1sKGRhdGEpO1xyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vcGx1Z2lucy9zZWxlY3QyL3NlbGVjdDIuZnVsbC5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5wYXJhbXMuZGF0YS50ZXh0KVxyXG4gICAgICAgICAgICAgICQoXCIjZm9ybV9kZXNjcmlwdGlvblwiKS52YWwoXHJcbiAgICAgICAgICAgICAgICBlLnBhcmFtcy5kYXRhLnRleHQgKyBcIiBcIiArICQoXCIuYW5uZWVcIikudGV4dCgpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vcmVxdWlyZSgnLi9tZGIubWluLmpzJyk7XHJcbiAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgLy8kKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmh0bWwoanFYSFIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiSW1wb3NzaWJsZSBkZSB0cmFpdGVyIHVuIGZpY2hpZXIgbidlc3QgcGFzIG9yZ2FuaXNlclwiLFxyXG4gICAgICAgICAgICBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIHsgdGltZU91dDogMjAwMCB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLydzb3VzTW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLXNvdXMtbW9kdWxlJyksJ21vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1tb2R1bGUnKSwnb3BlcmF0aW9uJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW9wZXJhdGlvbicpLCdkb3NzaWVyJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLWRvc3NpZXInKSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAuYmluZChcIm1vdmVfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcclxuICAgIC8vYWxlcnQoXCJkZGRcIik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlKTtcclxuICAgIC8vY29uc29sZS5sb2coJChkYXRhLnJzbHQubykpO1xyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuICAgIHZhciB0cmVlID0gJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKSxcclxuICAgICAgcGFyZW50Tm9kZSA9IHRyZWUuZ2V0X25vZGUoZGF0YS5wYXJlbnQpO1xyXG5cclxuICAgIHZhciBhU2libGluZ3MgPSBnZXRTaWJsaW5ncyhkYXRhLm5vZGUuaWQsIGRhdGEucGFyZW50KTtcclxuICAgIHZhciBhU2libGluZ3MyID0gZ2V0U2libGluZ3MyKGRhdGEubm9kZS5pZCwgZGF0YS5wYXJlbnQpO1xyXG4gICAgdmFyIGFTaWJsaW5nczMgPSBnZXRTaWJsaW5nczMoZGF0YS5ub2RlLmlkLCBkYXRhLnBhcmVudCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFTaWJsaW5ncyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHBhcmVudE5vZGUuY2hpbGRyZW4pO1xyXG4gICAgLy9jb25zb2xlLmxvZygkLmluQXJyYXkobm9kZS5pZCwgcGFyZW50LmNoaWxkcmVuKSk7XHJcbiAgICAvKiBhcnIuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyggaW5kZXggKyBcIjogXCIgKyAkKCB0aGlzICkudGV4dCgpICk7XHJcbiAgICAgIGxpc3QucHVzaCgkKFwiI1wiICsgaW5kZXgpLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKSk7XHJcbiAgICB9KTsqL1xyXG4gICAgLy9jb25zb2xlLmxvZyhhU2libGluZ3MpO1xyXG4gICAgLyppZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhcIm15LWJ1dHRvbjFcIikpIHtcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgICAgdmFyIGdvdG8gPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgICB2YXIgZ290byA9IDA7XHJcbiAgICB9Ki9cclxuICAgIGlmIChkYXRhLm5vZGUuaWQuaW5kZXhPZihcIm9wZV9cIikgPj0gMCkge1xyXG4gICAgIC8vIGFsZXJ0KFwiZGRcIilcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICBcIm1vZHVsZV91bml2X2NvbmZpZ19vcmRlclwiIC8qLCB7XHJcbiAgICAgICAgICAgICAgZm9ybWF0aW9uOiB3aW5kb3cucHIuYXR0cihcImRhdGEtcHJvbW90aW9uXCIpLFxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNoaWxkOiBhU2libGluZ3MgLyosXCJwb3NpdGlvblwiIDogcG9zaXRpb24sXCJvcGVyYXRpb25cIjokKFwiI1wiK25vZGUuaWQpLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKSxcInNvdXNNb2R1bGVcIjokKFwiI1wiK3BhcmVudC5pZCkuYXR0cihcImRhdGEtc291c01vZHVsZVwiKSovLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgIC8vICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIC8vbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAvLy8gYWxlcnQocmVzdWx0Lm1lc3NhZ2UuZGF0YSlcclxuXHJcbiAgICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICAgLy9sLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8kKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgICAgIC8qdmFyIGluc3RhbmNlID0gJCgnI3VzaW5nX2pzb24nKS5qc3RyZWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5kZXNlbGVjdF9hbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDIwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IFxyXG5cclxuXHJcbiAgICBpZiAoZGF0YS5ub2RlLmlkLmluZGV4T2YoXCJzbWRsX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vYWxlcnQoKVxyXG4gICAgICBjb25zb2xlLmxvZyhhU2libGluZ3MpXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgXCJtb2R1bGVfdW5pdl9jb25maWdfc291c19tb2R1bGVfb3JkZXJcIiAvKiwge1xyXG4gICAgICAgICAgICAgIGZvcm1hdGlvbjogd2luZG93LnByLmF0dHIoXCJkYXRhLXByb21vdGlvblwiKSxcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjaGlsZDogYVNpYmxpbmdzMiAvKixcInBvc2l0aW9uXCIgOiBwb3NpdGlvbixcIm9wZXJhdGlvblwiOiQoXCIjXCIrbm9kZS5pZCkuYXR0cihcImRhdGEtb3BlcmF0aW9uXCIpLFwic291c01vZHVsZVwiOiQoXCIjXCIrcGFyZW50LmlkKS5hdHRyKFwiZGF0YS1zb3VzTW9kdWxlXCIpKi8sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgLy8gICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgLy9sLnN0b3AoKTtcclxuICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vLyBhbGVydChyZXN1bHQubWVzc2FnZS5kYXRhKVxyXG5cclxuICAgICAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgLyp2YXIgaW5zdGFuY2UgPSAkKCcjdXNpbmdfanNvbicpLmpzdHJlZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2VsZWN0X25vZGUoJ3NlbWVfTGlua184Jyk7Ki9cclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgIC8vbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgdGltZU91dDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gXHJcblxyXG5cclxuXHJcbiAgICBpZiAoZGF0YS5ub2RlLmlkLmluZGV4T2YoXCJtb2RfXCIpID49IDApIHtcclxuICAgICAgLy9hbGVydCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKGFTaWJsaW5nczMpXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgXCJtb2R1bGVfdW5pdl9jb25maWdfbW9kdWxlX29yZGVyXCIgLyosIHtcclxuICAgICAgICAgICAgICBmb3JtYXRpb246IHdpbmRvdy5wci5hdHRyKFwiZGF0YS1wcm9tb3Rpb25cIiksXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY2hpbGQ6IGFTaWJsaW5nczMgLyosXCJwb3NpdGlvblwiIDogcG9zaXRpb24sXCJvcGVyYXRpb25cIjokKFwiI1wiK25vZGUuaWQpLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKSxcInNvdXNNb2R1bGVcIjokKFwiI1wiK3BhcmVudC5pZCkuYXR0cihcImRhdGEtc291c01vZHVsZVwiKSovLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgIC8vICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIC8vbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAvLy8gYWxlcnQocmVzdWx0Lm1lc3NhZ2UuZGF0YSlcclxuXHJcbiAgICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICAgLy9sLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8kKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgICAgIC8qdmFyIGluc3RhbmNlID0gJCgnI3VzaW5nX2pzb24nKS5qc3RyZWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5kZXNlbGVjdF9hbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDIwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgcmVxdWlyZXMgY3JybSBwbHVnaW5cclxuXHJcbiAgICAubyAtIHRoZSBub2RlIGJlaW5nIG1vdmVkXHJcbiAgICAuciAtIHRoZSByZWZlcmVuY2Ugbm9kZSBpbiB0aGUgbW92ZVxyXG4gICAgLm90IC0gdGhlIG9yaWdpbiB0cmVlIGluc3RhbmNlXHJcbiAgICAucnQgLSB0aGUgcmVmZXJlbmNlIHRyZWUgaW5zdGFuY2VcclxuICAgIC5wIC0gdGhlIHBvc2l0aW9uIHRvIG1vdmUgdG8gKG1heSBiZSBhIHN0cmluZyAtIFwibGFzdFwiLCBcImZpcnN0XCIsIGV0YylcclxuICAgIC5jcCAtIHRoZSBjYWxjdWxhdGVkIHBvc2l0aW9uIHRvIG1vdmUgdG8gKGFsd2F5cyBhIG51bWJlcilcclxuICAgIC5ucCAtIHRoZSBuZXcgcGFyZW50XHJcbiAgICAub2MgLSB0aGUgb3JpZ2luYWwgbm9kZSAoaWYgdGhlcmUgd2FzIGEgY29weSlcclxuICAgIC5jeSAtIGJvb2xlbiBpbmRpY2F0aW5nIGlmIHRoZSBtb3ZlIHdhcyBhIGNvcHlcclxuICAgIC5jciAtIHNhbWUgYXMgbnAsIGJ1dCBpZiBhIHJvb3Qgbm9kZSBpcyBjcmVhdGVkIHRoaXMgaXMgLTFcclxuICAgIC5vcCAtIHRoZSBmb3JtZXIgcGFyZW50XHJcbiAgICAub3IgLSB0aGUgbm9kZSB0aGF0IHdhcyBwcmV2aW91c2x5IGluIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW92ZWQgbm9kZSAqL1xyXG4gICAgLy92YXIgbm9kZVR5cGUgPSAkKGRhdGEucnNsdC5vKS5hdHRyKFwicmVsXCIpO1xyXG4gICAgLy92YXIgcGFyZW50VHlwZSA9ICQoZGF0YS5yc2x0Lm5wKS5hdHRyKFwiaWRcIik7XHJcbiAgICAvL2FsZXJ0KHBhcmVudFR5cGUpXHJcbiAgICAvKmlmIChkYXRhLnBhcmVudC5pbmRleE9mKFwib3BlX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vIGFsZXJ0KClcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEubm9kZS5pZC5pbmRleE9mKFwicmFjaW5lX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vIGFsZXJ0KClcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEubm9kZS5pZC5pbmRleE9mKFwibW9kX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vIFRPRE8hXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLm5vZGUuaWQuaW5kZXhPZihcImRvc19cIikgPj0gMCkge1xyXG4gICAgICAvLyBUT0RPIVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5ub2RlLmlkLmluZGV4T2YoXCJzbWRsX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vIFRPRE8hXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0qL1xyXG4gIH0pO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tPcGVyYXRpb24ob3BlcmF0aW9uLCBub2RlLCBwYXJlbnQsIHBvc2l0aW9uLCBtb3JlKSB7XHJcbiAgLy9jb25zb2xlLmxvZyhvcGVyYXRpb24pO1xyXG4gIGlmIChvcGVyYXRpb24gPT0gXCJtb3ZlX25vZGVcIikge1xyXG4gICAgLy9hbGVydChcImZkZlwiKVxyXG4gICAgLy9jb25zb2xlLmxvZyhub2RlKTtcclxuICAgIGlmICghbW9yZS5kbmQpIHtcclxuICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAvKiB2YXIgdHJlZSA9ICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSksXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IHRyZWUuZ2V0X25vZGUocGFyZW50KTtcclxuICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgLy9jb25zb2xlLmxvZygkLmpzdHJlZSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJC5pbkFycmF5KG5vZGUuaWQsIHBhcmVudC5jaGlsZHJlbikpO1xyXG4gICAgICAkKFwiI1wiICsgcGFyZW50LmlkICsgXCI+dWwgbGlcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCBpbmRleCArIFwiOiBcIiArICQoIHRoaXMgKS50ZXh0KCkgKTtcclxuICAgICAgICBsaXN0LnB1c2goJCh0aGlzKS5hdHRyKFwiZGF0YS1vcGVyYXRpb25cIikpO1xyXG4gICAgICB9KTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICBcIm1vZHVsZV91bml2X2NvbmZpZ19vcmRlclwiIC8qLCB7XHJcbiAgICAgICAgICAgICAgZm9ybWF0aW9uOiB3aW5kb3cucHIuYXR0cihcImRhdGEtcHJvbW90aW9uXCIpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjaGlsZDogbGlzdCAvKixcInBvc2l0aW9uXCIgOiBwb3NpdGlvbixcIm9wZXJhdGlvblwiOiQoXCIjXCIrbm9kZS5pZCkuYXR0cihcImRhdGEtb3BlcmF0aW9uXCIpLFwic291c01vZHVsZVwiOiQoXCIjXCIrcGFyZW50LmlkKS5hdHRyKFwiZGF0YS1zb3VzTW9kdWxlXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgIC8vICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDIwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7Ki9cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKG1vcmUpO1xyXG4gICAgaWYgKG5vZGUucGFyZW50ICE9IHBhcmVudC5pZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHBhcmVudC5pZC5pbmRleE9mKFwibW9kX1wiKSA+PSAwIC8vfHxcclxuICAgICAgLy9wYXJlbnQuaWQuaW5kZXhPZihcInJhY2luZV9cIikgPj0gMCAvL3x8XHJcbiAgICAgIC8vcGFyZW50LmlkLmluZGV4T2YoXCJkb3NfXCIpID49IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50LmlkLmluZGV4T2YoXCJzbWRsX1wiKSA+PSAwKSB7XHJcbiAgICAgIC8vdmFyIGFTaWJsaW5ncyA9IGdldFNpYmxpbmdzKG5vZGUuaWQsIHBhcmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKmlmIChtb3JlLmRuZCA9PSB0cnVlKSB7XHJcbiAgICAgIGlmKG1vcmUucmVmLmlkLmluZGV4T2YoXCJvcGVfXCIpICYmIG1vcmUucmVmLnBhcmVudC5pbmRleE9mKFwic21kbF9cIikpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBtb3JlLnJlZi5pZC5pbmRleE9mKFwibW9kX1wiKSB8fFxyXG4gICAgICAgIG1vcmUucmVmLmlkLmluZGV4T2YoXCJyYWNpbmVfXCIpIHx8XHJcbiAgICAgICAgbW9yZS5yZWYuaWQuaW5kZXhPZihcImRvc19cIikgfHxcclxuICAgICAgICBtb3JlLnJlZi5pZC5pbmRleE9mKFwic21kbF9cIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9Ki9cclxuICAgIC8qaWYgKFxyXG4gICAgICBtb3JlICYmXHJcbiAgICAgIG1vcmUuZG5kICYmXHJcbiAgICAgIG1vcmUucG9zICE9PSBcImFcIiAmJlxyXG4gICAgICBtb3JlLnBvcyA9PT0gXCJpXCIgJiZcclxuICAgICAgbW9yZS5wb3MgIT09IFwiYlwiXHJcbiAgICAgIFxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGRpc2FsbG93IHJlLW9yZGVyaW5nXHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0qL1xyXG4gIH0gZWxzZSBpZiAob3BlcmF0aW9uID09IFwiY29weV9ub2RlXCIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9tb2R1bGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgaWYgKCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaGFzQ2xhc3MoXCJteS1idXR0b24xXCIpKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjFcIikpO1xyXG4gICAgdmFyIGdvdG8gPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcblxyXG4gIC8vYWxlcnQoaWQpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICBcIm1vZHVsZV91bml2X2NvbmZpZ19tb2R1bGVcIiAvKiwge1xyXG4gICAgICAgIGZvcm1hdGlvbjogd2luZG93LnByLmF0dHIoXCJkYXRhLXByb21vdGlvblwiKSxcclxuICAgICAgfSovXHJcbiAgICApLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgIC8vLyBhbGVydChyZXN1bHQubWVzc2FnZS5kYXRhKVxyXG4gICAgICAgIGlmIChnb3RvID09IDEpIHtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IHJlc3VsdC5tZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvKnZhciBpbnN0YW5jZSA9ICQoJyN1c2luZ19qc29uJykuanN0cmVlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9kb3NzaWVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIHdpbmRvdy50eXBlID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5hdHRyKFwiZGF0YS10eXBlXCIpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwibXktYnV0dG9uMVwiKSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy50eXBlID09IDIpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cudHlwZSA9PSAxKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjFcIikpO1xyXG4gICAgdmFyIGdvdG8gPSAwO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAvL2FsZXJ0KGlkKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19kb3NzaWVyXCIsIHtcclxuICAgICAgbW9kdWxlOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbW9kdWxlXCIpLFxyXG4gICAgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8vIGFsZXJ0KHJlc3VsdC5tZXNzYWdlLmRhdGEpXHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cudHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAvLyQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgICAvLyB3aW5kb3cudHlwZSA9IG51bGw7XHJcbiAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXcyXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXcyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IHdpbmRvdy50eXBlO1xyXG4gICAgICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvKnZhciBpbnN0YW5jZSA9ICQoJyN1c2luZ19qc29uJykuanN0cmVlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9kb3NzaWVyX3VwZGF0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICB3aW5kb3cudHlwZSA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuYXR0cihcImRhdGEtdHlwZVwiKTtcclxuICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhcIm15LWJ1dHRvbjFcIikpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMVwiKSk7XHJcbiAgICB2YXIgZ290byA9IDE7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cudHlwZSA9PSAyKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG4gICAgdmFyIGdvdG8gPSAwO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LnR5cGUgPT0gMSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgIHZhciBnb3RvID0gMDtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuXHJcbiAgLy9hbGVydChpZCk7XHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtb2R1bGVfdW5pdl9jb25maWdfZG9zc2llcl9lZGl0XCIsIHtcclxuICAgICAgZG9zc2llcjogd2luZG93LnByLmF0dHIoXCJkYXRhLWRvc3NpZXJcIiksXHJcbiAgICB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAvLy8gYWxlcnQocmVzdWx0Lm1lc3NhZ2UuZGF0YSlcclxuICAgICAgICBpZiAod2luZG93LnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgLy8kKFwiLnNob3ctcHJvbW90aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgICAgLy8gd2luZG93LnR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3MlwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGltcG9ydChcIi4uLy4uL21kYi5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy50eXBlID09IDEpIHtcclxuICAgICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3MlwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSB3aW5kb3cudHlwZTtcclxuICAgICAgICAkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLyp2YXIgaW5zdGFuY2UgPSAkKCcjdXNpbmdfanNvbicpLmpzdHJlZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5kZXNlbGVjdF9hbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5zZWxlY3Rfbm9kZSgnc2VtZV9MaW5rXzgnKTsqL1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgLy9hbGVydCgpO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDIwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5fZG9zc2llcl9tb2R1bGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgd2luZG93LnNlbGVjdGVkRGF0YSA9IDI7XHJcbiAgd2luZG93LnR5cGUgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmF0dHIoXCJkYXRhLXR5cGVcIik7XHJcbiAgaWYgKCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaGFzQ2xhc3MoXCJteS1idXR0b24xXCIpKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjFcIikpO1xyXG4gICAgdmFyIGdvdG8gPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcblxyXG4gIC8vYWxlcnQoaWQpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwibW9kdWxlX3VuaXZfY29uZmlnX2Rvc3NpZXJfbW9kdWxlXCIsIHtcclxuICAgICAgbW9kdWxlOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbW9kdWxlXCIpLFxyXG4gICAgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8vIGFsZXJ0KHJlc3VsdC5tZXNzYWdlLmRhdGEpXHJcbiAgICAgICAgaWYgKGdvdG8gPT0gMSkge1xyXG4gICAgICAgICAgJChcIi5zaG93LXByb21vdGlvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICB3aW5kb3cuc2VsZWN0ZWREYXRhID0gcmVzdWx0Lm1lc3NhZ2UuZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IHdpbmRvdy50eXBlO1xyXG4gICAgICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvKnZhciBpbnN0YW5jZSA9ICQoJyN1c2luZ19qc29uJykuanN0cmVlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9zb3VzX21vZHVsZV9lZGl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwibXktYnV0dG9uMVwiKSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgdmFyIGdvdG8gPSAwO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAvL2FsZXJ0KGlkKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19Tb3VzTW9kdWxlX2VkaXRcIiwge1xyXG4gICAgICBzb3VzTW9kdWxlOiB3aW5kb3cucHIuYXR0cihcImRhdGEtc291c21vZHVsZVwiKSxcclxuICAgIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgIC8vLyBhbGVydChyZXN1bHQubWVzc2FnZS5kYXRhKVxyXG4gICAgICAgIGlmIChnb3RvID09IDEpIHtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IHJlc3VsdC5tZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvKnZhciBpbnN0YW5jZSA9ICQoJyN1c2luZ19qc29uJykuanN0cmVlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9zb3VzX21vZHVsZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhcIm15LWJ1dHRvbjFcIikpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMVwiKSk7XHJcbiAgICB2YXIgZ290byA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIHZhciBnb3RvID0gMDtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuXHJcbiAgLy9hbGVydChpZCk7XHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtb2R1bGVfdW5pdl9jb25maWdfU291c01vZHVsZVwiLCB7XHJcbiAgICAgIG1vZHVsZTogd2luZG93LnByLmF0dHIoXCJkYXRhLW1vZHVsZVwiKSxcclxuICAgIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgIC8vLyBhbGVydChyZXN1bHQubWVzc2FnZS5kYXRhKVxyXG4gICAgICAgIGlmIChnb3RvID09IDEpIHtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IHJlc3VsdC5tZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvKnZhciBpbnN0YW5jZSA9ICQoJyN1c2luZ19qc29uJykuanN0cmVlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9vcGVyYXRpb25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgaWYgKCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaGFzQ2xhc3MoXCJteS1idXR0b24xXCIpKSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjFcIikpO1xyXG4gICAgdmFyIGdvdG8gPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcblxyXG4gIC8vYWxlcnQoaWQpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwibW9kdWxlX3VuaXZfY29uZmlnX29wZXJhdGlvblwiLCB7XHJcbiAgICAgIHNvdXNNb2R1bGU6IHdpbmRvdy5wci5hdHRyKFwiZGF0YS1zb3VzTW9kdWxlXCIpLFxyXG4gICAgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8vIGFsZXJ0KHJlc3VsdC5tZXNzYWdlLmRhdGEpXHJcbiAgICAgICAgaWYgKGdvdG8gPT0gMSkge1xyXG4gICAgICAgICAgJChcIi5zaG93LXByb21vdGlvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICB3aW5kb3cuc2VsZWN0ZWREYXRhID0gcmVzdWx0Lm1lc3NhZ2UuZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8qdmFyIGluc3RhbmNlID0gJCgnI3VzaW5nX2pzb24nKS5qc3RyZWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZGVzZWxlY3RfYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2VsZWN0X25vZGUoJ3NlbWVfTGlua184Jyk7Ki9cclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogMjAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiAyMDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuX29wZXJhdGlvbl9lZGl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwibXktYnV0dG9uMVwiKSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgdmFyIGdvdG8gPSAwO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAvL2FsZXJ0KGlkKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19vcGVyYXRpb25fZWRpdFwiLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogd2luZG93LnByLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKSxcclxuICAgIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgIC8vLyBhbGVydChyZXN1bHQubWVzc2FnZS5kYXRhKVxyXG4gICAgICAgIGlmIChnb3RvID09IDEpIHtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IHJlc3VsdC5tZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvKnZhciBpbnN0YW5jZSA9ICQoJyN1c2luZ19qc29uJykuanN0cmVlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbGVjdF9ub2RlKCdzZW1lX0xpbmtfOCcpOyovXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogMjAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldFNpYmxpbmdzKG5vZGVJRCwgcGFyZW50KSB7XHJcbiAgdmFyIHRyZWUgPSAkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLFxyXG4gICAgcGFyZW50Tm9kZSA9IHRyZWUuZ2V0X25vZGUocGFyZW50KSxcclxuICAgIGFDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGRyZW4sXHJcbiAgICBhU2libGluZ3MgPSBbXTtcclxuXHJcbiAgYUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgIGFTaWJsaW5ncy5wdXNoKCQoXCIjXCIgKyBjKS5hdHRyKFwiZGF0YS1vcGVyYXRpb25cIikpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhU2libGluZ3M7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2libGluZ3MyKG5vZGVJRCwgcGFyZW50KSB7XHJcbiAgdmFyIHRyZWUgPSAkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLFxyXG4gICAgcGFyZW50Tm9kZSA9IHRyZWUuZ2V0X25vZGUocGFyZW50KSxcclxuICAgIGFDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGRyZW4sXHJcbiAgICBhU2libGluZ3MgPSBbXTtcclxuXHJcbiAgYUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgIGFTaWJsaW5ncy5wdXNoKCQoXCIjXCIgKyBjKS5hdHRyKFwiZGF0YS1zb3VzbW9kdWxlXCIpKTtcclxuICB9KTtcclxuICByZXR1cm4gYVNpYmxpbmdzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U2libGluZ3MzKG5vZGVJRCwgcGFyZW50KSB7XHJcbiAgdmFyIHRyZWUgPSAkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLFxyXG4gICAgcGFyZW50Tm9kZSA9IHRyZWUuZ2V0X25vZGUocGFyZW50KSxcclxuICAgIGFDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGRyZW4sXHJcbiAgICBhU2libGluZ3MgPSBbXTtcclxuXHJcbiAgYUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgIGFTaWJsaW5ncy5wdXNoKCQoXCIjXCIgKyBjKS5hdHRyKFwiZGF0YS1tb2R1bGVcIikpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhU2libGluZ3M7XHJcbn1cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubGllbi1kb3NzaWVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpXHJcbiAgJChcIi5tb2RhbC10aXRsZVwiKS50ZXh0KFwiQWpvdXRlciBEb3NzaWVyXCIpO1xyXG4gIGltcG9ydChcIi4uLy4uL21kYi5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gIH0pO1xyXG4gICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuZW1wdHkoKTtcclxuICAkKFwiLnNob3ctcHJvbW90aW9uMlwiKS5lbXB0eSgpO1xyXG4gICQoXCIuaGlkZS1wcm9tb3Rpb24yIC5tb2RhbC1jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwiY29udGVudFwiKTtcclxuICB3aW5kb3cucHIgPSAkKHRoaXMpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwibW9kdWxlX3VuaXZfY29uZmlnX2Rvc3NpZXJcIiwge1xyXG4gICAgICBtb2R1bGU6ICQodGhpcykuYXR0cihcImRhdGEtbW9kdWxlXCIpLFxyXG4gICAgfSksXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgJChcIi5zaG93LXByb21vdGlvbjJcIikuaHRtbChkYXRhKTtcclxuICAgICAgaW1wb3J0KFwiLi4vLi4vcGx1Z2lucy9zZWxlY3QyL3NlbGVjdDIuZnVsbC5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGVjdCA9ICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBkb3NzaWVyc1wiLFxyXG4gICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLnNlbDJcIikub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnBhcmFtcy5kYXRhLnRleHQpXHJcbiAgICAgICAgICAkKFwiI2Zvcm1fZGVzY3JpcHRpb25cIikudmFsKFxyXG4gICAgICAgICAgICBlLnBhcmFtcy5kYXRhLnRleHQgKyBcIiBcIiArICQoXCIuYW5uZWVcIikudGV4dCgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9yZXF1aXJlKCcuL21kYi5taW4uanMnKTtcclxuICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXcyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgY29uc29sZS5sb2coanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgLy8kKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmh0bWwoanFYSFIucmVzcG9uc2VUZXh0KVxyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIkltcG9zc2libGUgZGUgdHJhaXRlciB1biBmaWNoaWVyIG4nZXN0IHBhcyBvcmdhbmlzZXJcIixcclxuICAgICAgICBcIkVycm9yXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiAyMDAwIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuX21vZHVsZV9lZGl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwibXktYnV0dG9uMVwiKSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24xXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgdmFyIGdvdG8gPSAwO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAvL2FsZXJ0KGlkKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19tb2R1bGVfZWRpdFwiLCB7XHJcbiAgICAgIHVzTW9kdWxlOiB3aW5kb3cucHIuYXR0cihcImRhdGEtbW9kdWxlXCIpLFxyXG4gICAgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8vIGFsZXJ0KHJlc3VsdC5tZXNzYWdlLmRhdGEpXHJcbiAgICAgICAgaWYgKGdvdG8gPT0gMSkge1xyXG4gICAgICAgICAgJChcIi5zaG93LXByb21vdGlvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICB3aW5kb3cuc2VsZWN0ZWREYXRhID0gcmVzdWx0Lm1lc3NhZ2UuZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDIwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8qdmFyIGluc3RhbmNlID0gJCgnI3VzaW5nX2pzb24nKS5qc3RyZWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZGVzZWxlY3RfYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2VsZWN0X25vZGUoJ3NlbWVfTGlua184Jyk7Ki9cclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogMjAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiAyMDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3VzdG9tTWVudShub2RlKSB7XHJcbiAgLy8gVGhlIGRlZmF1bHQgc2V0IG9mIGFsbCBpdGVtc1xyXG4gIHZhciBpdGVtcyA9IHtcclxuICAgIHJlbmFtZUl0ZW06IHtcclxuICAgICAgLy8gVGhlIFwicmVuYW1lXCIgbWVudSBpdGVtXHJcbiAgICAgIGxhYmVsOiBcIk1vZGlmaWVyXCIsXHJcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgIHZhciBzdHIgPSBub2RlLmlkO1xyXG4gICAgICAgIHdpbmRvdy5wciA9ICQoXCIjXCIgKyBub2RlLmlkKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHN0cilcclxuICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCJtb2RfXCIpID49IDApIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICQoXCIubW9kYWwtdGl0bGVcIikudGV4dChcIk1vZGlmaWVyIE1vZHVsZVwiKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtb2R1bGVfdW5pdl9jb25maWdfbW9kdWxlX2VkaXRcIiwge1xyXG4gICAgICAgICAgICAgIHVzTW9kdWxlOiAkKFwiI1wiICsgc3RyKS5hdHRyKFwiZGF0YS1tb2R1bGVcIiksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsIC8vIFRvIHNlbmQgRE9NRG9jdW1lbnQgb3Igbm9uIHByb2Nlc3NlZCBkYXRhIGZpbGUgaXQgaXMgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9wbHVnaW5zL3NlbGVjdDIvc2VsZWN0Mi5mdWxsLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3QgPSAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWwyXCIpLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnBhcmFtcy5kYXRhLnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZm9ybV9kZXNjcmlwdGlvblwiKS52YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wYXJhbXMuZGF0YS50ZXh0ICsgXCIgXCIgKyAkKFwiLmFubmVlXCIpLnRleHQoKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy9yZXF1aXJlKCcuL21kYi5taW4uanMnKTtcclxuICAgICAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAvLyQoJyNyZXN1bHRhdHNfaW1wb3J0JykuaHRtbChqcVhIUi5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBcIkltcG9zc2libGUgZGUgdHJhaXRlciB1biBmaWNoaWVyIG4nZXN0IHBhcyBvcmdhbmlzZXJcIixcclxuICAgICAgICAgICAgICAgIFwiRXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogMjAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8nc291c01vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1zb3VzLW1vZHVsZScpLCdtb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtbW9kdWxlJyksJ29wZXJhdGlvbic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1vcGVyYXRpb24nKSwnZG9zc2llcic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1kb3NzaWVyJyksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIuaW5kZXhPZihcImRvc19cIikgPj0gMCkge1xyXG4gICAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS50ZXh0KFwiTW9kaWZpZXIgTW9kdWxlXCIpO1xyXG4gICAgICAgICAgJChcIi5zaG93LXByb21vdGlvblwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19kb3NzaWVyX2VkaXRcIiwge1xyXG4gICAgICAgICAgICAgIGRvc3NpZXI6ICQoXCIjXCIgKyBzdHIpLmF0dHIoXCJkYXRhLWRvc3NpZXJcIiksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsIC8vIFRvIHNlbmQgRE9NRG9jdW1lbnQgb3Igbm9uIHByb2Nlc3NlZCBkYXRhIGZpbGUgaXQgaXMgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9wbHVnaW5zL3NlbGVjdDIvc2VsZWN0Mi5mdWxsLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3QgPSAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWwyXCIpLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnBhcmFtcy5kYXRhLnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZm9ybV9kZXNjcmlwdGlvblwiKS52YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wYXJhbXMuZGF0YS50ZXh0ICsgXCIgXCIgKyAkKFwiLmFubmVlXCIpLnRleHQoKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy9yZXF1aXJlKCcuL21kYi5taW4uanMnKTtcclxuICAgICAgICAgICAgICBpbXBvcnQoXCIuLi8uLi9tZGIubWluLmpzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAvLyQoJyNyZXN1bHRhdHNfaW1wb3J0JykuaHRtbChqcVhIUi5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBcIkltcG9zc2libGUgZGUgdHJhaXRlciB1biBmaWNoaWVyIG4nZXN0IHBhcyBvcmdhbmlzZXJcIixcclxuICAgICAgICAgICAgICAgIFwiRXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogMjAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8nc291c01vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1zb3VzLW1vZHVsZScpLCdtb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtbW9kdWxlJyksJ29wZXJhdGlvbic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1vcGVyYXRpb24nKSwnZG9zc2llcic6ICQoJyMnK3N0cikuYXR0cignZGF0YS1kb3NzaWVyJyksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIuaW5kZXhPZihcInNtZGxfXCIpID49IDApIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICQoXCIubW9kYWwtdGl0bGVcIikudGV4dChcIk1vZGlmaWVyIE1vZHVsZVwiKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtb2R1bGVfdW5pdl9jb25maWdfU291c01vZHVsZV9lZGl0XCIsIHtcclxuICAgICAgICAgICAgICBzb3VzTW9kdWxlOiAkKFwiI1wiICsgc3RyKS5hdHRyKFwiZGF0YS1zb3VzbW9kdWxlXCIpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLCAvLyBUbyB1bmFibGUgcmVxdWVzdCBwYWdlcyB0byBiZSBjYWNoZWRcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vcGx1Z2lucy9zZWxlY3QyL3NlbGVjdDIuZnVsbC5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ID0gJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2VsMlwiKS5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5wYXJhbXMuZGF0YS50ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAkKFwiI2Zvcm1fZGVzY3JpcHRpb25cIikudmFsKFxyXG4gICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLmRhdGEudGV4dCArIFwiIFwiICsgJChcIi5hbm5lZVwiKS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vcmVxdWlyZSgnLi9tZGIubWluLmpzJyk7XHJcbiAgICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgLy8kKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmh0bWwoanFYSFIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgXCJJbXBvc3NpYmxlIGRlIHRyYWl0ZXIgdW4gZmljaGllciBuJ2VzdCBwYXMgb3JnYW5pc2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDIwMDAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vJ3NvdXNNb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtc291cy1tb2R1bGUnKSwnbW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW1vZHVsZScpLCdvcGVyYXRpb24nOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtb3BlcmF0aW9uJyksJ2Rvc3NpZXInOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtZG9zc2llcicpLFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCJvcGVfXCIpID49IDApIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICQoXCIubW9kYWwtdGl0bGVcIikudGV4dChcIk1vZGlmaWVyIE1vZHVsZVwiKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1wcm9tb3Rpb25cIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtb2R1bGVfdW5pdl9jb25maWdfb3BlcmF0aW9uX2VkaXRcIiwge1xyXG4gICAgICAgICAgICAgIG9wZXJhdGlvbjogJChcIiNcIiArIHN0cikuYXR0cihcImRhdGEtb3BlcmF0aW9uXCIpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLCAvLyBUbyB1bmFibGUgcmVxdWVzdCBwYWdlcyB0byBiZSBjYWNoZWRcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZVxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAkKFwiLnNob3ctcHJvbW90aW9uXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vcGx1Z2lucy9zZWxlY3QyL3NlbGVjdDIuZnVsbC5taW4uanNcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ID0gJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2VsMlwiKS5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZS5wYXJhbXMuZGF0YS50ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAkKFwiI2Zvcm1fZGVzY3JpcHRpb25cIikudmFsKFxyXG4gICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLmRhdGEudGV4dCArIFwiIFwiICsgJChcIi5hbm5lZVwiKS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vcmVxdWlyZSgnLi9tZGIubWluLmpzJyk7XHJcbiAgICAgICAgICAgICAgaW1wb3J0KFwiLi4vLi4vbWRiLm1pbi5qc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgLy8kKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmh0bWwoanFYSFIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgXCJJbXBvc3NpYmxlIGRlIHRyYWl0ZXIgdW4gZmljaGllciBuJ2VzdCBwYXMgb3JnYW5pc2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDIwMDAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vJ3NvdXNNb2R1bGUnOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtc291cy1tb2R1bGUnKSwnbW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW1vZHVsZScpLCdvcGVyYXRpb24nOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtb3BlcmF0aW9uJyksJ2Rvc3NpZXInOiAkKCcjJytzdHIpLmF0dHIoJ2RhdGEtZG9zc2llcicpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWxldGVJdGVtOiB7XHJcbiAgICAgIC8vIFRoZSBcImRlbGV0ZVwiIG1lbnUgaXRlbVxyXG4gICAgICBsYWJlbDogXCJTdXBwcmltZXJcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN0ciA9IG5vZGUuaWQ7XHJcbiAgICAgICAgd2luZG93LnByID0gJChcIiNcIiArIG5vZGUuaWQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc3RyKVxyXG4gICAgICAgIGlmIChzdHIuaW5kZXhPZihcIm1vZF9cIikgPj0gMCkge1xyXG4gICAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19tb2R1bGVfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6ICQoXCIjXCIgKyBub2RlLmlkKS5hdHRyKFwiZGF0YS1tb2R1bGVcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIuaW5kZXhPZihcImRvc19cIikgPj0gMCkge1xyXG4gICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcIm1vZHVsZV91bml2X2NvbmZpZ19kb3NzaWVyX2RlbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9zc2llcjogJChcIiNcIiArIG5vZGUuaWQpLmF0dHIoXCJkYXRhLWRvc3NpZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiN1c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIuaW5kZXhPZihcInNtZGxfXCIpID49IDApIHtcclxuICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb2R1bGVfdW5pdl9jb25maWdfc291c01vZHVsZV9kZWxldGVcIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VzTW9kdWxlOiAkKFwiI1wiICsgbm9kZS5pZCkuYXR0cihcImRhdGEtc291c21vZHVsZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ci5pbmRleE9mKFwib3BlX1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwibW9kdWxlX3VuaXZfY29uZmlnX29wZXJhdGlvbl9kZWxldGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJChcIiNcIiArIG5vZGUuaWQpLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKHRydWUpLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLydzb3VzTW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLXNvdXMtbW9kdWxlJyksJ21vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1tb2R1bGUnKSwnb3BlcmF0aW9uJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW9wZXJhdGlvbicpLCdkb3NzaWVyJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLWRvc3NpZXInKSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGlmICgkKG5vZGUpLmhhc0NsYXNzKFwiZm9sZGVyXCIpKSB7XHJcbiAgICAvLyBEZWxldGUgdGhlIFwiZGVsZXRlXCIgbWVudSBpdGVtXHJcbiAgICBkZWxldGUgaXRlbXMuZGVsZXRlSXRlbTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpdGVtcztcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgJEZ1bmN0aW9uID0gRnVuY3Rpb247XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIWhhc093bihmYWN0b3JpZXMsIGFyZ3NMZW5ndGgpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9ICRGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgam9pbihsaXN0LCAnLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyAkRnVuY3Rpb24uYmluZCA6IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIEYgPSBhQ2FsbGFibGUodGhpcyk7XG4gIHZhciBQcm90b3R5cGUgPSBGLnByb3RvdHlwZTtcbiAgdmFyIHBhcnRBcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IGNvbmNhdChwYXJ0QXJncywgYXJyYXlTbGljZShhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoRiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogRi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KFByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gUHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gdW5jdXJyeVRoaXMoW10uaW5kZXhPZik7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBuYXRpdmVJbmRleE9mKFsxXSwgMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICB2YXIgZnJvbUluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KTtcbiAgfVxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGdW5jdGlvbi5iaW5kICE9PSBiaW5kIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9