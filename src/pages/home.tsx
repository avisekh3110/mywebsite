import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Cube from "../components/cube";
import SoicalBar from "../components/soicalBar";
import Recent from "../components/recent";
import AboutMe from "../components/aboutme";
import Footer from "../components/footer";
import Testimonial from "../components/testimonial";
import RotatingText from "../components/rotatingText";
import phoneDesktop from "/phoneDesktop.svg";
import { useEffect, useState } from "react";
// import MouseTrail from "../components/mousetrail";

function Home() {
  const [setup, setSetup] = useState("");
  const [pucline, setPunchline] = useState("");

  useEffect(() => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=twopart")
      .then((element) => {
        return element.json();
      })
      .then((element) => {
        console.log(element);
        setSetup(element.setup);
        setPunchline(element.delivery);
      });
  }, []);

  return (
    <>
      <div className="bg-primary md:hidden flex flex-col h-[100vh] w-[100vw] text-gray-200 justify-center items-center font-mono font-bold text-lg">
        <img src={phoneDesktop} alt="" width={100} height={100} />
        <div>Please... Switch to Desktop Mode!!</div>
      </div>
      <div className="bg-primary h-max hidden md:flex flex-col w-screen">
        {/* <MouseTrail /> */}
        <Navbar />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="lg:py-48 md:py-32 py-14 lg:pl-48 md:pl-32 pl-14 duration-300">
            <div className="text-quarternary-a lg:text-5xl md:text-4xl text-3xl font-bold">
              I'M AVISEKH
            </div>
            <RotatingText
              texts={["PROGRAMMER", "UX/UI DESIGNER", "ARTIST", "EDITOR"]}
              mainClassName=" text-secondary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start lg:text-5xl md:text-4xl text-3xl font-extrabold rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <div className="text-quarternary-a lg:text-2xl md:text-xl   text-lg font-bold">
              TURNING COFFEE INTO CODE IS WHAT I DO...
            </div>
            <div className="text-quarternary-a lg:text-xl text-lg font-mono font-bold pt-4 pb-10">
              {!setup ? "Loading..." : setup}
              <br /> {!pucline ? "Loading..." : pucline}
            </div>
            <NavLink
              to="/contactPage"
              className="text-quarternary-a w-fit py-3 px-8 text-lg font-bold rounded-md bg-gradient-to-br from-secondary via-secondary to-fuchsia-500 duration-300"
            >
              LET'S CONNECT
            </NavLink>
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
    </>
  );
}

export default Home;
