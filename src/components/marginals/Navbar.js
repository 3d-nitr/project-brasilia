import { useState } from 'react'
import React  from 'react'
import './Navbar.css'
//import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [showmenu , setshowmenu] = useState(false)
  return (
    <>
    <nav className = "main-nav">
        <div className = "logo">
            <img width="70px" src='/NIT_Rourkela_Colour_Logo.svg.png' alt='logo'></img>
        </div>

        <div className= {showmenu ? "menu-link mobile-menu" : "menu-link"}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a href='#about-section'>About</a>
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
                </li>
                <li>
                <Link to='/register'>Register</Link>
                </li>
            </ul>

            <div className='hamburger-menu'>
                <a onClick={() => {
                    setshowmenu(!showmenu)
                }} href='#'> icon</a>
            </div>
        </div>
    </nav>




  
        
    </>
  )
}

export default Navbar