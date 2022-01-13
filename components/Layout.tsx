import Head from 'next/head';
import { useRouter } from 'next/router';
import Arrow from './Arrow';
import Header from './Header';
import Logo from './Logo';
import Navigation from './Navigation';
import Pagination from './Pagination';

type LayoutProps = {
  title: string;
  keywords: string;
  description: string;
  headerItems: any;
  children: any;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  headerItems,
  children,
}) => {
  const router = useRouter();

  console.log('router pathname: ', router.pathname);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingBottom: '40px',
        }}
      >
        <Logo link={headerItems.home.link} />
        <Navigation />
        <div>{children}</div>
        <Arrow />
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
