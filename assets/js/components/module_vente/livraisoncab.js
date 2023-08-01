const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
Routing.setRoutingData(routes);

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})
import * as Ladda from 'ladda';
import { deleteCab } from '../../functions/delete.js';

var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('uv_livraisoncab_list') + location.search, // json datasource
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
    serverSide: true,
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200],
                   [10, 15, 25, 50, 100, 200]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        { "orderable": true, "width": "3%","searchable": true, "targets": [0], name: "tab.id" },
        { "orderable": true, "width": "10%", name:"tab.code" },
        { "orderable": true, "width": "15%", name:"tab.datelivraison"  },
        { "orderable": true, "width": "20%", name:"tab.description" },
        { "orderable": true, "width": "15%", name:"tab.client"/*, "targets": [4, 5]*/ },
        { "orderable": true, "width": "20%","searchable": false /*className: "colonne-gras"*/ },
        { "orderable": false, "width": "10%","searchable": false /*className: "colonne-gras"*/ },
        { "orderable": false, "width": "10%","searchable": false /*className: "colonne-gras"*/ },
        { "orderable": false, "width": "10%" ,"searchable": false/*className: "colonne-gras"*/ },
        { orderable: false, className: "fac","searchable": false, visible: false },
        { orderable: false, className: "rg","searchable": false, visible: false },
        { "orderable": false, "width": "10%","searchable": false /*className: "colonne-gras"*/ },
        { "orderable": false, "width": "10%","searchable": false /*className: "colonne-gras"*/ },
        {orderable: false, searchable: false ,width: "5%"},

    ],
    
    columnDefs: [
        {searchable: false,
            targets: 13,
            render: function (t, a, l, s) {
                var data = "";
                t.forEach(element => {
                    let link = "" ; 
                    if (element._route_link){
                       link = "href='" + element._route_link + "'";   
                    }
                    data = data + "<li><a "+link+"  data-transition='" + element.name + "' data-id='" + element.id + "' data-title='" + element.titre + "' class='dropdown-item  " + element.class + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>"
                })
    
                return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';
    
            }
        }
    ],
    // dom: 'lBfrtip',
    //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
    dom: '<"html5buttons btn-group"f>lTgtip',
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
    //fixedHeader: true,
});


table.on('init.dt', function (e, settings) {

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

    CustomSearchDatatable.CustomSearchText(api, [], []);
    CustomSearchDatatable.CustomSearchDate(api, [], []);
    CustomSearchDatatable.CustomSearchSelect(api, [], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);


});







/*column 1 de datatble search*/

var search_column1 = $('.search_column1').datepicker({
    todayBtn: "linked",
    keyboardNavigation: true,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    language: 'fr',

});
search_column1.on('changeDate', function (e) {
    table.columns(1).search(this.value).draw();
});
$('.search_column1_clear').click(function () {
    $('.search_column1').datepicker('setDate', null).datepicker('fill');
});



$('.search_column2').on('keyup', function () {
    table.columns(2).search(this.value).draw();
});

$('.search_column3').on('change', function () {
    table.columns(3).search(this.value).draw();
});

$('.search_column4').on('keyup', function () {
    table.columns(4).search(this.value).draw();
});
$('.search_column5').on('keyup', function () {
    table.columns(5).search(this.value).draw();
});
$('.search_column6').on('keyup', function () {
    table.columns(6).search(this.value).draw();
});
$('.search_column7').on('keyup', function () {
    table.columns(7).search(this.value).draw();
});

/* $('.search_column6').on('change', function () {
 table.columns(6).search(this.value).draw();
 }); */


$('.remove-filter').click(function (e) {
    table.state.clear();
    window.location.reload();
    e.preventDefault();
});

$('.action_head').click(function () {
    console.log($('.action').filter(':checked').length);
    $(".action ,.action_head").prop('checked', $(this).prop("checked"));
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);

});

$('body').on('click', '.action', function () {
    $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});
$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
});
$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});





/*$('#_generer').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('uv_livraisoncab_generer', {'id': id}),
            success: function (result) {
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {timeOut: 4000})
    }



    e.preventDefault();
});*/




$('body').on('submit', '.form_generer', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = dta.get('_id');
  //  var id = $('#test').data("livraisonId");
 //   alert(id);
    var l = Ladda.create(document.querySelector('.my-button2'));
    //alert($(document.activeElement).attr('class').split(' ').pop());
    // Start loading
    l.start();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('uv_livraisoncab_generer', { 'id': id }),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                if (result.errors) {
                    $(".errors_list").html("");
                    jQuery.each(result.errors.violations, function (i, val) {
                        var x = val.propertyPath;
                        var separators = ['\\]', '\\['];
                        var arr = x.split(new RegExp(separators.join('|')));
                        var columnName = arr[1];
                        l.stop();
                        $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));


                    });

                } else if (result.code == 200) {
                    l.stop();
                    table.ajax.reload();
                    toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                    $(".actions").empty().removeClass('sidebar-open');
                    location.reload();
                }
                if (result.code == 404) {
                    toastr.warning(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });
                    l.stop();
                  }
                if (result.notvalide) {
                    l.stop();
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                  }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                l.stop();
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 });
    }


    e.preventDefault();
})








$('#_archiver').click(function (e) {
    // var id = table.row('.selected').id();
    var id = $('#test').data("livraisonId");
    if (id) {



        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Archiver cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('uv_livraisoncab_archive', { 'id': id }),
                    success: function (result) {
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            $(".actions").empty().removeClass('sidebar-open');

                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });

    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
    }



    e.preventDefault();
});







$("#_delete").click(function (e) {

 

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
        text: "Voulez vous vraiment supprimer cette enregistrement ?",
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
                url: Routing.generate("uv_livraisoncab_delete"),
                data: {_array_ids},
                success: function (result) {
                    // console.log(result);
                    if (result.code == 200) {
                     
                       // $('#grid').DataTable().ajax.reload();
                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        var url=Routing.generate("uv_livraisoncab_index");
                        window.location.href = url;
                       
                    }
                    else if (result.code == 403) {
                      toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
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
        text: "Voulez vous vraiment annuler cette livraison ?",
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
                url: Routing.generate("uv_livraisoncab_annuler", {
                    id
                }),
                success: function (result) {
                    // console.log(result);
                    if (result.code == 200) {
  
                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        var url = Routing.generate('uv_livraisoncab_index'); 
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
  
  
  $("body").on("click", "._delete_livraison", function (e) {
  
  
    //alert();
  
    var _array_ids = [];
  
    _array_ids.push($(this).attr("data-id"));
  
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
                            url: Routing.generate("uv_livraisoncab_delete"),
                            data: {_array_ids},
                            success: function (result) {
                                // console.log(result);
                                if (result.code == 200) {
  
                                    $('#grid').DataTable().ajax.reload();
                                    toastr.success(result.message.text, result.message.title, {
                                        timeOut: 4000,
                                    });
  
  
                                }
                                else if (result.code == 403) {
                                  toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
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


$('#_statut').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('uv_livraisoncab_statut', { 'id': id }),
            success: function (result) {
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
    }



    e.preventDefault();
});






$('.actions').on('submit', '.form_statut', function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = table.row('.selected').id();
    if (id) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('uv_livraisoncab_statut', { 'id': id }),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result, textStatus, errorThrown) {
                //            console.log(result);
                //            console.log(textStatus);
                //            console.log(errorThrown);
                if (result.errors) {
                    $('.errors-list').remove();
                    jQuery.each(result.errors.violations, function (i, val) {
                        var column = val.propertyPath;
                        var columnName = column.split('.');
                        // console.log(columnName[1]);
                        $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                    });

                } else if (result.code == 200) {
                    table.ajax.reload();
                    toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                    $(".actions").empty().removeClass('sidebar-open');
                    // location.reload();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 })
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 });
    }


    e.preventDefault();
})





$('#_show').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('uv_livraisoncab_show', { 'id': id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});





$('#_imprimer').click(function (e) {
    //  var id = table.row('.selected').id();
    var id = $('#test').data("livraisonId");
    if (id) {
        var url = Routing.generate('uv_livraisoncab_pdf', { 'id': id });
        // window.location.href = url;
        window.open(url, '_blank');
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});




$('body').on('click', '.uv_livraisoncab_apply_transitions', function (e) {

    /*var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    var title = dta.get('title');*/
    var dta = new FormData();
    var id = $(this).attr('data-id');
    var title = $(this).attr('data-title');
    var transition = $(this).attr('data-transition');


    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
  //  alert(transition);
   // alert(title);
    //alert(id);
    if(transition == "apres_valider_generer"){
        $.ajax({
            type: "POST",
            url: Routing.generate("uv_livraisoncab_generer", {
                id: id,
            }),
            success: function (result) {
    
    
                $(".bod2").html(result).hide();
             
             
                
    
    
    
                $("#facturePopUp").modal("show");
            
                setTimeout(function () {
                    $(".spr2").hide();
                    $(".bod2").fadeIn();
                }, 600);
            },
        });
    
    }
    else if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer a l'etat '" + title + "' pour cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui !",
            cancelButtonText: "<i class='fa fa-times'></i> Non !",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('uv_livraisoncab_apply_transitions', { 'id': id }),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            location.reload();
                        }
                        if (result.code == 202) {
                            // alert(result.valider);
                            toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                            location.reload();
                         
                        }
                        if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })


                        }
                        if (result.code == 404) {
                            toastr.warning(result.message.text, result.message.title, {
                                timeOut: 4000,
                            });
                            l.stop();
                          }
                        if (result.notvalide) {
                            l.stop();
                            toastr.warning(result.message.text, result.message.title, {
                              timeOut: 4000,
                            });
                          }
                          
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, { timeOut: 4000 })
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigne ", "warning", { timeOut: 4000 })
    }
    e.preventDefault();
});



$('body').on('submit', '#uv_livraisoncab_generer', function (e) {
    var dta = new FormData(this);
    var id = $("input[name=_id]").val();
    $.ajax({
        type: 'POST',
        url: Routing.generate('uv_livraisoncab_generer', { 'id': id }),
        success: function (result) {
            $('.actions').html(result);
            $(".actions").toggleClass('sidebar-open');
        }
    });

    e.preventDefault();


});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('uv_livraisoncab_show', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;

});

var tableShow = $('#datatable-show').DataTable({
    "scrollY": "200px",
    "scrollCollapse": true,
    "paging": false,
    "autoWidth": false,
    "columns": [
        { "width": "5%" },
        { "width": "10%" },
        { "width": "35%" },
        { "width": "20%" },
        { "width": "5%" },
        { "width": "5%" },
        { "width": "5%" },
        { "width": "5%" }
    ],
    "footerCallback": function (row, data, start, end, display) {
        var api = this.api(), data;
        var total, pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === 'string' ?
                i.replace(/[\$,]/g, '') * 1 :
                typeof i === 'number' ?
                    i : 0;
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
            .column(7, { page: 'current' })
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
       /* $(api.column(1).footer()).html(
            'Total : ' + (Math.round(pageTotal * 100) / 100).toFixed(2)
        );*/
    }
});


/*** multiple livraison */


$('body').on('click', '.scolumn_0', function () {

    $(".action ,.scolumn_0").prop('checked', $(this).prop("checked"));
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);

});

$('body').on('click', '.action', function () {
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});


$('body').on('change', '._multiple_actions', function () {
    var _array_ids = [];


    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });


    if ($(this).val() == '_genener_factures' && _array_ids != null) {


        //  alert();

        $.ajax({
            type: 'POST',
            url: Routing.generate('uv_livraisoncab_facture'),
            data: { _array_ids },
            success: function (result) {
                if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                }else{
                    $('.actions').html(result);
                    $(".actions").toggleClass('sidebar-open');
                }
              
                // $(".action ,.scolumn_0").prop('checked', false);
            }
        });




    }
    if ($(this).val() =="_desactiver_livraison" && _array_ids != null) {
        // alert();
         swalWithBootstrapButtons
         .fire({
           showClass: {
             popup: "animatedSwal flipInX faster",
           },
           position: "top",
           title: "Confirmation ?",
           text: "Voulez vous vraiment desactiver cette liste ?",
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
               url: Routing.generate('uv_livraisoncab_desactiver'),
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
             $("._multiple_actions").val("");
           }
         });
         
      
      }

});

$('.actions').on('submit', '.form_factures', function (e) {




    var dta = new FormData(this);
    var form_name = $(this).attr('name');

    //var selector = $(this).attr('class').split(' ')[0];

    var selector = 'form_factures';
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('uv_livraisoncab_facture'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result, textStatus, errorThrown) {
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                if(result.message.codeComptableIntrouvable == 1) {
                    toastr.warning("Veuillez contacter l'administrateur!", "Code Comptable introuvable!", {
                      timeOut: 4000,
                    });
                  }
                location.reload();
                //  table.ajax.reload();
            } else if (result.code == 403) {
                l.stop();
                $(".actions").empty().removeClass('sidebar-open');
                //                $(".actions").hide();
                //                alert('e');
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    $('._multiple_actions').val('');


    e.preventDefault();
});


$(".dynamique_document").click(function (e) {
    // console.log( $(this).attr('data-id'));
    //alert($(this).attr("data-id"));
    $.ajax({
        type: "POST",
        url: Routing.generate("t_livraison_document_dynamique_form", {
            id: $(this).attr("data-id"),
        }),
        success: function (result) {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            $(".sel2").select2();
            setTimeout(function () {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });
    e.preventDefault();
  });

  
$("#_desactiver_livraison").click(function (e) {

 

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
        text: "Voulez vous vraiment desactiver cette livraison  ?",
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
                url: Routing.generate("uv_livraisoncab_desactiver"),
                data: {_array_ids},
                success: function (result) {
                    // console.log(result);
                    if (result.code == 200) {
                     
                        table.ajax.reload();
                        toastr.success(result.message.text, result.message.title, {
                            timeOut: 4000,
                        });
                        
                       
                    }
                    else if (result.code == 403) {
                        l.stop();
                       
                        toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
        
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
  
  
       
  
    e.preventDefault();
  });


  $("body").on("click", "._desactiver_livraison", function (e) {


    //alert();
  
    var _array_ids = [];
  
    _array_ids.push($(this).attr("data-id"));
  
    if (_array_ids) {
  
  
        swalWithBootstrapButtons
                .fire({
                    showClass: {
                        popup: "animatedSwal flipInX faster",
                    },
                    position: "top",
                    title: "Confirmation ?",
                    text: "Voulez vous vraiment desactiver cette liste ?",
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
                            url: Routing.generate("uv_livraisoncab_desactiver"),
                            data: {_array_ids},
                            success: function (result) {
                                // console.log(result);
                                if (result.code == 200) {
  
                                    table.ajax.reload();
                                    toastr.success(result.message.text, result.message.title, {
                                        timeOut: 4000,
                                    });
  
  
                                }
                                else if (result.code == 403) {
                                
                                    toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                    
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

  $('body').on('click','.pdf_by_code',function(e){
    window.open(Routing.generate("uv_livraisoncab_old_sys", {
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