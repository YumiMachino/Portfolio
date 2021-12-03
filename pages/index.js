import Header from '@/components/Header';
import Layout from '@/components/Layout';
import TopPage from '@/components/TopPage';
import styles from '@/styles/Home.module.scss';

export default function Home({ headerItems }) {
  return (
    <Layout>
      <TopPage />
    </Layout>
  );
}
