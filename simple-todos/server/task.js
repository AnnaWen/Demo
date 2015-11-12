
/**
 * Created by Alvin on 2015/9/28.
 */
Meteor.publish("tasks",function(){
   return Tasks.find({

       //query terms,just like public things
       $or:[
           { $and:[
               {owner:this.userId},
               {owner:{$exists:true}}
           ]}
       ]
   });
});

Meteor.publish("types",function(){
    return Types.find({
        //query terms,just like public things
        $or:[
            { $and:[
                {owner:this.userId},
                {owner:{$exists:true}}
            ]}
        ]
    });

});
Meteor.publish("files",function(){
    return Files.find({
        $or:[
            { $and:[
                {owner:this.userId},
                {owner:{$exists:true}}
            ]}
        ]
    });

});