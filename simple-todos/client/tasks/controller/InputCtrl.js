/**
 * Created by Alvin on 2015/9/29.
 */
angular.module('demoOne').controller('InputCtrl',['$scope','myTasksService',
    function ($scope,myTasksService) {

        /*judge the palceholder content*/
        $scope.judgeParam = function(){
            if($scope.param == 'star'){
                $scope.inputText = 'Inbox add a star task...';
            }else{
                $scope.inputText = 'add a task...';
            }
        };
        $scope.judgeParam();


        //judge star state
        $scope.isStar = true;
        $scope.showStar = function(){
            $scope.isStar = ! $scope.isStar;
        };

        //add new task object
        $scope.addTask = function (task,ownType) {

            if($scope.param == 'star'){
                task.category = 'outbox';
                task.isstar = 'star';

            }else if($scope.param == 'outbox' || $scope.param == 'whole'){

                task.category = 'outbox';

                if( !$scope.isStar){
                    task.isstar = 'star';
                }else{
                    task.isstar = 'no';
                }

            }else{

                task.category = ownType.name;
                task.categoryId = ownType._id;

                if( !$scope.isStar){
                    task.isstar = 'star';
                }else{
                    task.isstar = 'no';
                }
            }

            myTasksService.addedTask(task);
            $scope.isStar = true;
        };
}]);


