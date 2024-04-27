import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const Layouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
