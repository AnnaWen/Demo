angular.module('demoOne').directive('confirm',['$modal',function($modal) {

    return {
        restrict: 'A',
        scope:true,
        link:function(scope, element, attrs){

            element.bind("click", function() {
               //ConfirmService.open(attrs.confirm);
                var modalConfirmInstance = $modal.open({
                    templateUrl: 'client/tasks/views/myDeleteConfirm.ng.html',
                    size:'md',
                    controller:['$scope','$modalInstance', function($scope,$modalConfirmInstance){

                        //get obj from parent Controller
                        if(scope.task!=null){
                            $scope.obj = scope.task;
                        }else{
                            $scope.obj = scope.type;
                        }

                        $scope.determine = function (obj) {
                            scope.ok(obj);   //run the parent controller method
                            $modalConfirmInstance.close(true);
                        };

                        $scope.cancel = function () {
                            $modalConfirmInstance.dismiss('cancel');
                        };
                    }]

                });

            });
        }
    }
}])
    .directive('inputText',function(){
        return {
            restrict:'EA',
            scope: true,
            templateUrl:'client/tasks/views/input.ng.html',
            controller:"InputCtrl"

        }
    })
    .directive('showData',function(){
        return {
            restrict:'E',
            scope: true,
            templateUrl:'client/tasks/views/showdata.ng.html',
            controller:"ShowDataCtrl"

        }
    })
    .directive('showDoneData',function(){
        return {
            restrict:'E',
            scope: true,
            templateUrl:'client/tasks/views/showdonedata.ng.html',
            controller:"ShowDataCtrl"

        }
    })
  ;
/*
    .directive('showMessage',function(){

        return{
            restrict: 'A',
            replace: true,
            template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
        };
    })

    .directive('myDirective', function() {
        return {
            restrict: 'A',
            template: 'Inside myDirective, isolate scope: {{ myProperty1 }}',
            scope: {}
        };
    })
    .directive('myInheritScopeDirective', function() {
        return {
            restrict: 'A',
            template: 'Inside myDirective, isolate scope: {{ myProperty }}',
            scope: true
        };
    });
*/
