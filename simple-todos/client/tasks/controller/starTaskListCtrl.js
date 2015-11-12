/**
 * Created by Alvin on 2015/10/9.
 */
angular.module('demoOne').controller('StarTaskListCtrl', ['$scope', '$stateParams', '$meteor','Itasks','$filter',
    function ($scope, $stateParams, $meteor,Itasks,$filter) {


        $scope.tasks = Itasks;
        $scope.param = $stateParams.param;
        $scope.ownType = $meteor.object(Types, $stateParams.typeId);

        /*$scope.countData = $scope.tasks.length;
        console.log("[[[[[[[[[[[[[[[zhengshi"+$scope.countData);
*/
        $scope.isShow = true;
        $scope.show = function(){
            $scope.isShow = !$scope.isShow;
        };

        //slide the edit page
        $scope.isChange = true;
        $scope.edit = function (task) {

            $scope.$root.$broadcast('edit-event',task);
            $scope.isChange = false;
            //  $scope.isChange =!$scope.isChange;
        };

        //close the edit page
        $scope.close = function () {
            $scope.isChange = true;
        };
        //remove the task object and close the edit page
        $scope.remove = function () {
            $scope.isChange = true;
        };



}]);