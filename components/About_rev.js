import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProgressBar from './ProgressBar';

/*
my personal data
*/
const programming_skills = [
        {id: "HTML_skill", content: "HTML", percentage: 90},
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

/*
Styles
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
    },
    titleStyle: {
        marginLeft: '20px',
        marginTop: '5vh',
    },
})

const About_rev = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <Grid  
                className={classes.sectionStyle}
                container
                justify="center"
                text-aligh="center"
             >
                <Grid item
                    sm = {12} md={6} lg={6} xl={6}> 
                     <h1 className={classes.skillTitleStyle}>Programming Skills:</h1>
                      {programming_skills.map((skill) => (
                            <div key={skill.id}>
                                <div className="skill-name">
                                    <span className="skill-name-left">{skill.content}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                 <ProgressBar key={skill.id} percentage={skill.percentage}/>
                            </div>
                        ))}
                        <h1 className={classes.skillTitleStyle}>Frameworks/Tools:</h1>
                     {other_skills.map((skill) => (
                            <div key={skill.id}>
                                <div className="skill-name">
                                    <span className="skill-name-left">{skill.content}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <ProgressBar key={skill.id} percentage={skill.percentage}/>
                            </div>
                        ))}
                </Grid>
                 <Grid item
                    sm = {12} md={6} lg={6} xl={6}>
                     <h1 className={classes.titleStyle}>About Me</h1>
                      {self_intro.map((paragraph) => (
                                <div className="self-intro" key={paragraph.id}>
                                    <span>{paragraph.content}</span>
                                </div>
                            ))}
                </Grid>
                
            </Grid>

            
            
           

        </div>

     );
}
 
export default About_rev;