const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import * as Ladda from 'ladda';
import { ShowFormErrors } from "../../ManagementErrors/index.js";
global.$ = $;
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";


const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('univ_p_statut_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },


    ],
    "pageLength": 25,
    "order": [[ 0, "desc" ]],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function (e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },

        },
    ],
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    },
    fixedHeader: true,

});
table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,7,8], []);
  CustomSearchDatatable.CustomSearchSelect(api, [5,6,9], []);
  CustomSearchDatatable.CustomSearchDate(api, [], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");

  if (id) {
    var obj = new Object();
    obj["route"] = "univ_p_statut_delete";
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




$(".bod").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    if ($(document.activeElement).hasClass("button-save-add-statut")) {
        //alert()
      var l = Ladda.create(document.querySelector(".button-save-add-statut"));
      var goto = 1;
    } else {
      var l = Ladda.create(document.querySelector(".button-save-statut"));
      var goto = 0;
    }
    l.start();
    var id = $("#test").data("statutId");
    var obj = new Object();
      obj["route"] = "univ_p_statut_add";
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
  

  $('body').on('change','.etablissement',function (e) {
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('univ_ac_etablissement_get_formation', {id: $(this).val()}),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
               
                $(".formation").html(infos.data);
                $('select.select2').select2();
            }
        });
    } else {
        $('.formation').html('<option value="">Choix Formation</option>');
       
      
       
    }
    e.preventDefault();
});


$(".add").click(function (e) {
    $.ajax({
      type: "POST",
      url: Routing.generate("univ_p_statut_add"),
      success: function (result) {
        $(".bod").html(result).hide();
        $("#ModalDocumentDynamique").modal("show");
        $('select.select2').select2();
        setTimeout(function () {
          $(".spr").hide();
          $(".bod").fadeIn();
        }, 600);
      },
    });
    e.preventDefault();
  });
  

  $("#grid tbody").on("click", ".cd_op", function () {
    $.ajax({
      type: "POST",
      url: Routing.generate("univ_p_statut_edit", {
        id: $(this).closest("tr").attr("id"),
      }),
      success: function (result) {
        $(".bod").html(result).hide();
        $("#ModalDocumentDynamique").modal("show");
        $('select.select2').select2();
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
  
    var id = $("#test").data("statutId");
    var l = Ladda.create(document.querySelector(".button-edit-statut"));
    l.start();
    var obj = new Object();
    var parametre = { id: id };
    obj["route"] = "univ_p_statut_edit";
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
  


jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), {timeOut: 4000})
    }
});
jQuery.each($('.form-errors li'), function (i, val) {
 
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text()); 
if ($('.form-errors').text()!=''){
   toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000}) 
}


