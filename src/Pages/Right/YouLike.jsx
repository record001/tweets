import React from "react";
import {NavLink} from 'react-router-dom'


function YouLike(){

  return(
    <div className="like">
      <h2>You might like</h2>

      <NavLink to="mushtariy" className="person">
        <img src="images/right_img/mushtariy.png" alt="avatar" />
        <div className="avatar_name">
          <h5>Mushtariy</h5>
          <p>@Mushtar56</p>
        </div>
        <NavLink className="right_follow_btn" to="mushtariy"> Follow</NavLink>
      </NavLink>

      <NavLink to="mushtariy" className="person">
        <img src="images/right_img/shuhrat.png" alt="avatar" />
        <div className="avatar_name">
          <h5>Shuhratbek</h5>
          <p>@mrshukhrat</p>
        </div>
        <NavLink className="right_follow_btn" to="mushtariy"> Follow</NavLink>
      </NavLink>

      <NavLink className="show_more_btn" to="/showMore">show more</NavLink>

    </div>
  )
}

export default YouLike