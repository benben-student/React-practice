import React from "react";
import style from './style.css'
class OrderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            submit: false,
            endtting: false,
            star: 0,
            comment: ""
        }
    }
    handleComment = () => {
        this.setState({
            endtting: true
        })
    }
    handleCancle = () => {
        this.setState({
            endtting: false,
            star: 0
        })
    }
    handleStar = (star) => {
        this.setState({
            star
        })
    }
    handleEnding() {
        this.setState({
            submit: true,
            endtting:false
        })
    }
    onChange(e) {
        this.setState({
            comment: e.target.value
        })
    }
    render() {
        const { shop, product, price, ifCommented } = this.props.data
        console.log(ifCommented);
        return (
            <div >
                <div>
                    <img />
                </div>
                <div>
                    <div >{shop}</div>
                    <div >{product}</div>
                    <div >
                        <div>{price}</div>
                        <div>
                            {this.state.submit ? <button className="menu">已评价</button> : <button onClick={this.handleComment}>评价</button>}
                        </div>
                    </div>
                </div>
                {this.state.endtting ? this.renderComment() : null}
            </div>
        )
    }
    renderComment() {
        return (
            <div>
                <textarea value={this.state.comment} onChange={this.onChange.bind(this)} /><br />
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const light = this.state.star >= item ? 'star' : ''
                    return (
                        <span className={light} onClick={() => this.handleStar(item)} key={index}>★</span>
                    )
                })}
                <div>
                    <button onClick={this.handleEnding.bind(this)}>提交</button>
                    <button onClick={() => this.handleCancle()}>取消</button>
                </div>
            </div>
        )
    }

}
export default OrderItem