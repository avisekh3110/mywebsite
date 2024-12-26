import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Cube from "../components/cube";
import SoicalBar from "../components/soicalBar";
import Recent from "../components/recent";
import AboutMe from "../components/aboutme";
import Footer from "../components/footer";
import Testimonial from "../components/testimonial";
// import MouseTrail from "../components/mousetrail";

function Home() {
  return (
    <div className="bg-black h-max hidden md:flex flex-col w-screen">
      {/* <MouseTrail /> */}
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="lg:py-48 md:py-32 py-14 lg:pl-48 md:pl-32 pl-14 duration-300">
          <div className="text-quarternary-a lg:text-5xl md:text-4xl text-3xl font-bold">
            I'M AVISEKH
          </div>
          <div className="text-secondary lg:text-6xl md:text-5xl text-4xl sm:font-extrabold font-bold hover:tracking-widest duration-700 ease-in-out">
            PROGRAMMER
          </div>
          <div className="text-quarternary-a lg:text-2xl md:text-xl   text-lg font-bold">
            TURNING COFFEE INTO CODE IS WHAT I DO...
          </div>
          <div className="text-quarternary-a lg:text-xl text-lg font-mono font-bold pt-4 pb-10">
            DID YOU KNOW : SPIDER IS THE ONLY WEB DEVELOPER
            <br /> WHO LOVES GETTING BUGS ON ITS WEB
          </div>
          <div className="text-quarternary-a w-fit py-2 px-6 text-lg font-bold rounded-lg bg-gradient-to-br from-secondary via-secondary to-fuchsia-500 duration-300 ">
            <NavLink to="/contact">LET'S CONNECT</NavLink>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <Cube />
        </div>
        <SoicalBar />
      </div>
      <Recent />
      <AboutMe />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
