import moment  from 'moment';
/*///////////////////column footer avec un champ de recherche text //////////////////////////// */


//$('#grid thead tr').clone(true).appendTo('#grid thead').addClass('customSearchStyle');
export function CustomSearchText(api, parameter_array, param_array2) {



    let st = api.state.loaded();
    let data = api.data();
//    console.log(api);
//    console.log(st); 

    data.columns(parameter_array).every(function (key, value) {
//        console.log(key); 
//        console.log(value); 
        let placeholder = $('#grid  tfoot tr th').eq(key).text();
        let column = this;
        let search_value = "";
        if (st != null) {
            search_value = st.columns[key].search.search;
        }

  var select = $('<input type="text" value="' + search_value + '" class="scolumn_' + key + ' form-control" placeholder="' + $(data.column(key).header()).text() + '" >')
                .appendTo($(column.footer()).empty())
                .on('keyup', function () {
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    column.search(this.value).draw();
                });
    });
    
    
//        var select = $('<input type="text" value="' + search_value + '" class="scolumn_' + key + ' form-control" placeholder="' + placeholder + '" >')
//                .appendTo($('#grid thead tr:eq(1) th').eq(key).empty())
//                .on('keyup', function () {
//                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
//                    column.search(this.value).draw();
//                });
//    });

}



/*///////////////////column footer avec un champ de recherche date //////////////////////////// */
export function CustomSearchDate(api, parameter_array, param_array2) {
    let st = api.state.loaded();
    let data = api.data();
    
    data.columns(parameter_array).every(function (key, value) {

        let column = this;
        let search_date = '';
        let search_value = '';
        console.log(st);
        if(st == null){
            search_date = "";
        
        }
        else if (st.columns[key].search.search) { 
            console.log(st.columns[key].search.search);
            //var newDt = moment(st.columns[key].search.search,"MM/DD/YY");
            console.log(moment(st.columns[key].search.search, 'DD/MM/YYYY').format('YYYY-MM-DD'));
            search_date = moment(st.columns[key].search.search, 'DD/MM/YYYY').format('YYYY-MM-DD');
//            search_date =new Date(moment(st.columns[key].search.search));
//            console.log(moment(st.columns[key].search.search).format("YYYY-MM-DD").toString()); 
        }
        
       
        var select = $('<input type="date" class="scolumn_' + key + ' form-control" value="' + search_date.toString() + '"/>')
                .appendTo($(column.footer()).empty())
                .on('change', function () {
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    var value_date = '';
                    if (this.value) {
                        value_date = moment(this.value).format('DD/MM/Y');
                    }
                    column.search(value_date).draw();
                });
        
        
        
//        var select = $('<input type="date" class="scolumn_' + key + ' form-control" value="' + search_date + '"/>')
//                .appendTo($('#grid thead tr:eq(1) th').eq(key).empty())
//                .on('change', function () {
//                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
//                    var value_date = '';
//                    if (this.value) {
//                        value_date = moment(this.value).format('DD/MM/Y');
//                    }
//                    column.search(value_date).draw();
//                });
    });
}


/*///////////////////column footer avec un champ de recherche select //////////////////////////// */
export function CustomSearchSelect(api, parameter_array, param_array2) {
    let st = api.state.loaded();
    let data = api.data();
    data.columns(parameter_array).every(function (key, value) {
        
        let column = this;
        let search_value = '';
        if (st != null) {
            search_value = st.columns[key].search.search;
        }
        
          var select = $('<select class="form-control scolumn_' + key + '"><option value="">' + $(data.column(key).header()).text() + '</option></select>')
                .appendTo($(column.footer()).empty())
                .on('change', function () {
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    column.search(val ? '^' + val + '$' : '', true, false).draw();
                });
        var selected = "";
        column.data().unique().sort().each(function (d, j) {
            select.append('<option ' + selected + ' value="' + d + '">' + d + '</option>')
        });
             $(".scolumn_" + key + " option[value='" + search_value.replace('$', '').replace('^', '') + "']").attr("selected", "selected");


//        var select = $('<select class="form-control scolumn_' + key + '"><option value="">' + placeholder + '</option></select>')
//                .appendTo($('#grid thead tr:eq(1) th').eq(key).empty())
//                .on('change', function () {
//                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
//                    column.search(val ? '^' + val + '$' : '', true, false).draw();
//                });
//        var selected = "";
//        column.data().unique().sort().each(function (d, j) {
//            select.append('<option ' + selected + ' value="' + d + '">' + d + '</option>')
//        });
//
//        $(".scolumn_" + key + " option[value='" + search_value.replace('$', '').replace('^', '') + "']").attr("selected", "selected");

    });
}


/*///////////////////column footer avec un champ de recherche checkbox //////////////////////////// */
export function CustomSearchCheckbox(api, parameter_array, param_array2) {
    let st = api.state.loaded();
    let data = api.data();
    data.columns(parameter_array).every(function (key, value) {

        let column = this;
        var select = $('<input type="checkbox"  class="scolumn_' + key + '">')
                .appendTo($(column.footer()).empty())
    });
}






/*///////////////////column footer avec un champ de recherche checkbox //////////////////////////// */
export function CustomSearchMinMax(st, api, data, parameter_array, param_array2) {
    data.columns(parameter_array).every(function (key, value) {



        let column = this;
        let  search_min = '';
        let search_max = '';
        let s_key = key;
        if (st != null) {
            if (localStorage.getItem("min")) {
                search_min = parseInt(localStorage.getItem("min"));
            }

            if (localStorage.getItem("max")) {
                search_max = parseInt(localStorage.getItem("max"));
            }



        }
        //  console.log(localStorage.getItem("min"));

        var select = $('<input type="text" value=""  id="min"  class="scolumn_min_' + key + ' form-control" placeholder="min" >\n\
                            <input type="text" value=""  id="max"  class="scolumn_max_' + key + ' form-control" placeholder="max" >')
                .appendTo($(column.footer()).empty())

//                    $.fn.dataTable.ext.search.push(
//                            function (settings, data, dataIndex) {
//                                var min = parseInt($('.scolumn_min_' + s_key).val(), 10);
//                                var max = parseInt($('.scolumn_max_' + s_key).val(), 10);
//                                var age = parseFloat(data[key]) || 0; // use data for the age column
//                                localStorage.setItem("min", min);
//                                localStorage.setItem("max", max);
//                                if ((isNaN(min) && isNaN(max)) ||
//                                        (isNaN(min) && age <= max) ||
//                                        (min <= age && isNaN(max)) ||
//                                        (min <= age && age <= max))
//                                { 
//                                      console.log(api);
//                                    return true;
//                                }
//                                return false;
//                            }
//                    );

        $.fn.dataTableExt.afnFiltering.push(
                function (oSettings, aData, iDataIndex) {
                    var iColumn = 3;
                    var iMin = document.getElementById('min').value * 1;
                    var iMax = document.getElementById('max').value * 1;

                    var iVersion = aData[iColumn] == "-" ? 0 : aData[iColumn] * 1;
                    if (iMin === "" && iMax === "")
                    {
                        return true;
                    } else if (iMin === "" && iVersion < iMax)
                    {
                        return true;
                    } else if (iMin < iVersion && "" === iMax)
                    {
                        return true;
                    } else if (iMin < iVersion && iVersion < iMax)
                    {
                        return true;
                    }
                    return false;
                }
        );





    });
}


export function CustomSearchSupOrEqual(api, parameter_array, param_array2) {



    let st = api.state.loaded();
    let data = api.data();
//    console.log(api);
    console.log(data); 

    data.columns(parameter_array).every(function (key, value) {
        var that = this;
//        console.log(key); 
//        console.log(value); 
        let placeholder = $('#grid  tfoot tr th').eq(key).text();
       
        let column = this;
        let search_value = "";
        if (st != null) {
            search_value = st.columns[key].search.search;
        }

  var select = $('<input type="text" value="' + search_value + '" class="scolumn_' + key + ' form-control between" placeholder="' + $(data.column(key).header()).text() + ' >=" >')
                .appendTo($(column.footer()).empty())
                .on('keyup', function () {
                   
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    column.search($(this).val()).draw();
                    
                });
    });
    
    
//        var select = $('<input type="text" value="' + search_value + '" class="scolumn_' + key + ' form-control" placeholder="' + placeholder + '" >')
//                .appendTo($('#grid thead tr:eq(1) th').eq(key).empty())
//                .on('keyup', function () {
//                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
//                    column.search(this.value).draw();
//                });
//    });

}

//export {CustomSearchText, CustomSearchDate, CustomSearchSelect };