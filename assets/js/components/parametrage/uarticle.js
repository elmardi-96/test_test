
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
const blueimp = require('../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min');
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
const Swal = require('sweetalert2')
import * as Ladda from 'ladda';
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})
//require('./../../plugins/select2/select2-current.js');

$(document).ready(function() {
    $('.js-example-basic-single').select2();
});





var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("stock_produit_list2"), // json datasource
        type: "get",
    },
    deferRender: true,
    serverSide: true,
    scrollX: true,
    lengthMenu: [
        [10, 15, 25, 50, 100, 200, 20000000],
        [10, 15, 25, 50, 100, 200, "All"],
    ],
    pageLength: 15,
    order: [[0, "desc"]],
    columns: [
        {orderable: false, width: "3%",className: 'td-check pd-achat', name: 'tab.id'},
        {orderable: true, width: "15%", className: 'pd-achat', name: 'tab.code'},
        {orderable: true, width: "25%", className: 'pd-achat',name: 'tab.titre'},
        {orderable: true, width: "25%", className: 'td-desciption pd-achat', name: 'tab.titre'},
        // {orderable: true, width: "10%", name: 'tab.fournisseur'},
        {orderable: true, width: "10%",className: 'td-type pd-achat', name: 'tab.prix_achat'},
        {orderable: true, width: "10%",className: 'td-ht pd-achat', name: 'tab.prix_vente'},
        {orderable: false, width: "10%", className: 'td-tva pd-achat', name: 'tab.abreviation'},
       
    ],
    columnDefs: [
        {searchable: false,
            targets: 6,
          
        },
        {
           
            targets: 6,
            className: 'td-ord',
  
        }
    ],


    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
        searchPlaceholder: "RECHERCHER",
        search: "",
    },
    fixedHeader: true,
});


table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
 //   CustomSearchDatatable.CustomSearchText(api, [], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('u_article_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});
$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});





$('.new').on('submit', '.form', function (e) {
    //alert();
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                // console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('u_article_show', {'id': result.data});
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});



$('#_edit').click(function (e) {
    var id = table.row('.selected').id();
    if (id) {
        var url = Routing.generate('stock_produit_edit', {'id': id});
        window.location.href = url;
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});

$('.edit').on('submit', '.form', function (e) {
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            $('.errors-list').remove();
            l.stop();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
            }
        }
    });
    e.preventDefault();
});




$('#_delete_produit').click(function (e) {
    //var l = Ladda.create(document.activeElement);

    // Start loading
       // l.start();
    //var id = table.row('.selected').id();
    var id = $(this).attr("data-id");
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
                    url: Routing.generate('stock_produit_delete', {'id': id}),
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            l.stop();
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            var url = Routing.generate('stock_produit_index');
                            window.location.href = url;
                        } else if (result.code == 403) {
                            l.stop();
                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        l.stop();
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});





$('body').on('submit', '.stock_produit_update_prix_achat', function (e) {
    //  alert();
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_update_prix_achat', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                l.stop();
                // console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                   location.reload(); 
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
             
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});



$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_update_prix_vente', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                // console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                   location.reload(); 
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
             
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});


$('body').on('submit', '.stock_produit_fichiers', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_fichiers', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                l.stop();
               console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                   location.reload(); 
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
             
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});




$('._delete_fichier').click(function (e) {
    var id = $(this).attr('id');
    
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
                    url: Routing.generate('stock_produit_fichiers_delete', {'id': id}),
                    success: function (result) {
                        console.log(result);
                        if (result.code == 200) {
                            
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload(); 
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
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});

$('body').on('submit', '.stock_produit_add_stock', function (e) {
    //  alert();
    var l = Ladda.create(document.activeElement);

    // Start loading
        l.start();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_add_stock', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                   location.reload(); 
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
             
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});

$('#_show').click(function (e) {
    var id = table.row('.selected').id();

    if (id) {
        var url = Routing.generate('u_article_show', {'id': id});
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});
$('#_archiver_produit').click(function (e) {
  //  var id = table.row('.selected').id();
  //var l = Ladda.create(document.activeElement);

  // Start loading
      //l.start();
    var id = $(this).attr("data-id");
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
                    url: Routing.generate('stock_produit_archiver', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            l.stop();
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                           
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});

function getSubSelect(myclass, myboolean, mycontent,rm) {
    //console.log(mycontent)
    if(rm && myboolean){
        $(rm).find('option:not(:first)').remove();
        $(rm).prop("disabled", false);
    }else{
        $(rm).prop("disabled", true);
    }
    if (myboolean) {
      $(myclass).prop("disabled", false);
    } else {
      $(myclass).prop("disabled", true);
      $(myclass)
        .parent()
        .find(".select2 .select2-selection__arrow")
        .html('<i class="i-load fa fa-refresh"></i>');
    }
    if (mycontent) {
      var array = myclass.split(",");
      for (var i = 0, l = array.length; i < l; i++) {
        //console.log($(mycontent).find(array[i]));
        $(array[i]).replaceWith($(mycontent).find(array[i]));
      }
    }
   
  }

$(".new , .edit").on("change", ".niveau1", function () {
    //alert()
    getSubSelect(".niveau2", false, "",".niveau3,.niveau4");
    var $this = $(this).closest("form");
    var data = {};
    data[$(this).attr("name")] = $(this).val();
    data[$(".niveau2").attr("name")] = $(".niveau2").val();
    // Submit data via AJAX to the form's action path.
    $.ajax({
      url: Routing.generate('stock_produit_choix_niveau', {'id': $(this).val() == "" ? -1 : $(this).val(),"placeholder":"choix Niveau 2" }),
      type: "POST",
      data: data,
      success: function (result) {
        //   console.log(html);
        $(".niveau2").html(result.data)
        getSubSelect(".niveau2", true,"",".niveau3,.niveau4");
        $(".sel2").select2();
      },
    });
  });

  $(".new , .edit").on("change", ".niveau2", function () {
    //alert()
    getSubSelect(".niveau3", false, "",".niveau4");
    var $this = $(this).closest("form");
    var data = {};
    data[$(this).attr("name")] = $(this).val();
    data[$(".niveau2").attr("name")] = $(".niveau2").val();
    // Submit data via AJAX to the form's action path.
    $.ajax({
      url: Routing.generate('stock_produit_choix_niveau', {'id': $(this).val() == "" ? -1 : $(this).val(),"placeholder":"choix Niveau 3" }),
      type: "POST",
      data: data,
      success: function (result) {
        //   console.log(html);
        $(".niveau3").html(result.data)
        getSubSelect(".niveau3", true, "",".niveau4");
        $(".sel2").select2();
      },
    });
  });

  $(".new , .edit").on("change", ".niveau3", function () {
    //alert()
    getSubSelect(".niveau4", false, "","");
    var $this = $(this).closest("form");
    var data = {};
    data[$(this).attr("name")] = $(this).val();
    data[$(".niveau2").attr("name")] = $(".niveau2").val();
    // Submit data via AJAX to the form's action path.
    $.ajax({
      url: Routing.generate('stock_produit_choix_niveau', {'id': $(this).val(),"placeholder":"choix Niveau 4"}),
      type: "POST",
      data: data,
      success: function (result) {
        //   console.log(html);
        $(".niveau4").html(result.data)
        getSubSelect(".niveau4", true,"","");
        $(".sel2").select2();
      },
    });
  });



  $("body").on("submit", "._fichiers", function (e) {
    //   alert();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get("_id");


  
  
    var l = Ladda.create(document.querySelector(".my-button"));
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("u_article_fichiers", {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                l.stop();
                //console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                location.reload();
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000});
        },
    });
    e.preventDefault();
});

$("._delete_fichier").click(function (e) {
    var id = $(this).attr("id");

    if (id) {
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
                            type: "DELETE",
                            url: Routing.generate("u_article_fichiers_delete", {
                                id: id,
                            }),
                            success: function (result) {
                                // console.log(result);
                                if (result.code == 200) {
                                    toastr.success(result.message.text, result.message.title, {
                                        timeOut: 4000,
                                    });
                                    location.reload();
                                } else if (result.code == 403) {
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
        toastr.warning("Impossible d'effectuer cette opération", "warning", {
            timeOut: 4000,
        });
    }
    e.preventDefault();
});



$("._default_fichier").click(function (e) {
    var id = $(this).attr("id");
//alert();
    if (id) {
        swalWithBootstrapButtons
                .fire({
                    showClass: {
                        popup: "animatedSwal flipInX faster",
                    },
                    position: "top",
                    title: "Confirmation ?",
                    text: "Voulez vous vraiment définir cette image par défaut ?",
                    type: "warning",
                    showCancelButton: true,
                    showCloseButton: true,
                    confirmButtonText: "<i class='fa fa-check'></i> Oui",
                    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
                })
                .then((result) => {
                    if (result.value) {
                        $.ajax({
                            type: "PUT",
                            url: Routing.generate("u_article_fichiers_default", {
                                id: id,
                            }),
                            success: function (result) {
                                if (result.errors) {
                                    l.stop();
                                    $(".errors_list").html("");
                                    ShowFormErrors(selector, form_name, result.errors);
                                }
                              
                                if (result.code == 200) {
                                    toastr.success(result.message.text, result.message.title, {
                                        timeOut: 4000,
                                    });
                                    location.reload();
                                } else if (result.code == 403) {
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
        toastr.warning("Impossible d'effectuer cette opération", "warning", {
            timeOut: 4000,
        });
    }
    e.preventDefault();
});
$('#_import').on("submit", function(e){
    //alert()  
    var l = Ladda.create(document.querySelector('.my-button'));
//    // Start loading
    l.start();
    $('#resultats_import').empty();
    $('.spr').fadeIn()
    e.preventDefault(); //form will not submitted  
    $.ajax({  
         url:Routing.generate('stock_produit_upload'),  
         method:"POST",  
         data:new FormData(this),  
         contentType:false,          // The content type used when sending data to the server.  
         cache:false,                // To unable request pages to be cached  
         processData:false,          // To send DOMDocument or non processed data file it is set to false  
         success: function(data){  
             console.log();
            if (data.code == 403) {
                $('#_import')[0].reset();
                $('.spr').hide()
                toastr.warning(data.message.text, data.message.title, {timeOut: 5000000}) 
                l.stop();
            }  
            else  
              {  
                   $('#resultats_import').html(data).hide(); 
                   var t;
            (t = $(".kt_table_1").DataTable({
                "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
                "pageLength": 15,
                "order": [[0, "asc"]],
                lengthMenu: [5, 10, 25, 50],
                pageLength: 5,
                dom: 'f<"html5buttons btn-group"B>lTgtip',
                columns: [
                    {"orderable": true, "width": "5%", "searchable": true, "targets": [0]},
                    {"orderable": true, "width": "10%"},
                    {"orderable": true, "width": "85%"},
                    {"orderable": true, "width": "85%"},
                ],
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
                bFilter: false, 
                bInfo: false
            }));
            t.on('init.dt', function (e, settings) {

                let  api = new $.fn.dataTable.Api(settings);
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
            
                CustomSearchDatatable.CustomSearchText(api, [0, 1 , 2, 3], []);
            
            
            });
            $('#_import')[0].reset();
                   setTimeout(
                    function() 
                    {
                        $('.spr').hide()
                        $('#resultats_import').fadeIn()
                        l.stop();
                    }, 600);
              }  
         },error: function (jqXHR, textStatus, errorThrown) {
            $('.spr').hide()
            l.stop();
            console.log(jqXHR.responseText)
            $('#resultats_import').html(jqXHR.responseText)
            toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", {timeOut: 4000})
        }
    })  
});
var tableShow3 = $('#datatable-show3').DataTable({"paging":false});
    blueimp.Gallery(
            document.getElementById('links').getElementsByTagName('a'),
            {
                container: '#blueimp-gallery',
                carousel: true,
                onslide: function (index, slide) {
                    var unique_id = this.list[index].getAttribute('data-unique-id');
                    console.log(unique_id);
                }
            }
    );






    