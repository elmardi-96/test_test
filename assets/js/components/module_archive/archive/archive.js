
//require('../bower_components/AngularJS-Toaster/toaster.css');
//require('../bower_components/angular-busy/dist/angular-busy.css');
require('../bower_components/angular/angular.min.js');
require('../bower_components/angular-animate/angular-animate.min.js');
require('../bower_components/angular-busy/dist/angular-busy.js');
require('../bower_components/jstree/dist/jstree.js');
require('../bower_components/AngularJS-Toaster/toaster.js');
require('../bower_components/dist/ngJsTree.js');
require('../bower_components/app/app.js');
require('../bower_components/app/treeCtrl.js');

/*js tree*/
require('./../../../../css/plugins/jsTree/style.min.css');
//require('./../../../../js/plugins/jsTree/jstree.min.js');  


$(document).ready(function(){

    /*$(".jstree").bind("select_node.jstree", function (e, data) {
        //$(this).addClass('jstree-ocl');
        //console.log(e);
        //console.log(data);
        data.instance.toggle_node(data.node);
    });*/
    $(".jstree").jstree("remove",$(".test_disabled").attr('id'));
    $('.closee , .close').click(function(){
        $('#exampleModal').hide();
    })
    
});