import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './routers/App'
// import App from './routers/App'
// import AppRouter from './router/router/AppRouter';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// import AppRouter from './JDrouter/router/AppRouter'

import AppRouter from './UI-frame/router/AppRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name='world'/> */}

    {/* <AppRouter /> */}

    <AppRouter />
  </React.StrictMode>
);

