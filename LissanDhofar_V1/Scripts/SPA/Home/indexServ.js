(function (app) {
    //Create the service
    app.factory("indexServ", indexServ);
    //DI inject dependencies 
    indexServ.$inject = ['$http'];

    //using the service
    function indexServ($http) {
        service = {
            get: "",
            post: ""
        };
        return service;
    }
})(angular.module("LsDhapp"));