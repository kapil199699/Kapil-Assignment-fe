import React from "react";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./Navbar/navbar-bottom";
import NavbarTop from "./Navbar/navbarTop";
import Footer from "./footer/footer";

const Layout = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
