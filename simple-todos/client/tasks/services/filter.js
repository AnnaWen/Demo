/**
 * Created by Alvin on 2015/10/18.
 */
angular.module('demoOne').filter('datefilter',function($filter) {

    return function(input){
        if(input == null){
            return "";
        }
        var _datetime = $filter('date')(new Date(input),'yyyy/MM/dd');
        return _datetime.toUpperCase();
    }
})
    .filter('clockfilter',function($filter) {

        return function(input){
            if(input == null){
                return "";
            }
            var _clocktime = $filter('date')(input,'HH:mm');
            return _clocktime.toUpperCase();
        }
    });