(function (app) {
    'use strict'
    //create controller
    app.controller('adminCtrl', adminCtrl);

    //DI for the controller
    adminCtrl.$inject = ["$scope"];

    //use the controller
    function adminCtrl($scope) {
    }
  
})(angular.module("LsDhapp"));