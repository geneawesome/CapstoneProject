import React from "react";
import ProfileBg from "../../assets/4835.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostImg from "../../assets/meta.png";
import SunImg from "../../assets/sunset.jpg";
import SeaImg from "../../assets/sea.jpg";
import NatureImg from "../../assets/nature.jpg";
import LikeIcon from "../../assets/like.png";
import HeartIcon from "../../assets/heart.png";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={ProfileBg} alt="" />
            <span className="postUsername">FriendLink</span>
            <span className="postDate">2 minsago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! KodeGo This is our Last Project</span>
          <img className="postImg" src={PostImg} alt=" " />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={LikeIcon} alt="" />
            <img className="likeIcon" src={HeartIcon} alt="" />
            <span className="postLikeCounter">10 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hello Sunset</span>
          <img className="postImg" src={SunImg} alt=" " />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={LikeIcon} alt="" />
            <img className="likeIcon" src={HeartIcon} alt="" />
            <span className="postLikeCounter">10 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">20 comments </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Calm and Peaceful view</span>
          <img className="postImg" src={SeaImg} alt=" " />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={LikeIcon} alt="" />
            <img className="likeIcon" src={HeartIcon} alt="" />
            <span className="postLikeCounter">15 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">6 comments </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Calm and Peaceful view</span>
          <img className="postImg" src={NatureImg} alt=" " />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={LikeIcon} alt="" />
            <img className="likeIcon" src={HeartIcon} alt="" />
            <span className="postLikeCounter">16 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
