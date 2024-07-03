import React from "react";
import "./appdownload.css";
import { assets } from "../../assets/frontend_assets/assets";
export default function AppDownload() {
  return (
    <div className="AppDownload m-10 flex flex-col items-center" id="AppDownload">
      <p className="font-semibold mb-3 text-3xl ">
        For Better Experience Download
      </p>
      <p className="font-bold  mb-5 text-3xl text-[#FF6347]">Tomato App</p>
      <div className="flex items-center justify-center gap-5">
        <img src={assets.play_store} alt="play-store" />
        <img src={assets.app_store} alt="app-store" />
      </div>
    </div>
  );
}
