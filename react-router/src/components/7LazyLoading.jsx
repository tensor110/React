import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Lazy Loading/Navbar";
import Home from "./Lazy Loading/Home";
import NoMatch from "./No Match Route/NoMatch";
const LazyAbout = React.lazy(() => import("./Lazy Loading/About"));

function LazyLoading() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default LazyLoading;
