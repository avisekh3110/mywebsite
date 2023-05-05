import React from "react";

export default function Navbar() {
  return (
    <div className="bg-primary-a flex w-full ">
      <div className="ml-28 mb-2 pb-3 pt-12 p-12 bg-secondary text-4xl font-extrabold">
        AVISEKH.
      </div>
      <div className="pt-12 pl-28 font-bold text-xl text-secondary flex gap-16">
        <div>HOME</div>
        <div>WORK</div>
        <div>RESUME</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}
