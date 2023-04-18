import { BrowserRouter, Route, Routes } from "react-router-dom";
import SailCustomizer from "./components/SailCustomizer";
import Recommended from "./components/Recommended";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SailCustomizer />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
