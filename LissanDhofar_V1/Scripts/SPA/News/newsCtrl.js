(function (app) {
    'use strict'
    //Create Controller
    app.controller("newsCtrl", newsCtrl);

    //DI injection
    newsCtrl.$inject = ['$scope','newsServ'];
 
    //Controller
 function newsCtrl($scope, newsServ) {
    
        $scope.title = "قائمة الأخبار";
       
    }

})(angular.module("LsDhapp"));