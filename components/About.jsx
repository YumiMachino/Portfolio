import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProgressBar from './ProgressBar';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



/*
my personal data
*/



const programming_skills = [
    {id: "HTML_skill", content:"HTML", percentage: 90},
    {id: "CSS_skill", content: "CSS", percentage: 70},
    {id: "JavaScript_skill", content:"JavaScript", percentage:85},
    {id: "Swift_skill", content: "Swift", percentage:80},
    {id: "Objective-C_skill", content: "Objective-C", percentage:70},
    {id: "Java_skill", content: "Java", percentage: 60},
    {id: "Python_skill", content: "Python", percentage: 70}
]

const other_skills = [
    {id: "iOS_skill", content:"iOS Development", percentage: 70},
    {id: "Web_skill", content: "React(Next.js)", percentage: 75},
    {id: "Tool_skill", content:"Git, Bash", percentage: 60}
]

const self_intro = [
    {
        id: "first-p-about",
        content:
            "I'm a passionate web developer/iOS developer student living in Vancouver, Canada."
    },
    {
        id: "second-p-about",
        content:
            "My language skill is native proficiency of Japanese and professional working proficiency of English. I enjoy working in a team and am eager to learn new things!"
    }
]

const config = { mass: 5, tension: 2000, friction: 200 };

/*
Style setting
*/
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        paddingLeft: '8.5vw',
        paddingRight: '8.5vw',
        paddingBottom: '8vh',
        paddingTop: '8vh',
    },
    sectionStyle: {
       backgroundColor: 'white',
       height: 'fit-content',
       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
       paddingBottom: '5vh',
    },
    skillTitleStyle: {
        fontSize: '20px',
        color: '#1f1f1f',
        textAlign: 'left',
        marginLeft: '20px',
        marginTop: '5vh',
        marginBottom: '5vh',
        fontWeight: 'bolder',
    },
    titleStyle: {
        marginLeft: '20px',
        marginTop: '5vh',
        fontWeight: "bolder",
    },
    eachSkillTitle: {
        marginLeft:'20px',
        marginRight: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bolder',
    },
    pStyle: {
        marginTop: '18px',
        marginBottom: '18px',
        padding: '12px',
        marginRight: '20px',
        fontWeight: 'bolder',
    },
    borderBottomStyle: {
        width: '120px',
        marginLeft: '20px',
        height: '2px',
        backgroundColor: '#303f9f',
        marginTop: '6px',
    },
})


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
                    sm = {12} md={6} lg={6} xl={6}
                    > 
                    <Typography 
                        variant="h4" 
                        className={classes.skillTitleStyle}
                        >Programming Skills</Typography>
                    {programming_skills.map((skill) => (
                        <div key={skill.id} style={{margin: '10px'}}>
                            <div className={classes.eachSkillTitle}>
                                <Typography 
                                    variant="subtitle1"
                                    > {skill.content}
                                    </Typography>
                                <Typography 
                                    variant="subtitle1"
                                    >{skill.percentage}%
                                    </Typography>
                            </div>
                            <ProgressBar 
                                key={skill.id} 
                                percentage={skill.percentage}
                                />
                        </div>
                    ))}
                    <Typography 
                        variant="h4" 
                        className={classes.skillTitleStyle}
                        >Frameworks/Tools
                        </Typography>
                    {other_skills.map((skill) => (
                        <div 
                            key={skill.id} 
                            style={{margin: '20px'}}
                            >
                            <div className={classes.eachSkillTitle}>  
                                <Typography 
                                    variant="subtitle1"
                                    >{skill.content}
                                    </Typography>
                                <Typography 
                                    variant="subtitle1"
                                    >{skill.percentage}%
                                    </Typography>
                            </div>
                            <ProgressBar 
                                key={skill.id} 
                                percentage={skill.percentage}
                                />
                        </div>
                    ))}
                </Grid>
                 <Grid 
                    item
                    sm = {12} md={6} lg={6} xl={6}
                    >
                    <Typography 
                        variant="h3" 
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