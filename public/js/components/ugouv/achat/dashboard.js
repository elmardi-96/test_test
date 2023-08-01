const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);



$(".select2_demo_1").select2();
$(".select2_demo_3").select2({
    placeholder: "Votre Choix",
    allowClear: true
});
var barData = null;
var barOptions = null;
var barData2 = null;
var barOptions2 = null;
var barData3 = null;
var barOptions3 = null;
var barData4 = null;
var barOptions4 = null;
var barData5 = null;
var barOptions5 = null;
//alert();
$.ajax({
    type: 'POST',
    async: false,
    url: Routing.generate('mesures_type', {type: 'ttc'}),
    success: function (result) {
        var r = $.parseJSON(result);
        console.log(result);
        barData = {
            labels: r.labels,
            datasets: [
                {
                    label: "Année : "+$('#form_annee').val(),
                    backgroundColor: r.expression_besoin.backgroundColor,
                    //borderColor: "rgba(26,179,148,0.7)",
                    //pointBackgroundColor: "rgba(26,179,148,1)",
                    //pointBorderColor: "#fff",
                    barPercentage:0.2,
                    maxBarThickness: 5,
                    data: r.expression_besoin.data
                }
            ]
        };

        barOptions = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize:1,
                  

                }    
              }],
              xAxes: [{
                barPercentage: 0.6
            }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = 'NBR';
    
                        if (label) {
                            label += ' (';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label+')';
                    }
                }
            },
            legend: {
                display: false
            }

        };






        barData2 = {
            labels: r.labels,
            datasets: [
                {
                    label: "Année : "+$('#form_annee').val(),
                    backgroundColor: r.commande_fournisseur.backgroundColor,
                    //borderColor: "rgba(26,179,148,0.7)",
                    //pointBackgroundColor: "rgba(26,179,148,1)",
                    //pointBorderColor: "#fff",
                    barPercentage:0.2,
                    maxBarThickness: 5,
                    data: r.commande_fournisseur.data
                }
            ]
        };

        barOptions2 = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize:1,
                  

                }    
              }],
              xAxes: [{
                barPercentage: 0.6
            }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = 'NBR';
    
                        if (label) {
                            label += ' (';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label+')';
                    }
                }
            },
            legend: {
                display: false
            }

        };






        barData3 = {
            labels: r.labels,
            datasets: [
                {
                    label: "Année : "+$('#form_annee').val(),
                    backgroundColor: r.bc_fournisseur.backgroundColor,
                    //borderColor: "rgba(26,179,148,0.7)",
                    //pointBackgroundColor: "rgba(26,179,148,1)",
                    //pointBorderColor: "#fff",
                    barPercentage:0.2,
                    maxBarThickness: 5,
                    data: r.bc_fournisseur.data
                }
            ]
        };

        barOptions3 = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize:1,
                  

                }    
              }],
              xAxes: [{
                barPercentage: 0.6
            }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = 'NBR';
    
                        if (label) {
                            label += ' (';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label+')';
                    }
                }
            },
            legend: {
                display: false
            }

        };





        barData4 = {
            labels: r.labels,
            datasets: [
                {
                    label: "Année : "+$('#form_annee').val(),
                    backgroundColor: r.factures_fournisseur.backgroundColor,
                    //borderColor: "rgba(26,179,148,0.7)",
                    //pointBackgroundColor: "rgba(26,179,148,1)",
                    //pointBorderColor: "#fff",
                    barPercentage:0.2,
                    maxBarThickness: 5,
                    data: r.factures_fournisseur.data
                }
            ]
        };

        barOptions4 = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize:1,
                  

                }    
              }],
              xAxes: [{
                barPercentage: 0.6
            }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = 'NBR';
    
                        if (label) {
                            label += ' (';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label+')';
                    }
                }
            },
            legend: {
                display: false
            }

        };




        barData5 = {
            labels: r.labels,
            datasets: [
                {
                    label: "Année : "+$('#form_annee').val(),
                    backgroundColor: r.reglement_fournisseur.backgroundColor,
                    //borderColor: "rgba(26,179,148,0.7)",
                    //pointBackgroundColor: "rgba(26,179,148,1)",
                    //pointBorderColor: "#fff",
                    barPercentage:0.2,
                    maxBarThickness: 5,
                    data: r.reglement_fournisseur.data
                }
            ]
        };

        barOptions5 = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize:1,
                  

                }    
              }],
              xAxes: [{
                barPercentage: 0.6
            }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = 'NBR';
    
                        if (label) {
                            label += ' (';
                        }
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label+')';
                    }
                }
            },
            legend: {
                display: false
            }

        };


    },
    error: function (r) {
        console.log(r)
    }
});
function getAllTotalStatistique(){
    $.ajax({
        type: 'POST',
        async: false,
        url: Routing.generate('fournisseur'),
        data: {annee: $("#form_annee").val(),fournisseur:$("#form_fournisseur").val(),statut:$("#form_statut").val()},
        success: function (result) {
            //console.log(result);
            $.each($.parseJSON(result), function (key, value) {

                $.each(value, function (key2, value2) {
                    console.log(value2.nbr);
                    $('.' + value2.sous_module).html(value2.nbr);

                });

            });
        }
    });
}

getAllTotalStatistique();
var ctx2 = document.getElementById("barChart").getContext("2d");
var massPopChart = new Chart(ctx2, {type: 'bar', data: barData, options: barOptions});

var ctx3 = document.getElementById("barChart2").getContext("2d");
var massPopChart2 = new Chart(ctx3, {type: 'bar', data: barData2, options: barOptions2});

var ctx4 = document.getElementById("barChart3").getContext("2d");
var massPopChart3 = new Chart(ctx4, {type: 'bar', data: barData3, options: barOptions3});

var ctx5 = document.getElementById("barChart4").getContext("2d");
var massPopChart4 = new Chart(ctx5, {type: 'bar', data: barData4, options: barOptions4});

var ctx6 = document.getElementById("barChart5").getContext("2d");
var massPopChart5 = new Chart(ctx6, {type: 'bar', data: barData5, options: barOptions5});


$('body').on('click', '.dropdown-item', function (e) {
    $.ajax({
        type: 'POST',
        url: Routing.generate('mesures_type', {type: $(this).attr('type')}),
        success: function (result) {
            var r = $.parseJSON(result);
            massPopChart.data.labels = r.labels;
            massPopChart.data.datasets[0].data = r.data;
            massPopChart.data.datasets[0].backgroundColor = r.backgroundColor;
            massPopChart.update();
        }
    });

    e.preventDefault();
});

$('body').on('click', '.search', function (e) {
    $.ajax({
        type: 'POST',
        url: Routing.generate('mesures_type', {type: $(this).attr('type')}),
        data: {annee: $("#form_annee").val(),fournisseur:$("#form_fournisseur").val(),statut:$("#form_statut").val()},
        success: function (result) {
            //alert();
            getAllTotalStatistique();
            console.log(result);
            var r = $.parseJSON(result);
            massPopChart.data.labels = r.labels;
            massPopChart.data.datasets[0].data = r.expression_besoin.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
            massPopChart.update();



            massPopChart2.data.labels = r.labels;
            massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart2.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
            massPopChart2.update();




            massPopChart3.data.labels = r.labels;
            massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart3.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
            massPopChart3.update();




            massPopChart4.data.labels = r.labels;
            massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart4.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
            massPopChart4.update();



            massPopChart5.data.labels = r.labels;
            massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart5.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart5.data.datasets[0].backgroundColor = r.reglement_fournisseur.backgroundColor;
            massPopChart5.update();
        }
    });

    e.preventDefault();
});

$('body').on('click', '.rsearch', function (e) {
    //alert();
    //$("#form_annee").val(1).trigger('change.select2');
    //$('#form_annee option:eq(0)').prop('selected',true);
    $('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');
    $('#form_fournisseur').val("").trigger('change');
    $('#form_statut').val("").trigger('change');
    $.ajax({
        type: 'POST',
        url: Routing.generate('mesures_type', {type: $(this).attr('type')}),
        data: {annee: $("#form_annee").val(),fournisseur:$("#form_fournisseur").val(),statut:$("#form_statut").val()},
        success: function (result) {
            //alert();
            getAllTotalStatistique();
            console.log(result);
            var r = $.parseJSON(result);
            massPopChart.data.labels = r.labels;
            massPopChart.data.datasets[0].data = r.expression_besoin.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
            massPopChart.update();


            massPopChart2.data.labels = r.labels;
            massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart2.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
            massPopChart2.update();



            massPopChart3.data.labels = r.labels;
            massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart3.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
            massPopChart3.update();



            massPopChart4.data.labels = r.labels;
            massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart4.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
            massPopChart4.update();


            massPopChart5.data.labels = r.labels;
            massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
            //label: "Année : "+$('#form_annee').val(),
            massPopChart5.data.datasets[0].label = "Année : "+$('#form_annee').val();
            massPopChart5.data.datasets[0].backgroundColor = r.reglement_fournisseur.backgroundColor;
            massPopChart5.update();
        }
    });
    //$("#form_statut").val(1);
});
$('body').on('change', '#form_annee', function (e) {
   // alert();
    //$("#form_annee").val(1).trigger('change.select2');
    //$('#form_annee option:eq(0)').prop('selected',true);
    if($('#form_annee').val() == null){
        $('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');

    }

});

$('body').on('click', '.o_graph_button', function (e) {
    $('.o_graph_button').removeClass('active');
    $(this).addClass('active');
    massPopChart.destroy();
    massPopChart = new Chart(ctx2, {type: $(this).attr('data-mode'), data: barData, options: barOptions});
});