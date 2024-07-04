import React, { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="Food-Display mt-8">
      <h2>Top dishes near you</h2>
      <div className="Food-Display-List mt-8 grid lg:grid-cols-4 lg:gap-x-7 gap-y-12 grid-cols-1 sm:grid-cols-2 sm:gap-x-7 ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index}>
                <FoodItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
