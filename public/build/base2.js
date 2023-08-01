(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base2"],{

/***/ "./assets/js/components/base2.js":
/*!***************************************!*\
  !*** ./assets/js/components/base2.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

Dropzone.options.dropzoneForm = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    dictDefaultMessage: "<strong>Drop files here or click to upload. </strong></br> (This is just a demo dropzone. Selected files are not actually uploaded.)"
};

$(document).ready(function(){

    var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: true,
        matchBrackets: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code3"), {
        lineNumbers: true,
        matchBrackets: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code4"), {
        lineNumbers: true,
        matchBrackets: true
    });


    $('.custom-file-input').on('change', function() {
        let fileName = $(this).val().split('\\').pop();
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });

});
$(document).ready(function() {


    var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
    var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

    var data1 = [
        { label: "Data 1", data: d1, color: '#17a084'},
        { label: "Data 2", data: d2, color: '#127e68' }
    ];
    $.plot($("#flot-chart1"), data1, {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
            },
            points: {
                width: 0.1,
                show: false
            },
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false,
        }
    });

    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [48, 48, 60, 39, 56, 37, 30]
            },
            {
                label: "Example dataset",
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 40, 51, 36, 25, 40]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

}); */

/***/ })

},[["./assets/js/components/base2.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYXNlMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJmaWxlIjoiYmFzZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuRHJvcHpvbmUub3B0aW9ucy5kcm9wem9uZUZvcm0gPSB7XHJcbiAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxyXG4gICAgbWF4RmlsZXNpemU6IDIsIC8vIE1CXHJcbiAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6IFwiPHN0cm9uZz5Ecm9wIGZpbGVzIGhlcmUgb3IgY2xpY2sgdG8gdXBsb2FkLiA8L3N0cm9uZz48L2JyPiAoVGhpcyBpcyBqdXN0IGEgZGVtbyBkcm9wem9uZS4gU2VsZWN0ZWQgZmlsZXMgYXJlIG5vdCBhY3R1YWxseSB1cGxvYWRlZC4pXCJcclxufTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGVkaXRvcl9vbmUgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGUxXCIpLCB7XHJcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGVkaXRvcl90d28gPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGUyXCIpLCB7XHJcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGVkaXRvcl90d28gPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGUzXCIpLCB7XHJcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGVkaXRvcl90d28gPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGU0XCIpLCB7XHJcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5jdXN0b20tZmlsZS1pbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgZmlsZU5hbWUgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KCdcXFxcJykucG9wKCk7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCcuY3VzdG9tLWZpbGUtbGFiZWwnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLmh0bWwoZmlsZU5hbWUpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgIHZhciBkMSA9IFtbMTI2MjMwNDAwMDAwMCwgNl0sIFsxMjY0OTgyNDAwMDAwLCAzMDU3XSwgWzEyNjc0MDE2MDAwMDAsIDIwNDM0XSwgWzEyNzAwODAwMDAwMDAsIDMxOTgyXSwgWzEyNzI2NzIwMDAwMDAsIDI2NjAyXSwgWzEyNzUzNTA0MDAwMDAsIDI3ODI2XSwgWzEyNzc5NDI0MDAwMDAsIDI0MzAyXSwgWzEyODA2MjA4MDAwMDAsIDI0MjM3XSwgWzEyODMyOTkyMDAwMDAsIDIxMDA0XSwgWzEyODU4OTEyMDAwMDAsIDEyMTQ0XSwgWzEyODg1Njk2MDAwMDAsIDEwNTc3XSwgWzEyOTExNjE2MDAwMDAsIDEwMjk1XV07XHJcbiAgICB2YXIgZDIgPSBbWzEyNjIzMDQwMDAwMDAsIDVdLCBbMTI2NDk4MjQwMDAwMCwgMjAwXSwgWzEyNjc0MDE2MDAwMDAsIDE2MDVdLCBbMTI3MDA4MDAwMDAwMCwgNjEyOV0sIFsxMjcyNjcyMDAwMDAwLCAxMTY0M10sIFsxMjc1MzUwNDAwMDAwLCAxOTA1NV0sIFsxMjc3OTQyNDAwMDAwLCAzMDA2Ml0sIFsxMjgwNjIwODAwMDAwLCAzOTE5N10sIFsxMjgzMjk5MjAwMDAwLCAzNzAwMF0sIFsxMjg1ODkxMjAwMDAwLCAyNzAwMF0sIFsxMjg4NTY5NjAwMDAwLCAyMTAwMF0sIFsxMjkxMTYxNjAwMDAwLCAxNzAwMF1dO1xyXG5cclxuICAgIHZhciBkYXRhMSA9IFtcclxuICAgICAgICB7IGxhYmVsOiBcIkRhdGEgMVwiLCBkYXRhOiBkMSwgY29sb3I6ICcjMTdhMDg0J30sXHJcbiAgICAgICAgeyBsYWJlbDogXCJEYXRhIDJcIiwgZGF0YTogZDIsIGNvbG9yOiAnIzEyN2U2OCcgfVxyXG4gICAgXTtcclxuICAgICQucGxvdCgkKFwiI2Zsb3QtY2hhcnQxXCIpLCBkYXRhMSwge1xyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgIHRpY2tEZWNpbWFsczogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjEsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgbGluZURhdGEgPSB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIl0sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRXhhbXBsZSBkYXRhc2V0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNiwxNzksMTQ4LDAuNSlcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjYsMTc5LDE0OCwwLjcpXCIsXHJcbiAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI2LDE3OSwxNDgsMSlcIixcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzQ4LCA0OCwgNjAsIDM5LCA1NiwgMzcsIDMwXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJFeGFtcGxlIGRhdGFzZXRcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuNSlcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzY1LCA1OSwgNDAsIDUxLCAzNiwgMjUsIDQwXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGluZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZUNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIG5ldyBDaGFydChjdHgsIHt0eXBlOiAnbGluZScsIGRhdGE6IGxpbmVEYXRhLCBvcHRpb25zOmxpbmVPcHRpb25zfSk7XHJcblxyXG59KTsgKi8iXSwic291cmNlUm9vdCI6IiJ9