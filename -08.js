import React, { Component } from 'react';
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div>
                <li onClick={this.handleClick}>{this.props.avname}为你服务-{this.props.content}</li>
            </div>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    avname:PropTypes.string
}
XiaojiejieItem.defaultProps={
    avname:'川岛枫一'
}

export default XiaojiejieItem;