// import React from 'react'
import resume from "/resume.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Resume() {
  return (
    <div className="overflow-hidden bg-primary h-max w-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="bg-slate-700 flex flex-col  p-10 justify-center items-center rounded-md w-[48rem] lg:my-32 my-20 gap-8">
        <img src={resume} alt="My Resume" width={600} className="rounded-md" />
        <a
          href="/AvisekhResume.pdf"
          download
          className="mt-10 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out hover:animate-"
        >
          Download Resume
        </a>
      </div>
      <Footer />
    </div>
  );
}
