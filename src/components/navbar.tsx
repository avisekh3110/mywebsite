// import { useState } from "react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-primary flex flex-row justify-between items-center  lg:px-24 md:px-18 sm:px-12 px-8 font-semibold duration-300">
      <div className=" flex bg-secondary pt-8 px-8 pb-2 lg:text-4xl md:text-3xl text-2xl font-extrabold select-none duration-300">
        <NavLink to={"/"}>AVISEKH</NavLink>
        <div>.</div>
      </div>
      <div className="hidden sm:flex text-white flex-row lg:gap-14 gap-6 pt-10 md:pr-20 duration-300">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return `${
              isActive
                ? "border-b-4 border-secondary"
                : "hover:border-b-4 border-secondary border-dotted duration-75"
            }`;
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to={"/resume"}
          className={({ isActive }) => {
            return `${
              isActive
                ? "border-b-4 border-secondary"
                : "hover:border-b-4 border-secondary border-dotted duration-75"
            }`;
          }}
        >
          RESUME
        </NavLink>
        <NavLink
          to={"/works"}
          className={({ isActive }) => {
            return `${
              isActive
                ? "border-b-4 border-secondary"
                : "hover:border-b-4 border-secondary border-dotted duration-75"
            }`;
          }}
        >
          WORKS
        </NavLink>
      </div>
      <NavLink
        to={"/unatima"}
        className="hidden md:flex text-white mt-8 py-2 px-8 rounded-lg bg-secondary hover:bg-transparent border border-secondary duration-300 "
      >
        UNATIMA
      </NavLink>
    </nav>
  );
}

export default Navbar;
