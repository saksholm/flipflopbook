import { Meteor } from 'meteor/meteor';
const settings = Meteor.settings.private.cloudinary;

constructor(){
   cloudinary.config({
     cloud_name: settings.cloud_name,
     api_key: settings.api_key,
     api_secret: settings.api_secret ,
   });
