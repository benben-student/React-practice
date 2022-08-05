import React from "react";
export default  class Find extends React.Component{
    render(){
        return(
            <div>Find一级路由显示页面
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
