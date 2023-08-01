
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

//var l = Ladda.create(document.querySelector('.my-button'));


var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("eci_list"), // json datasource
        type: "get",
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
        {orderable: true, name: 'ope.id', width: "5%"},
        {orderable: true, name: 'ope.code'},
        {orderable: true, name: 'piece_designation'},
        {orderable: true, name: 'designation'},
        {orderable: true, name: "code_facture"},
        
        {orderable: true, name: 'ope.montant'},
        {orderable: true, name: 'maj'},
        {orderable: true, name: 'lettrage'},
        // {orderable: false},
        
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

        
        
    },
    
});

table.column(7).visible(false);

table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 2,3,4, 5,9], []);
    // CustomSearchDatatable.CustomSearchDate(api, [4, 8,10], []);
    // CustomSearchDatatable.CustomSearchSelect(api, [3, 6, 7,], []);
    //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



$("select").select2()






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
                montant_final = 0;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})

$("body").on('click', ".add_facture", function(e){
    $("#lettrage .my-button").prop("disabled", true);
    var icon = $(this);
    icon.removeClass("fa-plus add_facture").addClass("fa-spinner fa-spin");
    var code = $("#lettrage .bod1 #facture").val();
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
                $(".facture_table_lettre .data").append(`
                    <tr>
                        <td class='code_operation'>${result.data.code}</td>
                        <td>${result.data.client}</td>
                        <td class='montant_by_facture'>${result.data.montant}</td>
                        <td><i class='fa fa-trash text-danger remove_this_facture'></i></td>
                    </tr>
                `)
                
                operations.push(result.data.code);
                console.log(operations)
                
                montant_final += result.data.montant
                $('.montant_final').text(montant_final.toFixed(2));
                var reste = $("#lettrage .bod1 #montant").val() - montant_final
                $("#lettrage .bod1 #reste").val(reste.toFixed(2));
                if(reste == 0) {
                    $("#lettrage .my-button").prop("disabled", false);
                    $(".facture_area").hide();
                }
                icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
                $("#lettrage .bod1 #facture").val("");
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})
// alert('test');
$(".client").change(function() {
    var  test =  $("input[name='client']:checked").val();
    if(this.checked) {

       table.column(0).search(this.id).draw();
       if(this.id == 'tout'){
            
            table.column(6).visible(false);
            table.column(7).visible(true);
            
       }else{

            table.column(7).visible(false);
            table.column(6).visible(true);

       }

        // if()
    }
});

var ope_id = '';

$("body").on('click', ".maj", function(e){
    ope_id = this.id;
});


$(".maj_form").on('submit', function(e) {


    e.preventDefault();
    var formData = new FormData(this);
        formData.append("id", ope_id);
    var l = Ladda.create(document.querySelector("#maj_client .maj_button"));

    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("eci_maj_client"),
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
                $("#maj_client").modal("hide");

            }
            l.stop();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})


$("body").on('click', ".close_lettrage", function(e){
    $('.facture_table_lettre tbody').html('');
    $('.montant_final').text('0');
    $('#reste').val('0');
    operations = [];
});



$('body').on('click', ".remove_this_facture", function(){
    var trElement = $(this).parent().parent();
    var code = trElement.find(".code_operation").text();
    montant_final -= trElement.find('.montant_by_facture').text()
    $('.montant_final').text(montant_final.toFixed(2));
    var reste = $("#lettrage .bod1 #montant").val() - montant_final
    $("#lettrage .bod1 #reste").val(reste.toFixed(2));
    if(reste == 0) {
        $("#lettrage .my-button").prop("disabled", false);
    }

    var index = operations.findIndex((e) => e == code);
    operations.splice(index, 1);
    console.log(operations)
    trElement.remove()
    $(".facture_area").show();
})
$("body").on('click', ".save_lettrage", function(e){
    var formData = new FormData();
    formData.append("facture", code_facture);
    formData.append("id", eci_id);
    formData.append("operations", JSON.stringify(operations));
    console.log(code_facture,eci_id );
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
            operations = [];
            $('.facture_table_lettre tbody').html('');
            $('.montant_final').text('0');
            $('#reste').val('0');
            $("#lettrage").modal("hide");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
})


