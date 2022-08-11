import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
const { Sider } = Layout;

import menu from '../../utils/menuOptions';

const SiderMenu = ({ collapsed, setCollapsed }) => {
    const router = useRouter()

    const changePage = ({ key }) => {
        router.push(menu[key].path || '/home')
    }

    return (
        <Sider collapsed={collapsed} >
            <Menu
                onClick={changePage}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menu}
            />
        </Sider>
    )
}

export default SiderMenu