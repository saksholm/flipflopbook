import { Meteor } from 'meteor/meteor';
import cloudinary from 'cloudinary';

const settings = Meteor.settings.private.cloudinary;

export default class ImageRepository {
constructor(){
  console.log(settings);
   cloudinary.config({
     cloud_name: settings.cloud_name,
     api_key: settings.api_key,
     api_secret: settings.api_secret ,
   });
 }
   uploadImage(base64ImageData) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(base64ImageData, result => {
        if (result.error) {
          console.error(`Upload failed: ${result.error.message}`);
          reject(new Error(result.error.message));
        } else {
          const {secure_url, width, height, bytes} = result;
          resolve({url: secure_url, width, height, bytes});
        }
      });
    });
  }
}
