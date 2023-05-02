import { useState } from "react";
import Navbar from "./components/Navbar";
import MiniAbout from "./components/MiniAbout";
import ImgNsocial from "./components/ImgNsocial";
import ViewNscrldwn from "./components/viewNscrldwn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white bg-[#13101B] flex flex-col min-h-screen justify-center items-center">
      <div className="font-mono font-semibold text-2xl text-center">
        Forget about this URL
      </div>
      <div className=" font-mono font-semibold text-2xl text-center">
        This is Mine
      </div>
      <div className="font-mono font-semibold text-2xl text-center">
        ~Avisekh sabi
      </div>
      {/* <Navbar /> */}
      {/* <ViewNscrldwn /> */}
      {/* <MiniAbout /> */}
      {/* <ImgNsocial /> */}
    </div>
  );
}

export default App;
