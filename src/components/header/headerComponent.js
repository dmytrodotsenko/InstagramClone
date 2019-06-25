import React from 'react'
import instagram_icon from '../../assets/instagram_icon.png'
import compas_icon from '../../assets/compas_icon.png';
import heart_icon from '../../assets/heart_icon.png'
import user_icon from '../../assets/user_icon.png'
import './header.css'

export const Header = (props) => {
 
    return (
      <div className = "header_div">
        <div className = "title_and_icon">
            <img src = {instagram_icon} alt = ""  className="icons"/>
            <p>Instagram</p>
        </div>
        <div className = "input">
            <input type = "text" placeholder = "search"/>
            
        </div>
        <div className = "right_icons">
        <img src = {compas_icon} alt = "" className="icons"/>
        <img src = {heart_icon} alt = "" className="icons"/>
        <img src = {user_icon} alt = "" className="icons"/>
        </div>

      </div>
    )
  }

