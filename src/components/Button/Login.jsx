import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      navigate("/add-product");
    }
  }, [pathname]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const userLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(comment);
    if (email === "" || password === "") {
      return setError("Fields Cannot Be Empty"), setLoading(false);
    }
    try {
      await axios.post("http://localhost:1000/api/admin/login", {
        email,
        password,
      });
      setError("");
      setEmail("");
      setPassword("");
      localStorage.setItem("userInfo", JSON.stringify({ role: "admin" }));
      navigate("/add-product");
      setLoading(false);
    } catch (error) {
      setError(error.response.data.msg);
      setTimeout(() => {
        setError("");
      }, 1500);
      setLoading(false);
    }
  };

  return (
    <>
      {/* <!-- Modal --> */}
      {error && <h3 className="text-center my-3 fs-6 text-danger">{error}</h3>}
      <form onSubmit={userLogin} className="" style={{}}>
        <h4 className="text-center my-3">Login</h4>
        <div className="container mt-4" style={{ width: "40%" }}>
          <div class="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="text" className="form-label">
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
            <button
              type="submit"
              className="btn btn-outline-primary w-100 "
              disabled={loading}
            >
              {loading ? "Loading ..." : "Login"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
