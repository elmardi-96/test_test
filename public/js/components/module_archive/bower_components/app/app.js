(function(angular) {
    'use strict';
    angular.module('ngJsTreeDemo',['ngJsTree','toaster']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
});
})(angular);