import Link from 'next/link';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import CyButton from '@/components/CyButton';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <GlitchClip>
          <h1 className={styles.name}>
            YUMI <br /> MACHINO
          </h1>
        </GlitchClip>
        <h5 className={styles.role}>Front End Developer.</h5>
        <CyButton />
      </div>
    </Layout>
  );
}
