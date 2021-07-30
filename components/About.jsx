import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./ProgressBar";
import { Grid, Typography, Hidden, Chip, Avatar } from "@material-ui/core";

/*
my personal data
*/
const self_intro =
  "I'm a motivated front-end developer with passion for user experience and interaction design and strength in creative and strategic thinking. Learning and growing as a software developer is my passion.I've learnt front-end development as well as iOS App development, throughout school projects and volunteer work, I've always enjoyed working in a team, also love taking new challenges.My motto is to have fun learning!";

const programming_skills = [
  { id: "HTML_skill", content: "HTML", percentage: 90, colorChange: false },
  { id: "CSS_skill", content: "CSS", percentage: 70, colorChange: false },
  {
    id: "JavaScript_skill",
    content: "JavaScript",
    percentage: 85,
    colorChange: false,
  },
  { id: "Swift_skill", content: "Swift", percentage: 80, colorChange: false },
  {
    id: "Objective-C_skill",
    content: "Objective-C",
    percentage: 60,
    colorChange: false,
  },
  { id: "Java_skill", content: "Java", percentage: 60, colorChange: false },
  { id: "Python_skill", content: "Python", percentage: 70, colorChange: false },
];

const other_skills = [
  {
    id: "iOS_skill",
    content: "iOS Dev",
    percentage: 70,
    colorChange: true,
  },
  {
    id: "Web_skill1",
    content: "React",
    percentage: 80,
    colorChange: true,
  },
  {
    id: "Web_skill2",
    content: "Next.js",
    percentage: 80,
    colorChange: true,
  },
  {
    id: "Web_skill3",
    content: "Node.js",
    percentage: 70,
    colorChange: true,
  },
  {
    id: "Web_skill4",
    content: "Material UI",
    percentage: 75,
    colorChange: true,
  },
  {
    id: "Web_skill5",
    content: "Storybook",
    percentage: 60,
    colorChange: true,
  },
  { id: "Tool_skill", content: "Git, Bash", percentage: 60, colorChange: true },
];

/*
Style setting
*/
const font = "Raleway, sans-serif";

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    backgroundColor: "#f5f5f5",
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
  wrapper: {
    backgroundColor: "white",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  titleStyle: {
    // fontFamily: font,
    marginLeft: "10px",
    marginTop: "2.5vh",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
  borderBottomStyle: {
    width: "120px",
    marginLeft: "20px",
    height: "2px",
    backgroundColor: "#303f9f",
    marginTop: "6px",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "2px",
      marginTop: "3px",
      marginBottom: "6px",
      marginLeft: "8px",
    },
  },
  pStyle: {
    // fontFamily: font,
    marginTop: "14vh",
    marginBottom: "18px",
    textAlign: "left",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4px",
      marginBottom: "4px",
      padding: "4px",
      fontSize: "14px",
      textAlign: "center",
    },
  },
  avatarStyle: {
    width: "150px",
    height: "150px",
    marginLeft: "2.5vw",
    marginTop: "4vh",
    [theme.breakpoints.down("md")]: {
      width: "120px",
      height: "120px",
      marginTop: "7vh",
      marginLeft: "1vw",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginTop: "3vh",
    },
  },
  containerStyle: {
    paddingBottom: "6vh",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "4vh",
    },
  },
  skillTitleStyle: {
    color: "#1f1f1f",
    textAlign: "left",
    marginLeft: "2vw",
    marginTop: "2.5vh",
    marginBottom: "2.5vh",
    // fontFamily: font,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      marginTop: "2vh",
      paddingLeft: "4vw",
      marginBottom: "2vh",
      margin: "0 auto",
    },
  },
  eachSkillTitle: {
    marginLeft: "2vw",
    width: "7vw",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "4vw",
      width: "6vw",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1vw",
      width: "12vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "9vw",
      width: "15vw",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2vw",
      width: "45vw",
    },
  },
  otherSkillTitle: {
    width: "7vw",
    [theme.breakpoints.up("xl")]: {
      width: "6vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "12vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "9vw",
      width: "15vw",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2vw",
      width: "45vw",
    },
  },
  chipStyle: {
    // fontFamily: font,
  },
  skillBoxStyle: {
    display: "flex",
    flexDirection: "row",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div id="about">
      <Grid container justify="center" className={classes.sectionStyle}>
        <Grid item container xs={10} md={7} className={classes.wrapper}>
          <Grid item container xs={12} className={classes.containerStyle}>
            <Grid item xs={12} md={3}>
              <Typography variant="h4" className={classes.titleStyle}>
                About Me
              </Typography>

              <div className={classes.borderBottomStyle} />
              <Avatar
                alt="Yumi Machino"
                src="/profilePic.jpg"
                className={classes.avatarStyle}
              />
            </Grid>
            <Grid item item xs={12} md={9}>
              <div className={classes.pStyle}>{self_intro}</div>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            className={classes.containerStyle}
            style={{ paddingRight: "10px", paddingLeft: "10px" }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className={classes.skillTitleStyle}>
                Programming Skills
              </Typography>

              {programming_skills.map((skill) => (
                <div key={skill.id} className={classes.skillBoxStyle}>
                  <div className={classes.eachSkillTitle}>
                    <Chip
                      label={skill.content}
                      color="primary"
                      size="small"
                      className={classes.chipStyle}
                    />
                  </div>
                  <ProgressBar
                    key={skill.id}
                    percentage={skill.percentage}
                    colorChange={skill.colorChange}
                  />
                </div>
              ))}
            </Grid>
            <Grid item item xs={12} md={6}>
              <Typography variant="h6" className={classes.skillTitleStyle}>
                Others
              </Typography>
              {other_skills.map((skill) => (
                <div key={skill.id} className={classes.skillBoxStyle}>
                  <div className={classes.otherSkillTitle}>
                    <Chip
                      label={skill.content}
                      color="secondary"
                      size="small"
                      className={classes.chipStyle}
                    />
                  </div>
                  <ProgressBar
                    key={skill.id}
                    percentage={skill.percentage}
                    colorChange={skill.colorChange}
                  />
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
