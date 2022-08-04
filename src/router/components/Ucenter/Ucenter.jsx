import React from "react";
import { withRouter } from 'react-router-dom'
import Hello from "../Hello/Hello";
class Ucenter extends React.Component {
    handleClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                个人中心
                <button onClick={this.handleClick}>跳转回首页</button>
                <Hello />
            </div>
        )
    }
}
export default withRouter(Ucenter)