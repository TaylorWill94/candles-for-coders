import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="app-header">CERTIFIED LOVER CANDLES</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/candles" element={<Index />} />
        <Route path="/candles/:id" element={<Show />} />
        <Route path="/candles/:id/edit" element={<Edit />} />
        <Route path="/candles/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
