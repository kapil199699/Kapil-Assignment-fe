import { useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      let message = await response.json();
      alert(message);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="loginPage">
      <p className="loginWelcome">Login to Indiatimes</p>
      <img src="https://www.indiatimes.com/images/login/login-art.png" alt=""></img>
      <div className="loginText">
        <p>Get the NEWS that fits your groove.</p>
        <p>Login with your phone number to get started!</p>
      </div>
      <form className="login">
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
        <button className="loginBtn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
