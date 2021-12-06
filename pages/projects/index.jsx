import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import HeadingTitle from '@/components/HeadingTitle';
import styles from '@/styles/Projects.module.scss';
import Project from '@/components/Project';
import { IconContext } from 'react-icons';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import { myProjects } from '@/mydata/data';

const projects = () => {
  const [currentPage, setCurrentPage] = useState(1); // current active page
  const totalCount = myProjects.length; // total count of projects
  const pageSize = 6;
  const totalPageCount = Math.ceil(totalCount / pageSize); // total page count

  const onPageChange = (direction) => {
    if (direction === 'right' && currentPage !== totalPageCount) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'right' && currentPage === totalPageCount) {
      setCurrentPage(1);
    } else if (direction === 'left' && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'left' && currentPage === 1) {
      setCurrentPage(totalPageCount);
    }
  };

  const renderProjects = (projects) => {
    if (currentPage === 1) {
      return projects.slice(0, pageSize).map((project) => {
        return <Project key={project.id} project={project} />;
      });
    }
    if (currentPage === 2) {
      return projects.slice(pageSize).map((project) => {
        return <Project key={project.id} project={project} />;
      });
    }
  };

  return (
    <Layout>
      <div className={styles.border}>
        <IconContext.Provider value={{ className: `${styles.arrows}` }}>
          <div
            className={styles.leftArrow}
            onClick={() => onPageChange('left')}
          >
            <FiChevronsLeft />
          </div>
          <div
            className={styles.rightArrow}
            onClick={() => onPageChange('right')}
          >
            <FiChevronsRight />
          </div>
        </IconContext.Provider>

        <div className={styles.pagination}>
          <span>{currentPage}</span>
          <span> / {totalPageCount} </span>
        </div>

        <HeadingTitle title='Projects' />
        <div className={styles.projectContainer}>
          {renderProjects(myProjects)}
        </div>
      </div>
    </Layout>
  );
};

export default projects;
