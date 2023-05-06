import React from "react";

export default function MiniAbout() {
  return (
    <div className="lg:px-12 md:px-24 sm:px-20 px-10 md:pt-6 sm:pt-4 pt-2 flex flex-col lg:gap-3 md:gap-1 sm:gap-1 gap-1 duration-500">
      <div>
        <div className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-extrabold text-quarternary-a duration-300">
          I'M A
        </div>
        <div className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-extrabold text-secondary duration-300">
          PROGRAMMER
        </div>
      </div>
      <div className="lg:text-2xl md:text-xl sm:text-xl text-xl font-bold text-quarternary-a duration-300">
        TURNING COFFEE INTO CODE IS WHAT I DO . . .
      </div>
      <div className="lg:text-xl md:text-base sm:text-base text-base font-semibold text-quarternary-a duration-300">
        DID YOU KNOW : SPIDER IS THE ONLY WEB DEVELOPER WHO LOVES <br />
        GETTING BUGS ON ITS WEB
      </div>
      <div className="flex lg:pt-12 md:pt-8 sm:pt-8 pt-6 lg:gap-16 md:gap-12 sm:gap-12 gap-10">
        <div className="flex justify-center items-center lg:text-xl md:text-lg sm:text-base text-base font-bold text-primary bg-secondary rounded-full lg:py-2 md:py-1 sm:py-1 py-1 lg:px-8 md:px-6 sm:px-6 px-5 hover:bg-primary-a hover:text-quarternary-a duration-300 border-4 border-secondary">
          HIRE ME
        </div>
        <div className="flex justify-center items-center lg:text-xl md:text-lg sm:text-base text-base font-bold text-quarternary-a border-4 border-secondary rounded-full lg:py-2 md:py-1 sm:py-1 py-1 lg:px-8 md:px-6 sm:px-6 px-5 hover:bg-secondary hover:text-primary-a duration-300">
          RESUME
        </div>
      </div>
    </div>
  );
}
