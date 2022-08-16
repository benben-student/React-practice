//引入prop-types 库
import PropTypes from "prop-types";
import React from "react";


class Father extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:["1","2"]
        }
    }
    render() {
      return (
      <PropTypess name={this.state.name}/>
      );
    }
  }
  

class PropTypess extends React.Component {
   
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
  
  PropTypess.propTypes = {
    name: PropTypes.string
  };
export default Father