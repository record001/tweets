import React from "react";
import './Center.css'


function WhatHappen(){

  return(
    <div className="happen">

      <div className="happen_wrapper">
        <img className="profile" src="./images/center_img/Profile.png" alt="img" />

      <div className="happen_input">
        <input type="text" placeholder="What’s happening" />
        <div className="happen_icon">
          <img src="./images/center_img/image.png" alt="img" />
          <img src="./images/center_img/gif.png" alt="img" />
          <img src="./images/center_img/stats.png" alt="img" />
          <img src="./images/center_img/smile.png" alt="img" />
          <img src="./images/center_img/schedule.png" alt="img" />
        </div>
      </div>
      </div>
      

      <button className="happen_tweet_btn">Tweet</button>

    </div>
  )
}

export default WhatHappen