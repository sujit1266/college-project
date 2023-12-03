import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  // const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="inner-container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
           
           
           

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
              style={{ border: "none"}}
              className="submit"
              // onClick={() => { 
              //   setAction("Sign Up");
              // }}
            >
              Sign Up
            </button>
          </Link>

          <button
            style={{ border: "none" }}
            className="submit"
            // onClick={() => {
            //   setAction("Login");
            // }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
