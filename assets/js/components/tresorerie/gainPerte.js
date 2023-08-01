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

const  devise = [];


$("body").on('keypress', '#code_o_paiment', function(e) {
    let code_o_paiment = $(this).val();
    if(e.which == 13)  {
        // alert(typePiece, idPiece)
        if(code_o_paiment == "") {
            toastr.warning("Warning", "Veuillez remplir les champs!", {timeOut: 4000});
            return;
        }
        // var l = Ladda.create(document.activeElement);
        // Start loading
        $.ajax({
            type: "GET",
            url: Routing.generate("gain_perte_devise", {"code_o_paiment": code_o_paiment.trim()}),
            processData: false,
            contentType: false,
            success: function (result) {
     
              
                    $("#my_div_action").html(result["html"]);
                    devise['id']= result["data"]["id"]
                    devise['montant']= result["data"]["montant"]
                    $('#ModaDetailDevise').modal('show');
                    
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
                $("#my_div_action").html('');
               
                // if(!$("#Enregistrer_mt_devise").hasClass("disabled")){
                //     $("#Enregistrer_mt_devise").addClass("disabled")
                // }
            },
        });
    }
  
})


$("body").on('keyup', '#mt_relve', function(e) {
     $(this).val($(this).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, ''))
    let montant_Relve = $(this).val();
    var montant_def= devise['montant']-montant_Relve

    if(montant_Relve && devise['montant'])  {
        var html=`  <div class="hr-line-dashed"></div>       
                    <div class="form-group row">
                            <label class="col-sm-12 ">montant releve</label>
                            <div class="hr-line-dashed"></div>
                            <div class="col-sm-12 " id="" >
                            ${montant_def.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </div>
                        </div>
                        
                        <div class="hr-line-dashed"></div>
                `
                $("#calcul").html(html);
        $(".btn-register").removeClass("disabled")
    }else{
        $("#calcul").html('');
        $(".btn-register").addClass("disabled")
    }
  
})

$("body").on('click', '#Enregistrer_mt_devise', function(e) {
    let mtRelve = $("#mt_relve").val();
    var l = Ladda.create(document.querySelector(".my-button2"));
    l.start();
        $.ajax({
            type: "POST",
            url: Routing.generate("enregistrer_gain_perte_devise"),
            data: {
                id_transaction : devise['id'],
                mt_relve: mtRelve,
            },
            // processData: false,
            // contentType: false,
            success: function (result) {
                toastr.success("Success", "Le virement a ete généré avec succès", {
                    timeOut: 4000,
                });
              $("#Enregistrer_mt_devise").addClass("disabled")  
              $('#ModaDetailDevise').modal('hide');
              devise.length = 0;
              l.stop();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", jqXHR.responseText, {timeOut: 4000});
                l.stop();
            },
        });
    
  
})