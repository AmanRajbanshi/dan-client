import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./checkout.css";
import Footer from "../Footer/Footer";
import { cartContext } from "../../Context/CartContext";
import { calculateTotal } from "../../Helpers/generalHelpers";

const ProductCheckOut = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(false);

  const { cartitemsList, setCartItemsList } = useContext(cartContext);
  const submittingMessage = () => {
    setCartItemsList(cartitemsList.splice(0, cartitemsList.length - 1));
  };

  // const total = state.reduce((a, b) => {
  //   return a + b.price;
  // }, 0);

  const userCheckout = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      email === "" ||
      address === ""
    ) {
      return setError(true);
    }
    try {
      await axios.post("http://localhost:1000/api/checkout", {
        cartItem: cartitemsList,
        firstName,
        lastName,
        username,
        email,
        address,
      });
    } catch (error) {}
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setAddress("");
    setError(false);
  };

  useEffect(() => {
    setTotalPrice(calculateTotal(cartitemsList));
  }, [cartitemsList]);

  return (
    <>
      <h1 className="my-2 text-center fs-6 text-danger">
        {error && "Fields Shouldnot Be Empty."}
      </h1>
      <div className="container mt-3" style={{}}>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {cartitemsList.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartitemsList.map((value) => {
                return (
                  <>
                    <div
                      key={value.product.id}
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <p className="text-center mx-4 mt-4">
                        {value.product.name}
                      </p>
                      <p className="text-center mx-4 mt-4">{value.count}</p>
                      <p className="mt-3 fs-4">x</p>
                      <p className="text-center mx-4 mt-4">
                        {value.product.price}
                      </p>
                      <p className="mt-3 fs-3">-</p>
                      <p className="text-center mx-4 mt-4">
                        ${value.product.price * value.count}
                      </p>

                      <img
                        style={{ width: "100px", padding: "10px" }}
                        src={value.product.image}
                        alt=""
                      />
                    </div>
                  </>
                );
              })}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total Price</span>
                <strong>${totalPrice}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-lg-8" style={{}}>
            <h4 className="mb-3" style={{ color: "blue" }}>
              Billing address
            </h4>
            <form onSubmit={userCheckout}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required=""
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="username" classname="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder=""
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required=""
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-6 mb-5">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder=""
                    required=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={submittingMessage}
                className="w-50 btn btn-primary btn-lg mb-5"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCheckOut;
