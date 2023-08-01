const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);



$('.etablissement').change(function (e) {
   
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('univ_data_select_get_formation', {id: $(this).val()}),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
                $(".formation").html(infos.data);
                $(".promotion").removeAttr("disabled");
            }
        });
    } else {
    }
    e.preventDefault();
});


//$('.formation').change(function (e) {
//    if ($.isNumeric($(this).val())) {
//        $.ajax({
//            url: Routing.generate('get_promotion', {id: $(this).val()}),
//            success: function (result) {
//                var infos = jQuery.parseJSON(result);
//                $(".promotion").html(infos.data);
//                $(".promotion").removeAttr("disabled");
//            }
//        });
//    }
//    e.preventDefault();
//});


