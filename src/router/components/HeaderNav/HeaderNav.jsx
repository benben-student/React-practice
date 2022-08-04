import React from "react";
import { NavLink } from 'react-router-dom';
import style from './style.css'
export default class HeaderNav extends React.Component {
    render() {
        return (
            <ul>
                <li><NavLink exact to="/">首页</NavLink></li>
                <li><NavLink to="/cart">购物车</NavLink></li>
                <li><NavLink to="/about">关于</NavLink></li>
            </ul>
        )
    }
}