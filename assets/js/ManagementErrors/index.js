const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

export  function ShowFormErrors(selector, form_name, errors,id=null,isGroupe = false) {
    $('.errors-list').remove();
    jQuery.each(errors.violations, function (i, val) {
        var columnName = "";
        var x = val.propertyPath;
        if(isGroupe == true){
            columnName = x;
        }else{
        if (x.search('\\[') != -1 && x.search('\\]') != -1) {
            var separators = ['\\]', '\\['];
            var arr = x.split(new RegExp(separators.join('|')));
            var columnName = arr[1];
        }
        if (x.search('data.') != -1) {
            var arr = x.split('.');
            var columnName = arr[1];
        }
    }
        //console.log(x)

/*vérifier s'il s'agit d'une formulaire avec un champ type file */
        if (!jQuery("#" + form_name + "_" + columnName).length > 0) {
            columnName = columnName + '_file';
        }
        if(id){
            columnName = id;
        }
        console.log(columnName);
        if (columnName != "") {
            console.log("#" + form_name + "_" + columnName)
            selector.find("#" + form_name + "_" + columnName).parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
        }
    });
}


export  function ShowFormErrorsWithParam(selector, form_name, errors,id=null,isGroupe = false) {

            $('.errors-list').remove();
            $("#"+selector).parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors + "</span></span></span>"));

}








