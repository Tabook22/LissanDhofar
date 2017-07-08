(function (app) {
    //Create Service
    app.factory("getDataService", getDataService);

    //Service DI
    getDataService.$inject = ["$http"];

    //use the function
    function getDataService($http) {
        var service = {
            addPosts: addPosts,
            getAllPosts: getAllPosts,
            updatePosts: updatePosts,
            getPostById: getPostById,
            delPost: delPost
        };

        //create new posts
        function addPosts(post) {
            return $http({
                method: "post",
                url: "/post/addNewPost",
                data: JSON.stringify(post),
                dataType: "json"
            });
            //return $http.post('/post/addNewPost', post).then(function (data) {
        };
        //retrive posts
        function getAllPosts () {
            return $http.get('http://localhost:49921/api/post/getPostsLst');
        };

        //update posts
        function updatePosts(Post) {
            return $http({
                method: "post",
                url: "/post/updatePost",
                data: JSON.stringify(Post),
                dataType: "json"
            });
        }

        //Get Post By ID
        function getPostById(PostId) {
            return $http({
                method: "post",
                url: "/post/getPostById",
                params: {
                    id: JSON.stringify(PostId)
                }
            });
        }

        //Delete Post

        function delPost(PostId) {
            return $http({
                url: '/post/delPost',
                params: { id: JSON.stringify(PostId) },
                method: 'POST'
            });
        };
        return service;
    }
})(angular.module("LsDhapp"));