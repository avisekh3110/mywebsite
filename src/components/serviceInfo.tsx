export default function ServiceInfo() {
  type srv = {
    color: String;
    title: String;
    desc: String;
    tech: String[];
  };
  const service: srv[] = [
    {
      color: "blue",
      title: "Frontend Development",
      desc: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      tech: ["React", "TypeScript", "Tailwind", "Next.js"],
    },
    {
      color: "green",
      title: "Backend Development",
      desc: "Creating robust server-side applications, APIs, and database integrations.",
      tech: ["Node.js", "Express", "MongoDB", "MySQL"],
    },
    {
      color: "pink",
      title: "UI/UX Design",
      desc: "Creating intuitive and visually appealing user interfaces and experiences.",
      tech: ["Figma", "Tailwind", "Framer", "Photoshop"],
    },
  ];
  return (
    <div className="flex flex-col w-[50rem] h-full items-center justify-center ">
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-center items-center text-3xl hover:tracking-widest duration-300">
          S E R V I C E S
        </div>
        <div className="flex justify-center items-center font-light">
          I offer a range od services to help businesses build and optimize
          their digital presence.
        </div>
      </div>
      <div className="flex gap-6 flex-wrap justify-center py-10">
        {service.map((element) => {
          let color = element.color;
          return (
            <div className="ring-1 ring-secondary ring-opacity-50 rounded-md h-72 w-96 p-4 flex flex-col gap-2 text-gray-300 hover:scale-105 duration-300 ease-out hover:bg-indigo-950">
              <div
                className={`bg-${color}-400 h-[3.5rem] w-[3.5rem] rounded-md`}
              ></div>
              <div className="text-xl">{element.title}</div>
              <div className="font-normal">{element.desc}</div>
              <hr className="w-full border-t-gray-300" />
              <div className="flex flex-wrap  gap-2 py-2">
                {element.tech.map((i) => {
                  return (
                    <div className="ring-1 ring-white ring-opacity-30 px-2 py-1 rounded-md tracking-wider font-mono font-light">
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
