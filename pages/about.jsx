import Image from 'next/image';

import HeadingTitle from '@/components/HeadingTitle';
import Layout from '@/components/Layout';
import CyButton from '@/components/CyButton';
import styles from '@/styles/About.module.scss';
import { GrHtml5 } from 'react-icons/gr';
import { FaHtml5, FaCss3, FaJs, FaReact, FaSass } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { myData } from '@/mydata/data.js';

const iconSet = (name, icon) => {
  return (
    <div className={styles.iconSet}>
      <div>{icon}</div>
      <span>{name}</span>
    </div>
  );
};

const about = () => {
  return (
    <Layout>
      <div className={styles.border}>
        <HeadingTitle title='About Me / Skills' />

        <div className={styles.introContainer}>
          <div className={styles.imgContainer}>
            <Image
              src={'/profilePic.jpg'}
              alt='profile image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.introRight}>
            <p className={styles.intro}>{myData.self_intro}</p>
            <CyButton link='/' content='Check Resume_' primary={true} />
          </div>
        </div>
        <div className={styles.skillContainer}>
          <IconContext.Provider
            value={{ className: `${styles.iconContainer}` }}
          >
            {myData.skills.map((skill) => {
              return iconSet(skill.name, skill.icon);
            })}
          </IconContext.Provider>
        </div>
      </div>
    </Layout>
  );
};

export default about;
