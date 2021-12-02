import '@/styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
