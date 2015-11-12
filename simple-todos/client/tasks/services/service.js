/**
 * Created by Alvin on 2015/10/18.
 */
angular.module('demoOne').factory('myShareService',function($rootScope){

    var shareService = {};
    shareService.type = '';

    shareService.preForBroadcast = function(type){

        this.type = type;
        this.broadCastItem();

    };

    shareService.broadCastItem = function(){
        $rootScope.$broadcast('typeBroadcast');
    };

    return shareService;
})
    .factory('myTasksService',function(){

        var tasksService = {};

        tasksService.addedTask = function(task){
            Meteor.call("addTask",task);
        };

        tasksService.removetasksbyType = function(typeId){
            Meteor.call('removeTask',typeId);
        };

        tasksService.finishedTask = function(task){
            Meteor.call("finishedTask",task);
        };
        tasksService.updateTask = function(task){
            Meteor.call("updateTask",task);
        };


        return tasksService;
    });


/*
 .service('ConfirmService', function($modal) {

    var service = {};
    service.open = function (taskId) {
        var modalConfirmInstance = $modal.open({
            templateUrl: 'client/tasks/views/myDeleteConfirm.ng.html',
            controller: 'ModalConfirmCtrl',
            size:'md',
            resolve: {
                taskId: function () {
                    return taskId;
                }
            }
        });

    };

    return service;
})
 */
