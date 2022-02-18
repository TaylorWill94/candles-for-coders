import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Index from "./Pages/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candles" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
