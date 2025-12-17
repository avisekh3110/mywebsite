import techStackElement from "./techStackElement";

function techStackRow(prop: any) {
  return (
    <div className="flex h-14 w-full lg:w-3/5 bg-primary p-2 rounded-md gap-2">
      <div className="bg-slate-200 flex justify-center items-center w-40 rounded-md font-bold text-md text-slate-700 hover:tracking-wider duration-200 ease-in">
        {Object.keys(prop)[0]}
      </div>
      <div className="flex gap-2 items-center justify-start">
        {prop[Object.keys(prop)[0].toString()].map((ele: string) => {
          return techStackElement(ele);
        })}
      </div>
    </div>
  );
}

export default techStackRow;
