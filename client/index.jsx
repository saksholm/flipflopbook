import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {meteorClientConfig} from 'meteor/apollo';
import UserAccountContainer from './components/user/User.jsx'
import Routes from './components/Routes.jsx';

const apolloClient = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
      <UserAccountContainer>
        <div>{Routes}</div>
      </UserAccountContainer>
    </ApolloProvider>,
    document.getElementById('root'),
  );
});
