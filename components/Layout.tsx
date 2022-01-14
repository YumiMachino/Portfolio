import Head from 'next/head';
import Arrow from './Arrow';
import Logo from './Logo';
import Navigation from './Navigation';

import styles from '@/styles/Layout.module.scss';

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: any;
  nextLink: string;
  indicator: string;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  children,
  nextLink,
  indicator,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div className={styles.layoutWrapper}>
        <Logo link='/' />
        <Navigation />
        <div>{children}</div>
        <Arrow nextLink={nextLink} indicator={indicator} />
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
