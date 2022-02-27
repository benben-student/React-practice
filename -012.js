import React, { Component, Fragment } from "react";
import XiaojiejieItem from './XiaojiejieItem';

class Xiaojiejie extends Component {
    // 
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }  
    componentWillMount(){
        console.log('componentWillMount-------组件将要挂载在页面')
    }
    componentDidMount(){
        console.log('componentDidMount--------组件挂载完成')
    }
    render() {
        console.log('render--------组件正在挂载中')
        return (
            <Fragment>
                <div>
                    <label htmlFor='jspang'>增加服务</label>
                    <input  
                    id="jspang" 
                    value={this.state.inputValue}
                     onChange={this.inputChange.bind(this)} 
                     ref={(input)=>{this.input=input}}
                     />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul ref={(ul)=>{this.ul=ul}}>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                        <XiaojiejieItem
                                        key={item+index}
                                         content={item}
                                         index={index}
                                         deleteItem={this.deleteItem.bind(this)}/>
                                    // {/*
                                    //     <li 
                                 
                                    // className="input"
                                    // onClick={this.deleteItem.bind(this, index)} 
                                    // dangerouslySetInnerHTML={{__html:item}}
                                    // key={index + item}>
                                    // </li>
                                    // */}
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
    inputChange() {
        // console.log(e)
        // console.log(e.target.value)
        // this.state.inputValue=e.target.value
        this.setState({
            // inputValue: e.target.value
            inputValue:this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length);
        })
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default Xiaojiejie