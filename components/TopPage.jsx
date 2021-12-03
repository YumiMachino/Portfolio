import CyButton from '@/components/CyButton';
import Typist from 'react-typist';
import styles from '@/styles/components/TopPage.module.scss';

const TopPage = () => (
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

    <h5 className={styles.role}>
      <Typist>
        <Typist.Delay ms={300} />
        Front End Developer.
      </Typist>
    </h5>

    <CyButton />
  </div>
);

export default TopPage;
