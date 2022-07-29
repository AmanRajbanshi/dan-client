import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import { calculateTotal } from "../../Helpers/generalHelpers";
import Card from "../Product/Card";

const Cart = () => {
  const { cartitemsList } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [countValue1, setCountValue1] = useState(false);

  useEffect(() => {
    setTotalPrice(calculateTotal(cartitemsList));
  }, [cartitemsList, countValue1]);

  const handleClick = (item, count) => {
    setCountValue1(!countValue1);
    cartitemsList.splice(
      cartitemsList.findIndex((object) => {
        return object.product === item;
      }),
      1,
      { product: item, count: count + 1 }
    );
  };

  const handleDecrease = (item, count) => {
    setCountValue1(!countValue1);
    cartitemsList.splice(
      cartitemsList.findIndex((object) => {
        return object.product === item;
      }),
      1,
      { product: item, count: count === 1 ? 1 : count - 1 }
    );
  };

  return (
    <>
      {cartitemsList.length === 0 && (
        <h3 className="my-3 text-center">No Items In Cart</h3>
      )}
      <div className="container">
        <div className="row">
          {cartitemsList.map((item) => {
            return (
              <div className="col-md-4 col-11" style={{ margin: "0px auto" }}>
                <Card
                  item={item.product}
                  count={item.count}
                  countValue1={countValue1}
                  onCountChange1={setCountValue1}
                  handleClick={handleClick}
                  handleDecrease={handleDecrease}
                />
                ;
              </div>
            );
          })}
        </div>
      </div>
      {cartitemsList.length !== 0 && (
        <h4 className="text-center my-3">Total Price : ${totalPrice}</h4>
      )}
      {cartitemsList.length !== 0 && (
        <div className="d-flex w-100 justify-content-center">
          <Link to="/checkout">
            <button className="btn btn-secondary my-2">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
