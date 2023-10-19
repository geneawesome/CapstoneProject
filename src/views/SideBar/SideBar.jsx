import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import Person from "../../assets/10.jpeg";
import Person1 from "../../assets/p1.jpeg";
import Person2 from "../../assets/p2.jpeg";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  ImportExport,
} from "@mui/icons-material";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem ">
            <Chat className="sidebarIcon" />
            <Link to="/chats" className="sidebarListItemText">
              Chats
            </Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <Link to="/videos" span className="sidebarListItemText">
              Videos
            </Link>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <Link to="/Groups" span className="sidebarListItemText">
              Groups
            </Link>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <Link to="/Jobs" span className="sidebarListItemText">
              Jobs
            </Link>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <Link to="/Courses" span className="sidebarListItemText">
              Courses
            </Link>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Person} alt="" />
            <span className="sidebarFriendName">Mark Cruz</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Person1} alt="" />
            <span className="sidebarFriendName">Ann Cruz</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Person2} alt="" />
            <span className="sidebarFriendName">Kimberly Cruz</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
