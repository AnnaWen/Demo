/**
 * Created by Alvin on 2015/9/22.
 */
angular.module('demoOne').controller('LeftCtrl', ['$scope','$meteor', '$state',function ($scope,$meteor, $state) {

    $scope.isShowLeft = true;

    if(Meteor.userId()){
        $scope.isShowLeft = !$scope.isShowLeft;
    }


}]);

