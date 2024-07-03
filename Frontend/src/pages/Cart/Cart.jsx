import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./cart.css";
export default function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount , url} =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart mt-24">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="food-image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cross cursor-pointer font-medium"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className="font-medium text-lg">Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() > 0 ? 2 + getTotalCartAmount() : 0}</b>
          </div>
          <button className="checkout" onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promo-code">
          <div className="flex flex-col justify-start">
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code"></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
