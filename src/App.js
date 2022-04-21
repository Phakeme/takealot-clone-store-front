import { HomeContainer } from "./containers/HomeContainer";
import { HelpContainer } from "./containers/HelpContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CovidBanner } from "./components/covidBanner/CovidBanner";
import { MainHeader } from "./components/mainHeader/MainHeader";

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
