import github from "/assets/github.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";
import youtube from "/assets/youtube.png";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Cube from "../components/cube";
// import MouseTrail from "../components/mousetrail";

function Home() {
  return (
    <div className="bg-primary h-screen">
      {/* <MouseTrail /> */}
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="lg:p-48 md:p-32 p-14 duration-300">
          <div className="text-quarternary-a lg:text-5xl md:text-4xl text-3xl font-bold">
            I'M A
          </div>
          <div className="text-secondary lg:text-6xl md:text-5xl text-4xl sm:font-extrabold font-bold">
            PROGRAMMER
          </div>
          <div className="text-quarternary-a lg:text-2xl md:text-xl   text-lg font-bold">
            TURNING COFFEE INTO CODE IS WHAT I DO...
          </div>
          <div className="text-quarternary-a lg:text-lg text-base font-bold pt-4 pb-10">
            DID YOU KNOW : SPIDER IS THE ONLY WEB DEVELOPER
            <br /> WHO LOVES GETTING BUGS ON ITS WEB
          </div>
          <NavLink
            to="/contact"
            className="hover:text-quarternary-a  bg-secondary py-2 px-6  text-lg font-bold rounded-lg hover:bg-transparent border border-secondary ease-out duration-300 "
          >
            LET'S CONNECT
          </NavLink>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <Cube />
        </div>
        <div className="select-none justify-around bg-quarternary-a bg-opacity-20 p-4 rounded-xl flex sm:flex-col self-center mr-10 gap-10 sm:gap-5">
          <Link
            to={"https://github.com/avisekh3110"}
            target="_blank"
            title="Github"
          >
            <img src={github} width="25" height="25" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/avisekh-sabi-660603246/"}
            target="_blank"
            title="LinkedIn"
          >
            <img src={linkedin} width="25" height="25" />
          </Link>
          <Link
            to={"https://www.instagram.com/avisekh_sabi/"}
            target="_blank"
            title="Instagram"
          >
            <img src={instagram} width="25" height="25" />
          </Link>
          <Link
            to={"https://www.youtube.com/@avisekhartzz"}
            target="_blank"
            title="Youtube"
          >
            <img src={youtube} width="25" height="25" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
