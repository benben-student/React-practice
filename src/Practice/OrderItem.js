import React from "react";
import style from './style.css'
class OrderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            endtting: false,
            star: 0
        }
    }
    handleComment = () => {
        this.setState({
            endtting: true
        })
    }
    handleCancle = () => {
        this.setState({
            endtting: false
        })
    }
    handleStar = (star) => {
        this.setState({
            star
        })
    }
    handleEnding = () => {
        this.setState({
            endtting: false
        })
    }
    render() {
        const { star } = this.state
        console.log(star);
        const { shop, product, price, ifCommented } = this.props.data
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
                            {ifCommented ? <button className="menu">已评价</button> : <button onClick={this.handleComment}>评价</button>}
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
                <textarea /><br />
                {this.handleStar()}
                <div>
                    <button onClick={() => this.handleEnding()}>提交</button>
                    <button onClick={() => this.handleCancle()}>取消</button>
                </div>
            </div>
        )
    }
    handleStar() {
        return (
            <div>
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const light = this.state.star >= item ? 'star' : ''
                    return (
                        <span className={light} onClick={() => this.handleStar(item)} key={index}>★</span>
                    )
                })}
            </div>
        )
    }
}
export default OrderItem