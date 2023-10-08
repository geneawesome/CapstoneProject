import user_icon from "../../assets/person.png"
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Signup.css";
import { useState } from "react";
const SignUp = () => {
  const [action, setAction] = useState("Login");
  return (
    <section className="Signupbody">
      <div className="containerbody">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Signup" ? (
            <div></div>
          ) : (
            <div className="forget-password">
              Forget Password? <span>Click Here!</span>
            </div>
          )}
          <div className="submit-container">
            <div
              className={action === "SignUp" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("SignUp");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
