
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
        url: Routing.generate('grs_cnss_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[25, 50, 100, 200, 400], [25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
      
        

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
    CustomSearchDatatable.CustomSearchText(api, [1,2,], []);
    CustomSearchDatatable.CustomSearchDate(api, [3], []);
    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,7], []);
    //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('grs_cnss_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});

$(".select2").select2();

var table = $('#datatable-show').DataTable({
  
    ajax: {
        url: Routing.generate('grs_cnss_employe_list',{ 'id': $("#_id").val() }) + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10,25, 50, 100, 200, 400], [10,25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        
      
        

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

var table1 = $('#datatable-show2').DataTable({
    ajax: {
        url: Routing.generate('grs_cnss_detail_employe_list',{ 'id': $("#_id").val() }) + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10,25, 50, 100, 200, 400], [10,25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },      
        
      
        

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




  


var table2 = $('#datatable-generer').DataTable({
    ajax: {
        url: Routing.generate('grs_cnss_detail_employe_list_generer',{ 'id': $("#_id").val() }) + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10,25, 50, 100, 200, 400], [10,25, 50, 100, 200, "All"]],

    "columns": [
        { "orderable": false, "searchable": true, "width": "1px", "targets": [0] },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
        { "orderable": false, "width": "10px", "targets": 0 },
       // { "orderable": false, "width": "5px", "targets": 0 },
            
        
      
        

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
        url: Routing.generate("grs_cnss_edit", { id: id }),
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

$('.new').on('submit', '.form', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('grs_cnss_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();

            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code = 200) {
                // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 });
               
                var url = Routing.generate('grs_cnss_show',{'id':result.message.data});
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



$('.employe').on('submit', '.form', function (e) {

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    l.start();
    var id = dta.get("_id");
  // alert(id );
    $.ajax({
        type: 'POST',
        url: Routing.generate("grs_cnss_emp", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
 
            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code==403) {
             
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code == 200) {
                // alert( result.message.data);
             
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 });
             //   table1.ajax.reload();
               // $('#grs_paiedet_employe').val('');
               // $('#grs_paiedet_montant').val('');
               // $('#grs_paiedet_description').val('');
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


$('.error-class-tab').each(function (index) {
    //alert(arr.indexOf($(this).parents('.tab-pane').attr('id')))
    if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
        $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class="label badge-danger">Erreur!</span>');
    }
    arr = $(this).parents('.tab-pane').attr('id');
})
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



$("body").on(
    "click",
    ".grs_paie_apply_transitions",
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
                                        "grs_cnss_apply_transitions",
                                        {id: id}
                                ),
                                success: function (result) {
                                    if (result.code == 200) {
                                        toastr.success(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });

                                        location.reload();
                                    }

                                    if (result.code == 201) {
                                        // alert(result.valider);
                                        toastr.success(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });
                                        var url = Routing.generate(
                                                "grs_cnss_generer",
                                                {id: result.id}
                                        );
                                        window.location.href = url;
                                     //   location.reload();
                                    }

                                    if (result.code == 403) {
                                        toastr.warning(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });
                                    }
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    toastr.warning(
                                            jqXHR.responseJSON.message.text,
                                            jqXHR.responseJSON.message.title,
                                            {timeOut: 4000}
                                    );
                                },
                            });
                        }
                    });
        } else {
            toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000});
        }
        e.preventDefault();
    }
);


$("#datatable-show tbody").on("click", ".add_emp", function () {

  var emp= $(this).closest("tr").attr("id");
  var paie=  $("#_id").val();
 
   // alert(id);
    if(emp){
    $.ajax({
        type: "GET",
        url: Routing.generate("grs_cnss_add_employe", {id: paie , emp:emp}),
       
        processData: false,
        contentType: false,
        success: function (result) {
            //  console.log(result);
            if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                table.ajax.reload();
                table2.ajax.reload();
               // location.reload();
            }else if(result.code == 403)
            {
              toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            }
        },
    });
}
});


$("#datatable-show2 tbody").on("click", ".del_emp", function () {

    var emp= $(this).closest("tr").attr("id");
    var paie=  $("#_id").val();

     // alert(id);
      if(emp){

        
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
            type: "GET",
            url: Routing.generate("grs_cnss_delete_employe", {id: paie , emp:emp}),
           
            processData: false,
            contentType: false,
            success: function (result) {
                //  console.log(result);
                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });
                    
                  //  table.ajax.reload();
                   // table1.ajax.reload();
                    location.reload();
                }else if(result.code == 403)
                {
                  toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                }
            },
        });
      }
  });
    
  }
  });




  $(".employe").on("change", function (e) {
    if ($(this).val()) {
     // alert($(this).val());
      $.ajax({
        type: "GET",
        url: Routing.generate("grs_cnss_montant_employe", {id: $(this).val()}),
       
        processData: false,
        contentType: false,
        success: function (result) {
            //  console.log(result);
            if (result.code == 200) {
                $('#grs_paiedet_montant').val(result.message.montant);
            }else if(result.code == 403)
            {
              toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            }
        },
    });


    }
});



$("#_delete").click(function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
  
    var obj = {
      route: "grs_cnss_delete",
      redirection: "grs_cnss_index",
      token: token,
      id: id,
    };
    // alert();
    deleteCab(obj);
  
    e.preventDefault();
  });


