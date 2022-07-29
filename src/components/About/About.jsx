import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead w-100 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              quibusdam quis cum eius iure quam repellat dignissimos earum
              maxime aspernatur nulla odio odit vero ex impedit recusandae
              excepturi, minus officia cupiditate a? Deserunt officia in modi,
              quae sapiente recusandae dolor sit, nemo sed dignissimos quis.
              Omnis vitae voluptates at! Sequi accusantium quasi quia molestias?
              Voluptatum alias placeat natus voluptate soluta facere distinctio
              suscipit aspernatur accusamus similique mollitia labore, in
              aliquam totam nostrum earum? Voluptatum fuga doloribus, labore nam
              ad reprehenderit. Corrupti nemo magni porro, nisi voluptates
              laborum voluptas fugiat. Deleniti blanditiis temporibus ipsum
              expedita neque impedit facere consequatur earum voluptatibus.
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3 ">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6 col-10 mt-5" style={{ margin: "0px auto" }}>
            <img
              style={{ height: "50vh", width: "100%" }}
              src="https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM="
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
