import React from "react";
import { useChecResultContext } from "./Context/ChecContextProvider";

import {
  HomeContainer,
  HelpContainer,
  SingleProductContainer,
  LoginContainer,
  CartContainer,
  WishListContainer,
  MyAccountContainer,
  SearchProductsContainer,
  SellContainer,
} from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  MainHeader,
  CovidBanner,
  Footer,
  ScrollToTop,
  Alert,
} from "./components";

function App() {
  const { successCart } = useChecResultContext();
  return (
    <div className="text-gray-700">
      <BrowserRouter>
        <ScrollToTop />
        <CovidBanner />
        <MainHeader />
        {successCart && <Alert />}
        <Routes>
          <Route exact path="/" element={<HomeContainer />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route exact path="/help" element={<HelpContainer />}></Route>
          <Route exact path="/login" element={<LoginContainer />}></Route>
          <Route exact path="/cart" element={<CartContainer />}></Route>
          <Route exact path="/wishlist" element={<WishListContainer />}></Route>
          <Route exact path="/account" element={<MyAccountContainer />}></Route>
          <Route
            exact
            path="/product/:productId"
            element={<SingleProductContainer />}
          ></Route>
          <Route
            exact
            path="/results"
            element={<SearchProductsContainer />}
          ></Route>
          <Route exact path="/sell" element={<SellContainer />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
