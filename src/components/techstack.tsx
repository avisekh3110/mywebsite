function Techstack() {
  let frontend = ["Html5", "CSS", "JavaScript", "React", "Tailwind-CSS"];
  let backend = ["Nodejs", "Expressjs", "MySQL", "MongoDB", "WebSocket"];
  let others = ["p5Js", "ThreeJs", "MapGl", "C/C++", "Python", "Java"];
  let miscellaneous = [
    "Figma",
    "unity",
    "Googlecloud",
    "VideoEditing",
    "UI/UX",
    "IOT/Arduino",
  ];

  return (
    <div className="h-96 w-full flex flex-col justify-around items-center ">
      <div className="text-quarternary-a font-bold text-2xl hover:tracking-widest duration-300 ">
        T E C H - S T A C K
      </div>
      <div className="flex h-80 gap-4 lg:gap-8 w-full justify-around">
        <div className="Frontend h-full w-1/4 bg-gray-700 py-4 rounded-md flex flex-col  items-center font-mono gap-4">
          <div className="font-bold text-quarternary-b text-xl">Frontend</div>
          <ul className="flex flex-col gap-3 w-full px-3">
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {frontend[0]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {frontend[1]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {frontend[2]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {frontend[3]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {frontend[4]}
            </li>
          </ul>
        </div>
        <div className="Frontend h-full w-1/4 bg-gray-700 py-4 rounded-md flex flex-col  items-center font-mono gap-4">
          <div className="font-bold text-quarternary-b text-xl">Backend</div>
          <ul className="flex flex-col gap-3 w-full px-3">
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {backend[0]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {backend[1]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {backend[2]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {backend[3]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {backend[4]}
            </li>
          </ul>
        </div>
        <div className="Frontend h-full w-1/4 bg-gray-700 py-4 rounded-md flex flex-col  items-center font-mono gap-4">
          <div className="font-bold text-quarternary-b text-xl">Other</div>
          <ul className="flex flex-col gap-3 w-full px-3">
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {others[0]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {others[1]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {others[2]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {others[3]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {others[4]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {others[5]}
            </li>
          </ul>
        </div>
        <div className="Frontend h-full w-1/4 bg-gray-700 py-4 rounded-md flex flex-col  items-center font-mono gap-4">
          <div className="font-bold text-quarternary-b text-xl">
            Miscellaneous
          </div>
          <ul className="flex flex-col gap-3 w-full px-3">
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {miscellaneous[0]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {miscellaneous[1]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {miscellaneous[2]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {miscellaneous[3]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {miscellaneous[4]}
            </li>
            <li className="bg-slate-900 py-1 px-2 flex justify-center items-center rounded-full text-md text-white font-sans font-medium hover:tracking-widest duration-300 ease-in-out">
              {miscellaneous[5]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
