(function (app) {
    'use strict'

    //create service
    app.factory("holder", holder);

    //using the service
    function holder() {
        var saveImg = {};
        function set(data) {
            saveImg.post_img = data;//'UploadedFiles/images/' + data;
        }
        function get() {
            return saveImg;
        }
        return {
            set: set,
            get: get
        }
    }

})(angular.module("LsDhapp"));