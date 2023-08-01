const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';


//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';

global.$ = $;

$('.color-picker-1').colorpicker().on('changeColor', function(ev) {
      $(this).css('background',ev.color.toHex())
});
const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})
console.log(chrome.windows);

/*function total(pro){
$.ajax({
    type: 'POST',
      url: Routing.generate('module_univ_pl_emptime_nbr', {id: pro}),
      success: function (result) {
            //console.log(result);
            //alert(result)
            //return result
            window.nbrr = result;

      }
  });
}*/
$(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
  });

$('.full-height-scroll').slimscroll({
    height: '800px'
})

/*$( ".full-height-scroll" ).resizable(
    {
        handles:	"e,w",
        autoHide: true,
        grid: [25,0],
        maxWidth: 950
      }
);*/

var thHeight = $(".full-height-scroll").height();



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
jQuery.each($('.form-errors li'), function (i, val) {
 
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text()); 
if ($('.form-errors').text()!=''){
   toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000}) 
}


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_cours_seance_list') , // json datasource
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
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "15%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "30%"}
        
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



var table3 = $('#grid3').DataTable({
    ajax: {
        url: Routing.generate('module_univ_cours_planning_list') , // json datasource
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
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"}
        
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

var table2 = $('#grid2').DataTable({
    ajax: {
        url: Routing.generate('module_univ_cours_seance_list_generer') , // json datasource
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
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "10%"},
       
        
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
window.seanceChecked = new Array();

$('.seance').on('click', '.action', function () {
    $('.list_actions_b').show()
    
    $(this).prop('checked', function( i, val ) {
        //alert(val)
        if(val){
            window.seanceChecked.push($(this).val());
        }else{
            var index = window.seanceChecked.indexOf($(this).val());

            if(index!=-1){

                window.seanceChecked.splice(index, 1);
            }
        }
        return val;
    });
    //console.log(window.seanceChecked);
    
})


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
                    url: Routing.generate('module_univ_cours_seance_honens_ajouter'),
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











$('.seance').on('click', '.scolumn_0', function () {
    $('.list_actions_b').show()
    window.che = $(this).prop('checked');
    //alert(che)
    window.seanceChecked.length = 0;
    $('input[type=checkbox].action').prop('checked', function( i, val ) {
        if(!val){
              
        }else{
            
        }
        if(window.che){
            window.seanceChecked.push($(this).val());
            return true;
        }else{
            window.seanceChecked.length = 0;
            return false
        }
      });

      //console.log(window.seanceChecked);
    
});

$('.list_actions_b select').change(function(){
    console.log(window.seanceChecked);
    if(window.seanceChecked.length != 0){
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment valider ces enregistrements ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider !",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    url: Routing.generate('module_univ_pl_emptime_generer'),
                    data: {seance:window.seanceChecked},
                    success: function (result) {
                        if (result.errors) {
                            //console.log(result.errors);
                        // l.stop();
                            ShowFormErrors(selector, form_name, result.errors);
                        }
                        if (result.code == 200) {
                            //alert();
                            //l.stop();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            location.reload();
                        } else if (result.code == 403) {
                            //l.stop();
                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        //alert();
                        //l.stop();
                        toastr.error("Erreur", errorThrown, {timeOut: 4000})
                    }
                });
            }
        })
                }else
                {
                    toastr.warning("Impossible d'effectuer cette opération", "warning", {timeOut: 4000})
                }
})
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

    CustomSearchDatatable.CustomSearchText(api, [1, 2 ,3 ,4, 5 ,6, 7,10,11,12], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
    CustomSearchDatatable.CustomSearchDate(api, [8,9], []);

 


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

    CustomSearchDatatable.CustomSearchText(api, [1, 2 ,3 ,4,12], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
 
    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,7,8,9,10,11], []);

 


});

$('#grid tbody').on('click', '.cd_op', function () {
    //alert()
    var url = Routing.generate('module_univ_cours_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});
$('#grid3 tbody').on('click', '.cd_op', function () {
    //alert()
    var url = Routing.generate('module_univ_cours_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});

$('#grid2 tbody').on('click', '.cd_op', function () {
    //alert()
    var url = Routing.generate('module_univ_cours_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
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

    CustomSearchDatatable.CustomSearchText(api, [1, 2 ,3 ,12], []);
    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,7,8,9 ,10,11,], []);
    //CustomSearchDatatable.CustomSearchDate(api, [2], []); 
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
   // CustomSearchDatatable.CustomSearchDate(api, [8,9], []);

 


});

$('select.select2').select2();


/*
$('.new , .edit').on('change', '.groupe', function (e) {
    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();

    console.log(data);
    //alert($form.attr('action'));
    console.log($form.attr('method'));
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: 'get',
        data: data,
        success: function (html) {
            console.log(html); 
            ($('.groupeDetail').replaceWith($(html).find('.groupeDetail')));
        }
    });
    e.preventDefault();
});
*/


/*full callender*/




require('../../../../packages/core/main.js');
require('../../../../packages/list/main.js');

require('./../../../../../node_modules/@fullcalendar/core/main.css');
require('./../../../../../node_modules/@fullcalendar/daygrid/main.css');
require('./../../../../../node_modules/@fullcalendar/timegrid/main.css');


var moment = require('moment');


$('#external-events div.external-event').each(function () {

    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
    });

    // make the event draggable using jQuery UI
    $(this).draggable({
        zIndex: 1111999,
        revert: true, // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
    });

});

$('.seanceEns').click(function (e) {
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
                //alert()
                $.ajax({
                    type: 'DELETE',
                    url: Routing.generate('module_univ_seance_enseignant_delete', {'id': id}),
                    success: function (result) {
                        // console.log(result);
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
        toastr.warning("Impossible d'effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});


$('body').on('submit', '._enseignant', function (e) {
    //alert();
   var form_name = $(this).attr('name');
   var dta = new FormData(this);
   var selector = $(this);
   var id = dta.get('_id');
   var l = Ladda.create(document.querySelector('.my-button'));
   //alert(id);
   // Start loading
   l.start();
   $.ajax({
       type: 'POST',
       url: Routing.generate('module_univ_cours_enseignant', {'id': id}),
       data: dta,
       processData: false,
       contentType: false,
       success: function (result) {
           if (result.errors) {
               console.log(result.errors);
               l.stop();
               ShowFormErrors(selector, form_name, result.errors);
           }
           if (result.code == 200) {
               //alert();
               l.stop();
               toastr.success(result.message.text, result.message.title, {timeOut: 4000})
               location.reload();
           } else if (result.code == 403) {
               l.stop();
               toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

           }
       },
       error: function (jqXHR, textStatus, errorThrown) {
           //alert();
           l.stop();
           toastr.error("Erreur", errorThrown, {timeOut: 4000})
       }
   });
   e.preventDefault();
});


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
  var month = 11, day = 31, week;

  // Find week that 31 Dec is in. If is first week, reduce date until
  // get previous week.
  do {
    d = new Date(year, month, day--);
    week = getWeekNumber(d)[1];
  } while (week == 1);

  return week;
}
var tabmonth = new Array("janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc") ;
//alert(weeksInYear(2020));



//console.log(getWeek(new Date()));
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';


var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

document.addEventListener('DOMContentLoaded', function () {



    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');



    new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
          
            return {
                title: $(eventEl).attr('nature'),
                color: $(eventEl).attr('data-couleur'),
                revert: true,
                duration: '00:30',
                editable: false,

            };
        }
    });
    //window.semId = "semestre_"
    var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        defaultView: 'timeGridWeek', //'dayGridMonth'
        locale: 'fr',
        minTime: "08:00:00",
        maxTime: "18:00:00",
        allDaySlot: false,
        editable: true,
        selectable: true,
        selectHelper: true,
        droppable: true,
        navLinks: true,
        eventLimit: true,
        weekNumbers: true,
        height: "700px",
        contentHeight: 700,
        aspectRatio: 50,
        
        events: [],
        
        eventOverlap: true,

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,listWeek'
          //  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        buttonText:{
              today:    'aujourd\'hui',
        },
        views: {
            
            listWeek: {buttonText: 'Semaine Liste'},
            timeGridWeek:{buttonText: 'Semaine Planning'}, 
            
        },

        drop: function (info) {
            //alert(window.nbr);
            //info.draggedEl.id
            //total(info.draggedEl.id);
            //var n = parseInt(window.nbrr) ; 
            //alert(info.draggedEl.id)
          if($(info.draggedEl).parents("[id*=semestre]").attr('id') == window.sems)
          {
           /* $.ajax({
                type: 'POST',
                  url: Routing.generate('module_univ_pl_emptime_nbr', {id: info.draggedEl.id}),
                  success: function (result) {
                        //console.log(result);
                        //alert(result)
                        //return result
                        //window.nbrr = result;
                        var n = parseInt(result) ; 
                        if(n == 1){*/
                            console.log(info);
                            //alert(info.draggedEl.id);
                            var id = info.draggedEl.id;
                            var start = moment(info.date).format("YYYY-MM-DD HH:mm:ss");
                            var week = moment(info.date, "MMDDYYYY").week();
                            var end = moment(info.date).add(30, 'minutes').format("YYYY-MM-DD HH:mm:ss");
                            $.ajax({
                              type: 'POST',
                                url: Routing.generate('module_univ_pl_emptime_insert', {id: id, start: start, end: end, week: week}),
                                success: function (result) {
                                    console.log(result);
                                    if (result.data) {
                                        $.ajax({
                                            type: 'POST',
                                            url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
                                            success: function (result) {
                                                calendar.batchRendering(() => {
                                                    // remove all events
                                                    calendar.getEvents().forEach(event => event.remove());
                                                
                                                    // add your new events
                                                    result = JSON.parse(result)
                                                    result.forEach(event => calendar.addEvent(event));
                                                });
                                            }
                                        });
                                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                                        
                                        //calendar.refetchEvents();
                                    
                            // is the "remove after drop" checkbox checked?
                //            if (checkbox.checked) {
                //                // if so, remove the element from the "Draggable Events" list
                //                info.draggedEl.parentNode.removeChild(info.draggedEl);
                //            }
                
                        }else{
                            toastr.warning("Nombre d'heures dans ce semestre atteint la limite .", "warning", {timeOut: 4000});
                            $.ajax({
                                type: 'POST',
                                url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
                                success: function (result) {
                                    calendar.batchRendering(() => {
                                        // remove all events
                                        calendar.getEvents().forEach(event => event.remove());
                                    
                                        // add your new events
                                        result = JSON.parse(result)
                                        result.forEach(event => calendar.addEvent(event));
                                    });
                                }
                            });
                        }
            
                  }
              });
          }else{
            
            toastr.warning("La séance ne correspand pas le semestre que vous avez séléctionner .", "warning", {timeOut: 4000});
            info.revert()
        }
            


        },

        eventResize: function (eventResizeInfo)
        {
            var start = moment(eventResizeInfo.event.start).format("YYYY-MM-DD HH:mm:ss");
            var end = moment(eventResizeInfo.event.end).format("YYYY-MM-DD HH:mm:ss");
            var week = moment(eventResizeInfo.event.start, "MMDDYYYY").week();
            var id = eventResizeInfo.event.id;
            console.log(id);
            console.log(start);
            console.log(end);
            $.ajax({
                type: 'POST',
                  url: Routing.generate('module_univ_pl_emptime_get_nbr', {emptime: id,end:end}),
                  success: function (result) {
                    var n = parseInt(result) ; 
                    if(n == 1){
                        $.ajax({
                            type: 'POST',
                            url: Routing.generate('module_univ_cours_resize', {id: id, start: start, end: end, week: week}),
                            success: function (result) {
                                if (result.data) {
                                    $.ajax({
                                        type: 'POST',
                                        url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
                                        success: function (result) {
                                            calendar.batchRendering(() => {
                                                // remove all events
                                                calendar.getEvents().forEach(event => event.remove());
                                            
                                                // add your new events
                                                result = JSON.parse(result)
                                                result.forEach(event => calendar.addEvent(event));
                                            });
                                        }
                                    });
                                    toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                                }
                            }
                        });
                    }else{
            
                        toastr.warning("Nombre d'heures dans ce semestre atteint la limite .", "warning", {timeOut: 4000});
                        eventResizeInfo.revert()
                    }
                  }
            })

        },
        

        eventDrop: function (eventDropInfo)
        {
           // alert(eventDropInfo.event.editable)
            
            console.log('rr');
            var start = moment(eventDropInfo.event.start).format("YYYY-MM-DD HH:mm:ss");
            var end = moment(eventDropInfo.event.end).format("YYYY-MM-DD HH:mm:ss");
            var week = moment(eventDropInfo.event.start, "MMDDYYYY").week();
            var id = eventDropInfo.event.id;


            $.ajax({
                type: 'POST',
                url: Routing.generate('module_univ_cours_resize', {id: id, start: start, end: end, week: week}),
                success: function (result) {
                    if (result.data) {
                        $.ajax({
                            type: 'POST',
                            url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
                            success: function (result) {
                                calendar.batchRendering(() => {
                                    // remove all events
                                    calendar.getEvents().forEach(event => event.remove());
                                
                                    // add your new events
                                    result = JSON.parse(result)
                                    result.forEach(event => calendar.addEvent(event));
                                });
                            }
                        });
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                    }else{
                        eventDropInfo.revert()
                        toastr.warning(result.message.text, "warning", {timeOut: 4000});
                       
                    }
                }
            });

        },
        eventClick: function (info) {
            var eventObj = info.event;
            //module_univ_cours_show
            if(eventObj.id){
            var t = window.open(Routing.generate('module_univ_cours_show', {id: eventObj.id}), "_blank");
            }
          
        },


    });
$('body').on('click','.fc-next-button , .fc-prev-button',function(){
    $(".sem_dupl").html('')
    var end = new Date(moment(calendar.view.currentEnd).format("YYYY-MM-DD HH:mm:ss"));
    //alert(oneMonthFromJan312009.getMonth())
    end.setDate(end.getDate()-1);
    end = moment(end).format("YYYY-MM-DD HH:mm:ss")
    var start = moment(calendar.view.currentStart).format("YYYY-MM-DD HH:mm:ss");
    $('#_id').val(start+'--'+end + '--' +moment(calendar.view.currentEnd, "MMDDYYYY").week())
    //console.log(calendar.view.currentEnd);
    console.log(moment(calendar.view.currentEnd, "MMDDYYYY").week())
    for (var i = 1; i <= weeksInYear(calendar.view.currentStart.getFullYear()); i++) {
        //var test = moment().day("d").week(15).format("M");
        if(i == moment(calendar.view.currentEnd, "MMDDYYYY").week()){ continue; }
        var test1 = moment().day("d").week(i);
        //alert(test)
        var oneMonthFromJan312009 = new Date(moment().day("d").week(i));
        //alert(oneMonthFromJan312009.getMonth())
        oneMonthFromJan312009.setDate(oneMonthFromJan312009.getDate()+6);
        
        if(parseInt(oneMonthFromJan312009.getMonth()) + 1 == parseInt(test1.format("M"))){
            $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear() + '</option>')
        }else{
            $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : "+ test1.format("D") + " " + tabmonth[test1.format("M") - 1] + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear()+ '</option>')
           // alert(test1.format("D") + tabmonth[test1.format("M")] + " - "+ oneMonthFromJan312009.format("D") + tabmonth[oneMonthFromJan312009.format("M")] + "."+test1.format("Y"))
        }
        }
        $('select.select2').select2({
            placeholder: "Semaine dupliquer..."
        });

})
    $('.dupliquer').click(function(){
        //alert(weeksInYear(2019))
        //$(".sem_dupl").html('<option>Semaine dupliquer ...</option>')
        
        //console.log(calendar.view.currentEnd);
        var end = new Date(moment(calendar.view.currentEnd).format("YYYY-MM-DD HH:mm:ss"));
            //alert(oneMonthFromJan312009.getMonth())
        end.setDate(end.getDate()-1);
        end = moment(end).format("YYYY-MM-DD HH:mm:ss")
        var start = moment(calendar.view.currentStart).format("YYYY-MM-DD HH:mm:ss");
        
        $('#_id').val(start+'--'+end + '--' +moment(calendar.view.currentEnd, "MMDDYYYY").week())
        console.log(moment(calendar.view.currentEnd, "MMDDYYYY").week())
        for (var i = 1; i <= weeksInYear(calendar.view.currentStart.getFullYear()); i++) {
            //var test = moment().day("d").week(15).format("M");
            if(i == moment(calendar.view.currentEnd, "MMDDYYYY").week()){ continue; }
            var test1 = moment().day("d").week(i);
            //alert(test)
            var oneMonthFromJan312009 = new Date(moment().day("d").week(i));
            //alert(oneMonthFromJan312009.getMonth())
            oneMonthFromJan312009.setDate(oneMonthFromJan312009.getDate()+6);
            
            if(parseInt(oneMonthFromJan312009.getMonth()) + 1 == parseInt(test1.format("M"))){
                $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear() + '</option>')
            }else{
                $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " " + tabmonth[test1.format("M") - 1] + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear()+ '</option>')
               // alert(test1.format("D") + tabmonth[test1.format("M")] + " - "+ oneMonthFromJan312009.format("D") + tabmonth[oneMonthFromJan312009.format("M")] + "."+test1.format("Y"))
            }
            }
            $('select.select2').select2({
                placeholder: "Semaine dupliquer..."
            });
            $(".actions").toggleClass('sidebar-open');
        /*

       */
    });
    $(".form_dupliquer").submit(function(e){
        //alert()
        var dta = new FormData(this);
        var l = Ladda.create(document.querySelector('.my-button'));
        l.start()
        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_pl_emptime_dupliquer'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
                if(result.code == 200){
                    //l.stop()
                    $.ajax({
                        type: 'POST',
                        url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
                        success: function (result) {
                            calendar.batchRendering(() => {
                                // remove all events
                                calendar.getEvents().forEach(event => event.remove());
                            
                                // add your new events
                                result = JSON.parse(result)
                                result.forEach(event => calendar.addEvent(event));
                            });
                        }
                    });
                    l.stop()
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                    $(".actions").toggleClass('sidebar-open');
                }
                else if(result.code == 403){
                    l.stop()
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000});
                }
                //$('.actions').html(result);
                //$(".actions").toggleClass('sidebar-open');
            }
        });
        e.preventDefault();
    })

    $('#using_json')
        .jstree({
            core: {
                data:
                        {
                            "url": Routing.generate('module_univ_cours_element'),
                            "dataType": "json"
                        }
            },
            types: {
                "root": {
                    "icon": "glyphicon glyphicon-folder-close"
                },
                "child": {
                    "icon": "glyphicon glyphicon-folder-open"
                },
                "default": {
                }
            },
            plugins: ["search", "themes", "types"]
        }).on('open_node.jstree', function (e, data) {
           
           var str = data.node.id;
           if (str.indexOf("semestre") >= 0){
                    window.sems = str;
                    //console.log(ar);
                    //total();

                    $.ajax({
                        type: 'POST',
                        url:Routing.generate('module_univ_pl_emptime_list', {id: str}),
                        success: function (result) {
                            console.log(result)
                            calendar.batchRendering(() => {
                                // remove all events
                                calendar.getEvents().forEach(event => event.remove());
                            
                                // add your new events
                                result = JSON.parse(result)
                                result.forEach(event => calendar.addEvent(event));
                            });
                        }
                    });

                    $.ajax({
                        type: 'POST',
                        url:Routing.generate('module_univ_cours_seance_get_detail', {annee: $("#"+window.sems).attr('data-annee-id'),promotion:$("#"+window.sems).attr('data-promotion-id')}),
                        success: function (result) {
                            var infos = jQuery.parseJSON(result);
                            $(".groupeDetail").html(infos.data);
                            $('select.select2').select2();
                        }
                    });


                    
                
                //calendar.events = Routing.generate('univ_pl_emptime_list', {id: str});
                //alert()
                $('.semestre_select').text('L\'année : ' +$("#"+window.sems).attr('data-annee-designation')+ ' - Le semestre séléctionner : '+$("#"+window.sems+">a").text());
            }
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
}).on('close_node.jstree', function (e, data) {
    
    
    data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
}).on("select_node.jstree", function (e, data){

    var str = data.node.id;
            if (str.indexOf("semestre") >= 0){
                    window.sems = str;
                    //console.log(ar);
                    //total();
                    $.ajax({
                        type: 'POST',
                        url:Routing.generate('module_univ_pl_emptime_list', {id: str}),
                        success: function (result) {
                            console.log(result)
                            calendar.batchRendering(() => {
                                // remove all events
                                calendar.getEvents().forEach(event => event.remove());
                            
                                // add your new events
                                result = JSON.parse(result)
                                result.forEach(event => calendar.addEvent(event));
                            });
                        }
                    });
                    
                    $('.semestre_select').text('L\'année : ' +$("#"+window.sems).attr('data-annee-designation')+ ' - Le semestre séléctionner : '+$("#"+window.sems+">a").text());
            }

            
});
$('.groupe').change(function (e) {
    //alert()



    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('module_univ_get_groupe_detail', {id: $(this).val()}),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
                $(".groupeDetail").html(infos.data);
                $('select.select2').select2();
            }
        });
    } else {

        $.ajax({
            type: 'POST',
            url:Routing.generate('module_univ_pl_emptime_list_groupe', {id: window.sems,group:"null",semaine:"null"}),
            success: function (result) {
                console.log(result)
                calendar.batchRendering(() => {
                    // remove all events
                    calendar.getEvents().forEach(event => event.remove());
                
                    // add your new events
                    result = JSON.parse(result)
                    result.forEach(event => calendar.addEvent(event));
                });
            }
        });

        $.ajax({
            url: Routing.generate('module_univ_get_groupe_detail', {id: 0}),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
                $(".groupeDetail").html(infos.data);
                $('select.select2').select2();
            }
        });

    }
    e.preventDefault();
});

$('.groupeDetail').change(function (e) {
    // alert($(this).val())
    // alert(window.sems)

     if ($.isNumeric($(this).val())) {
 
        window.semn = moment(calendar.getDate().toISOString()).week() - 1;
        window.detail = $(this).val();
        
         //console.log(ar);
         //total();
        // alert(window.sems)
         //alert($(this).val())
         $.ajax({
             type: 'POST',
             url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
             data:{group : $(this).val()},
             success: function (result) {
                 console.log(result)
                 calendar.batchRendering(() => {
                     // remove all events
                     calendar.getEvents().forEach(event => event.remove());
                 
                     // add your new events
                     result = JSON.parse(result)
                     result.forEach(event => calendar.addEvent(event));
                 });
             }
         });
     } else {

        window.detail = null;

         $.ajax({
             type: 'POST',
             url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
             success: function (result) {
                 console.log(result)
                 calendar.batchRendering(() => {
                     // remove all events
                     calendar.getEvents().forEach(event => event.remove());
                 
                     // add your new events
                     result = JSON.parse(result)
                     result.forEach(event => calendar.addEvent(event));
                 });
             }
         });
 
     }
     e.preventDefault();
 });

$("body").on("click",".refresh",function(){
    //alert(window.semn + window.detail + window.sems)
 if(window.semn && window.detail){
    $.ajax({
        type: 'POST',
        url:Routing.generate('module_univ_pl_emptime_list_groupe', {id: window.sems,group:window.detail,semaine:window.semn}),
        success: function (result) {
            console.log(result)
            calendar.batchRendering(() => {
                // remove all events
                calendar.getEvents().forEach(event => event.remove());
            
                // add your new events
                result = JSON.parse(result)
                result.forEach(event => calendar.addEvent(event));
            });
        }
    });
} else {
    //alert(window.semn + window.detail + window.sems)
    $.ajax({
        type: 'POST',
        url:Routing.generate('module_univ_pl_emptime_list', {id: window.sems}),
        success: function (result) {
            console.log(result)
            calendar.batchRendering(() => {
                // remove all events
                calendar.getEvents().forEach(event => event.remove());
            
                // add your new events
                result = JSON.parse(result)
                result.forEach(event => calendar.addEvent(event));
            });
        }
    });

}
});
 //console.log(Calendar.getInstance().get(15));
    calendar.render();

});


$('#container').jstree();



$('._delete_planning').click(function (e) {
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
                //alert()
                $.ajax({
                    type: 'DELETE',
                    url: Routing.generate('module_univ_cours_delete', {'id': id}),
                    success: function (result) {
                        // console.log(result);
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            window.location.href = Routing.generate('module_univ_cours_index');
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
        toastr.warning("Impossible d'effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix d'enseignant ...",
    allowClear: true
});  
// add appel etudiant module_univ_etudiant_releves_notes


$(document).ready(function () {
    $('table.display').DataTable({
    "iDisplayLength": 10,
    "lengthMenu": [
    [
    10,
    15,
    25,
    50,
    100,
    200,
    20000000
    ],
    [
    10,
    15,
    25,
    50,
    100,
    200,
    "All"
    ]
    ],
    "order": [
    [0, "asc"]
    ],
    "columnDefs": [
    {
    "orderable": false,
    "targets": 1
    }
    ],
    "language": {
    "url": "{{ asset('assets/js/jquery.dataTablesFrench.json') }}",
    "processing": true
    }
    
    });
    });





$('body').on('click', '.module_univ_apply_transitions', function (e) {
    var dta = new FormData();
    var id = $(this).attr('data-id');
    var title = $(this).attr('data-title');
    var transition = $(this).attr('data-transition');


    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);

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
                    url: Routing.generate('module_univ_apply_transitions', {'id': id}),
                    success: function (result) {
                        if (result.code == 200) {
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})

                            location.reload();
                        }
                        
                        
                        if (result.code == 201) {
                            // alert(result.valider);
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                            var url = Routing.generate('t_achatdemandeinternecab_apply_generer', {id: result.id});
                            window.location.href = url;
                        } 
                        
                        if (result.code == 403) {
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
        toastr.warning("Commande non renseigné ", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



var tableShow = $('#datatable-show2').DataTable({
    "scrollY":        "200px",
    "scrollCollapse": true,
    "paging":         false,
    "autoWidth": false
     
});




$('.close-link ').click(function(){
    $(".actions").toggleClass('sidebar-open');
})





$('.edit').on('submit', '.form', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();

});

