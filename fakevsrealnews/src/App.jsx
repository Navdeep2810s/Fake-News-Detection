import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Detect from "./pages/detect";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detect" element={<Detect />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;