import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Routes from './components/Routes.jsx';

Meteor.startup(() => {
  render(
    <div>{Routes}</div>,
    document.getElementById('root'),
  );
});
