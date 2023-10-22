import React from "react";
import BirthdayImg from "../../assets/gift.png";
import AdImg from "../../assets/ad.jpg";
import ProfileImg1 from "../../assets/515.jpg";
import ProfileImg2 from "../../assets/Boy1.jpg";
import ProfileImg3 from "../../assets/girl.jpeg";
import ProfileImg4 from "../../assets/p1.jpeg";
import ProfileImg5 from "../../assets/p2.jpeg";
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={ProfileImg2} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mark Anthony Aguilar</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={ProfileImg3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Margie Ann Manuel</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={ProfileImg4} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Anna Mae Pobla</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={ProfileImg5} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kathy Ann Angeles</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
