import React, { useState } from "react";
import "../styling/LoginSignUp.css";
// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="inner-container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <>
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
            </>
          )}

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
        {action === "Login" ? (
          <div className="forgot-password">
            Forgot Password? <span>Click Here</span>
          </div>
        ) : (
          <div></div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
