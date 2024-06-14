import { Routes, Route } from "react-router-dom";
import Home from "./Navigating Programmatically/Home";
import OrderSummary from "./Navigating Programmatically/OrderSummary";
import NoMatch from "./No Match Route/NoMatch";

export default function Navigating() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  );
}

