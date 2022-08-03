import React from 'react';
import style from './style.css'

class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editting: false,
      stars: props.data.stars || 0,
      comment: props.data.stars || ''
    }
  }
  render() {
    const { shop, product, price, picture, ifCommented } = this.props.data
    console.log(shop, product, price, picture, ifCommented);
    return (
      <div className='orderItem'>
        <div className='orderItem__picContainer'>
          <img className='orderItem__pic' src={picture} />
        </div>
        <div className='orderItem__content'>
          <div className='orderItem__product'>{product}</div>
          <div className='orderItem__shop'>{shop}</div>
          <div className='orderItem__detail'>
            <div className='orderItem__price'>{price}</div>
            <div>
              {ifCommented ? <button className='orderItem__btn--red'>已评价</button> : <button className='' onClick={this.handleOpenArea.bind(this)}>评价</button>}
            </div>
          </div>
        </div>
        {this.state.editting ? this.renderEditArea() : null}
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className='orderItem__commentContainer'>
        <textarea value={this.state.comment} onChange={this.handleCommentChange.bind(this)} className='orderItem__comment' />
        {this.renderStars()}
        <button onClick={this.handleSubmitComment.bind(this)} className=''>提交</button>
        <button onClick={this.handleCanleComment.bind(this)} className='orderItem__btn orderItem__btn--black'>取消</button>
      </div>
    )
  }
  renderStars() {
    const { stars } = this.state
    return (
      <div>
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            const lightClass = stars >= item ? "orderItem__star--light" : "";
            return (
              <span className={"orderItem__star"+lightClass} onClick={this.handleClickStars.bind(this, item)} key={index}>☆</span>
            )
          })
        }
      </div>
    )
  }
  handleOpenArea() {
    this.setState({
      editting: true
    })
  }
  handleCommentChange(e) {
    this.setState({
      comment: e.target.value
    })
  }
  handleClickStars = (stars) => {
    this.setState({
      stars: stars
    })
  }
  handleCanleComment() {
    this.setState({
      editting: false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.stars || ''
    })
  }
  handleSubmitComment() {
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.setState({
      editting: false
    })
    this.props.onSubmit(id, comment, stars)
  }
}

export default OrderItem;
