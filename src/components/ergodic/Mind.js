import React from "react";
class Mind extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                'A', 'B', 'C'
            ],
            indexs: ''
        }
    }
    onMouseOver(index) {
        this.setState({
            indexs: index
        })
        console.log(this.state.indexs);
    }
    onMouseOut() {
        this.setState({
            indexs: ''
        })
    }
    render() {
        const { list, indexs } = this.state
        return (
            <div>
                {list.map((item, index) => {
                    return <li
                        onMouseOut={this.onMouseOut.bind(this)}
                        className={indexs === index ? 'menu' : ''}
                        onMouseOver={this.onMouseOver.bind(this, index)}
                        key={index}>{item}
                    </li>
                })}
            </div>
        )
    }
}
export default Mind