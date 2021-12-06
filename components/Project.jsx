import Image from 'next/image';
import styles from '@/styles/components/Project.module.scss';
import CyButton from './CyButton';

const Project = ({ project }) => {
  const { id, title, thumbnail, technology, web } = project;

  return (
    <div className={styles.project}>
      <Image
        src={thumbnail}
        layout='fill'
        className={styles.test}
        objectFit='cover'
        alt={title}
      />
      <div className={styles.back}>
        <div className={styles.overview}>
          <h2 className={styles.name}>DP Code Website</h2>
          <div className={styles.techs}>
            <span className={styles.tech}>HTML</span>
            <span className={styles.tech}>HTML</span>
          </div>
          <span className={styles.app}>WEB</span>
          <span className={styles.button}>
            <CyButton content='Check Project_' link='/' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;

// Project.defaultProps = {
//   id: 0,
//   title: 'DPCODE ACADEMY',
//   thumbnail: '/dpcodeAcademy.jpg',
//   technology: 'NEXTJS, Material UI, Storybook',
//   web: true,
// };
