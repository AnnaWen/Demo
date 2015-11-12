/**
 * Created by Alvin on 2015/9/9.
 */
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

angular.module('demoOne').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $urlRouterProvider.otherwise('/inbox');

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('inbox',{

                url:'/inbox',
                views: {
                    'left': {
                        templateUrl: 'client/tasks/views/types-list-owner.ng.html',
                        controller: 'TypeListCtrl'
                    },
                    'content': {
                        templateUrl: 'client/tasks/views/main.ng.html',
                        controller: 'MainCtrl'
                    }
                }

            })
            .state('inbox.findstartypes',{
                url: '/findstartypes/:param',
                views:{
                    'content@':{
                        templateUrl: 'client/tasks/views/xingji.ng.html',
                        controller: 'StarTaskListCtrl',
                        resolve:{
                            Itasks:['$meteor','$stateParams',function($meteor,$stateParams){
                                return $meteor.collection(function(){
                                    return Tasks.find({isstar:$stateParams.param});
                                })
                            }]
                        }
                    }
                }
            })
            .state('inbox.tasks',{
                url: '/tasks/:param',
                views:{
                   'content@':{
                       templateUrl: 'client/tasks/views/xingji.ng.html',
                       controller: 'StarTaskListCtrl',
                       resolve:{
                           Itasks:['$meteor','$stateParams',function($meteor,$stateParams){
                               return $meteor.collection(function(){
                                   return Tasks.find({category:$stateParams.param});
                               })
                           }]
                       }
                   }

                }
            })
            .state('inbox.searchTasks',{
                url: '/searchTasks/:searchText',
                views:{
                    'content@':{
                        templateUrl: 'client/tasks/views/search-result.ng.html',
                        controller: 'SearchResultCtrl'
                    }
                }

            })
            .state('inbox.findtasksbytype',{
                url: '/findtasksBytype/:typeId',
                views:{
                    'content@':{
                        templateUrl: 'client/tasks/views/xingji.ng.html',
                        controller: 'StarTaskListCtrl',
                        resolve:{
                            Itasks:['$meteor','$stateParams',function($meteor,$stateParams){
                                return $meteor.collection(function(){
                                    return Tasks.find({categoryId:$stateParams.typeId});
                                });
                            }]
                        }
                    }
                }

            }).state('inbox.finddonetasks',{
                url: '/finddonetasks',
                views:{
                    'content@':{
                        templateUrl: 'client/tasks/views/donetasks.ng.html',
                        controller: 'TotalTasksCtrl'
                    }
                }

            })
            .state('inbox.totaltasks',{
                url:'/totaltasks/:param',
                views:{
                    'content@':{
                        templateUrl: 'client/tasks/views/total.ng.html',
                        controller: 'TotalTasksCtrl'
                    }
                }
            });



      /*  $stateProvider
            .state('/login',{
                url:'/login',
                templateUrl:'client/tasks/views/login.ng.html',
                controller:'LoginCtrl'
            })
            .state('/register',{
                url:'/register',
                templateUrl:'client/tasks/views/register.ng.html',
                controller:'RegisterCtrl'
            })
            .state('tasks',{
                url: '/tasks',
                templateUrl: 'client/tasks/views/shoujian.ng.html',
                controller: 'TasksListCtrl',
                resolve: {
                    "currentUser": ["$meteor", function($meteor){
                        return $meteor.requireUser();
                    }]
                }
            })
            .state('searchTasks',{
                url: '/searchTasks/:searchText',
                templateUrl: 'client/tasks/views/search-result.ng.html',
                controller: 'SearchResultCtrl'
            })

            .state('findMyTypes',{
                url: '/findmytypes',
                templateUrl: 'client/tasks/views/types-list-owner.ng.html',
                controller: 'MyTypeListCtrl'
            })
            .state('findStarTask',{
                url: '/findstartypes/isStar',
                templateUrl: 'client/tasks/views/xingji.ng.html',
                controller: 'StarTaskListCtrl'
            });
        //如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 tasks
        $urlRouterProvider.otherwise("/tasks");*/
    }]);

