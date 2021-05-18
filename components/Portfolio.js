import ProjectCard from "./ProjectCard";
/*load thumbnails of projects here*/
// import thumbnail from '../public/earth.jpg';
import Image from 'next/image';

const Portfolio = () => {
const thumbnail = <Image src ="/earth.jpg" alt="vancouver"/>

const projects = [
  {
    id: 1, 
    title: "Project1",
    thumbnail: thumbnail,
    languages: "HTML, CSS, JavaScript",
    projectURL: "https://www.google.com/"
  }, 
   {
    id: 2, 
    title: "Project2",
    thumbnail: thumbnail,
    languages: "HTML, CSS, JavaScript",
    projectURL: "https://www.google.com/"
  }, 
   {
    id: 3, 
    title: "Project3",
    thumbnail: thumbnail,
    languages: "HTML, CSS, JavaScript",
    projectURL: "https://www.google.com/"
  }
]

    return (
         <div id="work" className="portfolio-section">
          <div className="portfolio_title">
              <h3>PORTFOLIO</h3>
              <p>Here, you can see projects I've worked so far!</p>
          </div>
          <div className="cards">
            {projects.map((project) => (
              <div className="card" key={project.id}>
                <ProjectCard key={project.id} title={project.title} thumbnail={project.thumbnail} languages={project.languages} projectURL={project.projectURL}/>
              </div>
            ))}
            </div>
        </div>
      );
}
 
export default Portfolio;