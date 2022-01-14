import Head from 'next/head';
import { useRouter } from 'next/router';
import Arrow from './Arrow';
import Logo from './Logo';
import Navigation from './Navigation';

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: any;
  nextLink: string;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  children,
  nextLink,
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
          paddingTop: '40px',
          paddingBottom: '60px',
        }}
      >
        <Logo link='/' />
        <Navigation />
        <div>{children}</div>
        <Arrow nextLink={nextLink} />
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
