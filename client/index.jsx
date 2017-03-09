import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import MainWrapper from './components/root/MainWrapper.jsx';

Meteor.startup(() => {
  render(
    <MainWrapper />,
    document.getElementById('root'),
  );
});
