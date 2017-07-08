(function (app) {
    'use strict'
    //create controller
    app.controller('uploadFileCtrl', uploadFileCtrl);

    //DI of the controller
    uploadFileCtrl.$inject = ['$scope', 'Upload', '$timeout', 'fileService'];

    //using the controller
    function uploadFileCtrl($scope, Upload, $timeout, fileService) {

        $scope.uploadPic = function (file) {
            file.upload = Upload.upload({
                url: 'http://localhost:49921/api/uploadFiles/UploadFile',
                data: { username: $scope.username, file: file },
            });
            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    DisplayAllConFiles();
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

        }
        //Display all uploaded files
        DisplayAllConFiles();
        function DisplayAllConFiles() {
            var getData = fileService.getAllConFls();
            getData.then(function (pst) {
                $scope.allFiles = pst.data;
            }, function () {
                alert('Error in getting records');
            });

        }
        //Delete upload file
        $scope.delFile = function (fId) {
            var confirm = window.confirm('هل تريد حذف الصورة التي عنوانها ' + '?');
            if (!confirm) {
                return false;
            }
            var getData = fileService.delFiles(fId);
            getData.then(function (res) {
                alert(res.data);
                DisplayAllConFiles();
            }, function () { alert("No file deleted!") });
        }

    }
})(angular.module("LsDhapp"));

