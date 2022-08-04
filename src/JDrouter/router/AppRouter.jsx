import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from "../Pages/Cart/Cart";
import Find from "../Pages/Find/Find";
import Order from "../Pages/Order/Order";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";
import BottonNav from "../component/BottonNav/BottonNav";
export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <BottonNav />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/find" component={Find}></Route>
                    <Route path="/order" component={Order}></Route>
                    <Route path="/user" component={User}></Route>
                </Switch>
            </Router>
        )
    }
}