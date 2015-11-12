/**
 * Created by Alvin on 2015/10/10.
 */
Tasks = new Mongo.Collection("tasks");
Tasks.allow({
    insert: function (userId, task) {
        return userId && task.owner === userId;
    },
    update: function (userId, task) {
        return userId && task.owner === userId;
    },
    remove: function (userId, task) {
        return userId && task.owner === userId;
    }
});

Types = new Mongo.Collection("types");
Types.allow({
    insert: function (userId, type) {
        return userId && type.owner === userId;
    },
    update: function (userId, type, fields, modifier) {
        return userId && type.owner === userId;
    },
    remove: function (userId, type) {
        return userId && type.owner === userId;
    }
});


Files = new Mongo.Collection("files");
Types.allow({
    insert: function (userId, file) {
        return userId && file.owner === userId;
    },
    update: function (userId, file, fields, modifier) {
        return userId && file.owner === userId;
    },
    remove: function (userId, file) {
        return userId && file.owner === userId;
    }
});

Meteor.methods({

    addTask: function(task){
       /* var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();*/
        Tasks.insert({
            name: task.name,
            categoryId: task.categoryId,
            category: task.category,
            isstar:task.isstar,
            condition:'no',
            createAt: new Date(),            //current time
            owner: Meteor.userId(),          //_id of logged in user
            username: Meteor.user().username //username of logged in user
        });
    },
    removeTask: function (typeId) {
        Tasks.remove({categoryId : typeId});
    },

    finishedTask : function(task){
        if(task.condition == 'no'){
            Tasks.update(task._id,{
                $set:{condition : 'done'}
            });
        }else{
            Tasks.update(task._id,{
                $set:{condition : 'no'}
            });
        }
    },
    updateTask : function(task){

        Tasks.update(
            {_id:task._id},
            {
                $set:{
                    isstar :task.isstar,
                    endtime : task.endtime,
                    endclock: task.endclock,
                    dateclock: task.dateclock,
                  //  taskChild:task.taskChild,
                    note: task.note
                    /*myFile:task.myFile*/
                    /*  discuss:task.discuss*/

                }}
        );
    }

});