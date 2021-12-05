import React from "react";
import './Center.css'
import WhatHappen from "./WhatHappen";
import Comments from "./Comments";

function Home() {
  
  return(
    <div className = "home">

      <nav className="nav">
        <h2>Home</h2>
        <img src="./images/center_img/stars.png" alt="img" />
      </nav>

      <hr />

      <WhatHappen />

      <hr />

      <Comments />


    </div>
  )
}

export default Home