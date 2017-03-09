import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Routes from './components/Routes.jsx';
import UserAccountContainer from './components/user/User.jsx'
Meteor.startup(() => {
  render(
    <UserAccountContainer>
      <div>{Routes}</div>
    </UserAccountContainer>,
    document.getElementById('root'),
  );
});
