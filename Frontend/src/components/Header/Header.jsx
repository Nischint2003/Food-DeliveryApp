import React from "react";
import "./header.css";
import { assets } from "../../assets/frontend_assets/assets";
export default function Header() {
  return (
    <div className="Header-Section">
      <div className="Header-Containts animate-fadein">
        <h1 className="font-medium text-white">
          Order your favorite food here
        </h1>
        <p className="text-white">
          Get ready to tantalize your taste buds! Our food app is now live, and
          we're excited to invite you to try out our delicious offerings! From
          mouth-watering dishes to exclusive deals and discounts, our app is the
          perfect way to discover your new favorite food spot. Download now and
          indulge in a culinary adventure like no other!
        </p>
        <button className="bg-white text-gray-600 rounded-full font-normal px-6 py-2">
          View Menu
        </button>
      </div>
    </div>
  );
}
