
module WP {

    class Post implements ng.IComponentController{

        active: {};

        static $inject = [
            '$stateParams',
            'postService'
        ];
        constructor(
            private $stateParams,
            private postService
        ) {

        }

        $onInit() {
            this.postService.getPost(this.$stateParams.id)
            .then(res => {
                this.active = res.data;
            })
        }

        back() {
            history.back();
        }
    }

    angular.module('wpBlog')
        .component('post', {
            templateUrl: 'components/post/post.html',
            controller: Post,
            controllerAs: 'post',
        });
}