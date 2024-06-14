import { Routes, Route } from "react-router-dom";
import Navbar from "./Dynamic Routes/Navbar";
import Home from "./Dynamic Routes/Home";
import Users from "./Dynamic Routes/Users";
import UserDetails from "./Dynamic Routes/UserDetails";
import Admin from "./Dynamic Routes/Admin";
import NoMatch from "./No Match Route/NoMatch";

export default function DynamicRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          {/* Dynamic Route  */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
