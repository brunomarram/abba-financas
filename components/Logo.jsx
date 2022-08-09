import React from 'react';

import Image from 'next/image'
import logo from '../public/logo_abba.png'

const Logo = ({ testId }) => (
  <Image src={logo} key={testId} />
);

export default Logo;
