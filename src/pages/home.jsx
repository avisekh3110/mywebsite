import React from "react";
import Navbar from "../components/navbar";
import MiniAbout from "../components/miniabout";
// import ImgNsocial from "../components/imgandsocial";
import ViewNscrldwn from "../components/viewnscrldwn";

function Home() {
  return (
    <div>
      <div className="bg-primary-a min-h-screen min-w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex items-center pt-10">
          <ViewNscrldwn />
          <MiniAbout />
          {/* <ImgNsocial /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
