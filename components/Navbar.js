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
               <div className={colorChange ? 'changeLogoColor' : 'navbar-logo'} onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={['fa', 'user']} />
               </div>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={ click ? ['fas','times'] : ['fas', 'bars']} />
                </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'}  
                    onClick={closeMobileMenu}>
                        HOME
                    </li>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'}  
                    onClick={closeMobileMenu}>
                        ABOUT
                     </li>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'} 
                    onClick={closeMobileMenu}>
                        WORK
                    </li>
                <li 
                    className={colorChange ? 'changeUnderLine' : 'nav-item'}  
                    onClick={closeMobileMenu}>
                        CONTACT
                    </li>
           </ul>
         </div>
       </div>
      );
}
 
export default Navbar;