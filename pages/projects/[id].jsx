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

  console.log('design: ', design);

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

  const renderColors = () => {
    if (!design) return;
    const colors = design[0];
    return colors.map((color) => {
      return (
        <div className={styles.colorSet}>
          <div
            className={styles.color}
            style={{ backgroundColor: `${color}` }}
          ></div>
          <p>{color}</p>
        </div>
      );
    });
  };

  const renderTypos = () => {
    if (!design) return;
    const typos = design[1];
    return typos.map((typo) => {
      return (
        <div className={styles.typoSet}>
          <p className={styles.typoName} style={{ fontFamily: `${typo}` }}>
            {typo}
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>012345678</p>
        </div>
      );
    });
  };

  const renderDesign = () => {
    return (
      <>
        <h3>Color Scheme</h3>
        <div className={styles.designs}>{renderColors()}</div>
        <h3>Typography</h3>
        <div className={styles.designs}>{renderTypos()}</div>
      </>
    );
  };

  return (
    <Layout>
      <div className={styles.border}>
        <HeadingTitle title={title} />
        <div>
          <CyButton link='' content='View Live_' primary={true} />
          <CyButton link='' content='View Code_' primary={false} />
        </div>

        <div className={styles.container}>
          <h4>
            <span
              style={{ color: `${isOverview ? '#F100F5' : '#3b136b'}` }}
              onClick={() => setIsOverview(true)}
            >
              OVERVIEW
            </span>
            {design && (
              <>
                /
                <span
                  style={{ color: `${!isOverview ? '#F100F5' : '#3b136b'}` }}
                  onClick={() => setIsOverview(false)}
                >
                  DESIGN
                </span>
              </>
            )}
          </h4>
          <div className={styles.imgContainer}>
            <Image
              src={thumbnail}
              alt={title}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.rightContainer}>
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
