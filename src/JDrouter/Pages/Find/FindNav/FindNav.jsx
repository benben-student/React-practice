import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'
export default class FindNav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                <li><NavLink exact to="/find">Follow</NavLink></li>
                <li><NavLink to="/find/cookbook">CookBook</NavLink></li>
                <li><NavLink to="/find/community">Community</NavLink></li>
            </ul>
            </div>
        )
    }
}