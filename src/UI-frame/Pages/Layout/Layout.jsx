import React from "react";
import HeaderNav from "../../../UI-frame/components/HeaderNav";
export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <HeaderNav/>
                {this.props.children}</div>
        )
    }
}