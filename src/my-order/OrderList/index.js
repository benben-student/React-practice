import React from 'react';
import OrderItem from '../OrderItem';

class OrderList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('/mock/order.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
    })
  }
  render() {
    return (
      <div >
        {this.state.data.map(item => {
          return <OrderItem onSubmit={this.handleSubmit} data={item} key={item.id} />
        })}
      </div>
    );
  }
  handleSubmit = (id, comment, stars) => {
    const newData = this.state.data.map(item => {
      return item.id === id ? {
        ...item, comment, stars, ifCommented: true
      } : item
    })
    this.setState({
      data: newData
    })
  }
}

export default OrderList;
