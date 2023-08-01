const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import { warning } from 'toastr';

Routing.setRoutingData(routes);


global.$ = $;

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})



// alert('test');

$("select").select2()

$(".insert").on('click',async function(){
            let factures = $("#codes").val().split(',');
            $(".notify").text('0/'+factures.length);
            console.log(factures);
            let i = 1;
            for (let index = 0; index < factures.length; index++) {
                const element = factures[index].trim();

                console.log(element);
                try {
                  const result = await $.ajax({
                    url: Routing.generate("api_import", {code: element}),
                    type: 'GET',
                  });
                  
                  $(".notify").text(i + '/'+factures.length);
                  i++; 
                } catch (error) {
                  console.log(error);
                  // myToast.find(".toast-message").text(`${index + 1} / ${factures.length} en cours d'inserstion...`);   
                }
                
                // return;
              }
            
       
    

})

