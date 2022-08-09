import { Button, Form, Input, message, Space } from 'antd';
import React from 'react';

const Edit = () => {
  const [form] = Form.useForm();
  const priceValidate=(rule,value,callback)=>{
    if(value*1>100){
      callback("价格不能大于100")
    }else{
      callback()
    }
  }
  const onFinish = () => {
    message.success('提交成功!');
  };

  const onFinishFailed = () => {
    message.error('提交失败!');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="名字"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="请输入商品名称" />
      </Form.Item>
      <Form.Item
        name="price"
        label="价格"
        rules={[
          {
            required: true,
          },{
            validator:priceValidate
          }
        ]}
      >
        <Input placeholder="请请输入商品价格" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Edit;