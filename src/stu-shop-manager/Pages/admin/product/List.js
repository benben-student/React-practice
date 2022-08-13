import React, { useEffect, useState } from 'react'
import { Card, Button, Table } from 'antd'
import { connect } from "react-redux";
import { Popconfirm } from 'antd'
import { listApi, delOne } from '../../../services/products'
import { serverUrl } from '../../../utils/config'
// const dataSource = [{
//   id: 1,
//   name: '鱼钩',
//   price: 10
// }, {
//   id: 2,
//   name: '饵料',
//   price: 20
// }, {
//   id: 3,
//   name: '鱼线',
//   price: 15
// }]


function List(props) {
  const { list, page, total } = props;
  const loadData = () => {
    props.dispatch(
      loadProduct({
        page: page,
        // name: "小米"
      })
    );
  };
  const { dataSource, setDataSouce } = useState([])
  useEffect(() => {
    listApi().then(res => {
      console.log(res);
      setDataSouce(res.product)
    })
  }, [])
  const columns = [{
    title: '序号',
    key: 'id',
    width: 80,
    align: 'center',
    render: (txt, record, index) => {
      return (
        <div>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              // 跳转到edit页面，传递id作为参数
              props.history.push(`/admin/products/edit/${record._id}`);
            }}
          >
            修改
          </Button>
          <Popconfirm
            title="确定删除此项？"
            onCancel={() => console.log("用户取消删除")}
            onConfirm={() => {
              // console.log("用户确认删除");
              // 此处调用api接口进行相关操作
              delOne(record._id).then((res) => {
                loadData();
              });
            }}
          >
            <Button style={{ margin: "0 1rem" }} type="danger" size="small">
              删除
            </Button>
          </Popconfirm>
          <Button
            size="small"
            onClick={() => {
              // 修改在售状态
              modifyOne(record._id, { onSale: !record.onSale }).then(
                (res) => {
                  loadData();
                }
              );
            }}
          >
            {record.onSale ? "下架" : "上架"}
          </Button>
        </div>
      );
    },
  },
  ];
  return (
    <Card title="商品列表" extra={
      <Button type='primary' size='small' onClick={() => props.history.push("/admin/product/edit/")}>新增</Button>
    }>
      <Table rowKey="id" pagination={{
        total,
        defaultPageSize: 20,
        onChange: (p) => {
          props.dispatch(loadProduct({ page: p }));
        },
      }} columns={columns} bordered dataSource={dataSource} />
    </Card>
  )
}

export default connect((state) => state.product)(List);
