import TechStackSection from "./techStackSection";

function Techstack() {
  let techstack: any = [
    {
      Frontend: [
        "Html5",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind-CSS",
        "Typescript",
      ],
    },
    {
      Backend: [
        "Nodejs",
        "Expressjs",
        "MySQL",
        "MongoDB",
        "WebSocket",
        "WebRTC",
      ],
    },
    { Others: ["p5Js", "ThreeJs", "MapGl", "C/C++", "Python", "Java"] },
    {
      Miscellaneous: [
        "Figma",
        "unity",
        "Googlecloud",
        "VideoEditing",
        "UI/UX",
        "IOT/Arduino",
      ],
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-around items-center ">
      <div className="text-quarternary-a p-4 font-bold text-2xl hover:tracking-widest duration-300 ">
        T E C H - S T A C K
      </div>
      <div className="flex h-full w-full bg-slate-700 justify-around rounded-md">
        {techstack.map((element: any) => {
          return TechStackSection(element);
        })}
      </div>
    </div>
  );
}

export default Techstack;
