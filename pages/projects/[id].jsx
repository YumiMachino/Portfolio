import Image from 'next/image';
import Layout from '@/components/Layout';
import { myProjects } from '../../mydata/data';
import styles from '@/styles/ProjectDetail.module.scss';
import HeadingTitle from '@/components/HeadingTitle';
import CyButton from '@/components/CyButton';

const ProjectDetail = ({ project }) => {
  console.log('inside project detail', project);
  const { title, about, technology, thumbnail, design, live, repo } = project;

  console.log('title: ', title);
  console.log('about: ', about);
  console.log('technology: ', technology);
  console.log('thumbnail:', thumbnail);
  console.log('design: ', design);
  console.log('live: ', live);
  console.log('repo:', repo);

  return (
    <Layout>
      <div className={styles.border}>
        <HeadingTitle title={title} />
        <div>
          <CyButton link='/' content='View Live_' />
          <CyButton link='/' content='View Code_' />
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
              <span>OVERVIEW</span>/ <span>DESIGN</span>
            </h4>
            <div>
              <h3>Technology</h3>
              <p className={styles.tech}>HTML/ CSS/ JAVASCRIPT</p>
            </div>
            <div>
              <h3>About</h3>
              <p className={styles.about}>{about}</p>
            </div>
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
