import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import PageLink from '../home/PageLink';
import AnchorLink from './AnchorLink';
const { Header } = Layout;

const HeaderMenu = ({ collapsed, setCollapsed }) => {
    const { user, isLoading } = useUser();

    return (
        <Header
            className="site-layout-background"
        >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}
            <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                <DropdownToggle nav caret id="profileDropDown">
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile rounded-circle"
                        width="50"
                        height="50"
                        decode="async"
                        data-testid="navbar-picture-desktop"
                    />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                        {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                        <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                            Meus dados
                        </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                        <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                            Sair
                        </AnchorLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Header>
    )
}

export default HeaderMenu