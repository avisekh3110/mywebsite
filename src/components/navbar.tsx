import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between  lg:px-24 md:px-18 sm:px-12 px-8 font-semibold duration-300">
      <div className="text-primary  bg-secondary pt-8 px-8 pb-2 lg:text-4xl md:text-3xl text-2xl font-extrabold select-none duration-300">
        AVISEKH.
      </div>
      <div className="hidden sm:flex text-white flex-row lg:gap-14 gap-6 pt-10 md:pr-20 duration-300">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/resume"}>RESUME</NavLink>
        <NavLink to={"/works"}>WORKS</NavLink>
      </div>
      <button className="hidden lg:block text-white mt-8 py-2 px-8 rounded-lg bg-secondary hover:bg-transparent border border-secondary duration-300 ">
        UNATIMA
      </button>
    </nav>
  );
}

export default Navbar;
