import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'
export default class RouterNav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/new">New</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/user">User</NavLink></li>
                </ul>
            </div>
        )
    }
}