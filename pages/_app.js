import '@/styles/globals.scss';
import Head from 'next/head';
import DotRing from '@/components/DotRing';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <>
        <DotRing />
        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
