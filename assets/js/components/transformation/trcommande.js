
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';


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
        url: Routing.generate('t_transformationt_commande_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "20%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
       
    ],
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

    //console.log(st);
//if (st != null) {
//    $.each(st.columns, function (key, value) {
//        if (value.search.search != "") {
//            $('.remove-filter').show();
//            return false;
//        }
//    });
//}

    CustomSearchDatatable.CustomSearchText(api, [1, 2 ,3 ,4,  ], []);
    CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchSelect(api, [5,6,7], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);


});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('t_transformationt_commande_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});


//article


$(".select2_demo_3").select2({
    placeholder: "Action",
    allowClear: true
});












$('.new , .edit').on('change', '.marches', function (e) {

    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();
  
    data[$('.marches').attr('name')] = $('.marches').val();
  
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
          //   console.log(html); 
            ($('.sousmarche').replaceWith($(html).find('.sousmarche')));
        }
    });
    e.preventDefault();
});














$('#tr_commandecab_type_1').on('change', function (e) {
    $(".marche").css("display", "none");

    $(".reference").css("display", "block");
  //alert( $('#t_achatdemandeinternecab_type_1').val());
  e.preventDefault();
});
$('#tr_commandecab_type_0').on('change', function (e) {
    $(".reference").css("display", "none");
    $(".marche").css("display", "block");
  //alert( $('#t_achatdemandeinternecab_type_1').val());
  e.preventDefault();
});

$('#tr_commandecab_type_2').on('change', function (e) {
    $(".reference").css("display", "none");
    $(".marche").css("display", "none");
  //alert( $('#t_achatdemandeinternecab_type_1').val());
  e.preventDefault();
});


$('.new').on('submit', '.form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);

// Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.my-button'));

// Start loading
    l.start();
  
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_transformationt_commande_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            $('.errors-list').remove();
            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
               // alert(result.data.id);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('t_transformationt_commande_show', {id: result.data.id});
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});


var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
   //alert($('.article').val())
    //dta.append('t_achatdemandeinternedet[article]', $('.article').val());
    var selector = $('.det_for');
    console.log(selector);
    // alert()
    console.log($(this).serialize())
    var exsit = 0;
    $.each(array_detail, function (i, value) {
        if ($('#tr_commandedet_article').val() == value.id) {
            exsit = 1;
        }
    });
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
  
    if (exsit == 0) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('t_transformationt_detaile_new'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {

                if (result.errors) {
                    console.log(result.errors);
                    l.stop();
                    ShowFormErrors(selector, form_name, result.errors);

                } else if (result.data) {
                    
                    $(".detail_form")[0].reset();
                    $(".errors-list").remove();
                   // $('.article').focus();
                    //                console.log(result);
                    let lineNo = 1;
                    array_detail.push(result.data);
                    $(".new .table-detail > tbody").empty();
                    
                    $.each(array_detail, function (i, value) {
                        var tva = value.tva + ' %';
                        var observation = value.observation;
                        if (value.tva == null) {
                            tva = '-';
                        }
                        if (value.observation == null) {
                            observation = '-';
                        }
                        //categorie
                        var my_row = " <tr><td>" + (i + 1) + "</td><td>"  + value.titre + "</td><td>" + observation + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
                        $(".new .table-detail > tbody").append(my_row);
                        lineNo++;
                    });
                    l.stop();
                    $("#tr_commandecab_detail").val(JSON.stringify(array_detail));
                    
                  //  $('.article').val(null).trigger('change');
                  
                    
                }
            }
        });
    } else {
        l.stop();
        toastr.warning("Cet article existe déjà ", "warning ", {timeOut: 4000})
    }
    e.preventDefault();
});

$('.new-article-btn').click(function (e) {
    $('.edit-new-article').show();
    $(this).hide();
    e.preventDefault();
});
$('.new').on('click', '.delete_element', function (e) {
    console.log($(this).attr('id'));
    array_detail.splice($(this).attr('id'), 1);
    console.log(array_detail);
    $(".new .table-detail > tbody tr").remove();
    $.each(array_detail, function (i, value) {
        var tva = value.tva + ' %';
        var observation = value.observation;
        if (value.tva == null) {
            tva = '-';
        }
        if (value.observation == null) {
            observation = '-';
        }
        var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article.titre + "</td><td>" + observation + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
        $(".new .table-detail>tbody").append(my_row);
    });
});




/*
 * 
 * Edit operations 
 * 
 */

$('.edit').on('submit', '.form', function (e) {
  //  alert();
    var form_name = $(this).attr('name');
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get('_id');
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_transformationt_commandecab_update', {id: id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();

            }
        }
    });
    e.preventDefault();
});


/*
 * 
 * Enregistrer  la formulaire de modification  d'article 
 * 
 */


$('.edit').on('submit', '.detail_form', function (e) {

    var dta = new FormData(this);

    console.log(dta);
    var form_name = $(this).attr('name');
    var id = dta.get('_id');
    var selector = $(this);
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_transformationt_commandedet_update_detail', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
                // $('.errors-list').remove();

                /*  jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/

            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            }
        }
    });
    e.preventDefault();
});






/*Ajouter un nouveau article dans la page de modification */

$('.edit').on('submit', '.detail_form_add_article', function (e) {

  //  alert();
    var dta = new FormData(this);
    var form_name = $(this).attr('name');
    var id = $('#_id').val();
    var selector = $(this);
    
// Create a new instance of ladda for the specified button
var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_transformationt_commandedet_insert', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
                /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/

            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.empty) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            }
        }
    });

    e.preventDefault();


});


/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

$('.edit').on('submit', '.detail_edit', function (e) {
  //  alert();
        var selector = $(this);
        var dta = new FormData(this);
        var id = dta.get('_id');
    
        var row_index = $(this).closest(".table-detail > tbody  > tr").index();
        var col_index = $(this).index();
        $.ajax({
            type: 'POST',
            url: Routing.generate('t_transformationt_commande_edit_detail', {'id': id}),
            success: function (result) {
                // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
                $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>" + result + "</td>");
                $(".sel2").select2(); 
                //    alert(row_index); 
    //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
    //            console.log(result)
            }
        });
    
        e.preventDefault();
    });



$('.show-me').click(function (e) {
    $(".actions").toggleClass('sidebar-open')
    e.preventDefault();
})

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



















var mem = $('#data_1 .input-group.date').datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true
});

var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);

$('#selector').datepicker('setDate', yearsAgo);





var tableShow = $('#datatable-show').DataTable({
    "scrollY":        "200px",
    "scrollCollapse": true,
    "paging":         false,
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
      "footerCallback": function ( row, data, start, end, display ) {
        var api = this.api(), data;
        var total,pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function ( i ) {
            return typeof i === 'string' ?
                i.replace(/[\$,]/g, '')*1 :
                typeof i === 'number' ?
                    i : 0;
        };

        // Total over all pages
        total = api
            .column( 7 )
            .data()
            .reduce( function (a, b) {
                return intVal(a) + intVal(b);
            }, 0 );

        // Total over this page
        pageTotal = api
            .column( 7, { page: 'current'} )
            .data()
            .reduce( function (a, b) {
                return intVal(a) + intVal(b);
            }, 0 );

        // Update footer
        $( api.column( 1 ).footer() ).html(
            'Total : '+ (Math.round(pageTotal * 100) / 100).toFixed(2)
        );
    }
});


var tableShow = $('#datatable-show2').DataTable({
    "scrollY":        "200px",
    "scrollCollapse": true,
    "paging":         false,
    "autoWidth": false
     
});
var h = "300";
var w = "1000";
$('.rs').click(function(e){
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var url = Routing.generate('t_transformationt_commande_find_article');
    var win = window.open(url, '_blank', 'width='+w+', height=300');
           
      

    win.onclick = function(e){
        var clickedClass = e.target.className;
        var clickedID = e.target.id;
    
        if($( e.target ).parent().attr('class') == 'tr active-search'){
            
            if ($('.sel2').find("option[value='" + $( e.target ).parent().attr('id') + "']").length) {
                $('.sel2').val($( e.target ).parent().attr('id')).trigger('change');
                win.close(); 
            } else { 
                // Create a DOM Option and pre-select by default
                var newOption = new Option($( e.target ).parent().attr('text'), $( e.target ).parent().attr('id'), true, true);
                // Append it to the select
                $('.sel2').append(newOption).trigger('change');
                win.close(); 
            }
        }
    } 

    
})


$(".tab-search tbody tr").click(function () {
    $(".tab-search tbody tr").removeClass('active-search')
    $(this).addClass("active-search");
});
$(".tab-search thead th").each(function (index) {
    //$(".ddlChamps").append(new Option($( this ).text(), index))
    var o = new Option($( this ).text(), index);
/// jquerify the DOM object 'o' so we can use the html method
    $(o).html($( this ).text());
    $(".ddlChamps").append(o);
});
$('.ntm').click(function(){
    $(this).hide()
    $("#Div_rechercheTabListe").fadeIn()
    
})
$('#lienFermerRecherche').click(function(){
    
    $("#Div_rechercheTabListe").hide()
    $(".ntm").fadeIn()
})


$("#lienRecherche").click(function(){
    //alert($('.ddlChamps').val())
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tab-sear");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[$('.ddlChamps').val()];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }


})

$( "#Div_rechercheTabListe" ).draggable();



$(".modalActivate").click(function(){
    $('.bod').empty();
    $('.spr').fadeIn()
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_transformationt_commande_find_article'),
        processData: false,
        contentType: false,
        success: function (result, textStatus, errorThrown) {
            
            $('.bod').html(result).hide()
            $('.tab-search').DataTable({
                
                "paging":  true,
                "pageLength": 5,
                "language": {
                    "url": Routing.generate('datatables_langue'),
                    "processing": true
                }
                 
            });
            setTimeout(
                function() 
                {
                    $('.spr').hide()
                    $('.bod').fadeIn()
                }, 600);
            
        }
    });
})

$('body').on('click','.cd_op',function(){
    if ($('.article').find("option[value='" + $(this).parent().parent().attr('id') + "']").length) {
        $('.article').val($(this).parent().parent().attr('id')).trigger('change');
        $('#exampleModalPreview').modal('hide');
    } else { 
        // Create a DOM Option and pre-select by default
        var newOption = new Option($(this).parent().parent().attr('text'), $(this).parent().parent().attr('id'), true, true);
        // Append it to the select
        $('.article').append(newOption).trigger('change');
        $('#exampleModalPreview').modal('hide');
         
    }
})



$.fn.select2.amd.define('select2/i18n/fr',[],function () {
    // Russian
    return {
        errorLoading: function () {
            return 'test';
        },
        inputTooLong: function (args) {
            var overChars = args.input.length - args.maximum;
            var message = 'Пожалуйста, удалите ' + overChars + ' символ';
            if (overChars >= 2 && overChars <= 4) {
                message += 'а';
            } else if (overChars >= 5) {
                message += 'ов';
            }
            return message;
        },
        inputTooShort: function (args) {
            var remainingChars = args.minimum - args.input.length;

            var message = 'Tapez ' + remainingChars + ' caractère ou plus pour faire des recherches';

            return message;
        },
        loadingMore: function () {
            return 'test';
        },
        maximumSelected: function (args) {
            var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

            if (args.maximum  >= 2 && args.maximum <= 4) {
                message += 'а';
            } else if (args.maximum >= 5) {
                message += 'ов';
            }

            return message;
        },
        noResults: function () {
          return 'aucun résultat trouvé';
        },
        searching: function () {
          return 'Rechercher…';
        }
    };
});



$('#_affectation').click(function (e) {
    //  var id = table.row('.selected').id();
      var id = $('#test').data("commandeId");
      var l = Ladda.create(document.querySelector('.my-button'));
      if (id) {
    //     alert(id);
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Affecter cet enregistrement ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui, Affecter!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
           
            if (result.value) {
                l.start();
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('t_transformationt_commandecab_insert_affectation', {'id': id}),
                    success: function (result) {
                        l.stop();
                        if (result.code == 200) {
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            $(".actions").empty().removeClass('sidebar-open');
                            window.location.reload();

                        } else if (result.code == 403) {
                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                            $(".actions").empty().removeClass('sidebar-open');
                        }else if (result.empty) {
               
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










