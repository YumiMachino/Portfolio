import Head from 'next/head';
import Header from './Header';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />

      <div className='text-black bg-red-400'>
        logo navbar, head
        {children}
        footer pagination
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Portfolio | Yumi Machino',
  description: "Yumi Machino's Portfolio",
  keywords: 'web development, front-end, dev',
};
