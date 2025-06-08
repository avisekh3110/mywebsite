import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectPreview from "../components/projectPreview";
import trackotiny from "/trackotiny.png";
import trackoexpense from "/trackoexpense.png";
import todoturu from "/todoturu.png";
import ExtensionComp from "../components/extensioncomp";

export default function Works() {
  type Exp = {
    no: number;
    name: string;
    position: string;
    duration: string;
    description: string;
  };
  const expObj: Exp[] = [
    {
      no: 1,
      name: "Company1",
      position: "Software developer",
      duration: "2020-2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, mollitia facere. Laudantium quod fuga dolores expedita, a odio explicabo, corporis cupiditate modi voluptates, incidunt quas ipsum iste impedit doloribus labore.",
    },
    {
      no: 2,
      name: "Company2",
      position: "Android Developer",
      duration: "2021-2023",
      description:
        "em ipsum dolor sit amet, consectetur adipisicin explicabo, corporis cupiditate modi voluptates, incidunt quas ipsum iste impeditLorg elit. Incidunt, mollitia facere. Laudantium quod fuga dolores expedita, a odio doloribus labore.",
    },
    {
      no: 3,
      name: "Company3",
      position: "Network Engineer",
      duration: "2023-Present",
      description:
        "lit. Incidunt, mollitia facere. Laudantium quod fuga dolores expedita, a odio explicLorem ipsum dolor sit amet, consectetur adipisicing eabo, corporis cupiditate modi voluptates, incidunt quas ipsum iste impedit doloribus labore.",
    },
  ];

  type Proj = {
    name: String;
    duration: String;
    description: String;
    techstack: String[];
    link: string;
    image: string;
  };

  const projObj: Proj[] = [
    {
      name: "TrackOtiny",
      duration: "2023-2024",
      description:
        "This is website which will be integrated with IOT to track location of GPS module controlled by ESP32 dev module. This project was assigned by CHANDIGARH UNIVERSITY in Independent Project under a topic of Child Tracking System. This uses vite js and tailwind in frontend and node js and express in backend (which further may get upgraded).",
      techstack: ["react", "tailwindCSS", "react-map-gl", "vite"],
      link: "https://trackotiny.vercel.app/",
      image: trackotiny,
    },
    {
      name: "TrackOExpense",
      duration: "2025-Present",
      description:
        "TrackoExpense is a simple and efficient expense tracking application built with React and Vite. This project aims to help users manage their expenses by providing an intuitive interface and seamless user experience.",
      techstack: ["react", "tailwindCSS", "recharts", "vite", "react-toastify"],
      link: "https://trackoexpense.vercel.app/",
      image: trackoexpense,
    },
    {
      name: "Todo_turu",
      duration: "2022-2023",
      description:
        "It is a Todo List web site which will help you jotting your daily work down. Enjoy!!",
      techstack: ["react", "tailwindCSS", "express", "vite", "axios"],
      link: "https://todo-turu.vercel.app/",
      image: todoturu,
    },
  ];

  const [ActiveExp, setActiveExp] = useState<Exp>(expObj[expObj.length - 1]);
  console.log(ActiveExp);

  return (
    <div className=" bg-primary h-full">
      <Navbar />
      <div className=" flex h-full text-white font-bold flex-col items-center gap-10">
        <div className=" h-96 w-[44rem] mt-40 flex flex-col gap-4">
          <div className=" h-1/6 w-full flex justify-start items-center p-4 text-3xl">
            MY WORK EXPERIENCE
          </div>
          <div className="h-4/6 w-full flex">
            <div className=" w-1/4 p-4 flex gap-4">
              <div className="h-full w-1 rounded-lg bg-white duration-500">
                {expObj.reverse().map((element: any) => {
                  return (
                    <div
                      className={`h-1/${expObj.length} rounded-lg ${
                        element.no == ActiveExp.no
                          ? "bg-secondary"
                          : "bg - white duration-500"
                      }`}
                    ></div>
                  );
                })}
              </div>
              <div className=" w-40 h-full flex flex-col gap-4 py-4 duration-500">
                {expObj.map((element: any) => {
                  return (
                    <button
                      onClick={() => {
                        setActiveExp(element);
                      }}
                      className={`h-1/${expObj.length} w-full ${
                        element.no == ActiveExp.no
                          ? "text-secondary"
                          : "text-quarternary-a"
                      } flex justify-center items-center duration-500`}
                    >
                      {element.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className=" w-3/4 flex flex-col py-4">
              <div className=" w-full h-1/4 flex flex-col duration-500">
                <div className="flex  h-2/3 text-xl justify-start items-center px-4 duration-500">
                  {ActiveExp.position} @{ActiveExp.name}
                </div>
                <div className="flex h-1/3 justify-start items-center px-4 text-slate-400 font-mono duration-500">
                  {ActiveExp.duration}
                </div>
              </div>
              <div className="h-3/4 w-full p-4 flex justify-start text-secondary duration-500">
                {ActiveExp.description}
              </div>
            </div>
          </div>
        </div>
        <ExtensionComp />
        <div className="h-full w-[50rem]  flex flex-col gap-6">
          <div className=" flex items-center justify-center text-3xl hover:tracking-widest duration-300 ">
            P R O J E C T S
          </div>
          <div className="h-full w-full flex flex-col gap-4">
            {projObj.map((element: any) => {
              return ProjectPreview(element);
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
