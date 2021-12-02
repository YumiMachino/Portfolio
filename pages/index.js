import Link from 'next/link';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.name}>
          YUMI <br /> MACHINO
        </h1>
        <h5 className={styles.role}>Front End Developer.</h5>
        <Button primary={true} big={true} content="Check Projects" />
        <Button primary={false} big={false} content="Secondary btn" />
      </div>
    </Layout>
  );
}
