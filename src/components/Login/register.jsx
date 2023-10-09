import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handelRegister = async (ev) => {
    console.log("rgister call");
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });
    if (response.status === 200) {
      alert("registeration successful");
    } else {
      alert("registration failed");
    }
  };

  return (
    <div className="loginPage">
      <p className="loginWelcome">Register to Indiatimes</p>
      <img src="https://www.indiatimes.com/images/login/login-art.png"></img>
      <div className="loginText">
        <p>Get the NEWS that fits your groove.</p>
        <p>Login with your phone number to get started!</p>
      </div>
      {/* <form className="login" > */}
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(ev) => setUserName(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button className="loginBtn" onClick={handelRegister}>
        Register
      </button>
      {/* </form> */}
    </div>
  );
};

export default Register;
