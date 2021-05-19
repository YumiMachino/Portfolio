import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    /*change navbar color when scrolled*/
    const changeNavbarColor = () => {
        console.log("changin scroll")
     console.log(window.scrollY);
    }

    return (
       <div id="top" className={colorChange ? 'navbarColorChange' : 'navbar' }>
           <div className='navbar-container'>
               <a href="/" className={colorChange ? 'changeLogoColor' : 'navbar-logo'} onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={['fa', 'user']} />
               </a>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={ click ? ['fas','times'] : ['fas', 'bars']} />
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