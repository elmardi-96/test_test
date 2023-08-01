const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';


//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';

global.$ = $;

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

$(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
  });

$('.full-height-scroll').slimscroll({
    height: '800px'
})


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


$('#using_json')
.jstree({
    core: {
        data:
                {
                    "url": Routing.generate('module_univ_horaire_element'),
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
            
    
    }
});



/////////////////////////////////////////


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_h_honens_list') + location.search, // json datasource
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
        {"orderable": true, "width": "10%"},
        {"orderable": true, "width": "30%"},
        {"orderable": true, "width": "20%"},
        {"orderable": true, "width": "20%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "5%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "5%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
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

    CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,6,7 ], []);
   
    CustomSearchDatatable.CustomSearchSelect(api, [5,8,9 ,10,11,12,13,14,15], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
  // CustomSearchDatatable.CustomSearchDate(api, [6], []);




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
    var url = Routing.generate('module_univ_h_honens_show', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
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
        //alert($(this).val());
        _array_ids.push($(this).val());
    });


    if ($(this).val() == '_regle' && _array_ids) {


        $('.modal-title').text('Ajouter Date de Réglement')
        $('.show-reglement').empty();

        $.ajax({

            type: 'POST',
            url: Routing.generate('module_univ_h_albhon_reglement'),
            data: {_array_ids},
                         // To unable request pages to be cached  
                   // To send DOMDocument or non processed data file it is set to false  
            success: function (data) {
                $('.spr').hide()
                $('.show-reglement').html(data);
                import('../../../plugins/select2/select2.full.min.js').then(() => {
                    $('.sel2').select2();
                });
                //require('./mdb.min.js');
                import('../../../mdb.min.js').then(() => {
                    $("#exampleModalPreview").modal("show");
                });

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.spr').hide()
                l.stop();
                console.log(jqXHR.responseText)
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", { timeOut: 4000 })
            }
        })
        
        

    }




    if ($(this).val() == '_annuler' && _array_ids) {

        $('.modal-title').text('Annulé Réglement')
        $('.show-reglement').empty();

        $.ajax({

            type: 'POST',
            url: Routing.generate('module_univ_h_albhon_annuler_reglement'),
            data: {_array_ids},
                         // To unable request pages to be cached  
                   // To send DOMDocument or non processed data file it is set to false  
            success: function (data) {
                $('.spr').hide()
                $('.show-reglement').html(data);
                import('../../../plugins/select2/select2.full.min.js').then(() => {
                    $('.sel2').select2();
                });
                //require('./mdb.min.js');
                import('../../../mdb.min.js').then(() => {
                    $("#exampleModalPreview").modal("show");
                });

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.spr').hide()
                l.stop();
                console.log(jqXHR.responseText)
                //$('#resultats_import').html(jqXHR.responseText)
                toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", { timeOut: 4000 })
            }
        })
        
        

    }


   


});



$('body').on('submit', '._reglement', function (e) {
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
        url: Routing.generate('module_univ_h_albhon_reglement'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                //console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                //alert();
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //alert();
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});





$('body').on('submit', '._annuler', function (e) {
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
        url: Routing.generate('module_univ_h_albhon_annuler_reglement'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                //console.log(result.errors);
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                //alert();
                l.stop();
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //alert();
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});
