import { HomeContainer } from "./pages/HomeContainer";
import { HelpContainer } from "./pages/HelpContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CovidBanner } from "./components";
import { MainHeader } from "./components";

function App() {
  return (
    <div className="text-gray-700">
      <BrowserRouter>
        <CovidBanner />
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<HomeContainer />}></Route>
          <Route exact path="/help" element={<HelpContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
