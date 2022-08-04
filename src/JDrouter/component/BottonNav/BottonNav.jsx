import React from "react";
import { NavLink } from "react-router-dom";
export default class BottonNav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">首页</NavLink></li>
                    <li><NavLink  to="/find">发现</NavLink></li>
                    <li><NavLink  to="/cart">购物车</NavLink></li>
                    <li><NavLink  to="/order">订单</NavLink></li>
                    <li><NavLink  to="/user">用户</NavLink></li>
                </ul>
            </div>
        )
    }
}