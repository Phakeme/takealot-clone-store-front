import {
  Alert,
  CovidBanner,
  Footer,
  MainHeader,
  ScrollToTop,
} from "./components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  CartContainer,
  HelpContainer,
  HomeContainer,
  LoginContainer,
  SearchProductsContainer,
  SellContainer,
  SingleProductContainer,
  WishListContainer,
} from "./pages";
import React, { Suspense, lazy } from 'react'

import { useChecResultContext } from "./Context/ChecContextProvider";

const  MyAccountContainer  = lazy(() => import('./pages/my-account/MyAccountContainer'))


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
          <Route exact path="/account" element={
            <Suspense fallback={React.Fragment}>
              <MyAccountContainer />
            </Suspense>
          }></Route>
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
