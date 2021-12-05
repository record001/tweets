import React from "react";
import './Left.css'
import {NavLink} from 'react-router-dom'

function Left() {
  
  return(
    <div className = "left">
      <img className = "logo" src="./images/left_img/logo.svg" alt="pic"  width="40" height = "33"/>

      <div className = "left_wrapper">
       <NavLink className="left_link" to="/"><img src="./images/left_img/home.png" alt="home" /> Home</NavLink>
       <NavLink className="left_link" to="/Explore"><img src="./images/left_img/explore.png" alt="home" /> Explore</NavLink>
       <NavLink className="left_link" to="/Notifications"><img src="./images/left_img/notification.png" alt="home" /> Notifications</NavLink>
       <NavLink className="left_link" to="/Messages"><img src="./images/left_img/messages.png" alt="home" /> Messages</NavLink>
       <NavLink className="left_link" to="/Bookmarks"><img src="./images/left_img/bookmarks.png" alt="home" /> Bookmarks</NavLink>
       <NavLink className="left_link" to="/Lists"><img src="./images/left_img/lists.png" alt="home" /> Lists</NavLink>
       <NavLink className="left_link" to="/Profile"><img src="./images/left_img/profile.png" alt="home" /> Profile</NavLink>
       <NavLink className="left_link" to="/More"><img src="./images/left_img/more.png" alt="home" /> More</NavLink>
      </div>

      <NavLink className = "tweet_btn" to="/Tweet"> Tweet</NavLink>
      
    </div>
  )
}

export default Left