import TechStackSmall from "./techStackSmall";

function TechStackSection(prop: any) {
  return (
    <div className="h-full w-1/4 p-4 flex flex-col items-center font-mono gap-4">
      <div className="font-bold text-quarternary-b text-xl">
        {Object.keys(prop)[0]}
      </div>
      {prop[Object.keys(prop)[0].toString()].map((ele: string) => {
        return TechStackSmall(ele);
      })}
    </div>
  );
}

export default TechStackSection;
