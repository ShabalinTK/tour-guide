import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import CityListing from "./pages/CityListing.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/cities" element={<CityListing />} />
          </Route>
      </Routes>
    </>
  );
}

export default App
