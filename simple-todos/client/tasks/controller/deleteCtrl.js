/**
 * Created by Alvin on 2015/9/29.
 */
angular.module('demoOne').controller('deleteCtrl',['$scope','$modalInstance','scope', function($scope,$modalConfirmInstance,scope){

    //get obj from parent Controller

    $scope.determine = function (obj) {
        scope.ok(obj);   //run the parent controller method
        $modalConfirmInstance.close(true);
    };

    $scope.cancel = function () {
        $modalConfirmInstance.dismiss('cancel');
    };
}]);


