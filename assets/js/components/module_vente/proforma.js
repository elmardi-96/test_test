
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


var table = $("#grid").DataTable({
  ajax: {
    url: Routing.generate("uv_t_proforma_list"), // json datasource
    type: "get",
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [
    { visible: true, name: "code_proforma" },
    { name: "fac.code_proforma" },
    { name: "fac.lieu" },

    { name: "fac.objet" },
    {
    
      name: "fac.code_proforma",
    },
    {
   
      name: "fac.lieu",
    },

    {
      name: "fac.code_proforma",
    },
            { orderable: true, name: 'fac.code_proforma' },

    //prixHt
  ],
  
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: '<"html5buttons btn-group"f>lTgtip',
  buttons: [],
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
  fixedHeader: true,
});
