import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartContext } from "../../Context/CartContext";
const CartButton = () => {
  const state = useSelector((state) => state.addItem);
  const { cartitemsList } = useContext(cartContext);
  return (
    <>
      <Link
        to="/cart"
        className=" ms-auto mt-2"
        style={{ color: "gray", textDecoration: "none" }}
      >
        <span className="fa fa-shopping-cart col-sm-d-flex me-1"> </span>Cart (
        {cartitemsList.length})
      </Link>
    </>
  );
};

export default CartButton;
