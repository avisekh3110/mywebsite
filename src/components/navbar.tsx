import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="text-primary flex flex-row justify-between items-center  lg:px-24 md:px-18 sm:px-12 px-8 font-semibold duration-300 w-full ">
      <div
        className={`flex bg-secondary pt-8 px-8 pb-2 lg:text-4xl text-primary md:text-3xl text-2xl font-extrabold select-none duration-300`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <NavLink to={"/"}>AVISEKH</NavLink>
        <div className={`${hovered && "text-quarternary-a"}`}>.</div>
      </div>
      <div className=" hidden sm:flex text-quarternary-a lg:gap-14 gap-6 pt-10 md:pr-2 duration-300">
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
          to={"/works"}
          className={({ isActive }) => {
            return `${
              isActive
                ? "border-b-4 border-secondary"
                : "hover:border-b-4 border-secondary border-dotted duration-75"
            }`;
          }}
        >
          EXPERIENCE
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
      </div>
      <NavLink
        to={"/unatima"}
        className="hidden md:flex text-quarternary-a mt-8 py-2 px-8 rounded-lg bg-secondary hover:bg-transparent border border-secondary duration-300 ease-out "
      >
        UNATIMA
      </NavLink>
    </nav>
  );
}

export default Navbar;
