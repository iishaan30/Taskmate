import React, {useState} from 'react'
import "./navstyle.css";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <nav className='main-nav'>
        
        <div className='logo'>
            <h2>TaskMate</h2>
        </div>

        <div className = {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}> 
            <ul>
                <li>
                    <a href="#">Todo</a>
                </li>
            
                <li>
                    <a href="#">Project</a>
                </li>
            
                <li>
                    <a href="#">Team</a>
                </li>
            </ul>
            
        </div>
        <div className='hamburger-menu'>
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu id="hamburger"/>
                </a>
            </div>
    </nav>
    </>
  )
}

export default Navbar