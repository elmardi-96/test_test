/*
 * file for jsrouting bundle
 */

require("../css/bootstrap.min.css");
require("../css/mdb.min.css");
require("../css/bootstrap4-toggle.css");
require("../font-awesome/css/font-awesome.css");
require("../css/plugins/dropzone/basic.css");



require("../css/plugins/dropzone/dropzone.css");
//require('../css/plugins/jasny/jasny-bootstrap.min.css');
require("../css/plugins/codemirror/codemirror.css");

/*ladda*/
require("../css/plugins/ladda/ladda.min.css");

/** Toastr style (Notifications) **/

require("../css/plugins/toastr/toastr.min.css");
require("../css/plugins/select2/select2.min.css");

require("../css/plugins/datapicker/datepicker3.css");

/** Sweet Alert **/
require("../js/plugins/sweetalert2/sweetalert2.css");

/*blueimp-gallery*/
require("../../assets/js/plugins/blueimp-gallery/css/blueimp-gallery.css");

/************My css **************/
require("../css/animate.css");
require("../css/style.css");
require("../css/app.css");
require("../css/hint.min.css");
//require('./jquery-3.1.1.min.js');

const $ = require("jquery");

require("bootstrap4-toggle");
require("./popper.min.js");
require("./mark.min.js");
require("./bootstrap.js");


require("./jquery.metisMenu.js");
require("./jquery.slimscroll.min");
require("./inspinia");
require("./pace.min.js");
require("./dataTables.fixedColumns.js");
//dataTables.fixedColumns.js

require("../../assets/js/plugins/chartJs/Chart.min.js");
require("../../assets/js/demo/chartjs-demo.js");

require("./jquery-3.1.1.min.js");
require("./jquery.slimscroll.min.js");

require("../../assets/css/plugins/iCheck/custom.css");
require("../../assets/js/plugins/iCheck/icheck.min.js");

require("../../assets/js/plugins/select2/select2.full.min.js");

$(".navbar-static-side").closest("body").addClass("fixed-nav");

$(".navbar-static-side").closest("body").addClass("fixed-nav-basic");

//datatbles
require("../css/plugins/dataTables/datatables.min.css");
require("../css/plugins/colorpicker/bootstrap-colorpicker.min.css");
require("../../assets/js/plugins/colorpicker/bootstrap-colorpicker.min.js");
import DataTable from "datatables.net-bs4";
import DataTableB from "datatables.net-buttons";
import "./plugins/dataTables/datatables.net-buttons/buttons.html5";
require("datatables.net-buttons");
require("datatables.net-colreorder");
require("./buttons.colVis.min.js");
require("datatables.net-fixedheader");

window.JSZip = require("jszip");

import pdfFonts from "./plugins/dataTables/datatables.net-buttons/vfs_fonts.js";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import "./plugins/dataTables/datatables.net-buttons/pdfmake.min.js";

import "./plugins/dataTables/datatables.net-buttons/buttons.html5";
import "./plugins/dataTables/datatables.net-buttons/buttons.print";


//const moment = require('moment');

require("../js/plugins/datapicker/bootstrap-datepicker.js");

import toastr from "toastr";
window.toastr = toastr;

toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

import toastrWidtoutProgress from "toastr";
window.toastrWidtoutProgress = toastrWidtoutProgress;
toastrWidtoutProgress.options = {
    closeButton: true,
    positionClass: "toast-top-right",
    debug: false,
    newestOnTop: false,
    progressBar: false,

    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "90000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

const routes = require("../../public/js/fos_js_routes.json");
import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);

(function ($) {
    $.fn.datepicker.dates["fr"] = {
        days: [
            "dimanche",
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
        ],
        daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
        months: [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
        ],
        monthsShort: [
            "janv.",
            "févr.",
            "mars",
            "avril",
            "mai",
            "juin",
            "juil.",
            "août",
            "sept.",
            "oct.",
            "nov.",
            "déc.",
        ],
        today: "Aujourd'hui",
        monthsTitle: "Mois",
        clear: "Effacer",
        weekStart: 1,
        format: "dd/mm/yyyy",
    };
})(jQuery);

$(".sidebar-collapse-parametrage").slimscroll({
    height: "800px",
});


const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-white btn-xs sySweetStyle",
        cancelButton: "btn btn-warning btn-xs sySweetStyle",
    },
    buttonsStyling: false,
});

/*a enlever */

$(document).ready(function () {
    $(".image-radio").each(function () {
        if ($(this).find('input[type="radio"]').first().attr("checked")) {
            $(this).addClass("image-radio-checked");
        } else {
            $(this).removeClass("image-radio-checked");
        }
    });

    $(".image-radio").on("click", function (e) {
        $.ajax({
            type: "POST",
            url: Routing.generate("theme_save", {theme: $(this).attr("theme")}),
            success: function (result) {
                location.reload();
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 200,
                });
            },
        });

        e.preventDefault();
    });
});

import * as Ladda from "ladda";
window.Ladda = Ladda;
//
///*js tree*/
require("./../css/plugins/jsTree/style.min.css");
require("./../js/plugins/jsTree/jstree.min.js");
require("./../js/plugins/ui/jquery-ui.js");
$(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false,
});
require("./../js/plugins/ui/jquery-ui2.js");
require("./../js/plugins/ui/jquery-ui.css");

$(".sel2").select2();
$(".select2_unite").select2();

$(document).ready(function () {
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
    $(".search_keywords").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".clickdossier,.clickdossier *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        if ($(".clickdossier").css("display") == "none") {
            $(".clickdossier").show();
            $(".hide").fadeIn();
        } else {
            $(".hide").hide();
        }
    });
});


var waves = require("node-waves");
window.Waves = waves;

require("./mdb.min.js");

require("./typewatch.js");

$(document).ready(function () {
    var i = 0;
    $(".search_keywords2").on("keyup", function () {
        //alert()
        var searchString = $(this).val();
        $(".not-found").hide();
        // alert(searchString)
        if ($(this).val() == "") {
            //alert("d")
            $(".metismenu").find(".nav-second-level").removeClass("in");
            $(".colp").removeAttr("style");
            $(".active").find(".nav-second-level").addClass("in");
            $(".colp").unmark().mark(searchString);
        }

        $(".colp").each(function (index, value) {
            var currentName = $(value).text();
            if (
                    currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1 &&
                    searchString != ""
                    ) {
                $(".colp").unmark().mark(searchString);
                if ($(value).parents(".nav-second-level").length) {
                    $(value).parent().addClass("in");
                    $(".active").find(".nav-second-level").addClass("in");
                    $(value).css(
                            "background-color",
                            "rgb(255," + (100 + parseInt($(this).text())) + ",0)"
                            );
                    $(value).show();
                } else {
                    $(".active").find(".nav-second-level").addClass("in");
                    $(value).show();
                }
            } else if (searchString != "") {
                i++;
                /* if ($(value).parents('.nav-second-level').length) {
                 $(value).parent().removeClass('in');
                 }*/
                $(".active").find(".nav-second-level").addClass("in");
                $(value).hide();
            }
        });
        //alert($('.colp').length)
        //alert(i)
        if ($(".colp").length == i) {
            $(".metismenu").after(
                    "<div class='not-found'><i class='fa fa-ban' ></i> Résultat n'est pas trouvé</div>"
                    );
        }
        i = 0;

        /*var value = $(this).val().toLowerCase();
         $(".colp,.colp *").filter(function() {
         if($(this).text().toLowerCase().indexOf(value) > -1){
         $(this).addClass('ok')
         }else{
         $(this).addClass('no')
         }
         // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1 && !$(".ah").length)
         
         });
         if($('.clickdossier').css('display') == 'none'){
         $('.clickdossier').show();
         $('.hide').fadeIn()
         }else{
         $('.hide').hide()
         }*/
    });
});

$(document).ready(function () {
    $(".panel-heading").click(function () {
        //alert();
        $(this)
                .closest(".panel")
                .find(".historique-panel-body")
                .toggleClass("hidden");
        $(this).closest(".panel").find(".over").toggleClass("hidden");
        $(".collapse-link-historique i", this).toggleClass("fa-chevron-down");
    });
});

//datatable-show-historique
var tableShow = $(".datatable-show-historique-autre").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
    autoWidth: false,
    columns: [
        {width: "5%"},
        {width: "10%"},
        {width: "35%"},
        {width: "20%"},
        {width: "5%"},
        {width: "5%"},
        {width: "5%"},
        {width: "20%"},
    ],
    footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
                data;
        //console.log($("#datatable-show").attr(""));
        var total, pageTotal;
        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === "string"
                    ? i.replace(/[\$,]/g, "") * 1
                    : typeof i === "number"
                    ? i
                    : 0;
        };

        // Total over all pages
        total = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        // Total over this page
        pageTotal = api
                .column(7, {page: "current"})
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
    },
});

var tableShow1 = $(".datatable-show-historique-reglement").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
    autoWidth: false,
    columns: [
        {width: "20%"},
        {width: "20%"},
        {width: "20%"},
        {width: "20%"},
        {width: "20%"},
    ],
});



$(".normal").click(function () {
    if (".normal") {
        $.ajax({
            type: 'POST',
            /* data: value, */
            processData: false,
            contentType: false,
            url: Routing.generate('user_profil_headertheme_normal'),
            success: function (result) {
                console.log(result);
                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    location.reload();
                } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
});
$(".bleu").click(function () {
    if (".bleu") {
        $.ajax({
            type: 'POST',
            /* data: value, */
            processData: false,
            contentType: false,
            url: Routing.generate('user_profil_headertheme_bleu'),
            success: function (result) {
                console.log(result);
                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    location.reload();
                } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
});
$(".marron").click(function () {
    if (".marron") {
        $.ajax({
            type: 'POST',
            /* data: value, */
            processData: false,
            contentType: false,
            url: Routing.generate('user_profil_headertheme_marron'),
            success: function (result) {
                console.log(result);
                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    location.reload();
                } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
});
$(".vert").click(function () {
    if (".vert") {
        $.ajax({
            type: 'POST',
            /* data: value, */
            processData: false,
            contentType: false,
            url: Routing.generate('user_profil_headertheme_vert'),
            success: function (result) {
                console.log(result);
                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    location.reload();
                } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
            }
        });
    } else {
        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
    }
});


$('#menu_position').change(function () {
    let selected_value = $("input[name='my_menu_position']:checked").val();
    console.log(selected_value);

    if (selected_value) {
        $.ajax({
            type: 'POST',
            url: Routing.generate('user_profil_menu_position', {id: selected_value}),
            success: function (result) {

                if (result.code == 200) {
                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                    location.reload();
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


$('.setDossierCourant').click(function (e) {
    let dossierId = $(this).attr('data-id');
    console.log(dossierId);

//    if (dossierId) {
//        $.ajax({
//            type: 'POST',
//            url: Routing.generate('set_dossier_courant',{id:dossierId}),
//            success: function (result) {
//                
//                if (result.code == 200) {
//                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                    location.reload();
//                } else if (result.code == 403) {
//                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                }
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//            }
//        });
//    } 

    e.preventDefault();
});





$('.setDossierCourant').click(function (e) {
    let dossierId = $(this).attr('data-id');

    swalWithBootstrapButtons
            .fire({
                showClass: {
                    popup: "animatedSwal flipInX faster",
                },
                position: "top",
                title: "Confirmation ?",
                text: "Voulez vous vraiment changer votre dossier actuel ?",
                type: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: "<i class='fa fa-check'></i> Oui !",
                cancelButtonText: "<i class='fa fa-times'></i> No !",
            })
            .then((result) => {
                if (result.value) {
                    $.ajax({
                        type: 'POST',
                        url: Routing.generate('set_dossier_courant', {id: dossierId}),
                        success: function (result) {

                            if (result.code == 200) {
                                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
                                location.reload();
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

    e.preventDefault();
});


$('body').on('click','.observation-icon',function(){
    $(this).parent().parent().next().toggleClass('hide');
})

require("../css/plugins/summernote/summernote-bs4.css");

require("./js.js");
require("./sum.js");
$('.summernote').summernote({
    tabsize: 2,
    height: 70,
    placeholder:'placeholder',
    toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold']],
      ],
        /*callbacks: {
          onKeyup: function(e) {
              console.log(e)
            setTimeout(function(){
                alert("dd")
              //$(this).val($('.description').val());
            },200);
          }
        }*/
        callbacks: {
            onChange: function(contents, $editable) {
                $(this).attr('value',contents)
            },
            onInit: function(e) {
                this.placeholder 
                  ? e.editingArea.find(".note-placeholder").html(this.placeholder)
                  : e.editingArea.remove(".note-placeholder");
                  this.value 
                  ? e.editingArea.find(".note-editable").html(this.value)
                  : ''
            }
        }
});



$('body').on('input', '.decimal_places',  function () {
    var val = $(this).val();
        var splitVal = val.split('.');
        if (splitVal.length == 2 && splitVal[1].length > 2) {
            // user entered invalid input
            $(this).val(splitVal[0] + '.' + splitVal[1].substr(0, 2));
        }
  });
  
  
  
  






