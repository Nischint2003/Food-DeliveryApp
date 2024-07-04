import "./sidebar.css";
import { assets } from "../../assets/admin_assets/assets";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to={"/add"} className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to={"/orders"} className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
        <NavLink to={"/list"} className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Food List</p>
        </NavLink>
      </div>
    </div>
  );
}
