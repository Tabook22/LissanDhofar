(function () {
    'use strict'

    angular.module("LsDhapp", [
        'ui.router',
        'ui.bootstrap',
        'ui.tinymce',
        'ngMessages',
        'angularUtils.directives.dirPagination',
        'thatisuday.dropzone',
        'ui.bootstrap.modal',
        'ngFileUpload'
    ])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

    function config($urlRouterProvider, $stateProvider, $locationProvider) {
        // default route
        $urlRouterProvider.otherwise('/'); //this is the default route
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "/scripts/spa/home/indexView.html",
                controller: "indexCtrl"

            })
            .state('addPost', {
                url: '/addPost',
                templateUrl: '/scripts/spa/Post/postAddView.html',
                controller: 'postAddCtrl'
            })
            .state('uploadFiles', {
                url: '/uploadFiles',
                templateUrl: '/scripts/spa/Post/uploadFiles.html',
                controller: 'uploadFileCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: '/scripts/spa/Admin/adminView.html',
                controller: 'adminCtrl'
            })
            .state('addConf', {
                url: '/addConf',
                templateUrl: '/scripts/spa/UploadFiles/uploadFiles.html',
                controller: 'uploadFileCtrl'
            })
        //.state('page1', {
        //    url: '/page1/:PstId',
        //    templateUrl: '/SPA/client/public/views/partials/page1.html',
        //    controller: 'conDetails',
        //    resolve: {
        //        artDetail: ['$http', '$stateParams', function ($http, $stateParams) {
        //            return $http({
        //                url: "/article/getAllArtGuide",
        //                method: "GET",
        //                params: { PstId: $stateParams.PstId }
        //            }).then(function (res) {
        //                return res.data;
        //            });
        //        }]
        //    }
        //})
        //.state('confDetails', {
        //    url: '/confDetails',
        //    templateUrl: '/SPA/client/public/views/partials/confDetails.html',
        //    controller: 'conferenceCtrl',
        //    resolve: {
        //        confDetail: ['$http', function ($http, ) {
        //            return $http({
        //                url: "/Conference/getConHome",
        //                method: "GET",
        //            }).then(function (res) {
        //                return res.data;
        //            });
        //        }]
        //    }
        //})
        //.state('coninfo', {
        //    url: '/coninfo/:confId',
        //    templateUrl: '/SPA/client/public/views/partials/coninfo.html',
        //    controller: 'conInfoCtrl',
        //    resolve: {
        //        conInfoDetails: ['$http', '$stateParams', function ($http, $stateParams) {
        //            return $http({
        //                url: "/Conference/getConfInfo",
        //                method: "GET",
        //                params: { confId: $stateParams.confId }
        //            }).then(function (res) {
        //                return res.data;
        //            });
        //        }]
        //    }
        //})
        //.state('dic', {
        //    url: '/dic',
        //    templateUrl: '/SPA/client/public/views/partials/dic.html',
        //    controller: 'homeCtrl'
        //})
        //.state('letters', {
        //    url: '/letters',
        //    templateUrl: '/SPA/client/public/views/partials/letter.html',
        //    controller: 'homeCtrl'
        //})
        //.state('contact', {
        //    url: '/contact',
        //    templateUrl: 'home/contact',
        //    controller: 'homeCtrl'
        //})
        //$urlRouterProvider.html5Mode(true);
        //$locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true); //Notice: enable html5Mode for hashtag that appears in ui-router URLs, but we must add also <base href="/"> in html <head>, 
    }

})();