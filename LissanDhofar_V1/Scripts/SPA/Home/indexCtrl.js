(function (app) {
    'use strict'
    //Create Controller
    app.controller("indexCtrl", indexCtrl);

    //DI injection
    indexCtrl.$inject = ['$scope','indexServ'];
 
    //Controller
 function indexCtrl($scope, indexServ) {
    
        $scope.title = "Home Web Site";
       
    }

})(angular.module("LsDhapp"));