import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { Navbar } from "./components";
import Homepage from "./pages/Homepage";
import Cryptopage from "./pages/Cryptopage";
import { store } from "./store/store";
import CryptoDetail from "./components/CryptoDetail";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app flex max-w-[1000px] mx-auto">
          <div className="navbar sticky top-0 h-100">
            <Navbar />
          </div>
          <div className="main p-5 w-full">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/crypto" element={<Cryptopage />} />
              <Route path="/crypto/:id" element={<CryptoDetail />} />
            </Routes>
          </div>
          <div className="footer"></div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
