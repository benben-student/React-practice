import React from 'react';

import Button from './Button';
import Style from './Style.css'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: ''
        }
    }
    onChange = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    render() {
        const p = this.state.currentIndex
        console.log(p);
        return (
            <div className='div'>
                <div>
                    <Button onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

export default App;
