import HeadingTitle from '@/components/HeadingTitle';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import HeaderItem from '@/components/HeaderItem';

const test = () => {
  return (
    <Layout>
      <HeadingTitle title='test heading' />
      <Button />
      <HeaderItem title='test' link='/' />
    </Layout>
  );
};

export default test;
