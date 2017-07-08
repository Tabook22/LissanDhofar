(function (app) {
    //Create the service
    app.factory("newsServ", newsServ);
    //DI inject dependencies 
    indexServ.$inject = ['$http'];

    //using the service
    function newsServ($http) {
        service = {
            get: "",
            post: ""
        };
        return service;
    }
})(angular.module("LsDhapp"));