import TechStackRow from "./techStackRow";

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
      <div className="flex flex-col gap-3 h-full w-full bg-gradient-to-r from-primary via-secondary to-primary justify-around rounded-md p-4 py-10 items-center ease-out">
        {techstack.map((element: any) => {
          return TechStackRow(element);
        })}
      </div>
    </div>
  );
}

export default Techstack;
