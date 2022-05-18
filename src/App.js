import { HomeContainer, HelpContainer, ProductContainer } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainHeader, CovidBanner, Footer } from "./components";

function App() {
  return (
    <div className="text-gray-700">
      <BrowserRouter>
        <CovidBanner />
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<HomeContainer />}></Route>
          <Route exact path="/help" element={<HelpContainer />}></Route>
          <Route
            exact
            path="/product/:productId"
            element={<ProductContainer />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
