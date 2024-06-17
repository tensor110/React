import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Protected Routes/auth";
import Navbar from "./Protected Routes/Navbar";
import Home from "./Protected Routes/Home";
import { Login } from "./Protected Routes/Login";
import About from "./Protected Routes/About";
import { RequireAuth } from "./Protected Routes/RequireAuth";
import Profile from "./Protected Routes/Profile";
import NoMatch from "./No Match Route/NoMatch";

export default function ProtectedRoutes() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
