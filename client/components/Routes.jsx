import React from 'react';
import {Router, Route, browserHistory, Redirect} from 'react-router';

import MainWrapper from './root/MainWrapper.jsx';

const Profile = () => {
  return <div>welcome to profile page (replace this is in ./client/components/Routes.jsx)</div>
}

const Feed = () => {
  return <div>Feed (replace this is in ./client/components/Routes.jsx)</div>
}

export default <Router history={browserHistory}>
  <Route component={MainWrapper}>
    <Route path="/profile" component={Profile} />
    <Route path="/feed" component={Feed} />
    <Redirect from="/" to="/feed" />
  </Route>
</Router>;
