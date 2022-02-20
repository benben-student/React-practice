import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li onClick={this.deleteItem.bind(this,index)} key={index + item}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
    inputChange(e) {
        // console.log(e)
        // console.log(e.target.value)
        // this.state.inputValue=e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem(index){
        let list=this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie