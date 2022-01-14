import Layout from '@/components/Layout';
import HeadingTitle from '@/components/HeadingTitle';
import Project from '@/components/Project';
import styles from '@/styles/Projects.module.scss';
import { myProjects } from '@/mydata/data';

const projects = () => {
  const renderProjects = () => {
    return myProjects.map((project) => {
      return <Project key={project.id} project={project} />;
    });
  };

  return (
    <Layout nextLink='/contact' indicator='Contact Me'>
      <div className={styles.projectBorder}>
        <HeadingTitle title='Projects' />
        <div className={styles.projectContainer}>{renderProjects()}</div>
      </div>
    </Layout>
  );
};

export default projects;
