import { useNavigate, useSearchParams } from "react-router-dom";
import "./verify.css";
import axios from "axios";
import { toast } from 'react-toastify';
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function Verify() {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      toast.success("Order Placed");
      navigate("/myorders");

    } else {
      navigate("/");
      toast.error("Error Placing Order");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
}
