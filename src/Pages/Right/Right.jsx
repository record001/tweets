import React from "react";
import { NavLink } from "react-router-dom";
import './Right.css'
import Revolution from "./Revolution";
import YouLike from "./YouLike";

function Right() {
  
  return(
    <div className = "right">

      <div className="search">
        <img className="search_img" src="./images/right_img/search.png" alt="search" />
        <input className="search_input" type="text" placeholder ="Search Twitter" />

      </div>

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

      <YouLike />

        <div className="policy">
          <div className="policy_top">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          </div>

          <div className="policy_top">
          <p>Imprint</p>
          <p>Ads Info</p>
          <p>More ···</p>
          <p>© 2021 Twitter, Inc.</p>
          </div>
        </div>

    </div>
  )
}

export default Right