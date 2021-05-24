import Image from 'next/image';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from "./ProjectCard";

/*
Projects data
 */

// temp image setting
const thumbnail = "/vancouver.jpg"

const projects = [
  {
    id: 1, 
    title: "Hang-Out-Planner",
    thumbnail: thumbnail,
    languages: "Swift, Mapkit",
    projectURL: "https://github.com/cookie777/Hang-Out-Planner"
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

/*
Style setting
 */
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingLeft: '5vw',
        paddingRight: '5vw',
    },
    sectionStyle: {
        width: '100%',
        paddingTop:'5vh',
        paddingBottom: '5vh',
    },
    borderBottomStyle: {
        width: '120px',
        height: '2px',
        backgroundColor: '#303f9f',
        marginTop: '6px',
    },
})


const Portfolio = () => {   
    const classes = useStyles();

    return (
        <div className={classes.root} id="work">
            <Grid
            className={classes.sectionStyle}
            container
            alignItems="center"
            direction="column"
                >
                <Grid 
                    item xs={12} 
                    style={{marginBottom: '14px'}} 
                    >
                    <Typography variant="h3" > POTFOLIO</Typography>
                    <div className={classes.borderBottomStyle} />
                </Grid>    
                <Grid item
                      container
                      xs={12}
                    >
                    {projects.map((project) => (
                        <Grid 
                            item md={4} lg={4} 
                            key={project.id}
                            >
                            <ProjectCard 
                                key={project.id} 
                                title={project.title} 
                                thumbnail={project.thumbnail} 
                                languages={project.languages} 
                                projectURL={project.projectURL}/>
                        </Grid>
                    ))}
                </Grid>            
            </Grid>
        </div>
      );
}
 
export default Portfolio;