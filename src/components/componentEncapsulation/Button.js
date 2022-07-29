import React from "react";
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: ''
        }
    }
    handleClick = (index) => {
        this.setState({
            currentIndex: index
        })
        const { onChange } = this.props
        onChange(index)

    }
    render() {
        return (
            <div>
                <button className='a' onClick={() => this.handleClick('A')}>A</button>
                <button className='b' onClick={() => this.handleClick('B')}>B</button>
                <button className='c' onClick={() => this.handleClick('C')}>C</button>
            </div>
        )
    }
}
export default Button