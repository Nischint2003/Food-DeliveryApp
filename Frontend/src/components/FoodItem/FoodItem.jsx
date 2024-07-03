import React, { useContext } from "react";
import "./fooditem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
export default function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart ,url } = useContext(StoreContext);

  return (
    <div
      className="Food-Items w-full m-auto animate-fadein shadow-sm shadow-slate-300 "
      id="Food-Items"
    >
      <div className="Food-Item-Image relative">
        <img className="w-full rounded-t-xl" src={url+"/images/"+image} alt="food-image" />
        {!cartItems[id] ? (
          <img
            className="add-item absolute bottom-4 right-4 cursor-pointer "
            src={assets.add_icon_white}
            alt="add-item"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="flex justify-between items-center w-1/3 absolute bottom-4 right-4 bg-white rounded-full">
            <img
              className="cursor-pointer w-1/3"
              src={assets.remove_icon_red}
              alt="remove-item"
              onClick={() => removeFromCart(id)}
            />
            <p className="text-slate-800 font-medium text-base">
              {cartItems[id]}
            </p>
            <img
              className="cursor-pointer w-1/3"
              src={assets.add_icon_green}
              alt="append-item"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="Food-Information p-5">
        <div className="Food-Name-Rating flex justify-between items-center mb-3">
          <span className="text-lg font-medium">{name}</span>
          <img className="w-20" src={assets.rating_starts} alt="rating star" />
        </div>
        <p className="text-xs font-normal text-slate-800 mb-3">{description}</p>
        <p className="mb-2 font-medium text-lg text-[#FF6347]">${price}</p>
      </div>
    </div>
  );
}
