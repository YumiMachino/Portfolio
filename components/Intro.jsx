import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import Typist from "react-typist";

/*
Style setting
 */
// const font = "Raleway, sans-serif";

const useStyle = makeStyles((theme) => ({
  sectionStyle: {
    width: "100%",
    height: "95vh",
    backgroundImage: "url('/earth.jpg') ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  },
  introTitle: {
    marginTop: "30vh",
    marginLeft: "10vh",
    marginRight: "10vh",
    fontSize: "72px",
    fontWeight: "600",
    // fontFamily: font,
    // fontFamily: theme.typography,
    [theme.breakpoints.down("sm")]: {
      marginTop: "20vh",
      fontSize: "44px",
      marginLeft: "3.5vw",
      marginRight: "3.5vw",
    },
  },
  typingAnimation: {
    marginTop: "5vh",
    marginBottom: "5vh",
    fontWeight: "400",
    marginLeft: "3vw",
    marginRight: "3vw",
    textAlign: "center",
    // fontFamily: font,
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      marginLeft: "3.5vw",
      marginRight: "3.5vw",
      marginBottom: "8vh",
    },
  },
  btnStyle: {
    // fontFamily: "Raleway, sans-serif",
    fontWeight: "600",
  },
}));

const Intro = () => {
  const classes = useStyle();

  return (
    <Grid
      className={classes.sectionStyle}
      container
      alignItems="center"
      direction="column"
      id="top"
    >
      <Grid item>
        <Typography variant="h1" className={classes.introTitle} align="center">
          Hello, I am Yumi Machino.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.typingAnimation}>
          <Typist>Front End Developer</Typist>
        </Typography>
      </Grid>
      <Button
        href="#work"
        variant="contained"
        color="primary"
        className={classes.btnStyle}
      >
        View My Work
      </Button>
    </Grid>
  );
};

export default Intro;
