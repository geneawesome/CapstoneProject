import "./Home.css";
// import Workout from "./WorkOut";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Welcome to GadgetGrove - Your One-Stop Gadget Shop!</h1>
          <div className="btn-box">
            <a href="/">Shop Now</a>
            {/* <a href="#">Learn More</a> */}
          </div>
        </div>
      </section>
      {/* <Workout /> */}
    </div>
  );
};

export default Home;
