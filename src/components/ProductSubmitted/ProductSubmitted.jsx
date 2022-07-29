import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const ProductSubmitted = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div
              className="card w-100 h-100 p-5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Successfully your cart item is added..</h4>
              <p>We will soon reach to you. 🙏🙏🙏</p>
              <button className="btn btn-primary" >
                <Link to="/products" style={{ color: "white",textDecoration:"none" }}>Buy More</Link>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductSubmitted;
