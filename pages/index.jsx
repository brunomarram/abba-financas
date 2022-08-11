import React, { useEffect } from 'react';

import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

import Hero from '../components/home/Hero';
import Content from '../components/home/Content';

export default function Index() {
  const router = useRouter()
  const { user } = useUser();

  useEffect(() => {
    if (user) router.push('/home')
  }, [user])

  return (
    <>
      <Hero />
      <hr />
      <Content />
    </>
  );
}
