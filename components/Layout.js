import Head from 'next/head';
import Header from './Header';
import Pagination from './Pagination';

const Layout = ({ title, keywords, description, headerItems, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header headerItems={headerItems} />

      <div className='text-black bg-red-400'>
        logo navbar, head
        {children}
        footer pagination
        <Pagination />
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Portfolio | Yumi Machino',
  description: "Yumi Machino's Portfolio",
  keywords: 'web development, front-end, dev',
  headerItems: {
    home: {
      item: '01. Home',
      link: '/',
    },
    about: {
      item: '02. About Me',
      link: '/about',
    },
    projects: {
      item: '03. Projects',
      link: '/projects',
    },
    contact: {
      item: '04. Contact',
      link: '/contact',
    },
  },
};
