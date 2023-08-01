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






export  function autoAjaxDelete(obj) {

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
                        if(obj['reloadTable']==true){
                            obj['table'].ajax.reload();
                        }
                        if(obj['modal'] == true && obj['hideModule'] == true){
                            $('#ModalDocumentDynamique').modal('hide');
                        }
                        if(obj['modal'] == true && obj['showModule'] == true){
                            $('#ModalDocumentDynamique').modal('show');
                        }
                        if(obj['redirection']== 1){
                            window.location.reload();
                        }
                        if(obj['redirection'] == 2){
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



export  function autoAjaxDelete3Param(obj) {

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
                 url: Routing.generate(obj['route'], {'id': obj['id'], 'token': obj['token'], 'char': obj['char']}),
                 success: function (result) {
                     
                     if (result.code == 200) {
                         toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                         if(obj['reloadTable']==true){
                             obj['table'].ajax.reload();
                         }
                         if(obj['modal'] == true && obj['hideModule'] == true){
                             $('#ModalDocumentDynamique').modal('hide');
                         }
                         if(obj['modal'] == true && obj['showModule'] == true){
                             $('#ModalDocumentDynamique').modal('show');
                         }
                         if(obj['redirection']== 1){
                             window.location.reload();
                         }
                         if(obj['redirection'] == 2){
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


export  function autoAjaxRenderController(obj) {

    // var id = $(this).attr('data-id');
   //  var token = $(this).attr('data-token');
     //console.log(id + ' ' + token);
     obj['l'].start();
     
     $.ajax({
        type: "POST",
        url: Routing.generate(obj['route'], obj["parametre"]),
        data: obj['data'],
        processData: false,
        contentType: false,
        success: function (result) {
          obj['l'].stop();
          if(obj['ladda']){
            obj['ladda'].stopAll();
          }
          
          $(".errors-list").remove();
          if (result.errors) {
            //dump(result.errors);
            
            obj["ShowFormErrors"](obj["selector"], obj["form_name"], result.errors);
          } else if (result.empty) {
            toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000,
            });
          }
          if (result.code == 200) {
            // alert(result.data.id);

            //window.id = result.message.data;
            //window.description = result.message.description;
            
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000,
            });
            if(obj['reloadTable']==true){
                obj['table'].ajax.reload();
            }
            if(obj['modal'] == true && obj['hideModule'] == true){
                $('#ModalDocumentDynamique').modal('hide');
                if(obj["refreshSelect"] == true && result.message.description){
                    var data = {
                        id: result.message.data,
                        text: result.message.description
                    };
                    //window.thisElem.parent().find(".sel2")
                    //window.thisElem.css('background','red')
                    var newOption = new Option(data.text, data.id, false, false);
                    obj['selectElement'].parent().find(".sel2").append(newOption).trigger('change.select2');
                    obj['selectElement'].parent().find(".sel2").val(data.id).change(); 
                }
                //return result;
            }
            if(obj['modal'] == true && obj['showModule'] == true){
                $('#ModalDocumentDynamique').modal('show');
                if(obj["refreshSelect"] == true && result.message.description ){
                var data = {
                    id: result.message.data,
                    text: result.message.description
                };
                //window.thisElem.parent().find(".sel2")
                //window.thisElem.css('background','red')
                var newOption = new Option(data.text, data.id, false, false);
                obj['selectElement'].parent().find(".sel2").append(newOption).trigger('change');
                obj['selectElement'].parent().find(".sel2").val(data.id).change(); 
            }
                //return result;
            }
            if(obj['redirection']== 1){
                window.location.reload();
            }
            if(obj['redirection'] == 2){
                var url = Routing.generate(obj['redirection']); 
                window.location.href = url;
            }
            if(obj['autoTrigger'] == 1){
                $("."+obj["triggerClass"]).trigger("click");
            }
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          obj['l'].stop();
          toastr.error("Erreur", errorThrown, { timeOut: 4000 });
        },
      });
 }

 export function listActions(obj){

    $(".action_head").click(function () {
        console.log($(".action").filter(":checked").length);
        $(".action ,.action_head").prop("checked", $(this).prop("checked"));
        $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
      });
      $("body").on("click", ".action", function () {
        $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
      });
      $("body").on("click", ".scolumn_0", function () {
        $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
        $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
      });
    $("body").on("change", ".list_actions", function () {
        //alert()
        
        var _array_ids = [];
        $.each($("input[name=_action]:checked"), function () {
          _array_ids.push($(this).val());
        });
      
        // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');
      
       // console.log($(this).val());
        if ($(this).val() == "_delete") {
          swalWithBootstrapButtons
            .fire({
              showClass: {
                popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment supprimer cette liste ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
              if (result.value) {
                $.ajax({
                  type: "DELETE",
                  url: Routing.generate("t_achatdemandeinternedet_multiple_delete"),
                  data: { _array_ids },
                  success: function (result) {
                    console.log(result);
                    if (result.code == 200) {
                      location.reload();
                      toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                      });
                    }
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(
                      jqXHR.responseJSON.message.text,
                      jqXHR.responseJSON.message.title,
                      { timeOut: 4000 }
                    );
                  },
                });
                $("._multiple_actions").val("");
              }
            });
        }

        if ($(this).val() == "_duppliquer") {
        
          swalWithBootstrapButtons
            .fire({
              showClass: {
                popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment duppliquer cette liste ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
              if (result.value) {
                $.ajax({
                  type: "POST",
                  url: Routing.generate("t_achatdemandeinternedet_multiple_duppliquer"),
                  data: { _array_ids },
                  success: function (result) {
                  //  console.log(result);
                    if (result.code == 200) {
                      location.reload();
                      toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                      });
                    }
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(
                      jqXHR.responseJSON.message.text,
                      jqXHR.responseJSON.message.title,
                      { timeOut: 4000 }
                    );
                  },
                });
                $("._multiple_actions").val("");
              }
            });
        }
        if ($(this).val() == "_desactiver") {
          swalWithBootstrapButtons
            .fire({
              showClass: {
                popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment désactiver cette liste ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-ban'></i> Oui, Désactiver!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
              if (result.value) {
                $.ajax({
                  type: "POST",
                  url: Routing.generate("t_precommande_demmande_desactiver"),
                  data: { _array_ids },
                  success: function (result) {
                    console.log(result);
                    if (result.code == 200) {
                      location.reload();
                      toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                      });
                    }
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(
                      jqXHR.responseJSON.message.text,
                      jqXHR.responseJSON.message.title,
                      { timeOut: 4000 }
                    );
                  },
                });
                $("._multiple_actions").val("");
              }
            });
        }
      
        if ($(this).val() == "_archiver") {
          swalWithBootstrapButtons
            .fire({
              showClass: {
                popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment Archiver cette liste ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
              if (result.value) {
                $.ajax({
                  type: "POST",
                  url: Routing.generate("t_achatdemandeinternedet_multiple_archiver"),
                  data: { _array_ids },
                  success: function (result) {
                    console.log(result);
                    if (result.code == 200) {
                      table.ajax.reload();
                      toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                      });
                    }
                  },
                  error: function (jqXHR, textStatus, errorThrown) {
                    toastr.warning(
                      jqXHR.responseJSON.message.text,
                      jqXHR.responseJSON.message.title,
                      { timeOut: 4000 }
                    );
                  },
                });
                $("._multiple_actions").val("");
              }
            });
        }
        
        if ($(this).val() == "_genener_factures" && _array_ids != null) {
          //alert()
          $.ajax({
              type: "POST",
              url: Routing.generate("ua_t_livraisonfrscab_generer_facture", {id: 0}),
              data: {_array_ids},
              success: function (result) {
                  if (result.code == 403) {
                      $("#MyModal").modal("hide");
                      toastr.warning(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                  } else {
                      $(".bod").html(result).hide();
                      $("#MyModal").modal("show");
                      setTimeout(function () {
                          $(".spr").hide();
                          $(".bod").fadeIn();
                      }, 600);
                  }
              },
          });
      }
      
        if ($(this).val() == "_change_dossier") {
         // alert();
          
          $.ajax({
              type: "POST",
              url: Routing.generate(obj["dossier_path"]),
              data: {_array_ids},
              success: function (result) {
                  if (result.code == 403) {
                      $("#MyModal").modal("hide");
                      toastr.warning(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                  } else {
                      $(".bod").html(result).hide();
                      $('.sel2').select2();
                      $("#MyModal").modal("show");
                      setTimeout(function () {
                          $(".spr").hide();
                          $(".bod").fadeIn();
                      }, 600);
                  }
              },
          });
      }
     

    if ($(this).val() =="_desactiver_commande") {
     // alert();
      swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment désactiver cette liste ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: Routing.generate('ua_t_commandefrscab_desactiver'),
            data: {_array_ids},
            success: function (result) {
              if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                location.reload();
              }
            },
        });
          $("._multiple_actions").val("");
        }
      });
      

  }

  if ($(this).val() =="_desactiver_livraison") {
    // alert();
     swalWithBootstrapButtons
     .fire({
       showClass: {
         popup: "animatedSwal flipInX faster",
       },
       position: "top",
       title: "Confirmation ?",
       text: "Voulez vous vraiment désactiver cette liste ?",
       type: "warning",
       showCancelButton: true,
       showCloseButton: true,
       confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
       cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
     })
     .then((result) => {
       if (result.value) {
         $.ajax({
           type: "POST",
           url: Routing.generate('t_UaTLivraisonfrscab_desactiver'),
           data: {_array_ids},
           success: function (result) {
             if (result.errors) {
               ShowFormErrors(selector, form_name, result.errors);
             } else if (result.code == 403) {
               toastr.warning(result.message.text, result.message.title, {
                 timeOut: 4000,
               });
             } else if (result.data) {
               toastr.success(result.message.text, result.message.title, {
                 timeOut: 4000,
               });
               location.reload();
             }
           },
       });
         $("._multiple_actions").val("");
       }
     });
     

 }

 if ($(this).val() == "_delete_livraison") {
 
  swalWithBootstrapButtons
          .fire({
              showClass: {
                  popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment supprimer cette liste ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
          })
          .then((result) => {
              if (result.value) {
                  $.ajax({
                      type: "DELETE",
                      url: Routing.generate("t_UaTLivraisonfrscab_delete_livraison"),
                      data: {_array_ids},
                      success: function (result) {
                          // console.log(result);
                          if (result.code == 200) {
                              table.ajax.reload();
                              toastr.success(result.message.text, result.message.title, {
                                  timeOut: 4000,
                              });
                          }
                      },
                      error: function (jqXHR, textStatus, errorThrown) {
                          toastr.warning(
                                  jqXHR.responseJSON.message.text,
                                  jqXHR.responseJSON.message.title,
                                  {timeOut: 4000}
                          );
                      },
                  });
                  $("._multiple_actions").val("");
              }
          });
}

 if ($(this).val() =="_desactiver_facture") {
  // alert();
   swalWithBootstrapButtons
   .fire({
     showClass: {
       popup: "animatedSwal flipInX faster",
     },
     position: "top",
     title: "Confirmation ?",
     text: "Voulez vous vraiment désactiver cette liste ?",
     type: "warning",
     showCancelButton: true,
     showCloseButton: true,
     confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
     cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
   })
   .then((result) => {
     if (result.value) {
       $.ajax({
         type: "POST",
         url: Routing.generate('ua_t_facturefrscab_desactiver'),
         data: {_array_ids},
         success: function (result) {
           if (result.errors) {
             ShowFormErrors(selector, form_name, result.errors);
           } else if (result.code == 403) {
             toastr.warning(result.message.text, result.message.title, {
               timeOut: 4000,
             });
           } else if (result.data) {
             toastr.success(result.message.text, result.message.title, {
               timeOut: 4000,
             });
             location.reload();
           }
         },
     });
       $("._multiple_actions").val("");
     }
   });
   

}
if ($(this).val() =="_desactiver_facture_ac") {
  // alert();
   swalWithBootstrapButtons
   .fire({
     showClass: {
       popup: "animatedSwal flipInX faster",
     },
     position: "top",
     title: "Confirmation ?",
     text: "Voulez vous vraiment désactiver cette liste ?",
     type: "warning",
     showCancelButton: true,
     showCloseButton: true,
     confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
     cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
   })
   .then((result) => {
     if (result.value) {
       $.ajax({
         type: "POST",
         url: Routing.generate('ua_t_facturefrscab_desactiver'),
         data: {_array_ids},
         success: function (result) {
           if (result.errors) {
             ShowFormErrors(selector, form_name, result.errors);
           } else if (result.code == 403) {
             toastr.warning(result.message.text, result.message.title, {
               timeOut: 4000,
             });
           } else if (result.data) {
             toastr.success(result.message.text, result.message.title, {
               timeOut: 4000,
             });
             location.reload();
           }
         },
     });
       $("._multiple_actions").val("");
     }
   });
   

}
if ($(this).val() =="_desactiver_facture_av") {
  // alert();
   swalWithBootstrapButtons
   .fire({
     showClass: {
       popup: "animatedSwal flipInX faster",
     },
     position: "top",
     title: "Confirmation ?",
     text: "Voulez vous vraiment désactiver cette liste ?",
     type: "warning",
     showCancelButton: true,
     showCloseButton: true,
     confirmButtonText: "<i class='fa fa-archive'></i> Oui, Désactiver!",
     cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
   })
   .then((result) => {
     if (result.value) {
       $.ajax({
         type: "POST",
         url: Routing.generate('ua_t_facturefrscab_desactiver'),
         data: {_array_ids},
         success: function (result) {
           if (result.errors) {
             ShowFormErrors(selector, form_name, result.errors);
           } else if (result.code == 403) {
             toastr.warning(result.message.text, result.message.title, {
               timeOut: 4000,
             });
           } else if (result.data) {
             toastr.success(result.message.text, result.message.title, {
               timeOut: 4000,
             });
             location.reload();
           }
         },
     });
       $("._multiple_actions").val("");
     }
   });
   

}
      });

      $("body").on("submit", ".change_dossier", function (e) {
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var _array_ids = [];
        $.each($("input[name=_action]:checked"), function () {
          _array_ids.push($(this).val());
        });
        dta.append('data',_array_ids);
        // Create a new instance of ladda for the specified button
        var l = Ladda.create(document.activeElement);
        l.start();
        $.ajax({
          type: "POST",
          url: Routing.generate(obj["dossier_path"]),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            l.stop();
            if (result.errors) {
              ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000,
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              location.reload();
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
          },
        });
        e.preventDefault();
      });


  






 }




