const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import { deleteCab } from '../../functions/delete.js';
require('../../plugins/validate/jquery.validate.min.js');
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as Ladda from 'ladda';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as autoFunctionAjax from '../../functions/autoFunctionAjax.js';
import { warning } from 'toastr';

Routing.setRoutingData(routes);

global.$ = $;
const Swal = require('sweetalert2');
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle',
  },
  buttonsStyling: false,
});
let dossier = "";
$('body').on('change', '#dossier',  function () {
    tr_alimentation_list_index.draw();
  });
  
  var tr_alimentation_list_index = $('#signature').DataTable({
    ajax: {
      url: Routing.generate('sigature_list'), // json datasource
    },
  deferRender: true,
  stateSave: false,
  processing: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 20000000000000],
    [10, 15, 25, 50, 100, 'All']
  ],
  order: [[0, 'desc']],
  columns: [
    { searchable: true, width: '3%', targets: [0] },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
  ],
  "ajax": {
      "url": Routing.generate('sigature_list'),
      "data": function (d) {
          return $.extend({}, d, {
              "filter_option": $('#dossier').val().toLowerCase(),
          });
      }
  },
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [
    'columnsToggle',
    {
      text: 'Restaurer',
      className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
      action: function (e, dt, node, config) {
        table.state.clear();
        window.location.reload();
      },
    },
  ],
  language: {
    url: Routing.generate('datatables_langue'),
    processing: true,
  },
  fixedHeader: true,
});

tr_alimentation_list_index.on('init.dt', function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();
  CustomSearchDatatable.CustomSearchText(api, [1, 3, 5, 6], []);
  CustomSearchDatatable.CustomSearchDate(api, [4], []);
  CustomSearchDatatable.CustomSearchSelect(api, [2], []);
});

let demandesachat = [];
$('body').on('click', '.checked', function () {
  const input = $(this);
  // console.log(input.attr('data-id'));
  if (input.is(':checked')) {
    demandesachat.push(input.attr('data-id'));
  } else {
    const index = demandesachat.indexOf(input.attr('data-id'));
    demandesachat.splice(index, 1);
  }
  // console.log(demandesachat);
});

$('body').on('click', '.signature', function (e) {
  // alert('test');
  //  alert($(this).val());
  //$("form").submit();
  // if ($(this).val() == 1) {
  //   var form_name = $('#action_test').attr('name');
  //   var dta = new FormData(action_test);
  //   //var dta = $('#action_test').serialize()
  //   var t = dta.get('_action[]');
  //   //alert( t);
  //   var selector = $(this).attr('class').split(' ')[0];
  //   // console.log(e.type);
  //   // var t=1;
  if (demandesachat.length > 0 && $('#dossier').val() != '') {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Valider cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          let dta = new FormData();
          dta.append('demandesachat', JSON.stringify(demandesachat));
          dta.append('dossier', $('#dossier').val());
          $.ajax({
            type: 'POST',
            url: Routing.generate('check_signature'),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
              //console.log(result);
              if (result.code == 200) {
                demandesachat = [];
                tr_alimentation_list_index.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.code == 500) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.error('Erreur', errorThrown, { timeOut: 4000 });
            },
          });
        }
      });
  } else {
    toastr.warning(
      'Veuillez choisir au moins une ligne et un dossier!!',
      'warning',
      {
        timeOut: 4000,
      }
    );
  }
  // }

  e.preventDefault();
});
