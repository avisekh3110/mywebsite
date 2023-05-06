import React from "react";

export default function Navbar() {
  return (
    <div className="bg-primary-a flex w-full ">
      <div className="lg:ml-28 md:ml-20 sm:ml-10 ml-6 lg:mb-2 md:mb-1 sm:mb-0  lg:pb-3 md:pb-2 sm:pb-1 pb-0.5 lg:pt-9 md:pt-8 sm:pt-6 pt-4 lg:px-10 md:px-8 sm:px-6 px-4 bg-secondary lg:text-3xl md:text-3xl sm:text-2xl text-lg font-extrabold duration-300">
        AVISEKH.
      </div>
      <div className="lg:pt-12 md:pt-9 sm:pt-7 pt-3 lg:pl-24 md:pl-16 sm:pl-10 pl-8 font-bold md:text-lg sm:text-base text-base text-secondary flex lg:gap-16 md:gap-10 sm:gap-9 gap-4 duration-300">
        <div>HOME</div>
        <div>WORK</div>
        <div>RESUME</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}
