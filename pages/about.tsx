import Image from 'next/image';
import { IconType, IconContext } from 'react-icons';
import HeadingTitle from '@/components/HeadingTitle';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import styles from '@/styles/About.module.scss';
import { myData } from '@/mydata/data';

const renderIconSet = (name: string, icon: IconType, index: number) => {
  return (
    <div key={index} className={styles.iconSet}>
      <div>{icon}</div>
      <span>{name}</span>
    </div>
  );
};

const about = () => {
  return (
    <Layout nextLink='/projects' indicator='Projects'>
      <div className={styles.aboutBorder}>
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
            <Button
              link='https://docs.google.com/document/d/e/2PACX-1vQTB3CUFkEDUTjlu7EmWx6kweVmf5HixFeRYIjWcTlsxAOm2zbnDqbPlSJKOEPT_1HEqaujtNmpgFX9/pub'
              content='Check Resume_'
              isPrimary={true}
            />
          </div>
        </div>
        <div className={styles.skillContainer}>
          <IconContext.Provider
            value={{ className: `${styles.iconContainer}` }}
          >
            {myData.skills.map((skill, index) => {
              return renderIconSet(skill.name, skill.icon, index);
            })}
          </IconContext.Provider>
        </div>
      </div>
    </Layout>
  );
};

export default about;
