import React from 'react'
import './Footer.css'
import swiggy from '../../assets/swiggy.png'
import zomato from '../../assets/zomato.png'
import googlemaps from '../../assets/googlemaps.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='foot_list'>
            <li>Contact: </li>
            <li>Address: </li>
        </ul>
        <div className='reference'>
            <img src={swiggy} alt='' className='delivery'/>
            <img src={zomato} alt='' className='delivery'/>
            <img src={googlemaps} alt='' className='icons'/>
            <img src={facebook} alt='' className='icons'/>
            <img src={instagram} alt='' className='icons'/>
        </div>
    </div>
  )
}

export default Footer