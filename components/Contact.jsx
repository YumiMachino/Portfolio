import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import { Grid, Typography,Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import emailjs from "emailjs-com";
import { useState } from 'react';
// import { TrendingUpRounded } from '@material-ui/icons';
// import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

/*
Style setting
 */
const useStyle = makeStyles({

    root: {
        height: 'fit-content',
        backgroundImage: "url('/astronomy.jpg') ",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop:'10vh',
        paddingBottom: '10vh',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        },
    sectionStyle: {
        backgroundColor: '#fff',
        padding: '28px',
        height: '60vh',
        }, 
    sectionTitle: {
        marginTop: '18px',
        fontWeight: 'bolder',
    },
    pStyle: {
        marginTop: '18px',
        marginBottom: '18px',
        padding: '12px',
        fontWeight: 'bolder',
    } ,      
    formStyle: {
        padding: '18px',
        textAlign: 'center',
    },  
    buttonStyle: {
        backgroundColor: '#303f9f',
        color: '#fff',
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%)',
        borderRadius: '4px',
        fontWeight: '545',
        fontSize: '0.875rem',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingRight: '18px',
        paddingLeft: '18px',
        marginTop: '2.5vh',
        fontWeight: 'bolder',
    },
     borderBottomStyle: {
        width: '120px',
        height: '2px',
        backgroundColor: '#303f9f',
        marginTop: '6px',
    },
});


const gitHubLink = "https://github.com/YumiMachino"
const linkedInLink = "https://www.linkedin.com/in/machi-no-058778210/"


const Contact = () => {
    const classes = useStyle();

    const sendEmail = (e) => {
        concole.log(e)
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_cv45din', e.target, 'user_YuoZ9Iwz3aJJQ3IumKsdX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <Grid
            className={classes.root}
            container
            alignItems="center"
            direction="row"
            id="contact"
        >
            <Grid 
                item 
                className={classes.sectionStyle}
                sm={12} md={6} lg={6} xl={6}>
                <Typography variant="h4" className={classes.sectionTitle}>Send A Message</Typography>
                <div className={classes.borderBottomStyle}/>
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
                        <input className={classes.buttonStyle} type="submit" value="SEND MESSAGES" />
                </form>
            </Grid>

            <Grid item 
                  className={classes.sectionStyle}
                  sm={12} md={6} lg={6} xl={6}>
                    <Typography 
                        variant="h4" 
                        className={classes.sectionTitle}
                        >Get in Touch
                        </Typography>
                        <div className={classes.borderBottomStyle}/>
                    <Typography 
                        variant="body1" 
                        className={classes.pStyle}
                        >Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                                Simply fill the from and send me an email.
                        </Typography>
                    <div>
                        <IconButton 
                            color="primary" 
                            aria-label="GitHub link" 
                            size="medium"
                            >
                            <a href={gitHubLink}> <GitHubIcon /></a>
                        </IconButton>
                        <IconButton 
                            color="primary" 
                            aria-label="GitHub link" 
                            size="medium"
                            >
                            <a href={linkedInLink}><LinkedInIcon /></a>
                        </IconButton>
                    </div>
            </Grid>
        </Grid>
      );
}
 
export default Contact;

