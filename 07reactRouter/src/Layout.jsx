import React from "react";
import { Header, Footer } from "./assets/components";
import { Outlet } from "react-router-dom";

//using Outlet... we can do nesting of components using react-router-dom

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
