import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <div className="flex w-1/2 gap-10 justify-end ">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  );
};

export default Navlink;
