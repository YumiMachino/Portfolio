import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import { Button, Grid, Typography, Box } from '@material-ui/core';
import { useEffect } from 'react';
import Typist from 'react-typist';

const useStyle = makeStyles({

        sectionStyle: {
            width: '100%',
            height: '860px',
            backgroundImage: "url('/earth.jpg') ",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: 'white',
        },
        introTitle: {
            marginTop: '25vh',
            marginLeft: '10vh',
            marginRight: '10vh',
            fontSize: '72px',
        },
        typingAnimation: {
            marginTop: '5vh',
            marginBottom: '5vh',
            fontWeight: 'lighter'
        },
    })


const Intro_rev = () => {

    const classes = useStyle();   

    return ( 
            <Grid 
                className={classes.sectionStyle}
                container
                alignItems="center"
                direction="column"
            >
                <Grid item >
                    <h1 className={classes.introTitle}>Hi, I'm Yumi Machino</h1>                
                </Grid>
                <Grid item>
                    <h1 className={classes.typingAnimation}>
                        <Typist>Software Developer</Typist>
                    </h1>
                </Grid>
                <Button variant="contained" color="primary">View My Work</Button>  

            </Grid>
     );
}
 
export default Intro_rev;