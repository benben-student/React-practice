import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './my-order/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='world'/>
  </React.StrictMode>
);

