import "./index.css";
import "./data";

import App from "./App";
import { CartContextProvider } from "./modules/cart/api/CartContextProvider";
import { ChecContextProvider } from "./Context/ChecContextProvider";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CartContextProvider>
      <ChecContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChecContextProvider>
    </CartContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
