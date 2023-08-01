const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from "../../functions/autoFunctionAjax.js";
import { warning } from 'toastr';

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

$("select").select2()


var table = $("#grid").DataTable({
    ajax: {
      url: Routing.generate("ecriture_comptable_suivi_list"), // json datasource
      type: "get",
    },
    deferRender: true,
    serverSide: true,
    lengthMenu: [
      [10, 15, 25, 50, 100, 200],
      [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 15,
    columns: [
        {orderable: true,  name: 'piece.id' , width: "5%"},
        {orderable: true,  name: 'piece.code', width: "8%"},
        {orderable: true,  name: 'piece.partenaire', width: "8%"},
        {orderable: true,  name: 'piece.dossier', width: "17%"},
        {orderable: true,  name: 'piece.date', width: "8%"},
        {orderable: false,  name: 'piece.observation_operation',searchable:false, width: "17%"},
        {orderable: true,  name: 'piece.brd', width: "8%"},
        {orderable: true,  name: 'piece.montant', width: "8%" ,className: 'td-number pd-fac'},
        {orderable: false,  name: 'piece.precomptabliser',searchable:false,  width: "2%"},
        {orderable: false,  name: 'piece.valide',searchable:false, width: "2%"},
        {orderable: false,  name: 'piece.rejeter',searchable:false, width: "2%"},
        {orderable: true,  name: 'piece.motif', width: "15%"},
        {orderable: false, name: 'piece.id', visible: false, searchable:false},
      
    ],
    stateSave: true,
    bDestroy: true,
    language: {
      url: Routing.generate("datatables_langue"),
      processing: true,
    },
    // fixedHeader: true,
  });
// alert('test');


$("#tableselected").on('change', function() {
    var val = $(this).val();

    table.columns(12).search(val).draw();

})

