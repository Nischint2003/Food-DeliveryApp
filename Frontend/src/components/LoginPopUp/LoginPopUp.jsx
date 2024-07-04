import React, { useContext, useState } from "react";
import "./loginpopup.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import axios from "axios";

export default function LoginPopUp({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");

  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if (currState === "Login") {
      newURL += "/api/user/login";
    } else {
      newURL += "/api/user/register";
    }

    const response = await axios.post(`${newURL}`, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-pop-up">
      <form onSubmit={onLogin} className="login-pop-up-container">
        <div className="title flex justify-between items-center">
          <h2 className="text-black font-semibold text-lg">{currState}</h2>
          <img
            className="w-4"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross-icon"
          />
        </div>
        <div className="input-container flex flex-col gap-5">
          {currState === "Sign Up" ? (
            <input
              onChange={onChangeHandler}
              name="name"
              value={data.name}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={onChangeHandler}
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="Login-sign-button">
          {currState === "Login" ? "Login" : "Create Account"}
        </button>
        <div className="term&condition flex items-start gap-2 -mt-4">
          <input type="checkbox" className="mt-3" />
          <p>By continuing , I agree to the terms and privacy policy. </p>
        </div>
        {currState === "Sign Up" ? (
          <p>
            Already have an account ?{" "}
            <span
              className="text-[#ff6347] cursor-pointer font-medium"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account ?{" "}
            <span
              className="text-[#ff6347] cursor-pointer font-medium"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
