import React, { Component, Fragment } from "react";
import XiaojiejieItem from './XiaojiejieItem';

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
                    <label htmlFor='jspang'>增加服务</label>
                    <input  id="jspang" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                       
                                   <XiaojiejieItem content={item}
                                   key={item+index}
                                   deleteItem={this.deleteItem.bind(this)}
                                   index={index}/>
                                       
                                    
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
   
}
export default Xiaojiejie