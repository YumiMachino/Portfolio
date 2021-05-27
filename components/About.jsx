import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';
import { Grid, Typography, Hidden, Chip } from '@material-ui/core';

/*
my personal data
*/

const programming_skills = [
    {id: "HTML_skill", content:"HTML", percentage: 90, colorChange: false},
    {id: "CSS_skill", content: "CSS", percentage: 70, colorChange: false },
    {id: "JavaScript_skill", content:"JavaScript", percentage:85, colorChange: false },
    {id: "Swift_skill", content: "Swift", percentage:80, colorChange: false },
    {id: "Objective-C_skill", content: "Objective-C", percentage:70, colorChange: false },
    {id: "Java_skill", content: "Java", percentage: 60, colorChange: false},
    {id: "Python_skill", content: "Python", percentage: 70,colorChange: false }
]

const other_skills = [
    {id: "iOS_skill", content:"iOS Development", percentage: 70, colorChange: true },
    {id: "React_skill", content: "React", percentage: 75, colorChange: true },
    {id: "Nextjs_skill", content: "Node.js", percentage: 75, colorChange: true },
    {id: "Nodejs_skill", content: "Next.js", percentage: 75, colorChange: true },
    {id: "Git_skill", content:"Git", percentage: 60, colorChange: true },
    {id: "Bash_skill", content:"Bash", percentage: 60, colorChange: true }
]

const self_intro = [
    {
        id: "first-p-about",
        content:
            "Hello! I'm Yumi Machino, a motivated web developer/iOS developer based in Vancouver, Canada🇨🇦"
    },
    {
        id: "second-p-about",
        content:
            "I have learned solid working level of Front-End development including HTML, CSS, JavaScript and React as well as iOS development with Swift. I enjoy working in a team, also have fun working myself while challenging new things. My motto is to have fun learning!"
    },
     {
        id: "third-p-about",
        content:
            "Apart from programming, I'm passionate about travellng✈️, meeting with people from different backgrounds and learn their culture always excites me! I also love watching animes and reading comics📕."
    },
    {
        id: "forth-p-about",
        content:
            "My language skillset is both native proficiency of Japanese and professional working proficiency of English. "
    }
]


/*
Style setting
*/

const useStyles = makeStyles((theme) => ({
     root: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        paddingLeft: '16vw',
        paddingRight: '16vw',
        paddingBottom: '6vh',
        paddingTop: '6vh',
         [theme.breakpoints.down('sm')]: {
            paddingLeft: '8vw',
            paddingRight: '8vw',
            paddingTop: '4vh',
            paddingBottom: '4vh',
        },
    },
    sectionStyle: {
       backgroundColor: 'white',
       height: 'fit-content',
       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
       paddingBottom: '5vh',
       paddingLeft: '20px',
       paddingRight: '20px',
         [theme.breakpoints.down('sm')]: {
            paddingTop: '2vh',
            paddingBottom: '2vh',
        },
    },
    skillTitleStyle: {
        color: '#1f1f1f',
        textAlign: 'left',
        marginLeft: '10px',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
            marginTop: '1.8vh',
            marginBottom: '1.8vh',
            textAlign: 'center',
        },
    },
    titleStyle: {
        marginLeft: '10px',
        marginTop: '2.5vh',
        fontWeight: "bolder",
    },
    eachSkillTitle: {
        marginLeft:'20px',
        marginRight: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bolder',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'0px',
            marginRight: '0px',
        },
    },
    pStyle: {
        marginTop: '18px',
        marginBottom: '18px',
        padding: '12px',
        marginRight: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '4px',
            marginBottom: '4px',
            padding: '4px',
            fontSize: "14px",
        },
    },
    borderBottomStyle: {
        width: '120px',
        marginLeft: '20px',
        height: '2px',
        backgroundColor: '#303f9f',
        marginTop: '6px',
        [theme.breakpoints.down('sm')]: {
            width: '60px',
            height: '2px',
            marginTop: '3px',
            marginBottom: '6px',
            marginLeft: '8px',
        },
    },
}));


const About = () => {
    const classes = useStyles();
   
    return ( 
        <div className={classes.root} id="about">
            <Grid  
                className={classes.sectionStyle}
                container
                justify="center"
                text-align="center"
                >
                <Grid 
                    item
                    xs={12} sm = {12} md={6} lg={6} xl={6}
                    > 
                    <Typography 
                        variant="h6" 
                        className={classes.skillTitleStyle}
                        >Programming Skills
                        </Typography>
                    {programming_skills.map((skill) => (
                        <div key={skill.id}>
                            <div className={classes.eachSkillTitle}>
                                <Typography 
                                    variant="subtitle1"
                                    > <Chip 
                                        label={skill.content} 
                                        color="primary" 
                                        size="small"
                                        />
                                    </Typography>
                                <Typography 
                                    variant="subtitle1"
                                    >{skill.percentage}
                                    </Typography>
                            </div>
                            <ProgressBar 
                                key={skill.id} 
                                percentage={skill.percentage}
                                colorChange={skill.colorChange}
                                />
                        </div>
                    ))
                    }
                    <Typography 
                        variant="h6" 
                        className={classes.skillTitleStyle}
                        >Frameworks/Tools
                        </Typography>
                    {other_skills.map((skill) => (
                        <div 
                            key={skill.id} 
                            >
                            <div className={classes.eachSkillTitle}>  
                                <Typography 
                                    variant="subtitle1"
                                    > <Chip 
                                        label={skill.content} 
                                        color="secondary" 
                                        size="small" 
                                        />
                                    </Typography>
                                <Typography 
                                    variant="subtitle1"
                                    >{skill.percentage}%
                                    </Typography>
                            </div>
                            <ProgressBar 
                                key={skill.id} 
                                percentage={skill.percentage}
                                colorChange={skill.colorChange}
                                />
                        </div>
                    ))
                    }
                </Grid>
                 <Grid 
                    item
                    sm = {12} md={6} lg={6} xl={6}
                    >
                    <Typography 
                        variant="h5" 
                        className={classes.titleStyle}
                        >About Me
                        </Typography>
                    <div className={classes.borderBottomStyle} />    
                    {self_intro.map((paragraph) => (
                        <div  key={paragraph.id}>
                            <Typography 
                                variant="body1" 
                                className={classes.pStyle}
                                >{paragraph.content}
                                </Typography>
                        </div>
                    ))}
                </Grid>      
            </Grid>
        </div>
     );
}
 
export default About;
