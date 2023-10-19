import "./Home.css";
import SideBar from "../SideBar/SideBar";
import Feed from "../Feed/Feed";
import RightBar from "../RightBar/RightBar";
const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
