
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


$("#grid tbody").on("click", ".info_op", function (e) {
//alert();
    var id= $(this).closest("tr").attr("id");
  
   
    // alert(emp);


      $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_info",{id:id}),
        success: function (result) {
          $(".bod1").html(result).hide();
        
          $("#ModalDocumentDynamique1").modal("show");
        
          setTimeout(function () {
            $(".spr1").hide();
            $(".bod1").fadeIn();
          }, 600);
        },
      });



     e.preventDefault();
        
  
  });








var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("tr_operation_list2"), // json datasource
        type: "get",
        beforeSend: function() {
            if (table.hasOwnProperty('settings')) {
                var settings = table.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        }
    },
    deferRender: true,
    serverSide: true,
    lengthMenu: [
        [10, 15, 25, 50, 100, 200],
        [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 15,
    order: [[0, "desc"]],
    columns: [
        {orderable: true, name: 'op.id', width: "5%"},
        {orderable: true, name: 'op.code'},
        {orderable: true, name: 'op.designation'},
        {orderable: true, name: 'pp.code'},
        {orderable: true, name: "DATE_FORMAT(`op`.`created`,'%Y')"},
        
        {orderable: true, name: 'tr.ref_doc_asso'},
        {orderable: true, name: "DATE_FORMAT(tr.date_doc_asso,'%d/%m/%Y')"},
        {orderable: true, name: "DATE_FORMAT(op.date,'%d/%m/%Y')"},
        
        {orderable: true, name: 'mdp.designation'},
        
        {orderable: true, name: 'frs.societe'},
        {orderable: true, name: 'cl.societe'},
        {orderable: true, name: "CONCAT (emp.nom,' ',emp.prenom)"},
        {orderable: true, name: "compt.abreviation"},
         
        {orderable: true, name: 'op.montant' , className: 'fac-back'},
        {orderable: true, name: 'tab.montantRegle',className: 'fac-back' },
        {orderable: true, name: 'nbFacture.NbrOperations',className: 'fac-back'},
        {orderable: true, name: 'tab.NbrReglements',className: 'fac-back'},

        {orderable: true, name: 'parvenue.v' },
        {orderable: true, name: 'op.position_actuel' },
        {orderable: false}
    ],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
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
        // {
        //     extend: "excel",
        //     exportOptions: {
        //       columns: ":visible",
        //       rows: ":visible",
        //       format: {
        //         body: function(data, row, column, node) {
        //             data = $('<p>' + data + '</p>').text();
        //             return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
        //         }
        //     }
        //     },
        // },
    ],
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
    },
    fixedHeader: true,
    footerCallback: function (row, data, start, end, display) {
        $(".center-class").remove();
        var api = this.api(),
            data;

        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === "string"
                ? i.replace(/[\$,]/g, "") * 1
                : typeof i === "number"
                    ? i
                    : 0;
        };
        var floatVal = function (i) {
            if (typeof i === "number") {
                return i;
            } else if (typeof i === "string") {
                i = i.replace("$", "")
                i = i.replace(",", "")
                var result = parseFloat(i);
                if (isNaN(result)) {
                    try {
                        var result = $jq(i).text();
                        result = parseFloat(result);
                        if (isNaN(result)) { result = 0 };
                        return result * 1;
                    } catch (error) {
                        return 0;
                    }
                } else {
                    return result * 1;
                }
            } else {
               // alert("Unhandled type for totals [" + (typeof i) + "]");
                return 0
            }
        };

        var total4 = api
            .column(13,{ page: 'current'})
            .data()
            .reduce(function (a, b) {
                return floatVal(a) + floatVal(b);
            }, 0);

             
        $(api.column(13).footer()).append(
            '<center class="center-class" style="font-size: 10px;">' + total4.toFixed(2) +" </center>"
        );

        var total5 = api
            .column(14,{ page: 'current'})
            .data()
            .reduce(function (a, b) {
                return floatVal(a) + floatVal(b);
            }, 0);

             
        $(api.column(14).footer()).append(
            '<center class="center-class" style="font-size: 10px;">' + total5.toFixed(2) +" </center>"
        );

       
       
    },
    
});


//var table = $('#grid').DataTable({
//    ajax: {
//        url: Routing.generate('tr_operation_list'), // json datasource
//        type: "get",
//    },
//    "deferRender": true,
//    "stateSave": false,
//    "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
//
////    "columns": [
////        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////       
////
////
////    ],
//    "order": [[0, "desc"]],
//    dom: 'f<"html5buttons btn-group"B>lTgtip',
//    buttons: [
//        'columnsToggle',
//        {
//            text: 'Restaurer',
//            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
//            action: function (e, dt, node, config) {
//                table.state.clear();
//                window.location.reload();
//            },
//
//        },
//    ],
//    "language": {
//        "url": Routing.generate('datatables_langue'),
//        "processing": true
//    },
//    fixedHeader: true,
//    
//});

table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3,4,5,6,7,8,9,10,11,12,15,16,17], []);
//    CustomSearchDatatable.CustomSearchDate(api, [3,10,12], []);
//    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,8,7,15], []);
    
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('tr_operation_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});






jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succees", $(this).text(), { timeOut: 4000 })
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
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), { timeOut: 4000 })
}

/*$('.new').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_operation_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
               // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                var url = Routing.generate('tr_operation_index');
                window.location.href = url;
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});*/


$("#create_operation").click(function (e) {
    var form_name = $(".form").attr("name");


 

//var params = $('.form').serializeArray();
    // var dta = new FormData($("#t_achatdemandeinternecab")[0]);


    var formData = new FormData();
    var params = $('.form').serializeArray();

    $.each(params, function (i, val) {
        formData.append(val.name, val.value);
        //  console.log(val.name);

    });

    /*const data = JSON.stringify(formDataDetail)
    formData.append('detail', data);*/

  

    var selector = $(".form");
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_new"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
               // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                var url = Routing.generate('tr_operation_index');
                window.location.href = url;
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});



$("#mouvement_operation").click(function (e) {
    var form_name = $(".form").attr("name");


 

//var params = $('.form').serializeArray();
    // var dta = new FormData($("#t_achatdemandeinternecab")[0]);


    var formData = new FormData();
    var params = $('.form').serializeArray();

    $.each(params, function (i, val) {
        formData.append(val.name, val.value);
        //  console.log(val.name);

    });


    /*const data = JSON.stringify(formDataDetail)
    formData.append('detail', data);*/

  

    var selector = $(".form");
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_mouvement"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
         //   alert(result.code);
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code==200) {
            
               // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                var url = Routing.generate('tr_operation_index');
                window.location.href = url;
                ///location.reload();
            }
            else if (result.code==403) {
                // alert( result.message.data);
                $('.errors-list').remove();
               // toastr.warning(result.message.text, result.message.title, {timeOut: 4000});
                selector.find("#form_destination").parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +result.message.text + "</span></span></span>"));
               // form[destination]
                 ///location.reload();
             }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});


$('.edit').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
      //  url: Routing.generate('tr_charge_edit'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});




$('body').on('submit', '.paiementF', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = $("#_id").val();
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_operation_payment',{'id':id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code == 200) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});



$('body').on('submit', '.paiementAchat', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = $("#_id").val();
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_operation_payment_achat',{'id':id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code == 200) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});




$('body').on('submit', '.paiementMouvement', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = $("#_id").val();
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_operation_payment_mouvement',{'id':id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code == 200) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});



$('body').on('submit', '.paiementVente', function (e) {
  //  alert();
  e.preventDefault();

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    console.log(dta)
    // return;

    var id = $("#_id").val();
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_operation_payment_vente',{'id':id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code == 200) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
});

$('body').on('change', '.paiement', function (e) {
    //alert($(this).val());
    //console.log($(this).select2('data'))
    if ($(this).val() == 3) {
        $('.bloc_cheque').show();
        e.stopPropagation();
        
    } else {
        $('.bloc_cheque').hide();
        e.stopPropagation();
    }
   // $("#valid").css("display", "block");

});


$('body').on('change', '.form_piece', function (e) {
  //  alert($(this).val())
    if ($(this).val() == 30) {
        $('#form_destination').prop('disabled', true );
    } else {
        $('#form_destination').prop('disabled', false);
        
    }
   // 

});



$("body").on("click", ".imp_operation", function (e) {
   
    var id = $(this).attr("data-id");

    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_impression_achat", {id: id}),
        success: function (result) {
            $("#ModalDocumentDynamiqueImpression .bod_impression").html(result);
            $('.sel2').select2()
            $("#ModalDocumentDynamiqueImpression").modal("show");
          
           
        },
    });

    e.preventDefault();
});



$('body').on('submit', '.impression_operation', function (e) {
  //    alert();
      var form_name = $(this).attr('name');
      var dta = new FormData(this);
      var selector = $(this);
      var id = $("#_id").val();
      // Create a new instance of ladda for the specified button
      var l = Ladda.create(document.activeElement);
  
  // Start loading
      l.start();
      
      $.ajax({ 
          type: 'POST',
          url: Routing.generate('tr_operation_impression_achat',{'id':id}),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
              l.stop();
              if (result.code == 403) {
                  toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                  });
              }
              if (result.errors) {
                
                  ShowFormErrors(selector, form_name, result.errors);
              } else if (result.empty) {
                 
                  toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
              } else if (result.code == 200) {
              
             //   alert(result.message.route);

                  var url = Routing.generate(result.message.route, {id: result.message.data});
                  window.open(url);

                //  window.location.href = url;
                 // location.reload();
              }
          },
          error: function (jqXHR, textStatus, errorThrown) {
              l.stop();
              toastr.error("Erreur", errorThrown, {timeOut: 4000})
              
            
          }
      });
      e.preventDefault();
  });


$("body").on('change', ".paiementAchat #tr_transaction_modepaiement", function(){
    var id = $(this).val();
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_getcompte", {id: id}),
        success: function (result) {
            // console.log(result);
            $(".paiementAchat .compte_transaction").html(result).select2();
        },
    });
   
})
$("body").on("click", ".tr_operation_apply_transitions", function (e) {
  //alert();
  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");

 
 
  if(transition == 'achat_apres_demande_paiement_generer'){
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_payment_achat", {id: id}),
        success: function (result) {
            $("#ModalDocumentDynamique .bod").html(result);
            $('.sel2').select2()
            $("#ModalDocumentDynamique").modal("show");
          
           
        },
    });
  }
  else if (transition == 'vente_apres_valider_generer'){
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_payment_vente", {id: id}),
        success: function (result) {
            $("#ModalDocumentDynamique .bod").html(result);
            $('.sel2').select2()
            $("#ModalDocumentDynamique").modal("show");
          
           
        },
    });
  }
  else if (transition == 'mouvement_apres_valider_generer'){
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_payment_mouvement", {id: id}),
        success: function (result) {
            $("#ModalDocumentDynamique .bod").html(result);
            $('.sel2').select2()
            $("#ModalDocumentDynamique").modal("show");
          
           
        },
    });
  }
  else{
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
                            "Voulez vous vraiment passer a l'etat '" +
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
                            url: Routing.generate("tr_operation_apply_transitions", {
                                id: id,
                            }),
                            success: function (result) {
                                if (result.code == 200) {
                                    toastr.success(result.message.text, result.message.title, {
                                        timeOut: 4000,
                                    });
                                    location.reload();
                                }
                                if (result.code == 201) {
                                    toastr.success(result.message.text, result.message.title, {
                                        timeOut: 4000,
                                    });
                                  
                                    location.reload();
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
        toastr.warning("operation non renseigne ", "warning", {timeOut: 4000});
    }
  }

  e.preventDefault();
});


$("#_delete").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");

  var obj = {
    route: "tr_operation_delete",
    redirection: "tr_operation_index",
    token: token,
    id: id,
  };
  // alert();
  deleteCab(obj);

  e.preventDefault();
});

 





var tableShow = $("#datatable-show2").DataTable({
    // scrollY: "200px",
    // scrollCollapse: true,
    paging: false,
    autoWidth: false,
    searching: false // remove search bar
});



$('body').on('change','#tr_transaction_operations',function(e){
    //alert();
    console.log($(this).val());
    $("#tr_transaction_montant").prop('disabled', true);
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_payment",{'id':$("#_id").val()}),
        data: {"operations" : $(this).val(),'change':true},
        success: function (result) {
            //alert(result)
            $("#tr_transaction_montant").val(result.message.montant);
            $("#tr_transaction_montant").prop('disabled', false);
            
        },
    });
})


  $(".sel2").select2();



  $(".action_head").click(function () {
    console.log($(".action").filter(":checked").length);
    $(".action ,.action_head").prop("checked", $(this).prop("checked"));
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
  $("body").on("click", ".action", function () {
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
  $("body").on("click", ".scolumn_0", function () {
    $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
  });
$("body").on("change", ".list_actions", function () {
    //alert()
    
    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
      _array_ids.push($(this).val());
    });
  
    // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');
  
    console.log($(this).val());
  
    
    if ($(this).val() == "generer_transaction" && _array_ids != null) {
      //alert()
      $.ajax({
          type: "POST",
          url: Routing.generate("general_operation_generer_transaction", {id: 0}),
          data: {_array_ids},
          success: function (result) {
              if (result.code == 403) {
                  $("#MyModal").modal("hide");
                  toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                  });
              } else {
                  $(".bod").html(result).hide();
                  $("#ModalDocumentDynamique").modal("show");
                  $(".sel2").select2();
                  $(".parvenue").select2();
                    if($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1){
                        $('.dateDoc,.refDoc').hide().removeClass('classShow'); 
                    }else{
                        $('.dateDoc,.refDoc').show().addClass('classShow');  
                    }

                    $('.parvenue').on('select2:selecting', function(e) {
                        //alert()
                        if(e.params.args.data.text.indexOf('non parvenue') !== -1){
                        $('.dateDoc,.refDoc').hide().removeClass('classShow'); 
                        }else{
                            $('.dateDoc,.refDoc').show().addClass('classShow');  
                        }
                    });
                  setTimeout(function () {
                      $(".spr").hide();
                      $(".bod").fadeIn();
                  }, 600);
              }
          },
      });
  }
  
  });

  $("body").on("submit", ".save_form_transaction", function (e) {
    //alert();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
      _array_ids.push($(this).val());
    });
    dta.append('_array_ids',_array_ids);
    //var id = $('#test').data("factureId");
  
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector(".my-button2"));
  
    // Start loading
    l.start();
  
    $.ajax({
      type: "POST",
      url: Routing.generate("general_operation_generer_transaction"),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
        if (result.code == 403) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        }
        if (result.errors) {
          //  console.log(result.errors);
          l.stop();
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
  
          // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
        } else if (result.message.data) {
          //table2.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          //$("#ModalDocumentDynamique").modal("hide");
          //l.stop();
  
          /*var url = Routing.generate("t_UaTFacturefrscab_update_acompte", {
              id: result.data,
          });
          window.location.href = url;*/
          window.location.reload();
  
          //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
        }
        
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
    e.preventDefault();
  });

$(".save_eci").submit(function (e) {
    e.preventDefault();
    var selector = $(this);
    var formData = new FormData(selector[0]);
    

    /*const data = JSON.stringify(formDataDetail)
    formData.append('detail', data);*/

  

    var l = Ladda.create(document.activeElement);
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_new"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            
           
            $('#ajouter').modal("hide");
            table.ajax.reload();
            l.stop();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
});
let eci_id;
let montant_final;
let code_facture = null;
let operations = [];
$("body").on('click', ".info_lettrage", function(e){
    e.preventDefault();
    $("#lettrage").modal("show");
    var id = $(this).attr("data-id");
    eci_id = id;
    var formData = new FormData();

    formData.append("id", id);
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_details_facture"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
                $("#lettrage .spr1").hide();
                $("#lettrage .bod1 #montant").val(result.data.montant);
                $("#lettrage .bod1").show();
                $("#lettrage .my-button").prop("disabled", true);
                ///location.reload();
                $(".facture_table_lettre .data").empty()
                operations = [];
                montant_final = 0;

                if(result.data.operations.length > 0) {
                    result.data.operations.map(function(e) {
                        $(".facture_table_lettre .data").append(`
                            <tr>
                                <td>${e.code}</td>
                                <td>${e.client}</td>
                                <td class='montant_by_facture'>${e.montant}</td>
                                <td></td>
                            </tr>
                        `);
                        montant_final += +e.montant
                    });
                }
                
                $("#lettrage .bod1 #reste").val((result.data.montant - montant_final).toFixed(2));
                $('.montant_final').text(montant_final.toFixed(2));
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})

$("body").on('click', ".add_facture", function(e){
    var icon = $(this);
    var code = $("#lettrage .bod1 #facture").val();
    var error = 0;
    $(".facture_table_lettre .data tr").map(function(e) {
        if($(this).children('td:first').text() == code.trim()){
            alert("Operation déja existe")
            error = 1;
        }
    })
    if(error === 1) {
        return;
    }
    $("#lettrage .my-button").prop("disabled", true);
    icon.removeClass("fa-plus add_facture").addClass("fa-spinner fa-spin");
    var formData = new FormData();
    formData.append("code", code);
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_check_facture"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if(result.data == false) {
                $("#lettrage .bod1 #facture").css("border-color", "red");
                icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
            } else {
                $("#lettrage .bod1 #facture").css("border-color", "green");
                operations.push(code);
                $(".facture_table_lettre .data").append(`
                    <tr>
                        <td>${result.data.code}</td>
                        <td>${result.data.client}</td>
                        <td class='montant_by_facture'>${result.data.montant}</td>
                        <td><i class='fa fa-trash text-danger remove_this_facture'></i></td>
                    </tr>
                `)
                
                code_facture = result.data.code;
                
                montant_final += result.data.montant
                $('.montant_final').text(montant_final.toFixed(2));
                var reste = $("#lettrage .bod1 #montant").val() - montant_final
                console.log(reste);
                $("#lettrage .bod1 #reste").val(reste.toFixed(2));
                if(reste >= 0) {
                    $("#lettrage .my-button").prop("disabled", false);
                } else {
                    $("#lettrage .my-button").prop("disabled", true);

                }
                icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
                // $(".facture_area").hide();
                $("#lettrage .bod1 #facture").val("");
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
            icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
        },
    });
});
$('body').on('click', ".remove_this_facture", function(){
    var trElement = $(this).parent().parent();
    montant_final -= trElement.find('.montant_by_facture').text()
    $('.montant_final').text(montant_final.toFixed(2));
    var reste = $("#lettrage .bod1 #montant").val() - montant_final
    $("#lettrage .bod1 #reste").val(reste.toFixed(2));
    if(reste >= 0) {
        $("#lettrage .my-button").prop("disabled", false);
    } else {
        $("#lettrage .my-button").prop("disabled", true);
    }
    var code = trElement.children('td:first').text();
    operations.splice(
        operations.findIndex(operation => operation == code), 1
    )
    trElement.remove()
    $(".facture_area").show();
})
$("body").on('click', ".save_lettrage", function(e){
    var formData = new FormData();
    formData.append("operations", JSON.stringify(operations));
    formData.append("id", eci_id);
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_lettrage_persist"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            table.ajax.reload()
            $("#lettrage").modal("hide");
            operations = [];
            $(".facture_table_lettre .data").empty()

        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})

$(".dossier_save").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });
    if(_array_ids.length == 0) {
        toastr.warning("Veuillez selection des operation ECI", "Warning");
        return;
    }
    formData.append("arrayIds", JSON.stringify(_array_ids));
    var l = Ladda.create(document.querySelector(".transfer_button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_transfer"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            table.ajax.reload()
            $("#transfer").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})



$('#code_factures').select2({
    minimumInputLength: 3,  // required enter 3 characters or more
    allowClear: true,
    placeholder: 'code_factures',
    language: "fr",
    ajax: {
        dataType: 'json',
        url: Routing.generate("tr_operation_codefacture"),  
        //    delay: 5,  // ini bebas mau di pake atau tidak
        data: function(params) {
            return {
            search: params.term
            }
        },
        processResults: function (data, page) {
            
            return {
                results: data
            };
     },
   }
});

// alert('test');

$(".Remboursement_form").on('submit', function(e) {


    e.preventDefault();
    

    var formData = new FormData(this);
    var l = Ladda.create(document.querySelector("#remboursement .remboursement_button"));


    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_remboursement"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {

            if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }else{

                table.ajax.reload()
                $("#remboursement").modal("hide");
                $(".Remboursement_form").trigger("reset");

            }
            $("#code_factures").select2("val", "");
            l.stop();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})




$(".dossier_save_interne").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    var _array_ids = [];
    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });
    if(_array_ids.length == 0) {
        toastr.warning("Veuillez selection des operation ECI", "Warning");
        return;
    }
    formData.append("arrayIds", JSON.stringify(_array_ids));
    var l = Ladda.create(document.querySelector("#transfer_interne .transfer_button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_transfer_interne"),
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            table.ajax.reload()
            $("#transfer_interne").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})
$("body").on('click', '.compte_paiment', function(e) {
    
    $("body #paiementSpecifique").modal("show")
})
$("body").on('click', '.save_type_paiement', function(e) {
    
    $("body #paiementSpecifique").modal("hide")
})
$("body").on('change', '.type_paiement', function(e) {
    if($(this).val() == "caisse"){
        
        $('body .paiement').val("9").trigger('change.select2');
    } else if($(this).val() == "carte"){
        $('body .paiement').val("10").trigger('change.select2');
        // $('body .paiement').trigger('change.select2').trigger("change");
    } else if($(this).val() == "virement_devise"){
        $('body .paiement').val("11").trigger('change.select2');
    } else if($(this).val() == "carte_devise"){
        $('body .paiement').val("12").trigger('change.select2');
    } else {
        $('body .paiement').val("2").trigger('change.select2');
        // $('body .paiement').trigger('change.select2').trigger("change");
    }
    $('body .paiement').trigger("change");
})
$("body").on('click', '.avance', function(e) {
    let id = $(this).attr('data-id');
    // alert(id);
    if($(this).is(':checked')) {
        $(".avance_montant").show();
        $.ajax({
            type: "GET",
            url: Routing.generate("get_operation_avance", {"operation": id}),
            success: function (result) {
                // l.stop();
                $("body .avance_montant").val(result.montant)
                console.log(result);  
            },
            error: function (jqXHR, textStatus, errorThrown) {
                l.stop();
                toastr.error("Erreur", errorThrown, {timeOut: 4000});
            },
        });
        return;
    }
    $(".avance_montant").hide();
})

  