import React from "react";
import "./Center.css";

function Comments_profile() {
  return (
    <div className="comment_wrapper">
      <div className="comment">
        <img src="./images/center_img/Profile.png" alt="img" />

        <div className="comment_content">
          <div className="comment_title">
            <h2>Bobur</h2> <span>@bobur_mavlonov · Apr 1</span>
          </div>
          <p>
            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish
            uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va
            jismoniy holatni normallashtirishni reja qildim
          </p>
          <div className="comment_icons">
            <div className="comment_icon">
              <img src="./images/center_img/comment.png" alt="img" />
              <span>10</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/retweet.png" alt="img" />
              <span>1</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/like.png" alt="img" />
              <span>8</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/sendIt.png" alt="img" />
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/diagram.png" alt="img" />
            </div>
          </div>
        </div>

        <img
          className="comment_dots"
          src="./images/right_img/dots.png"
          alt="img"
        />
      </div>

      <hr />

      <div className="comment">
        <img src="./images/center_img/Profile.png" alt="img" />

        <div className="comment_content">
          <div className="comment_title">
            <h2>Bobur</h2> <span>@bobur_mavlonov · Apr 1</span>
          </div>
          <p>
            Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
            deyayotganimizga qarab ham o'tirmaymiz. <br /> Bitta biznes trener nito
            gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom
            aqlli odamlar nazdida. <br /> Gap faqat biznes trenerlar haqida emas.
          </p>
          <div className="comment_icons">
            <div className="comment_icon">
              <img src="./images/center_img/comment.png" alt="img" />
              <span>10</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/retweet2.png" alt="img" />
              <span className="green_number">5</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/likered.png" alt="img" />
              <span className="red_number">9</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/sendIt.png" alt="img" />
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/diagram.png" alt="img" />
            </div>
          </div>
        </div>

        <img
          className="comment_dots"
          src="./images/right_img/dots.png"
          alt="img"
        />
      </div>

      <hr />

      <div className="comment">
        <img src="./images/center_img/Profile.png" alt="img" />

        <div className="comment_content">
          <div className="comment_title">
            <h2>Bobur</h2> <span>@bobur_mavlonov · Apr 1</span>
          </div>
          <p>
          A bo'pti maskamasman
          </p>

          <img className="meet" src="./images/center_img/dreaming.png" alt="meet" />

          <div className="comment_icons">
            <div className="comment_icon">
              <img src="./images/center_img/comment.png" alt="img" />
              <span>10</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/retweet.png" alt="img" />
              <span>1</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/like.png" alt="img" />
              <span>8</span>
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/sendIt.png" alt="img" />
            </div>
            <div className="comment_icon">
              <img src="./images/center_img/diagram.png" alt="img" />
            </div>
          </div>
        </div>

        <img
          className="comment_dots"
          src="./images/right_img/dots.png"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Comments_profile;
