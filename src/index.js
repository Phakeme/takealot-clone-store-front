import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./data";
import store from "./app/app";
import { Provider } from "react-redux";
import { ChecContextProvider } from "./Context/ChecContextProvider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChecContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChecContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
