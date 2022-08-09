import React from 'react'
import { Card, Button, Table } from 'antd'
import { Popconfirm } from 'antd'


const dataSource = [{
  id: 1,
  name: '鱼钩',
  price: 10
}, {
  id: 2,
  name: '饵料',
  price: 20
}, {
  id: 3,
  name: '鱼线',
  price: 15
}]


function List(props) {
  const columns = [{
    title: '序号',
    key: 'id',
    width: 80,
    align: 'center',
    render: (txt, record, index) => index + 1
  }, {
    title: '名字',
    dataIndex: 'name'
  }, {
    title: '价格',
    dataIndex: 'price'
  }, {
    title: '操作',
    render: (txt, record, index) => {
      return (
        <div>
          <Button type='primary' size='small'>修改</Button>
          <Popconfirm title="确定删除吗"
          onVisibleChange={()=>console.log("取消删除")}
          onConfirm={(()=>{
            console.log("确认删除")
          })}
          >
            <Button style={{ margin: '0 1rem' }} type='danger' size='small'>删除</Button>
          </Popconfirm>
        </div>
      )
    }
  }]
  return (
    <Card title="商品列表" extra={
      <Button type='primary' size='small' onClick={()=>props.history.push("/admin/product/edit/")}>新增</Button>
    }>
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  )
}

export default List