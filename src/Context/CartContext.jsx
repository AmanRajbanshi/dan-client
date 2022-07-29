import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartitemsList, setCartItemsList] = useState([]);

  const addToCart = (product, count) => {
    console.log(product);
    const abc = cartitemsList.find(
      (value) => value.product._id === product._id
    );
    if (abc === undefined) {
      setCartItemsList([...cartitemsList, { product, count }]);
    } else {
      setCartItemsList(
        cartitemsList.filter((item) => {
          return item.product._id !== product._id;
        })
      );
    }
  };

  const contextValue = {
    addToCart,
    cartitemsList,
    setCartItemsList,
  };

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
