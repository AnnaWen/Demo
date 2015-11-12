/**
 * Created by Alvin on 2015/10/7.
 */
angular.module('demoOne').controller('myTypeModal',['$scope','$meteor','$modalInstance','type',
    function ($scope,$meteor,$modalInstance,type) {

        $scope.types = $meteor.collection(Types).subscribe("types");
        $scope.newType = type;


        $scope.ok = function(newType){      //add owner's folder type

            if(newType._id != null ){

                Types.update(
                    {_id:newType._id},
                    {
                        $set: {name:newType.name}
                    }
                );
            }else{

                $scope.types.save( {
                        name: newType.name,
                        showIcon: false,
                        createAt: new Date(),
                        owner: Meteor.userId(),          //_id of logged in user
                        username: Meteor.user().username //username of logged in user

                    }
                );
            }
            $modalInstance.close(); //关闭并返回当前选项
        };


        $scope.cancel = function(){
            $modalInstance.dismiss('cancel'); // 退出
        }

}]);
