import { Routes, Route } from "react-router-dom";
import About from "./Configuring Routes/About";
import Home from "./Configuring Routes/Home";

export default function ConfiguringRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
  );
}

