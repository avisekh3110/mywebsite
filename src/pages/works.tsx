import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, mollitia facere. Laudantium quod fuga dolores expedita, a odio explicabo, corporis cupiditate modi voluptates, incidunt quas ipsum iste impedit doloribus labore.",
    },
    {
      no: 3,
      name: "Company3",
      position: "Network Engineer",
      duration: "2023-Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, mollitia facere. Laudantium quod fuga dolores expedita, a odio explicabo, corporis cupiditate modi voluptates, incidunt quas ipsum iste impedit doloribus labore.",
    },
  ];
  const [ActiveExp, setActiveExp] = useState<Exp>(expObj[0]);
  console.log(ActiveExp);

  return (
    <div className=" bg-primary h-screen">
      <Navbar />
      <div className=" flex h-full justify-center text-white font-bold">
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
              <div className=" w-full h-1/4 flex flex-col">
                <div className="flex  h-2/3 text-xl justify-start items-center px-4">
                  {ActiveExp.position} @{ActiveExp.name}
                </div>
                <div className="flex h-1/3 justify-start items-center px-4 text-slate-400 font-mono">
                  {ActiveExp.duration}
                </div>
              </div>
              <div className="h-3/4 w-full p-4 flex justify-start text-secondary">
                {ActiveExp.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
