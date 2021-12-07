import { useState } from 'react';
import CyButton from '@/components/CyButton';
import Typist from 'react-typist';
import styles from '@/styles/components/TopPage.module.scss';

const TopPage = () => {
  const [animate, setAnimate] = useState(true);

  pauseGlitch();

  function pauseGlitch() {
    setTimeout(() => setAnimate(false), 8000);
  }

  return (
    <div className={styles.container}>
      <h1 className={`${animate && styles.animate} ${styles.glitch} `}>
        <span>
          Yumi <br /> Machino
        </span>
        Yumi <br /> Machino
        <span>
          Yumi <br />
          Machino
        </span>
      </h1>

      <h5 className={styles.role}>
        <Typist>
          <Typist.Delay ms={300} />
          Front End Developer.
        </Typist>
      </h5>

      <CyButton link='/projects' content='Check Projects_' primary={true} />
    </div>
  );
};

export default TopPage;
