import { init } from 'ityped'
import { Button, Container } from '@material-ui/core';  // material ui
import { useEffect } from 'react';

const Intro = () => {

    
    useEffect(() => {
          const typeElement = document.querySelector('#typeElement')
        init(typeElement, { showCursor: false, strings: ['Software Developer']})
    });

    return ( 
        <div id="intro" className="intro-section">
            <h1 className="intro-title">Hello, <br/> I'm Yumi Machino</h1>
            <h1 className="intro-title-mobile">Hello, I'm <br/>Yumi Machino</h1>
            <div className="intro-subtitle">
             <div id="typeElement"></div>
            </div>
             <Button variant="contained" color="primary">View My Work</Button>  
        </div>
     );
}
 
export default Intro;