import React from 'react'
import "./Navbar.css"
import logo_light from "../../assets/logo-black.png"
import logo_dark from "../../assets/logo-white.png"
import search_light from "../../assets/search-w.png"
import search_dark from "../../assets/search-b.png"
import toggle_light from "../../assets/night.png"
import toggle_dark from "../../assets/day.png"

const Navbar = ({Theme, setTheme}) => {

    const toggle_mode = () => {
        Theme == 'light'? setTheme('dark'): setTheme('light');
    }
  
    return (
    <div className='navbar'>
        <img src={Theme=='light'?logo_light:logo_dark} alt='' className='logo'/>
        <ul className='navbar_list'>
            <li>About</li>
            <li>Menu</li>
            <li>Reviews</li>
            <li>Contact</li>
        </ul>
        
        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={Theme=='light'?search_light:search_dark} alt=''/>
        </div>

        <img onClick={() => {toggle_mode()}} src={Theme=='light'?toggle_light:toggle_dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar