import { Link } from "react-router-dom";

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
        <div className="h-5/6 w-80 bg-white flex justify-center items-center flex-col text-justify p-4 gap-2">
          <div className="font-bold font-mono text-lg overflow-scroll ">
            "Avisekh is the most reliable person to work with, be it night or
            day he is the one i can trust with any work. Be it designing or
            Winning a Hacathon Sabi is my number one choice."
          </div>
          <Link
            to={
              "https://www.linkedin.com/in/anubhav-yadav-9b8408207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            target="_blank"
            className="text-xl font-bold  w-full flex justify-center items-center"
          >
            ~ Anubhav Yadav
          </Link>
        </div>
        <div className="h-5/6 w-80 bg-white"></div>
        <div className="h-5/6 w-80 bg-white"></div>
      </div>
    </div>
  );
}
