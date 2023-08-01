const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
const blueimp = require('./../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min');
const Swal = require('sweetalert2')
import * as Ladda from 'ladda';
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})
const $ = require('jquery');

$('.js-open-video').on('click', function() {
    // you could start a loading animation here

    // use import() as a function - it returns a Promise
    import('../../../../assets/js/plugins/select2/select2.full.min.js').then(() => {
        // you could stop a loading animation here

        // use the larger VideoPlayer module

        $('select').select2({
            insertTag: function (data, tag) {
              // Insert the tag at the end of the results
              data.push(tag);
            }
          });
        

    }).catch(error => 'An error occurred while loading the component');
});