import React from "react";
import "./appdownload.css";
import { assets } from "../../assets/frontend_assets/assets";
export default function AppDownload() {
  return (
    <div className="AppDownload my-10 mx-5 flex flex-col items-center w-full " id="AppDownload">
      <p className="title font-semibold mb-3 sm:text-2xl text-xl lg:text-3xl">
        For Better Experience Download
      </p>
      <p className="font-bold  mb-5 text-3xl text-[#FF6347]">Tomato App</p>
      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
        <img src={assets.play_store} alt="play-store" />
        <img src={assets.app_store} alt="app-store" />
      </div>
    </div>
  );
}
