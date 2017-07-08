myApp.controller("homeCtrl", ["$scope", function ($scope) {
 
}]);

myApp.controller("audioCtrl", ["$window", function ($window) {
    var vm = this;
    vm.goLetters = function () {
        $window.location.href = '/SPA/client/views/partials/letter.html';
        //$location.path("/SPA/client/views/partials/letter.html");
    }
}]);

