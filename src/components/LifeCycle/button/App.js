import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    componentWillMount() {
        console.log('2...componentWillMount');
    }
    componentDidMount() {
        console.log('3...componentDidMount');
    }
    componentWillUpdate() {
        console.log('4...componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('4...componentDidUpdate');
    }
    handleClick(event) {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <p>
                {this.state.count}<br />
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </p>
        );
    }
}

export default App;
