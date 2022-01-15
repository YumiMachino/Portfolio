import HeadingTitle from '@/components/HeadingTitle';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import styles from '@/styles/components/NoPage.module.scss';

const NoPage = () => {
  return (
    <Layout nextLink='/' indicator='Back To Website'>
      <div className={styles.noPageBorder}>
        <HeadingTitle title='404!' />
        <HeadingTitle title='Sorry, Page Not Found ' />
        <Button isPrimary={true} link='/' content='Back To Website' />
      </div>
    </Layout>
  );
};

export default NoPage;
