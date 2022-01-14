import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import HeadingTitle from '@/components/HeadingTitle';
import Button from '@/components/Button';
import styles from '@/styles/ProjectDetail.module.scss';
import { myProjects } from '../../mydata/data';

const ProjectDetail = ({ project }) => {
  const [hasDesign, setHasDesign] = useState(false);
  const [isOverview, setIsOverview] = useState(true);

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
      <div className={styles.projectOverview}>
        <div className={styles.techStack}>
          <h3>Technology</h3>
          <p>{renderTechs()}</p>
        </div>
        <div>
          <h3>About</h3>
          <p className={styles.about}>{about}</p>
        </div>
      </div>
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

  // Poppins, Mulish, Orbitron, Tomorrow, Barlow, Josefin Sans, Montserrat Alternates, Badoni Moda, Lato
  const renderTypos = () => {
    if (!design) return;
    const typos = design[1];

    return typos.map((typo, index) => {
      return (
        <div className={styles.typoSet} key={index}>
          <p className={styles.typoName} style={{ fontFamily: `${typo}` }}>
            {typo}
          </p>
          <p style={{ fontFamily: `${typo}` }}>Lorem ipsum dolor sit amet.</p>
          <p style={{ fontFamily: `${typo}` }}>012345678</p>
        </div>
      );
    });
  };

  const renderDesign = () => {
    return (
      <div className={styles.projectOverview}>
        <h3>Color Scheme</h3>
        <div className={styles.designs}>{renderColors()}</div>
        <h3>Typography</h3>
        <div className={styles.designs}>{renderTypos()}</div>
      </div>
    );
  };

  return (
    <Layout nextLink='/projects' indicator='Back To Projects'>
      <div className={styles.detailBorder}>
        <HeadingTitle title={title} />
        <div className={styles.buttons}>
          {live && <Button link={live} content='View Live_' isPrimary={true} />}

          <Button link={repo} content='View Code_' isPrimary={false} />
        </div>

        <div className={styles.detailWrapper}>
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
