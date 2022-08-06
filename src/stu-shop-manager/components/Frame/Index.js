
import { Breadcrumb, Layout,Menu } from 'antd';
import React from 'react';
import { admirnRouters } from '../../routers';
const { Header, Content, Sider } = Layout;
const routers = admirnRouters.filter(route => route.isShow)


const App = (props) => (
  <Layout>
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {routers.map(route => {
          return (<Menu.Item key={route.path}>{route.title}</Menu.Item>)
        })}
      </Menu>
    </Sider>
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

export default App;