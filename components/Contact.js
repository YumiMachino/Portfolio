import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import { spacing } from '@material-ui/system';      //for space setting inside Box
import { Button, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import React, { useState } from 'react'
import { red } from '@material-ui/core/colors';
import { ControlCameraOutlined } from '@material-ui/icons';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import emailjs from "emailjs-com";

const Contact = () => {
    /* event handlers*/
    const sendEmail = (e) => {
        e.preventDefault();

     emailjs.sendForm('gmail', 'template_cv45din', e.target)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    const gitHubLink = "https://github.com/YumiMachino"
    const linkedInLink = "https://www.linkedin.com/in/machi-no-058778210/"

    const astronomy = <Image src="/astoronomy.jpg" width={500}  height={500}/>
   
    // import astronomy from '../img/astronomy.jpg'
    return ( 
        <Box 
            id="contact"
            width={1} 
            height="100%"
            // style = {{backgroundImage: `url(${astronomy})`}}
            m = {0}
            p = {4} 
        >
            <Box
                m={10}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                >
                 <Box
                    bgcolor="#fff"
                    width={1}
                    display="flex"
                    flexDirection="column"
                    p={8}
                    >
                    <div>
                        <h5 className="title-left">Send A Message</h5>
                    </div>

                    <form onSubmit={sendEmail}>
                        <TextField
                            id="outlined-full-width"
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            style={{margin: 20}}
                            name="name"
                             />
                         <TextField
                            id="outlined-full-width"
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            style={{margin: 20}}
                            name="email"
                             />
                        <TextField
                            id="outlined-full-width"
                            label="Subject"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            style={{margin: 20}}
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
                            style={{margin: 20}}
                            name="message"
                             />
                         <div className="btn-style">
                                <input className="send-btn" type="submit" value="SEND MESSAGES" />
                            </div>           
                     </form>
                 </Box>

                <Box
                    bgcolor="#fff"
                    width={1}
                    display="flex"
                    flexDirection="column"
                    p={8}
                    >
                     <div>
                        <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div class="self-intro">
                        <p>
                            Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                            Simply fill the from and send me an email.
                        </p>
                    </div>
                    <div className="link-section">
                        <IconButton color="primary" aria-label="GitHub link" size="medium">
                            <a href={gitHubLink}> <GitHubIcon /></a>
                        </IconButton>
                         <IconButton color="primary" aria-label="GitHub link" size="medium">
                            <a href={linkedInLink}><LinkedInIcon /></a>
                        </IconButton>
                    </div>
                 </Box>
            </Box>
        </Box>
     );
}
 
export default Contact;