// import React from 'react'
import resume from "/resume.png";

// import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import MyDocument from "../components/resumePage";

const RESUME_PDF = "https://avisekh.vercel.app/resume.pdf";

export default function Resume() {
  const downloadFile = (url: string) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName: string = url.split("/").pop() || "default_filename";
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="overflow-hidden bg-primary h-full w-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="bg-slate-700 flex flex-col  p-10 justify-center items-center rounded-md w-[48rem] lg:my-32 my-20 gap-8">
        <img src={resume} alt="My Resume" width={600} className="rounded-md" />
        <button
          className="mt-10 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out hover:animate-"
          onClick={() => {
            downloadFile(RESUME_PDF);
          }}
        >
          Download Resume
        </button>
      </div>
      <Footer />
    </div>
  );
}
