(function (app) {
    //Create controller
    app.controller("modalCtrl", modalCtrl);

    //DI of the controller
    modalCtrl.$inject = ['$scope', '$uibModalInstance', 'items', 'holder'];

    //using the controller
    function modalCtrl($scope, $uibModalInstance, items, holder) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };
        $scope.ok = function () {
            //$uibModalInstance.close($scope.selected.item);
            //$postController.post.post_img = $scope.selected.item

            holder.set($scope.selected.item); // here the image comes from the modal template (which found inside views/modal/myModalContent.html
            $uibModalInstance.close($scope.selected.item);

        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

})(angular.module("LsDhapp"));