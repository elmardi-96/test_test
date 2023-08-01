const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

import { ShowFormErrors } from '../../../ManagementErrors/index.js';

import * as Ladda from 'ladda';


const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

$('.new').on('submit', '.form', function (e) {
    e.preventDefault();
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);

// Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.my-button'));
//alert();
// Start loading
    l.start();
    $.ajax({
        type: 'POST',
        url: Routing.generate('module_achive_projet_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result)
            l.stop();
            $('.errors-list').remove();
            if (result.errors) {

                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                var url = Routing.generate('module_archive_projet_index');
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    
});