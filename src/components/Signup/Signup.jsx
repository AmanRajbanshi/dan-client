import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
//import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./signup.css";
const Signup = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [error, setError] = useState(false);

  const userSignUp = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(confirmPassword);

    if (password !== confirmPassword) {
      return setError(true);
    }
    try {
      const { data } = await axios.post("http://localhost:1000/api/signup", {
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
        gender,
      });
      console.log(data);
      setEmail(false);
    } catch (error) {
      console.log(error.message);
    }
    // localStorage.setItem("email", email);

    setName("");
    setEmail("");

    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
    navigate("/signin");
  };

  useEffect(() => {}, [
    name,
    email,
    phoneNumber,
    password,
    confirmPassword,
    gender,
  ]);
  console.log(gender);
  return (
    <>
      {error && (
        <h3 className="text-danger my-4 fs-6 text-center">
          Password and Confirm Password Did not Matched.
        </h3>
      )}
      <form onSubmit={userSignUp} autoComplete="off" className="" style={{}}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 signupForm" style={{}}>
              <h4 className="text-center mt-4">Register</h4>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Password1"
                  autoComplete="on"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  autoComplete="true"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value={"male"}
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value={"female"}
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Female
                </label>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 "
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Signup;
