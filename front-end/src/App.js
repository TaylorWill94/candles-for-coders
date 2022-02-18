import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/candles" element={<Index />} />
        <Route path="/candles/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
