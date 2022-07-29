import axios from "axios";
import React, { useEffect, useState } from "react";
import { filterByPrice } from "../../Helpers/generalHelpers";
import Footer from "../Footer/Footer";
import Card from "./Card";
import "./product.css";
//import axios from "axios";

const Product = () => {
  const [countValue, setCountValue] = useState(1);
  const [Data, setData] = useState([]);
  const showEye = true;
  const [filterValue, setFilterValue] = useState("default");
  const [filteredValue, setFilteredValue] = useState([]);
  console.log(filterValue);
  useEffect(() => {
    setFilteredValue(filterByPrice(Data, filterValue));
  }, [filterByPrice(Data, filterValue)]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:1000/api/products");
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <p className="text fw-bold px-3">Collection</p>

            <div className="dropdown">
              <select
                name="cars"
                id="cars"
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="min"> Price Low to High</option>
                <option value="max">Price High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            {filteredValue.map((value) => {
              return (
                <Card
                  key={value.id}
                  item={value}
                  showEye={showEye}
                  countValue={countValue}
                  onCountChange={setCountValue}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
