import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import { Button, Grid, Typography, Box } from '@material-ui/core';
import Typist from 'react-typist';

/*
Style setting
 */
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
                <Grid item >
                    <Typography variant="h1" className={classes.introTitle}>Hi, I'm Yumi Machino</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.typingAnimation}>  <Typist>Software Developer</Typist></Typography>
                </Grid>
                <Button variant="contained" color="primary">View My Work</Button>  
            </Grid>
     );
}
 
export default Intro;