import React from "react";
import "../styling/LoginSignUp.css";
import { Link } from "react-router-dom";
// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";

const LoginSignUp = () => {
  // const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="inner-container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            {/* <img src={user_icon} alt="User Icon" /> */}
            <div className="inputinner-div">
              <input type="text" placeholder="Name" />
            </div>
          </div>
          <div className="input">
            {/* <img src={user_icon} alt="User Icon" /> */}
            <div className="inputinner-div">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div className="input">
            {/* <img src={user_icon} alt="User Icon" /> */}
            <div className="inputinner-div">
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>

          {/* <img src={email_icon} alt="User Email" /> */}
          <div className="input">
            {/* <img src={email_icon} alt="User Email" /> */}
            <div className="inputinner-div">
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="input">
            {/* <img src={password_icon} alt="User Password" /> */}
            <div className="inputinner-div">
              <input type="password" placeholder="Password" />
            </div>
          </div>
        </div>

        <div className="submit-container">
          <Link to={"/signup"}>
            <button
              style={{ border: "none" }}
              className="submit"
              // onClick={() => {
              //   setAction("Sign Up");
              // }}
            >
              Sign Up
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              style={{ border: "none" }}
              className="submit"
              // onClick={() => {
              //   setAction("Login");
              // }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
