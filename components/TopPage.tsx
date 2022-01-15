import { useState } from 'react';
import Button from '@/components/Button';
import Typist from 'react-typist';
import styles from '@/styles/components/TopPage.module.scss';

const TopPage = () => {
  const [animate, setAnimate] = useState(true);

  pauseGlitch();

  function pauseGlitch() {
    setTimeout(() => setAnimate(false), 8000);
  }

  return (
    <div className={styles.topContainer}>
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

      <Button link='/projects' content='Check Projects_' isPrimary={true} />
    </div>
  );
};

export default TopPage;
