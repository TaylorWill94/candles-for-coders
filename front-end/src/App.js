import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/candles" element={<Index />} />
        <Route path="/candles/:id" element={<Show />} />
        <Route path="/candles/:id/edit" element={<Edit />} />
        <Route path="/candles/new" element={<New />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
