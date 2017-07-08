(function (app) {
    app.factory("fileService", fileService);

    //DI for fileupload service
    fileService.$inject = ['$http'];

    //Use the service
    function fileService($http) {
        var service = {
            getAllImages: getAllImages,
            getAllConFls: getAllConFls,
            delFiles: delFiles,
            holder: holder

        };

        //Function to get all the images and put them inside the ui modal for selection
        function getAllImages() {
            $http({
                method: "Get",
                url: "/uploadFiles/getAllImg",
                dataType: "Json"
            });
        }

        //function to get all the uploaded conference files and display them on addFileUplad.html page
        function getAllConFls() {

            return $http({
              
                method: "Get",
                url: "http://localhost:49921/api/uploadFiles/getAllFiles",
                dataType: "Json"
            });
        }

        //Function to delete uploaded conference files
        function delFiles(fid) {
            return $http({
                method: "Get",
                url: "http://localhost:49921/api/uploadFiles/delFiles",
                dataType: "Json",
                params: { id: JSON.stringify(fid) }
            });
        }

        //This function is used to hold the selected images from modal and then display those image.
        //facotry is one of the best moethod used to share data between controllers, here the images selected in ModalInstanceCtrl and used in postController
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
        return service;
    }
})(angular.module("LsDhapp"));