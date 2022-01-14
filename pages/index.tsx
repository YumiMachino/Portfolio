import Layout from '@/components/Layout';
import TopPage from '@/components/TopPage';

const Home = () => (
  <Layout nextLink='/about'>
    <TopPage />
  </Layout>
);

export default Home;
