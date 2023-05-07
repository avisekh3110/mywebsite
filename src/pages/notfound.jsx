import React from "react";
// import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-primary-a min-h-screen min-w-screen overflow-x-hidden">
      <div className="bg-primary-600 p-3">{/* <Logo /> */}</div>
      <div className="flex flex-col gap-5 items-center justify-center pt-60">
        <div className="text-4xl text-white font-bold">PAGE NOT FOUND</div>
        <Link to="/">
          <button className="text-white px-4 py-2 rounded-lg bg-slate-800">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
