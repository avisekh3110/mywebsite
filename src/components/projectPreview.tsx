import { Link } from "react-router-dom";

export default function ProjectPreview(prop: any) {
  return (
    <div className="bg-black p-4 flex flex-col gap-6 font-mono">
      <div className="flex flex-col ">
        <div className="text-2xl text-white">{prop.name}</div>
        <div className="text-base text-slate-400 font-normal">
          {prop.duration}
        </div>
      </div>
      <div>{prop.description}</div>
      <div className="hover:scale-105 duration-300 h-full rounded-md">
        <img
          src={prop.image}
          alt="Website preview"
          className=" rounded-md ring-1 ring-slate-700"
        />
      </div>
      <div className="flex gap-2">
        {prop.techstack.map((element: string) => {
          return (
            <div className="font-thin text-sm ring-1 ring-slate-600 rounded-md px-4 py-1 text-slate-200">
              {element}
            </div>
          );
        })}
      </div>
      <Link
        to={prop.link}
        target="_blank"
        className="bg-secondary rounded-md flex w-fit py-1 px-6 text-lg hover:bg-primary ring-1 ring-secondary duration-300 ease-out"
      >
        Try it out →
      </Link>
      <hr className="w-full mt-4" />
    </div>
  );
}
