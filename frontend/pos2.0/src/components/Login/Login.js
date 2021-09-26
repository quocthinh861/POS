import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {

  return (
    <div className="login_container">
        <span>FOOD ORDERING APP</span>
        <h1>
          POS Project for Software Engineer course
        </h1>
        <div className="login_buttons">
          <button className="login_google">
            <svg class="auth-section-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="white"></circle>
<path d="M28.6259 19.2853C28.6259 18.4939 28.5604 17.9164 28.4186 17.3175H19.1974V20.8894H24.61C24.501 21.7771 23.9117 23.1139 22.6021 24.0122L22.5838 24.1318L25.4993 26.3452L25.7013 26.365C27.5565 24.686 28.6259 22.2155 28.6259 19.2853" fill="#4285F4"></path>
<path d="M19.1968 28.6965C21.8485 28.6965 24.0747 27.8409 25.7007 26.3651L22.6015 24.0122C21.7722 24.5791 20.659 24.9747 19.1968 24.9747C16.5996 24.9747 14.3952 23.2958 13.6095 20.975L13.4943 20.9846L10.4626 23.284L10.423 23.392C12.038 26.5361 15.3555 28.6965 19.1968 28.6965Z" fill="#34A853"></path>
<path d="M13.6101 20.9751C13.4027 20.3763 13.2827 19.7345 13.2827 19.0715C13.2827 18.4084 13.4027 17.7668 13.5991 17.1679L13.5937 17.0403L10.524 14.7041L10.4236 14.7509C9.75792 16.0557 9.37598 17.5208 9.37598 19.0715C9.37598 20.6222 9.75792 22.0873 10.4236 23.392L13.6101 20.9751" fill="#FBBC05"></path>
<path d="M19.1968 13.1682C21.041 13.1682 22.2851 13.9489 22.9944 14.6013L25.7662 11.949C24.0639 10.3983 21.8486 9.44653 19.1968 9.44653C15.3555 9.44653 12.038 11.6068 10.423 14.7509L13.5986 17.1679C14.3953 14.8472 16.5996 13.1682 19.1968 13.1682" fill="#EB4335"></path>
</svg>
            Sign Up with Google</button>
          <button className="login_facebook">
            <svg class="auth-section-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="19" fill="white"></circle>
            <path d="M26.0758 24.8107L26.9198 19.448H21.64V15.9695C21.64 14.502 22.3762 13.0707 24.741 13.0707H27.1429V8.5052C27.1429 8.5052 24.964 8.14285 22.8818 8.14285C18.5316 8.14285 15.6909 10.7118 15.6909 15.3607V19.448H10.8572V24.8107H15.6909V37.7754C16.6613 37.9239 17.6541 38 18.6654 38C19.6768 38 20.6696 37.9239 21.64 37.7754V24.8107H26.0758Z" fill="#4267B2"></path>
            </svg>
            Sign Up with Facebook</button>
          <div className="auth-or">
            <span className="locale">OR</span>
          </div>
          <button className="login_email">Sign Up with an email</button>
        </div>
    </div>
  );
};

export default Login;