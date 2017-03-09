import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {meteorClientConfig} from 'meteor/apollo';


const apolloClient = new ApolloClient(meteorClientConfig());

import Routes from './components/Routes.jsx';

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
        <div>{Routes}</div>
    </ApolloProvider>,
    document.getElementById('root'),
  );
});
