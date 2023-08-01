
const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";

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


var table = $('#grid').DataTable({
    ajax: {
        url: Routing.generate('tr_charge_list'), // json datasource
        type: "get",
    },
    "deferRender": true,
    "stateSave": false,
    "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],

//    "columns": [
//        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//       
//
//
//    ],
    "order": [[0, "desc"]],
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function (e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },

        },
    ],
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    },
    fixedHeader: true,

});

table.on("init.dt", function (e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [1, 2 ,7,9,10,11,], []);
    CustomSearchDatatable.CustomSearchDate(api, [3], []);
    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,8,12,13], []);
    //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
    var url = Routing.generate('tr_charge_edit', { 'id': $(this).closest('tr').attr('id') });
    window.location.href = url;
});






jQuery.each($('.toastr-msg'), function (i, val) {
    console.log($(this).attr('data-toastr'));
    console.log($(this).text());
    if ($(this).attr('data-toastr') == "success") {
        toastr.success("Succees", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "warning") {
        toastr.warning("Warning", $(this).text(), { timeOut: 4000 })
    } else if ($(this).attr('data-toastr') == "error") {
        toastr.error("erreur", $(this).text(), { timeOut: 4000 })
    }
});
jQuery.each($('.form-errors li'), function (i, val) {
    console.log($(this).text());
});
/*check the form errors*/
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
    toastr.error("erreur", $('.form-errors').text(), { timeOut: 4000 })
}

$('.new').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_charge_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
               // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                var url = Routing.generate('tr_charge_index');
                window.location.href = url;
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});


$('.edit').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
      //  url: Routing.generate('tr_charge_edit'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
              //  alert(result.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
                //window.location.href = url;
                location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});

$('body').on('change', '.paiement', function () {
    //alert($(this).val());
    if ($(this).val() == 2) {
        $('.bloc_cheque').show();
        
    } else {
        $('.bloc_cheque').hide();
    }
   // $("#valid").css("display", "block");

});


$(".bod").on("click", "._delete", function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
    var charge = $(this).attr("data-charge");
  
    if (id) {
      var obj = new Object();
      obj["route"] = "tr_charge_reglement_delete";
      obj["id"] = id;
      obj["token"] = token;
      obj["char"] = charge;
      obj["redirection"] = true;
      obj["modal"] = true;
      obj["hideModule"] = true;
      obj["nomModal"] = "ModalDocumentDynamique";
      obj["table"] = table;
      autoFunctionAjax.autoAjaxDelete3Param(obj);
    } else {
      toastr.warning(
        "Veuillez Renseigner une ligne pour effectuer cette operation",
        "warning",
        { timeOut: 4000 }
      );
    }
    e.preventDefault();
  
  });
  function create_custom_dropdowns(element, att) {
    $.fn.select2.amd.define("select2/i18n/fr", [], function () {
      // Russian
      return {
        errorLoading: function () {
          return "test";
        },
        inputTooLong: function (args) {
          var overChars = args.input.length - args.maximum;
          var message = "Пожалуйста, удалите " + overChars + " символ";
          if (overChars >= 2 && overChars <= 4) {
            message += "а";
          } else if (overChars >= 5) {
            message += "ов";
          }
          return message;
        },
        inputTooShort: function (args) {
          var remainingChars = args.minimum - args.input.length;
  
          var message =
            "Tapez " +
            remainingChars +
            " caractère ou plus pour faire des recherches";
  
          return message;
        },
        loadingMore: function () {
          return "test";
        },
        maximumSelected: function (args) {
          var message = "Вы можете выбрать " + args.maximum + " элемент";
  
          if (args.maximum >= 2 && args.maximum <= 4) {
            message += "а";
          } else if (args.maximum >= 5) {
            message += "ов";
          }
  
          return message;
        },
        noResults: function () {
          return "aucun resultat trouve";
        },
        searching: function () {
          return "Rechercher…";
        },
      };
    });
    window.element = element;
    window.att = "current_select_" + att;
    if (window.element.attr("data-entity")) {
      $.ajax({
        type: "GET",
        url: Routing.generate("tr_charge_find_article_term", {
          selected: att,
          entity: window.element.attr("data-entity"),
          column: window.element.attr("data-column"),
        }),
      }).then(function (data) {
        console.log(data);
        window.element
          .prepend('<option selected=""></option>')
          .select2({
            //allowClear: true,
            language: "fr",
            data: data.results,
            minimumResultsForSearch: -1,
            dropdownCssClass: window.att,
          })
          .val(att)
          .trigger("change");
        $(".load-er").fadeOut(70).remove();
        $(".det_for").fadeIn(70);
      });
    } else {
      // toastr.warning('impossible de charger l\'entiter', 'Erreur', {timeOut: 4000})
    }
    //apply to select2
    window.element.on("select2:open", function (e) {
      console.log($(this));
  
      window.element = $(this);
  
      //alert()
      $(".ttp").remove();
      $(" .select2-search--hide").after(
        '<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>'
      );
      $(".tt").typeWatch({
        highlight: false,
        wait: 100,
        captureLength: 2,
        callback: function (valuennn, e) {
          console.log(e);
          $(".select2-results__option").hide();
          $(".select2-results").prepend(
            '<p class="select2-results__option">Rechercher…</p>'
          );
  
          window.search = valuennn;
          //alert((valuennn))
          if (window.element.attr("data-entity")) {
            $.ajax({
              dataType: "json",
              url: Routing.generate(
                "t_achatdemandeinternecab_find_article_term",
                {
                  term: valuennn,
                  selected: att,
                  entity: window.element.attr("data-entity"),
                  column: window.element.attr("data-column"),
                }
              ),
              success: function (result, textStatus, errorThrown) {
                if (valuennn == $(".tt").val()) {
                  window.element
                    .empty()
                    .prepend('<option selected=""></option>')
                    .select2({
                      language: "fr",
                      //allowClear: true,
                      minimumResultsForSearch: -1,
                      data: result.results,
                    })
                    .val(att)
                    .trigger("change");
                  window.element.select2("open");
                  //alert(this.value)
                  //alert(valuennn)
                  $(".tt").focus();
                  $(".tt").val(window.search);
                }
              },
            });
          } else {
            toastr.warning("impossible de charger l'entiter", "Erreur", {
              timeOut: 4000,
            });
          }
        },
      });
    });
  
    window.element.on("select2:select", function (e) {
      //alert()
      var data = e.params.data;
      $(".prixunitaire").val(data.prixAchat);
      $(".tva").val(data.tva);
      $(".select2_unite").val(data.unite).trigger("change");
    });
  
    $("body").on("click", ".select2-container", function () {
      $(".tt").trigger("focus");
    });
  }



  var array_detail = [];
$(".new").on("submit", ".detail_form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(".det_for");

  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($("#tr_chargedet_compte").val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: "POST",
      url: Routing.generate("tr_charge_detail"),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.data) {
          l.stop();
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          $(".article").focus();
          //                console.log(result);
          let lineNo = 1;
          array_detail.push(result.data);
          $(".new .table-detail > tbody").empty();
          $.each(array_detail, function (i, value) {
            var tva = value.tva + " %";
           
          
            if (value.tva == null) {
              tva = "-";
            }
         
            var my_row =
              " <tr><td>" +
              (i + 1) +
              "</td><td>" +
             
              value.designation +
              "</td><td>" +
              value.unite +
              "</td><td>" +
              value.quantite +
              "</td> <td>" +
              value.prixunitaire.toFixed(2) +
              "</td><td>" +
              tva +
              "</td>" +
              "<td>"  +
              value.prixttc.toFixed(2) +
              "</td><td><a class='delete_element' id=" +
              i +
              "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            lineNo++;
          });
          $(".select2_unite").val(5).trigger("change");
          $("#tr_charge_detail").val(JSON.stringify(array_detail));
          $(".compte").val(null).trigger("change");
        }
      },
    });
  } else {
    toastr.warning("Cet article existe deja ", "warning ", { timeOut: 4000 });
    l.stop();
  }
  e.preventDefault();
});




$(".new").on("click", ".delete_element", function (e) {
    array_detail.splice($(this).attr("id"), 1);
  
    $(".new .table-detail > tbody tr").remove();
    $.each(array_detail, function (i, value) {
      var tva = value.tva + " %";
      
      if (value.tva == null) {
        tva = "-";
      }
     
      var my_row =
        " <tr><td>" +
        (i + 1) +
        "</td><td>" +
        value.code +
        " - " +
        value.designation +
        "</td><td>" +
        value.unite +
        "</td><td>" +
        value.quantite +
        "</td> <td>" +
        value.prixunitaire.toFixed(2) +
        "</td><td>" +
        tva +
        "</td><td>" +
        value.prixttc.toFixed(2) +
        "</td><td><a class='delete_element' id=" +
        i +
        "><i class='fa fa-trash text-navy'></i></a></td></tr>";
      $(".new .table-detail > tbody").append(my_row);
      lineNo++;
    });
  });


  $(".new-compte-btn").click(function (e) {
    $(".edit-new-compte").show();
    $(this).hide();
    e.preventDefault();
  });





  $(".edit").on("submit", ".detail_edit", function (e) {
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get("_id");
  
    var row_index = $(this).closest(".table-detail > tbody  > tr").index();
    var col_index = $(this).index();
    $.ajax({
      type: "POST",
      url: Routing.generate("tr_charge_edit_detail", { id: id }),
      success: function (result) {
        // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      //  alert();
        $(".table-detail > tbody  > tr")
          .eq(row_index)
          .addClass("table-tr-style")
          .html("<td colspan='10'>" + result + "</td>");
        $($(".table-detail > tbody  > tr").eq(row_index))
          .find(".det_for")
          .hide()
          .after(
            '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
          );
          
        create_custom_dropdowns(
          $($(".table-detail > tbody  > tr").eq(row_index)).find(".compte"),
          $($(".table-detail > tbody  > tr").eq(row_index))
            .find(".compte")
            .attr("if-selected")
        );
   
        $(".load-er").fadeOut(70).remove();
        $(".det_for").fadeIn(70);
   
        //
        //    alert(row_index);
        //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
        //            console.log(result)
      },
    });
  
    e.preventDefault();
  });
  $(".edit").on("submit", ".detail_form", function (e) {
    //alert();
    var dta = new FormData(this);
  
    console.log(dta);
    var form_name = $(this).attr("name");
    var id = dta.get("_id");
    var selector = $(this);
    var l = Ladda.create(document.activeElement);
    l.start();
    $.ajax({
      type: "POST",
      url: Routing.generate("tr_chargedet_update_detail", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split(".");
            console.log(columnName[1]);
            $(".detail_form #" + form_name + "_" + columnName[1])
              .parent()
              .append(
                "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                  val.title +
                  "</span></span></span>"
              );
          });
        } else if (result.data) {
          l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          location.reload();
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        }
      },
    });
    e.preventDefault();
  });



  /*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = dta.get("_id_cab");
    var selector = $(this);
    // alert(id);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
  
    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: Routing.generate("tr_chargedet_insert", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          $(".errors-list").remove();
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.data) {
          l.stop();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          location.reload();
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        }
      },
    });
  
    e.preventDefault();
  });



  $(".edit").on("submit", ".detail_form_delete", function (e) {
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get("_id");
    var token = dta.get("_token");
    //    var id = $("input[name=_id]").val();
    //    var token = $("input[name=_token]").val();
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
            url: Routing.generate("tr_chargedet_delete", { id: id, token: token }),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
              //   console.log(result);
              if (result.data == "deleted") {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                // selector.parent().parent().hide();
                // swal(result.message.title, result.message.text, result.message.success);
                location.reload();
              } else if ((result.data = "error")) {
                toastr.error(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                //swal(result.message.title, result.message.text, result.message.error);
              }
            },
          });
        }
      });
  
    e.preventDefault();
  });



  $(".sel2").select2();