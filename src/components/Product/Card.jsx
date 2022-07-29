import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Card = ({
  item,
  showEye = false,
  count,
  handleClick,
  countValue,
  handleDecrease,
}) => {
  const { cartitemsList, addToCart } = useContext(cartContext);

  return (
    <>
      <div
        className="card mb-4"
        key={item.id}
        style={{ width: "18rem", margin: "10px" }}
      >
        <img
          style={{ marginTop: "10px", width: "100%", height: "250px" }}
          src={item.image}
          className="card-img-top"
          alt={item.name}
        />
        <div className="card-body text-start" style={{ lineHeight: "15px" }}>
          <div className="d-flex justify-content-between">
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              {item.name}
            </h5>
            {showEye ? (
              <Link to={`/products/${item._id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                  style={{ cursor: "pointer" }}
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </Link>
            ) : (
              <div className="container d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleClick(item, count)}
                >
                  +
                </button>
                <div
                  className="container"
                  style={{ border: "1px solid black", width: "35%" }}
                >
                  <h6 className="mt-2 ms-2">{count}</h6>
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDecrease(item, count)}
                >
                  -
                </button>
              </div>
            )}
          </div>
          <p className="lead " style={{ fontSize: "15px" }}>
            Price: ${item.price}
          </p>
          <p className="lead" style={{ fontSize: "15px" }}>
            color:{item.color}
          </p>
          <p className="lead" style={{ fontSize: "15px" }}>
            size:{item.size}
          </p>
          <p className="lead" style={{ fontSize: "15px" }}>
            quantity:{item.quantity}
          </p>
        </div>
        <div
          className={
            cartitemsList.find((value) => value.product._id === item._id)
              ? "px-2 pb-2 btn btn-danger mb-3 mx-2"
              : "px-2 pb-2 btn btn-primary mb-3 mx-2"
          }
          onClick={() => addToCart(item, countValue)}
        >
          {cartitemsList.find((value) => value.product._id === item._id)
            ? "Remove From Cart"
            : "Add To Cart"}
        </div>
      </div>
    </>
  );
};

export default Card;
