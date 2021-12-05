import React from "react";
import { NavLink } from "react-router-dom";
import './Right.css'
import Revolution from "./Revolution";
import YouLike from "./YouLike";

function RightProfile() {
  
  return(
    <div className = "right">

      <div className="search">
        <img className="search_img" src="./images/right_img/search.png" alt="search" />
        <input className="search_input" type="text" placeholder ="Search Twitter" />

      </div>

      <div className="right_img_wrapper">
        <img src="./images/right_img/r1.png" alt="img" />
        <img src="./images/right_img/r2.png" alt="img" />
        <img src="./images/right_img/r3.png" alt="img" />
        <img src="./images/right_img/r4.png" alt="img" />
        <img src="./images/right_img/r5.png" alt="img" />
        <img src="./images/right_img/r6.png" alt="img" />
      </div>

      <YouLike />

      <div className="trends">
        <div className="trents_title">
          <h3>Trends for you</h3>
          <img src="./images/right_img/settings.png" alt="setting" />
        </div>

        <Revolution />
        <Revolution />
        <Revolution />
        

      <NavLink className="show_more_btn" to="/showMore">show more</NavLink>

      </div>


       

    </div>
  )
}

export default RightProfile