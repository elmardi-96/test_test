import DataTable from  'datatables.net-bs4';
import DataTableB from  'datatables.net-buttons';
(function(window, document, undefined) {

    var factory = function($, DataTable) {

      "use strict";


      $('.search-toggle').click(function() {
        if ($('.hiddensearch').css('display') == 'none')
          $('.hiddensearch').slideDown();
        else
          $('.hiddensearch').slideUp();
      });

      /* Set the defaults for DataTables initialisation */
      $.extend(true, DataTable.defaults, {
        dom: "<'hiddensearch'f'>" +
          "tr"+
          "<'table-footer'Blip'>",
        renderer: 'material'
      });
      /* Default class modification */
      $.extend(DataTable.ext.classes, {
        sWrapper: "dataTables_wrapper",
        sFilterInput: "form-control input-sm",
        sLengthSelect: "form-control input-sm"
      });

      /* Bootstrap paging button renderer */
      DataTable.ext.renderer.pageButton.material = function(settings, host, idx, buttons, page, pages) {
        var api = new DataTable.Api(settings);
        var classes = settings.oClasses;
        var lang = settings.oLanguage.oPaginate;
        var btnDisplay, btnClass, counter = 0;

        var attach = function(container, buttons) {
          var i, ien, node, button;
          var clickHandler = function(e) {
            e.preventDefault();
            if (!$(e.currentTarget).hasClass('disabled')) {
              api.page(e.data.action).draw(false);
            }
          };

          for (i = 0, ien = buttons.length; i < ien; i++) {
            button = buttons[i];

            if ($.isArray(button)) {
              attach(container, button);
            } else {
              btnDisplay = '';
              btnClass = '';

              switch (button) {

                case 'first':
                  btnDisplay = lang.sFirst;
                  btnClass = button + (page > 0 ?
                    '' : ' disabled');
                  break;

                case 'previous':
                  btnDisplay = '<i class="material-icons">chevron_left</i>';
                  btnClass = button + (page > 0 ?
                    '' : ' disabled');
                  break;

                case 'next':
                  btnDisplay = '<i class="material-icons">chevron_right</i>';
                  btnClass = button + (page < pages - 1 ?
                    '' : ' disabled');
                  break;

                case 'last':
                  btnDisplay = lang.sLast;
                  btnClass = button + (page < pages - 1 ?
                    '' : ' disabled');
                  break;

              }

              if (btnDisplay) {
                node = $('<li>', {
                    'class': classes.sPageButton + ' ' + btnClass,
                    'id': idx === 0 && typeof button === 'string' ?
                      settings.sTableId + '_' + button : null
                  })
                  .append($('<a>', {
                      'href': '#',
                      'aria-controls': settings.sTableId,
                      'data-dt-idx': counter,
                      'tabindex': settings.iTabIndex
                    })
                    .html(btnDisplay)
                  )
                  .appendTo(container);

                settings.oApi._fnBindAction(
                  node, {
                    action: button
                  }, clickHandler
                );

                counter++;
              }
            }
          }
        };

        // IE9 throws an 'unknown error' if document.activeElement is used
        // inside an iframe or frame.
        var activeEl;

        try {
          // Because this approach is destroying and recreating the paging
          // elements, focus is lost on the select button which is bad for
          // accessibility. So we want to restore focus once the draw has
          // completed
          activeEl = $(document.activeElement).data('dt-idx');
        } catch (e) {}

        attach(
          $(host).empty().html('<ul class="material-pagination"/>').children('ul'),
          buttons
        );

        if (activeEl) {
          $(host).find('[data-dt-idx=' + activeEl + ']').focus();
        }
      };

      /*
       * TableTools Bootstrap compatibility
       * Required TableTools 2.1+
       */
      if (DataTable.TableTools) {
        // Set the classes that TableTools uses to something suitable for Bootstrap
        $.extend(true, DataTable.TableTools.classes, {
          "container": "DTTT btn-group",
          "buttons": {
            "normal": "btn btn-default",
            "disabled": "disabled"
          },
          "collection": {
            "container": "DTTT_dropdown dropdown-menu",
            "buttons": {
              "normal": "",
              "disabled": "disabled"
            }
          },
          "print": {
            "info": "DTTT_print_info"
          },
          "select": {
            "row": "active"
          }
        });

        // Have the collection use a material compatible drop down
        $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
          "collection": {
            "container": "ul",
            "button": "li",
            "liner": "a"
          }
        });
      }

    }; // /factory

    // Define as an AMD module if possible
        if (typeof define === 'function' && define.amd) {
          define(['jquery', 'datatables'], factory);
        } else if (typeof exports === 'object') {
          // Node/CommonJS
          factory(require('jquery'), require('datatables.net-bs4'));
        } else if (jQuery) {
          // Otherwise simply initialise as normal, stopping multiple evaluation
          factory(jQuery, jQuery.fn.dataTable);
        }

  })(window, document);



  $(document).ready(function() {
    $('#datatable').dataTable({
      "oLanguage": {
        "sSearch": "",
        "sSearchPlaceholder": "Pesquisar",
        "sInfo": "_START_ -_END_ of _TOTAL_",
        "sLengthMenu": '<span>Rows per page:</span><select class="browser-default">' +
          '<option value="10">10</option>' +
          '<option value="20">20</option>' +
          '<option value="30">30</option>' +
          '<option value="40">40</option>' +
          '<option value="50">50</option>' +
          '<option value="-1">All</option>' +
          '</select></div>'
      },
      bAutoWidth: false,

          buttons: [
               {
                        text: '<span style="color:#4d4d4d; margin-right:15px">Print<span>',
                       extend: 'print',
                       className: '',
                       title: '',
                      //  autoPrint: false,
                       customize: function ( win ) {
                               $(win.document.body)
                                       .css( 'font-size', '10pt' )
                                       .prepend(
                                               '<h4>Title Test</h4>',
                   //  Background table picture in print version is here
                                               '<img src="http://i.imgur.com/w931ov4.png" style="position: fixed;  top: 50%;  left: 50%;  transform: translate(-50%, -50%);" />'	
                                       );

                               $(win.document.body).find( 'table' )
                                       .addClass( 'compact' )
                                       .css( 'font-size', 'inherit',  );
                       }
               },
               {
                   text: '<span style="color:#4d4d4d; margin-right:15px">Excel<span>',
                   extend: 'excelHtml5',
               },
               {
                   text: '<span style="color:#4d4d4d; margin-right:15px">Csv<span>',
                   extend: 'csvHtml5',
               },
               {

                   text: '<span style="color:#4d4d4d; margin-right:15px">Copy<span>',
                   extend: 'copyHtml5',

               },
       ]
      });
  });