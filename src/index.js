import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommerceApp from './CommerceApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CommerceApp />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();