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




export  function deleteCab(obj) {

   // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
    //console.log(id + ' ' + token);
    
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
                url: Routing.generate(obj['route'], {'id': obj['id'], 'token': obj['token']}),
                success: function (result) {
                    if (result.code == 200) {
                        toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                        if(obj['redirection']==null){
                            window.location.reload();
                        }else{
                            var url = Routing.generate(obj['redirection']); 
                            window.location.href = url;
                        }
                        
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
}


export  function deleteDemande(obj) {

    // var id = $(this).attr('data-id');
   //  var token = $(this).attr('data-token');
     //console.log(id + ' ' + token);
     
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
                 url: Routing.generate(obj['route'], {'id': obj['id'], 'token': obj['token']}),
                 success: function (result) {
                     if (result.code == 200) {
                         toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                         if(obj['redirection']==null){
                             window.location.reload();
                         }else{
                             var url = Routing.generate(obj['redirection']); 
                             window.location.href = url;
                         }
                         
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
 }




