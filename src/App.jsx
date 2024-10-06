import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurServices from "./pages/OurServices";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/OurServices" element={<OurServices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
