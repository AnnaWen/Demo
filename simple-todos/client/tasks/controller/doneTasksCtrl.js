/**
 * Created by Alvin on 2015/9/9.
 */
angular.module('demoOne').controller('DoneTasksCtrl', ['$scope', '$stateParams', '$meteor','removetasksService',
    function ($scope, $stateParams, $meteor,removetasksService) {

        $scope.tasks = $meteor.collection(Tasks).subscribe("tasks");
        $scope.types = $meteor.collection(Types).subscribe("types");

        /*update task condition is no or done*/
        $scope.finished = function(task){
            removetasksService.finishedTask(task);
        };

        //close the edit page
        $scope.close = function () {
            $scope.isChange = true;
        };
        /*judge star state*/
        $scope.isStar = true;
        $scope.showStar = function(){
            $scope.isStar = ! $scope.isStar;
        };

        /*slide and deliver one task object to edit page*/
        $scope.isChange = true;
        $scope.edit = function (task) {
            $scope.$root.$broadcast('edit-event',task);
            $scope.isChange = false;
        };

        /*remove the task object and close the edit page*/
        $scope.remove = function (task) {
            $scope.isChange = true;
        };


    }]);