import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from '../home/NavBar';
import Footer from '../home/Footer';
import { useUser } from '@auth0/nextjs-auth0';

import { Layout as AntdLayout, notification } from 'antd';
import SiderMenu from './Sider';
import HeaderMenu from './Header';

import { NotificationContext } from '../../utils/notificationContext';


const { Content } = AntdLayout;

const Layout = ({ children }) => {
  const { user, isLoading } = useUser();
  const [collapsed, setCollapsed] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (title, message, type = 'info') => {
    api[type]({
      message: title,
      description: message,
      placement: 'bottomRight'
    });
  };

  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <title>ABBA Finanças</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100" data-testid="layout">
      {!user && <>
        <NavBar />
        <Container className="flex-grow-1 mt-5">{children}</Container>
        <Footer />
      </>}
      {user && <>
        <AntdLayout>
          <SiderMenu collapsed={collapsed} setCollapsed={setCollapsed} />
          <AntdLayout className="site-layout">
            <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content
              className="site-layout-background"
              style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}
            >
              <NotificationContext.Provider value={{ openNotification }}>
                {contextHolder}
                {children}
              </NotificationContext.Provider>
            </Content>
          </AntdLayout>
        </AntdLayout>
      </>}

    </main>
  </>
}

export default Layout;
