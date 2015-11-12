/**
 * Created by Alvin on 2015/9/29.
 */
angular.module('demoOne').controller('SearchResultCtrl',['$scope','$stateParams','$meteor','myTasksService',
    function ($scope,$stateParams,$meteor,myTasksService) {

      //  $scope.tasks = Itasks;
        $scope.tasks = $meteor.collection(Tasks).subscribe("tasks");
        $scope.searchText = $stateParams.searchText;

        //slide anf deliver one task object to edit page
        $scope.isChange = true;
        $scope.edit = function (task) {

            $scope.$root.$broadcast('edit-event',task);
            $scope.isChange = false;
        };
        //close the edit page
        $scope.close = function () {
            $scope.isChange = true;
        };
        //remove the task object and close the edit page
        $scope.remove = function () {
            $scope.isChange = true;
        };
        $scope.ok = function (task) {
            $scope.tasks.remove(task);
        };

        $scope.finished = function(task){
            myTasksService.finishedTask(task);
        };

}]);


