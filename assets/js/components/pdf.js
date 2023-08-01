const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

require('./../../css/plugins/switchery/switchery.css');

//
//require('./../BsMultiSelect.min');

require('./../../js/plugins/switchery/switchery.js');





$(".select2_users").select2();


//$(".permission-select").each(function (index) {
//    $(this).addClass('permission-select' + index)
//   
//
//
//});

$(function () {

//    $(".permission-select").each(function (index) {
//        $(".permission-select" + index).dashboardCodeBsMultiSelect();
//
//
//    });


$('.chkToggle').bootstrapToggle();
//update_pdf
$('.update_pdf').on('submit',function(e){
    e.preventDefault();
    var form = $(this);
    $.ajax({
        type: 'POST',
        url: Routing.generate('config_pdf'),
        data: form.serialize(),
        success: function (result) {
            location.reload();
            toastr.success(result.message.text, result.message.title, {timeOut: 200});
        }
    });
});

});