import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  const firstName = user.services.facebook.first_name;
  const lastName = user.services.facebook.last_name.substring(0,1);
  const userName = firstName + " " + lastName;
  return Object.assign({}, user, {userName});
});
