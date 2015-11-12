/**
 * Created by Alvin on 2015/9/9.
 */
angular.module('demoOne').controller('TotalTasksCtrl', ['$scope', '$stateParams', '$meteor','myTasksService',
    function ($scope, $stateParams, $meteor,myTasksService) {

        $scope.tasks = $meteor.collection(Tasks).subscribe("tasks");
        $scope.types = $meteor.collection(Types).subscribe("types");
        $scope.param = $stateParams.param;

        /*update task condition is no or done*/
        $scope.finished = function(task){
            myTasksService.finishedTask(task);
        };
        //close the edit page
        $scope.close = function () {
            $scope.isChange = true;
        };

        /*slide and deliver one task object to edit page*/
        $scope.isChange = true;
        $scope.edit = function (task) {
            $scope.$root.$broadcast('edit-event',task);
            $scope.isChange = false;
        };

        /*remove the task object and close the edit page*/
        $scope.remove = function (task) {
            //$scope.tasks.splice($scope.tasks.indexOf(tasks),1);

            $scope.isChange = true;
        };

           /*    //add new task object
            $scope.addTask = function (newTask) {

                var ele = document.getElementById('star');

            if(angular.element(ele).hasClass("changeStar")){

                $scope.tasks.push({
                    name: newTask.name,
                    category: 'shoujian',
                    isstar:'star',
                    condition: 'no',
                    endtime : '',
                    endclock: '',
                    taskChild:'',
                    note: '',
                    createAt: new Date(),            //current time
                    owner: Meteor.userId(),          //_id of logged in user
                    username: Meteor.user().username //username of logged in user
                });

            }

            if(angular.element(ele).hasClass("oldstar")){
                $scope.tasks.push({
                    name: newTask.name,
                    category: 'shoujian',
                    isstar:'no',
                    condition: 'no',
                    endtime : '',
                    endclock: '',
                    taskChild:'',
                    note: '',
                    createAt: new Date(),            //current time
                    owner: Meteor.userId(),          //_id of logged in user
                    username: Meteor.user().username //username of logged in user
                });

            }

            $scope.isStar = true;
        };*/

    }]);