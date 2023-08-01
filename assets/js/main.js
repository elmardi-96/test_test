$('body').on('input', '.decimal_places',  function () {
aleart('test');
    var val = $(this).val();
        var splitVal = val.split('.');
        if (splitVal.length == 2 && splitVal[1].length > 2) {
            // user entered invalid input
            $(this).val(splitVal[0] + '.' + splitVal[1].substr(0, 2));
        }
});