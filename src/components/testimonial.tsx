import { Link } from "react-router-dom";
import testi1 from "/testi1.jpg";
import testi2 from "/testi2.jpg";

export default function Testimonial() {
  return (
    <div className=" flex flex-col justify-between  h-[32rem] mb-20 gap-6">
      <div className=" h-1/4 flex flex-col justify-center items-center">
        <div className="text-8xl text-secondary opacity-40 font-extrabold">
          CONNECTIONS
        </div>
        <div className="font-bold text-white tracking tracking-widesest text-xl absolute transform translate-y-2 translate-x-3">
          TESTIMONIALS
        </div>
      </div>
      <div className="bg-gradient-to-l from-secondary to-purple-900 h-3/4 flex justify-center items-center gap-6 px-4">
        <div className="h-5/6 w-80 flex items-end">
          <img
            src={testi1}
            alt="Sample"
            // height="20px"
            // width="20px0"
            className="absolute bg-white h-20 w-20 -translate-y-52 translate-x-4 rounded-full ring-gray-500 ring"
          />
          <div className="bg-white h-5/6 flex flex-col justify-center rounded-md ">
            <Link
              to={
                "https://www.linkedin.com/in/anubhav-yadav-9b8408207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
              className=" flex w-full justify-end py-1 pr-8 text-lg font-bold"
            >
              Anubhav Yadav
            </Link>
            <div className="flex p-4 text-center font-mono font-semibold text-gray-700">
              "Avisekh is the most reliable person to work with, be it night or
              day he is the one i can trust with any work. Be it designing or
              Winning a hackathon, Sabi is my no. 1 choice."
            </div>
          </div>
        </div>
        <div className="h-5/6 w-80 flex items-end">
          <img
            src={testi2}
            alt="Sample"
            // height="20px"
            // width="20px0"
            className="absolute bg-white h-20 w-20 -translate-y-52 translate-x-4 rounded-full ring-gray-500 ring"
          />
          <div className="bg-white h-5/6 flex flex-col justify-center rounded-md w-full">
            <Link
              to={"https://www.linkedin.com/in/anuragkumar008/"}
              target="_blank"
              className=" flex w-full justify-end py-1 pr-8 text-lg font-bold"
            >
              Anurag Kumar
            </Link>
            <div className="flex p-4 text-center font-mono font-semibold text-gray-700 w-full">
              "Avisekh is incredibly dedicated and hardworking as a web
              developer. I truly admire his ability to tackle complex
              challenges, stay committed to his craft."
            </div>
          </div>
        </div>
        <div className="h-5/6 w-80 flex items-end">
          <img
            src={""}
            alt="Sample"
            // height="20px"
            // width="20px0"
            className="absolute bg-white h-20 w-20 -translate-y-52 translate-x-4 rounded-full ring-gray-500 ring"
          />
          <div className="bg-white h-5/6 flex flex-col justify-center rounded-md ">
            <Link
              to={
                "https://www.linkedin.com/in/anubhav-yadav-9b8408207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
              className=" flex w-full justify-end py-1 pr-8 text-lg font-bold"
            >
              Testi3
            </Link>
            <div className="flex p-4 text-center font-mono font-semibold text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nisi
              odit nemo fugiat ut debitis praesentium adipisci repellat quae,
              sequi ea unde deleniti pariatur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
