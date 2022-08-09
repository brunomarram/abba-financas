import React from 'react';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';

import Layout from '../components/base/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';

import '../styles/base.css';
import 'antd/dist/antd.css';

initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
