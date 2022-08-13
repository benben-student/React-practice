import { Button, Form, Input, message, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { useState, useEffect } from 'react';
// 引入编辑器组件
import BraftEditor from "braft-editor";
// 引入编辑器样式
import "braft-editor/dist/index.css";
import { createApi, getOneById, modifyOne } from "../../../services/products";
import { serverUrl } from "../../../utils/config";


const { getFieldDecorator } = props.form;
const [currentData, setCurrentData] = useState({});
const [imageUrl, setImageUrl] = useState("");
const [loading, setLoading] = useState(false);
const [editorState, setEditorState] = useState();

// 初始化的时候执行
useEffect(() => {
  if (props.match.params.id) {
    getOneById(props.match.params.id).then(res => {
      setCurrentData(res);
      setImageUrl(res.coverImg);
      setEditorState(BraftEditor.createEditorState(res.content));
    });
  }
}, []);

const uploadButton = (
  <div>
    <Icon type={loading ? "loading" : "plus"} />
    <div className="ant-upload-text">Upload</div>
  </div>
);

// 图片上传
const handleChange = info => {
  if (info.file.status === "uploading") {
    setLoading(true);
    return;
  }
  if (info.file.status === "done") {
    // 上传成功
    // Get this url from response in real world.
    setLoading(false);
    // console.log(info);
    setImageUrl(info.file.response.info);
  }
};

// 富文本编辑器
const handleEditorChange = v => {
  setEditorState(v);
};
const priceValidate = (rule, value, callback) => {
  if (value * 1 > 100) {
    callback("价格不能大于100");
  } else {
    callback();
  }
};

const handleSubmit = e => {
  // editorState.toHTML()获取当前富文本的内容
  // console.log(editorState.toHTML());
  e.preventDefault();

  //  验证
  props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
      // console.log(values);
      // console.log("提交");
      //  此处需要调用api接口
      if (props.match.params.id) {
        modifyOne(props.match.params.id, {
          ...values,
          coverImg: imageUrl,
          content: editorState.toHTML()
        })
          .then(res => {
            // console.log(res);
            props.history.push("/admin/products");
          })
          .catch(err => {
            // console.log(err);
          });
      } else {
        createApi({
          ...values,
          coverImg: imageUrl,
          content: editorState.toHTML()
        })
          .then(res => {
            // console.log(res);
            props.history.push("/admin/products");
          })
          .catch(err => {
            // console.log(err);
          });
      }
    } else {
      message.error("请输入正确的内容");
    }
  });
};

const Edit = () => {
  const [form] = Form.useForm();
  const priceValidate = (rule, value, callback) => {
    if (value * 1 > 100) {
      callback("价格不能大于100")
    } else {
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
          }, {
            validator: priceValidate
          }
        ]}
      >
        <Input placeholder="请请输入商品价格" />
      </Form.Item>
      <Form.Item></Form.Item>
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