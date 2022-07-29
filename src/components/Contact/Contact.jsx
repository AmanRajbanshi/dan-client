import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const userContact = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:1000/api/contact", {
        name,
        email,
        message,
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 col-10" style={{ margin: "0px auto" }}>
            <img
              style={{ height: "50vh", width: "100%" }}
              src="https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM="
              alt=""
            />
          </div>
          <div className="col-md-6 col-10" style={{ margin: "0px auto" }}>
            <form onSubmit={userContact} style={{ margin: "0px auto" }}>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group mt-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-secondary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
