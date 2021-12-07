import Layout from '@/components/Layout';
import { myProjects } from '../../mydata/data';
import styles from '@/styles/ProjectDetail.module.scss';
import HeadingTitle from '@/components/HeadingTitle';

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
      <div>THis is detail</div>
      <p></p>
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
