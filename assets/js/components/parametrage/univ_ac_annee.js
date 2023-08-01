const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

import * as Ladda from 'ladda';
global.$ = $;
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
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
        url: Routing.generate('univ_ac_annee_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[25, 50, 100, 200, 400], [25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        { "orderable": false, "width": "1px", "targets": 0 },
        

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


table.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();

    CustomSearchDatatable.CustomSearchText(api, [1,4,5], []);
    CustomSearchDatatable.CustomSearchSelect(api, [2,3,6], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);


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

/*check the form errors*/

if ($('.form-errors').text()!=''){
   toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000}) 
}







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

/* $(".bod").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    if ($(document.activeElement).hasClass("button-save-add-annee")) {
        //alert()
      var l = Ladda.create(document.querySelector(".button-save-add-annee"));
      var goto = 1;
    } else {
      var l = Ladda.create(document.querySelector(".button-save-annee"));
      var goto = 0;
    }
    l.start();
    var id = $("#test").data("serviceId");
    var obj = new Object();
      obj["route"] = "univ_ac_annee_ajouter";
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
  $(".add").click(function (e) {
      $.ajax({
        type: "POST",
        url: Routing.generate("univ_ac_annee_ajouter"),
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
    }); */
$('.add').click(function (e) {

    // console.log( $(this).attr('data-id')); 
    $.ajax({
        type: 'POST',
        url: Routing.generate('univ_ac_annee_ajouter'),
        success: function (result) {
            $('.bod').html(result).hide()
            $('#ModalDocumentDynamique').modal('show');
            $('select.select2').select2();
            setTimeout(
                    function ()
                    {
                        $('.spr').hide()
                        $('.bod').fadeIn()
                    }, 600);

        }
    });
    e.preventDefault();
});


$('.bod').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    if ($(document.activeElement).hasClass("button-save-add-annee")) {
        var l = Ladda.create(document.querySelector(".button-save-add-annee"));
        var goto = 1;
      } else {
        var l = Ladda.create(document.querySelector(".button-save-annee"));
        var goto = 0;
      }
    l.start();
   
    $.ajax({
        type: 'POST',
        url: Routing.generate('univ_ac_annee_ajouter'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            $('.errors-list').remove();
           if (result.errors) {

                //dump(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            }   if (result.code == 200) {
                // alert(result.data.id);

                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                table.ajax.reload();
                $('#ModalDocumentDynamique').modal('hide');
                if (goto == 1) {
                    $( ".ajouter" ).trigger( "click" );
                  }
            
               
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
   
    e.preventDefault();
});



$('#grid tbody').on('click', '.cd_op', function () {
  
           $.ajax({
               type: 'POST',
               url: Routing.generate('univ_ac_annee_modifier',{ 'id': $(this).closest('tr').attr('id')}),
               success: function (result) {
                   $('.bod').html(result).hide()
                   $('#ModalDocumentDynamique').modal('show');
                   $('select.select2').select2();
                   setTimeout(
                           function ()
                           {
                               $('.spr').hide()
                               $('.bod').fadeIn()
                           }, 600);
       
               }
           });
      
   });


   $('.bod').on('submit', '.form_edit', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);

    var id = $('#test').data("anneeId");
    var l = Ladda.create(document.querySelector(".button-edit-annee"));
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('univ_ac_annee_modifier',{ 'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            $('.errors-list').remove();
           if (result.errors) {

                //dump(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            }   if (result.code == 200) {
                // alert(result.data.id);

                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                table.ajax.reload();
                $('#ModalDocumentDynamique').modal('hide');
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
   
    e.preventDefault();
});



$('.bod').on('click', '._delete', function (e) {

    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment supprimer cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'DELETE',
                    url: Routing.generate('univ_ac_annee_delete', { 'id': id , 'token': token}),
                    success: function (result) {
                      //  console.log(result);
                        if (result.code == 200) {
                            // table.ajax.reload();
                            //   alert();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            table.ajax.reload();
                            $('#ModalDocumentDynamique').modal('hide');
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});


