import Layout from '@/components/Layout';
import TopPage from '@/components/TopPage';

import styles from '@/styles/Home.module.scss';

const Home = ({ headerItems }) => (
  <div>
    <Layout>
      <TopPage />
    </Layout>
  </div>
);

export default Home;
