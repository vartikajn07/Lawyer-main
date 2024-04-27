import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import Navlink from "./navlink";

const Navbar = () => {
  return (
    <>
      <div className=" w-full flex bg-slate-600 justify-between items-center py-2 px-24">
        <Logo />
        <Navlink />
      </div>
    </>
  );
};

export default Navbar;
