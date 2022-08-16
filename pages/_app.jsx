import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import Layout from '../components/base/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import '../styles/base.css';
import 'antd/dist/antd.css';

initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider locale={ptBR}>
      <UserProvider>  
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ConfigProvider>
  );
}
