import { Routes, Route } from "react-router-dom";
import Navbar from "./Nested Routes/Navbar";
import Home from "./Nested Routes/Home";
import About from "./Nested Routes/About";
import Products from "./Nested Routes/Products";
import FeaturedProduct from "./Nested Routes/FeaturedProduct";
import NewProduct from "./Nested Routes/NewProduct";
import NoMatch from "./No Match Route/NoMatch";

export default function Navigating() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order-summary" element={<About />} />
        <Route path="products" element={<Products />} >
          {/* Index Route  */}
          <Route index element={<FeaturedProduct/>} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

