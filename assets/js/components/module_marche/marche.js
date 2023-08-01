const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../ManagementErrors/index.js";
import { deleteCab } from "../../functions/delete.js";
import * as Ladda from "ladda";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import * as listActions from "../../functions/autoFunctionAjax.js";


// alert('zak');


var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("marche_list"), // json datasource
        type: "get",
    },
    deferRender: true,
    serverSide: true,
    // scrollX: true,
    lengthMenu: [
        [10, 15, 25, 50, 100, 200],
        [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 15,
    order: [
        [0, "desc"]
    ],
    columns: [
        { orderable: false, width: "1%", className: 'id', name: 'id' },
        { orderable: true, width: "10%", className: 'code', name: 'code' },
        { orderable: true, width: "10%", className: 'reference', name: 'reference' },
        { orderable: true, width: "20%", className: 'designation', name: 'designation' },
        { orderable: true, width: "20%", className: 'description', name: 'description' },
        { orderable: true, width: "10%", className: 'date_debut', name: 'date_debut' },
        { orderable: true, width: "10%", className: 'date_fin', name: 'date_fin' },
        { orderable: false, width: "10%", className:'montant', name: 'montant' },
        { orderable: false, width: "9%", className:'montant', name: 'test' }
    ],
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
        searchPlaceholder: "RECHERCHER",
        search: "",
    }
    // fixedHeader: true,
});



table.on("init.dt", function(e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});


  // var lineNo = 1;
  //   var cl = "";
  //   $(".det_for")
  //       .hide()
  //       .after(
  //           '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
  //       );

        // alert('ziko');


$(".sle2").select2({ placeholder: "Action", allowClear: true, });


function create_custom_dropdowns(element, att) {

    $.fn.select2.amd.define("select2/i18n/fr", [], function() {
        // Russian
        return {
            errorLoading: function() {
                return "test";
            },
            inputTooLong: function(args) {
                var overChars = args.input.length - args.maximum;
                var message = "Пожалуйста, удалите " + overChars + " символ";
                if (overChars >= 2 && overChars <= 4) {
                    message += "а";
                } else if (overChars >= 5) {
                    message += "ов";
                }
                return message;
            },
            inputTooShort: function(args) {
                var remainingChars = args.minimum - args.input.length;

                var message =
                    "Tapez " +
                    remainingChars +
                    " caractère ou plus pour faire des recherches";

                return message;
            },
            loadingMore: function() {
                return "test";
            },
            maximumSelected: function(args) {
                var message = "Вы можете выбрать " + args.maximum + " элемент";

                if (args.maximum >= 2 && args.maximum <= 4) {
                    message += "а";
                } else if (args.maximum >= 5) {
                    message += "ов";
                }

                return message;
            },
            noResults: function() {
                return "aucun resultat trouve";
            },
            searching: function() {
                return "Rechercher…";
            },
        };
    });

    window.element = element;
    window.att = "current_select_" + att;
    if (window.element.attr("data-entity")) {
        $.ajax({
            type: "GET",
            url: Routing.generate("t_achatdemandeinternecab_find_article_term", {
                selected: att,
                entity: window.element.attr("data-entity"),
                column: window.element.attr("data-column"),
            }),
        }).then(function(data) {
            // console.log(data)
            window.element
                .prepend('<option selected=""></option>')
                .select2({
                    //allowClear: true,
                    language: "fr",
                    data: data.results,
                    minimumResultsForSearch: -1,
                    dropdownCssClass: window.att,
                    width: '100%',
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
    window.element.on("select2:open", function(e) {
        // console.log($(this))

        window.element = $(this);
        $(".tt").val(window.search);

        //alert()
        $(".ttp").remove();
        $(".select2-search--hide").after(
            '<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>'
        );
        $(".tt").typeWatch({
            highlight: false,
            wait: 100,
            captureLength: 2,
            callback: function(valuennn, e) {
                //console.log(e)
                $(".select2-results__option").hide();
                $(".select2-results").prepend(
                    '<p class="select2-results__option">Rechercher…</p>'
                );

                window.search = valuennn;
                if (window.element.attr("data-entity")) {
                    $.ajax({
                        dataType: "json",
                        url: Routing.generate(
                            "t_achatdemandeinternecab_find_article_term", {
                                term: valuennn,
                                selected: att,
                                entity: window.element.attr("data-entity"),
                                column: window.element.attr("data-column"),
                            }
                        ),
                        success: function(result, textStatus, errorThrown) {
                            if (valuennn == $(".tt").val()) {
                                window.element
                                    .empty()
                                    .prepend('<option selected=""></option>')
                                    .select2({
                                        language: "fr",
                                        allowClear: true,
                                        minimumResultsForSearch: -1,
                                        data: result.results,
                                    })
                                    .val(att)
                                    .trigger("change");
                                window.element.select2("open");
                                //alert(this.value)
                                //alert(valuennn)

                                $(".tt").val(window.search);
                                // $(".tt").focus();
                                document.querySelector('.tt').focus();



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

    // window.element.on("select2:close", function(e) {
    //     $(".tt").val(window.search);
    //     $("#t_achatdemandeinternedet_quantite").focus();

    // });
    // window.element.on("select2:select", function(e) {
    //     // alert()
    //     var data = e.params.data;
    //     // console.log(data);
    //     $(".prixunitaire").val(data.prixAchat);

    //     $(".tva").val(data.tva);
    //     $(".remise").val(data.remise);
    //     $(".select2_unite").val(data.unite).trigger("change");
    // });

    // $("body").on("click", ".select2-container", function() {
    //     //$('.select2-search--hide').after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    //     $(".tt").trigger("focus");
    // });
}

// function getSubSelect(myclass, myboolean, mycontent) {
//     //console.log(mycontent)
//     if (myboolean) {
//         $(myclass).prop("disabled", false);
//     } else {
//         $(myclass).prop("disabled", true);
//         $(myclass)
//             .parent()
//             .find(".select2 .select2-selection__arrow")
//             .html('<i class="i-load fa fa-refresh"></i>');
//     }
//     if (mycontent) {
//         var array = myclass.split(",");
//         for (var i = 0, l = array.length; i < l; i++) {
//             //console.log($(mycontent).find(array[i]));
//             $(array[i]).replaceWith($(mycontent).find(array[i]));
//         }
//     }
// }


$(document).ready(function() {
    $(".det_for")
        .hide()
        .after(
            '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
        );
    create_custom_dropdowns($(".articles"), "");
});


// alert('test');



// alert('ziko');





// -----------





var allArticles = [];
var AricleSelected = "";
var action = "ajouter";


function remplirTable() {

    var tr = "";
    allArticles.some(function(element, index, _arr) {
// console.log(element,'najim');
            // var Prix_Qte = parseFloat(element.prixUntaire) * parseFloat(element.qte);
            // var Prix_Tva = Prix_Qte * parseFloat(element.tva) / 100; // Calculate TVA amount
            // var Prix_Remise = parseFloat(element.prixUntaire) * parseFloat(element.remise);
            
            // var Montant = Prix_Qte + Prix_Tva - Prix_Remise;


            // console.log(element.article, element);
            tr = tr + '<tr class="" style=" padding: 8px 10px;"   id="tr_actions_' + index + '">' +
                '<td class="article " style="width:3%; padding: 5px 0px;"> </td>' +
                '<td class="article " style="width:34%; padding: 5px 0px;">' + element.titre_article + '</td>' +
                '<td class="qte" style="width:12%; padding: 5px 0px; ">' + element.qte + '</td>' +
                '<td class="prixUntaire" style="width:11.8%; padding: 5px 0px;">' + element.prixUntaire + '</td>' +
                '<td class="tva" style="width:11.8%; padding: 5px 0px;">' + element.tva + '</td>' +
                '<td class="observation " style="width:20%; padding: 5px 0px;">' + element.observation + '</td>' +
                '<td class="observation " style="width:3%; padding: 5px 0px;"> '+
                '<a class="btn btn-white btn-xs upper  ua_edit"   id="' + index + '"><i class="fa fa-edit text-primary "></i></a> ' +
                '<a class="btn btn-white btn-xs upper  ua_suppimer_ligne" id="' + index + '"><i class="fa fa-trash text-danger "></i></a> </td>' +
                '</tr>';

        // console.log(element);
        // console.log(iban);
    });

    $(".waves-ripple").remove();


   
  

    var formTr = $('tbody > #marche_form').html();
    $('#marche_table > tbody').html(tr);
    $('#marche_table > tbody').append('<tr id="marche_form">' + formTr + '</tr>');
    create_custom_dropdowns($(".articles"), "");
    //  $.ajax({
    //     url: Routing.generate("t_marche_edit"),
    //     method: "get",
    //      dataType: 'json',
    //     contentType: false,
    //     cache: false,
    //     processData: false,
    //     success: function(result) {
    //        console.log(result);
    //        $('#marche_table > tbody').append('<tr id="marche_form">' + result + '</tr>');
             

    //     }

    // });


}


$("body").on("click", ".marche_btn_plus > .add_form_ua", function(e) {


    // console.log( $("#p_marche_det_article").val() + 'ziko');
    verifierForm();
    if (verifierForm() != "") {
        return false;
    }




    if (action == "ajouter") {
        var Article = {};
        Article['article'] = $('#p_marche_det_article').val();
        Article['qte'] = $('#p_marche_det_qt').val();
        Article['prixUntaire'] = $('#p_marche_det_prixUnitaire').val();
        Article['tva'] = $('#p_marche_det_tva').val();
        Article['observation'] = $('#p_marche_det_observation').val();
        Article['titre_article'] = $('#p_marche_det_article').select2('data')[0].text;
        allArticles.push(Article);

    } else {

        allArticles[action].article = $('#p_marche_det_article').val();
        allArticles[action].qte = $('#p_marche_det_qt').val();
        allArticles[action].prixUntaire = $('#p_marche_det_prixUnitaire').val();
        allArticles[action].tva = $('#p_marche_det_tva').val();
        allArticles[action].observation = $('#p_marche_det_observation').val();
        allArticles[action].titre_article =$('#p_marche_det_article').select2('data')[0].text;
        action = "ajouter";
    }


    remplirTable();
    // console.log(allArticles);
    // $('.ua_confirmer_annuler').fadeIn();
    // $('.fermer_ua_technique_det').fadeOut();

});

// $("body").on('click', '.ua_supprimer_article', function() {
//     for (var i = 0; i < allArticles.length; i++) {
//         if (allArticles[i].AricleSelected === AricleSelected) {
//             allArticles.splice(i, 1);
//             i--;
//         }
//     }
//     remplirTable();
//     $('.ua_confirmer_annuler').fadeOut();
//     $('.fermer_ua_technique_det').fadeIn();

// });

// $("body").on('click', '.ua_confirmer', function() {
//     // $('.ua_success').fadeIn();
//     // setTimeout(function () {
//     //     $('.ua_success').fadeOut();
//     // }, 3000); 
//     toastr.success('vous avez bien confirmé', 'Confirmation', {
//         timeOut: 4000,
//     });
//     $("#ModalDocume").modal("hide");
//     $('.fermer_ua_technique_det').fadeOut();

// });


$("body").on('click', '.ua_edit', function() {


    // verifierForm();
    // if (verifierForm() != "") {
    //     return false;
    // }


    action = $(this).attr('id');
    remplirTable();
    var idLine = $(this).attr('id');
    var Article = allArticles[idLine];

    $('#p_marche_det_article').val(Article.titre_article);
    $('#p_marche_det_qt').val(Article.qte);
    $('#p_marche_det_prixUnitaire').val(Article.prixUntaire);
    $('#p_marche_det_tva').val(Article.tva);
    $('#p_marche_det_observation').val(Article.observation);

    var formTr = $('tbody > #marche_form').get();
    $('#tr_actions_' + idLine).before(formTr);
    $('#tr_actions_' + idLine).remove();
});


$("body").on('click', '.ua_suppimer_ligne', function() {
    var idLine = $(this).attr('id');
    allArticles.some(function(element, index, _arr) {
        if (index == idLine) {
            allArticles.splice(index, 1);
        }
    });
    remplirTable();
});

function verifierForm() {
    var message = "";

     
    if ($("#p_marche_det_article").val()  == ""){
        message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs Article" + "<br>";
        $('.ua_alert_danger').html(message);
    }

    $("#marche_form input").each(function() {
        var element = $(this);
        if (element.val() == "" ) {
            message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
            $('.ua_alert_danger').html(message);
        }
    });

    if (message == "") {
        $("#marche_form input").each(function() {

            var element = $(this);
            if (element.attr('id') != 'p_marche_det_article' && element.attr('id') != 'p_marche_det_observation' ) {
                var val = element.val();
                var floatValues = /[+-]?([0-9]*[.])?[0-9]+/;
                // console.log(val.match(floatValues));
                if (val.match(floatValues) && !isNaN(val)) {} else {
                    message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " + $(this).attr('class').split(' ').pop() + "<br>";
                    $('.ua_alert_danger').html(message);

                }
            }
        });
    }


    if (message != "") {
        $('.ua_alert_danger').fadeIn();
    } else {
        $('.ua_alert_danger').fadeOut();
    }
    return message;
}

// alert('ziko');




$("#create_marche").click(function(e) {
    var button = $(this);
    button.prop("disabled", true)
    var form_name = $(".form").attr("name");



    // console.log(formDataDetail);
    // console.log('zak');
    // return false;
    //var params = $('.form').serializeArray();
    // var dta = new FormData($("#t_achatdemandeinternecab")[0]);


    var formData = new FormData();

    // var params = $('.form').serializeArray();

    // $.each(params, function(i, val) {
    //     formData.append(val.name, val.value);
    //     //  console.log(val.name);

    // });

    var message = '';


    $("#p_marche_form input").each(function() {
        var element = $(this);
        if (element.val() == "" ) {
            message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
            // $('.p_marche_alert_danger').html(message);
        }
    });

    var selector = $(".form");
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();

    if(message != ''){
        toastr.warning('warning',message, {
                    timeOut: 4000,
                });
         l.stop();
        return false;
    }

    // console.log(message);


    var Marche = {};
    Marche['reference']   = $('#p_marche_reference').val();
    Marche['designation'] = $('#p_marche_designation').val();
    Marche['description'] = $('#p_marche_description').val();
    Marche['dateDebut']   = $('#p_marche_dateDebut').val();
    Marche['dateFin']     = $('#p_marche_dateFin').val();
    Marche['montant']     = $('#p_marche_montant').val();

    const articles = JSON.stringify(allArticles);
    const data = JSON.stringify(Marche);
    formData.append('marche', data);
    formData.append('allArticles', articles);


   

    $.ajax({
        type: "POST",
        url: '/Marche/insert',
        data: formData,
        processData: false,
        contentType: false,
        success: function(result) {

            if(result = "enregistrer"){
                  var url = Routing.generate("marche_index");
                  window.location.href = url;
            }

          



            
            // l.stop();
            // $(".errors-list").remove();
            // if (result.customErrors) {
            //     $.each(result.customErrors, function(i, value) {
            //         $(".form #" + i).after(
            //             "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
            //             value +
            //             "</span></span></span>"
            //         );
            //     });

            //     // $('#'+)
            // } else if (result.errors) {
            //     //dump(result.errors);
            //     ShowFormErrors(selector, form_name, result.errors);
            //     button.prop("disabled", false)
            // } else if (result.empty) {
            //     toastr.warning(result.message.text, result.message.title, {
            //         timeOut: 4000,
            //     });
            //     button.prop("disabled", false)
                
            // } else if (result.dossierEmpty) {
            //     toastr.warning(result.message.text, result.message.title, {
            //         timeOut: 4000,
            //     });
            //     button.prop("disabled", false)
                
            // } else if (result.data) {
            //     // alert(result.data.id);
            //     toastr.success(result.message.text, result.message.title, {
            //         timeOut: 4000,
            //     });
            //     var url = Routing.generate("t_achatdemandeinternecab_show", {
            //         id: result.data.id,
            //     });
            //     window.location.href = url;
            // }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
            button.prop("disabled", false)
        },
    });
    e.preventDefault();
});

