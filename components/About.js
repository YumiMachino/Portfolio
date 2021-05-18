import ProgressBar from './ProgressBar';

const About = () => {

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
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        },
        {
          id: "second-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        }
    ]    

    return ( 
        <div id="about" className="about-section">
            <div className="about-wrapper">
                <div className="about-container">

                    <div className="skills">
                        <h5 className="skill_category">Programming Skills:</h5>
                        {programming_skills.map((skill) => (
                            <div key={skill.id}>
                                <div className="skill-name">
                                    <span className="skill-name-left">{skill.content}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                 <ProgressBar key={skill.id} percentage={skill.percentage}/>
                            </div>
                        ))}
                        <h5 className="skill_category">Frameworks/Tools:</h5>
                          {other_skills.map((skill) => (
                            <div key={skill.id}>
                                <div className="skill-name">
                                    <span className="skill-name-left">{skill.content}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <ProgressBar key={skill.id} percentage={skill.percentage}/>
                            </div>
                        ))}
                    </div>

                    <div className="about-me">
                        <h5 className="title-left">About Me</h5>
                        <div className="intro-paragraph">
                            {self_intro.map((paragraph) => (
                                <div className="self-intro" key={paragraph.id}>
                                    <span>{paragraph.content}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;