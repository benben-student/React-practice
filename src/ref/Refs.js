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
        const a = document.getElementById("input")
        console.log(a.value);
    }

    render() {
        return (
            <div>
                <input id="inputs" type="text" value="123" ref={this.myRefs} />
                <input type="button" value="button" onClick={this.getInputValue} />
            </div>
        )
    }
}



class CopyInputVlaue extends React.Component {
    constructor(props) {
        super(props)
        this.myInputValue = React.createRef()
    }
    CopyValue = (text) => {
        // const Url=document.getElementById("input")
        // Url.select()
        // document.execCommand("Copy")
        const inputValue = this.myInputValue.current.value
        const copyInput = document.getElementById("input")
        copyInput.setAttribute("value", inputValue)
        copyInput.select()
        document.execCommand('copy');
    }
    render() {
        return (
            <div>
                <input id="input" value="github//www.github.com" ref={this.myInputValue} />
                <button onClick={this.CopyValue}>点击复制链接</button>
            </div>
        )
    }
}
export default CopyInputVlaue