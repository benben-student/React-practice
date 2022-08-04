import React from "react";
export default class About extends React.Component {
    clickHandle = () => {
        // this.props.history.push('/')
        this.props.history.replace('/')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandle}>跳转首页</button>
            </div>
        )
    }
}