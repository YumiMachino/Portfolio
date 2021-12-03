import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Logo from './Logo';
import Pagination from './Pagination';

const Layout = ({ title, keywords, description, headerItems, children }) => {
  const router = useRouter();

  const currentLink = headerItemLinks.filter(
    (item, idx) => item === router.pathname
  );

  console.log('current link', currentLink);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div style={{ width: '90%', margin: '0 auto' }}>
        <Logo link={headerItems.home.link} />

        {router.pathname === '/' && <Header headerItems={headerItems} />}
        <div
          style={{
            width: '90vw',
            height: '70vh',
            margin: '100px auto',
          }}
        >
          {children}
        </div>

        {/* {router.pathname === '/' && (
          <Pagination next={true} link={'/about'} page='02. About' />
        )}
        {router.pathname === '/contact' && (
          <Pagination next={true} link={'/'} page='01. Home' />
        )} */}
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

const headerItems = [
  {
    item: '01. Home',
    link: '/',
  },
  {
    item: '02. About Me',
    link: '/about',
  },
  {
    item: '03. Projects',
    link: '/projects',
  },
  {
    item: '04. Contact',
    link: '/contact',
  },
];

const headerItemLinks = ['/', '/about', '/projects', '/contact'];
const headerItem = ['01. Home', '02. About Me', '03. Projects', '04.Contact'];
