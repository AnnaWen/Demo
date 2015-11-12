/**
 * Created by Alvin on 2015/9/22.
 */
angular.module('demoOne').controller('RegisterCtrl', ['$scope','$meteor', function ($scope,$meteor) {

    console.log("2222");

    //创建一个用户对象
    $scope.human = {
        username:'',
        email:'',
        password:''
    };

    //通过对此属性判断 可知道表单输入是否符合
    $scope.$submitted = false;

    $scope.submitForm = function() {
        if ($scope.myForm.$valid) {
            $scope.humans.save({
                username: $scope.human.username,
                email: $scope.human.email,
                password: $scope.human.password
            });

            //将输入框中内容清空
            $scope.human.username='';
            $scope.human.email='';
            $scope.human.password = '';
         //   alert('验证成功');
        }else{
            $scope.myForm.$submitted = true;
        }
    };

    $scope.humans = $meteor.collection(Humans);

    $scope.remove = function(human){
        $scope.humans.remove(human);
    }
}]);