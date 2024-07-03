import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="Nav-Bar flex justify-between py-5 items-center">
      {/* Logo */}
      <div className="Logo p-5">
        <Link to="/">
          <img className="h-8" src={assets.logo} alt="logo" />
        </Link>
      </div>
      {/* Nav-Menu */}
      <div className="Nav-Menu flex gap-4" id="Nav-Menu">
        <Link
          to="/"
          className={`text-base font-medium ${menu === "Home" ? "active" : ""}`}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          className={`text-base font-medium ${menu === "Menu" ? "active" : ""}`}
          href="#Explore"
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>
        <a
          className={`text-base font-medium ${
            menu === "Mobile-App" ? "active" : ""
          }`}
          href="#AppDownload"
          onClick={() => setMenu("Mobile-App")}
        >
          Mobile-App
        </a>
        <a
          className={`text-base font-medium ${
            menu === "Contact-Us" ? "active" : ""
          }`}
          href="#Footer"
          onClick={() => setMenu("Contact-Us")}
        >
          Contact-Us
        </a>
      </div>
      {/* Icons */}
      <div className="Icons flex gap-8 items-center ">
        <a href="#">
          <img className="w-6 h-6" src={assets.search_icon} alt="search-icon" />
        </a>
        <div className="basket-icon-dot">
          <Link to="/cart">
            <div className="basket-icon cursor-pointer">
              <img className="w-6 h-6" src={assets.basket_icon} alt="basket" />
            </div>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
        </div>
        {!token ? (
          <button
            className="Sign-In border-solid border-gray-200 border-2 rounded-full px-4 py-2 text-sm/[18px] hover:cursor-pointer hover:border-gray-400 hover:shadow-lg bg-slate-50 hover:bg-slate-100 transition-all"
            onClick={() => setShowLogin(true)}
          >
            sign in
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile-icon" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="bag" />
                <p onClick={() => navigate("/myorders")}>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="logout" />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
