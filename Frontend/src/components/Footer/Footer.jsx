import "./footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import React from "react";

export default function Footer() {
  return (
    <div
      className="Footer flex flex-col w-full bg-slate-600 text-white"
      id="Footer"
    >
      <div className="Secton-1 m-10  flex justify-between ">
        <div className="col-1 w-2/5">
          <img src={assets.logo} alt="logo" />
          <p className="my-5">
            Savor the flavor! Order now and get your favorite dishes delivered
            right to your doorstep. With Tomato, you can enjoy the convenience
            of delicious food without the hassle of cooking!
          </p>
          <div className="Social-Media-Icons flex justify-between w-1/3">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkkedin" />
          </div>
        </div>
        <div className="w-1/5 ">
          <h2 className="font-bold">COMPANY</h2>
          <ul className="mt-5 cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="Get-Touch w-1/6">
          <h2 className="font-bold mb-5">GET IN TOUCH</h2>
          <p>+91-9437008641</p>
          <p>contact@tomato.com</p>
        </div>
      </div>
      <hr className="border border-x-8" />
      <div className="Section-2 flex justify-center m-5">
        <p>Copyright 2024 © Tomato.com.All Right Reserved</p>
      </div>
    </div>
  );
}
