import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProductByAdmin = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [getData, setGetData] = useState([]);
  const [render, setRender] = useState(false);
  const [posted, setPoseted] = useState(false);

  const addminDashboard_add_product = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:1000/api/addproduct",
        {
          name,
          image,
          image1,
          image2,
          image3,
          size,
          quantity,
          color,
          category,
          price,
          description,
        }
      );
      console.log(data);
      setPoseted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error.message);
      setPoseted(false);
    }
  };
  const fetchAddedProduct = async () => {
    const { data } = await axios.get("http://localhost:1000/api/products");
    try {
      console.log(data);
      setGetData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteAddedProduct = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:1000/api/product/delete/${id}`
    );
    console.log(data);
    setRender(!render);
  };

  useEffect(() => {
    fetchAddedProduct();
  }, [render]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      {userInfo ? (
        <>
          <div className="container my-2">
            <div className="row">
              <div
                className="col"
                style={{
                  //   border: "1px solid yellow",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div
                      className="col-md-8"
                      style={{ overflowY: "scroll", height: "100vh" }}
                    >
                      {getData.length === 0 && (
                        <h3 className="my-2 text-center fs-5">
                          No Products To Show
                        </h3>
                      )}
                      {getData
                        ? getData.map((value) => {
                            return (
                              <>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card p-2 mb-2">
                                        <div className="row">
                                          <div className="col-md-6">
                                            <p>Category :{value.category}</p>
                                          </div>
                                          <div className="col-md-6">
                                            <p>Name :{value.name}</p>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <img
                                              src={value.image}
                                              alt=""
                                              srcset=""
                                              style={{
                                                width: "200px",
                                                height: "200px",
                                              }}
                                            />
                                          </div>
                                          <div className="col-md-6">
                                            <p>Quantity :{value.quantity}</p>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <p>Size :{value.size}</p>
                                          </div>
                                          <div className="col-md-6">
                                            <p>Color :{value.color}</p>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <p>Price:{value.price}</p>
                                          </div>
                                          <div className="col-md-6">
                                            <p>
                                              Description :{value.description}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className=""
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <button
                                          onClick={() =>
                                            deleteAddedProduct(value._id)
                                          }
                                          className="my-3"
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })
                        : null}
                    </div>

                    <div className="col-md-4">
                      {posted && (
                        <h3 className="text-center my-3 fs-6 font-success">
                          Successfully Posted Product.
                        </h3>
                      )}
                      <form
                        onSubmit={addminDashboard_add_product}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div className="col-md-6 p-2" style={{}}>
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Image</label>
                          <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Image1</label>
                          <input
                            type="file"
                            value={image1}
                            onChange={(e) => setImage1(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Image2</label>
                          <input
                            type="file"
                            value={image2}
                            onChange={(e) => setImage2(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Image3</label>
                          <input
                            type="file"
                            value={image3}
                            onChange={(e) => setImage3(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Color</label>
                          <input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Size</label>
                          <input
                            type="text"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Quantity</label>
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Category</label>
                          <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Price</label>
                          <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 p-2">
                          <label htmlFor="name">Description</label>
                          <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          style={{
                            borderRadius: "10px",
                            borderColor: "green",
                            border: "5px solid green",
                          }}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="my-2 fs-5 text-center">
            You Must Be Admin To View This Page.
          </h1>
          <Link to="/signin">
            <h5 className="my-2 fs-6 text-center">Login To Continue</h5>
          </Link>
        </>
      )}
    </>
  );
};

export default AddProductByAdmin;
