import { Breadcrumb, Layout, Menu, Avatar, message } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom'
import { admirnRouters } from '../../routers';
import "./style.css"
import { clearToken } from '../../utils/auth'

const { Content, Sider } = Layout;
const routers = admirnRouters.filter(route => route.isShow)

const menu = (
  <Menu
    onClick={p => {
      if (p.key == "logOut") {
        clearToken()
        this.props.history.push('/login')
      } else {
        message.info(p.key)
      }
    }}>
    <Menu.Item key="noti">通知中心</Menu.Item>
    <Menu.Item key="setting">设置</Menu.Item>
    <Menu.Item key="logOut">退出</Menu.Item>
  </Menu>
);
const Index = (props) => (
  <Layout>
    <Sider >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {routers.map(route => {
          return (<Menu.Item onClick={p => props.history.push(p.key)} key={route.path}>{route.title}</Menu.Item>)
        })}
      </Menu>
    </Sider>
    <Dropdown className='header' overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar>U</Avatar>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
    <Layout>

      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

const mapStateToProps = (state) => state.app;

export default connect(mapStateToProps)(withRouter(Index));
