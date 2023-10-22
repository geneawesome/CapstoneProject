import React from "react";
import SideBar from "../SideBar/SideBar";
import Feed from "../Feed/Feed";
import RightBar from "../RightBar/RightBar";
import ProfileCoverIMg from "../../assets/8.jpeg";
import UserIMg from "../../assets/4835.jpg";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={ProfileCoverIMg} alt="" />
              <img className="profileUserImg" src={UserIMg} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">FriendLink</h4>
              <span className="profileInfoDesc">Hello KodeGO</span>
            </div>
          </div>
          <div className="profileRightTopBottom">
            <Feed />
            {/* <RightBar profile /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
// import React from "react";
// import Feed from "../Feed/Feed";
// import Sidebar from "../SideBar/SideBar";
// import RightBar from "../RightBar/RightBar";
// import ProfileCoverIMg from "../../assets/8.jpeg";
// import UserIMg from "../../assets/4835.jpg";
// const Profile = () => {
//   return (
//     <div className="profile">
//       <div className="profileCover">
//         {/* <img className="profileCoverImg" src={ProfileCoverIMg} alt="" />
//         <img className="profileUserImg" src={UserIMg} alt="" /> */}
//       </div>
//       <Feed />
//     </div>
//   );
// };

// export default Profile;
