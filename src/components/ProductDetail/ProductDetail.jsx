import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { findProductById } from "../../Helpers/generalHelpers";
import { cartContext } from "../../Context/CartContext";
import axios from "axios";

const ProductDetail = () => {
  const { cartitemsList, addToCart } = useContext(cartContext);
  const [Data, setData] = useState([]);

  const [item, setItem] = useState({});
  const { id } = useParams();

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

  useEffect(() => {
    setItem(findProductById(Data, id));
  }, [Data, id]);
  const [countValue] = useState(1);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 "
            key={item ? item.id : null}
            style={{}}
          >
            <div>
              <Carousel
                infiniteloop
                autoPlay
                dots="false"
                showArrows={true}
                showIndicators={false}
                showThumbs={true}
              >
                <div>
                  <img src={item ? item.image : null} alt="" />
                </div>
                <div>
                  <img src={item ? item.img2 : null} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
          <div
            className="col-md-6 d-flex"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "",
            }}
          >
            <p>{item ? item.category : null}</p>
            <h4>{item ? item.name : null}</h4>
            <p>{item ? item.price : null}</p>

            <div className="row d-flex">
              <div className="col p-3">
                <div
                  className={
                    cartitemsList.find(
                      (value) => value.product._id === item._id
                    )
                      ? "px-2 pb-2 btn btn-danger mb-3 mx-2"
                      : "px-2 pb-2 btn btn-primary mb-3 mx-2"
                  }
                  onClick={() => addToCart(item, countValue)}
                >
                  {cartitemsList.find((value) => value.product._id === item._id)
                    ? "Remove From Cart"
                    : "Add To Cart"}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>Product Details</p>
              </div>
              <div className="col-md-6">{item ? item.description : null}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
