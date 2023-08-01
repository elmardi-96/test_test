const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../ManagementErrors/index.js";

import { deleteCab } from "../../functions/delete.js";

import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import * as listActions from "../../functions/autoFunctionAjax.js";

import * as Ladda from "ladda";
global.$ = $;
let bordereaux = [];
const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-white btn-xs sySweetStyle",
        cancelButton: "btn btn-warning btn-xs sySweetStyle",
    },
    buttonsStyling: false,
});

$("body").on("click", "#_avoir", function (e) {
    //alert()

    $.ajax({
        type: "POST",
        url: Routing.generate("t_uatfacture_add_avoir_popup"),
        success: function (result) {
            $(".bod").html(result).hide();
            $("#ModalAcompteDynamique").modal("show");
            $(".sel2").select2();
            setTimeout(function () {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });

    e.preventDefault();
});

$("body").on("click", "#_acompte", function (e) {
    //alert()

    $.ajax({
        type: "POST",
        url: Routing.generate("t_uatfacture_add_acompte_popup"),
        success: function (result) {
            $(".bod").html(result).hide();
            $("#ModalAcompteDynamique").modal("show");
            $(".sel2").select2();
            setTimeout(function () {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });

    e.preventDefault();
});

var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("ua_t_facturefrscab_list2"), // json datasource
        type: "get",
    },
    deferRender: true,
    serverSide: true,
    // "scrollX": true,
    pageLength: 15,
    lengthMenu: [
        [10, 15, 25, 50, 100, 200],
        [10, 15, 25, 50, 100, 200],
    ],
    order: [[0, "desc"]],
    columns: [
        {orderable: true, className: 'td-check pd-fac', name: 'fac.id', width: "3%"},
        {orderable: true, name: 'fac.code', visible: true, className: 'pd-fac'},
        {orderable: true, name: 'fac.dateDocAsso' ,className: 'pd-fac'},
        {orderable: true, name: 'refDocAsso' ,className: 'pd-fac'},
        {orderable: true, name: 'fac.observation',className: 'pd-fac'},
        {orderable: true, name: 'frs.societe',className: 'pd-fac'},
        {orderable: true, className: 'td-number pd-fac', name: 'fac.montant_acompte'},
        {orderable: true, className: 'td-number pd-fac', name: 'fac.mtremise'},
        {orderable: true, className: 'td-number pd-fac', name: 'fac.montant_reception'},
        {orderable: true, name: 'fac.montant', className: 'fac-back td-number pd-fac'},
        {orderable: true, name: 'tab.montantRegle',className: 'reg-back td-number pd-fac'},
        {orderable: true, name: 'tab.NbrReglements' ,className: 'td-number pd-fac'},
        {orderable: true, name: 'parvenue.v',className: 'pd-fac'},
        {orderable: true , searchable: false},
        {orderable: true, name: 'fac.position_actuel' ,className: 'pd-fac'},
        {orderable: true, searchable: false ,width: "5%"},
    ],
    columnDefs: [
        {
          searchable: false,
          targets: 15,
          render: function (t, a, l, s) {
            var data = "";
    
            t.forEach((element) => {
              let link = "";
              if (element._route_link) {
                link = "href='" + element._route_link + "'";
              }
              data =
                data +
                "<li><a " +
                link +
                "data-transition='" +
                element.name +
                "' data-id='" +
                element.id +
                "' data-title='" + element.titre + "' class='dropdown-item " +
                element.class +
                " " +
                element.idCs +
                "' ><i class='fa " +
                element.icon +
                "' ></i> " +
                element.titre +
                "</a></li>";
            });
    
            return (
              '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' +
              data +
              " </ul> </div> \t</div>\t"
            );
          },
        },
      ],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
    dom: '<"html5buttons btn-group"f>lTgtip',
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
        {
          extend: "excel",
          exportOptions: {
            columns: ":visible",
            rows: ":visible",
            format: {
                body: function(data, row, column, node) {
                    data = $('<p>' + data + '</p>').text();
                    return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
                }
            }
          },
        }
    ],
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
    },
    // fixedHeader: true,
});
table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();

    //console.log(st);
    //if (st != null) {
    //    $.each(st.columns, function (key, value) {
    //        if (value.search.search != "") {
    //            $('.remove-filter').show();
    //            return false;
    //        }
    //    });
    //}

    CustomSearchDatatable.CustomSearchText(
            api,
            [],
            []
            );
    CustomSearchDatatable.CustomSearchDate(api, [], []);
   // CustomSearchDatatable.CustomSearchSelect(api, [5,11], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});
/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
    table.state.clear();
    window.location.reload();
    e.preventDefault();
});
$(".action_head").click(function () {
    $(".action ,.action_head").prop("checked", $(this).prop("checked"));
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

/*  $('#grid').on('click', '.statut_op', function (event) {
 var name = $(this).attr('name');
 var id = $(this).attr('rol'); */
//alert(name+""+id);
$(".select2_demo_3").select2({
    placeholder: "Action",
    allowClear: true,
});

$(".list_actions").change(function (e) {});
$("#grid tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
    } else {
        table.$("tr.selected").removeClass("selected");
        $(this).addClass("selected");
    }
});

$(document).ready(function () {
    //alert(1)
    /*  document.addEventListener("DOMContentLoaded", function (event) {
     
     $('#grid').show(500);
     });*/
    // console.log('Hello Webpack Encore! Edit me in assets/js/app.js!!!');
    $("#_statut").click(function (e) {
        var id = table.row(".selected").id();
        if (id) {
            $.ajax({
                type: "POST",
                url: Routing.generate("ua_t_facture_statut", {id: id}),
                success: function (result, textStatus, errorThrown) {
                    $(".actions").html(result);
                    $(".actions").toggleClass("sidebar-open");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.error("Erreur", errorThrown, {timeOut: 4000});
                },
            });
        } else {
            toastr.warning(
                    "Veuillez Renseigner une ligne pour effectuer cette operation",
                    "warning",
                    {timeOut: 4000}
            );
        }

        e.preventDefault();
    });

    $(".actions").on("click", ".close-me", function (e) {
        //$('.close-me').click(function (e){
        $(".actions").removeClass("sidebar-open");
        e.preventDefault();
    });
    $(".actions").on("submit", ".form_statut", function (e) {
        var dta = new FormData(this);
        var form_name = $(this).attr("name");
        var id = table.row(".selected").id();
        if (id) {
            $.ajax({
                type: "POST",
                url: Routing.generate("ua_t_facture_statut", {id: id}),
                data: dta,
                processData: false,
                contentType: false,
                success: function (result, textStatus, errorThrown) {
                    //            console.log(result);
                    //            console.log(textStatus);
                    //            console.log(errorThrown);
                    if (result.errors) {
                        $(".errors-list").remove();
                        jQuery.each(result.errors.violations, function (i, val) {
                            var column = val.propertyPath;
                            var columnName = column.split(".");
                            // console.log(columnName[1]);
                            $(".form_statut #" + form_name + "_" + columnName[1]).after(
                                    "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                                    val.title +
                                    "</span></span></span>"
                                    );
                        });
                    } else if (result.code == 200) {
                        table.ajax.reload();
                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        $(".actions").empty().removeClass("sidebar-open");
                        // location.reload();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.error("Erreur", errorThrown, {timeOut: 4000});
                },
            });
        } else {
            toastr.warning(
                    "Veuillez Renseigner une ligne pour effectuer cette operation",
                    "warning",
                    {timeOut: 4000}
            );
        }

        e.preventDefault();
    });
    $("#_demande").click(function (e) {
        var id = table.row(".selected").id();
        if (id) {
            var url = Routing.generate("ua_t_facturefrscab_Paiement", {id: id});
            window.location.href = url;
            // console.log(url)
        } else {
            toastr.warning(
                    "Veuillez Renseigner une ligne pour effectuer cette operation",
                    "warning",
                    {timeOut: 4000}
            );
        }
        e.preventDefault();
    });

    $("#_show").click(function (e) {
        var id = table.row(".selected").id();
        if (id) {
            var url = Routing.generate("ua_t_facturefrscab_consulte", {id: id});
            window.location.href = url;
            // console.log(url)
        } else {
            toastr.warning(
                    "Veuillez Renseigner une ligne pour effectuer cette operation",
                    "warning",
                    {timeOut: 4000}
            );
        }
        e.preventDefault();
    });

    $("#_imprimer").click(function (e) {
        //  var id = table.row('.selected').id();

        var id = $("#test").data("factureId");
        // alert(id);
        if (id) {
            var url = Routing.generate("pdf_show_facture", {id: id});
            // window.location.href = url;
            window.open(url, "_blank");
            // console.log(url)
        } else {
            toastr.warning(
                    "Veuillez Renseigner une ligne pour effectuer cette operation",
                    "warning",
                    {timeOut: 4000}
            );
        }
        e.preventDefault();
    });

    $(".new").on("submit", ".form", function (e) {
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this).attr("class").split(" ")[0];
        var id = $("#test").data("factureId");

        // Create a new instance of ladda for the specified button
        var l = Ladda.create(document.querySelector(".my-button2"));

        // Start loading
        l.start();
        // console.log(test);
        //console.log(e.type);
        // alert(id);
        $.ajax({
            type: "POST",
            url: Routing.generate("ua_t_facture_insert", {id: id}),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
                //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
                if (result.errors) {
                    //  console.log(result.errors);
                    $(".errors-list").remove();
                    jQuery.each(result.errors.violations, function (i, val) {
                        l.stop();
                        var column = val.propertyPath;
                        var columnName = column.split(".");
                        $("." + selector + " #" + form_name + "_" + columnName[1]).after(
                                "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                                val.title +
                                "</span></span></span>"
                                );
                    });
                } else if (result.empty) {
                    l.stop();
                    toastr.warning(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });

                    // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
                } else if (result.data) {
                    toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });
                    $(".form")[0].reset();
                    $(".new .table-detail tbody").hide();
                    $(".new-article-btn").show();
                    $(".new .table-detail > tbody tr").not(":last").remove();
                    l.stop();
                    location.reload();
                    //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000});
            },
        });
        e.preventDefault();
    });
    
    $("body").on("click", ".ua_t_facturefrscab_apply_transitions", function (e) {
        var dta = new FormData();
        var id = $(this).attr("data-id");
        var title = $(this).attr("data-title"); 
        var transition = $(this).attr("data-transition");

        dta.append("id", id);
        dta.append("title", title);
        dta.append("transition", transition);
        //alert(transition);
      //  alert(title);

     //   alert(id);

        if(transition == "apres_valider_generer"){
            $.ajax({
                type: "POST",
                url: Routing.generate("ua_t_facturefrscab_generer", {
                    id: id,
                }),
                success: function (result) {

        
                    $(".bod").html(result).hide();
                 
                    $(".parvenue").select2();
                    
        
        if($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1){
            $('.dateDoc,.refDoc').hide().removeClass('classShow'); 
        }else{
            $('.dateDoc,.refDoc').show().addClass('classShow');  
        }
        
                    $("#MyModal").modal("show");
                    $('.parvenue').on('select2:selecting', function(e) {
                        // alert();
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
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    toastr.warning(
                        jqXHR.responseJSON.message.text,
                        jqXHR.responseJSON.message.title, { timeOut: 4000 }
                    );
                },
            });
        
        }
        else if (id) {
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
                                url: Routing.generate("ua_t_facturefrscab_apply_transitions", {
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
                                        var url = Routing.generate("ua_t_facturefrscab_Paiement", {
                                            id: result.id,
                                        });
                                        window.location.href = url;
                                    }
                                    if (result.code == 403) {
                                        toastr.warning(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });
                                    }
                                    if (result.code == 404) {
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
            toastr.warning("Facture non renseigne ", "warning", {timeOut: 4000});
        }
        e.preventDefault();
    });
});

var tableShow = $("#datatable-show").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
    autoWidth: false,
    footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
                data;
        var total, pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === "string"
                    ? i.replace(/[\$,]/g, "") * 1
                    : typeof i === "number"
                    ? i
                    : 0;
        };

        // Total over all pages
        total = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Total over this page
        pageTotal = api
                .column(7, {page: "current"})
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Update footer
        $(api.column(1).footer()).html(
                "Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2)
                );
    },
});

$("._generer_form").submit(function (e) {
    var dta = new FormData(this);
    var id = $("input[name=_id]").val();

    //alert();
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector(".my-button2"));

    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("ua_t_facturefrscab_avoir_insert", {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
            if (result.errors) {
                $.each(result.errors, function (key, value) {
                    toastrWidtoutProgress.warning(value, "warning");
                });
                l.stop();
            } else if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                l.stop();
                location.reload();
            } else if (result.empty) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});

var tableShow = $("#datatable-show2").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
    autoWidth: false,
    footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
                data;
        var total, pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === "string"
                    ? i.replace(/[\$,]/g, "") * 1
                    : typeof i === "number"
                    ? i
                    : 0;
        };

        // Total over all pages
        total = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Total over this page
        pageTotal = api
                .column(11, {page: "current"})
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Update footer
        $(api.column(1).footer()).html(
                "Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2)
                );
    },
});

$(document).ready(function () {
    //$('body').on('change', '.paiement', function (e) {
    //$('.paiement').bind('load',function(){

    $(".paiement")
            .on("change rightnow", function () {
                if ($(this).val() == 2) {
                    $(".bloc_cheque").show();
                } else {
                    $("#univ_t_reglement_dateEcheance").val(null);
                    $("#univ_t_reglement_reference").val(null);
                    $(".bloc_cheque").hide();
                }
                if ($(this).val() == 1 || $(this).val() == 4) {
                    $(".bloc_banque").hide();
                } else {
                    $(".bloc_banque").show();
                }
                if ($(this).val() == 1) {
                    $(".bloc_compte").hide();
                } else {
                    $(".bloc_compte").show();
                }
                //  console.log($(this).val());
            })
            .triggerHandler("rightnow");
});



$("#_delete_facture").click(function (e) {
  




    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));

    if (_array_ids) {

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
                    url: Routing.generate('t_UaTFacturefrscab_delete_multiple_facture'),
                    data: {_array_ids},
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        
                                var url = Routing.generate('ua_t_facture_index'); 
                                window.location.href = url;
                            
                            
                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });


    }
    e.preventDefault();
});


$("body").on("click", "._delete_facture", function (e) {


  

    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));
  //  alert( _array_ids);
    if (_array_ids) {


        swalWithBootstrapButtons
                .fire({
                    showClass: {
                        popup: "animatedSwal flipInX faster",
                    },
                    position: "top",
                    title: "Confirmation ?",
                    text: "Voulez vous vraiment supprimer cette liste ?",
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
                            url: Routing.generate("t_UaTFacturefrscab_delete_multiple_facture"),
                            data: {_array_ids},
                            success: function (result) {
                                // console.log(result);
                                if (result.code == 200) {

                                    $('#grid').DataTable().ajax.reload();
                                    toastr.success(result.message.text, result.message.title, {
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

    }





});








$("#_generer").click(function (e) {

 

   


  

if($(this).attr("data-id")){

    $.ajax({
        type: "POST",
        url: Routing.generate("ua_t_facturefrscab_generer", {
            id: $(this).attr("data-id"),
        }),
        success: function (result) {

            $(".bod").html(result).hide();
         
            $(".parvenue").select2();
            

if($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1){
    $('.dateDoc,.refDoc').hide().removeClass('classShow'); 
}else{
    $('.dateDoc,.refDoc').show().addClass('classShow');  
}

            $("#MyModal").modal("show");
            $('.parvenue').on('select2:selecting', function(e) {
                // alert();
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
        },
    });


}
  
  
       

    e.preventDefault();
});



$("#_annuler").click(function (e) {
    var id = $(this).attr("data-id");
    swalWithBootstrapButtons
    .fire({
        showClass: {
            popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment annuler cette facture ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui!",
        cancelButtonText: "<i class='fa fa-times'></i> No !",
    })
    .then((result) => {
        if (result.value) {
            $.ajax({
                type: "POST",
                url: Routing.generate("ua_t_facturefrscab_annuler", {
                    id
                }),
                success: function (result) {
                    // console.log(result);
                    if (result.code == 200) {

                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        var url = Routing.generate('ua_t_facture_index'); 
                        window.location.href = url;


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
    e.preventDefault();
});


 


  $("#_desactiver_facture").click(function (e) {

 

    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));


  

if(_array_ids){

    swalWithBootstrapButtons
    .fire({
      showClass: {
        popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette facture ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    })
    .then((result) => {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: Routing.generate('ua_t_facturefrscab_desactiver'),
          data: {_array_ids},
          success: function (result) {
            if (result.errors) {
              ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000,
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              location.reload();
            }
          },
      });
      
      }
    });

}
  
  
       

    e.preventDefault();
});



$("body").on("click", "._desactiver_facture", function (e) {


 

    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));
   // alert(_array_ids);
    if (_array_ids) {


        swalWithBootstrapButtons
                .fire({
                    showClass: {
                        popup: "animatedSwal flipInX faster",
                    },
                    position: "top",
                    title: "Confirmation ?",
                    text: "Voulez vous vraiment desactiver cette facture ?",
                    type: "warning",
                    showCancelButton: true,
                    showCloseButton: true,
                    confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
                    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
                })
                .then((result) => {
                    if (result.value) {
                        $.ajax({
                            type: "POST",
                            url: Routing.generate("ua_t_facturefrscab_desactiver"),
                            data: {_array_ids},
                            success: function (result) {
                                // console.log(result);
                                if (result.code == 200) {

                                    table.ajax.reload();
                                    toastr.success(result.message.text, result.message.title, {
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

    }





});






var table2 = $("#grid2").DataTable({
    ajax: {
        url: Routing.generate("ua_t_facturefrscab_avoir_list") + location.search, // json datasource
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
    stateSave: true,
    lengthMenu: [
        [10, 15, 25, 50, 100, 200],
        [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 10,
    order: [[0, "asc"]],
    columns: [
        {orderable: true, width: "5%", searchable: true, targets: [0]},
        {orderable: true, visible: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true},
        {orderable: true, visible: true},
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
    ],
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
    },
    // fixedHeader: true,
});
table2.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();

    CustomSearchDatatable.CustomSearchText(
            api,
            [1, 3, 4, 8, 9, 10, 11, 12, 13],
            []
            );
    CustomSearchDatatable.CustomSearchDate(api, [2], []);
    CustomSearchDatatable.CustomSearchSelect(api, [5, 6, 7, ], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});


$("body").on("submit", ".save_form_avoir", function (e) {
    //alert();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    //var id = $('#test').data("factureId");

    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector(".my-button2"));

    // Start loading
    l.start();

    $.ajax({
        type: "POST",
        url: Routing.generate("t_uatfacture_add_avoir_popup"),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
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
            } else if (result.data) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                $("#ModalDocumentDynamique").modal("hide");
                l.stop();

                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});



$("body").on("submit", ".save_form_acompte", function (e) {
    //alert();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    //var id = $('#test').data("factureId");

    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector(".my-button2"));

    // Start loading
    l.start();

    $.ajax({
        type: "POST",
        url: Routing.generate("t_uatfacture_add_acompte_popup"),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
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
            } else if (result.data) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                $("#ModalDocumentDynamique").modal("hide");
                l.stop();

                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});



/*
 $("#_acompte").click(function (e) {
 //    var id = table.row(".selected").id();
 //    if (id) {
 $.ajax({
 type: "POST",
 url: Routing.generate("ua_t_facture_acompte_new"),
 success: function (result, textStatus, errorThrown) {
 $(".bod").html(result).hide();
 $("#ModalAcompteDynamique").modal("show");
 setTimeout(function () {
 $(".spr").hide();
 $(".bod").fadeIn();
 }, 600);
 },
 error: function (jqXHR, textStatus, errorThrown) {
 toastr.error("Erreur", errorThrown, {timeOut: 4000});
 },
 });
 //    } else {
 //        toastr.warning(
 //                "Veuillez Renseigner une ligne pour effectuer cette operation",
 //                "warning",
 //                {timeOut: 4000}
 //        );
 //    }
 
 e.preventDefault();
 });*/

var obj2 = new Object();
obj2["dossier_path"] = "change_dossier_facture_popup";
listActions.listActions(obj2);





$("body").on("submit", ".save_facture_generer", function (e) {
    
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);

  var dta2 = new FormData();
        var id = $('#id').attr('value');
        var title = ""; 
        var transition = "apres_valider_generer";

        dta2.append("id", id);
        dta2.append("title", title);
        dta2.append("transition", transition);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
 //alert($('#id').attr('value'));
  $.ajax({
      type: "POST",
      url: Routing.generate("ua_t_facturefrscab_generer",{id:$('#id').attr('value')}),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
          //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
            if (result.code == 404) {
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
            
             

            
          } else if (result.data) {
            $.ajax({
                type: "POST",
                data: dta2,
                processData: false,
                contentType: false,
                url: Routing.generate("ua_t_facturefrscab_apply_transitions", {
                    id: id,
                }),
                success: function (result) {
                    if (result.code == 200) {
                        l.stop();
                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        location.reload();
                    }
                    if (result.code == 201) {
                        l.stop();
                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        var url = Routing.generate("ua_t_facturefrscab_Paiement", {
                            id: result.id,
                        });
                        window.location.href = url;
                    }
                    if (result.code == 403) {
                        l.stop();
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
      },
      error: function (jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {timeOut: 4000});
      },
  });
  e.preventDefault();
});


$('body').on('click','.pdf_by_code',function(e){
    window.open(Routing.generate("ua_t_facturefrscab_document_old_sys", {
        id: $(this).attr('data-id')
    }), '_blank');
})

$('body').on('click', '.imprime_document', function(e) {
    e.preventDefault();
    if($(this).attr("data-valide") == 0)  {
        toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {timeOut: 4000})
        return
    }
    window.open($(this).attr('href'), '_blank');
});
let factureId;
$('body').on('click', '.modifier_ref', function(e) {
    e.preventDefault();
    factureId = $(this).attr('data-id')
    $.ajax({
        type: "GET",
        url: Routing.generate("ua_t_facturefrscab_info_ref", { id: factureId }),
        success: function(result) {
            $("#MyModalRefModifier").find("#document_ref").val(result.ref_doc)
            $("#MyModalRefModifier").find("#date_document").val(result.date_ref)
            $("#MyModalRefModifier").find("#date_valider").val(result.date_valide)

            $("#MyModalRefModifier").modal('show')

            setTimeout(function() {
                $(".spr1").hide();
                $(".bod1").fadeIn();
            }, 600);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });

});
$('body').on('submit', '.save_modify', function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    var l = Ladda.create(document.activeElement);
    l.start();
    $.ajax({
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        url: Routing.generate("ua_t_facturefrscab_set_info_ref", { id: factureId }),
        success: function(result) {
            $("#MyModalRefModifier").find("#document_ref").val("")
            $("#MyModalRefModifier").find("#date_document").val("")
            $("#MyModalRefModifier").find("#date_valider").val("")

         

            $("#MyModalRefModifier").modal('hide')

            l.stop();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });

});


$("#ajouterBRD").on('click', function() {
    // var dta = new FormData(action_test);
    
    // if (transactions.length > 0) {
        var l = Ladda.create(document.activeElement);
        // Start loading
        l.start();
        $.ajax({
            type: 'POST',
            url: Routing.generate('t_facturefrscab_bordereaux'),
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


$("body").on('keypress', '#code_tr_fac', function(e) {
    var code = $(this).val();
    if(e.which == 13)  {
        if(code == "") {
            toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
            return;
        }
    
        $.ajax({
            type: "POST",
            url: Routing.generate("t_facturefrscab_get_code"),
            data: {
                codef: code,
            }, 
            // processData: false,
            // contentType: false,
            success: function (result) {
                if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });
                    return;
                }
                var index = bordereaux.findIndex((t) => t == result.id);
                if(index == "-1") {
                    bordereaux.push(result.id);
                    console.log(result);
                    $(".transactionbody").prepend(`
                        <tr id="${result.id}">
                            <td>${result.code}</td>
                            <td><i class="fa fa-close text-danger remove_transaction"  /></td>
                        </tr>
                    `)
                    $('#code_tr_fac').val("");
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
$("body").on('click', '.remove_transaction', function(e) {
    console.log('amine')
    let tr = $(this).parents('tr')
    let id = tr.attr("id");
    var index = bordereaux.findIndex((t) => t == id);
    bordereaux.splice(index, 1)  
    console.log(bordereaux);
    tr.remove();
})


$('body').on('click', '#EnregistrerCodeBRD', function(e) {
    //    alert('test');
    e.preventDefault();
    if(bordereaux.length == 0) {
        toastr.warning("Veuillez ajouter une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
        return;
    }
    var form_name = $(this).attr('name');
    // var dta = new FormData(this);
    var selector = $(this);
    // dta.append('bordereaux', JSON.stringify(bordereaux))
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('t_facturefrscab_bordereaux'),
        // data: dta,
        data:{bordereaux: JSON.stringify(bordereaux)},
        // processData: false,
        // contentType: false,
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
