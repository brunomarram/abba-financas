import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CaretDownOutlined
} from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { Layout } from 'antd';
import { useUser } from '@auth0/nextjs-auth0';
const { Header } = Layout;

import menu from '../../utils/userMenuOptions';

const HeaderMenu = ({ collapsed, setCollapsed }) => {
    const { user } = useUser();

    return (
        <Header className="site-header">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}
            <Dropdown overlay={menu} placement="bottomRight" arrow>
                <div className='user-menu'>
                    <Avatar src={user.picture} />
                    <CaretDownOutlined />
                </div>
            </Dropdown>
        </Header>
    )
}

export default HeaderMenu