import React from "react";
import "./Center.css";

function Comments() {
  return (
    <div className="comment_wrapper">
      <div className="comment">
        <img src="./images/center_img/Design.png" alt="img" />

        <div className="comment_content">
          <div className="comment_title">
            <h2>Designsta</h2> <span>@inner · 25m</span>
          </div>
          <p>
            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
            zerikmadinglarmi?
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
        <img src="./images/center_img/Raj.png" alt="img" />

        <div className="comment_content">
          <div className="comment_title">
            <h2>cloutexhibition</h2> <span>@RajLahoti · 22m</span>
          </div>
          <p>
            YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
            Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
            ko’rib hursand bo’ladi odam.
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
        <img src="./images/center_img/CreatePh.png" alt="img" />

        <div className="comment_content">
          <div className="comment_title">
            <h2>CreativePhoto</h2> <span>@cloutexhibition · 1h</span>
          </div>
          <p>Обетда..... <br /> Кечиринглар</p>

            <img className="meet" src="./images/center_img/meet.png" alt="meet" />

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

        <img className="comment_dots" src="./images/right_img/dots.png" alt="img" />
      </div>
    </div>
  );
}

export default Comments;
