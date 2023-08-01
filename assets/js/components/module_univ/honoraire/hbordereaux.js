const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';


//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';

global.$ = $;

$('.new , .edit').on('submit', 'form', function (e) {
    var l = Ladda.create(document.activeElement);
    l.start();
});

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

$('.full-height-scroll').slimscroll({
    height: '800px'
})




var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix Matiére",
    allowClear: true
}); 



jQuery.each($('.toastr-msg'), function (i, val) {
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succées", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), {timeOut: 4000})
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), {timeOut: 4000})
    }
});
$('.new').on('submit', '.form', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();

});

$('select.select2').select2();




/////////////////////////////////////////


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_h_albhon_list') + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
  
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

    CustomSearchDatatable.CustomSearchText(api, [1,5 ], []);
   
    CustomSearchDatatable.CustomSearchSelect(api, [2,3,4 ,7], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [6], []);




});
$('#grid tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});





/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('module_univ_h_albhon_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});




/////////////////////////////////////////////////////////////////
var brd = $('#test').data("bordereauxId");





$('body').on('click', '.scolumn_0', function () {

    $(".action ,.scolumn_0").prop('checked', $(this).prop("checked"));
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);

});

$('body').on('click', '.action', function () {
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});




$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})




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
       
        $('.promotion').html('<option value="">Choix Promotion</option>');
       
    }
    e.preventDefault();
});


$('body').on('change','.formation',function (e) {
    if ($.isNumeric($(this).val())) {

       

        $.ajax({
            url: Routing.generate('univ_ac_etablissement_get_promotion', {id: $(this).val()}),
            success: function (result) {
                var infos2 = jQuery.parseJSON(result);
               
                $(".promotion").html(infos2.data);
                $('select.select2').select2();
            }
        });


        
    } else {
    
        $('.promotion').html('<option value="">Choix Promotion</option>');
  
        
    }
    e.preventDefault();
});



//ajouter par mourad 

// la fonction avec paramètre année et le retour essemble des semaine de ce année 
var moment = require('moment');
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
    // Return array of year and week number
    return [d.getFullYear(), weekNo];
}


function weeksInYear(year) {
    var month = 11, day = 31, week,d= null;
    do {
      d = new Date(year, month, day--);
      week = getWeekNumber(d)[1];
    } while (week == 1);
  
    return week;
  }

  // essemble des abriviation des mois d'année
  var tabmonth = new Array("janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc") ;

  //boucle pour afficher les semaine 




for (var i = 1; i <= weeksInYear(new Date().getFullYear()); i++) {

  var test1 = moment().day("d").week(i);

  var oneMonthFromJan312009 = new Date(moment().day("d").week(i));

  oneMonthFromJan312009.setDate(oneMonthFromJan312009.getDate()+6);
  
  if(parseInt(oneMonthFromJan312009.getMonth()) + 1 == parseInt(test1.format("M"))){
      $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear() + '</option>')
  }else{
      $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " " + tabmonth[test1.format("M") - 1] + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear()+ '</option>')
     // alert(test1.format("D") + tabmonth[test1.format("M")] + " - "+ oneMonthFromJan312009.format("D") + tabmonth[oneMonthFromJan312009.format("M")] + "."+test1.format("Y"))
  }
 
 
 
  }





  /////////////////////////////////////////////////////////////////
var brd = $('#test').data("bordereauxId");

var table2 = $('#grid2').DataTable({
    ajax: {
        url: Routing.generate('module_univ_h_albhon_list_honens',{'id':brd}) + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "scrollX": true,
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
       
       
  
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

table2.on('init.dt', function (e, settings) {

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

CustomSearchDatatable.CustomSearchText(api, [1, 3,4,5,6,7,8,9 ], []);
//CustomSearchDatatable.CustomSearchDate(api, [2], []); 
CustomSearchDatatable.CustomSearchSelect(api, [8,9,10,11,12,13,14,15,16], []);
CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
CustomSearchDatatable.CustomSearchDate(api, [2], []);





});
$('#grid2 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table2.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});





var table3 = $('#grid3').DataTable({
    ajax: {
        url: Routing.generate('module_univ_h_albhon_list_honens_delete',{'id':brd}) + location.search, // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "order": [[0, "desc"]],
    "scrollX": true,
    "columns": [
        {"orderable": false, "width": "3%", "searchable": true, "targets": [0]},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "13%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"},
        {"orderable": true, "width": "7%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "7%" /*className: "colonne-gras"*/},
       
       
  
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

table3.on('init.dt', function (e, settings) {

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

CustomSearchDatatable.CustomSearchText(api, [1, 3,4,5,6,7,8,9 ], []);
//CustomSearchDatatable.CustomSearchDate(api, [2], []); 
CustomSearchDatatable.CustomSearchSelect(api, [8,9,10,11,12,13,14,15,16], []);
CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
CustomSearchDatatable.CustomSearchDate(api, [2], []);





});
$('#grid3 tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table3.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

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


    if ($(this).val() == '_ajouter_reglement' && _array_ids) {


        //  alert();
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Vous Voulez vraiment effectuer cette opération ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
           
            if (result.value) {
             
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_h_albhon_reglement_ajouter',{'id':brd}),
                    data: {_array_ids},
                    
                   
                   
                  
            
                    success: function (result) {
                        if (result.code == 200) {
                          
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                            location.reload();
                        }
                      
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                      
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                       
                    }
                   
                });
    
    
    
                }
        });
        
        

    }




    if ($(this).val() == '_supprimer_reglement' && _array_ids) {


        //  alert();
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment Supprimer Ces règlements ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui! ",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
           
            if (result.value) {
             
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_h_albhon_reglement_supprimer',{'id':brd}),
                    data: {_array_ids},
                    
                   
                   
                  
            
                    success: function (result) {
                        if (result.code == 200) {
                          
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                            location.reload();
                        }
                      
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                      
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                       
                    }
                   
                });
    
    
    
                }
        });
        
        

    }


   


});

$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



$('body').on('submit', '#module_univ_h_albhon_apply_transitions', function (e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    var title = dta.get('title');
    if (id) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment passer à l'état '" + title + "' pour cet enregistrement ?",
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
                    url: Routing.generate('module_univ_h_albhon_apply_transitions', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
                    }
                });
            }
        });
    } else {
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});
