import React from "react";
import BirthdayImg from "../../assets/gift.png";
import AdImg from "../../assets/ad.jpg";
import ProfileImg1 from "../../assets/515.jpg";
import "./RightBar.css";
const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={BirthdayImg} alt="" />
          <span className="birthdayText">
            <b>John Cruz</b>
            <b> and </b>
            <b>2 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src={AdImg} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={ProfileImg1} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Mark Cruz</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
