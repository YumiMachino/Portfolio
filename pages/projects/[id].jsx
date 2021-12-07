import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { myProjects } from '../../mydata/data';
import styles from '@/styles/ProjectDetail.module.scss';
import HeadingTitle from '@/components/HeadingTitle';
import CyButton from '@/components/CyButton';

const ProjectDetail = ({ project }) => {
  const [hasDesign, setHasDesign] = useState(false);
  const [isOverview, setIsOverview] = useState(true);

  console.log('inside project detail', project);
  const { title, about, technology, thumbnail, design, live, repo } = project;

  const renderTechs = () => {
    return technology.map((tech) => {
      return (
        <span key={tech.id} className={styles.tech}>
          {tech.tech}
        </span>
      );
    });
  };

  const renderOverview = () => {
    return (
      <>
        <div>
          <h3>Technology</h3>
          <p>{renderTechs()}</p>
        </div>
        <div>
          <h3>About</h3>
          <p className={styles.about}>{about}</p>
        </div>
      </>
    );
  };

  const renderDesign = () => {
    return <h1>DESIGN HERE</h1>;
  };

  return (
    <Layout>
      <div className={styles.border}>
        <HeadingTitle title={title} />
        <div>
          <CyButton link={live} content='View Live_' primary={true} />
          <CyButton link={repo} content='View Code_' primary={false} />
        </div>

        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={thumbnail}
              alt={title}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.rightContainer}>
            <h4>
              <span onClick={() => setIsOverview(true)}>OVERVIEW</span>/
              <span onClick={() => setIsOverview(false)}>DESIGN</span>
            </h4>
            {isOverview ? renderOverview() : renderDesign()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

// STATIC GENERATION
export async function getStaticProps(context) {
  const projId = context.params.id;
  const project = myProjects[projId];

  return {
    props: {
      project: project,
    },
  };
}

// build time, generate all the paths
export const getStaticPaths = async () => {
  const paths = myProjects.map((d) => {
    return {
      params: { id: d.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
