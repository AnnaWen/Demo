/**
 * Created by Alvin on 2015/9/22.
 */
angular.module('demoOne').controller('MainCtrl', ['$scope','$meteor', '$state',function ($scope,$meteor, $state) {

    $scope.jump = function(){
        $state.go('inbox.tasks',{param:'outbox'});
    };

    if(Meteor.userId()){
        $scope.jump();
    }


 /*   $scope.humans = $meteor.collection(Humans);

    $scope.human = {
        username:'',
        password:''
    };

    $scope.login = function(human){
        LoginService.login(human).then(function (human) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(human);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });

    }*/

}]);

