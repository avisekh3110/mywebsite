import React from "react";
import dotdesign from "/assets/dotdesign5.png";
import eye from "/assets/eyeicon.png";
function ViewNscrldwn() {
  return (
    <div className=" hidden lg:block relative duration-500">
      <div className=" absolute ml-1 mt-3 z-10 flex flex-col w-full py-1 px-3 items-center text-center ">
        <div className="flex flex-col w-fit pb-1 px-4 bg-primary-a justify-center items-center">
          <img src={eye} alt="ANKHE TERI" className="w-10" />
          <div className="text-white tracking-[0.2rem] text-base font-extrabold">
            10 <br />
            VIEWS
          </div>
        </div>
      </div>
      <img className="sticky w-40 " src={dotdesign} alt="Dot Design" />

      <div className="-z-10 -rotate-90 text-white tracking-[0.2rem] text-xl ">
        SCROLL DOWN
      </div>
    </div>
  );
}

export default ViewNscrldwn;
