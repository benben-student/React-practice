import React from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
export default class HeaderNav extends React.Component {
    constructor() {
        super()
        this.state = {
            current: ""
        }
    }
    handleClickMenu = (e) => {
        this.setState = ({
            current: e.key
        })
    }
    render() {
        const { current } = this.state
        return (
            <Menu theme="dark" mode="horizontal" onClick={this.handleClickMenu} selectedKeys={[current]}>
                <Menu.Item key="home" icon={<MailOutlined />}>
                    <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key="product" icon={<MailOutlined />}>
                    <Link to="/product">产品</Link>
                </Menu.Item>
                <Menu.Item key="new" icon={<MailOutlined />}>
                    <Link to="/new">首页</Link>
                </Menu.Item>
                <Menu.Item key="user" icon={<MailOutlined />}>
                    <Link to="/user">首页</Link>
                </Menu.Item>
                <Menu.Item key="login" icon={<MailOutlined />}>
                    <Link to="/login">登录</Link>
                </Menu.Item>
            </Menu>
        )
    }
}