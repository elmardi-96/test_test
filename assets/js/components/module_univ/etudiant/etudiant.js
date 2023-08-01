const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';



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
var arr = [];
var tableShow4 = $('.datatable-show4').DataTable(
        {
            "paging": true,

        });




$('.error-class-tab').each(function (index) {
    //alert(arr.indexOf($(this).parents('.tab-pane').attr('id')))
    if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
        $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class="label badge-danger">Erreur!</span>');
    }
    arr = $(this).parents('.tab-pane').attr('id');
})

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

$('.scroll_content').slimscroll({
    height: '400px'
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
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000})
}


$('#_imprimer').click(function (e) {
    var id = $('#test').data("etudiantId");
    if (id) {
        var url = Routing.generate('univ_vpdf_show', {'id': id});
        window.open(url, '_blank');
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
    e.preventDefault();
});



var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('module_univ_etudiant_list') + location.search, // json datasource
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
        {"orderable": true, "width": "15%"/*, "targets": [4, 5]*/},
        {"orderable": true, "width": "20%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
        {"orderable": true, "width": "10%" /*className: "colonne-gras"*/},
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

//console.log($.fn.dataTableExt)
/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('module_univ_etudiant_edit', {'id': $(this).closest('tr').attr('id')});
    window.location.href = url;
});


table.on('init.dt', function (e, settings) {

    let  api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();

    CustomSearchDatatable.CustomSearchText(api, [1, 2, 3, 5,6, 7, 8, 11, 12, 13, 14], []);
    CustomSearchDatatable.CustomSearchSelect(api, [4, 9, 10], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
   // CustomSearchDatatable.CustomSearchSupOrEqual(api, [6], table);




});
//
//if (table.state.loaded()) {
//    window.minS = table.state.loaded().columns[6].search.search;
//}
//
//
//$.fn.dataTable.ext.search.push(
//        function (oSettings, data, iDataIndex) {
//
//            var min = parseFloat($(".between").val() || window.minS);
//            var max = parseFloat(20);
//            var age = parseFloat(data[6]); // use data for the age column
//
//            if ((isNaN(min) && isNaN(max)) ||
//                    (isNaN(min) && age <= max) ||
//                    (min <= age && isNaN(max)) ||
//                    (min <= age && age <= max))
//            {
//                return true;
//            }
//            return false;
//        }
//);


jQuery.each($('.form-errors li'), function (i, val) {

    console.log($(this).text());

});


/*check the form errors*/
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), {timeOut: 4000})
}




if ($.trim($('.form-error').html())) {

}
////////////////////////////////////////////////////////////////////////////////////
$('body').on('click', '.action', function () {
    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});





$('body').on('change', '._multiple_actions', function () {
    var _array_ids = [];


    $.each($("input[name=_action]:checked"), function () {
        _array_ids.push($(this).val());
    });

    if ($(this).val() == '_genener_statut' && _array_ids) {


        //  alert();

        $.ajax({
            type: 'POST',
            url: Routing.generate('module_univ_etudiant_statuts'),
            data: {_array_ids},
            success: function (result) {
                $('.actions').html(result);
                $(".actions").toggleClass('sidebar-open');
            }
        });



    }


});


$('.actions').on('click', '.close-me', function (e) {
    //$('.close-me').click(function (e){ 
    $(".actions").removeClass('sidebar-open');
    e.preventDefault();
})



$('.actions').on('submit', '.form_statut', function (e) {




    var dta = new FormData(this);
    var form_name = $(this).attr('name');

    var selector = $(this).attr('class').split(' ')[0];
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_etudiant_statuts_insert'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result, textStatus, errorThrown) {
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
                l.stop();
                /*   $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/

            } else if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                $(".actions").empty().removeClass('sidebar-open');
                // location.reload();
                table.ajax.reload();
                $('._multiple_actions').val('');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });



    e.preventDefault();
})






//////////////////////////////////////////////////////////////////////////////////

/*alert($('.error-class-tab').parents('.tab-pane').attr('id'));*/

//      toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//      toastr.success(result.message.text, result.message.title, {timeOut: 4000})

//  toastr.error("Erreur", "ddd","dd", {timeOut: 4000})

// add suivi préinscription
$('body').on('submit', '._suivi', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_etudiant_suivis', {'id': id}),
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

// delete Suivi préinscription

$('._delete_suivi').click(function (e) {
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
                    url: Routing.generate('module_univ_etudiant_suivis_delete', {'id': id}),
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







// add appel etudiant module_univ_etudiant_releves_notes
$('body').on('submit', '._appel', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_etudiant_appels', {'id': id}),
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

//_preinscription

$('.show-frais').change(function(e){
   
    $(".actions").toggleClass('sidebar-open');
    e.preventDefault();
})
$('._preinscription').submit(function (e) {
    //alert();
    //console.log($('#using_json').jstree(true).get_selected())
    swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        html: "<label class:'col-sm-4' style='margin-bottom: 0;font-weight: 300;'><input type='checkbox' name='frais' class='check' /> Enregistrer avec frais :</label>",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-save'></i> Enregistrer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    }).then((result) => {
        if (result.value) {
           //alert($('.check').is(':checked'))
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    if($('.check').is(':checked')){
        dta.append('frais', 'on');
    }
    var selector = $(this);
    var id = dta.get('_id');
    //console.log($('#using_json').jstree(true).get_selected())
    var result = $('#using_json').jstree('get_selected', true);
    var checkedNodes = result.filter((node) => {
        return node.state.disabled == false
    }).map((checked) => {
        return checked.id
    });
    console.log(checkedNodes);
    dta.append('formation', checkedNodes);
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_etudiant_preinscription', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result)
            if (result.errors) {
                console.log(result.errors);
                //alert()
                l.stop();
                toastr.warning(result.errors.detail, "warning", {timeOut: 4000})
                //location.reload();
            }
            if (result.code == 200) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                //alert()
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                //location.reload();

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
}
})
    e.preventDefault();
});



/* 
 $('.new').on('submit', '.form', function (e) {
 //alert();
 var form_name = $(this).attr('name');
 var dta = new FormData(this);
 var selector = $(this);
 var id = dta.get('_id');
 var l = Ladda.create(document.querySelector('.my-button'));
 l.start();
 // console.log(e.type);
 $.ajax({
 type: 'POST',
 url: Routing.generate('module_univ_etudiant_new'),
 data: dta,
 processData: false,
 contentType: false,
 success: function (result) {
 l.stop();
 if (result.errors) {
 // console.log(result.errors);
 ShowFormErrors(selector, form_name, result.errors);
 } else if (result.empty) {
 toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
 } else if (result.data) {
 toastr.success(result.message.text, result.message.title, {timeOut: 4000})
 // alert(result.data.id);
 //var url = Routing.generate('module_achat_commandefrs_index');
 var url = Routing.generate('module_univ_etudiant_show', {'id': result.data.id});
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
 */


// add appel etudiant 
$('body').on('submit', '._releve', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get('_id');
    var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_univ_etudiant_releves_notes', {'id': id}),
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
                l.stop();
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
                l.stop();
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});



$('._delete_releve').click(function (e) {
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
                    url: Routing.generate('module_univ_etudiant_releve_delete', {'id': id}),
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




$('body').on('change', '.etablissement', function (e) {
    alert();
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
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            // console.log(html); 
            ($('.etablissement').replaceWith($(html).find('.etablissement')));
        }
    });
    e.preventDefault();
});

// delete Suivi préinscription

$('._delete_appel').click(function (e) {
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
                    url: Routing.generate('module_univ_etudiant_appel_delete', {'id': id}),
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






var jsonData = [
    {
        id: 1,
        text: "Folder 1",
        type: "root",
        state: {
            selected: false
        },
        children: [
            {
                id: 2,
                text: "Sub Folder 1",
                type: "child",
                state: {
                    selected: false
                },
            },
            {
                id: 3,
                text: "Sub Folder 2",
                type: "child",
                state: {

                    selected: false
                },
            }
        ]
    },
    {
        id: 4,
        text: "Folder 2",
        type: "root",
        state: {
            selected: false
        },
        children: []
    }
];
var id = $('#_id').val();
if (id) {
    $('#using_json')
            .jstree({
                core: {
                    data:
                            {
                                "url": Routing.generate('module_univ_etudiant_formation', {'id': id}),
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
                "checkbox": {
                    "keep_selected_style": true,
                    whole_node: true, // to avoid checking the box just clicking the node 
                    tie_selection: true
                },
                plugins: ["search", "themes", "types", "checkbox"]
            }).on('open_node.jstree', function (e, data) {
        data.instance.set_icon(data.node, "glyphicon glyphicon-folder-open");
    }).on('close_node.jstree', function (e, data) {
        data.instance.set_icon(data.node, "glyphicon glyphicon-folder-close");
    });

}
$('._delete_preinscription').click(function (e) {
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
                    url: Routing.generate('module_univ_etudiant_preinscription_delete', {'id': id}),
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

var tableShow3 = $('.datatable-show3').DataTable({"paging": true,
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    }
});




// add appel etudiant module_univ_etudiant_releves_notes
//$('body').on('submit', '#delete', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this);
//    var id = dta.get('_id');
//    var l = Ladda.create(document.querySelector('.my-button'));
//    // Start loading
//    l.start();
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('module_univ_etudiant_appels', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                //console.log(result.errors);
//                l.stop();
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                l.stop();
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                location.reload();
//            } else if (result.code == 403) {
//                l.stop();
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});


$('#_delete').click(function (e) {

    var id = $(this).attr('data-id');
    var token = $(this).attr('data-token');
    console.log(id + ' ' + token);
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
                url: Routing.generate('module_univ_etudiant_delete', {'id': id, 'token': token}),
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        var url = Routing.generate('module_univ_etudiant_index');
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

    e.preventDefault();
});

 $('.datatable-default').DataTable({
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true,

    }
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
         url:Routing.generate('module_univ_etudiant_upload'),  
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


$('.modalActivate').on("click", function(e){
    //alert()  
    $('#_import')[0].reset();
    $('#resultats_import').empty();

})


