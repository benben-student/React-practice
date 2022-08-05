import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import New from "../Pages/New/New";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Product from "../Pages/Product/Product";
// import RouterNav from "../Pages/RouterNav/RouterNav";
import Login from "../Pages/Login/Login";
export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Layout path="/" >
                        {/* <RouterNav /> */}
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/new" component={New}></Route>
                            <Route path="/product" component={Product}></Route>
                            <Route path="/user" component={User}></Route>
                        </Switch>
                    </Layout>

                </Switch>
            </Router>
        )
    }
}