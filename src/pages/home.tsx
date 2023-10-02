import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="bg-primary h-screen">
      <Navbar />
      <div>
        <div className="lg:p-48 md:p-32 p-14 duration-300">
          <div className="text-quarternary-a lg:text-5xl md:text-4xl text-3xl font-bold">
            I'M A
          </div>
          <div className="text-secondary lg:text-6xl md:text-5xl text-4xl lg:font-extrabold font-bold">
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
            className="hover:text-quarternary-a  bg-secondary py-2 px-6  text-lg font-bold rounded-lg hover:bg-transparent border border-secondary duration-300 "
          >
            LET'S CONNECT
          </NavLink>
        </div>
        <div>{/* <Cube /> */}</div>
      </div>
    </div>
  );
}

export default Home;
