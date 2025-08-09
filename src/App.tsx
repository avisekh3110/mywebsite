import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import Resume from "./pages/resume";
import Works from "./pages/works";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
