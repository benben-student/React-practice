import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeaderNav from "../components/HeaderNav/HeaderNav";
import About from '../Pages/About';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Details from "../Pages/Details";
export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <HeaderNav />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/detail/:id" component={Details}></Route>

                </Switch>
            </Router>
        )
    }
}