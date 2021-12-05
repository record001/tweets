import "./App.css";
import "./fonts.css";
import React from "react";

import { Routes, Route } from "react-router";

// Components:
import Left from "./Pages/Left/Left";
//center:
import Home from "./Pages/Center/Home";
import Profile from "./Pages/Center/Profile";
import ForAll from "./Pages/Center/ForAll";
// right:
import Right from "./Pages/Right/Right";
import RightProfile from "./Pages/Right/RightProfile";

function App() {
  return (
    <div className="container">
      <div className="home_wrapper">
        <Left />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/*" element={<ForAll />} />
        </Routes>
        
        <Routes>
          <Route path="/" element={<Right />}/>
          <Route path="/Profile" element={<RightProfile />}/>
          <Route path="/*" element={<ForAll />} />

        </Routes>
        
      </div>
    </div>
  );
}

export default App;
