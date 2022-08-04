import React from "react";
export default class Details extends React.Component {
    render() {
        return (
            <div>详情页:{this.props.match.params.id}</div>
        )
    }
}