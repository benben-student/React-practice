import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './TodoList copy/App';
// import App from './routers/App'
// import App from './routers/App'
// import AppRouter from './router/router/AppRouter';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// import AppRouter from './JDrouter/router/AppRouter'

// import AppRouter from './UI-frame/router/AppRouter';
// import "./index.css"

// import Http from './component/Http';
// import './index.css'
// import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import App from './stu-shop-manager/App'
// import { mainRouters } from './stu-shop-manager/routers/index';

// import Propotypes from './Context/Prototypes'
// import ContextDemo from './Context/ContextDemo';
// import SwitchLanguage from './LanguageSwitching/SwitchLanguage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name='world'/> */}

    {/* <AppRouter /> */}

    {/* // <AppRouter /> */}
    {/* <Http/> */}
    {/* <Router>
      <Switch>
        <Route path="/admin" render={routeProps=><App {...routeProps}/>}/>
        {
          mainRouters.map(route => {
            return <Route key={route.path} {...route}></Route>
          })
        }
      <Redirect to="/admin"/>
      <Redirect to="/404"/>
      </Switch>
    </Router> */}
    {/* <SwitchLanguage/> */}
    {/* <ContextDemo/> */}
    {/* <Propotypes/> */}

    <App/>
  </React.StrictMode>
);

