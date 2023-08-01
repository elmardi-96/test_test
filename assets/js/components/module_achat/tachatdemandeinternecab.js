
const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
import { ShowFormErrors } from "../../ManagementErrors/index.js";
import { deleteCab } from "../../functions/delete.js";
import * as Ladda from "ladda";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import * as listActions from "../../functions/autoFunctionAjax.js";



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

    window.element.on("select2:close", function(e) {
        $(".tt").val(window.search);
        $("#t_achatdemandeinternedet_quantite").focus();

    });
    window.element.on("select2:select", function(e) {
        // alert()
        var data = e.params.data;
        // console.log(data);
        $(".prixunitaire").val(data.prixAchat);

        $(".tva").val(data.tva);
        $(".remise").val(data.remise);
        $(".select2_unite").val(data.unite).trigger("change");
    });

    $("body").on("click", ".select2-container", function() {
        //$('.select2-search--hide').after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
        $(".tt").trigger("focus");
    });
}

function getSubSelect(myclass, myboolean, mycontent) {
    //console.log(mycontent)
    if (myboolean) {
        $(myclass).prop("disabled", false);
    } else {
        $(myclass).prop("disabled", true);
        $(myclass)
            .parent()
            .find(".select2 .select2-selection__arrow")
            .html('<i class="i-load fa fa-refresh"></i>');
    }
    if (mycontent) {
        var array = myclass.split(",");
        for (var i = 0, l = array.length; i < l; i++) {
            //console.log($(mycontent).find(array[i]));
            $(array[i]).replaceWith($(mycontent).find(array[i]));
        }
    }
}

const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-white btn-xs sySweetStyle",
        cancelButton: "btn btn-warning btn-xs sySweetStyle",
    },
    buttonsStyling: false,
});


var table = $("#grid").DataTable({
    ajax: {
        url: Routing.generate("t_achatdemandeinternecab_list2"), // json datasource
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
        { orderable: false, width: "3%", className: 'td-check pd-achat', name: 'tab.id' },
        { orderable: true, width: "6%", className: 'pd-achat', name: 'tab.code' },
        { orderable: true, width: "5%", className: 'pd-achat', name: 'tab.date_demande' },
        { orderable: true, width: "20%", className: 'td-desciption pd-achat', name: 'tab.description' },
        // {orderable: true, width: "10%", name: 'tab.fournisseur'},
        { orderable: true, width: "10%", className: 'td-type pd-achat', name: 'tab.type' },
        { orderable: true, width: "6%", className: 'pd-achat', name: 'devis' },
        { orderable: true, width: "5%", className: 'td-ht pd-achat', name: 'tab.ht' },
        { orderable: false, width: "5%", className: 'td-tva pd-achat', name: 'tab.tva' },
        { orderable: false, width: "5%", className: 'td-ttc pd-achat', name: 'tab.ttc' },
        { orderable: true, width: "5%", className: 'td-statut pd-achat', searchable: false },
        { orderable: true, width: "5%", className: 'td-statut pd-achat', name: 'tab.position_actuel' },
        { orderable: true, searchable: false, width: "5%" },
    ],
    columnDefs: [{
            searchable: false,
            targets: 11,
            render: function(t, a, l, s) {
                var data = "";
                //console.log(t)
                t.forEach(element => {
                    let link = "";
                    if (element._route_link) {
                        link = "href='" + element._route_link + "'";
                    }
                    data = data + "<li><a data-transition='" + element.name + "' data-id='" + element.id + "' " + link + "  name='" + element.name + "' id_row='" + element.id_row + "' class='dropdown-item " + element.class + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>"
                })

                return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';

            }
        },
        {

            targets: 10,
            className: 'td-ord',

        }
    ],

    /*dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [*/
    /*"columnsToggle",
    {
        text: "Restaurer",
        className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
        action: function (e, dt, node, config) {
            table.state.clear();
            window.location.reload();
        },
    },*/
    /*{
        extend: "excel",
        text: 'Exporter',
        exportOptions: {
            columns: ":visible",
            rows: ":visible",
            format: {
                body: function (data, row, column, node) {
                    data = $('<p>' + data + '</p>').text();
                    return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
                }
            }
        },
    }*/
    /* ],*/
    language: {
        url: Routing.generate("datatables_langue"),
        processing: true,
        searchPlaceholder: "RECHERCHER",
        search: "",
    },
    // fixedHeader: true,
});



table.on("init.dt", function(e, settings) {
    let api = new $.fn.dataTable.Api(settings);
    let st = api.state.loaded();
    let data = api.data();
    CustomSearchDatatable.CustomSearchText(api, [], []);
    CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});



/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function() {
    var url = Routing.generate("t_achatdemandeinternecab_show", {
        id: $(this).closest("tr").attr("id"),
    });
    window.location.href = url;
});


$("body").on("click", ".action", function() {
    $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

//article

$(".select2_demo_3").select2({
    placeholder: "Action",
    allowClear: true,
});

$(".new , .edit").on("change", ".marches", function(e) {
    var $form = $(this).closest("form");
    getSubSelect(".sousmarche", false, "");
    // Simulate form data, but only include the selected sport value.
    var data = {};
    data[$(this).attr("name")] = $(this).val();
    $.ajax({
        url: $form.attr("action"),
        type: $form.attr("method"),
        data: data,
        success: function(html) {
            getSubSelect(".sousmarche", true, html);
            $(".sel2").select2();
        },
    });
    e.preventDefault();
});





//$(".new , .edit").on("change", ".compteMasse", function (e) {
//    getSubSelect(".compteRubrique,.comptePoste,.compte", false, "");
//    var $form = $(this).closest("form");
//    // Simulate form data, but only include the selected sport value.
//    var data = {};
//    data[$(this).attr("name")] = $(this).val();
//    $.ajax({
//        url: $form.attr("action"),
//        type: $form.attr("method"),
//        data: data,
//        success: function (html) {
//            getSubSelect(".compteRubrique,.comptePoste,.compte", true, html);
//            $(".sel2").select2();
//        },
//    });
//    e.preventDefault();
//});
//
//$(".new , .edit").on("change", ".compteRubrique", function () {
//    getSubSelect(".comptePoste,.compte", false, "");
//    var $form = $(this).closest("form");
//    var data = {};
//    data[$(this).attr("name")] = $(this).val();
//    data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
//    // Submit data via AJAX to the form's action path.
//    $.ajax({
//        url: $form.attr("action"),
//        type: $form.attr("method"),
//        data: data,
//        success: function (html) {
//            //   console.log(html);
//            getSubSelect(".comptePoste,.compte", true, html);
//            $(".sel2").select2();
//        },
//    });
//});
//
//$(".new , .edit").on("change", ".comptePoste", function () {
//    getSubSelect(".compte", false, "");
//    var $form = $(this).closest("form");
//    var data = {};
//    data[$(this).attr("name")] = $(this).val();
//    data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
//    data[$(".compteRubrique").attr("name")] = $(".compteRubrique").val();
//    // Submit data via AJAX to the form's action path.
//    $.ajax({
//        url: $form.attr("action"),
//        type: $form.attr("method"),
//        data: data,
//        success: function (html) {
//            getSubSelect(".compte", true, html);
//            $(".sel2").select2();
//        },
//    });
//});



$("#_delete").click(function(e) {



    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));

    if (_array_ids) {


        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment supprimer cette enregistrement ?",
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
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {

                                $('#grid').DataTable().ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                                var url = Routing.generate("t_achatdemandeinternecab_index");
                                window.location.href = url;

                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }



    e.preventDefault();
});


$("body").on("click", ".duppliquer", function(e) {


    //alert();

    var _array_ids = [];

    _array_ids.push($(this).attr("id_row"));

    if (_array_ids) {


        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment Duppliquer cette liste ?",
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
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {

                                table.ajax.reload();

                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });


                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }





});

$("#_duppliquer").click(function(e) {


    //alert();

    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));

    if (_array_ids) {


        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment Duppliquer cette demande ?",
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
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {



                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });


                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }





});

$("#_desactiver").click(function(e) {



    var _array_ids = [];

    _array_ids.push($(this).attr("data-id"));




    if (_array_ids) {


        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment desactiver cette demande  ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
                if (result.value) {
                    $.ajax({
                        type: "POST",
                        url: Routing.generate("t_precommande_demmande_desactiver"),
                        data: { _array_ids },
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {

                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });


                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }




    e.preventDefault();
});



$("body").on("click", "._desactiver_precommande", function(e) {


    //alert();

    var _array_ids = [];

    _array_ids.push($(this).attr("id_row"));

    if (_array_ids) {


        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment desactiver cette liste ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
                if (result.value) {
                    $.ajax({
                        type: "POST",
                        url: Routing.generate("t_precommande_demmande_desactiver"),
                        data: { _array_ids },
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {

                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });


                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }





});
$("body").on("click", "._annuler_precommande", function(e) {


    //alert();

    var _array_ids = [];

    _array_ids.push($(this).attr("id_row"));

    if (_array_ids) {


        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment annuler cette liste ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-ban'></i> Oui, Annuler!",
                cancelButtonText: "<i class='fa fa-times'></i> No!",
            })
            .then((result) => {
                if (result.value) {
                    $.ajax({
                        type: "POST",
                        url: Routing.generate("t_precommande_demmande_annuler"),
                        data: { _array_ids },
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {

                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });


                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }





});

$("body").on("click", "._delete_demmande", function(e) {


    //alert();

    var _array_ids = [];

    _array_ids.push($(this).attr("id_row"));

    if (_array_ids) {


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
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {

                                $('#grid').DataTable().ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });


                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });

                }
            });

    }





});


var formDetails = [];
var arr= [];

//  formDetails.push({
//             articleId: '1',
//             titre: 'ARMOIRE  HAUTE A RIDEAUX ESCAMOTABLES',
//             code: 'ART000001',
//             unite: '100 ML',
//             uniteId: '1',
//             quantite: '20',
//             prixunitaire: '100',
//             tva: '0',
//             remise: '10',
//             observation: 'test ziko',
//             montantRemise: '0',
//             prixttc: '0',
// });



$('#t_achatdemandeinternecab_marche').on('select2:select', function (e) {
  // Do something
  // alert('test');
  $(this).val();

  $.ajax({
        type: "GET",
        url: '/achat/precommande/'+$(this).val()+'/detail/marche',
        processData: false,
        contentType: false,
        success: function(result) {
            if(result.detMarches.length != 0){
                $("#create_demande").removeClass("disabled");
            }else{
                $("#create_demande").last().addClass("disabled");
            }

            $(".det_for_new").html('');
            $(".det_for_new").append(result.html);

            formDetails = [];


            result.detMarches.some(function(element, index, _arr) {
                    formDetails.push({
                        articleId: element.articleId,
                        titre: element.titre,
                        code: element.code,
                        unite: '',
                        uniteId: '',
                        quantite: '0',
                        prixunitaire: element.prixunitaire,
                        tva:  element.tva,
                        remise: '0',
                        observation: element.observation,
                        montantRemise: '0',
                        prixttc: '0',
                        qtReste: element.qtReste,
                        marcheDet_Id: element.marcheDet,
                    });
            });


         
           console.log(formDetails);
           console.log(result.detMarches);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
            button.prop("disabled", false)
        },
    });

});

$("body").on("input", ".det_Qt", function(event) {
    // This function will be called whenever the value of the input changes
    var inputVal =$(this).val();
    var MarcheDet_Id= $(this).attr('data-parent');
    formDetails.some(function(element, index, _arr) {
           if(element.marcheDet_Id === parseInt(MarcheDet_Id)){
               element.quantite = inputVal;
           }
    });
});


$("#create_demande").click(function(e) {

    var button = $(this);
    button.prop("disabled", true)
    var form_name = $(".form").attr("name");


    // var warning = 'la quantité demandée doit être inferieur ou egale à la quantité reste';
    // var test_qt = false;

    // formDetails.some(function(element, index, _arr) {
    //     if (element.qtReste < element.quantite ) {
    //          test_qt= true;
    //     }
    // });

    // if(test_qt){
    //      toastr.warning( warning, 'warning', {timeOut: 4000, });
    //      return false;
    // }

      
     

    // formDetails.some(function(element, index, _arr) {
    //     if (parseInt(element.quantite) < 1 ) {
    //         formDetails.splice(index, 1);
    //     }
    // });


   



    // console.log(formDataDetail);
    // console.log('zak');
    // return false;
    //var params = $('.form').serializeArray();
    // var dta = new FormData($("#t_achatdemandeinternecab")[0]);


    var formData = new FormData();
    var params = $('.form').serializeArray();

    $.each(params, function(i, val) {
        formData.append(val.name, val.value);
        //  console.log(val.name);

    });

    const articles = JSON.stringify(allArticles);
    const data = JSON.stringify(formDetails);
    formData.append('detail', data);
    formData.append('allArticles', articles);



    var selector = $(".form");
    var l = Ladda.create(document.querySelector(".my-button"));
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_insert"),
        data: formData,
        processData: false,
        contentType: false,
        success: function(result) {
            // l.stop();
            $(".errors-list").remove();
            if (result.customErrors) {
                $.each(result.customErrors, function(i, value) {
                    $(".form #" + i).after(
                        "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                        value +
                        "</span></span></span>"
                    );
                });

                // $('#'+)
            } else if (result.errors) {
                //dump(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
                button.prop("disabled", false)
            } else if (result.empty) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                button.prop("disabled", false)
                
            } else if (result.dossierEmpty) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                button.prop("disabled", false)
                
            } else if (result.data) {
                // alert(result.data.id);
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                var url = Routing.generate("t_achatdemandeinternecab_show", {
                    id: result.data.id,
                });
                window.location.href = url;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
            button.prop("disabled", false)
        },
    });
    e.preventDefault();
});



$("#edit_demande").click(function(e) {





    var form_name = $(".form").attr("name");

    //var params = $('.form').serializeArray();
    // var dta = new FormData($("#t_achatdemandeinternecab")[0]);


    var formData = new FormData();
    var params = $('.form').serializeArray();

    $.each(params, function(i, val) {
        formData.append(val.name, val.value);
        //  console.log(val.name);

    });

    var id = formData.get("_id");

    var selector = $(".form");



    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_update", { id: id }),
        data: formData,
        processData: false,
        contentType: false,
        success: function(result) {
            l.stop();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
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

var array_detail = [];
var errors_details = [];
var formDataDetail = [];
var nameDetail = "";
var editColumn = null;
var editArticleColumn = null;
document.addEventListener('DOMContentLoaded', function() {
    errors_details = jQuery.parseJSON($('.errors_details').attr('errors'));
    nameDetail = $('.errors_details').attr('name');
    $('.errors_details').remove();

    // or with jQuery
    //var isAuthenticated = $('.js-user-rating').data('isAuthenticated');
});

function getHt(row) {
    return row.quantite * row.prixunitaire;
}

function getTva(row) {
    var prixTva = (getHt(row) * row.tva) / 100;

    prixTva = prixTva - ((prixTva * row.remise) / 100);

    return prixTva;
}

function getRemise(row) {
    return ((getHt(row)) * (row.remise) / 100);
}

function getPrixTTc(row) {
    return row.prixttc = getHt(row) + getTva(row) - getRemise(row);
}



$(".new").on("click", ".delete_element", function(e) {


    formDataDetail.splice($(this).attr("id"), 1)
    $(".new .table-detail > tbody tr").remove();
    if (formDataDetail.length < 1) { $("#create_demande").last().addClass("disabled"); }

    var lineNo = 1;
    var cl = "";
    $.each(formDataDetail, function(i, value) {

        if (lineNo % 2 == 0) {
            cl = "impair";
        } else {
            cl = "pair"
        }
        var tva = value.tva + " %";
        var remise = value.remise + " %";
        var observation = value.observation;
        if (value.tva == null) {
            tva = "-";
        }
        if (value.observation != "") {
            observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
        }
        var my_row =
            " <tr class=" + cl + "><td>" +
            (i + 1) +
            "</td><td style='text-align:center>" +
            value.code +
            " - " +
            value.titre +
            "</td><td style='text-align:center>" +
            value.unite +
            "</td><td style='text-align:center > " +
            value.quantite +
            "</td> <td style='text-align:center>" +
            value.prixunitaire.toFixed(2) +
            "</td><td style='text-align:center>" +
            tva +
            "</td><td style='text-align:center>" +
            remise +
            "</td><td style='text-align:center>" +
            value.montantRemise.toFixed(2) +
            "</td><td style='text-align:center>" +
            value.prixttc.toFixed(2) +
            "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
            i +
            "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" +
            i +
            "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
        $(".new .table-detail>tbody").append(my_row);
        lineNo++;
    });
});


// -----------

var allArticles = [];
var AricleSelected = "";
var action = "ajouter";


function remplirTable() {

    var tr = "";
    allArticles.some(function(element, index, _arr) {
// console.log(element,'najim');
            var Prix_Qte = parseFloat(element.prixUntaire) * parseFloat(element.qte);
            var Prix_Tva = Prix_Qte * parseFloat(element.tva) / 100; // Calculate TVA amount
            var Prix_Remise = parseFloat(element.prixUntaire) * parseFloat(element.remise);
            
            var Montant = Prix_Qte + Prix_Tva - Prix_Remise;


        if (element.AricleSelected === AricleSelected) {
            // console.log(element.article, element);
            tr = tr + '<tr style="d-flex align-items-center"  id="tr_actions_' + index + '">' +
                '<td class="article text-center">' + element.article + '</td>' +
                '<td class="qte text-center">' + element.qte + '</td>' +
                '<td class="prixUntaire text-center">' + element.prixUntaire + '</td>' +
                '<td class="tva text-center">' + element.tva + '</td>' +
                '<td class="remise text-center">' + element.remise + '</td>' +
                '<td class="montant text-center">' + Montant + '</td>' +
                '<td class="iban text-center">' + element.iban + '</td>' +
                '<td class="swift text-center">' + element.swift + '</td>' +
                '<td class="banque text-center">' + element.banque + '</td>' +
                '<td class="adresse text-center">' + element.adresse + '</td>' +
                '<td style="width: 11% ;" class="text-center ua_technique" >' +
                '<a class="btn btn-white btn-xs upper  ua_edit"   id="' + index + '"><i class="fa fa-edit text-primary "></i></a> ' +
                '<a class="btn btn-white btn-xs upper  ua_suppimer_ligne" id="' + index + '"><i class="fa fa-trash text-danger "></i></a> </td>' +
                '</tr>';
        }
        // console.log(element);
        // console.log(iban);
    });

    $(".waves-ripple").remove();
    var formTr = $('tbody > #ua_technique_form').html();
    $('#ua_technique_table > tbody').html(tr);
    $('#ua_technique_table > tbody').append('<tr id="ua_technique_form">' + formTr + '</tr>');


}


$("body").on("click", ".ua_technique > .add_form_ua", function(e) {



    verifierForm();
    if (verifierForm() != "") {
        return false;
    }


    if (action == "ajouter") {
        var Article = {};
        Article['article'] = $('#ua_technique_det_article').val();
        Article['qte'] = $('#ua_technique_det_qte').val();
        Article['prixUntaire'] = $('#ua_technique_det_prixUntaire').val();
        Article['tva'] = $('#ua_technique_det_tva').val();
        Article['remise'] = $('#ua_technique_det_remise').val();
        Article['remise'] = $('#ua_technique_det_remise').val();
        Article['iban'] = $('#ua_technique_det_iban').val();
        Article['swift'] = $('#ua_technique_det_swift').val();
        Article['banque'] = $('#ua_technique_det_banque').val();
        Article['adresse'] = $('#ua_technique_det_adresse').val();
        Article['AricleSelected'] = AricleSelected;
        allArticles.push(Article);

    } else {

        allArticles[action].article = $('#ua_technique_det_article').val();
        allArticles[action].qte = $('#ua_technique_det_qte').val();
        allArticles[action].prixUntaire = $('#ua_technique_det_prixUntaire').val();
        allArticles[action].tva = $('#ua_technique_det_tva').val();
        allArticles[action].remise = $('#ua_technique_det_remise').val();
        allArticles[action].iban = $('#ua_technique_det_iban').val();
        allArticles[action].swift = $('#ua_technique_det_swift').val();
        allArticles[action].banque = $('#ua_technique_det_banque').val();
        allArticles[action].adresse = $('#ua_technique_det_adresse').val();
        action = "ajouter";
    }


    remplirTable();
    $('.ua_confirmer_annuler').fadeIn();
    $('.fermer_ua_technique_det').fadeOut();

});

$("body").on('click', '.ua_supprimer_article', function() {
    for (var i = 0; i < allArticles.length; i++) {
        if (allArticles[i].AricleSelected === AricleSelected) {
            allArticles.splice(i, 1);
            i--;
        }
    }
    remplirTable();
    $('.ua_confirmer_annuler').fadeOut();
    $('.fermer_ua_technique_det').fadeIn();

});

$("body").on('click', '.ua_confirmer', function() {
    // $('.ua_success').fadeIn();
    // setTimeout(function () {
    //     $('.ua_success').fadeOut();
    // }, 3000); 
    toastr.success('vous avez bien confirmé', 'Confirmation', {
        timeOut: 4000,
    });
    $("#ModalDocume").modal("hide");
    $('.fermer_ua_technique_det').fadeOut();

});


$("body").on('click', '.ua_edit', function() {

    action = $(this).attr('id');
    remplirTable();
    var idLine = $(this).attr('id');
    var Article = allArticles[idLine];

    $('#ua_technique_det_article').val(Article.article);
    $('#ua_technique_det_qte').val(Article.qte);
    $('#ua_technique_det_prixUntaire').val(Article.prixUntaire);
    $('#ua_technique_det_tva').val(Article.tva);
    $('#ua_technique_det_remise').val(Article.remise);
    $('#ua_technique_det_iban').val(Article.iban);
    $('#ua_technique_det_swift').val(Article.swift);
    $('#ua_technique_det_banque').val(Article.banque);
    $('#ua_technique_det_adresse').val(Article.adresse);

    var formTr = $('tbody > #ua_technique_form').get();
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
    $("#ua_technique_form input").each(function() {
        var element = $(this);
        if (element.val() == "") {
            message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
            $('.ua_alert_danger').html(message);
        }
    });

    if (message == "") {
        $("#ua_technique_form input").each(function() {

            var element = $(this);
            if (element.attr('id') != 'ua_technique_det_article') {
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

$("body").on('click', '.importer_canvas', function() {
    $('#ua_import_modal').modal('show');
});
$("body").on('click', '.fermer_ua_import_modal', function() {
    $('#ua_import_modal').modal('hide');
});

$('#file').on('change', function() {
    // console.log($(this).val());
    var value = $(this).val().split(".");
    var extention = value[value.length - 1];
    if (extention != 'xlsx') {
        toastr.warning("veuillez choisir un fichier csv", "warning ", { timeOut: 4000 });
    }
});

// alert('ziko');

$('#ua_import_form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: Routing.generate("import_ua_det"),
        method: "POST",
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        success: function(result) {
            // console.log(result);
            if (result.hasOwnProperty('message')) {
                if (result.message.title === "err") {
                    toastr.warning("Warning", result.message.text, { timeOut: 4000 });
                }
            } else {
                result.some(function(element, index, _arr) {
                    var Article = {};
                    // console.log(element);
                    Article['article'] = element.article;
                    Article['qte'] = element.qte;
                    Article['prixUntaire'] = element.prixUntaire;
                    Article['tva'] = element.tva;
                    Article['remise'] = element.remise;
                    Article['iban'] = element.iban;
                    Article['swift'] = element.swift;
                    Article['banque'] = element.banque;
                    Article['adresse'] = element.adresse;
                    Article['AricleSelected'] = AricleSelected;
                    // console.log(Article);
                    allArticles.push(Article);
                    remplirTable();
                });
                $('#ua_import_modal').modal('hide');

            }
            $('#file').val('');

        }

    });
});


function verifierFloat() {

    // var message = "";
    // $("#ua_technique_form input").each(function() {
    //     var element = $(this);
    //     if (element.attr('id') != 'ua_technique_det_article'){
    //         if(isNaN(parseFloat(element.val()))  ){
    //             message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " +$(this).attr('class').split(' ').pop() + "<br>";
    //             $('.ua_alert_danger').html(message);
    //         }
    //     }

    // });
    // $("#ua_technique_form input").each(function() {
    //     var element = $(this);
    //     if (element.attr('id') != 'ua_technique_det_article'){
    //         var val = element.val();
    //         console.log(element.val());
    //         var floatValues =  /[+-]?([0-9]*[.])?[0-9]+/;
    //         if (val.match(floatValues) && !isNaN(val)) {
    //         }else{
    //             message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " +$(this).attr('class').split(' ').pop() + "<br>";
    //             $('.ua_alert_danger').html(message);

    //         }
    //     }

    // });



    // if(message != ""){
    //     $('.ua_alert_danger').fadeIn();
    // }else{
    //     $('.ua_alert_danger').fadeOut();
    // }
    //  return message;
}




var articlesDet = [];

// -----------

$(".new").on("click", ".detail_form", function(e) {


    var mybutton = $(this);

    var test = false;

    //alert();
    AricleSelected = $('#' + nameDetail + '_article').select2('data')[0].id;

    // if(AricleSelected == 1 && parseFloat($('#' + nameDetail + '_prixunitaire').val()) > 1) {
    //     toastr.error(
    //         'Vous ne pouvez pas passer 1 DH',
    //         'Erreur',
    //         { timeOut: 4000 }
    //     );
    //     return;
    // } 

    var unite = $('#select2-t_achatdemandeinternedet_unite-container'  ).attr('title');

    // alert(nameDetail);

    // return false;


    $('.error-class-tab').remove();
    var flag = 0;
    for (let index = 0; index < formDataDetail.length; index++) {
        if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id && editArticleColumn != formDataDetail[index].articleId) {
            // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
           toastr.error(
                'Ce article est deja existe',
                'Erreur',
                { timeOut: 4000 }
              );
              return;

        }

    }
    for (let index = 0; index < errors_details.length; index++) {
        var name = nameDetail + '[' + errors_details[index].property + ']';
        var value = $('[name="' + nameDetail + '[' + errors_details[index].property + ']' + '"]').val();

        if (errors_details[index].cause == null && value == '') {
            flag = 1;
            // $('[name="' + name + '"]').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[index].message + "</span></span></span>"));
           toastr.error(
                 errors_details[index].message ,
                'Erreur',
                { timeOut: 4000 }
              );
              
        }
    }
    if (flag == 1) {
        return false;
    }
    alert ('ziko');


    if (unite == 'E') {
        $("#ModalDocume").modal("show");
        $('.ua_confirmer_annuler').fadeOut();
        articlesDet.push(AricleSelected);
        remplirTable();
    } else {
        articlesDet.some(function(element, index, _arr) {
            if (element == AricleSelected) {
                $("#ModalDocume").modal("show");
                $('.ua_confirmer_annuler').fadeOut();
            }
        });
        remplirTable();
    }

    allArticles.some(function(element, index, _arr) {
        if (element.AricleSelected == AricleSelected) {
            $('.ua_confirmer_annuler').fadeIn();
        }
    });



    var row = {
        quantite: $('#' + nameDetail + '_quantite').val(),
        prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
        tva: $('#' + nameDetail + '_tva').val(),
        remise: $('#' + nameDetail + '_remise').val(),
    }

    if (editColumn != null) {
        var myselect = mybutton.parent().parent().find(".unite_edit :selected")
        formDataDetail[editColumn] = {
            articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
            titre: $('#' + nameDetail + '_article').select2('data')[0].text,
            code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code,
            unite: myselect.text(),
            uniteId:myselect.val(),
            quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
            prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
            tva: parseFloat($('#' + nameDetail + '_tva').val()),
            remise: parseFloat($('#' + nameDetail + '_remise').val()),
            observation: $('#' + nameDetail + '_observation').val(),
            montantRemise: getRemise(row),
            prixttc: getPrixTTc(row),
        };
    } else {

            formDataDetail.push({
            articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
            titre: $('#' + nameDetail + '_article').select2('data')[0].text,
            code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code,
            unite: $('#' + nameDetail + '_unite').select2('data')[0].text,
            uniteId: $('#' + nameDetail + '_unite').select2('data')[0].id,
            quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
            prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
            tva: parseFloat($('#' + nameDetail + '_tva').val()),
            remise: parseFloat($('#' + nameDetail + '_remise').val()),
            observation: $('#' + nameDetail + '_observation').val(),
            montantRemise: getRemise(row),
            prixttc: getPrixTTc(row),
        })
    }

    var lineNo = 1;
    var cl = "";
    $(".det_for")
        .hide()
        .after(
            '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
        );

    create_custom_dropdowns($(".articles"), "");
    $(".table-detail + table ").removeClass('remove');
    $('.table-detail tbody').html('');
    // console.log(formDataDetail)
    $.each(formDataDetail, function(i, value) {
        if (lineNo % 2 == 0) {
            cl = "impair";
        } else {
            cl = "pair"
        }
       
        var tva = value.tva + " %";
        var remise = value.remise + " %";
        var observation = value.observation;
        if (value.tva == null) {
            tva = "-";
        }
        if (value.observation != "") {
            observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
        }
        //categorie
        var my_row =
            " <tr style='text-align:start'  class=" + cl + "><td>" +
            (i + 1) +
            "</td><td style='text-align:start' >"+ value.articleId +"</td><td style='text-align:start' >" +
            value.code +
            " - " +
            value.titre +
            "</td><td style='text-align:center' >" +
            value.unite +
            "</td><td style='text-align:center' >" +
            value.quantite +
            "</td> <td style='text-align:center' >" +
            value.prixunitaire.toFixed(2) +
            "</td><td style='text-align:center' >" +
            tva +
            "</td><td style='text-align:center' >" +
            remise +
            "</td><td style='text-align:center' >" +
            value.montantRemise.toFixed(2) +
            "</td><td style='text-align:center' >" +
            value.prixttc.toFixed(2) +
            "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
            i +
            "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" +
            i +
            "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
        $(".new .table-detail > tbody").append(my_row);
        lineNo++;
       

        // console.log(my_row);
      
    });



    $("#create_demande").removeClass("disabled");


    $('.det_for input,.det_for select,.det_for textarea').val(null).trigger('change');

    editColumn = null;
    editArticleColumn = null;




    //toastr.warning("Cet article existe deja ", "warning ", {timeOut: 4000});


    e.preventDefault();
});

$(".new").on("click", ".edit_element", function(e) {
    editColumn = $(this).attr('id');
    editArticleColumn = formDataDetail[$(this).attr('id')]['articleId'];

    var cl = "";
    var lineNo = 1;
    $('.table-detail tbody').html('');
    $.each(formDataDetail, function(i, value) {
        if (lineNo % 2 == 0) {
            cl = "impair";
        } else {
            cl = "pair"
        }
        var tva = value.tva + " %";
        var remise = value.remise + " %";
        var observation = value.observation;
        if (value.tva == null) {
            tva = "-";
        }
        if (value.observation != "") {
            observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
        }
        //categorie
        var my_row =
            " <tr class=" + cl + "><td>" +
            (i + 1) +
            "</td><td style='text-align:start' >"+ value.articleId +"</td><td style='text-align:start'>" +
            value.code +
            " - " +
            value.titre +
            "</td><td style='text-align:center'>" +
            value.unite +
            "</td><td style='text-align:center'>" +
            value.quantite +
            "</td> <td style='text-align:center'>" +
            value.prixunitaire.toFixed(2) +
            "</td><td style='text-align:center'>" +
            tva +
            "</td><td style='text-align:center'>" +
            remise +
            "</td><td style='text-align:center'>" +
            value.montantRemise.toFixed(2) +
            "</td><td style='text-align:center'>" +
            value.prixttc.toFixed(2) +
            "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
            i +
            "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" +
            i +
            "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
        $(".new .table-detail > tbody").append(my_row);
        lineNo++;
    });


    var id = $(this).attr('id');
    var row_index = $(this).attr('id');
    var col_index = $(this).index();
    $.ajax({
        type: "POST",
        data: {
            detail: formDataDetail[$(this).attr('id')]
        },
        url: Routing.generate("t_achatdemandeinternecab_edit_detail_new", { id: id }),
        success: function(result) {
            // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
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
                $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"),
                $($(".table-detail > tbody  > tr").eq(row_index))
                .find(".articles")
                .attr("if-selected")
            );
            //$(".load-er").fadeOut().remove();
            // $('.det_for').fadeIn(200)
            $(".bod").empty();
            $(".spr").fadeIn();



            $.ajax({
                type: "POST",
                url: Routing.generate("t_achatdemandeinternecab_find_article"),
                processData: false,
                contentType: false,
                success: function(result, textStatus, errorThrown) {
                    $(".bod").html(result).hide();
                    KTDatatablesSearchOptionsAdvancedSearch.init();
                    setTimeout(function() {
                        $(".spr").hide();
                        $(".bod").fadeIn();
                    }, 600);
                },
            });
            $(".table-detail + table ").addClass('remove');

            return true;
            //    alert(row_index);
            //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
            //            console.log(result)
        },
    });

    e.preventDefault();
});



//$('.table-detail tbody tr:not(.edit-detail)').remove();


$(".edit").on("click", ".detail_form", function(e) {
    var mybutton = $(this);
    $('.error-class-tab').remove();
    var id = $("#_id").val();
    var flag = 0;
    for (let index = 0; index < formDataDetail.length; index++) {
        if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id) {
            // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
           toastr.error(
                'Ce article est deja existe',
                'Erreur',
                { timeOut: 4000 }
              );
              return;

        }



    }
    if (($('.edit-detail[article="' + $('#' + nameDetail + '_article').select2('data')[0].id + '"]').attr('article') == $('#' + nameDetail + '_article').select2('data')[0].id) && ($(this).parents('.edit-detail').attr('article') != $('#' + nameDetail + '_article').select2('data')[0].id)) {
        // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
       toastr.error(
            'Ce article est deja existe',
            'Erreur',
            { timeOut: 4000 }
          );
          return;

    }
    for (let index = 0; index < errors_details.length; index++) {
        var name = nameDetail + '[' + errors_details[index].property + ']';
        var value = $('[name="' + nameDetail + '[' + errors_details[index].property + ']' + '"]').val();

        if (errors_details[index].cause == null && value == '') {
            flag = 1;
            // $('[name="' + name + '"]').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[index].message + "</span></span></span>"));
            toastr.warning(
                errors_details[index].message,
                'Erreur',
                { timeOut: 4000 }
              );
        }
    }
    if (flag == 1) {select2-search__field
        return false;
    }
    var row = {
        quantite: $('#' + nameDetail + '_quantite').val(),
        prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
        tva: $('#' + nameDetail + '_tva').val(),
        remise: $('#' + nameDetail + '_remise').val(),
    }
    formDataDetail = [];
    var myselect = mybutton.parent().parent().find(".unite_edit :selected")
    formDataDetail.push({
        id: $(this).parents('.edit-detail').attr('id'),
        articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
        titre: $('#' + nameDetail + '_article').select2('data')[0].text,
        code: $('#' + nameDetail + '_article').select2('data')[0].code,
        unite: myselect.text(),
        uniteId: myselect.val(),
        quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
        prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
        tva: parseFloat($('#' + nameDetail + '_tva').val()),
        remise: parseFloat($('#' + nameDetail + '_remise').val()),
        observation: $('#' + nameDetail + '_observation').val(),
        montantRemise: getRemise(row),
        prixttc: getPrixTTc(row),
    });
    var formData = new FormData();
    const data = JSON.stringify(formDataDetail)
    formData.append('detail', data);
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternedet_insert", { id: id }),
        data: formData,
        processData: false,
        contentType: false,
        success: function(result) {
            //  console.log(result);
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
                /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
            } else if (result.data) {
                //l.stop();
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


    //toastr.warning("Cet article existe deja ", "warning ", {timeOut: 4000});


    e.preventDefault();
});

$(".edit").on("click", ".delete_element", function(e) {
    formDataDetail.splice($(this).attr("id"), 1)
    $('.edit .table-detail tbody tr:not(.edit-detail)').remove();
    var cl = "";
    var lineNo = 1;
    $.each(formDataDetail, function(i, value) {
        if (lineNo % 2 == 0) {
            cl = "impair";
        } else {
            cl = "pair"
        }
        var tva = value.tva + " %";
        var remise = value.remise + " %";
        var observation = value.observation;
        if (value.tva == null) {
            tva = "-";
        }
        if (value.observation != "") {
            observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
        }
        var my_row =
            " <tr class=" + cl + "><td>" +
            "</td><td style='text-align:start' >"+ value.articleId +"</td><td style='text-align:center'>" +
            value.code +
            " - " +
            value.titre +
            "</td><td style='text-align:center'>" +
            value.unite +
            "</td><td style='text-align:center'>" +
            value.quantite +
            "</td> <td style='text-align:center'>" +
            value.prixunitaire.toFixed(2) +
            "</td><td style='text-align:center'>" +
            tva +
            "</td><td style='text-align:center'>" +
            remise +
            "</td><td style='text-align:center'>" +
            value.montantRemise.toFixed(2) +
            "</td><td style='text-align:center'>" +
            value.prixttc.toFixed(2) +
            "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
            i +
            "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" +
            i +
            "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
        $(".edit .table-detail tbody").append(my_row);
    });
});
var formDataDetailEditRemove = [];
$('.edit').on('click', '.detail_form_delete', function(e) {

        var id = $(this).attr('id');
        var token = $(this).attr('value');

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
                        url: Routing.generate("t_achatdemandeinternedet_delete", {
                            id: id,
                            token: token,
                        }),
                        data: {},
                        processData: false,
                        contentType: false,
                        success: function(result) {
                            //   console.log(result);
                            if (result.data == "deleted") {
                                $('.edit-detail[id="' + $(this).attr('id') + '"]').remove();
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
        //formDataDetailEditRemove.push({id: $(this).attr('id'),token:$(this).attr('value')});

        //console.log(formDataDetailEditRemove);
    })
    /*
     *
     * Edit operations
     *
     */



$(".personalise").on("submit", ".form", function(e) {
    var form_name = $(this).attr("name");
    var selector = $(this);
    var dta = new FormData(this);
    var id = dta.get("_id");
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_personalise", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            l.stop();
            if (result.errors) {
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
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

$(".ajout").click(function(e) {
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_upload", {
            id: $(this).closest("a").attr("id"),
        }),
        success: function(result) {
            $(".bod1").html(result).hide();
            var select2_dossiers = $(".select2_dossiers").select2({
                placeholder: "Choix Dosssier",
                allowClear: true,
            });
            $("#ModalDocumentDynamique1").modal("show");
            $("select.select2").select2();
            setTimeout(function() {
                $(".spr1").hide();
                $(".bod1").fadeIn();
            }, 600);
        },
    });
});



$("body").on("submit", "._upload", function(e) {
    //   alert();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    var id = dta.get("_id");

    var l = Ladda.create(document.querySelector(".my-button"));
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_upload", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            if (result.errors) {
                l.stop();
                //console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                location.reload();
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
        },
    });
    e.preventDefault();
});
$(".edit").on("submit", ".detail_form_delete", function(e) {
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
                    url: Routing.generate("t_achatdemandeinternedet_delete", {
                        id: id,
                        token: token,
                    }),
                    data: dta,
                    processData: false,
                    contentType: false,
                    success: function(result) {
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

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */
$(".edit").on("click", ".detail_edit", function(e) {
    //alert($(this).attr('id'))
    var id = $(this).attr('id');
    var row_index = $(this).closest(".table-detail > tbody  > tr").index();
    var col_index = $(this).index();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_edit_detail", { id: id }),
        success: function(result) {
            // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
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
                $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"),
                $($(".table-detail > tbody  > tr").eq(row_index))
                .find(".articles")
                .attr("if-selected")
            );
            //$(".load-er").fadeOut().remove();
            // $('.det_for').fadeIn(200)
            $(".bod").empty();
            $(".spr").fadeIn();

            $.ajax({
                type: "POST",
                url: Routing.generate("t_achatdemandeinternecab_find_article"),
                processData: false,
                contentType: false,
                success: function(result, textStatus, errorThrown) {
                    $(".bod").html(result).hide();
                    KTDatatablesSearchOptionsAdvancedSearch.init();
                    setTimeout(function() {
                        $(".spr").hide();
                        $(".bod").fadeIn();
                    }, 600);
                },
            });
            return true;
            //    alert(row_index);
            //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
            //            console.log(result)
        },
    });

    e.preventDefault();
});


$(".new").on("click", ".detail_edit", function(e) {


    var id = $(this).attr('id');
    var row_index = $(this).closest(".table-detail > tbody  > tr").index();
    var col_index = $(this).index();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_edit_detail", { id: id }),
        success: function(result) {
            // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
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
                $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"),
                $($(".table-detail > tbody  > tr").eq(row_index))
                .find(".articles")
                .attr("if-selected")
            );
            //$(".load-er").fadeOut().remove();
            // $('.det_for').fadeIn(200)
            $(".bod").empty();
            $(".spr").fadeIn();

            $.ajax({
                type: "POST",
                url: Routing.generate("t_achatdemandeinternecab_find_article"),
                processData: false,
                contentType: false,
                success: function(result, textStatus, errorThrown) {
                    $(".bod").html(result).hide();
                    KTDatatablesSearchOptionsAdvancedSearch.init();
                    setTimeout(function() {
                        $(".spr").hide();
                        $(".bod").fadeIn();
                    }, 600);
                },
            });
            return true;
            //    alert(row_index);
            //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
            //            console.log(result)
        },
    });

    e.preventDefault();
});

/*
 *
 * Enregistrer  la formulaire de modification  d'article
 *
 */

$(".edit").on("submit", ".detail_form", function(e) {
    var dta = new FormData(this);
    //console.log(dta);
    var form_name = $(this).attr("name");
    var id = dta.get("_id");
    var selector = $(this);
    var l = Ladda.create(document.activeElement);
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_update_detail", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            //  console.log(result);
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
                // $('.errors-list').remove();

                /*  jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
            } else if (result.data) {
                l.stop();
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                location.reload();
            }
        },
    });
    e.preventDefault();
});

/*afficher la formulaire d'ajout d'un nouveau article */

//$('.edit-new-article-btn').click(function (e) {
//    $('.edit-new-article').show();
//    $(this).hide();
//    e.preventDefault();
//});

$(".new-article-btn").click(function(e) {
    $(".remove-item-edit-add").removeClass('remove-item-edit-add');
    $(this).hide();
    e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function(e) {
    //alert("hi");
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = $("#_id").val();
    var selector = $(this);

    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternedet_insert", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            //  console.log(result);
            if (result.errors) {
                l.stop();
                ShowFormErrors(selector, form_name, result.errors);
                /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
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

$(".show-me").click(function(e) {
    $(".actions").toggleClass("sidebar-open");
    e.preventDefault();
});

$(".actions").on("click", ".close-me", function(e) {
    //$('.close-me').click(function (e){
    $(".actions").removeClass("sidebar-open");
    e.preventDefault();
});

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */

$("#grid tbody").on("click", "tr", function() {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
    } else {
        table.$("tr.selected").removeClass("selected");
        $(this).addClass("selected");
    }
});

var mem = $("#data_1 .input-group.date").datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
});

var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);

$("#selector").datepicker("setDate", yearsAgo);

$(".actions").on("submit", ".form_statut", function(e) {
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = table.row(".selected").id();
    if (id) {
        $.ajax({
            type: "POST",
            url: Routing.generate("t_achatdemandeinternecab_statut", { id: id }),
            data: dta,
            processData: false,
            contentType: false,
            success: function(result, textStatus, errorThrown) {
                //            console.log(result);
                //            console.log(textStatus);
                //            console.log(errorThrown);
                if (result.errors) {
                    $(".errors-list").remove();
                    jQuery.each(result.errors.violations, function(i, val) {
                        var column = val.propertyPath;
                        var columnName = column.split(".");
                        // console.log(columnName[1]);
                        $(".form_statut #" + form_name + "_" + columnName[1]).after(
                            // "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                            // val.title +
                            // "</span></span></span>"
                           toastr.error(
                                val.title ,
                                'Erreur',
                                { timeOut: 4000 }
                              )
                            
                        );
                    });
                } else if (result.code == 200) {
                    table.ajax.reload();
                    toastr.success(result.message.text, result.message.title, {
                        timeOut: 4000,
                    });
                    $(".actions").empty().removeClass("sidebar-open");
                    // location.reload();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, { timeOut: 4000 });
            },
        });
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }

    e.preventDefault();
});

$(document).on("click", "._t_affaire_quick", function(e) {
    $.ajax({
        type: "POST",
        url: Routing.generate("t_affaire_new_quick"),
        success: function(result) {
            $(".actions").html(result);
            $(".actions").toggleClass("sidebar-open");
        },
    });
    e.preventDefault();
});

$(document).on("submit", ".form_t_affaire_quick", function(e) {
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var selector = $(this).attr("class").split(" ")[0];
    $.ajax({
        type: "POST",
        data: dta,
        processData: false,
        contentType: false,
        url: Routing.generate("t_affaire_new_quick_insert"),
        success: function(result) {
            if (result.errors) {
                $(".errors-list").remove();
                jQuery.each(result.errors.violations, function(i, val) {
                    var column = val.propertyPath;
                    var columnName = column.split(".");
                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(
                        "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                        val.title +
                        "</span></span></span>"
                    );
                });
            } else if (result.data) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                $(".actions").empty().removeClass("sidebar-open");

                var data = {};

                $.ajax({
                    url: Routing.generate("t_achatdemandeinternecab_new"),
                    type: "POST",
                    data: data,
                    success: function(html) {
                        $(".affaire").replaceWith($(html).find(".affaire"));
                    },
                });
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
        },
    });
    e.preventDefault();
});

$("#_edit").click(function(e) {
    var id = table.row(".selected").id();
    if (id) {
        var url = Routing.generate("t_achatdemandeinternecab_edit", { id: id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }
    e.preventDefault();
});

$("#_show").click(function(e) {
    var id = table.row(".selected").id();

    if (id) {
        var url = Routing.generate("t_achatdemandeinternecab_show", { id: id });
        window.location.href = url;
        // console.log(url)
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }
    e.preventDefault();
});

$("#_statut").click(function(e) {
    var id = table.row(".selected").id();
    if (id) {
        $.ajax({
            type: "POST",
            url: Routing.generate("t_achatdemandeinternecab_statut", { id: id }),
            success: function(result) {
                $(".actions").html(result);
                $(".actions").toggleClass("sidebar-open");
            },
        });
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }

    e.preventDefault();
});

$("#_archiver").click(function(e) {
    var id = table.row(".selected").id();
    if (id) {
        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment Archiver cet enregistrement ?",
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
                        url: Routing.generate("t_achatdemandeinternecab_archive", {
                            id: id,
                        }),
                        success: function(result) {
                            if (result.code == 200) {
                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                                $(".actions").empty().removeClass("sidebar-open");
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });
                }
            });
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }

    e.preventDefault();
});

$("body").on("change", "._multiple_actions", function() {
    alert();
    var _array_ids = [];
    $.each($("input[name=_action2]:checked"), function() {
        _array_ids.push($(this).val());
    });

    //  console.log($(this).val());
    if ($(this).val() == "_imprimer") {
        $.ajax({
            type: "GET",
            url: Routing.generate("t_achatdemandeinternedet_multiple_pdfShow"),
            data: { _array_ids },
            success: function(result) {
                //  window.open(result, '_blank');
                //  console.log(result);
                /*  if (result.code == 200) {
                 
                 table.ajax.reload();
                 toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                 } */
            },
            error: function(jqXHR, textStatus, errorThrown) {
                toastr.warning(
                    jqXHR.responseJSON.message.text,
                    jqXHR.responseJSON.message.title, { timeOut: 4000 }
                );
            },
        });

        // console.log(url)
        $("._multiple_actions").val("");
    }

    // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');

    // console.log($(this).val());
    if ($(this).val() == "_delete_demande") {
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
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {
                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
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
                text: "Voulez vous vraiment desactiver cette liste ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
                cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
            })
            .then((result) => {
                if (result.value) {
                    $.ajax({
                        type: "POST",
                        url: Routing.generate("t_precommande_demmande_desactiver"),
                        data: { _array_ids },
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {
                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
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
                        success: function(result) {
                            //  console.log(result);
                            if (result.code == 200) {
                                table.ajax.reload();
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });
                    $("._multiple_actions").val("");
                }
            });
    }
});

$("#_generer").click(function(e) {
    var id = table.row(".selected").id();
    if (id) {
        $.ajax({
            type: "POST",
            url: Routing.generate("t_achatdemandeinternecab_generer", { id: id }),
            success: function(result) {
                $(".actions").html(result);
                $(".actions").toggleClass("sidebar-open");
            },
        });
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }
    e.preventDefault();
});

/*$('.actions').on('submit', '.form_generer', function (e) {
 var dta = new FormData(this);
 var form_name = $(this).attr('name');
 var id = table.row('.selected').id();
 if (id) {
 $.ajax({
 type: 'POST',
 url: Routing.generate('t_achatdemandeinternecab_generer', {'id': id}),
 data: dta,
 processData: false,
 contentType: false,
 success: function (result, textStatus, errorThrown) {
 //            console.log(result);
 //            console.log(textStatus);
 //            console.log(errorThrown);
 if (result.errors) {
 
 
 
 
 
 
 
 
 $(".errors_list").html("");
 jQuery.each(result.errors.violations, function (i, val) {
 //                        var column = val.propertyPath;
 //                        var columnName = column.split(/[[],]/);
 //
 //                        console.log(columnName);
 
 
 var x = val.propertyPath;
 var separators = ['\\]', '\\['];
 var arr = x.split(new RegExp(separators.join('|')));
 var columnName = arr[1];
 
 $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
 
 
 });
 
 //                    console.log(result.errors);
 //                    $('.errors-list').remove();
 //                    jQuery.each(result.errors.violations, function (i, val) {
 //                        var column = val.propertyPath;
 //                        var columnName = column.split('.');
 //                        // console.log(columnName[1]);
 //                        $(".form_generer #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
 //                    });
 
 } else if (result.code == 200) {
 table.ajax.reload();
 toastr.success(result.message.text, result.message.title, {timeOut: 4000})
 $(".actions").empty().removeClass('sidebar-open');
 // location.reload();
 }
 },
 error: function (jqXHR, textStatus, errorThrown) {
 toastr.error("Erreur", errorThrown, {timeOut: 4000})
 }
 });
 } else {
 toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {timeOut: 4000});
 }
 
 
 e.preventDefault();
 })*/




$("body").on(
    "click",
    ".t_achatdemandeinternecab_apply_transitions",
    function(e) {
        var dta = new FormData();
        var id = $(this).attr("data-id");
        var title = $(this).attr("data-title");
        var transition = $(this).attr("data-transition");
        if (transition == 'apres_valider_commander') {

            $.ajax({
                type: "POST",
                url: Routing.generate("t_achatdemandeinternecab_apply_generer", { id: id }),
                success: function(result) {
                    $("#ModalDocumentDynamique .bod").html(result);
                    $('.sel2').select2()
                    $("#ModalDocumentDynamique").modal("show");
                    var table2 = $(".grid-reception").DataTable({
                        lengthMenu: [
                            [10, 15, 25, 50, 100, 200],
                            [10, 15, 25, 50, 100, 200],
                        ],
                        deferRender: true,
                        pageLength: 15,
                        scrollX: true,
                        columns: [
                            { width: "5%", orderable: true, searchable: true, targets: [0] },
                            { width: "5%", orderable: true },
                            { width: "20%", orderable: true },
                            { width: "5%", orderable: true },
                            { width: "5%", orderable: true },
                            { width: "5%", orderable: true },
                            { width: "5%", orderable: true },
                            { width: "5%", orderable: true },
                            { width: "5%", orderable: true /*, visible: true*/ },
                            { width: "5%", orderable: true /*, visible: true*/ },
                        ],
                        paging: false,

                        dom: 'f<"html5buttons btn-group"B>lTgtip',
                        buttons: [
                            "columnsToggle",
                            {
                                text: "Restaurer",
                                className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
                                action: function(e, dt, node, config) {
                                    table2.state.clear();
                                    window.location.reload();
                                },
                            },
                        ],
                        language: {
                            url: Routing.generate("datatables_langue"),
                            processing: true,
                        },
                        // fixedHeader: true,
                    });
                    generer();
                }, 
                error: function(jqXHR, textStatus, errorThrown) {
                    toastr.warning(
                        jqXHR.responseJSON.message.text,
                        jqXHR.responseJSON.message.title, { timeOut: 4000 }
                    );
                },
            });
        } else {
            dta.append("id", id);
            dta.append("title", title);
            dta.append("transition", transition);

            if (id) {
                swalWithBootstrapButtons
                    .fire({
                        showClass: {
                            popup: "animatedSwal flipInX faster",
                        },
                        position: "top",
                        title: "CONFIRMATION ?",
                        text: "Voulez vous vraiment passer a l'etat '" +
                            title +
                            "' pour cet enregistrement ?",
                        type: "warning",
                        showCancelButton: true,
                        showCloseButton: true,
                        confirmButtonText: "<i class='fa fa-check'></i> Oui !",
                        cancelButtonText: "<i class='fa fa-times'></i> Non !",
                    })
                    .then((result) => {
                        if (result.value) {
                            $.ajax({
                                type: "POST",
                                data: dta,
                                processData: false,
                                contentType: false,
                                url: Routing.generate(
                                    "t_achatdemandeinternecab_apply_transitions", { id: id }
                                ),
                                success: function(result) {
                                    if (result.code == 200) {
                                        toastr.success(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });

                                        location.reload();
                                    }

                                    if (result.code == 201) {
                                        // alert(result.valider);
                                        toastr.success(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });
                                        var url = Routing.generate(
                                            "t_achatdemandeinternecab_apply_generer", { id: result.id }
                                        );
                                        window.location.href = url;
                                    }

                                    if (result.code == 403) {
                                        toastr.warning(result.message.text, result.message.title, {
                                            timeOut: 4000,
                                        });
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {
                                    toastr.warning(
                                        jqXHR.responseJSON.message.text,
                                        jqXHR.responseJSON.message.title, { timeOut: 4000 }
                                    );
                                },
                            });
                        }
                    });
            } else {
                toastr.warning("Commande non renseigne ", "warning", { timeOut: 4000 });
            }
        }


        e.preventDefault();
    }
);

$("#_imprimer").click(function(e) {
    //var id = table.row('.selected').id();
    var id = $("#test").data("demandeId");
    // var id = dta.get('_id');
    //alert(id);
    if (id) {
        var url = Routing.generate("pdf_show", { id: id });
        //  window.location.href = url;
        window.open(url, "_blank");
        // console.log(url)
    } else {
        toastr.warning(
            "Veuillez Renseigner une ligne pour effectuer cette operation",
            "warning", { timeOut: 4000 }
        );
    }
    e.preventDefault();
});

$("body").on("submit", "._fichiers", function(e) {
    //   alert();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this).attr("class").split(" ")[0];
    var id = dta.get("_id");

    var l = Ladda.create(document.querySelector(".my-button"));
    // Start loading
    l.start();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_fichiers", { id: id }),
        data: dta,
        processData: false,
        contentType: false,
        success: function(result) {
            if (result.errors) {
                //console.log(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            }
            if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                location.reload();
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
        },
    });
    e.preventDefault();
});

$("._delete_fichier").click(function(e) {
    var id = $(this).attr("id");

    if (id) {
        swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment supprimer cet enregistrement ?",
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
                        url: Routing.generate("t_achatdemandeinternecab_fichiers_delete", {
                            id: id,
                        }),
                        success: function(result) {
                            // console.log(result);
                            if (result.code == 200) {
                                toastr.success(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                                location.reload();
                            } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, {
                                    timeOut: 4000,
                                });
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            toastr.warning(
                                jqXHR.responseJSON.message.text,
                                jqXHR.responseJSON.message.title, { timeOut: 4000 }
                            );
                        },
                    });
                }
            });
    } else {
        toastr.warning("Impossible d'effectuer cette operation", "warning", {
            timeOut: 4000,
        });
    }
    e.preventDefault();
});

/*$("body").on("submit", "#t_achatdemandeinternecab_apply_generer", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var id = dta.get("_id");
    if (id) {
        $.ajax({
            type: "POST",
            url: Routing.generate("t_achatdemandeinternecab_apply_generer", {
                id: id,
            }),
            success: function (result) {
                $(".actions").html(result);
                $(".actions").toggleClass("sidebar-open");
            },
        });
    } else {
        toastr.warning("Commande non renseigne ", "warning", {timeOut: 4000});
    } 
    e.preventDefault();
});*/
var iceTierValide = false;
var id_tiers="";
$("body").on("click", ".btn-maj-ice", function (e) {
    var button = $(".btn-maj-ice");
    button.prop("disabled", true)
    $(".error-custom").hide();
    $(".error-custom").html('');
    var ice_tiers = $("#ice-tiers").val();
    var nom_tiers = $("#nom-tiers").val();
    var tel_tiers = $("#tel-tiers").val();
    if (ice_tiers && /^\d+$/.test(ice_tiers) && ice_tiers.length==15 && id_tiers && nom_tiers && tel_tiers) {
        $.ajax({
            type: "POST",
            url: Routing.generate("mise_a_jour_ice", {
                id: id_tiers, ice: ice_tiers
            }),
            data: {
                nom_tiers: nom_tiers,
                tel_tiers: tel_tiers,
            },
            success: function (result) {
                iceTierValide = true;
                id_tiers="";
                button.prop("disabled", false)
                $(".form_generer").trigger('submit');
                $("#ModalAddICE").modal("hide");
                
            },
        });
    } else {
        if(!ice_tiers){
            $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez remplir ce champ.");
            $(".ice_tiers").show();
            // toastr.warning("Veuillez remplir le champ ICE ", "warning", {timeOut: 4000}); 
          }
        else if(! /^\d+$/.test(ice_tiers) ){
            $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez saisir des chiffres.");
            $(".ice_tiers").show();
            // toastr.warning("Veuillez saisir des chiffres ", "warning", {timeOut: 4000}); 
        }
        else if(ice_tiers.length!=15){
            $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i> ICE incorrect, vérifier l'ICE saisi</b>.");
            $(".ice_tiers").show();
            // toastr.warning("le champ ICE doit contenir <b>15 chiffres</b> ", "warning", {timeOut: 4000}); 
        }
        else if(!nom_tiers){
        $(".nom_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
        $(".nom_tiers").show();
        // toastr.warning("Veuillez remplir le champ Nom ", "warning", {timeOut: 4000}); 
        }
        else if(!tel_tiers){
        $(".tel_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
        $(".tel_tiers").show();
        // toastr.warning("Veuillez remplir le champ Tel ", "warning", {timeOut: 4000}); 
        }
        button.prop("disabled", false)
    }
    e.preventDefault();
});

function generer() {
    $("body").on("submit", ".form_generer", function(e) {
        e.preventDefault();
        $(".error-custom").hide();
        $(".error-custom").html('');
        if(!iceTierValide){
            id_tiers = $('#form_fournisseur').val();
            if(!id_tiers){
                toastr.warning("Veuillez choisir le Fournisseur ", "warning", {timeOut: 4000});    
            }
            $.ajax({
                type: "POST",
                url: Routing.generate("checkIce", {
                    id: id_tiers, 
                }),
                success: function (result) {
                    if(result=='empty'){
                        var tiers = $("#form_fournisseur option:selected").text();
                        $("#ModalAddICE #nom_tiers").html(tiers);
                        $('#ModalAddICE input').val('');
                        $("#ModalAddICE").modal("show");
                    }else{
                        iceTierValide = true;
                        id_tiers="";
                        $(".form_generer").trigger('submit');
                    }
                    
                },
            });
            return;
        }
    
       
        var button = $(".my-button2");
        button.prop("disabled", true)
        var l = Ladda.create(document.querySelector(".my-button2"));
        // Start loading
        l.start();
            
            // debugger;
            var form_name = $(this).attr("name");
            var dta = new FormData(this);
            var id = dta.get("_id");
            var selector = $(this);
            //  alert(id);
            if (id) {
                $.ajax({
                    type: "POST",
                    url: Routing.generate("t_achatdemandeinternecab_apply_generer", {
                        id: id,
                    }),
                    data: dta,
                    processData: false,
                    contentType: false,
                    success: function(result, textStatus, errorThrown) {


                        if (result.errors) {
                            l.stop();

                            ShowFormErrors(selector, form_name, result.errors);
                            button.prop("disabled", false)

                        } else if (result.errorss) {
                            l.stop();
                            //   $(".errors_list").html("");
                            $.each(result.errorss, function(key, value) {
                                toastrWidtoutProgress.warning(value, "warning");
                            });
                            button.prop("disabled", false)

                        } else if (result.code == 200) {

                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {
                                timeOut: 4000,
                            });
                            $(".actions").empty().removeClass("sidebar-open");
                            location.reload();
                        } else if (result.code == 403) {
                            alert();
                            table.ajax.reload();
                            toastr.success(result.message.text, result.message.title, {
                                timeOut: 4000,
                            });
                            
                            $(".actions").empty().removeClass("sidebar-open");
                            location.reload();
                        }
                        if (result.code == 404) {
                            l.stop();
                            toastr.warning(result.message.text, result.message.title, {
                                timeOut: 4000,
                            });
                            button.prop("disabled", false)
                        }


                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        
                            l.stop();
                            toastr.error("Erreur", errorThrown, { timeOut: 4000 });
                            button.prop("disabled", false)
                            
                        
                    },
                });
            }
        
    });
}


var tableShow = $("#datatable-show").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
    autoWidth: false,
    columns: [
        { width: "5%" },
        { width: "10%" },
        { width: "35%" },
        { width: "20%" },
        { width: "5%" },
        { width: "5%" },
        { width: "5%" },
        { width: "5%" },
        { width: "5%" },
    ],
    footerCallback: function(row, data, start, end, display) {
        var api = this.api(),
            data;
        //console.log($("#datatable-show").attr(""));
        var total, pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function(i) {
            return typeof i === "string" ?
                i.replace(/[\$,]/g, "") * 1 :
                typeof i === "number" ?
                i :
                0;
        };

        // Total over all pages
        total = api
            .column(7)
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Total over this page
        pageTotal = api
            .column(7, { page: "current" })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        /* $(api.column(1).footer())
         .html(
         "Total HT : " +
         $("#datatable-show").attr("data-ht") +
         "<br/>" +
         "Total TVA : " +
         $("#datatable-show").attr("data-tva") +
         "<br/>" +
         "Total Remise : " +
         $("#datatable-show").attr("data-remise") +
         "<br/>" +
         "Total TTC : " +
         $("#datatable-show").attr("data-ttc")
         )
         .addClass("right-th");
         $(api.column(2).footer())
         .html(
         "Total HT : " +
         $("#datatable-show").attr("data-ht") +
         "<br/>" +
         "Total TVA : " +
         $("#datatable-show").attr("data-tva") +
         "<br/>" +
         "Total Remise : " +
         $("#datatable-show").attr("data-remise") +
         "<br/>" +
         "Total TTC : " +
         $("#datatable-show").attr("data-ttc")
         )
         .addClass("right-th");*/
    },
});

var tableShow = $("#datatable-show2").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
    autoWidth: false,
});
var h = "300";
var w = "1000";
$(".rs").click(function(e) {
    var left = screen.width / 2 - w / 2;
    var top = screen.height / 2 - h / 2;
    var url = Routing.generate("t_achatdemandeinternecab_find_article");
    var win = window.open(url, "_blank", "width=" + w + ", height=300");

    win.onclick = function(e) {
        var clickedClass = e.target.className;
        var clickedID = e.target.id;

        if ($(e.target).parent().attr("class") == "tr active-search") {
            if (
                $(".sel2").find(
                    "option[value='" + $(e.target).parent().attr("id") + "']"
                ).length
            ) {
                $(".sel2").val($(e.target).parent().attr("id")).trigger("change");
                win.close();
            } else {
                // Create a DOM Option and pre-select by default
                var newOption = new Option(
                    $(e.target).parent().attr("text"),
                    $(e.target).parent().attr("id"),
                    true,
                    true
                );
                // Append it to the select
                $(".sel2").append(newOption).trigger("change");
                win.close();
            }
        }
    };
});

$(".tab-search tbody tr").click(function() {
    $(".tab-search tbody tr").removeClass("active-search");
    $(this).addClass("active-search");
});
$(".tab-search thead th").each(function(index) {
    //$(".ddlChamps").append(new Option($( this ).text(), index))
    var o = new Option($(this).text(), index);
    /// jquerify the DOM object 'o' so we can use the html method
    $(o).html($(this).text());
    $(".ddlChamps").append(o);
});
$(".ntm").click(function() {
    $(this).hide();
    $("#Div_rechercheTabListe").fadeIn();
});
$("#lienFermerRecherche").click(function() {
    $("#Div_rechercheTabListe").hide();
    $(".ntm").fadeIn();
});

$("#lienRecherche").click(function() {
    //alert($('.ddlChamps').val())
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tab-sear");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[$(".ddlChamps").val()];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});

$("#Div_rechercheTabListe").draggable();

$(".modalActivate").click(function() {
    $(".bod").empty();
    $(".spr").fadeIn();
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_find_article"),
        processData: false,
        contentType: false,
        success: function(result, textStatus, errorThrown) {
            $(".bod").html(result).hide();
            KTDatatablesSearchOptionsAdvancedSearch.init();
            setTimeout(function() {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });
});

$(".search-custom").click(function() {
    //alert()
    $(".bod").empty();
    $(".spr").fadeIn();
    $.ajax({
        type: "POST",
        url: Routing.generate("custom_search_find_by_entity"),
        processData: false,
        contentType: false,
        success: function(result, textStatus, errorThrown) {
            $(".bod").html(result).hide();
            KTDatatablesSearchOptionsAdvancedSearch.init();
            setTimeout(function() {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });
});
var code = null;
$("body").on("click", "#kt_table_1 tbody tr", function() {
    //alert($(this).parent().parent().attr("unite"))
    code = $(this).attr("code");
    if (
        window.element.find(
            "option[value='" + $(this).attr("id") + "']"
        ).length
    ) {
        window.element.val($(this).attr("id")).trigger("change");
        $(".prixunitaire").val($(this).attr("pu"));

        $(".tva").val($(this).attr("tva"));
        $(".remise").val($(this).attr("remise"));
        $(".select2_unite").val($(this).attr("unite")).trigger("change");
        $("#exampleModalPreview").modal("hide");

    } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option(
            $(this).attr("text"),
            $(this).attr("id"),
            true,
            true
        );
        // Append it to the select

        window.element.append(newOption).trigger("change");
        $(".prixunitaire").val($(this).attr("pu"));
        $(".tva").val($(this).attr("tva"));
        $(".select2_unite").val($(this).attr("unite")).trigger("change");
        $(".remise").val($(this).attr("remise"));
        $("#exampleModalPreview").modal("hide");
    }
});

$("body").on("click", ".cd_op2", function() {
    //alert($(this).parent().parent().attr("unite"))
    if (
        window.element.find(
            "option[value='" + $(this).attr("id") + "']"
        ).length
    ) {
        window.element.val($(this).attr("id")).trigger("change");
        $(".prixunitaire").val($(this).attr("pu"));

        $(".tva").val($(this).attr("tva"));
        $(".remise").val($(this).attr("remise"));
        $(".select2_unite").val($(this).attr("unite")).trigger("change");
        $("#exampleModalPreview").modal("hide");

    } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option(
            $(this).attr("text"),
            $(this).attr("id"),
            true,
            true
        );
        // Append it to the select
        window.element.append(newOption).trigger("change");
        $(".prixunitaire").val($(this).attr("pu"));
        $(".tva").val($(this).attr("tva"));
        $(".select2_unite").val($(this).attr("unite")).trigger("change");
        $(".remise").val($(this).attr("remise"));
        $("#exampleModalPreview").modal("hide");
    }
});

/*$(".article").on('select2:opening',function(e){
 $(".article").select2("data", null)
 })*/
/*
 $(document).on('keyup', '.select2-search__field', function (e) { 
 
 $.ajax({
 type: 'POST',
 url: Routing.generate('t_achatdemandeinternecab_find_article_term',{term:$(this).val()}),
 processData: false,
 contentType: false,
 success: function (result, textStatus, errorThrown) {
 //$(".article").select2("data", result, true);
 $(".article").select2({
 data: result.results
 })
 }
 })
 //e.preventDefault();
 //return true;
 })
 
 
 */

("use strict");
var KTDatatablesSearchOptionsAdvancedSearch = (function() {
    $.fn.dataTable.Api.register("column().title()", function() {
        return $(this.header()).text().trim();
    });
    return {
        init: function() {
            var t;
            (t = $("#kt_table_1").DataTable({


                ajax: {
                    url: Routing.generate("t_achatdemandeinternecab_find_article_table"), // json datasource
                    type: "get"
                },
                deferRender: true,
                serverSide: true,
                lengthMenu: [
                    [10, 15, 25, 50, 100, 200],
                    [10, 15, 25, 50, 100, 200],
                ],
                pageLength: 25,
                dom: 'f<"html5buttons btn-group"B>lTgtip',
                columns: [
                    { orderable: true, name: 'art.id', width: "5%" },
                    { orderable: true, name: 'art.code' },
                    { orderable: true, name: 'art.titre' },
                    { orderable: true, name: 'tab.abreviation' },
                    { orderable: true, name: 'n1.designation' },
                    { orderable: true, name: 'n2.designation' },
                    { orderable: true, name: 'n3.designation' },
                    { orderable: true, name: 'n4.designation' },
                ],
                'createdRow': function(row, data, dataIndex) {
                    // console.log(data)

                    $(row).attr('text', data[2]);
                    $(row).attr('pu', data[8]);
                    $(row).attr('tva', data[9]);

                    //unite
                    $(row).attr('unite', data[10]);
                    $(row).attr('code', data[11]);
                    $(row).attr('remise', data[12]);
                },
                buttons: [
                    "columnsToggle",
                    {
                        text: "Restaurer",
                        className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
                        action: function(e, dt, node, config) {
                            table.state.clear();
                            window.location.reload();
                        },
                    },
                ],
                language: {
                    url: Routing.generate("datatables_langue"),
                    processing: true,
                },
                // fixedHeader: true,
                bInfo: false,
            })),
            t.on("init.dt", function(e, settings) {
                let api = new $.fn.dataTable.Api(settings);
                let st = api.state.loaded();
                let data = api.data();

                //console.log(st);
                //if (st != null) {
                //    $.each(st.columns, function (key, value) {
                //        if (value.search.search != "") {
                //            $('.remove-filter').show();
                //            return false;
                //        }
                //    });
                //}

                CustomSearchDatatable.CustomSearchText(api, [0, 1, 3, 2, 4, 5, 6, 7], []);
                //CustomSearchDatatable.CustomSearchSelect(api, [2, 4, 5, 6, 7], []);
            });
        },
    };
})();
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
    sNext: '<i class="fa fa-chevron-right" ></i>',
    sPrevious: '<i class="fa fa-chevron-left" ></i>',
});

$(document).ready(function() {
    $(".det_for")
        .hide()
        .after(
            '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
        );
    create_custom_dropdowns($(".articles"), "");
});

//projet

$(".type_commande").on("change", function(e) {
    if ($(this).attr("data-type") == "ACC" || $(this).val() == 3) {
        $(".clt").toggleClass("none");
    } else {
        $(".clt").addClass("none");
    }
});

$(".dynamique_document").click(function(e) {
    // console.log( $(this).attr('data-id'));
    $.ajax({
        type: "POST",
        url: Routing.generate("t_achatdemandeinternecab_document_dynamique_form", {
            id: $(this).attr("data-id"),
        }),
        success: function(result) {

            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");

            setTimeout(function() {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });
    e.preventDefault();
});

















$("body").on("click", ".scolumn_0", function() {
    $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
    //    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});

$("body").on("click", ".action", function() {
    //console.log($(this).attr('data-type'));
    if ($(this).attr("data-type") == "descriptionDetail") {
        if ($(this).is(":checked")) {
            $(".titre").prop("checked", true);
        }
    }
    if ($(this).attr("data-type") == "titre") {
        if ($(this).is(":checked") == false) {
            $(".descriptionDetail").prop("checked", false);
        }
    }
});



$("#myBtn").click(function(e) {
    var disp = $(".show_more_historique").css("display");
    if (disp == "none") {
        $(".se").css("display", "block");
    } else {
        $(".se").css("display", "none");
    }
    // $(".se").css("display", "block");
    // alert($('.show_more_historique').css( "display" ));
    e.preventDefault();
});

//add-plus

$("body").on("click", ".add-plus", function(e) {
    $("body").find("#ModalDocumentDynamique").remove();
    $("#wrapper").append(
        '<div class="actions modal fade right" id="ModalDocumentDynamique" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="false" data-backdrop="false"><div class="modal-dialog modal-lg modal-full-height modal-middle modal-right " style="max-width:500 px;" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalPreviewLabel">Partenaire</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body bo-0"><div class="text-center spr"><br/><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div><div class="bod"></div> </div></div></div>'
    );
    window.thisElem = $(this);
    var route = $(this).attr("data-route");
    $.ajax({
        type: "POST",
        url: Routing.generate(route),
        success: function(result) {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            $(".bod").find(".form").addClass(route);
            setTimeout(function() {
                $(".spr").hide();
                $(".bod").fadeIn();
                (function(t, e) {
                    "object" == typeof exports
                        ?
                        (module.exports = e()) :
                        "function" == typeof define && define.amd ?
                        define(["spin"], e) :
                        (t.Ladda = e(t.Spinner));
                })(this, function(t) {
                    "use strict";

                    function e(t) {
                        if (t === void 0)
                            return (
                                console.warn("Ladda button target must be defined."), void 0
                            );
                        t.querySelector(".ladda-label") ||
                            (t.innerHTML =
                                '<span class="ladda-label">' + t.innerHTML + "</span>");
                        var e = i(t),
                            n = document.createElement("span");
                        (n.className = "ladda-spinner"), t.appendChild(n);
                        var r,
                            a = {
                                start: function() {
                                    return (
                                        t.setAttribute("disabled", ""),
                                        t.setAttribute("data-loading", ""),
                                        clearTimeout(r),
                                        e.spin(n),
                                        this.setProgress(0),
                                        this
                                    );
                                },
                                startAfter: function(t) {
                                    return (
                                        clearTimeout(r),
                                        (r = setTimeout(function() {
                                            a.start();
                                        }, t)),
                                        this
                                    );
                                },
                                stop: function() {
                                    return (
                                        t.removeAttribute("disabled"),
                                        t.removeAttribute("data-loading"),
                                        clearTimeout(r),
                                        (r = setTimeout(function() {
                                            e.stop();
                                        }, 1e3)),
                                        this
                                    );
                                },
                                toggle: function() {
                                    return this.isLoading() ? this.stop() : this.start(), this;
                                },
                                setProgress: function(e) {
                                    e = Math.max(Math.min(e, 1), 0);
                                    var n = t.querySelector(".ladda-progress");
                                    0 === e && n && n.parentNode ?
                                        n.parentNode.removeChild(n) :
                                        (n ||
                                            ((n = document.createElement("div")),
                                                (n.className = "ladda-progress"),
                                                t.appendChild(n)),
                                            (n.style.width = (e || 0) * t.offsetWidth + "px"));
                                },
                                enable: function() {
                                    return this.stop(), this;
                                },
                                disable: function() {
                                    return this.stop(), t.setAttribute("disabled", ""), this;
                                },
                                isLoading: function() {
                                    return t.hasAttribute("data-loading");
                                },
                            };
                        return o.push(a), a;
                    }

                    function n(t, n) {
                        n = n || {};
                        var r = [];
                        "string" == typeof t
                            ?
                            (r = a(document.querySelectorAll(t))) :
                            "object" == typeof t &&
                            "string" == typeof t.nodeName &&
                            (r = [t]);
                        for (var i = 0, o = r.length; o > i; i++)
                            (function() {
                                var t = r[i];
                                if ("function" == typeof t.addEventListener) {
                                    var a = e(t),
                                        o = -1;
                                    t.addEventListener(
                                        "click",
                                        function() {
                                            a.startAfter(1),
                                                "number" == typeof n.timeout &&
                                                (clearTimeout(o),
                                                    (o = setTimeout(a.stop, n.timeout))),
                                                "function" == typeof n.callback &&
                                                n.callback.apply(null, [a]);
                                        }, !1
                                    );
                                }
                            })();
                    }

                    function r() {
                        for (var t = 0, e = o.length; e > t; t++)
                            o[t].stop();
                    }

                    function i(e) {
                        var n,
                            r = e.offsetHeight;
                        r > 32 && (r *= 0.8),
                            e.hasAttribute("data-spinner-size") &&
                            (r = parseInt(e.getAttribute("data-spinner-size"), 10)),
                            e.hasAttribute("data-spinner-color") &&
                            (n = e.getAttribute("data-spinner-color"));
                        var i = 12,
                            a = 0.2 * r,
                            o = 0.6 * a,
                            s = 7 > a ? 2 : 3;
                        return new t({
                            color: n || "#fff",
                            lines: i,
                            radius: a,
                            length: o,
                            width: s,
                            zIndex: "auto",
                            top: "auto",
                            left: "auto",
                            className: "",
                        });
                    }

                    function a(t) {
                        for (var e = [], n = 0; t.length > n; n++)
                            e.push(t[n]);
                        return e;
                    }
                    var o = [];
                    return { bind: n, create: e, stopAll: r };
                });

                Ladda.bind("button[type=submit]");
                // var l = Ladda.create(document.querySelector("button[type=submit]"));

                // Start loading
                // l.start();
                //Ladda.stopAll();
            }, 600);
        },
    });

    $(".bod").on("submit", "." + route, function(e) {
        var obj = new Object();
        var form_name = $(this).attr("name");
        var dta = new FormData(this);
        var selector = $(this);
        var classes = $(this)
            .find("button")
            .first()
            .attr("class")
            .substr(
                $(this).find("button").first().attr("class").lastIndexOf(" ") + 1
            );
        //console.log($(this).find('button').first()[0])
        var classSelector1 = $(this)
            .find("button")
            .first()
            .attr("class")
            .substr(
                $(this).find("button").first().attr("class").lastIndexOf(" ") + 1
            );
        var classSelector2 = $(this)
            .find("button")
            .eq(1)
            .attr("class")
            .substr($(this).find("button").eq(1).attr("class").lastIndexOf(" ") + 1);
        //console.log(classes)
        if ($(document.activeElement).hasClass(classes)) {
            //alert(classSelector1)

            var l = Ladda.create(document.querySelector("." + classSelector1));
            // var $l = $(".button-save-partenaire").ladda();

            // Start loading
            //$l.ladda("start");
            var goto = 1;
            //l.start();
            obj["hideModule"] = true;
        } else {
            //alert()
            var l = Ladda.create(document.querySelector("." + classSelector2));
            var goto = 0;
            //l.start();
            obj["showModule"] = true;
        }

        /*import("ladda").then(() => {
         // alert();
         
         
         
         Ladda.bind( 'button', { timeout: 2000 } );
         
         // Bind progress buttons and simulate loading progress
         Ladda.bind( 'button', {
         callback: function( instance ) {
         var progress = 0;
         var interval = setInterval( function() {
         progress = Math.min( progress + Math.random() * 0.1, 1 );
         instance.setProgress( progress );
         
         if( progress === 1 ) {
         instance.stop();
         clearInterval( interval );
         }
         }, 200 );
         }
         } );
         
         
         });*/
        l.start();

        //var id = $("#test").data("partenaireId");

        obj["route"] = "u_p_partenaire_new";
        obj["data"] = dta;
        obj["parametre"] = null;
        obj["l"] = l;
        obj["form_name"] = form_name;
        obj["selector"] = selector;
        obj["reloadTable"] = true;
        obj["modal"] = true;

        obj["nomModal"] = "ModalDocumentDynamique";
        obj["table"] = table;
        obj["autoTrigger"] = goto;
        obj["triggerClass"] = "add";
        obj["refreshSelect"] = true;
        obj["selectElement"] = window.thisElem;
        obj["ShowFormErrors"] = ShowFormErrors;
        obj["ladda"] = Ladda;
        autoFunctionAjax.autoAjaxRenderController(obj);
        //console.log()

        e.preventDefault();
    });

    //e.preventDefault();
});
//alert($("#_id").val());
/*if ($("#_id").val() == "") {
 $(
 "#t_achatdemandeinternecab_sousprojet.sel2"
 ) /*html(
 "<option>Choix sous projet</option>"
 )
 .select2("val", "");
 $(".sel2").select2();
 }*/
$("body").on("change", "#t_achatdemandeinternecab_projet", function() {
    //alert($(this).val());
    getSubSelect("#t_achatdemandeinternecab_sousprojet", false, "", "");
    var $this = $(this).closest("form");
    var data = {};

    // Submit data via AJAX to the form's action path.
    $.ajax({
        url: Routing.generate("sous_projet_select", {
            id: $(this).val() == "" || $(this).val() === null ? -1 : $(this).val(),
            placeholder: "Choix sous projet",
        }),
        type: "POST",
        data: data,
        success: function(result) {
            //   console.log(html);
            $("#t_achatdemandeinternecab_sousprojet").html(result.data);
            getSubSelect("#t_achatdemandeinternecab_sousprojet", true, "", "");
            $(".sel2").select2();
        },
    });
});


// $(".tt").focus();

var obj2 = new Object();
obj2["dossier_path"] = "change_dossier_precommande_popup";
listActions.listActions(obj2);


$('body').on('click', '.pdf_by_code', function(e) {
    window.open(Routing.generate("t_achatdemandeinternecab_document_old_sys", {
        id: $(this).attr('data-id')
    }), '_blank');
});
$('body').on('click', '.imprime_document', function(e) {
    e.preventDefault();
    if($(this).attr("data-valide") == 0)  {
        toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {timeOut: 4000})
        return
    }
    window.open($(this).attr('href'), '_blank');
});

