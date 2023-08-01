const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);


$('.new').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];

    console.log(e.type);
    $.ajax({
        type: 'POST',
        url: Routing.generate('uv_deviscab_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                $(".form")[0].reset();
                $(".new .table-detail tbody").hide();
                $('.new-article-btn').show();
                $(".new .table-detail > tbody tr").not(":last").remove();
                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 })
        }
    });
    e.preventDefault();
});


var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this).attr('class').split(' ')[0];
    console.log(selector);
    $.ajax({
        type: 'POST',
        url: Routing.generate('t_deviscab_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            if (result.errors) {
                $('.errors-list').remove();
                jQuery.each(result.errors.violations, function (i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split('.');
                    console.log(columnName);
                    console.log("." + selector + " #" + form_name + "_" + columnName[1]);
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                });
            } else if (result.data) {
                $(".detail_form")[0].reset();
                $(".errors-list").remove();
                $('.article').focus();
//                console.log(result);
                let lineNo = 1;
                array_detail.push(result.data);
                $(".new .table-detail > tbody").empty();
                $.each(array_detail, function (i, value) {
                    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article.libelle + "</td><td>" + value.unite.designation + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
                    $(".new .table-detail > tbody").append(my_row);
                    lineNo++;
                });
                $("#uv_deviscab_detail").val(JSON.stringify(array_detail));
            }
        }
    });
    e.preventDefault();
});



$('.new-article-btn').click(function (e) {
    $('.edit-new-article').show();
    $(this).hide();
    e.preventDefault();
});


$('.new , .edit').on('change', '.compteMasse', function (e) {
   // alert('dd');
    var $form = $(this).closest('form');
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr('name')] = $(this).val();

    //alert($form.attr('action'));

    console.log($form.attr('method'));
    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: data,
        success: function (html) {
            //console.log(html); 
            ($('.compteRubrique').replaceWith($(html).find('.compteRubrique')));
        }
    });
    e.preventDefault();
});