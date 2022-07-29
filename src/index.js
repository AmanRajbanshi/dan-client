import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import CartContextProvider from "./Context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CartContextProvider>
  </React.StrictMode>
);
