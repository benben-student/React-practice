import React, { Component } from 'react';
 class XiaojiejieItem extends Component {
     constructor(props){
         super(props)
         this.handleClick=this.handleClick.bind(this)
     }
     render() { 
         return (
             <div>
                 <li onClick={this.handleClick}>{this.props.content}</li>
             </div>
         );
     }
     handleClick(){
         this.props.deleteItem(this.props.index)
     }
 }
  
 export default XiaojiejieItem;