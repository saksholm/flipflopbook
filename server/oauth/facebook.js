import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const settings = Meteor.settings.private.facebook;

const facebook = () => {
  if (!settings) return;
  console.log(settings);
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        loginStyle: "popup",
        appId: settings.appId,
        secret: settings.secret
      }
    }
  );
}

export default facebook;
