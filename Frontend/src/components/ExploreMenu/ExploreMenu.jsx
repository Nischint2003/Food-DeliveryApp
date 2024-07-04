import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="Explore-Menu" id="Explore">
      <h1 className="font-bold">Explore our menu</h1>
      <p className="text text-gray-500 ">
        Hey! Check out our new menu: classic comfort food, innovative twists &
        seasonal specials. Text us back to place your order or ask for
        more info!
      </p>
      <div className="Explore-Menu-List ">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="Explore-Menu-List-Item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                
                className={`cursor-pointer h-2/3 ${
                  category === item.menu_name ? "active" : ""
                }`}
                src={item.menu_image}
                alt="menu-image"
              />
              <p className="font-semibold text-gray-500 mt-4">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="bg-slate-600 mt-5 " />
    </div>
  );
}
