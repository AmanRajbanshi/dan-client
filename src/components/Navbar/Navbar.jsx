import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartButton from "../Button/CartButton";
//import SignupButton from '../Button/SignupButton';

const Navbar = () => {
  const [user, setUser] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Jewllery Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* <SignupButton style={{padding:"10px"}}/> */}
              <CartButton />

              {user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">
                    Add Product
                  </Link>
                </li>
              )}
              {user ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    onClick={() => localStorage.removeItem("userInfo")}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
