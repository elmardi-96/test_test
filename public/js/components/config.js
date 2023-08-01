const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

require('./../../css/plugins/switchery/switchery.css');

//
//require('./../BsMultiSelect.min');

require('./../../js/plugins/switchery/switchery.js');





var select2_users = $(".select2_users").select2({
    placeholder: "Utilisateurs Sans groupe",
    allowClear: true
});
var permissions = $(".permissions").select2({
    placeholder: "Permissions",
    allowClear: true
});

$('.Toogle').bootstrapToggle();



$(function () {



    $('.select_all_permissions').change(function () {
        console.log($(this).attr('id'));
        var sousModuleSelected = '.ToogleSousModuleSelect_' + $(this).attr('id');
//        $('.ToogleSousModule').removeClass('ToogleSousModule');
//        var module_id = $(this).attr('id');
        if ($(this).prop('checked')) {
//           $(".selected > option").prop("selected","selected");
//            $(".selected").trigger("change");

            var optionValues = [];

            $(sousModuleSelected + " option").each(function () {
                optionValues.push($(this).val());
            });

            $(sousModuleSelected).val(optionValues).trigger("change");




        } else {
            $(sousModuleSelected).val(null).trigger("change");

        }
    });



    $('.ToogleModule').change(function () {
        $('.ToogleSousModule').removeClass('ToogleSousModule');
        var module_id = $(this).attr('id');
        if ($(this).prop('checked')) {
//            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
//                $(val).bootstrapToggle('on');
//            });
        } else {
            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
                $(val).bootstrapToggle('off');
            });
        }
    });







    $('.ToogleSousModule').change(function () {
        var str = $(this).attr('id');
        var res = str.split("_");
        var module = res[0];
        var sousModule = res[1];

        console.log('ici');
        if ($(this).prop('checked') == true) {

            $('.ToogleSousModuleSelect_' + sousModule).prop("disabled", false);
        } else {

            $('.ToogleSousModuleSelect_' + sousModule).prop("disabled", true);


        }


    });






    $('.form-permission').submit(function (e) {
//$('.new').on('submit', '.form', function (e) {
//    var form_name = $(this).attr('name');
        var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];

        $.ajax({
            type: 'POST',
            url: Routing.generate('us_groupe_permission_insert'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
                //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
                if (result.data) {

                    toastr.success(result.message.text, result.message.title, {timeOut: 4000});

                    setTimeout(function () {
                        location.reload();
                    }, 2000);

                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000})
            }
        });
        e.preventDefault();
    });





    $('.add_user_to_groupe').click(function (e) {
        var groupe_id = $('._groupe').val();
        var user_id = $('.add_user_to_groupe_select').val();
        console.log(groupe_id);
        if (user_id && groupe_id) {
            $.ajax({
                type: 'POST',
                url: Routing.generate('us_groupe_add_user_to_groupe', {user_id: user_id, groupe_id: groupe_id}),
                success: function (result) {
                    if (result.data) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                        setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.error("Erreur", errorThrown, {timeOut: 4000})
                }
            });
        } else {
            toastr.warning("Veuillez renseigner un utilisateur pour effectuer cette opération !!", "Attention", {timeOut: 4000});
        }
        e.preventDefault();
    });

//    $('.delete_user_from_groupe').click(function (e) {
//        var groupe_id = $('._groupe').val();
//        var user_id = $(this).attr('id');
//        console.log(user_id)
//        if (user_id) {
//            swal({
//                title: "Confirmation ?",
//                text: "Voulez vous vraiment supprimer cet utilisateur de ce groupe ?",
//                type: "warning",
//                showCancelButton: true,
//                confirmButtonText: "Oui, supprimer!",
//                cancelButtonText: "No, Annuler!",
//                closeOnConfirm: true,
//                closeOnCancel: true},
//                    function (isConfirm) {
//                        if (isConfirm) {
//                            $.ajax({
//                                type: 'DELETE',
//                                url: Routing.generate('us_groupe_delete_user_from_groupe', {id: user_id}),
//                                success: function (result) {
//                                    if (result.data) {
//                                        toastr.success(result.message.text, result.message.title, {timeOut: 4000});
//                                        setTimeout(function () {
//                                            location.reload();
//                                        }, 2000);
//                                    }
//                                },
//                                error: function (jqXHR, textStatus, errorThrown) {
//                                    toastr.error("Erreur", errorThrown, {timeOut: 4000})
//                                }
//                            });
//
//
//                        }
//                    });
//
//        } else {
//            toastr.warning("Veuillez renseigner un utilisateur pour effectuer cette opération !!", "Attention", {timeOut: 4000});
//        }
//        e.preventDefault();
//    });



});





//var toggleButtons2 = function toggleButtons() {
//    $('.ToogleSousModule').off('change');
//    if ($(this).prop('checked')) {
//        $('.Toogle').not($(this)).each(function (key, val) {
//            $(val).bootstrapToggle('on');
//        });
//    } else {
////        $('.Toogle').not($(this)).each(function (key, val) {
////            $(val).bootstrapToggle('off');
////        });
//    }
//    $('.ToogleSousModule').on('change', toggleButtons2);
//}
//
//$(document).ready(function () {
//    $('.Toogle').on('change', toggleButtons);
//});



//$('#container').jstree({'core': {
//
//        'data': [
//            {"id": "ajson1", "parent": "#", "text": "Simple root node"},
//            {"id": "ajson2", "parent": "#", "text": "Root node 2"},
//            {"id": "ajson3", "parent": "ajson2", "text": "Child 1"},
//            {"id": "ajson4", "parent": "ajson2", "text": "Child 2"},
//        ]
//    },
//    "plugins": ["checkbox"],
//});

/*js tree*/

 // $('#container').jstree();
//
//
//$(document).ready(function(){
//    window.$ = window.jQuery = require('../../js/plugins/jsTree/jstree.min');
// $('#container').jstree({
//            'core' : {
//            'data' : [
//                'Empty Folder',
//                {
//                    'text': 'Resources',
//                    'state': {
//                        'opened': true
//                    },
//                    'children': [
//                        {
//                            'text': 'css',
//                            'children': [
//                                {
//                                    'text': 'animate.css', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'bootstrap.css', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'main.css', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'style.css', 'icon': 'none'
//                                }
//                            ],
//                            'state': {
//                                'opened': true
//                            }
//                        },
//                        {
//                            'text': 'js',
//                            'children': [
//                                {
//                                    'text': 'bootstrap.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'inspinia.min.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'jquery.min.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'jsTree.min.js', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'custom.min.js', 'icon': 'none'
//                                }
//                            ],
//                            'state': {
//                                'opened': true
//                            }
//                        },
//                        {
//                            'text': 'html',
//                            'children': [
//                                {
//                                    'text': 'layout.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'navigation.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'navbar.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'footer.html', 'icon': 'none'
//                                },
//                                {
//                                    'text': 'sidebar.html', 'icon': 'none'
//                                }
//                            ],
//                            'state': {
//                                'opened': true
//                            }
//                        }
//                    ]
//                },
//                'Fonts',
//                'Images',
//                'Scripts',
//                'Templates',
//            ]
//        } 
//    });
// });

