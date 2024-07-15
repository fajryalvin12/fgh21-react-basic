import React from "react";
import asset_login from "../assets/icon1.png";

function FormSignup() {
  return (
    <div className="container">
      <div>
        <img src={asset_login} alt="" />
      </div>
      <div className="header">Sign Up</div>
      <div className="caption-header">
        Welcome to the page. Please make your account first!
      </div>
      <form>
        <div>
          <label htmlFor="signup"></label>
          <input
            className="fill"
            type="text"
            placeholder="Username"
            id="signup"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input className="fill" type="email" placeholder="Email" id="email" />
        </div>
        <div>
          <label htmlFor="pass"></label>
          <input
            className="fill"
            type="password"
            placeholder="Password"
            id="pass"
          />
        </div>
        <div>
          <label htmlFor="confirm"></label>
          <input
            className="fill"
            type="password"
            placeholder="Confirm Password"
            id="confirm"
          />
        </div>
        <div className="auth-forgot">
          <div className="remember">
            <input type="checkbox" id="check" />
            <label htmlFor="check"> Accept terms and conditions</label>
          </div>
        </div>
        <div>
          <button className="button-submit" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSignup;
