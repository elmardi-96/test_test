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

let transactions = [];

var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("tr_transaction_list2"), // json datasource
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
    order: [
        [0, "desc"]
    ],
    columns: [
        { orderable: true, name: 'tr.id', width: "5%" },
        { orderable: true, name: 'tr.code' },
        { orderable: true, name: 'tr.ref_doc_asso' },
        { orderable: true, name: "DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y')" },
        { orderable: true, name: "tr.num_cheque" },

        { orderable: true, name: "DATE_FORMAT(tr.date_echeance,'%d/%m/%Y')" },
        { orderable: true, name: "DATE_FORMAT(tr.date,'%d/%m/%Y')" },

        { orderable: true, name: 'mdp.designation' },

        { orderable: true, name: 'frs.societe' },
        { orderable: true, name: 'cl.societe' },
        { orderable: true, name: "CONCAT (emp.nom,' ',emp.prenom)" },
        { orderable: true, name: "com.designation" },

        { orderable: true, name: 'tr.`montant`', className: 'reg-back' },
        { orderable: true, name: 'pie.code', className: 'reg-back' },
        { orderable: true, name: "DATE_FORMAT(tr.created ,'%Y')", className: 'reg-back' },
        { orderable: true, name: 'is_valider', className: 'reg-back' },
        { orderable: true, name: 'parvenue.v' },
        { orderable: true, name: 'tr.code' },
        { orderable: true, width: "10%" },



    ],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        "columnsToggle",
        {
            text: "Restaurer",
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function(e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },
        },
        // {
        //     extend: "excel",
        //     exportOptions: {
        //         columns: ":visible",
        //         rows: ":visible",
        //         format: {
        //             body: function(data, row, column, node) {
        //                 data = $('<p>' + data + '</p>').text();
        //                 return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
        //             }
        //         }
        //     },
        // },
    ],
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
    },
    // fixedHeader: true,
    footerCallback: function(row, data, start, end, display) {
        $(".center-class").remove();
        var api = this.api(),
            data;

        // Remove the formatting to get integer data for summation
        var intVal = function(i) {
            return typeof i === "string" ?
                i.replace(/[\$,]/g, "") * 1 :
                typeof i === "number" ?
                i :
                0;
        };
        var floatVal = function(i) {
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
                alert("Unhandled type for totals [" + (typeof i) + "]");
                return 0
            }
        };

        var total4 = api
            .column(12, { page: 'current' })
            .data()
            .reduce(function(a, b) {
                return floatVal(a) + floatVal(b);
            }, 0);


        $(api.column(12).footer()).append(
            '<center class="center-class" style="font-size: 10px;">' + total4.toFixed(2) + " </center>"
        );

        /*  var allpage = api
         .column(9)
         .data()
         .reduce(function (a, b) {
             return intVal(a) + intVal(b);
         }, 0);

         var total5 = api
             .column(9,{ page: 'current'})
             .data()
             .reduce(function (a, b) {
                 return intVal(a) + intVal(b);
             }, 0);
         $(api.column(9).footer()).append(
             '<center class="center-class" style="font-size: 10px;"> ' + total5.toFixed(2)*-1 + "</center>"
         ); */
        // Update footer

    },

});
/*var table = $('#grid').DataTable({

    ajax: {
        url: Routing.generate('tr_transaction_list'), // json datasource
        type: "get",
    },
    
    "deferRender": true,
    "stateSave": false,
    "order": [[0, "desc"]],
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],

//    "columns": [
//        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//    ],
   
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
        {
            extend: "excel",
            exportOptions: {
              columns: ":visible",
              rows: ":visible",
            },
          },
    ],
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    },
    fixedHeader: true,
    "scrollY": "350px",
    "scrollCollapse": true,
    "paging": false,
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

        var total4 = api
            .column(12,{ page: 'current'})
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);

            var totalall = api
            .column(12)
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);   
        $(api.column(12).footer()).append(
            '<center class="center-class" style="font-size: 10px;">' + total4.toFixed(2) +" </center>"
           
        );

       /*  var allpage = api
        .column(9)
        .data()
        .reduce(function (a, b) {
            return intVal(a) + intVal(b);
        }, 0);

        var total5 = api
            .column(9,{ page: 'current'})
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        $(api.column(9).footer()).append(
            '<center class="center-class" style="font-size: 10px;"> ' + total5.toFixed(2)*-1 + "</center>"
        ); * /
        // Update footer
       
    },
    initComplete: function () {
        var api = this.api();
    
        api.$("td").click(function () {
            //alert()
          var str = this.innerHTML.toLowerCase();
          var n = str.search("cd_op");
          
          //console.log($(str)[0].nodeName);
          
          if (n == -1 && $(str).length == 0 ) {
            api.search(this.innerHTML).draw();
          }
        });
      },
});*/


$('body').on('change', '.select2_demo_4', function() {
    //alert($(this).val())
    $('.bc').html('')
    $('.bcN').html('')
        /*var dots = window.setInterval( function() {
            var wait = document.getElementById("wait");
            var wait2 = document.getElementById("wait2");
            if ( wait.innerHTML.length > 3 ) 
                wait.innerHTML = "";
            else 
                wait.innerHTML += ".";
            
            if ( wait2.innerHTML.length > 3 ) 
                wait2.innerHTML = "";
            else 
                wait2.innerHTML += "."; 
         } , 400);*/
    if ($(this).val() != "null") {
        table.columns(11).search($(this).val()).draw();
        //alert($(this).val())
        $.ajax({
            type: 'POST',
            url: Routing.generate('tr_transaction_somme_montant'),
            data: { 'data': $(this).val() },
            success: function(result) {
                console.log(result);

                $('.bc').text(result.r.bc);
                $('.bcN').text(result.r.bcNa);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });

    } else {
        table.columns(11).search('').draw();
        $.ajax({
            type: 'POST',
            url: Routing.generate('tr_transaction_somme_montant'),
            data: { 'data': $(this).val() },
            success: function(result) {
                console.log(result);

                $('.bc').text(result.r.bc);
                $('.bcN').text(result.r.bcNa);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
    }
})

$.ajax({
    type: 'POST',
    url: Routing.generate('tr_transaction_somme_montant'),
    processData: false,
    contentType: false,
    success: function(result) {
        console.log(result);

        $('.bc').text(result.r.bc);
        $('.bcN').text(result.r.bcNa);

    },
    error: function(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 })
    }
});
table.on("init.dt", function(e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16], []);
    // CustomSearchDatatable.CustomSearchDate(api, [3,5,6], []);
    CustomSearchDatatable.CustomSearchSelect(api, [], []);
    // CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});


/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function() {
    var url = Routing.generate('tr_transaction_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});


$("#allactions").change(function(e) {
    // alert();
    //$('#allactions').click(function (e) {
    if (this.checked) {
        $(".action").prop("checked", true);
        var form_name = $('#action_test').attr('name');
        var dta = new FormData(action_test);
        var t = dta.get("_action[]");

        if (t) {
            $("#valid").css("display", "block");
        }


    } else {
        $(".action").prop("checked", false);
        $("#valid").css("display", "none");
    }

    e.preventDefault();
});

$('body').on('change', '.action', function() {

    // $("#valid").css("display", "block");

});



$('body').on('submit', '.transaction_valider2', function(e) {
    //    alert('test');
    e.preventDefault();
    if(transactions.length == 0) {
        toastr.warning("Veuillez ajouter une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
        return;
    }
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    dta.append('transactions', JSON.stringify(transactions))
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('tr_transaction_Generer_multiple'),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            l.stop();


            if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code == 200) {

                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                location.reload();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })


        }
    });
    
});










$("#valid").change(function(e) {
    //  alert($(this).val());
    //$("form").submit();
    if ($(this).val() == 1) {

        var form_name = $('#action_test').attr('name');
        var dta = new FormData(action_test);
        //var dta = $('#action_test').serialize()

        var t = dta.get("_action[]");
        //alert( t);
        var selector = $(this).attr('class').split(' ')[0];
        // console.log(e.type);
        // var t=1;
        if (t) {
            $.ajax({
                type: 'POST',
                url: Routing.generate('tr_transaction_valider_multiple'),
                data: dta,
                processData: false,
                contentType: false,
                success: function(result) {

                    //   table.ajax.reload();
                    // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

                    $(".bod_valider").html(result).hide();

                    $("#ModalDocumentDynamiqueValider").modal("show");

                    setTimeout(function() {
                        $(".spr_valider").hide();
                        $(".bod_valider").fadeIn();
                    }, 600);

                    $("#valid").css("display", "none");
                    $(".action").prop("checked", false);
                    $("#allactions").prop("checked", false);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                }
            });
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
        }

    } else if ($(this).val() == 2) {
        var form_name = $('#action_test').attr('name');
        var dta = new FormData(action_test);
        //var dta = $('#action_test').serialize();

        var t = dta.get("_action[]");
        //  alert( t);
        var selector = $(this).attr('class').split(' ')[0];
        alert(selector);
        // console.log(e.type);
        // var t=1;
        if (t) {
            $.ajax({
                type: 'POST',
                url: Routing.generate('tr_transaction_Generer_multiple'),
                data: dta,
                processData: false,
                contentType: false,
                success: function(result) {

                    //   table.ajax.reload();
                    // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

                    if (result.hasOwnProperty('message')) {
                        if (result.message.title === "err") {
                            toastr.warning("Warning", result.message.text, { timeOut: 4000 });
                        }
                    } else {
                        $(".bod_valider").html(result).hide();

                        $("#ModalDocumentDynamiqueValider").modal("show");

                        setTimeout(function() {
                            $(".spr_valider").hide();
                            $(".bod_valider").fadeIn();
                        }, 600);

                        $("#valid").css("display", "none");
                        $(".action").prop("checked", false);
                        $("#allactions").prop("checked", false);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    toastr.error("Erreur", errorThrown, { timeOut: 4000 })
                }
            });
        } else {
            toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
        }

    }



    e.preventDefault();


});






jQuery.each($('.toastr-msg'), function(i, val) {
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
jQuery.each($('.form-errors li'), function(i, val) {
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), { timeOut: 4000 })
}



$('.edit').on('submit', '.form', function(e) {

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
        success: function(result) {
            l.stop();

            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors, null, true);
            } else if (result.empty) {

                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
            } else if (result.code = 200) {
                //  alert(result.data);
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                    //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                    //window.location.href = url;
                location.reload();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })


        }
    });
    e.preventDefault();
});


$('body').on('change', '.paiement', function(e) {
    //alert($(this).val());
    //console.log($(this).select2('data'))
    if ($(this).val() == 2) {
        $('.bloc_cheque').show();
        e.stopPropagation();

    } else {
        $('.bloc_cheque').hide();
        e.stopPropagation();
    }
    // $("#valid").css("display", "block");

});


$("#_delete").click(function(e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");

    var obj = {
        route: "tr_transaction_delete",
        redirection: "tr_transaction_index",
        token: token,
        id: id,
    };
    // alert();
    deleteCab(obj);

    e.preventDefault();
});

$("#grid tbody").on("click", ".info_op", function(e) {
    //alert();
    var id = $(this).closest("tr").attr("id");


    $.ajax({
        type: "POST",
        url: Routing.generate("tr_transaction_info", { id: id }),
        success: function(result) {
            $(".bod1").html(result).hide();

            $("#ModalDocumentDynamique1").modal("show");

            setTimeout(function() {
                $(".spr1").hide();
                $(".bod1").fadeIn();
            }, 600);
        },
    });



    e.preventDefault();


});



$('body').on('click', '.imprime_document', function(e) {
    e.preventDefault();
    if($(this).attr("data-valide") == 0)  {
        toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {timeOut: 4000})
        return
    }
    window.open($(this).attr('href'), '_blank');
});

$("body").on("click", ".imp_operation", function (e) {

    // alert('ziko');
    if($(this).attr("data-valide") == 0 && $(this).attr("data-info") != "externe")  {
        toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {timeOut: 4000})
        return;
    }
   
    var id = $(this).attr("data-id");
    let multiple = 0;
    if($(this).attr('data-multiple') == 1) {
        multiple = 1;
    }

    $.ajax({
        type: "POST",
        url: Routing.generate("tr_operation_impression_achat", { id, multiple}),
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
    console.log(dta);
    var multiple = $("#multiple").val();
  // Start loading
      l.start();
      
      $.ajax({ 
          type: 'POST',
          url: Routing.generate('tr_operation_impression_achat',{'id':id, 'multiple':multiple}),
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


  let modepaiement = [9,10,11,12];
  
  
  $("body").on('keypress', '#code_tr', function(e) {
    let code = $(this).val();
    if(e.which == 13)  {
        if(code == "") {
            toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
            return;
        }
      
        $.ajax({
            type: "GET",
            url: Routing.generate("tr_transaction_Generer_code", {"code": code.trim()}),
            processData: false,
            contentType: false,
            success: function (result) {
                if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });
                    
                    return;
                }
                var index = transactions.findIndex((t) => t == result.id);
                if(index == "-1") {
                    
                    console.log(result);
                    if(modepaiement.includes(result.modepaiement) ) {
                        if(transactions.length > 0) {
                            toastr.warning("Warning", "vous n'avez pas le droit de générer plusieurs virements étrangers!", {timeOut: 4000});
                            return;
                        }
                        $("#code_tr").prop('disabled', true);
                    }
                    $(".transactionbody").prepend(`
                        <tr id="${result.id}">
                            <td>${result.id}</td>
                            <td>${result.piece}</td>
                            <td>${result.code}</td>
                            <td>${result.partenaire}</td>
                            <td class="text-right">${result.montant}</td>
                            <td><i class="fa fa-close text-danger remove_transaction"  /></td>
                        </tr>
                    `)
                    transactions.push(result.id);
                    $("#code_tr").val("");
                    console.log(transactions);
                } else {
                    toastr.warning("Warning", "Déja existe!", {timeOut: 4000});
                    return;
                }                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
            },
        });
    }
  
})
$('body').on('click', '.close', function(e) {
    transactions = [];
});


$("body").on('click', '.remove_transaction', function(e) {
    let tr = $(this).parents('tr')
    let id = tr.attr("id");
    var index = transactions.findIndex((t) => t == id);
    transactions.splice(index, 1)  
    $("#code_tr").prop('disabled', false);
    tr.remove();
})


$("#ajouter1").on('click', function() {
    // var dta = new FormData(action_test);
    
    // if (transactions.length > 0) {
        var l = Ladda.create(document.activeElement);
        // Start loading
        l.start();
        $.ajax({
            type: 'POST',
            url: Routing.generate('tr_transaction_Generer_multiple'),
            // data: dta,
            processData: false,
            contentType: false,
            success: function(result) {
    
                //   table.ajax.reload();
                // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
    
                if (result.hasOwnProperty('message')) {
                    if (result.message.title === "err") {
                        toastr.warning("Warning", result.message.text, { timeOut: 4000 });
                    }
                } else {
                    $(".transactionbody").empty();

                    $(".bod_valider").html(result).hide();
    
                    $("#ModalDocumentDynamiqueValider").modal("show");
    
                    setTimeout(function() {
                        $(".spr_valider").hide();
                        $(".bod_valider").fadeIn();
                    }, 600);
    
                    $("#valid").css("display", "none");
                    $(".action").prop("checked", false);
                    $("#allactions").prop("checked", false);
                }
                l.stop();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                l.stop();
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
    // } else {
    //     toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
    // }

})

$(document).ready(function () {
    $('#divers_datatble').DataTable({
        "searching": false
    });
    
});

$("#ajoute_divers").on('click', function(e) {

        // Empêcher l'envoi du formulaire
        e.preventDefault();
        
        // Disable the button
      $(this).prop('disabled', true);
  
        // Vérifier si les champs de formulaire ne sont pas vides
        var error = false;
        if ($('#Article_id').val() == '') {
            $('#Article_id').addClass('is-invalid');
            error = true;
        }
        if ($('input[name="Montant"]').val() == '') {
            $('input[name="Montant"]').addClass('is-invalid');
            error = true;
        }
      
        if ($('input[name="Observation"]').val() == '') {
            $('input[name="Observation"]').addClass('is-invalid');
            error = true;
        }
        if ($('input[name="Date"]').val() == '') {
            $('input[name="Date"]').addClass('is-invalid');
            error = true;
        }
  
        if (error) {
            // Afficher une alerte si un champ est vide
            toastr.warning('Veuillez remplir tous les champs obligatoires', 'warning', {
              timeOut: 4000,
          });
          $('#ajoute_divers').prop('disabled', false);
  
        } else {
            // Soumettre le formulaire avec AJAX
            var articleId = $('#Article_id').val().trim();
            var montant = $('#Montant').val();
            var tva = $('#TVA').val();
            var observation = $('#Observation').val();
            var date = $('#Date').val();
            $.ajax({
                type: 'POST',
                url: Routing.generate("divers_operation_insert"),
                data: {
                  articleId: articleId,
                  montant:montant,
                  observation: observation,
                  tva:tva,
                  date:date
                },
  
                success: function(result) {
                   // Enable the button
                   $('#ajoute_divers').prop('disabled', false);
                  if (result.code == 200) {
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                    })
                    // Recharger la page
                    location.reload();
                  }else if(result.code == 500){
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                      })
  
                  }else if(result.code == 501){
                    toastr.error(result.message.text, result.message.title, {
                      timeOut: 4000,
                      })
                  }
                  
           
                  
                  // }
                },
                error: function() {
                    // Faire quelque chose en cas d'erreur
                    toastr.error('Erreur lors de la soumission du formulaire', 'error', {
                      timeOut: 4000,
                  });
                  
              // Enable the button
              $('#ajoute_divers').prop('disabled', false);
                }
            });
        }
    });
 