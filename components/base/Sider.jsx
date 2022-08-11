import React from 'react';

import _ from "lodash";
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
const { Sider } = Layout;

import menu from '../../utils/menuOptions';

const SiderMenu = ({ collapsed, setCollapsed }) => {
    const router = useRouter()

    const changePage = ({ key }) => {
        router.push(menu[key].path || '/home')
    }

    const currentPath = _.find(menu, { 'path': router.route }) || {'key': '0'}

    return (
        <Sider collapsed={collapsed} >
            <Menu
                onClick={changePage}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[currentPath.key]}
                items={menu}
            />
        </Sider>
    )
}

export default SiderMenu