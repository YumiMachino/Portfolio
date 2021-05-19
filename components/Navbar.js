import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { blue } from "@material-ui/core/colors";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', changeNavbarColor)
  })

    /*change navbar color when scrolled*/
    const changeNavbarColor = () => {
        console.log('scroll event', window.scrollY)
        if (window.scrollY >= 100) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }

    // const iconStyling = () => {
    //     if (click === true && setColorChange === true) {
    //         icon:['fas,' 'times'];
    //     }
    //     console.log("temp...")
    // }

   
 
    return (
       <div id="top" className={colorChange ? 'navbarColorChange' : 'navbar' }>
           <div className='navbar-container'>
               <a href="/" className={colorChange ? 'changeLogoColor' : 'navbar-logo'} onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={['fa', 'user']} />
               </a>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={ click ? ['fas','times'] : ['fas', 'bars']} />
                     {/* <FontAwesomeIcon onClick={iconStyling} icon={['fas','times']} /> */}
                </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'}  
                    >
                        <a 
                            href="#top"  
                            className={colorChange ? 'linkLetterColorChange' : 'nav-links' } 
                            onClick={closeMobileMenu}
                            >
                                HOME
                            </a>
                    </li>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'}>
                        <a 
                            href="#about" 
                            className={colorChange ? 'linkLetterColorChange' : 'nav-links' }  
                            onClick={closeMobileMenu}
                            >
                                ABOUT
                            </a>
                     </li>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'} 
                    >
                        <a
                            href='#work'
                            className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                            onClick={closeMobileMenu}
                        >
                            WORK
                            </a>

                    </li>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'}  
                    >
                        <a
                            href='#contact'
                            className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                            onClick={closeMobileMenu}
                            >CONTACT</a>
                    </li>
           </ul>
         </div>
       </div>
      );
}
 
export default Navbar;