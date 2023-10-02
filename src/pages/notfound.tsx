import { NavLink } from "react-router-dom";
export default function Notfound() {
  return (
    <div className="bg-primary h-screen flex flex-col justify-center items-center gap-2">
      <div className="text-white font-extrabold text-9xl">404!</div>
      <div className="text-white font-extrabold">PAGE NOT FOUND</div>
      <div className="text-white font-light flex flex-col items-center">
        <div>The Page you are looking for might have been removed</div>
        <div>had its name changed or is temporarily unavailable.</div>
      </div>
      <NavLink
        className="bg-secondary mt-8 px-5 py-3 rounded-xl font-bold border border-secondary hover:bg-transparent hover:text-quarternary-a duration-300"
        to={"/"}
      >
        BACK TO HOMEPAGE
      </NavLink>
    </div>
  );
}
