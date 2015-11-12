/**
 * Created by Alvin on 2015/9/29.
 */
angular.module('demoOne').controller('ShowDataCtrl',['$scope','myTasksService',
    function ($scope,myTasksService) {
        //update task condition is no or done
        $scope.finished = function(task){
            myTasksService.finishedTask(task);
        };

        $scope.ok = function (task) {
            $scope.tasks.remove(task);
        };

        //judge whether over the endtime
        var _date = new Date().getTime();
        var tTime = new Date($scope.task.dateclock).getTime();
        $scope.isOver = true;

        if(_date > tTime){
            $scope.isOver = false;
        }

}]);


