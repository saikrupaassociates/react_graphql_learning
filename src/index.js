import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommerceApp from './CommerceApp';

const documentRoot = ReactDOM.createRoot(document.getElementById('commerceapproot'));
documentRoot.render(
  <React.StrictMode>
    <CommerceApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
