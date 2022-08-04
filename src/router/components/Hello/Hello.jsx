import React from "react";
import { withRouter } from 'react-router-dom'
class Hello extends React.Component {
    handleClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>hello
                <button onClick={this.handleClick}>点击跳转页面</button>
            </div>
        )
    }
}
export default withRouter(Hello)