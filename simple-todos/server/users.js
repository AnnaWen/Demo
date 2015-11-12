/**
 * Created by Alvin on 2015/9/28.
 */
Meteor.publish("users",function(){

    return Meteor.users.find({},{fields:{emails:1,profile:1}});
});