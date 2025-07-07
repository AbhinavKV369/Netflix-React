import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {

      const [signState,setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="logo" />
      <div className="login-container">
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Sign In" ? (
              <input type="text" placeholder="Your name" />
            ) : (
              <></>
            )}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">{signState}</button>

            <div className="form-help">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <p className="help-text">Need help?</p>
            </div>
          </form>
          {signState === "Sign In" ? (
            <p className="switch-text">
              New to Netflix? <span className="link-text" onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span>
            </p>
          ) : (
            <p className="switch-text">
              Already have an account?{" "}
              <span className="link-text" onClick={()=>{setSignState("Sign In")}}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
