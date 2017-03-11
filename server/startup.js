import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
// import {Posts} from './collections';
// import postsMockData from './postsMockData';
import oauthFacebook from './oauth/facebook';

Accounts.onCreateUser((options, user) => {
  const firstName = user.services.facebook.first_name;
  const lastName = user.services.facebook.last_name.substring(0,1);
  const userName = firstName + " " + lastName;
  console.log(Meteor.user);
  return Object.assign({}, user, {userName});
});

Accounts.onLogin((attempt) => {
   //console.log("attempt", attempt.connection);
   console.log("user", Meteor.user());
   const user = Meteor.user();
   if(!user.profile){
     console.log("Creating profile");
     Meteor.users.update({_id:user._id}, {
       $set:{
         profile:{
             firstName:user.services.facebook.first_name,
             lastName:user.services.facebook.last_name,
             username:user.services.facebook.name,
             image:"https://graph.facebook.com/"+user.services.facebook.id+"/picture?type=large",
             facebookID:user.services.facebook.id,
             location:{
               name:"",
               lat:0,
               lng:0
             },
             followee:[],
             followers:[]
         }
       }
     });
   }else{
     console.log("Profile already created");
   }
 });

Meteor.startup(() => {
  oauthFacebook();
  /*
  const totalPosts = Posts.find({}).count();
  if(totalPosts === 0) {
    postsMockData.map((post) => {
      Posts.insert(post);
      return true;
    });

    console.log("Added some posts mockdata to you!");
  }
  */
});
