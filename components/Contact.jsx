import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import emailjs from "emailjs-com";
import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@material-ui/core";

/*
Style setting
 */
// const font = "Raleway, sans-serif";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "fit-content",
    backgroundImage: "url('/astronomy.jpg') ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    paddingLeft: "16vw",
    paddingRight: "16vw",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "6vh",
      paddingBottom: "6vh",
      paddingLeft: "6vw",
      paddingRight: "6vw",
    },
  },
  sectionStyle: {
    backgroundColor: "#fff",
    padding: "28px",
    height: "70vh",
    [theme.breakpoints.down("sm")]: {
      padding: "12px",
      height: "fit-content",
      width: "80vw",
    },
  },
  sectionTitle: {
    marginTop: "18px",
    // fontFamily: font,
    [theme.breakpoints.down("sm")]: {
      marginTop: "6px",
      fontWeight: "bold",
    },
  },
  pStyle: {
    marginTop: "18px",
    marginBottom: "18px",
    padding: "12px",
    // fontFamily: font,
  },
  formStyle: {
    padding: "18px",
    textAlign: "center",
    // fontFamily: font,
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
    },
  },
  buttonStyle: {
    backgroundColor: "#303f9f",
    color: "#fff",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%)",
    borderRadius: "4px",
    fontWeight: "545",
    fontSize: "0.875rem",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingRight: "18px",
    paddingLeft: "18px",
    marginTop: "2.5vh",
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: "white",
      color: "#303f9f",
      size: "large",
      fontWeight: "bolder",
      transform: "scale(1.1)",
      transitionDuration: "0.3s",
      borderColor: "#303f9f",
    },
  },
  borderBottomStyle: {
    width: "120px",
    height: "2px",
    backgroundColor: "#303f9f",
    marginTop: "6px",
  },
  iconStyle: {
    width: "40px",
    height: "40px",
    "&:hover": {
      borderRadius: "50px",
      backgroundColor: "#303f9f",
      color: "white",
      transform: "scale(1.1)",
      transitionDuration: "0.3s",
    },
  },
}));

const gitHubLink = "https://github.com/YumiMachino";
const linkedInLink = "https://www.linkedin.com/in/yumi-machino/";

const Contact = () => {
  const classes = useStyle();

  const sendEmail = (e) => {
    concole.log(e);
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_cv45din",
        e.target,
        "user_YuoZ9Iwz3aJJQ3IumKsdX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      direction="row"
      id="contact"
    >
      <Grid item className={classes.sectionStyle} sm={12} md={6} lg={6} xl={6}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Send a message
        </Typography>
        <div className={classes.borderBottomStyle} />
        <form className={classes.formStyle} onSubmit={sendEmail}>
          <TextField
            id="outlined-full-width"
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
          />
          <TextField
            id="outlined-full-width"
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
          />
          <TextField
            id="outlined-full-width"
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
            name="subject"
          />
          <TextField
            id="outlined-full-width"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="message"
          />
          <input
            className={classes.buttonStyle}
            type="submit"
            value="SEND A MESSAGE"
          />
        </form>
      </Grid>

      <Grid item className={classes.sectionStyle} sm={12} md={6} lg={6} xl={6}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Get in touch
        </Typography>
        <div className={classes.borderBottomStyle} />
        <Typography variant="body1" className={classes.pStyle}>
          I'd love to hear from you! Simply fill the form and send me an email.
          <br />
          Or check my work in Github or connect with me on LinkedIn.
        </Typography>
        <div>
          <IconButton color="primary" aria-label="GitHub link" size="medium">
            <a href={gitHubLink}>
              <GitHubIcon className={classes.iconStyle} />
            </a>
          </IconButton>
          <IconButton color="primary" aria-label="GitHub link" size="medium">
            <a href={linkedInLink}>
              <LinkedInIcon className={classes.iconStyle} />
            </a>
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
