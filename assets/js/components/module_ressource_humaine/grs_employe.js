
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
Routing.setRoutingData(routes);


global.$ = $;

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
        url: Routing.generate('grs_employe_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[25, 50, 100, 200, 400], [25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "10px", "targets": 0 },
        { "orderable": true, "width": "3px", "targets": 0 },
        

    ],
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
    CustomSearchDatatable.CustomSearchText(api, [1, 2,3,4,5,6, 7], []);
   // CustomSearchDatatable.CustomSearchDate(api, [3], []);
    CustomSearchDatatable.CustomSearchSelect(api, [8], []);
    //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('grs_employe_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});


$(".action_head").click(function () {
    console.log($(".action").filter(":checked").length);
    $(".action ,.action_head").prop("checked", $(this).prop("checked"));
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
  
  $("body").on("click", ".action", function () {
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });


jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), { timeOut: 4000 })
    }
});
jQuery.each($('.form-errors li'), function (i, val) {
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), { timeOut: 4000 })
}
$('input[name="grs_employe[user]"]:radio').change(function () {
    $('#optionOneDiv').toggle(this.id == 'grs_employe_user_0');
    if (this.id == 'grs_employe_user_1') {
      $(".bloc_investissement").css("display", "block");
    }
});

var arr = [];
$('.new').on('submit', '.form', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('grs_employe_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();

            if (result.errors) {

                $('.erreur_liste').remove();
                //$("span").remove( ".erreur_liste" );
                ShowFormErrors(selector, form_name, result.errors);
                $('.error-class-tab').each(function (index) {
                  //  alert(index);
                  //  alert(arr.indexOf($(this).parents('.tab-pane').attr('id')));
                    if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
                        $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class=" erreur_liste label badge-danger">Erreur!</span>');
                    }
                    arr = $(this).parents('.tab-pane').attr('id');
                });
                 arr = [];
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code = 200) {
                // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 });
                var url = Routing.generate('grs_employe_index');
                window.location.href = url;
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })


        }
    });
    e.preventDefault();
});



$('.edit').on('submit', '.form', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    l.start();
    var id = dta.get("_id");
    //alert(id);
    $.ajax({
        type: 'POST',
        url: Routing.generate("grs_employe_edit", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
           // alert();
            l.stop();

            if (result.errors) {
             //   $('.erreur_liste').remove();
                	

             $('.erreur_liste').remove();
             //$("span").remove( ".erreur_liste" );
             ShowFormErrors(selector, form_name, result.errors);
             $('.error-class-tab').each(function (index) {
               //  alert(index);
               //  alert(arr.indexOf($(this).parents('.tab-pane').attr('id')));
                 if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
                     $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class=" erreur_liste label badge-danger">Erreur!</span>');
                 }
                 arr = $(this).parents('.tab-pane').attr('id');
             });
              arr = [];
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code = 200) {
                 
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 });
               // var url = Routing.generate('grs_employe_index');
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })


        }
    });
    e.preventDefault();
});





$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = Routing.generate("grs_employe_edit", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette opération",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('body').on('change', '.paiement', function () {
    //alert($(this).val());
    if ($(this).val() == 2) {
        $('.bloc_cheque').show();

    } else {
        $('.bloc_cheque').hide();
    }
    // $("#valid").css("display", "block");

});




$("#_delete").click(function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
  
    var obj = {
      route: "grs_employe_delete",
      redirection: "grs_employe_index",
      token: token,
      id: id,
    };
    // alert();
    deleteCab(obj);
  
    e.preventDefault();
  });