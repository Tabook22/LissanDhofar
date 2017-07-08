(function (app) {
    'use strict'
    //create service
    app.factory("imgService", imgService);

    //DI for imgService
    imgService.$inject = ["$http"];

    //create Service
    function imgService($http) {
        var service = {
            getAllImages: getAllImages

        }
        function getAllImages() {
            return $http({
                method: "Get",
                url: "http://localhost:49921/api/uploadFiles/getAllImg",
                dataType: "Json"
            });
        };
        return service;
    }
})(angular.module("LsDhapp"));