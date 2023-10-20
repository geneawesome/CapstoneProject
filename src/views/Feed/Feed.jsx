import React from "react";
import Share from "../Share/Share";
import Post from "../../components/Post/Post";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share />
      <Post />
    </div>
  );
};

export default Feed;
