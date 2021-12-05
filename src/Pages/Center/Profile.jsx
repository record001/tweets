import React from "react";
import "./Center.css";
import Comments_profile from "./Comments_profile";

function Profile() {
  return (
    <div className="center_profile">
      <div className="center_top">
        <img src="./images/center_img/toLeft.png" alt="img" />
        <div className="center_title">
          <h2>Bobur</h2>
          <p>1,070 Tweets</p>
        </div>
      </div>

      <img
        className="header_img"
        src="./images/center_img/header_img.png"
        alt="img"
      />

      <div className="center_info">
        <img
          className="bobur_absolute"
          src="./images/center_img/bobur.png"
          alt="img"
        />
        <button className="edit_profile">Edit profile</button>
        <h2>Bobur</h2>
        <p>@bobur_mavlonov</p>

        <h6>
          UX&UI designer at <span>@abutechuz</span>{" "}
        </h6>

        <div className="info_wrapper">
          <div className="info">
            <img src="./images/center_img/location.png" alt="img" />
            <span>Mashag’daman</span>
          </div>
          <div className="info">
            <img src="./images/center_img/chain.png" alt="img" />
            <span>t.me/boburjon_mavlonov</span>
          </div>
          <div className="info">
            <img src="./images/center_img/born.png" alt="img" />
            <span>Born November 24, 2000</span>
          </div>
          <div className="info">
            <img src="./images/center_img/joined.png" alt="img" />
            <span>Joined May 2020</span>
          </div>
        </div>

        <div className="follower">
          <p>
            <span>67</span>Following
          </p>
          <p>
            <span>47</span>Followers
          </p>
        </div>

        <ul className="tab">
          <li className=" tab_li active_tab">Tweets</li>
          <li className="tab_li">Tweets & replies</li>
          <li className="tab_li">Media</li>
          <li className="tab_li">Likes</li>
        </ul>
      </div>

      <hr />

      <div className="comment_profile">
        <div className="pin">
          <img src="./images/center_img/pin.png" alt="img" />
          <p>Pinned Tweet</p>
        </div>

        <Comments_profile />
      </div>
    </div>
  );
}

export default Profile;
