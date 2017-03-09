import React from 'react';
import {Router, Route, browserHistory, Redirect} from 'react-router';

import MainWrapper from './root/MainWrapper.jsx';
import Feed from './feed/Feed.jsx';

import Profile from './profile/Profile.jsx';
import People from './people/People.jsx';
/*
const Feed = () => {
  return <div>Feed (replace this is in ./client/components/Routes.jsx)</div>
}

*/
export default <Router history={browserHistory}>
  <Route component={MainWrapper}>
    <Route path="/profile" component={Profile} />
    <Route path="/feed" component={Feed} />
    <Route path="/people" component={People} />
    <Redirect from="/" to="/feed" />
  </Route>
</Router>;
