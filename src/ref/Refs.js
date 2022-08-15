import React, { createRef } from "react";
import ReactDOM from "react-dom";

//创建refs,引用refs

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.myRefs = React.createRef()
    }
    getInputValue = () => {
        console.log(this.myRefs.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" value="123" ref={this.myRefs} />
                <input type="button" value="button" onClick={this.getInputValue} />
            </div>
        )
    }
}

export default CustomTextInput