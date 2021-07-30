import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";

/*
Projects data
 */

const hangoutPlaner = "/hangOutPlanner.jpg";
const toDoList = "/toDoList.jpg";
const portfolio = "/portfolio.jpg";
const dpCodeAcademy = "/dpcodeAcademy.jpg";
const blackJack = "/blackJack.jpg";

const projects = [
  {
    id: 0,
    title: "DPCODE ACADEMY",
    thumbnail: dpCodeAcademy,
    languages: "NextJS, MaterialUI, Storyboard",
    projectURL: "https://dpcode-frontend-git-develop-itzderr.vercel.app",
    app: "web",
    description:
      "A web application created for DPCODE ACADEMY(in development).",
  },
  {
    id: 1,
    title: "Portfolio",
    thumbnail: portfolio,
    languages: "React, Nextjs",
    projectURL: "https://github.com/YumiMachino/Portfolio-nextJS",
    app: "web",
    description: "My portfolio website which introduces about myself.",
  },
  {
    id: 2,
    title: "Black Jack",
    thumbnail: blackJack,
    languages: "Java, JavaFX, SceneBuilder",
    projectURL: "https://github.com/YumiMachino/Black-Jack",
    app: "web",
    description: 'A website to play a card game called "Black Jack"',
  },
  {
    id: 3,
    title: "Hang-Out-Planner",
    thumbnail: hangoutPlaner,
    languages: "Swift, Mapkit, REST API",
    projectURL: "https://github.com/cookie777/Hang-Out-Planner",
    app: "mobile",
    description: "iOS app generates hang out plan for the day.",
  },
  {
    id: 4,
    title: "To Do List",
    thumbnail: toDoList,
    languages: "Swift, CoreData",
    projectURL: "https://github.com/YumiMachino/SimpleToDoApp_CoreData",
    app: "mobile",
    description: "iOS app which tracks to-do list items.",
  },
];

/*
Style setting
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  sectionStyle: {
    width: "100%",
    paddingTop: "2.5vh",
    paddingBottom: "5vh",
  },
  borderBottomStyle: {
    width: "120px",
    height: "2px",
    backgroundColor: "#303f9f",
    marginTop: "6px",
    marginBottom: "12px",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "2px",
      marginTop: "3px",
      marginBottom: "6px",
    },
  },
  titleStyle: {
    marginLeft: "10px",
    marginTop: "2.5vh",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
}));

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
        <Grid item xs={12} style={{ marginBottom: "14px" }}>
          <Typography variant="h4" className={classes.titleStyle}>
            Portfolio Projects
          </Typography>
          <div className={classes.borderBottomStyle} />
        </Grid>
        <Grid item container xs={12}>
          {projects.map((project) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={project.id}>
              <ProjectCard
                key={project.id}
                title={project.title}
                thumbnail={project.thumbnail}
                languages={project.languages}
                projectURL={project.projectURL}
                app={project.app}
                description={project.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
