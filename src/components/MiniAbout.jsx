import React from "react";

export default function MiniAbout() {
  return (
    <div className="px-48 pt-40 flex flex-col gap-4">
      <div>
        <div className="text-6xl font-extrabold text-quarternary-a">I'M A</div>
        <div className="text-6xl font-extrabold text-secondary">PROGRAMMER</div>
      </div>
      <div className="text-3xl font-bold text-quarternary-a">
        TURNING COFFEE INTO CODE IS WHAT I DO . . .
      </div>
      <div className="text-2xl font-semibold text-quarternary-a">
        DID YOU KNOW : SPIDER IS THE ONLY WEB DEVELOPER WHO LOVES <br />
        GETTING BUGS ON ITS WEB
      </div>
      <div className="flex pt-16 gap-16">
        <div className="flex justify-center items-center text-2xl font-bold text-primary bg-secondary rounded-full py-2 px-10 hover:bg-primary-a hover:text-quarternary-a duration-300 border-4 border-secondary">
          HIRE ME
        </div>
        <div className="flex justify-center items-center text-2xl font-bold text-quarternary-a border-4 border-secondary rounded-full py-2 px-10  hover:bg-secondary hover:text-primary-a duration-300">
          RESUME
        </div>
      </div>
    </div>
  );
}
