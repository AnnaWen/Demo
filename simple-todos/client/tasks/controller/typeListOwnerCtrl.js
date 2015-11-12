/**
 * Created by Alvin on 2015/9/29.
 */
angular.module('demoOne').controller('TypeListCtrl', ['$scope','$stateParams','$meteor','$modal','$state','myTasksService',
    function ($scope,$stateParams,$meteor,$modal,$state,myTasksService) {

        $scope.types = $meteor.collection(Types).subscribe("types");
        $scope.tasks = $meteor.collection(Tasks).subscribe("tasks");

        /*delete type */
        $scope.ok = function(type){
            myTasksService.removetasksbyType(type._id);
            $scope.types.remove(type);
            $state.go('inbox');
        };

        /*update type information*/
        $scope.edit = function(type){

            var modalInstance = $modal.open({
                templateUrl : 'client/tasks/views/modal-addtype.ng.html',  //模态窗口
                controller : 'myTypeModal',// 初始化模态范围
                size : 'sm',//大小配置
                backdrop:false,//控制背景是否显示
                resolve:{
                    type: function(){
                        return type;
                    }
                }
            });
        };

        /*judge mouse event to show icon*/
        /**
         * @return {boolean}
         */
        $scope.OnMouseEnter = function(type){
            return type.showIcon = !type.showIcon;
        };

        /*pass type object to page through my own srvice*/
      /*  $scope.findTaskByType = function(type){
            console.log("click my own type");
            myShareService.preForBroadcast(type);
        }*/



}]);