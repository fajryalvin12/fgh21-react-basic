import React from "react";
import asset_login from "../assets/icon1.png";

function FormLogin() {
  function loginProcess(event) {}

  function loginProcess(event) {
    event.preventDefault();
    const loginName = event.target.name.value;
    const loginPass = event.target.password.value;

    if (loginName === "elfajrani12" && loginPass === "do_react") {
      window.alert("Login Success");
    } else {
      window.alert("Please input the proper data");
    }
  }
  return (
    <div className="container">
      <div>
        <img src={asset_login} alt="login" />
      </div>
      <div className="header">Sign in</div>
      <div className="caption-header">
        Sign in and start managing your candidates!
      </div>
      <form onSubmit={loginProcess}>
        <div>
          <label htmlFor="login"></label>
          <input
            className="fill"
            type="text"
            placeholder="Login"
            id="login"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="pass"></label>
          <input
            className="fill"
            type="password"
            placeholder="Password"
            id="pass"
            name="password"
          />
        </div>
        <div className="auth-forgot">
          <div className="remember">
            <input type="checkbox" id="check" />
            <label htmlFor="check"> Remember me</label>
          </div>
          <div className="forgot-pass">Forgot Password?</div>
        </div>
        <div>
          <button className="button-submit" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
