import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 footer_main_container">
        <div className="container " style={{}}>
          <div className="row main">
            <div className=" col-sm-2 col-md-3" style={{}}>
              <p className=" fs-3 fw-bolder pt-3">Download Our App</p>
              <p style={{}}>Downlaod App for Android and mobile</p>
              <img
                style={{
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div
              className=" col-sm-2 col-md-4"
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                  marginTop: "10px",
                  width: "100%",
                  fontSize: "25px",
                }}
              >
                The{" "}
                <h6
                  style={{ color: "red", display: "inline", fontSize: "25px" }}
                >
                  Jewellery
                </h6>
                Shop
              </p>
              <p className="" style={{ fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className=" col-sm-2 col-md-2" style={{}}>
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  paddingLeft: "0px",
                  paddingTop: "20px",
                }}
              >
                Useful Links
              </p>
              <li
                style={{
                  fontSize: "15px",
                  listStyle: "none",
                  paddingLeft: "0px",
                }}
              >
                Home
              </li>
              <li
                style={{
                  fontSize: "15px",
                  listStyle: "none",
                  paddingLeft: "0px",
                }}
              >
                Product
              </li>
              <li
                style={{
                  fontSize: "15px",
                  listStyle: "none",
                  paddingLeft: "0px",
                }}
              >
                Contact
              </li>
              <li
                style={{
                  fontSize: "15px",
                  listStyle: "none",
                  paddingLeft: "0px",
                }}
              >
                Sign Up
              </li>
            </div>
            <div className=" col-sm-2 col-md-2" style={{}}>
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  paddingTop: "20px",
                }}
              >
                Follow Us
              </p>
              <li style={{ fontSize: "15px", listStyle: "none" }}>Facebook</li>
              <li style={{ fontSize: "15px", listStyle: "none" }}>Instagram</li>
              <li style={{ fontSize: "15px", listStyle: "none" }}>Twitter</li>
              <li style={{ fontSize: "15px", listStyle: "none" }}>Youtube</li>
            </div>
          </div>
          <hr />
          <p className="text-center pb-4">All Rights Reserved @ danadhikari</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
