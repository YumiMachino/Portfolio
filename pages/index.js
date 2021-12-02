import Link from 'next/link';

import Layout from '@/components/Layout';
import Button from '@/components/Button';
import CyButton from '@/components/CyButton';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.glitch}>
          <span>
            Yumi <br /> Machino
          </span>
          Yumi <br /> Machino
          <span>
            Yumi <br />
            Machino
          </span>
        </h1>

        <h5 className={styles.role}>Front End Developer.</h5>
        <CyButton />
      </div>
    </Layout>
  );
}
