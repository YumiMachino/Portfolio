import Image from 'next/image';
import styles from '@/styles/components/Project.module.scss';
import CyButton from './CyButton';

const Project = ({ project }) => {
  const { id, title, thumbnail, technology, web } = project;

  const url = `/projects/${id}`;

  const renderTechs = () => {
    return technology.map((tech) => {
      return (
        <span key={tech.id} className={styles.tech}>
          {tech.tech}
        </span>
      );
    });
  };

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
          <h2 className={styles.name}>{title}</h2>
          <div className={styles.techs}>{renderTechs()}</div>
          <span className={styles.app}>{web ? `Web` : 'Mobile'}</span>
          <span className={styles.button}>
            <CyButton content='Check Project_' link={url} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
