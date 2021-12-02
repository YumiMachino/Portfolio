import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto w-full bg-gray-500'>
        <h1 className={styles.title}>Font changed?</h1>
      </div>
      <Link href='/about'>
        <a> go to about </a>
      </Link>
    </Layout>
  );
}
