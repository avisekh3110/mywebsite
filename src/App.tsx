import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Notfound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
