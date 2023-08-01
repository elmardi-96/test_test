

const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';


const blueimp = require('./../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min');

/*js tree*/
require('./../../../css/plugins/jsTree/style.min.css');
require('./../../../js/plugins/jsTree/jstree.min.js');  


/*initial object js tree*/

$('#container').jstree();
// document.getElementById("container").style.display = "block";


const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})




$(document).ready(function () {
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
});





$('body').on('submit', '.profil', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('user_profil_index'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});






$('body').on('submit', '#user_theme', function (e) {
   
    var dta = new FormData(this);
var theme = dta.get('theme');
  
    if (theme) {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment changer votre thème ?",
            type: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-pencil'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> No!",
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    data: dta,
                    processData: false,
                    contentType: false,
                    url: Routing.generate('user_profil_theme_update', {'theme': theme}),
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


    /* $(".image-radio").removeClass('image-radio-checked');
     $(this).addClass('image-radio-checked');
     var $radio = $(this).find('input[type="radio"]');
     var $chek = $(this).find('.glyphicon');
     $radio.prop("checked",!$radio.prop("checked"));
     $chek.prop("checked",!$radio.prop("checked")); */
//        $.ajax({
//            type: 'POST',
//            url: Routing.generate('theme_save', {theme: $(this).attr('theme')}),
//            success: function (result) {
//                location.reload();
//                toastr.success(result.message.text, result.message.title, {timeOut: 200});
//            }
//        });

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





$('.new').on('submit', '.form', function (e) {
    //alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
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
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('stock_produit_index', {'id': result.data.id});
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
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
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
            }
        }
    });
    e.preventDefault();
});




$('#_delete').click(function (e) {
    var id = table.row('.selected').id();
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
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
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








$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
    //  alert();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_update_prix_vente', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                // console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {

                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
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
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_fichiers', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {
                console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {

                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
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
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    var id = dta.get('_id');
    $.ajax({
        type: 'POST',
        url: Routing.generate('stock_produit_add_stock', {'id': id}),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {

                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                location.reload();
            } else if (result.code == 403) {
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
$('#_archiver').click(function (e) {
    var id = table.row('.selected').id();
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

$('.password_new').on('change', function(){
    if($(this).val() != $('.password_confirmation').val()) {
        // toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
        $(".password_save").prop("disabled", true);
    } else {
        $(".password_save").prop("disabled", false);
    }

})
$('.password_confirmation').on('change', function(){
    if($(this).val() != $('.password_new').val()) {
        toastr.warning("Les mots de passe ne sont pas identique", "warning", {timeOut: 4000})
        $(".password_save").prop("disabled", true);
    } else {
        $(".password_save").prop("disabled", false);
    }

})
