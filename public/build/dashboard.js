(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./assets/js/components/module_achat/dashboard.js":
/*!********************************************************!*\
  !*** ./assets/js/components/module_achat/dashboard.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
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
  url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('mesures_type', {
    type: 'ttc'
  }),
  success: function success(result) {
    var r = $.parseJSON(result);
    console.log(result);
    barData = {
      labels: r.labels,
      datasets: [{
        label: "Année : " + $('#form_annee').val(),
        backgroundColor: r.expression_besoin.backgroundColor,
        //borderColor: "rgba(26,179,148,0.7)",
        //pointBackgroundColor: "rgba(26,179,148,1)",
        //pointBorderColor: "#fff",
        barPercentage: 0.2,
        maxBarThickness: 5,
        data: r.expression_besoin.data
      }]
    };
    barOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          barPercentage: 0.6
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = 'NBR';
            if (label) {
              label += ' (';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label + ')';
          }
        }
      },
      legend: {
        display: false
      }
    };
    barData2 = {
      labels: r.labels,
      datasets: [{
        label: "Année : " + $('#form_annee').val(),
        backgroundColor: r.commande_fournisseur.backgroundColor,
        //borderColor: "rgba(26,179,148,0.7)",
        //pointBackgroundColor: "rgba(26,179,148,1)",
        //pointBorderColor: "#fff",
        barPercentage: 0.2,
        maxBarThickness: 5,
        data: r.commande_fournisseur.data
      }]
    };
    barOptions2 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          barPercentage: 0.6
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = 'NBR';
            if (label) {
              label += ' (';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label + ')';
          }
        }
      },
      legend: {
        display: false
      }
    };
    barData3 = {
      labels: r.labels,
      datasets: [{
        label: "Année : " + $('#form_annee').val(),
        backgroundColor: r.bc_fournisseur.backgroundColor,
        //borderColor: "rgba(26,179,148,0.7)",
        //pointBackgroundColor: "rgba(26,179,148,1)",
        //pointBorderColor: "#fff",
        barPercentage: 0.2,
        maxBarThickness: 5,
        data: r.bc_fournisseur.data
      }]
    };
    barOptions3 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          barPercentage: 0.6
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = 'NBR';
            if (label) {
              label += ' (';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label + ')';
          }
        }
      },
      legend: {
        display: false
      }
    };
    barData4 = {
      labels: r.labels,
      datasets: [{
        label: "Année : " + $('#form_annee').val(),
        backgroundColor: r.factures_fournisseur.backgroundColor,
        //borderColor: "rgba(26,179,148,0.7)",
        //pointBackgroundColor: "rgba(26,179,148,1)",
        //pointBorderColor: "#fff",
        barPercentage: 0.2,
        maxBarThickness: 5,
        data: r.factures_fournisseur.data
      }]
    };
    barOptions4 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          barPercentage: 0.6
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = 'NBR';
            if (label) {
              label += ' (';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label + ')';
          }
        }
      },
      legend: {
        display: false
      }
    };
    barData5 = {
      labels: r.labels,
      datasets: [{
        label: "Année : " + $('#form_annee').val(),
        backgroundColor: r.reglement_fournisseur.backgroundColor,
        //borderColor: "rgba(26,179,148,0.7)",
        //pointBackgroundColor: "rgba(26,179,148,1)",
        //pointBorderColor: "#fff",
        barPercentage: 0.2,
        maxBarThickness: 5,
        data: r.reglement_fournisseur.data
      }]
    };
    barOptions5 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          barPercentage: 0.6
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = 'NBR';
            if (label) {
              label += ' (';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label + ')';
          }
        }
      },
      legend: {
        display: false
      }
    };
  },
  error: function error(r) {
    console.log(r);
  }
});
function getAllTotalStatistique() {
  $.ajax({
    type: 'POST',
    async: false,
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('fournisseur'),
    data: {
      annee: $("#form_annee").val(),
      fournisseur: $("#form_fournisseur").val(),
      statut: $("#form_statut").val()
    },
    success: function success(result) {
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
var massPopChart = new Chart(ctx2, {
  type: 'bar',
  data: barData,
  options: barOptions
});
var ctx3 = document.getElementById("barChart2").getContext("2d");
var massPopChart2 = new Chart(ctx3, {
  type: 'bar',
  data: barData2,
  options: barOptions2
});
var ctx4 = document.getElementById("barChart3").getContext("2d");
var massPopChart3 = new Chart(ctx4, {
  type: 'bar',
  data: barData3,
  options: barOptions3
});
var ctx5 = document.getElementById("barChart4").getContext("2d");
var massPopChart4 = new Chart(ctx5, {
  type: 'bar',
  data: barData4,
  options: barOptions4
});
var ctx6 = document.getElementById("barChart5").getContext("2d");
var massPopChart5 = new Chart(ctx6, {
  type: 'bar',
  data: barData5,
  options: barOptions5
});
$('body').on('click', '.dropdown-item', function (e) {
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('mesures_type', {
      type: $(this).attr('type')
    }),
    success: function success(result) {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('mesures_type', {
      type: $(this).attr('type')
    }),
    data: {
      annee: $("#form_annee").val(),
      fournisseur: $("#form_fournisseur").val(),
      statut: $("#form_statut").val()
    },
    success: function success(result) {
      //alert();
      getAllTotalStatistique();
      console.log(result);
      var r = $.parseJSON(result);
      massPopChart.data.labels = r.labels;
      massPopChart.data.datasets[0].data = r.expression_besoin.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
      massPopChart.update();
      massPopChart2.data.labels = r.labels;
      massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart2.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
      massPopChart2.update();
      massPopChart3.data.labels = r.labels;
      massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart3.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
      massPopChart3.update();
      massPopChart4.data.labels = r.labels;
      massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart4.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
      massPopChart4.update();
      massPopChart5.data.labels = r.labels;
      massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart5.data.datasets[0].label = "Année : " + $('#form_annee').val();
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('mesures_type', {
      type: $(this).attr('type')
    }),
    data: {
      annee: $("#form_annee").val(),
      fournisseur: $("#form_fournisseur").val(),
      statut: $("#form_statut").val()
    },
    success: function success(result) {
      //alert();
      getAllTotalStatistique();
      console.log(result);
      var r = $.parseJSON(result);
      massPopChart.data.labels = r.labels;
      massPopChart.data.datasets[0].data = r.expression_besoin.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
      massPopChart.update();
      massPopChart2.data.labels = r.labels;
      massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart2.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
      massPopChart2.update();
      massPopChart3.data.labels = r.labels;
      massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart3.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
      massPopChart3.update();
      massPopChart4.data.labels = r.labels;
      massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart4.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
      massPopChart4.update();
      massPopChart5.data.labels = r.labels;
      massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart5.data.datasets[0].label = "Année : " + $('#form_annee').val();
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
  if ($('#form_annee').val() == null) {
    $('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');
  }
});
$('body').on('click', '.o_graph_button', function (e) {
  $('.o_graph_button').removeClass('active');
  $(this).addClass('active');
  massPopChart.destroy();
  massPopChart = new Chart(ctx2, {
    type: $(this).attr('data-mode'),
    data: barData,
    options: barOptions
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/module_achat/dashboard.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCIkIiwic2VsZWN0MiIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsImJhckRhdGEiLCJiYXJPcHRpb25zIiwiYmFyRGF0YTIiLCJiYXJPcHRpb25zMiIsImJhckRhdGEzIiwiYmFyT3B0aW9uczMiLCJiYXJEYXRhNCIsImJhck9wdGlvbnM0IiwiYmFyRGF0YTUiLCJiYXJPcHRpb25zNSIsImFqYXgiLCJ0eXBlIiwiYXN5bmMiLCJ1cmwiLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJyIiwicGFyc2VKU09OIiwiY29uc29sZSIsImxvZyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJ2YWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJleHByZXNzaW9uX2Jlc29pbiIsImJhclBlcmNlbnRhZ2UiLCJtYXhCYXJUaGlja25lc3MiLCJkYXRhIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwibWluIiwic3RlcFNpemUiLCJ4QXhlcyIsInRvb2x0aXBzIiwiY2FsbGJhY2tzIiwidG9vbHRpcEl0ZW0iLCJNYXRoIiwicm91bmQiLCJ5TGFiZWwiLCJsZWdlbmQiLCJkaXNwbGF5IiwiY29tbWFuZGVfZm91cm5pc3NldXIiLCJiY19mb3Vybmlzc2V1ciIsImZhY3R1cmVzX2ZvdXJuaXNzZXVyIiwicmVnbGVtZW50X2ZvdXJuaXNzZXVyIiwiZXJyb3IiLCJnZXRBbGxUb3RhbFN0YXRpc3RpcXVlIiwiYW5uZWUiLCJmb3Vybmlzc2V1ciIsInN0YXR1dCIsImVhY2giLCJrZXkiLCJ2YWx1ZSIsImtleTIiLCJ2YWx1ZTIiLCJuYnIiLCJzb3VzX21vZHVsZSIsImh0bWwiLCJjdHgyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJtYXNzUG9wQ2hhcnQiLCJDaGFydCIsIm9wdGlvbnMiLCJjdHgzIiwibWFzc1BvcENoYXJ0MiIsImN0eDQiLCJtYXNzUG9wQ2hhcnQzIiwiY3R4NSIsIm1hc3NQb3BDaGFydDQiLCJjdHg2IiwibWFzc1BvcENoYXJ0NSIsIm9uIiwiZSIsImF0dHIiLCJ1cGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFJOUJJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7QUFDOUJELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxPQUFPLENBQUM7RUFDekJDLFdBQVcsRUFBRSxhQUFhO0VBQzFCQyxVQUFVLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsSUFBSUMsT0FBTyxHQUFHLElBQUk7QUFDbEIsSUFBSUMsVUFBVSxHQUFHLElBQUk7QUFDckIsSUFBSUMsUUFBUSxHQUFHLElBQUk7QUFDbkIsSUFBSUMsV0FBVyxHQUFHLElBQUk7QUFDdEIsSUFBSUMsUUFBUSxHQUFHLElBQUk7QUFDbkIsSUFBSUMsV0FBVyxHQUFHLElBQUk7QUFDdEIsSUFBSUMsUUFBUSxHQUFHLElBQUk7QUFDbkIsSUFBSUMsV0FBVyxHQUFHLElBQUk7QUFDdEIsSUFBSUMsUUFBUSxHQUFHLElBQUk7QUFDbkIsSUFBSUMsV0FBVyxHQUFHLElBQUk7QUFDdEI7QUFDQWIsQ0FBQyxDQUFDYyxJQUFJLENBQUM7RUFDSEMsSUFBSSxFQUFFLE1BQU07RUFDWkMsS0FBSyxFQUFFLEtBQUs7RUFDWkMsR0FBRyxFQUFFbkIsa0hBQU8sQ0FBQ29CLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFBQ0gsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUFDO0VBQ3BESSxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtJQUN2QixJQUFJQyxDQUFDLEdBQUdyQixDQUFDLENBQUNzQixTQUFTLENBQUNGLE1BQU0sQ0FBQztJQUMzQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztJQUNuQmhCLE9BQU8sR0FBRztNQUNOcUIsTUFBTSxFQUFFSixDQUFDLENBQUNJLE1BQU07TUFDaEJDLFFBQVEsRUFBRSxDQUNOO1FBQ0lDLEtBQUssRUFBRSxVQUFVLEdBQUMzQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM0QixHQUFHLEVBQUU7UUFDeENDLGVBQWUsRUFBRVIsQ0FBQyxDQUFDUyxpQkFBaUIsQ0FBQ0QsZUFBZTtRQUNwRDtRQUNBO1FBQ0E7UUFDQUUsYUFBYSxFQUFDLEdBQUc7UUFDakJDLGVBQWUsRUFBRSxDQUFDO1FBQ2xCQyxJQUFJLEVBQUVaLENBQUMsQ0FBQ1MsaUJBQWlCLENBQUNHO01BQzlCLENBQUM7SUFFVCxDQUFDO0lBRUQ1QixVQUFVLEdBQUc7TUFDVDZCLE1BQU0sRUFBRTtRQUNOQyxLQUFLLEVBQUUsQ0FBQztVQUNOQyxLQUFLLEVBQUU7WUFDTEMsV0FBVyxFQUFFLElBQUk7WUFDakJDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBQztVQUdYO1FBQ0YsQ0FBQyxDQUFDO1FBQ0ZDLEtBQUssRUFBRSxDQUFDO1VBQ05ULGFBQWEsRUFBRTtRQUNuQixDQUFDO01BQ0QsQ0FBQztNQUNEVSxRQUFRLEVBQUU7UUFDTkMsU0FBUyxFQUFFO1VBQ1BmLEtBQUssRUFBRSxlQUFTZ0IsV0FBVyxFQUFFVixJQUFJLEVBQUU7WUFDL0IsSUFBSU4sS0FBSyxHQUFHLEtBQUs7WUFFakIsSUFBSUEsS0FBSyxFQUFFO2NBQ1BBLEtBQUssSUFBSSxJQUFJO1lBQ2pCO1lBQ0FBLEtBQUssSUFBSWlCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixXQUFXLENBQUNHLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ25ELE9BQU9uQixLQUFLLEdBQUMsR0FBRztVQUNwQjtRQUNKO01BQ0osQ0FBQztNQUNEb0IsTUFBTSxFQUFFO1FBQ0pDLE9BQU8sRUFBRTtNQUNiO0lBRUosQ0FBQztJQU9EMUMsUUFBUSxHQUFHO01BQ1BtQixNQUFNLEVBQUVKLENBQUMsQ0FBQ0ksTUFBTTtNQUNoQkMsUUFBUSxFQUFFLENBQ047UUFDSUMsS0FBSyxFQUFFLFVBQVUsR0FBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtRQUN4Q0MsZUFBZSxFQUFFUixDQUFDLENBQUM0QixvQkFBb0IsQ0FBQ3BCLGVBQWU7UUFDdkQ7UUFDQTtRQUNBO1FBQ0FFLGFBQWEsRUFBQyxHQUFHO1FBQ2pCQyxlQUFlLEVBQUUsQ0FBQztRQUNsQkMsSUFBSSxFQUFFWixDQUFDLENBQUM0QixvQkFBb0IsQ0FBQ2hCO01BQ2pDLENBQUM7SUFFVCxDQUFDO0lBRUQxQixXQUFXLEdBQUc7TUFDVjJCLE1BQU0sRUFBRTtRQUNOQyxLQUFLLEVBQUUsQ0FBQztVQUNOQyxLQUFLLEVBQUU7WUFDTEMsV0FBVyxFQUFFLElBQUk7WUFDakJDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBQztVQUdYO1FBQ0YsQ0FBQyxDQUFDO1FBQ0ZDLEtBQUssRUFBRSxDQUFDO1VBQ05ULGFBQWEsRUFBRTtRQUNuQixDQUFDO01BQ0QsQ0FBQztNQUNEVSxRQUFRLEVBQUU7UUFDTkMsU0FBUyxFQUFFO1VBQ1BmLEtBQUssRUFBRSxlQUFTZ0IsV0FBVyxFQUFFVixJQUFJLEVBQUU7WUFDL0IsSUFBSU4sS0FBSyxHQUFHLEtBQUs7WUFFakIsSUFBSUEsS0FBSyxFQUFFO2NBQ1BBLEtBQUssSUFBSSxJQUFJO1lBQ2pCO1lBQ0FBLEtBQUssSUFBSWlCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixXQUFXLENBQUNHLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ25ELE9BQU9uQixLQUFLLEdBQUMsR0FBRztVQUNwQjtRQUNKO01BQ0osQ0FBQztNQUNEb0IsTUFBTSxFQUFFO1FBQ0pDLE9BQU8sRUFBRTtNQUNiO0lBRUosQ0FBQztJQU9EeEMsUUFBUSxHQUFHO01BQ1BpQixNQUFNLEVBQUVKLENBQUMsQ0FBQ0ksTUFBTTtNQUNoQkMsUUFBUSxFQUFFLENBQ047UUFDSUMsS0FBSyxFQUFFLFVBQVUsR0FBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtRQUN4Q0MsZUFBZSxFQUFFUixDQUFDLENBQUM2QixjQUFjLENBQUNyQixlQUFlO1FBQ2pEO1FBQ0E7UUFDQTtRQUNBRSxhQUFhLEVBQUMsR0FBRztRQUNqQkMsZUFBZSxFQUFFLENBQUM7UUFDbEJDLElBQUksRUFBRVosQ0FBQyxDQUFDNkIsY0FBYyxDQUFDakI7TUFDM0IsQ0FBQztJQUVULENBQUM7SUFFRHhCLFdBQVcsR0FBRztNQUNWeUIsTUFBTSxFQUFFO1FBQ05DLEtBQUssRUFBRSxDQUFDO1VBQ05DLEtBQUssRUFBRTtZQUNMQyxXQUFXLEVBQUUsSUFBSTtZQUNqQkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFDO1VBR1g7UUFDRixDQUFDLENBQUM7UUFDRkMsS0FBSyxFQUFFLENBQUM7VUFDTlQsYUFBYSxFQUFFO1FBQ25CLENBQUM7TUFDRCxDQUFDO01BQ0RVLFFBQVEsRUFBRTtRQUNOQyxTQUFTLEVBQUU7VUFDUGYsS0FBSyxFQUFFLGVBQVNnQixXQUFXLEVBQUVWLElBQUksRUFBRTtZQUMvQixJQUFJTixLQUFLLEdBQUcsS0FBSztZQUVqQixJQUFJQSxLQUFLLEVBQUU7Y0FDUEEsS0FBSyxJQUFJLElBQUk7WUFDakI7WUFDQUEsS0FBSyxJQUFJaUIsSUFBSSxDQUFDQyxLQUFLLENBQUNGLFdBQVcsQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFDbkQsT0FBT25CLEtBQUssR0FBQyxHQUFHO1VBQ3BCO1FBQ0o7TUFDSixDQUFDO01BQ0RvQixNQUFNLEVBQUU7UUFDSkMsT0FBTyxFQUFFO01BQ2I7SUFFSixDQUFDO0lBTUR0QyxRQUFRLEdBQUc7TUFDUGUsTUFBTSxFQUFFSixDQUFDLENBQUNJLE1BQU07TUFDaEJDLFFBQVEsRUFBRSxDQUNOO1FBQ0lDLEtBQUssRUFBRSxVQUFVLEdBQUMzQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM0QixHQUFHLEVBQUU7UUFDeENDLGVBQWUsRUFBRVIsQ0FBQyxDQUFDOEIsb0JBQW9CLENBQUN0QixlQUFlO1FBQ3ZEO1FBQ0E7UUFDQTtRQUNBRSxhQUFhLEVBQUMsR0FBRztRQUNqQkMsZUFBZSxFQUFFLENBQUM7UUFDbEJDLElBQUksRUFBRVosQ0FBQyxDQUFDOEIsb0JBQW9CLENBQUNsQjtNQUNqQyxDQUFDO0lBRVQsQ0FBQztJQUVEdEIsV0FBVyxHQUFHO01BQ1Z1QixNQUFNLEVBQUU7UUFDTkMsS0FBSyxFQUFFLENBQUM7VUFDTkMsS0FBSyxFQUFFO1lBQ0xDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUM7VUFHWDtRQUNGLENBQUMsQ0FBQztRQUNGQyxLQUFLLEVBQUUsQ0FBQztVQUNOVCxhQUFhLEVBQUU7UUFDbkIsQ0FBQztNQUNELENBQUM7TUFDRFUsUUFBUSxFQUFFO1FBQ05DLFNBQVMsRUFBRTtVQUNQZixLQUFLLEVBQUUsZUFBU2dCLFdBQVcsRUFBRVYsSUFBSSxFQUFFO1lBQy9CLElBQUlOLEtBQUssR0FBRyxLQUFLO1lBRWpCLElBQUlBLEtBQUssRUFBRTtjQUNQQSxLQUFLLElBQUksSUFBSTtZQUNqQjtZQUNBQSxLQUFLLElBQUlpQixJQUFJLENBQUNDLEtBQUssQ0FBQ0YsV0FBVyxDQUFDRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztZQUNuRCxPQUFPbkIsS0FBSyxHQUFDLEdBQUc7VUFDcEI7UUFDSjtNQUNKLENBQUM7TUFDRG9CLE1BQU0sRUFBRTtRQUNKQyxPQUFPLEVBQUU7TUFDYjtJQUVKLENBQUM7SUFLRHBDLFFBQVEsR0FBRztNQUNQYSxNQUFNLEVBQUVKLENBQUMsQ0FBQ0ksTUFBTTtNQUNoQkMsUUFBUSxFQUFFLENBQ047UUFDSUMsS0FBSyxFQUFFLFVBQVUsR0FBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtRQUN4Q0MsZUFBZSxFQUFFUixDQUFDLENBQUMrQixxQkFBcUIsQ0FBQ3ZCLGVBQWU7UUFDeEQ7UUFDQTtRQUNBO1FBQ0FFLGFBQWEsRUFBQyxHQUFHO1FBQ2pCQyxlQUFlLEVBQUUsQ0FBQztRQUNsQkMsSUFBSSxFQUFFWixDQUFDLENBQUMrQixxQkFBcUIsQ0FBQ25CO01BQ2xDLENBQUM7SUFFVCxDQUFDO0lBRURwQixXQUFXLEdBQUc7TUFDVnFCLE1BQU0sRUFBRTtRQUNOQyxLQUFLLEVBQUUsQ0FBQztVQUNOQyxLQUFLLEVBQUU7WUFDTEMsV0FBVyxFQUFFLElBQUk7WUFDakJDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBQztVQUdYO1FBQ0YsQ0FBQyxDQUFDO1FBQ0ZDLEtBQUssRUFBRSxDQUFDO1VBQ05ULGFBQWEsRUFBRTtRQUNuQixDQUFDO01BQ0QsQ0FBQztNQUNEVSxRQUFRLEVBQUU7UUFDTkMsU0FBUyxFQUFFO1VBQ1BmLEtBQUssRUFBRSxlQUFTZ0IsV0FBVyxFQUFFVixJQUFJLEVBQUU7WUFDL0IsSUFBSU4sS0FBSyxHQUFHLEtBQUs7WUFFakIsSUFBSUEsS0FBSyxFQUFFO2NBQ1BBLEtBQUssSUFBSSxJQUFJO1lBQ2pCO1lBQ0FBLEtBQUssSUFBSWlCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixXQUFXLENBQUNHLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ25ELE9BQU9uQixLQUFLLEdBQUMsR0FBRztVQUNwQjtRQUNKO01BQ0osQ0FBQztNQUNEb0IsTUFBTSxFQUFFO1FBQ0pDLE9BQU8sRUFBRTtNQUNiO0lBRUosQ0FBQztFQUdMLENBQUM7RUFDREssS0FBSyxFQUFFLGVBQVVoQyxDQUFDLEVBQUU7SUFDaEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUM7RUFDbEI7QUFDSixDQUFDLENBQUM7QUFDRixTQUFTaUMsc0JBQXNCLEdBQUU7RUFDN0J0RCxDQUFDLENBQUNjLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxHQUFHLEVBQUVuQixrSEFBTyxDQUFDb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNwQ2UsSUFBSSxFQUFFO01BQUNzQixLQUFLLEVBQUV2RCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM0QixHQUFHLEVBQUU7TUFBQzRCLFdBQVcsRUFBQ3hELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQUM2QixNQUFNLEVBQUN6RCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM0QixHQUFHO0lBQUUsQ0FBQztJQUM3R1QsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7TUFDdkI7TUFDQXBCLENBQUMsQ0FBQzBELElBQUksQ0FBQzFELENBQUMsQ0FBQ3NCLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDLEVBQUUsVUFBVXVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO1FBRTlDNUQsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDRSxLQUFLLEVBQUUsVUFBVUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7VUFDbEN2QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3NDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1VBQ3ZCL0QsQ0FBQyxDQUFDLEdBQUcsR0FBRzhELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxHQUFHLENBQUM7UUFFaEQsQ0FBQyxDQUFDO01BRU4sQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7QUFDTjtBQUVBVCxzQkFBc0IsRUFBRTtBQUN4QixJQUFJWSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQy9ELElBQUlDLFlBQVksR0FBRyxJQUFJQyxLQUFLLENBQUNMLElBQUksRUFBRTtFQUFDbkQsSUFBSSxFQUFFLEtBQUs7RUFBRWtCLElBQUksRUFBRTdCLE9BQU87RUFBRW9FLE9BQU8sRUFBRW5FO0FBQVUsQ0FBQyxDQUFDO0FBRXJGLElBQUlvRSxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ2hFLElBQUlLLGFBQWEsR0FBRyxJQUFJSCxLQUFLLENBQUNFLElBQUksRUFBRTtFQUFDMUQsSUFBSSxFQUFFLEtBQUs7RUFBRWtCLElBQUksRUFBRTNCLFFBQVE7RUFBRWtFLE9BQU8sRUFBRWpFO0FBQVcsQ0FBQyxDQUFDO0FBRXhGLElBQUlvRSxJQUFJLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ2hFLElBQUlPLGFBQWEsR0FBRyxJQUFJTCxLQUFLLENBQUNJLElBQUksRUFBRTtFQUFDNUQsSUFBSSxFQUFFLEtBQUs7RUFBRWtCLElBQUksRUFBRXpCLFFBQVE7RUFBRWdFLE9BQU8sRUFBRS9EO0FBQVcsQ0FBQyxDQUFDO0FBRXhGLElBQUlvRSxJQUFJLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ2hFLElBQUlTLGFBQWEsR0FBRyxJQUFJUCxLQUFLLENBQUNNLElBQUksRUFBRTtFQUFDOUQsSUFBSSxFQUFFLEtBQUs7RUFBRWtCLElBQUksRUFBRXZCLFFBQVE7RUFBRThELE9BQU8sRUFBRTdEO0FBQVcsQ0FBQyxDQUFDO0FBRXhGLElBQUlvRSxJQUFJLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ2hFLElBQUlXLGFBQWEsR0FBRyxJQUFJVCxLQUFLLENBQUNRLElBQUksRUFBRTtFQUFDaEUsSUFBSSxFQUFFLEtBQUs7RUFBRWtCLElBQUksRUFBRXJCLFFBQVE7RUFBRTRELE9BQU8sRUFBRTNEO0FBQVcsQ0FBQyxDQUFDO0FBR3hGYixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNpRixFQUFFLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVVDLENBQUMsRUFBRTtFQUNqRGxGLENBQUMsQ0FBQ2MsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pFLEdBQUcsRUFBRW5CLGtIQUFPLENBQUNvQixRQUFRLENBQUMsY0FBYyxFQUFFO01BQUNILElBQUksRUFBRWYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbUYsSUFBSSxDQUFDLE1BQU07SUFBQyxDQUFDLENBQUM7SUFDbkVoRSxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN2QixJQUFJQyxDQUFDLEdBQUdyQixDQUFDLENBQUNzQixTQUFTLENBQUNGLE1BQU0sQ0FBQztNQUMzQmtELFlBQVksQ0FBQ3JDLElBQUksQ0FBQ1IsTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQU07TUFDbkM2QyxZQUFZLENBQUNyQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxHQUFHWixDQUFDLENBQUNZLElBQUk7TUFDM0NxQyxZQUFZLENBQUNyQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csZUFBZSxHQUFHUixDQUFDLENBQUNRLGVBQWU7TUFDakV5QyxZQUFZLENBQUNjLE1BQU0sRUFBRTtJQUN6QjtFQUNKLENBQUMsQ0FBQztFQUVGRixDQUFDLENBQUNHLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnJGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2lGLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVVDLENBQUMsRUFBRTtFQUMxQ2xGLENBQUMsQ0FBQ2MsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pFLEdBQUcsRUFBRW5CLGtIQUFPLENBQUNvQixRQUFRLENBQUMsY0FBYyxFQUFFO01BQUNILElBQUksRUFBRWYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbUYsSUFBSSxDQUFDLE1BQU07SUFBQyxDQUFDLENBQUM7SUFDbkVsRCxJQUFJLEVBQUU7TUFBQ3NCLEtBQUssRUFBRXZELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtNQUFDNEIsV0FBVyxFQUFDeEQsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM0QixHQUFHLEVBQUU7TUFBQzZCLE1BQU0sRUFBQ3pELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzRCLEdBQUc7SUFBRSxDQUFDO0lBQzdHVCxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN2QjtNQUNBa0Msc0JBQXNCLEVBQUU7TUFDeEIvQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO01BQ25CLElBQUlDLENBQUMsR0FBR3JCLENBQUMsQ0FBQ3NCLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDO01BQzNCa0QsWUFBWSxDQUFDckMsSUFBSSxDQUFDUixNQUFNLEdBQUdKLENBQUMsQ0FBQ0ksTUFBTTtNQUNuQzZDLFlBQVksQ0FBQ3JDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxJQUFJLEdBQUdaLENBQUMsQ0FBQ1MsaUJBQWlCLENBQUNHLElBQUk7TUFDN0Q7TUFDQXFDLFlBQVksQ0FBQ3JDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsVUFBVSxHQUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQ3ZFMEMsWUFBWSxDQUFDckMsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLGVBQWUsR0FBR1IsQ0FBQyxDQUFDUyxpQkFBaUIsQ0FBQ0QsZUFBZTtNQUNuRnlDLFlBQVksQ0FBQ2MsTUFBTSxFQUFFO01BSXJCVixhQUFhLENBQUN6QyxJQUFJLENBQUNSLE1BQU0sR0FBR0osQ0FBQyxDQUFDSSxNQUFNO01BQ3BDaUQsYUFBYSxDQUFDekMsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksR0FBR1osQ0FBQyxDQUFDNEIsb0JBQW9CLENBQUNoQixJQUFJO01BQ2pFO01BQ0F5QyxhQUFhLENBQUN6QyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFHLFVBQVUsR0FBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtNQUN4RThDLGFBQWEsQ0FBQ3pDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxlQUFlLEdBQUdSLENBQUMsQ0FBQzRCLG9CQUFvQixDQUFDcEIsZUFBZTtNQUN2RjZDLGFBQWEsQ0FBQ1UsTUFBTSxFQUFFO01BS3RCUixhQUFhLENBQUMzQyxJQUFJLENBQUNSLE1BQU0sR0FBR0osQ0FBQyxDQUFDSSxNQUFNO01BQ3BDbUQsYUFBYSxDQUFDM0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksR0FBR1osQ0FBQyxDQUFDNkIsY0FBYyxDQUFDakIsSUFBSTtNQUMzRDtNQUNBMkMsYUFBYSxDQUFDM0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRyxVQUFVLEdBQUMzQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM0QixHQUFHLEVBQUU7TUFDeEVnRCxhQUFhLENBQUMzQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csZUFBZSxHQUFHUixDQUFDLENBQUM2QixjQUFjLENBQUNyQixlQUFlO01BQ2pGK0MsYUFBYSxDQUFDUSxNQUFNLEVBQUU7TUFLdEJOLGFBQWEsQ0FBQzdDLElBQUksQ0FBQ1IsTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQU07TUFDcENxRCxhQUFhLENBQUM3QyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxHQUFHWixDQUFDLENBQUM4QixvQkFBb0IsQ0FBQ2xCLElBQUk7TUFDakU7TUFDQTZDLGFBQWEsQ0FBQzdDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsVUFBVSxHQUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQ3hFa0QsYUFBYSxDQUFDN0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLGVBQWUsR0FBR1IsQ0FBQyxDQUFDOEIsb0JBQW9CLENBQUN0QixlQUFlO01BQ3ZGaUQsYUFBYSxDQUFDTSxNQUFNLEVBQUU7TUFJdEJKLGFBQWEsQ0FBQy9DLElBQUksQ0FBQ1IsTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQU07TUFDcEN1RCxhQUFhLENBQUMvQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxHQUFHWixDQUFDLENBQUMrQixxQkFBcUIsQ0FBQ25CLElBQUk7TUFDbEU7TUFDQStDLGFBQWEsQ0FBQy9DLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsVUFBVSxHQUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQ3hFb0QsYUFBYSxDQUFDL0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLGVBQWUsR0FBR1IsQ0FBQyxDQUFDK0IscUJBQXFCLENBQUN2QixlQUFlO01BQ3hGbUQsYUFBYSxDQUFDSSxNQUFNLEVBQUU7SUFDMUI7RUFDSixDQUFDLENBQUM7RUFFRkYsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZyRixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNpRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDM0M7RUFDQTtFQUNBO0VBQ0FsRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM0QixHQUFHLENBQUM1QixDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzRCLEdBQUcsRUFBRSxDQUFDLENBQUMwRCxPQUFPLENBQUMsUUFBUSxDQUFDO0VBQ2pGdEYsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM0QixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMwRCxPQUFPLENBQUMsUUFBUSxDQUFDO0VBQ2hEdEYsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDNEIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQ3RGLENBQUMsQ0FBQ2MsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pFLEdBQUcsRUFBRW5CLGtIQUFPLENBQUNvQixRQUFRLENBQUMsY0FBYyxFQUFFO01BQUNILElBQUksRUFBRWYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbUYsSUFBSSxDQUFDLE1BQU07SUFBQyxDQUFDLENBQUM7SUFDbkVsRCxJQUFJLEVBQUU7TUFBQ3NCLEtBQUssRUFBRXZELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtNQUFDNEIsV0FBVyxFQUFDeEQsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM0QixHQUFHLEVBQUU7TUFBQzZCLE1BQU0sRUFBQ3pELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzRCLEdBQUc7SUFBRSxDQUFDO0lBQzdHVCxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN2QjtNQUNBa0Msc0JBQXNCLEVBQUU7TUFDeEIvQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO01BQ25CLElBQUlDLENBQUMsR0FBR3JCLENBQUMsQ0FBQ3NCLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDO01BQzNCa0QsWUFBWSxDQUFDckMsSUFBSSxDQUFDUixNQUFNLEdBQUdKLENBQUMsQ0FBQ0ksTUFBTTtNQUNuQzZDLFlBQVksQ0FBQ3JDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxJQUFJLEdBQUdaLENBQUMsQ0FBQ1MsaUJBQWlCLENBQUNHLElBQUk7TUFDN0Q7TUFDQXFDLFlBQVksQ0FBQ3JDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsVUFBVSxHQUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQ3ZFMEMsWUFBWSxDQUFDckMsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLGVBQWUsR0FBR1IsQ0FBQyxDQUFDUyxpQkFBaUIsQ0FBQ0QsZUFBZTtNQUNuRnlDLFlBQVksQ0FBQ2MsTUFBTSxFQUFFO01BR3JCVixhQUFhLENBQUN6QyxJQUFJLENBQUNSLE1BQU0sR0FBR0osQ0FBQyxDQUFDSSxNQUFNO01BQ3BDaUQsYUFBYSxDQUFDekMsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksR0FBR1osQ0FBQyxDQUFDNEIsb0JBQW9CLENBQUNoQixJQUFJO01BQ2pFO01BQ0F5QyxhQUFhLENBQUN6QyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFHLFVBQVUsR0FBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzRCLEdBQUcsRUFBRTtNQUN4RThDLGFBQWEsQ0FBQ3pDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxlQUFlLEdBQUdSLENBQUMsQ0FBQzRCLG9CQUFvQixDQUFDcEIsZUFBZTtNQUN2RjZDLGFBQWEsQ0FBQ1UsTUFBTSxFQUFFO01BSXRCUixhQUFhLENBQUMzQyxJQUFJLENBQUNSLE1BQU0sR0FBR0osQ0FBQyxDQUFDSSxNQUFNO01BQ3BDbUQsYUFBYSxDQUFDM0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksR0FBR1osQ0FBQyxDQUFDNkIsY0FBYyxDQUFDakIsSUFBSTtNQUMzRDtNQUNBMkMsYUFBYSxDQUFDM0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRyxVQUFVLEdBQUMzQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM0QixHQUFHLEVBQUU7TUFDeEVnRCxhQUFhLENBQUMzQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csZUFBZSxHQUFHUixDQUFDLENBQUM2QixjQUFjLENBQUNyQixlQUFlO01BQ2pGK0MsYUFBYSxDQUFDUSxNQUFNLEVBQUU7TUFJdEJOLGFBQWEsQ0FBQzdDLElBQUksQ0FBQ1IsTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQU07TUFDcENxRCxhQUFhLENBQUM3QyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxHQUFHWixDQUFDLENBQUM4QixvQkFBb0IsQ0FBQ2xCLElBQUk7TUFDakU7TUFDQTZDLGFBQWEsQ0FBQzdDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsVUFBVSxHQUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQ3hFa0QsYUFBYSxDQUFDN0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLGVBQWUsR0FBR1IsQ0FBQyxDQUFDOEIsb0JBQW9CLENBQUN0QixlQUFlO01BQ3ZGaUQsYUFBYSxDQUFDTSxNQUFNLEVBQUU7TUFHdEJKLGFBQWEsQ0FBQy9DLElBQUksQ0FBQ1IsTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQU07TUFDcEN1RCxhQUFhLENBQUMvQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxHQUFHWixDQUFDLENBQUMrQixxQkFBcUIsQ0FBQ25CLElBQUk7TUFDbEU7TUFDQStDLGFBQWEsQ0FBQy9DLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsVUFBVSxHQUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFO01BQ3hFb0QsYUFBYSxDQUFDL0MsSUFBSSxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLGVBQWUsR0FBR1IsQ0FBQyxDQUFDK0IscUJBQXFCLENBQUN2QixlQUFlO01BQ3hGbUQsYUFBYSxDQUFDSSxNQUFNLEVBQUU7SUFDMUI7RUFDSixDQUFDLENBQUM7RUFDRjtBQUNKLENBQUMsQ0FBQzs7QUFDRnBGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2lGLEVBQUUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFVBQVVDLENBQUMsRUFBRTtFQUNoRDtFQUNDO0VBQ0E7RUFDQSxJQUFHbEYsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFDO0lBQzlCNUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDNEIsR0FBRyxDQUFDNUIsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUM0QixHQUFHLEVBQUUsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUVyRjtBQUVKLENBQUMsQ0FBQztBQUVGdEYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDaUYsRUFBRSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDbERsRixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3VGLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDMUN2RixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3RixRQUFRLENBQUMsUUFBUSxDQUFDO0VBQzFCbEIsWUFBWSxDQUFDbUIsT0FBTyxFQUFFO0VBQ3RCbkIsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQ0wsSUFBSSxFQUFFO0lBQUNuRCxJQUFJLEVBQUVmLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ21GLElBQUksQ0FBQyxXQUFXLENBQUM7SUFBRWxELElBQUksRUFBRTdCLE9BQU87SUFBRW9FLE9BQU8sRUFBRW5FO0VBQVUsQ0FBQyxDQUFDO0FBQ3pHLENBQUMsQ0FBQyxDIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5cclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzFcIikuc2VsZWN0MigpO1xyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiVm90cmUgQ2hvaXhcIixcclxuICAgIGFsbG93Q2xlYXI6IHRydWVcclxufSk7XHJcbnZhciBiYXJEYXRhID0gbnVsbDtcclxudmFyIGJhck9wdGlvbnMgPSBudWxsO1xyXG52YXIgYmFyRGF0YTIgPSBudWxsO1xyXG52YXIgYmFyT3B0aW9uczIgPSBudWxsO1xyXG52YXIgYmFyRGF0YTMgPSBudWxsO1xyXG52YXIgYmFyT3B0aW9uczMgPSBudWxsO1xyXG52YXIgYmFyRGF0YTQgPSBudWxsO1xyXG52YXIgYmFyT3B0aW9uczQgPSBudWxsO1xyXG52YXIgYmFyRGF0YTUgPSBudWxsO1xyXG52YXIgYmFyT3B0aW9uczUgPSBudWxsO1xyXG4vL2FsZXJ0KCk7XHJcbiQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICBhc3luYzogZmFsc2UsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3VyZXNfdHlwZScsIHt0eXBlOiAndHRjJ30pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHZhciByID0gJC5wYXJzZUpTT04ocmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGJhckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogci5sYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHIuZXhwcmVzc2lvbl9iZXNvaW4uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyQ29sb3I6IFwicmdiYSgyNiwxNzksMTQ4LDAuNylcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3BvaW50QmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjYsMTc5LDE0OCwxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vcG9pbnRCb3JkZXJDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyUGVyY2VudGFnZTowLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFyVGhpY2tuZXNzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHIuZXhwcmVzc2lvbl9iZXNvaW4uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYmFyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICBzdGVwU2l6ZToxLFxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgYmFyUGVyY2VudGFnZTogMC42XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24odG9vbHRpcEl0ZW0sIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gJ05CUic7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCArPSAnICgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsICs9IE1hdGgucm91bmQodG9vbHRpcEl0ZW0ueUxhYmVsICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsKycpJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGJhckRhdGEyID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IHIubGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByLmNvbW1hbmRlX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAvL2JvcmRlckNvbG9yOiBcInJnYmEoMjYsMTc5LDE0OCwwLjcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9wb2ludEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI2LDE3OSwxNDgsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3BvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhclBlcmNlbnRhZ2U6MC4yLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhclRoaWNrbmVzczogNSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByLmNvbW1hbmRlX2ZvdXJuaXNzZXVyLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGJhck9wdGlvbnMyID0ge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOjEsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBiYXJQZXJjZW50YWdlOiAwLjZcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbih0b29sdGlwSXRlbSwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSAnTkJSJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsICs9ICcgKCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgKz0gTWF0aC5yb3VuZCh0b29sdGlwSXRlbS55TGFiZWwgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwrJyknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgYmFyRGF0YTMgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogci5sYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHIuYmNfZm91cm5pc3NldXIuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyQ29sb3I6IFwicmdiYSgyNiwxNzksMTQ4LDAuNylcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3BvaW50QmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjYsMTc5LDE0OCwxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vcG9pbnRCb3JkZXJDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyUGVyY2VudGFnZTowLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFyVGhpY2tuZXNzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHIuYmNfZm91cm5pc3NldXIuZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYmFyT3B0aW9uczMgPSB7XHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgc3RlcFNpemU6MSxcclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgIGJhclBlcmNlbnRhZ2U6IDAuNlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICdOQlInO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgKz0gJyAoJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCArPSBNYXRoLnJvdW5kKHRvb2x0aXBJdGVtLnlMYWJlbCAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbCsnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGJhckRhdGE0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IHIubGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByLmZhY3R1cmVzX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAvL2JvcmRlckNvbG9yOiBcInJnYmEoMjYsMTc5LDE0OCwwLjcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9wb2ludEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI2LDE3OSwxNDgsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3BvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhclBlcmNlbnRhZ2U6MC4yLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhclRoaWNrbmVzczogNSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByLmZhY3R1cmVzX2ZvdXJuaXNzZXVyLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGJhck9wdGlvbnM0ID0ge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOjEsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBiYXJQZXJjZW50YWdlOiAwLjZcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbih0b29sdGlwSXRlbSwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSAnTkJSJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsICs9ICcgKCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgKz0gTWF0aC5yb3VuZCh0b29sdGlwSXRlbS55TGFiZWwgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwrJyknO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGJhckRhdGE1ID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IHIubGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByLnJlZ2xlbWVudF9mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXJDb2xvcjogXCJyZ2JhKDI2LDE3OSwxNDgsMC43KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNiwxNzksMTQ4LDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9wb2ludEJvcmRlckNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBiYXJQZXJjZW50YWdlOjAuMixcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXJUaGlja25lc3M6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogci5yZWdsZW1lbnRfZm91cm5pc3NldXIuZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYmFyT3B0aW9uczUgPSB7XHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgc3RlcFNpemU6MSxcclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgIGJhclBlcmNlbnRhZ2U6IDAuNlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICdOQlInO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgKz0gJyAoJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCArPSBNYXRoLnJvdW5kKHRvb2x0aXBJdGVtLnlMYWJlbCAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbCsnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHIpXHJcbiAgICB9XHJcbn0pO1xyXG5mdW5jdGlvbiBnZXRBbGxUb3RhbFN0YXRpc3RpcXVlKCl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdmb3Vybmlzc2V1cicpLFxyXG4gICAgICAgIGRhdGE6IHthbm5lZTogJChcIiNmb3JtX2FubmVlXCIpLnZhbCgpLGZvdXJuaXNzZXVyOiQoXCIjZm9ybV9mb3Vybmlzc2V1clwiKS52YWwoKSxzdGF0dXQ6JChcIiNmb3JtX3N0YXR1dFwiKS52YWwoKX0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICQuZWFjaCgkLnBhcnNlSlNPTihyZXN1bHQpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGtleTIsIHZhbHVlMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlMi5uYnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy4nICsgdmFsdWUyLnNvdXNfbW9kdWxlKS5odG1sKHZhbHVlMi5uYnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmdldEFsbFRvdGFsU3RhdGlzdGlxdWUoKTtcclxudmFyIGN0eDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhckNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxudmFyIG1hc3NQb3BDaGFydCA9IG5ldyBDaGFydChjdHgyLCB7dHlwZTogJ2JhcicsIGRhdGE6IGJhckRhdGEsIG9wdGlvbnM6IGJhck9wdGlvbnN9KTtcclxuXHJcbnZhciBjdHgzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXJDaGFydDJcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG52YXIgbWFzc1BvcENoYXJ0MiA9IG5ldyBDaGFydChjdHgzLCB7dHlwZTogJ2JhcicsIGRhdGE6IGJhckRhdGEyLCBvcHRpb25zOiBiYXJPcHRpb25zMn0pO1xyXG5cclxudmFyIGN0eDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhckNoYXJ0M1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbnZhciBtYXNzUG9wQ2hhcnQzID0gbmV3IENoYXJ0KGN0eDQsIHt0eXBlOiAnYmFyJywgZGF0YTogYmFyRGF0YTMsIG9wdGlvbnM6IGJhck9wdGlvbnMzfSk7XHJcblxyXG52YXIgY3R4NSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyQ2hhcnQ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxudmFyIG1hc3NQb3BDaGFydDQgPSBuZXcgQ2hhcnQoY3R4NSwge3R5cGU6ICdiYXInLCBkYXRhOiBiYXJEYXRhNCwgb3B0aW9uczogYmFyT3B0aW9uczR9KTtcclxuXHJcbnZhciBjdHg2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXJDaGFydDVcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG52YXIgbWFzc1BvcENoYXJ0NSA9IG5ldyBDaGFydChjdHg2LCB7dHlwZTogJ2JhcicsIGRhdGE6IGJhckRhdGE1LCBvcHRpb25zOiBiYXJPcHRpb25zNX0pO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLWl0ZW0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXN1cmVzX3R5cGUnLCB7dHlwZTogJCh0aGlzKS5hdHRyKCd0eXBlJyl9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciByID0gJC5wYXJzZUpTT04ocmVzdWx0KTtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmRhdGE7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IHIuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLnNlYXJjaCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3VyZXNfdHlwZScsIHt0eXBlOiAkKHRoaXMpLmF0dHIoJ3R5cGUnKX0pLFxyXG4gICAgICAgIGRhdGE6IHthbm5lZTogJChcIiNmb3JtX2FubmVlXCIpLnZhbCgpLGZvdXJuaXNzZXVyOiQoXCIjZm9ybV9mb3Vybmlzc2V1clwiKS52YWwoKSxzdGF0dXQ6JChcIiNmb3JtX3N0YXR1dFwiKS52YWwoKX0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgICAgIGdldEFsbFRvdGFsU3RhdGlzdGlxdWUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgdmFyIHIgPSAkLnBhcnNlSlNPTihyZXN1bHQpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQuZGF0YS5sYWJlbHMgPSByLmxhYmVscztcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIuZXhwcmVzc2lvbl9iZXNvaW4uZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKTtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5leHByZXNzaW9uX2Jlc29pbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC51cGRhdGUoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQyLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIuY29tbWFuZGVfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQyLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDIuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLmNvbW1hbmRlX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi51cGRhdGUoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMuZGF0YS5sYWJlbHMgPSByLmxhYmVscztcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmJjX2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQzLmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5iY19mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMudXBkYXRlKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gci5mYWN0dXJlc19mb3Vybmlzc2V1ci5kYXRhO1xyXG4gICAgICAgICAgICAvL2xhYmVsOiBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCksXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDQuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKTtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IHIuZmFjdHVyZXNfZm91cm5pc3NldXIuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LnVwZGF0ZSgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDUuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gci5yZWdsZW1lbnRfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDUuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLnJlZ2xlbWVudF9mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDUudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLnJzZWFyY2gnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgLy8kKFwiI2Zvcm1fYW5uZWVcIikudmFsKDEpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAvLyQoJyNmb3JtX2FubmVlIG9wdGlvbjplcSgwKScpLnByb3AoJ3NlbGVjdGVkJyx0cnVlKTtcclxuICAgICQoJyNmb3JtX2FubmVlJykudmFsKCQoJyNmb3JtX2FubmVlIG9wdGlvbjpmaXJzdC1jaGlsZCcpLnZhbCgpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICQoJyNmb3JtX2ZvdXJuaXNzZXVyJykudmFsKFwiXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgJCgnI2Zvcm1fc3RhdHV0JykudmFsKFwiXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXN1cmVzX3R5cGUnLCB7dHlwZTogJCh0aGlzKS5hdHRyKCd0eXBlJyl9KSxcclxuICAgICAgICBkYXRhOiB7YW5uZWU6ICQoXCIjZm9ybV9hbm5lZVwiKS52YWwoKSxmb3Vybmlzc2V1cjokKFwiI2Zvcm1fZm91cm5pc3NldXJcIikudmFsKCksc3RhdHV0OiQoXCIjZm9ybV9zdGF0dXRcIikudmFsKCl9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgICAgICBnZXRBbGxUb3RhbFN0YXRpc3RpcXVlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHZhciByID0gJC5wYXJzZUpTT04ocmVzdWx0KTtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmV4cHJlc3Npb25fYmVzb2luLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IHIuZXhwcmVzc2lvbl9iZXNvaW4uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQudXBkYXRlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQyLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIuY29tbWFuZGVfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQyLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDIuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLmNvbW1hbmRlX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi51cGRhdGUoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQzLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIuYmNfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQzLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLmJjX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My51cGRhdGUoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIuZmFjdHVyZXNfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDQuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLmZhY3R1cmVzX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC51cGRhdGUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDUuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gci5yZWdsZW1lbnRfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDUuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLnJlZ2xlbWVudF9mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDUudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyQoXCIjZm9ybV9zdGF0dXRcIikudmFsKDEpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI2Zvcm1fYW5uZWUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAvLyBhbGVydCgpO1xyXG4gICAgLy8kKFwiI2Zvcm1fYW5uZWVcIikudmFsKDEpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAvLyQoJyNmb3JtX2FubmVlIG9wdGlvbjplcSgwKScpLnByb3AoJ3NlbGVjdGVkJyx0cnVlKTtcclxuICAgIGlmKCQoJyNmb3JtX2FubmVlJykudmFsKCkgPT0gbnVsbCl7XHJcbiAgICAgICAgJCgnI2Zvcm1fYW5uZWUnKS52YWwoJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmZpcnN0LWNoaWxkJykudmFsKCkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcub19ncmFwaF9idXR0b24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnLm9fZ3JhcGhfYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBtYXNzUG9wQ2hhcnQuZGVzdHJveSgpO1xyXG4gICAgbWFzc1BvcENoYXJ0ID0gbmV3IENoYXJ0KGN0eDIsIHt0eXBlOiAkKHRoaXMpLmF0dHIoJ2RhdGEtbW9kZScpLCBkYXRhOiBiYXJEYXRhLCBvcHRpb25zOiBiYXJPcHRpb25zfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=