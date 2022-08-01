import React from 'react';
import Button from './Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1.0
        };
    }
    componentDidMount() {
        setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    }
    render() {
        return (
            <div style={{opacity:this.state.opacity}}>
            <h2>Hello {this.props.name}</h2> 
       </div>
        );
    }
}

export default App;
