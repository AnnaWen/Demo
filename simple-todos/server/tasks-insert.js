/**
 * Created by Alvin on 2015/8/25.
 */



    Meteor.startup(function(){
        if (Tasks.find().count() === 0) {
            var tasks = [
                {'name': '跑步',
                    'description': 'Fast just got faster with Nexus S.'},
                {'name': '记得买笔',
                    'description': 'Get it on!'},
                {'name': '把任务完成',
                    'description': 'Leisure suit required. And only fiercest manners.'}
            ];
            for (var i = 0; i < tasks.length; i++)
                Tasks.insert(tasks[i]);
        }
        /*
        if(Users.find().count()===0){
            var users = [
                {'name':'zhang',
                 'passwd':'111'}
            ];
            for (var j = 0; j < users.length; j++)
                Users.insert(users[i]);
        }*/
    });


/*
 if(Posts.find().count() === 0){

 Posts.insert({

 titile:'Introducing Telescope',
 url:'http://sachagreif.com/introducing-telescope/'
 });

 Posts.insert({

 title:'Meteor',
 url:'http://meteor.com'
 });

 Posts.insert({

 title:'The Meteor Book',
 url: 'http://themeteorbook.com'
 });


 }
 */
