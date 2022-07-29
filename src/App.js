import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductCheckOut from "./components/ProductCheckout/ProductCheckout";
import Cart from "./components/Cart/Cart";
import ProductSubmitted from "./components/ProductSubmitted/ProductSubmitted";
import Login from "./components/Button/Login";
//import Signup from "./components/Signup/Signup";
import AddProductByAdmin from "./components/AddproductByAdmin/AddProductByAdmin";
import PageNotFOund from "./components/404/PageNotFOund";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<ProductCheckOut />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/product/order" element={<ProductOrder />} /> */}
          <Route path="/add-product" element={<AddProductByAdmin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submitted" element={<ProductSubmitted />} />
          {/* <Route path="/register" element={<Signup />} /> */}
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<PageNotFOund />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
