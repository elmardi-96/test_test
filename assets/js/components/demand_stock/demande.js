const routes = require('../../../../public/js/fos_js_routes.json');
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';
const Swal = require('sweetalert2');
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle',
  },
  buttonsStyling: false,
});

// Event handler for status select change
$('body').on('change', '#statusSelect', function () {
  table13.ajax.reload();
  $('#select-all').prop('checked', false);
});

// Event handler for Touts_Client change
$('body').on('change', '#Touts_Client', function () {
  $('#select-all').prop('checked', false);
  table13.ajax.reload();
});

// Event handler for postion change
$('body').on('change', '#postion', function () {
  table13.ajax.reload();
  $('#select-all').prop('checked', false);
});

// DataTables configuration
var columnDefs = [
  { orderable: false, width: '5%', searchable: true, targets: 0 },
  { width: '20%' },
  { width: '20%' },
  { width: '20%' },
  { width: '20%' },
  { width: '20%' },
  { width: '20%' },
  { width: '20%' },
  { orderable: false, width: '20%' },
];

var tableShow3 = $('#datatable-show3').DataTable({ paging: false });

var table13 = $('#grid13').DataTable({
  ajax: {
    url: Routing.generate('list_demande_stock_cab'),
    type: 'get',
    data: function (d) {
      d.demande = $('#statusSelect').val();
      d.touttt = $('#Touts_Client').val();
      d.postion = $('#postion').val();
    },
  },
  deferRender: true,
  stateSave: true,
  order: [[0, 'desc']],
  lengthMenu: [
    [10, 15, 25, 50, 100, 200, -1],
    [10, 15, 25, 50, 100, 200, 'All'],
  ],
  pageLength: 15,
  columns: columnDefs,
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [
    'columnsToggle',
    {
      text: 'Restaurer',
      className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
      action: function (e, dt, node, config) {
        table13.state.clear();
        window.location.reload();
      },
    },
  ],
  language: {
    url: Routing.generate('datatables_langue'),
    processing: true,
  },
});

// Event handler for "Select All" checkbox
$('body').on('change', '#select-all', function () {
  if ($('#postion').val() != 5) {
    $(this).prop('checked', false);
    toastr.warning(
      'select livraison cloture pour select tout ... ',
      'warning',
      { timeOut: 4000 }
    );
  } else {
    var checkboxes = $('.action2');
    checkboxes.prop('checked', $(this).is(':checked'));
  }
});

//////////////////////

var table = $('#grid17').DataTable({
  ajax: {
    url: '/stock/demande/list_reception' + location.search, // json datasource
    type: 'get',
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, 'desc']],
  columns: [
    { orderable: true, className: 'pd-liv', width: '3%', name: 'tab.id' },
    {
      orderable: true,
      visible: true,
      name: 'tab.code',
      className: 'td-codeliv pd-liv',
    },
    { orderable: true, className: 'pd-liv', name: 'tab.dateDocAsso' },
    { orderable: true, className: 'pd-liv', name: 'tab.refDocAsso' },
    { orderable: true, className: 'pd-liv', name: 'tab.description' },
    { orderable: true, className: 'pd-liv', name: 'tab.societe' },
    { orderable: true, className: 'td-number pd-liv', name: 'tab.ht' },
    { orderable: true, className: 'td-number pd-liv', name: 'tab.tva' },
    { orderable: true, className: 'td-number pd-liv', name: 'tab.ttc' },
    { orderable: true, className: 'pd-liv', name: 'tab.code_commande' },
    { orderable: true, className: 'pd-liv', name: 'tab.code_facture' },
    {
      orderable: false,
      className: 'fac pd-liv',
      visible: false,
      searchable: false,
    },
    {
      orderable: false,
      className: 'rg pd-liv',
      visible: false,
      searchable: false,
    },
    { orderable: true, className: 'pd-liv', name: 'tab.position_actuel' },
    // { orderable: true, searchable: false, width: "5%" },
    // { "orderable": true, className: "bec" },
    // { "width": "5%", "orderable": true, className: "rg" },
  ],
  columnDefs: [
    {
      searchable: false,
      targets: 14,
    },
  ],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: '<"html5buttons btn-group"f>lTgtip',
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
  scrollX: true,
});

$('.sel2').select2();

var table4 = $('#grid4').DataTable({
  ajax: {
    url: Routing.generate('mouvement_stock_list_normal2') + location.search,
    type: 'get',
  },
  serverSide: true,
  deferRender: true,

  order: [[0, 'desc']],
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  columns: [
    { orderable: true, name: 'mv.id' },

    {
      className: 'mnt-format',
      name: 'mv.source',
    },
    {
      className: 'mnt-format',
      name: 'mv.source_code',
    },

    {
      className: 'mnt-format',
      name: 'dep.titre',
    },

    {
      className: 'mnt-format',
      name: 'ar.titre',
    },
    /*  ,
          {

            className: "mnt-format",
            name: 'ar.code'
          }*/

    {
      className: 'mnt-format',
      name: 'mv.quantite',
    },
    {
      className: 'mnt-format',
      name: 'mv.prixunitaire',
    },
    {
      className: 'mnt-format',
      name: 'mv.tva',
    },
    {
      className: 'mnt-format',
      name: 'mv.remise',
    },

    {
      className: 'mnt-format',
      name: 'mv.prixttc',
    },

    //  {"orderable": true, "width": "200px"},
  ],
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

table4.on('init.dt', function (e, settings) {
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

  // CustomSearchDatatable.CustomSearchSelect(api, [], []);
  // CustomSearchDatatable.CustomSearchDate(api, [], []);
  //  CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5,6,7,8,9,10], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = Routing.generate('u_depot_show', {
    id: $(this).closest('tr').attr('id'),
  });
  window.location.href = url;
});

var grid2 = $('#grid2').DataTable({
  ajax: {
    url:
      Routing.generate('mouvement_stock_encours_list_vente') + location.search,
    type: 'get',
  },
  serverSide: true,
  deferRender: true,

  order: [[0, 'desc']],
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  columns: [
    { orderable: true, name: 'det.id' },

    {
      className: 'mnt-format',
      name: 'mv.cab.dateDocAsso',
    },
    {
      className: 'mnt-format',
      name: 'clt.nom',
    },

    {
      className: 'mnt-format',
      name: 'dv.code',
    },

    {
      className: 'mnt-format',
      name: 'cab.code',
    },
    /*  ,
          {

            className: "mnt-format",
            name: 'ar.code'
          }*/

    {
      className: 'mnt-format',
      name: 'dep.code',
    },
    {
      className: 'mnt-format',
      name: 'ar.code',
    },
    {
      className: 'mnt-format',
      name: 'det.quantite',
    },
    {
      className: 'mnt-format',
      name: 'det.prixunitaire',
    },

    {
      className: 'mnt-format',
      name: 'det.tva',
    },
    {
      className: 'mnt-format',
      name: 'det.tva',
    },
    {
      className: 'mnt-format',
      name: 'det.remise',
    },
    {
      className: 'mnt-format',
      name: 'det.prixTtc',
    },

    //  {"orderable": true, "width": "200px"},
  ],
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

var table3 = $('#grid3').DataTable({
  ajax: {
    url: Routing.generate('mouvement_stock_encours_list_achat'),
    type: 'get',
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  columns: [
    { orderable: false, width: '10px', searchable: true, targets: [0] },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
  ],
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
});
var table6 = $('#grid6').DataTable({
  ajax: {
    url: Routing.generate('list_antenne'),
    type: 'get',
  },
  deferRender: true,
  order: [[3, 'desc']],
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  columns: [
    { orderable: false, width: '10px', searchable: true, targets: [0] },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
  ],
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
});
var table9 = $('#grid9').DataTable({
  ajax: {
    url: Routing.generate('list_antenne'),
    type: 'get',
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[3, 'desc']],
  columns: [
    { orderable: false, width: '10px', searchable: true, targets: [0] },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
  ],
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
});
var table10 = $('#grid10').DataTable({
  ajax: {
    url: Routing.generate('list_antenne'),
    type: 'get',
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  order: [[3, 'desc']],
  pageLength: 15,
  columns: [
    { orderable: false, width: '10px', searchable: true, targets: [0] },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
  ],
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
});
var table11 = $('#grid11').DataTable({
  ajax: {
    url: Routing.generate('list_antenne'),
    type: 'get',
  },
  deferRender: true,
  stateSave: true,
  order: [[3, 'desc']],
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  columns: [
    { orderable: false, width: '10px', searchable: true, targets: [0] },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
  ],
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
});

var table7 = $('#grid7').DataTable({
  ajax: {
    url: Routing.generate('list_antenne_depot'),
    type: 'get',
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[3, 'desc']],
  columns: [
    { orderable: true, name: 'ann.code', width: '5%' },
    { orderable: true, name: 'ann.designation' },
    { orderable: true, name: 'ann.defaut' },
    { orderable: true, name: 'article' },
    { orderable: true, name: 'quantite' },
    { orderable: true, name: 'ar.prix_achat' },
    { orderable: true, name: 'depot.titre' },
  ],
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
});

var table5 = $('#grid5').DataTable({
  ajax: {
    url: Routing.generate('mouvement_stock_encours_list_transformation'),
    type: 'get',
  },
  deferRender: true,
  stateSave: true,
  order: [[3, 'desc']],
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  columns: [
    { orderable: false, width: '10px', searchable: true, targets: [0] },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '100px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
    { orderable: true, width: '10px' },
  ],
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
});

$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});

$('#grid2 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table2.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});

$('#grid3 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table3.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});

$('#grid5 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table5.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});

$('#valid').change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get('_action[]');
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
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
            $.ajax({
              type: 'POST',
              url: Routing.generate(
                'depot_mouvement_stock_valider_vente_multiple'
              ),
              data: dta,
              processData: false,
              contentType: false,
              success: function (result) {
                //console.log(result);
                if (result.code == 200) {
                  table2.ajax.reload();
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  $('#valid').css('display', 'none');
                  $('.action').prop('checked', false);
                  $('#allactions').prop('checked', false);
                } else if (result.code == 403) {
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
        'Veuillez Renseigner une ligne pour effectuer cette opération',
        'warning',
        { timeOut: 4000 }
      );
    }
  }

  e.preventDefault();
});

$('#valid3').change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get('_action[]');
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
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
            $.ajax({
              type: 'POST',
              url: Routing.generate(
                'depot_mouvement_stock_valider_transformation_multiple'
              ),
              data: dta,
              processData: false,
              contentType: false,
              success: function (result) {
                //console.log(result);
                if (result.code == 200) {
                  table2.ajax.reload();
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  $('#valid3').css('display', 'none');
                  $('.action').prop('checked', false);
                  $('#allactions').prop('checked', false);
                } else if (result.code == 403) {
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
        'Veuillez Renseigner une ligne pour effectuer cette opération',
        'warning',
        { timeOut: 4000 }
      );
    }
  }

  e.preventDefault();
});

$('#valid2').change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test2').attr('name');
    var dta = new FormData(action_test2);
    var t = dta.get('_action2[]');
    //  alert(t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);

    if (t) {
      swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: 'animatedSwal flipInX faster',
          },
          position: 'top',
          title: 'Confirmation ?',
          text: 'Voulez vous vraiment Validé cet enregistrement ?',
          type: 'warning',
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider!",
          cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        })
        .then((result) => {
          if (result.value) {
            $.ajax({
              type: 'POST',
              url: Routing.generate(
                'depot_mouvement_stock_valider_achat_multiple'
              ),
              data: dta,
              processData: false,
              contentType: false,
              success: function (result) {
                //console.log(result);
                if (result.code == 200) {
                  table3.ajax.reload();
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                  });
                  $('#valid2').css('display', 'none');
                  $('#allactions2').prop('checked', false);
                } else if (result.code == 403) {
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
        'Veuillez Renseigner une ligne pour effectuer cette opération',
        'warning',
        { timeOut: 4000 }
      );
    }
  }

  e.preventDefault();
});

$('.test').on('submit', '.action_test', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var t = dta.get('_action[]');
  //alert( t);
  var selector = $(this).attr('class').split(' ')[0];
  // console.log(e.type);

  if (t) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Validé cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: Routing.generate(
              'depot_mouvement_stock_valider_vente_multiple'
            ),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
              //console.log(result);
              if (result.code == 200) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.code == 403) {
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
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$('.test2').on('submit', '.action_test2', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var t = dta.get('_action2[]');
  //  alert(t);
  var selector = $(this).attr('class').split(' ')[0];
  // console.log(e.type);

  if (t) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Validé cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: Routing.generate(
              'depot_mouvement_stock_valider_achat_multiple'
            ),
            data: dta,
            processData: false,
            contentType: false,
            success: function (result) {
              //console.log(result);
              if (result.code == 200) {
                table3.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.code == 403) {
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
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$('#allactions').change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $('.action').prop('checked', true);
    $('#valid').css('display', 'block');
  } else {
    $('.action').prop('checked', false);
    $('#valid').css('display', 'none');
  }

  e.preventDefault();
});
$('#allactions2').change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $('.action2').prop('checked', true);
    $('#valid2').css('display', 'block');
  } else {
    $('.action2').prop('checked', false);
    $('#valid2').css('display', 'none');
  }

  e.preventDefault();
});

$('#allactions3').change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $('.action').prop('checked', true);
    $('#valid3').css('display', 'block');
  } else {
    $('.action').prop('checked', false);
    $('#valid3').css('display', 'none');
  }

  e.preventDefault();
});

$('body').on('change', '.action', function () {
  //  alert();
  $('#valid').css('display', 'block');
  //    $(".btn_val").css("display", "block");
  //  console.log($('.action').val());
});
$('body').on('change', '.action', function () {
  //  alert();
  $('#valid3').css('display', 'block');
  //    $(".btn_val").css("display", "block");
  //  console.log($('.action').val());
});

$('body').on('change', '.action2', function () {
  //  alert();
  $('#valid2').css('display', 'block');
  //   $(".btn_val2").css("display", "block");
  //  console.log($('.action').val());
});

$('.new').on('submit', '.form', function (e) {
  //alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // console.log(e.type);
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: Routing.generate('stock_depot_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.errors) {
        l.stop();
        // console.log(result.errors);
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        var url = Routing.generate('u_depot_show', { id: result.data.id });
        window.location.href = url;
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = Routing.generate('stock_depot_edit', { id: id });
    window.location.href = url;
  } else {
    toastr.warning(
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('.grid').on('click', '.valider', function (e) {
  var id = $(this).attr('id');
  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Validé cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: Routing.generate('depot_mouvement_stock_valider_vente', {
              id: id,
            }),
            success: function (result) {
              //console.log(result);
              if (result.code == 200) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning(
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('.grid3').on('click', '.valider', function (e) {
  //$('.valider').on('click',function (e) {

  var id = $(this).attr('id'); //alert(id);
  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Validé cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: Routing.generate('depot_mouvement_stock_valider_achat', {
              id: id,
            }),
            success: function (result) {
              //console.log(result);
              if (result.code == 200) {
                table3.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning(
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var l = Ladda.create(document.activeElement);

  l.start();
  $.ajax({
    type: 'POST',
    url: Routing.generate('stock_depot_update', { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      $('.errors-list').remove();
      if (result.errors) {
        l.stop();
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
  });
  e.preventDefault();
});

$('#_show').click(function (e) {
  var id = table.row('.selected').id();

  if (id) {
    var url = Routing.generate('u_depot_show', { id: id });
    window.location.href = url;
  } else {
    toastr.warning(
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('#_delete').click(function (e) {
  var id = $('#test').data('depotId');
  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment supprimer cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: 'DELETE',
            url: Routing.generate('stock_depot_delete', { id: id }),
            success: function (result) {
              console.log(result);
              if (result.code == 200) {
                // table.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                var url = Routing.generate('stock_depot_index');
                window.location.href = url;
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning(
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('#_archiver').click(function (e) {
  var id = $('#test').data('depotId');
  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: 'animatedSwal flipInX faster',
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Archiver cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: Routing.generate('stock_depot_archiver', { id: id }),
            success: function (result) {
              if (result.code == 200) {
                table.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning(
      'Veuillez Renseigner une ligne pour effectuer cette opération',
      'warning',
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$('body').on('submit', '.stock_depot_trensfert', function (e) {
  //alert();
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: Routing.generate('stock_depot_trensfert', { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.errors) {
        l.stop();
        ShowFormErrors(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        var url = Routing.generate('stock_depot_mouvementstock');
        window.location.href = url;
        //  location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

$('.antenne_source').on('change', () => {
  var data = $('.antenne_source :selected').val();
  $('.santenneyerror').hide();

  // console.log(data);
  // let antenne = $(this).val();
  if (data != '') {
    $.ajax({
      type: 'GET',
      url: Routing.generate('get_antenne_article', { id: data }),
      processData: false,
      contentType: false,
      success: function (result) {
        var data = JSON.parse(result);
        $('.article_disponible').html(data);
        $('.article_disponible select').select2();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      },
    });
  }
});
$('body').on('change', '.article_disponible', function () {
  let tr = $(this).parents('tr');
  let prixVente = $('.article_disponible :selected').attr('data-p');
  // alert(prixVente)
  tr.find("input[name='prixVente']").val(prixVente);
});
$('.ddl_unite').on('change', () => {
  // alert('test');

  var data = $('.Site_Rc :selected').val();
  var antenne = $('.ddl_unite :selected').val();

  $('.santenneyerror').hide();
  if (data != '') {
    $.ajax({
      type: 'GET',
      url: Routing.generate('get_demand_article', {
        id: data,
        antenne_id: antenne,
      }),
      processData: false,
      contentType: false,
      success: function (result) {
        var data = JSON.parse(result);
        $('.article_disponible_Rc').html(data);
        $('.article_disponible_Rc select').select2();
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      },
    });
  }
});

$('.Site_Rc').on('change', () => {
  // alert('najim')
  var data = $('.Site_Rc :selected').val();
  var antenne = 'test';

  $('.santenneyerror').hide();
  if (data != '') {
    $.ajax({
      type: 'GET',
      url: Routing.generate('get_demand_article', {
        id: data,
        antenne_id: antenne,
      }),
      processData: false,
      contentType: false,
      success: function (result) {
        var data = JSON.parse(result);
        $('.article_disponible_Rc').html(data);
        $('.article_disponible_Rc select').select2();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      },
    });
  }
});

let quanttityDisponible;
$('body').on('change', '.select2_demo_antenne', () => {
  // alert('nnnn')
  if ($('.select2_demo_antenne :selected').val() != 'null') {
    // console.log($('.select2_demo_antenne :selected').val());
    table7.columns(0).search($('.select2_demo_antenne :selected').val()).draw();
  } else {
    table7.columns(0).search('').draw();
  }
});

// Initialize an empty array to hold the selected articles
let ArraysOfArticle = [];

// Listen for a click on the "add article" button
$('body').on('click', '.add_article_stock_active', () => {
  // Find all the relevant elements
  var allElements = $('.add_article_stock_active').closest('.parrentArticle');
  var articleId = allElements.find('.article_disponible :selected').val();
  var articleName = allElements
    .find('.article_disponible :selected')
    .attr('data-name');
  var quantityDisponible = allElements
    .find('.article_disponible :selected')
    .attr('data-q');
  var quantitty = allElements.find('.quantitty').val();
  var prixVente = allElements.find('.prix_vente').val();
  var Conditionnement = allElements.find('.Conditionnement').val();
  var conditionnement_livre = allElements.find('.conditionnement_livre').val();
  var observation = allElements.find('.observation').val();
  // console.log(quantityDisponible, quantitty);

  // Validate the input fields
  if (+quantitty < 0) {
    toastr.error("Priere d'entre une valeur plus ou égale 0 ", 'Erreur', {
      timeOut: 4000,
    });
  } else if (articleId === '') {
    toastr.error('choix article !', 'Erreur', {
      timeOut: 4000,
    });
  } else if (quantitty === '') {
    toastr.error('Entrée la quantité !', 'Erreur', {
      timeOut: 4000,
    });
  } else if (prixVente === '') {
    toastr.error('Entrée prix de vente !', 'Erreur', {
      timeOut: 4000,
    });
  } else {
    // Check if the article has already been added
    let passe = true;
    ArraysOfArticle.map((article) => {
      if (article.id == articleId) {
        passe = false;
        toastr.error('Erreur', 'Article déja exist', { timeOut: 4000 });
      }
    });
    if (passe) {
      // If the condition is met, push the new article object to the array
      ArraysOfArticle.push({
        id: articleId,
        name: articleName,
        quantityDisponible: quantityDisponible,
        quantitty: quantitty,
        prixVente: prixVente,
        observation,
        conditionnement_livre,
      });
      // Remove any existing HTML elements with class "appendElement"
      $('.appendElement').remove();
      // Create a new HTML table row element for each article in the array and append them to two different HTML elements
      let html;
      ArraysOfArticle.forEach((article, i) => {
        html += `<tr class="appendElement">     
                    <td> ${i + 1}</td>
                    <td> ${article.id} ${article.name} </td>
                    <td class="quantity_input">
                        ${article.quantitty}
                    </td>
                    <td class="prixVente_input">
                        ${article.prixVente}
                    </td>
                    <td >
                    ${article.observation}
                </td>
                    <td> 
                        <a style="padding: 7px ;" data-id="${
                          article.id
                        }" class="editArticle btn-icon-detail btn btn-white btn-warning btn-outline  btn-xs my-button2 upper waves-effect waves-light"> 
                            <i class=" fa  fa-edit" aria-hidden="true"></i>
                         </a> 
                        <a style="padding: 7px ;" data-id="${
                          article.id
                        }" class="deleteArticle btn-icon-detail btn btn-white btn-danger btn-outline  btn-xs my-button2 upper waves-effect waves-light"> 
                            <i class=" fa  fa-trash" aria-hidden="true"></i>
                         </a> 
                    </td>
                  <tr>`;
      });

      // Append the new HTML elements to two different HTML elements with classes "article_disponible_Rc" and "article_disponible"
      $('.article_disponible_Rc').prepend(html);
      $('.article_disponible').prepend(html);
    }
  }
});

$('.ddl_unite').on('change', () => {
  ArraysOfArticle = [];
});

$('body').on('click', '.deleteArticle', function () {
  var element = $(this).parent().parent();
  // console.log(element);
  var id = $(this).attr('data-id');
  let NewArray = ArraysOfArticle.filter((article) => {
    return article.id != id;
  });
  ArraysOfArticle = NewArray;
  element.remove();
  console.log(ArraysOfArticle);
});
$('body').on('click', '.editArticle', function () {
  var id = $(this).attr('data-id');
  var element = $(this).parent().parent().find('.quantity_input');
  var prixVente_input = $(this).parent().parent().find('.prixVente_input');
  var article = ArraysOfArticle.find((article) => article.id == id);
  element.html(
    `<input type="number" data-id="${article.id}" value="${article.quantitty}" class=" quantity_update form-control form-control-sm decimal_places">`
  );
  prixVente_input.html(
    `<input type="number" data-id="${article.id}" value="${article.prixVente}" class=" prixVente_update form-control form-control-sm decimal_places">`
  );
  console.log(ArraysOfArticle);
});
$('body').on('keyup', '.quantity_update, .prixVente_update', function (e) {
  let tr = $(this).parents('tr');
  var id = tr.find('.quantity_update').attr('data-id');
  var quantitty = tr.find('.quantity_update').val();
  var prixVente = tr.find('.prixVente_update').val();
  var article = ArraysOfArticle.findIndex((article) => article.id == id);
  if (
    ArraysOfArticle[article].quantityDisponible >= +quantitty &&
    +quantitty > 1
  ) {
    ArraysOfArticle[article].quantitty = quantitty;
    ArraysOfArticle[article].prixVente = prixVente;
    tr.find('.quantity_update').parent().html(quantitty);
    tr.find('.prixVente_update').parent().html(prixVente);
  } else {
    $('body .alreadyQuantity').show();
    ArraysOfArticle[article].quantitty = quantitty;
    ArraysOfArticle[article].prixVente = prixVente;
    tr.find('.quantity_update').parent().html(quantitty);
    tr.find('.prixVente_update').parent().html(prixVente);
    toastr.warning(
      "Priere d'entre une valeur moin ou egale " +
        ArraysOfArticle[article].quantityDisponible,
      'warning',
      { timeOut: 4000 }
    );
  }
});

$('#Demand_stock').on('click', function (e) {
  e.preventDefault();
  var l = Ladda.create(document.activeElement);
  let data = new FormData();
  data.append('Site_DE', $('.Site_DE :selected').val());
  data.append('Site_Rc', $('.Site_Rc :selected').val());
  data.append('typeOp', $('#first :selected').val());
  data.append('ddl_unite', $('#ddl_unite :selected').val());
  data.append('Observ', $('#Textarea1').val());
  data.append('articles', JSON.stringify(ArraysOfArticle));
  var Site_Rc = $('.Site_Rc :selected').val();
  var typeOp = $('#first :selected').val();
  var ddl_unite = $('#ddl_unite :selected').val();
  var Observ = $('#Textarea1').val();
  var articles = JSON.stringify(ArraysOfArticle);
  if (
    ArraysOfArticle == '' ||
    Site_Rc == '' ||
    typeOp == '' ||
    ddl_unite == '' ||
    Observ == '' ||
    articles == ''
  ) {
    toastr.error('Veuillez saisir tout les champs !', { timeOut: 4000 });
    return;
  }
  l.start();

  $.ajax({
    type: 'POST',
    url: Routing.generate('New_demande_stock'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      var id = JSON.parse(result);
      console.log(id);
      toastr.success(
        'Votre demande de stock a été bien effectué .',
        'Succées',
        { timeOut: 4000 }
      );
      l.stop();
      window.open('/approvisionement/demandecab/show/' + id, '_self');
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});
$('#Livraison_Complete_demande').on('click', function (e) {
  e.preventDefault();
  var l = Ladda.create(document.activeElement);
  $('#Livraison_Partielle_demande').attr('disabled', true);
  $('.table-detail tbody tr i').remove();
  var trs = $('.table-detail tbody tr ');
  console.log(trs);
  let error = null;
  trs.map((tr) => {
    var quantitySaisie = $(trs[tr]).find('.detInputQtlivre').val();
    var quantityDisponible = $(trs[tr]).find('.quantiteDisponible').text();
    $(trs[tr]).find('.detInputQtlivre').parent();
  });

  var detsQtlivre = [];

  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    det['conditionnement_livre'] = $(inputs[i])
      .parent()
      .parent()
      .find('.conditionnement_livre')
      .find(':selected')
      .text();
    detsQtlivre.push(det);
  }

  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  let data = new FormData();
  console.log(detsQtlivre);
  data.append('id', id);
  data.append('detsQtlivre', json_arr);

  $.ajax({
    type: 'POST',
    url: Routing.generate('Livraison_Complete_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.message === 'success') {
        toastr.success('Demande de stock a a été bien livrée .', 'Succées', {
          timeOut: 4000,
        });
        window.open('/approvisionement/', '_self');

        l.stop();
      } else {
        l.stop();

        var errs = result.errors;

        var trs = $('.table-detail tbody tr');
        errs.map((ers) => {
          trs.map((tr) => {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr])
                .find('.detInputQtlivre')
                .parent()
                .append(
                  '<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>'
                );
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      $('#Livraison_Partielle_demande').attr('disabled', false);
      l.stop();
    },
    cache: false,
    contentType: false,
    processData: false,
  });
});

$('#anuller_demande').on('click', function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  let data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: Routing.generate('anuller_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      toastr.success('Demande de stock a été bien anuller .', 'Succées', {
        timeOut: 4000,
      });
      $('#anuller_demande').remove();
      $('#valider_demande').remove();
      l.stop();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});
$('#prete_demande').on('click', function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  let data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: Routing.generate('prete_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      toastr.success('Bien enregistre.', 'Succées', {
        timeOut: 4000,
      });
      window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});
$('#envoyer_demande').on('click', function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  console.log(id);
  let data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: Routing.generate('stock_Envoyer_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      toastr.success('Demande de stock a été bien envoyée .', 'Succées', {
        timeOut: 4000,
      });
      window.open('/approvisionement/', '_self');
      l.stop();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});

$('#Livraison_Partielle_demande').on('click', function (e) {
  var l = Ladda.create(document.activeElement);
  $('#Livraison_Complete_demande').attr('disabled', true);
  var detsQtlivre = [];
  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();

    detsQtlivre.push(det);
  }

  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  let data = new FormData();
  data.append('id', id);
  data.append('detsQtlivre', json_arr);

  $.ajax({
    type: 'POST',
    url: Routing.generate('Livraison_Partielle_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        window.open('/approvisionement/', '_self');
        l.stop();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        $('#Livraison_Complete_demande').attr('disabled', false);
        l.stop();
      } else if (result.code == 400) {
        l.stop();

        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map((ers) => {
          trs.map((tr) => {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr])
                .find('.detInputQtlivre')
                .parent()
                .append(
                  '<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>'
                );
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      $('#Livraison_Complete_demande').attr('disabled', false);
      l.stop();
    },
  });
});

// start
$('#btn_save_qty_liv').on('click', function (e) {
  // var l = Ladda.create(document.activeElement);

  var detsQtlivre = [];
  var inputs = $('.QUANTITE_LIVREE');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();

    detsQtlivre.push(det);
  }
  // l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  let data = new FormData();
  data.append('id', id);
  data.append('detsQtlivre', json_arr);

  $.ajax({
    type: 'POST',
    url: Routing.generate('LivraisonPararticle'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
        l.stop();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        $('#Livraison_Complete_demande').attr('disabled', false);
        l.stop();
      } else if (result.code == 400) {
        l.stop();

        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map((ers) => {
          trs.map((tr) => {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr])
                .find('.detInputQtlivre')
                .parent()
                .append(
                  '<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>'
                );
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      $('#Livraison_Complete_demande').attr('disabled', false);
      l.stop();
    },
  });
});

// end

$('body').on('click', '.action2', function () {
  $('.list_actions_bloc').toggle($('.action2').filter(':checked').length >= 1);
});

$('body').on('change', '._demandestk_facture', function (e) {
  if ($(this).val() != '') {
    var _array_ids = [];
    $.each($('input[name=_action2]:checked'), function () {
      _array_ids.push($(this).val());
    });

    if (_array_ids) {
      swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: 'animatedSwal flipInX faster',
          },
          position: 'top',
          title: 'Confirmation ?',
          html:
            '<p style="font-size: 18px;">Voulez vous vraiment affectuer cette demande stock autant que demande d\'achat et devis ?</p>' + // added paragraph
            '<input type="text" id="inputValue" class="form-control" placeholder="Enter Object pour devise et demande achat ...">',
          inputPlaceholder: 'Enter value',
          type: 'warning',
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText:
            "<i class='fa fa-check' aria-hidden='true'></i> Oui, Facture ",
          cancelButtonText: "<i class='fa fa-times'></i> No, Annuler ",
        })
        .then((result) => {
          if (result.value) {
            var inputValue = $('#inputValue').val();
            if (!inputValue) {
              toastr.error('Enter a value for Object.', 'Error', {
                timeOut: 4000,
              });
              return;
            } else {
              $('#loading-spinner').show();
              $.ajax({
                type: 'POST',
                url: Routing.generate('stock_facture_receipt'),
                data: { _array_ids, inputValue },
                success: function (result) {
                  if (result.code == 200) {
                    table.ajax.reload();
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                  }
                  table13.ajax.reload(function () {
                    $('#loading-spinner').hide();
                  });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                    jqXHR.responseJSON.message.text,
                    jqXHR.responseJSON.message.title,
                    { timeOut: 4000 }
                  );
                  $('#loading-spinner').hide();
                },
              });
            }
          }
        });
    }
  }
});

$('.ddl_site').on('change', function () {
  let selectedId = $(this).val();
  $.ajax({
    type: 'post',
    url: '/stock/demande/rempselectunite/' + selectedId,
    success: function (data) {
      $('.ddl_unite').html(data);
      console.log(data);
    },
  });
});

$('#chiffrer_demande').on('click', function (e) {
  var l = Ladda.create(document.activeElement);

  var DetsPrix = [];

  var inputs = $('.detInputPrix');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['prix'] = $(inputs[i]).val();

    DetsPrix.push(det);
  }

  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(DetsPrix);
  let data = new FormData();
  data.append('id', id);
  data.append('DetsPrix', json_arr);

  $.ajax({
    type: 'POST',
    url: Routing.generate('stock_chiffrer_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      toastr.success('Demande de stock a été bien chiffrée .', 'Succées', {
        timeOut: 4000,
      });
      window.open('/approvisionement/', '_self');
      l.stop();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});
$('#valider_demande').on('click', function (e) {
  var l = Ladda.create(document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  let data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: Routing.generate('valider_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      toastr.success('Demande de stock a été Validée .', 'Succées', {
        timeOut: 4000,
      });
      window.open('/approvisionement/', '_self');
      l.stop();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});

let idarticle = [];
let iddet = [];

$('body').on('click', '#gridAF1 tbody tr input', function (e) {
  if ($(this).is(':checked')) {
    idarticle.push($(this).attr('id'));
  } else {
    const index = idarticle.indexOf($(this).attr('id'));
    idarticle.splice(index, 1);
  }
  console.log(idarticle);
});

$('body').on('click', '#Affecter_Demand', function (e) {
  e.preventDefault();
  if ($('#antenne').val() == '' || !idarticle) {
    toastr.error('Merci de choisir une ligne ou un antenne .', 'error', {
      timeOut: 4000,
    });
  } else {
    idarticle.forEach((id) => {
      let idtr = '#gridAF1 tbody tr.art' + id;
      $('#gridAF2 tbody').append(
        `<tr id=` +
          id +
          `>
              <td>` +
          $(idtr).find('.art').attr('data-id') +
          `</td>
              <td>` +
          $(idtr).find('.qte').attr('data-id') +
          `</td>
              <td>` +
          $(idtr).find('.prix').attr('data-id') +
          `</td>
              <td id=` +
          $('#antenne').val() +
          `>` +
          $('#antenne option:selected').text() +
          `</td>
            </tr>`
      );
      $(idtr).remove();
      let aa = id + '/' + $('#antenne').val();
      iddet.push(aa);
    });
    idarticle = [];
  }
});

$('body').on('click', '#save_new_demand', function (e) {
  e.preventDefault();
  var l = Ladda.create(document.activeElement);
  l.start();
  if ($.trim($('#gridAF1 tbody').html()) == '') {
    var jsonString = JSON.stringify(iddet);
    var id_cab = $('.dmcabid').attr('id');
    $.ajax({
      type: 'POST',
      url: '/stock/demande/Enregister_Demande/' + id_cab,
      data: jsonString,
      processData: false,
      contentType: false,
      success: function (result) {
        toastr.success(result, 'Succées', { timeOut: 4000 });
        window.location.replace('/approvisionement');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, { timeOut: 4000 });
        l.stop();
      },
    });
  } else {
    toastr.error('Merci de choisir tout lignes  .', 'error', { timeOut: 4000 });
    l.stop();
  }
});

$('body').on('click', '#gridAF3 tbody tr input', function (e) {
  if ($(this).is(':checked')) {
    idarticle.push($(this).attr('id'));
  } else {
    const index = idarticle.indexOf($(this).attr('id'));
    idarticle.splice(index, 1);
  }
});
$('body').on('click', '#Affecter_article_Rc', function (e) {
  e.preventDefault();
  if ($('#antenne').val() == '' || !idarticle) {
    toastr.error(
      'Merci de choisir une ligne et un antenne et un type .',
      'error',
      { timeOut: 4000 }
    );
  } else if ($('#status').val() == '') {
    toastr.error('Merci de CHOIX TYPE .', 'error', { timeOut: 4000 });
  } else {
    idarticle.forEach((id) => {
      const idtr = '#gridAF3 tbody tr.art' + id;
      $('#gridAF4 tbody').append(
        `<tr id=` +
          id +
          `>
            <td>` +
          $(idtr).find('.id').text() +
          `</td>
            <td>` +
          $(idtr).find('.art').text() +
          `</td>
            <td>` +
          $(idtr).find('.qte').attr('data-id') +
          `</td>
            <td>` +
          $(idtr).find('.prix').attr('data-id') +
          `</td>
            <td id=` +
          $('#antenne').val() +
          `>` +
          $('#antenne option:selected').text() +
          `</td>
            <td id=` +
          $('#status').val() +
          `>` +
          $('#status option:selected').text() +
          `</td>
          </tr>`
      );
      let aa =
        $(idtr).find('.art').attr('data-id') +
        '|' +
        $('#antenne').val() +
        '|' +
        $('#status').val() +
        '|' +
        $(idtr).find('.qte').attr('data-id');

      $(idtr).remove();
      iddet.push(aa);
    });
    idarticle = [];
  }
});

$('body').on('click', '#Save_article_to_magasin', function (e) {
  e.preventDefault();
  var l = Ladda.create(document.activeElement);
  l.start();
  if ($.trim($('#gridAF3 tbody').html()) == '') {
    var formData = new FormData();
    var jsonString = JSON.stringify(iddet);
    var idLiv = $('.livId').attr('id');
    var typeMouvement = $('#status').val();
    formData.append('jsonString', jsonString);
    formData.append('typeMouvement', typeMouvement);
    $.ajax({
      type: 'POST',
      url: '/stock/demande/Enregistrer_Article/' + idLiv,
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
        toastr.success(result, 'Succées', { timeOut: 4000 });
        // window.location("/stock/demande/ArticleRc");
        // '/stock/demande/', "_self"
        window.open('/stock/demande/ArticleRc', '_self');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, { timeOut: 4000 });
        l.stop();
      },
    });
  } else {
    'Merci de choisir tout lignes  .', 'error', { timeOut: 4000 };
    l.stop();
  }
});

$('body').on('click', '.class_pop', function (e) {
  var myInputVal = $('.myInput').val();
  // Clean value of myInput
  var cleanVal = $.trim(myInputVal);
  // Set clean value to myInput
  $('.myInput').val(cleanVal);
  // Set focus on myInput
  $('.myInput').focus();
  // Reload the page
  location.reload();
});

$(document).ready(function () {
  $('.myInput').keypress(function (event) {
    let codeart = $(this).val();
    var id = $(this).attr('data-id');
    if (event.keyCode == 13) {
      event.preventDefault();

      $.ajax({
        type: 'GET',
        url: Routing.generate('checkCodeArticle', {
          codeart: codeart,
          demande: id,
        }),
        processData: false,
        contentType: false,
        success: function (result) {
          $('#exampleModal').find('#content_produit').html(result);
          $('#exampleModal').modal('show');
          $('.myInput').val();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          toastr.error(
            'produit que vous scannez introuvable dans la demande Stock .',
            'Erreur',
            { timeOut: 4000 }
          );
          l.stop();
        },
      });
    }
  });
});

///  Start new Modal
$(document).on('click', '#up', function (event) {
  event.preventDefault();
  var inputValue = parseInt($('#incdec input').val()) + 1;
  if (inputValue >= $('#input1').val()) {
    inputValue = $('#input1').val();
  }

  $('#incdec input').val(inputValue);
});

$(document).on('click', '#down', function (event) {
  event.preventDefault();
  var inputValue = parseInt($('#incdec input').val()) - 1;
  // Check if the input value is less than 0, if so, set it to 0
  if (inputValue < 0) {
    inputValue = 0;
  }
  $('#incdec input').val(inputValue);
});

var antenneValues = []; // Declare the antenneValues array outside the click event handler

// Click event handler for checkboxes
$('body').on('click', '.check_antenne', function () {
  // Clear the antenneValues array before adding values
  antenneValues = [];

  // Loop through all the checked checkboxes with class "check_antenne"
  $('.check_antenne:checked').each(function () {
    // Add the value of each checked checkbox to the antenneValues array
    antenneValues.push($(this).val());
  });
  table3.ajax.reload();
});

document.addEventListener('DOMContentLoaded', function () {
  // Set focus on the input field with the specified class and placeholder
  var inputField = document.querySelector('.myInput');
  inputField.focus();
});

// Click event handler for #checkDemande
$('body').on('click', '#checkDemande', function () {
  $('#checkRetour').val('off');
  $(this).val('Demande');
  table3.ajax.reload();
});

// Click event handler for #checkRetour
$('body').on('click', '#checkRetour', function () {
  $('#checkDemande').val('off');
  $(this).val('Retour');
  table3.ajax.reload();
});

var table3 = $('#Stoock_Verifier').DataTable({
  ajax: {
    url: Routing.generate('verifier_stock_cab'),
    type: 'get',
    data: function (d) {
      d.demande = $('#checkDemande').val();
      d.retour = $('#checkRetour').val();
      d.antenneValues = JSON.stringify(antenneValues); // Convert array to JSON string and add to data object
    },
  },
  deferRender: true,
  stateSave: false,
  stateSaveParams: function (settings, data) {
    // Save the search input value
    data.search.value = $('#Stoock_Verifier_filter input').val();
  },

  lengthMenu: [
    [10, 20, 50, 100, 200],
    [10, 20, 50, 100, 200],
  ],
  pageLength: 10,
  columns: [
    { width: '5%', searchable: true, targets: [0] },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
    { width: '20%' },
    // { width: '20%' },

    { orderable: false, width: '20%' },
  ],
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
  initComplete: function (settings, json) {
    $('#Stoock_Verifier_filter input').attr('size', '30').focus();
  },
});

$('#Livraison_Partielle_demande_details').on('click', function (e) {
  var l = Ladda.create(document.activeElement);
  var detsQtlivre = [];
  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();

    detsQtlivre.push(det);
  }

  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  let data = new FormData();
  data.append('id', id);
  data.append('detsQtlivre', json_arr);

  $.ajax({
    type: 'POST',
    url: Routing.generate('Livraison_Partielle_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        window.open('/approvisionement/Verifier/', '_self');
        l.stop();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        l.stop();
      } else if (result.code == 400) {
        l.stop();

        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map((ers) => {
          trs.map((tr) => {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr])
                .find('.detInputQtlivre')
                .parent()
                .append(
                  '<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>'
                );
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
  });
});
$('#Livraison_Complete_demande_details').on('click', function (e) {
  e.preventDefault();
  var l = Ladda.create(document.activeElement);
  $('#Livraison_Partielle_demande').attr('disabled', true);
  $('.table-detail tbody tr i').remove();
  var trs = $('.table-detail tbody tr ');
  let error = null;
  trs.map((tr) => {
    var quantitySaisie = $(trs[tr]).find('.detInputQtlivre').val();
    var quantityDisponible = $(trs[tr]).find('.quantiteDisponible').text();
    $(trs[tr]).find('.detInputQtlivre').parent();
  });

  var detsQtlivre = [];

  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    det['conditionnement_livre'] = $(inputs[i])
      .parent()
      .parent()
      .find('.conditionnement_livre')
      .find(':selected')
      .text();
    detsQtlivre.push(det);
  }

  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  let data = new FormData();
  console.log(detsQtlivre);
  data.append('id', id);
  data.append('detsQtlivre', json_arr);

  $.ajax({
    type: 'POST',
    url: Routing.generate('Livraison_Complete_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.message === 'success') {
        toastr.success('Demande de stock a a été bien livrée .', 'Succées', {
          timeOut: 4000,
        });
        window.open('/approvisionement/Verifier/', '_self');

        l.stop();
      } else {
        l.stop();

        var errs = result.errors;

        var trs = $('.table-detail tbody tr');
        errs.map((ers) => {
          trs.map((tr) => {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr])
                .find('.detInputQtlivre')
                .parent()
                .append(
                  '<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>'
                );
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, { timeOut: 4000 });
      l.stop();
    },
    cache: false,
    contentType: false,
    processData: false,
  });
});
